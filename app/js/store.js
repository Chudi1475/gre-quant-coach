/* store.js — all persistent state. Single source of truth, saved to localStorage. */
(function () {
  const GRE = window.GRE;
  const KEY = "gre_quant_state_v2";
  const PACE_SEC = 105; // ~1.75 min/question target

  function nowISO() { return new Date().toISOString(); }
  function todayISO() { return new Date().toISOString().slice(0, 10); }

  function freshTopics() {
    const t = {};
    for (const key in GRE.SEED.topics) {
      const [area, title] = GRE.SEED.topics[key];
      t[key] = {
        key, area, title,
        attempts: 0, correct: 0,
        avgSeconds: null,
        lastSeen: null,
        missStreak: 0, correctStreak: 0,
        leech: false,
        learnedAt: null   // when /learn was completed
      };
    }
    return t;
  }

  function freshState() {
    return {
      version: 2,
      settings: {
        apiKey: "",
        model: "claude-opus-4-8",
        track: GRE.SEED.profile.track,
        targetDate: GRE.SEED.profile.targetDate
      },
      profile: {
        setupDate: GRE.SEED.profile.setupDate,
        targetBand: GRE.SEED.profile.targetBand
      },
      topics: freshTopics(),
      errorLog: [],     // { ts, topic, area, type, stem, yourAnswer, answerLabel, trap }
      sessions: [],     // { ts, mode, summary, count, correct }
      history: [],      // recent attempts { ts, topic, correct, seconds, type }
      lastEstimate: null,
      lastAutoExport: null  // YYYY-MM-DD of last daily snapshot
    };
  }

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return freshState();
      const parsed = JSON.parse(raw);
      // backfill any new topics added to the seed
      const fresh = freshTopics();
      for (const k in fresh) if (!parsed.topics[k]) parsed.topics[k] = fresh[k];
      // ensure shape
      const base = freshState();
      parsed.settings = Object.assign(base.settings, parsed.settings || {});
      parsed.errorLog = parsed.errorLog || [];
      parsed.sessions = parsed.sessions || [];
      parsed.history = parsed.history || [];
      return parsed;
    } catch (e) {
      console.warn("state load failed, starting fresh", e);
      return freshState();
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { console.error("save failed", e); }
  }

  // ---- accessors ----
  function get() { return state; }
  function settings() { return state.settings; }
  function topics() { return state.topics; }
  function topic(k) { return state.topics[k]; }
  function hasKey() { return !!(state.settings.apiKey && state.settings.apiKey.trim()); }

  function setSettings(patch) {
    Object.assign(state.settings, patch);
    save();
  }

  // ---- stats per topic ----
  function accuracy(t) { return t.attempts ? t.correct / t.attempts : null; }

  // measured mastery 0..100, blends accuracy, pace, and confidence (attempt count)
  function mastery(t) {
    if (!t.attempts) return null;
    const acc = t.correct / t.attempts;
    let m = acc * 100;
    // pace penalty: slow topics aren't mastered even if accurate
    if (t.avgSeconds && t.avgSeconds > PACE_SEC * 1.35) m *= 0.85;
    // confidence: few attempts -> pull toward 60 (uncertain)
    const conf = Math.min(1, t.attempts / 6);
    m = m * conf + 60 * (1 - conf) * (acc >= 0.5 ? 1 : 0.7);
    if (t.leech) m = Math.min(m, 45);
    return Math.round(m);
  }

  // priority for spaced repetition (higher = drill sooner)
  function priority(t) {
    let p = 0;
    if (t.leech) p += 100;
    if (!t.attempts) { p += 40; }            // unseen
    else {
      const acc = t.correct / t.attempts;
      p += (1 - acc) * 60;                    // weak topics first
      if (acc < 0.7) p += 20;
    }
    // recency: staler -> higher
    if (t.lastSeen) {
      const days = (Date.now() - new Date(t.lastSeen).getTime()) / 86400000;
      p += Math.min(25, days * 3);
    } else p += 15;
    // if learned but not drilled, nudge up
    if (t.learnedAt && t.attempts < 3) p += 15;
    return p;
  }

  // pick N topic keys for a drill, optional area filter, weighted by priority
  function pickTopics(n, opts) {
    opts = opts || {};
    // area-balanced selection for full sections / diagnostics
    if (opts.stratify && !opts.area && !opts.onlyLeeches) {
      const areas = GRE.SEED.areas;
      const per = Math.floor(n / areas.length);
      const extra = n - per * areas.length;
      const ranked = {};
      const areaP = areas.map(a => {
        const ts = Object.values(state.topics).filter(t => t.area === a);
        ranked[a] = ts.map(t => ({ k: t.key, p: priority(t) + Math.random() * 8 }))
                      .sort((x, y) => y.p - x.p).map(x => x.k);
        return { a, avgP: ts.reduce((s, t) => s + priority(t), 0) / (ts.length || 1) };
      }).sort((x, y) => y.avgP - x.avgP);
      const alloc = {}; areas.forEach(a => alloc[a] = per);
      for (let i = 0; i < extra; i++) alloc[areaP[i % areas.length].a]++;
      const out = [];
      areas.forEach(a => { for (let i = 0; i < alloc[a] && ranked[a].length; i++) out.push(ranked[a][i % ranked[a].length]); });
      return out.slice(0, n);
    }
    let keys = Object.keys(state.topics);
    if (opts.area) keys = keys.filter(k => state.topics[k].area === opts.area);
    if (opts.onlyLeeches) keys = keys.filter(k => state.topics[k].leech);
    const ranked = keys
      .map(k => ({ k, p: priority(state.topics[k]) + Math.random() * 8 }))
      .sort((a, b) => b.p - a.p)
      .map(x => x.k);
    // de-dupe but allow fewer if filtered set is small
    const out = [];
    let i = 0;
    while (out.length < n && ranked.length) {
      out.push(ranked[i % ranked.length]);
      i++;
      if (i > n * 4) break;
    }
    return out.slice(0, n);
  }

  // record one attempt
  function recordAttempt(topicKey, correct, seconds, meta) {
    const t = state.topics[topicKey];
    if (!t) return;
    t.attempts += 1;
    if (correct) { t.correct += 1; t.correctStreak += 1; t.missStreak = 0; }
    else { t.missStreak += 1; t.correctStreak = 0; }
    if (typeof seconds === "number" && seconds > 0) {
      t.avgSeconds = t.avgSeconds == null
        ? Math.round(seconds)
        : Math.round(t.avgSeconds * 0.7 + seconds * 0.3);
    }
    t.lastSeen = nowISO();
    // leech logic: 2 misses in a row -> leech; clear after 2 correct while leech
    if (t.missStreak >= 2) t.leech = true;
    if (t.leech && t.correctStreak >= 2) t.leech = false;

    state.history.unshift({ ts: nowISO(), topic: topicKey, correct, seconds,
      type: meta && meta.type, difficulty: (meta && meta.difficulty) || "medium" });
    state.history = state.history.slice(0, 400);

    if (!correct && meta) {
      state.errorLog.unshift({
        ts: nowISO(), topic: topicKey, area: t.area, type: meta.type,
        stem: meta.stem, yourAnswer: meta.yourAnswer, answerLabel: meta.answerLabel, trap: meta.trap
      });
      state.errorLog = state.errorLog.slice(0, 200);
    }
    save();
  }

  function markLearned(topicKey) {
    const t = state.topics[topicKey];
    if (t) { t.learnedAt = nowISO(); save(); }
  }

  function logSession(mode, summary, count, correct) {
    state.sessions.unshift({ ts: nowISO(), mode, summary, count, correct });
    state.sessions = state.sessions.slice(0, 120);
    save();
  }

  // ---- aggregates ----
  function areaStats() {
    const out = {};
    for (const area of GRE.SEED.areas) {
      let att = 0, cor = 0, mSum = 0, mN = 0, total = 0, seen = 0;
      for (const k in state.topics) {
        const t = state.topics[k];
        if (t.area !== area) continue;
        total++;
        att += t.attempts; cor += t.correct;
        if (t.attempts) { seen++; const m = mastery(t); if (m != null) { mSum += m; mN += 1; } }
      }
      out[area] = {
        attempts: att, correct: cor,
        accuracy: att ? cor / att : null,
        mastery: mN ? Math.round(mSum / mN) : null,
        coverage: total ? seen / total : 0,
        total, seen
      };
    }
    return out;
  }

  function leechList() {
    return Object.values(state.topics).filter(t => t.leech);
  }

  function dueList(limit) {
    return Object.values(state.topics)
      .map(t => ({ t, p: priority(t) }))
      .sort((a, b) => b.p - a.p)
      .slice(0, limit || 8)
      .map(x => x.t);
  }

  // ---- readiness band estimate (rough heuristic; official POWERPREP is the truth) ----
  // Difficulty-weighted and deliberately conservative: a high band must be EARNED on
  // medium/hard items, not run up on easy ones.
  function readiness() {
    let mSum = 0, mN = 0, seen = 0, total = 0, totalAtt = 0;
    for (const k in state.topics) {
      const t = state.topics[k]; total++;
      totalAtt += t.attempts;
      if (t.attempts) { seen++; const m = mastery(t); if (m != null) { mSum += m; mN += 1; } }
    }
    const coverage = total ? seen / total : 0;
    if (totalAtt < 12) {
      return { band: null, low: null, high: null, coverage, attempts: totalAtt,
               note: "Take the diagnostic (or drill ~12+ questions) for a first estimate." };
    }
    // difficulty-weighted accuracy from attempt history
    const dW = { easy: 0.7, medium: 1.0, hard: 1.4 };
    let wCorrect = 0, wTotal = 0, mhSeen = 0, hardSeen = 0;
    state.history.forEach(h => {
      const w = dW[h.difficulty] || 1.0;
      wTotal += w; if (h.correct) wCorrect += w;
      if (h.difficulty === "medium" || h.difficulty === "hard") mhSeen++;
      if (h.difficulty === "hard") hardSeen++;
    });
    const wacc = wTotal ? wCorrect / wTotal : 0;
    const avgMastery = mN ? mSum / mN / 100 : wacc;
    const combined = 0.60 * wacc + 0.25 * avgMastery + 0.15 * coverage;
    // exponent > 1 => conservative (top bands are hard to reach): 0.7->~155, 0.85->~162, 0.95->~167
    let band = 130 + Math.round(40 * Math.pow(combined, 1.15));
    // exposure caps: you can't claim a top band without proving it on harder items
    const mhShare = state.history.length ? mhSeen / state.history.length : 0;
    if (mhShare < 0.5) band = Math.min(band, 158);
    if (hardSeen < 5) band = Math.min(band, 164);
    band = Math.max(130, Math.min(170, band));
    const spread = totalAtt < 30 ? 4 : (totalAtt < 80 ? 3 : 2);
    state.lastEstimate = { band, as_of: todayISO() };
    save();
    return {
      band, low: Math.max(130, band - spread), high: Math.min(170, band + spread),
      coverage, attempts: totalAtt,
      note: "Rough estimate from in-app practice. Treat an official ETS POWERPREP score as the truth."
    };
  }

  // daily snapshot bookkeeping (so the daily coach can review what was studied)
  function shouldAutoExport() {
    if (state.lastAutoExport === todayISO()) return false;
    // only if something was actually studied today
    const today = todayISO();
    return state.history.some(h => (h.ts || "").slice(0, 10) === today);
  }
  function markAutoExport() { state.lastAutoExport = todayISO(); save(); }

  // compact, human-readable digest of recent study (used by the daily coach + UI)
  function studyDigest(days) {
    days = days || 1;
    const cutoff = Date.now() - days * 86400000;
    const recent = state.history.filter(h => new Date(h.ts).getTime() >= cutoff);
    const byTopic = {};
    recent.forEach(h => {
      byTopic[h.topic] = byTopic[h.topic] || { n: 0, c: 0 };
      byTopic[h.topic].n++; if (h.correct) byTopic[h.topic].c++;
    });
    return {
      date: todayISO(), windowDays: days, attempts: recent.length,
      topics: Object.keys(byTopic).map(k => ({
        topic: k, title: (state.topics[k] ? state.topics[k].title : k),
        area: (state.topics[k] ? state.topics[k].area : ""),
        attempts: byTopic[k].n, correct: byTopic[k].c
      })),
      leeches: leechList().map(t => t.title),
      readiness: readiness()
    };
  }

  function exportJSON() {
    const clone = JSON.parse(JSON.stringify(state));
    if (clone.settings) clone.settings.apiKey = ""; // never write the key to disk/snapshots
    return JSON.stringify(clone, null, 2);
  }
  function importJSON(text) {
    const parsed = JSON.parse(text);
    if (!parsed.topics || !parsed.settings) throw new Error("Not a valid backup file.");
    const prevKey = state.settings && state.settings.apiKey;
    state = parsed;
    if (!state.settings.apiKey && prevKey) state.settings.apiKey = prevKey; // keep current key
    save();
  }
  function reset() { state = freshState(); save(); }

  GRE.store = {
    get, settings, setSettings, topics, topic, hasKey,
    accuracy, mastery, priority, pickTopics,
    recordAttempt, markLearned, logSession,
    areaStats, leechList, dueList, readiness,
    shouldAutoExport, markAutoExport, studyDigest,
    exportJSON, importJSON, reset, save,
    PACE_SEC,
    titleOf: (k) => (state.topics[k] ? state.topics[k].title : k),
    areaOf: (k) => (state.topics[k] ? state.topics[k].area : "")
  };
})();
