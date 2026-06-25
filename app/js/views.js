/* views.js — renders every screen into #view and wires the modes together. */
(function () {
  const GRE = window.GRE;
  const r = GRE.r;
  const el = r.el;
  const $view = () => document.getElementById("view");
  const COVERAGE12 = "Across these 12 questions include at least 2 Quantitative Comparison, at least 1 select-all-that-apply, and at least 1 Numeric Entry, and cover all four content areas (Arithmetic, Algebra, Geometry, Data Analysis) at least twice each. Mirror the real ETS balance (about half QC).";
  const COVERAGE15 = "Across these 15 questions include at least 3 Quantitative Comparison, at least 1 select-all-that-apply, and at least 2 Numeric Entry, and cover all four content areas at least 3 times each. Mirror the real ETS balance.";

  function daysToTest() {
    const d = GRE.store.settings().targetDate;
    if (!d) return null;
    const ms = new Date(d + "T00:00:00").getTime() - Date.now();
    return Math.ceil(ms / 86400000);
  }

  function needKeyBanner() {
    if (GRE.store.hasKey()) return null;
    const b = el("div", "banner warn");
    b.innerHTML = "<strong>Add your Anthropic API key to start.</strong> The coach writes, teaches, and verifies every problem live. ";
    const btn = el("button", "link-btn", "Open Settings →");
    btn.addEventListener("click", () => GRE.app.openSettings());
    b.appendChild(btn);
    return b;
  }

  // ---------- shared: generate problems with a loading state, then run a quiz ----------
  async function generateAndRun(mount, cfg) {
    if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
    const ctrl = new AbortController();
    GRE._activeGen = ctrl; // so navigating away aborts an in-flight generation
    const load = el("div", "gen-load");
    const start = Date.now();
    let timer = setInterval(() => {
      const s = Math.round((Date.now() - start) / 1000);
      load.querySelector(".gen-time").textContent = s + "s";
    }, 1000);
    load.innerHTML =
      "<div class='spinner'></div>" +
      "<div class='gen-msg'>" + r.esc(cfg.loadingMsg || "Writing & verifying your problems…") + "</div>" +
      "<div class='gen-sub'>The coach solves each one two ways before showing it. <span class='gen-time'>0s</span></div>";
    const cancel = el("button", "ghost-btn", "Cancel");
    cancel.addEventListener("click", () => { ctrl.abort(); });
    load.appendChild(cancel);
    mount.innerHTML = ""; mount.appendChild(load);

    try {
      const problems = await GRE.api.problems(cfg.userText, { signal: ctrl.signal, effort: cfg.effort, topicKeys: cfg.topicKeys });
      clearInterval(timer);
      if (!problems.length) { mount.innerHTML = "<div class='banner warn'>The coach returned no problems. Try again.</div>"; return; }
      GRE.quiz.create(mount, problems, {
        mode: cfg.mode, sectionSeconds: cfg.sectionSeconds,
        title: cfg.title, subtitle: cfg.subtitle, onFinish: cfg.onFinish
      });
    } catch (e) {
      clearInterval(timer);
      if (e.name === "AbortError") { mount.innerHTML = "<div class='banner'>Cancelled.</div>"; return; }
      const err = el("div", "banner err");
      err.innerHTML = "<strong>Couldn't generate problems.</strong><br>" + r.esc(e.message);
      const retry = el("button", "primary-btn", "Try again");
      retry.addEventListener("click", () => generateAndRun(mount, cfg));
      mount.innerHTML = ""; mount.appendChild(err); mount.appendChild(retry);
    }
  }

  // ---------- practice summary ----------
  function practiceSummary(res, mount, backTo) {
    mount.innerHTML = "";
    const pct = Math.round(100 * res.correct / res.total);
    const avg = res.totalTime / res.total;
    const card = el("div", "result-card");
    card.appendChild(el("div", "result-score", res.correct + " / " + res.total + " <span>(" + pct + "%)</span>"));
    card.appendChild(el("div", "result-sub", "Avg " + r.mmss(avg) + " per question · pace target " + r.mmss(GRE.store.PACE_SEC) +
      (avg > GRE.store.PACE_SEC ? " · <span class='over'>work on speed</span>" : " · <span class='good'>good pace</span>")));
    const rd = GRE.store.readiness();
    if (rd.band) card.appendChild(el("div", "result-sub", "Estimated band now: <strong>" + rd.band + "</strong> (" + rd.low + "–" + rd.high + ")"));
    mount.appendChild(card);

    // per-topic mini table
    const byTopic = {};
    res.problems.forEach((p, i) => {
      byTopic[p.topic] = byTopic[p.topic] || { c: 0, n: 0 };
      byTopic[p.topic].n++; if (res.correctFlags[i]) byTopic[p.topic].c++;
    });
    const tl = el("div", "topic-lines");
    Object.keys(byTopic).forEach(k => {
      const s = byTopic[k]; const t = GRE.store.topic(k);
      tl.appendChild(el("div", "topic-line",
        "<span>" + r.esc(GRE.store.titleOf(k)) + "</span>" +
        "<span class='" + (s.c === s.n ? "good" : "bad") + "'>" + s.c + "/" + s.n + (t && t.leech ? " · leech" : "") + "</span>"));
    });
    mount.appendChild(tl);

    const acts = el("div", "btn-row");
    const again = el("button", "primary-btn", "Drill again");
    again.addEventListener("click", () => GRE.app.go("drill"));
    const rev = el("button", "ghost-btn", "Review missed");
    rev.addEventListener("click", () => GRE.app.go("review"));
    const save = el("button", "ghost-btn", "📥 Save progress for coach");
    save.addEventListener("click", () => GRE.app.saveSnapshot(true));
    const home = el("button", "ghost-btn", "Dashboard");
    home.addEventListener("click", () => GRE.app.go("dashboard"));
    acts.appendChild(again); acts.appendChild(rev); acts.appendChild(save); acts.appendChild(home);
    mount.appendChild(acts);
    GRE.app.saveSnapshot(false); // best-effort once-a-day snapshot for the daily coach
  }

  // ---------- exam review (deferred feedback) ----------
  function examReview(res, mount, opts) {
    opts = opts || {};
    mount.innerHTML = "";
    const pct = Math.round(100 * res.correct / res.total);
    const head = el("div", "result-card");
    head.appendChild(el("div", "result-score", res.correct + " / " + res.total + " <span>(" + pct + "%)</span>"));
    head.appendChild(el("div", "result-sub", "Time used " + r.mmss(res.totalTime) + " · " + (opts.label || "")));
    const rd = GRE.store.readiness();
    if (rd.band) head.appendChild(el("div", "result-sub", "Estimated band: <strong>" + rd.band + "</strong> (" + rd.low + "–" + rd.high + ") · target 165–170"));
    mount.appendChild(head);

    if (opts.banner) {
      const bn = el("div", "banner " + (opts.bannerKind || ""));
      bn.innerHTML = opts.banner;
      mount.appendChild(bn);
    }

    const list = el("div", "review-list");
    res.problems.forEach((p, i) => {
      const ok = res.correctFlags[i];
      const item = el("details", "review-item " + (ok ? "good" : "bad"));
      const sum = el("summary", null,
        "<span class='ri-n'>" + (i + 1) + "</span>" +
        "<span class='ri-v'>" + (ok ? "✓" : "✗") + "</span>" +
        "<span class='ri-t'>" + r.esc(GRE.store.titleOf(p.topic)) + " · " + GRE.quiz.TYPE_LABEL[p.type] + "</span>");
      item.appendChild(sum);
      const bodyd = el("div", "ri-body");
      bodyd.appendChild(el("div", "q-stem", r.mathText(p.stem)));
      if (p.choices && p.choices.length) {
        const ch = el("div", "ri-choices");
        p.choices.forEach((c, ci) => {
          const isAns = (p.correct || []).includes(ci);
          const isUser = (p.type === "MC_multi") ? (Array.isArray(res.answers[i]) && res.answers[i].includes(ci)) : (res.answers[i] === ci);
          ch.appendChild(el("div", "ri-choice" + (isAns ? " ans" : "") + (isUser && !isAns ? " your" : ""),
            GRE.quiz.letter(ci) + ". " + r.mathText(c) + (isAns ? " ✓" : "") + (isUser && !isAns ? " ← you" : "")));
        });
        bodyd.appendChild(ch);
      } else {
        bodyd.appendChild(el("div", "ri-choice", "Answer: " + r.mathText(GRE.quiz.answerLabel(p)) +
          "  ·  You: " + r.mathText(GRE.quiz.userLabel(p, res.answers[i]))));
      }
      bodyd.appendChild(el("div", "fb-block", "<div class='fb-h'>⚡ Fastest method</div>" + r.mathText(p.fastMethod)));
      bodyd.appendChild(el("div", "fb-block trap", "<div class='fb-h'>⚠ Trap</div>" + r.mathText(p.trap)));
      const sol = el("details", "fb-details");
      sol.appendChild(el("summary", null, "Full solution"));
      sol.appendChild(el("div", "fb-sol", r.mathText(p.solution)));
      bodyd.appendChild(sol);
      item.appendChild(bodyd);
      list.appendChild(item);
    });
    mount.appendChild(list);

    const acts = el("div", "btn-row");
    if (opts.nextLabel && opts.onNext) {
      const nb = el("button", "primary-btn", opts.nextLabel);
      nb.addEventListener("click", opts.onNext);
      acts.appendChild(nb);
    }
    const save = el("button", "ghost-btn", "📥 Save progress for coach");
    save.addEventListener("click", () => GRE.app.saveSnapshot(true));
    acts.appendChild(save);
    const home = el("button", "ghost-btn", "Back to dashboard");
    home.addEventListener("click", () => GRE.app.go("dashboard"));
    acts.appendChild(home);
    mount.appendChild(acts);
    GRE.app.saveSnapshot(false);
  }

  // =================== VIEWS ===================

  function dashboard() {
    const v = $view(); v.innerHTML = "";
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const rd = GRE.store.readiness();
    const d = daysToTest();
    const top = GRE.store.dueList(1)[0];

    v.appendChild(el("h1", "page-h", "Dashboard"));
    const line = rd.band
      ? "Estimated band <strong>" + rd.band + "</strong> vs target 165–170."
      : "No estimate yet — find your starting point below.";
    v.appendChild(el("div", "page-sub", line + (d != null ? "  " + (d >= 0 ? d + " days to test." : "Test date passed — update it in Settings.") : "")));

    // cold-start call to action
    if (!rd.band) {
      const cta = el("div", "panel rec");
      cta.appendChild(el("div", "panel-h", "👋 New here? Find your starting point"));
      cta.innerHTML += "<p class='p'>Take a quick, untimed 12-question placement to see your estimated band and which areas to attack first. ~15 minutes, no pressure.</p>";
      const cb = el("button", "primary-btn", "Find my level");
      cb.addEventListener("click", () => GRE.app.go("diagnostic", "placement"));
      cta.appendChild(cb);
      v.appendChild(cta);
    }

    const cards = el("div", "stat-cards");
    cards.appendChild(statCard("Estimated band", rd.band ? String(rd.band) : "—", rd.band ? rd.low + "–" + rd.high : "take diagnostic"));
    cards.appendChild(statCard("Days to test", d != null ? String(Math.max(0, d)) : "—", GRE.store.settings().targetDate || "set a date"));
    cards.appendChild(statCard("Leeches", String(GRE.store.leechList().length), "missed-twice topics"));
    cards.appendChild(statCard("Coverage", Math.round(rd.coverage * 100) + "%", "topics practiced"));
    v.appendChild(cards);

    // area mastery
    const am = el("div", "panel");
    am.appendChild(el("div", "panel-h", "Mastery by area"));
    const stats = GRE.store.areaStats();
    GRE.SEED.areas.forEach(area => {
      const s = stats[area];
      const m = s.mastery != null ? s.mastery : 0;
      am.appendChild(el("div", "bar-row",
        "<span class='bar-label'>" + area + "</span>" +
        "<span class='bar'><span class='bar-fill' style='width:" + m + "%'></span></span>" +
        "<span class='bar-val'>" + (s.mastery != null ? s.mastery : "—") + "</span>"));
    });
    v.appendChild(am);

    // recommended next
    if (top) {
      const rec = el("div", "panel rec");
      rec.appendChild(el("div", "panel-h", "Highest-leverage next step"));
      rec.appendChild(el("div", "rec-topic", r.esc(top.title) + "  <span class='muted'>" + top.area +
        (top.leech ? " · leech" : (top.attempts ? " · " + Math.round(100 * top.correct / top.attempts) + "%" : " · new")) + "</span>"));
      const row = el("div", "btn-row");
      const learn = el("button", "primary-btn", "Learn it");
      learn.addEventListener("click", () => GRE.app.go("learn", top.key));
      const drill = el("button", "ghost-btn", "Drill it");
      drill.addEventListener("click", () => GRE.app.go("drill", top.key));
      row.appendChild(learn); row.appendChild(drill);
      rec.appendChild(row);
      v.appendChild(rec);
    }

    // quick actions
    const qa = el("div", "panel");
    qa.appendChild(el("div", "panel-h", "Quick start"));
    const row = el("div", "btn-row");
    [["Timed drill", "drill"], ["Full section", "section"], ["Diagnostic", "diagnostic"], ["Ask the coach", "coach"]].forEach(([t, view]) => {
      const b = el("button", "ghost-btn", t);
      b.addEventListener("click", () => GRE.app.go(view));
      row.appendChild(b);
    });
    qa.appendChild(row);
    v.appendChild(qa);

    // recent sessions
    const sess = GRE.store.get().sessions.slice(0, 6);
    if (sess.length) {
      const sp = el("div", "panel");
      sp.appendChild(el("div", "panel-h", "Recent sessions"));
      sess.forEach(s => {
        sp.appendChild(el("div", "sess-row",
          "<span>" + r.esc(s.mode) + (s.summary ? " · " + r.esc(s.summary) : "") + "</span>" +
          "<span class='muted'>" + (s.correct != null ? s.correct + "/" + s.count : "") + " · " + new Date(s.ts).toLocaleDateString() + "</span>"));
      });
      v.appendChild(sp);
    }
  }

  function statCard(label, big, sub) {
    return el("div", "stat-card", "<div class='sc-label'>" + r.esc(label) + "</div><div class='sc-big'>" + r.esc(big) + "</div><div class='sc-sub'>" + r.esc(sub) + "</div>");
  }

  // ---------- LEARN ----------
  function learn(preselect) {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Learn a topic"));
    v.appendChild(el("div", "page-sub", "First principles → fastest method → timed practice."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const picker = el("div", "panel");
    picker.appendChild(el("div", "panel-h", "Pick a topic"));
    const sel = el("select", "topic-select");
    GRE.SEED.areas.forEach(area => {
      const og = document.createElement("optgroup"); og.label = area;
      Object.keys(GRE.store.topics()).filter(k => GRE.store.areaOf(k) === area).forEach(k => {
        const o = document.createElement("option"); o.value = k; o.textContent = GRE.store.titleOf(k);
        if (k === preselect) o.selected = true;
        og.appendChild(o);
      });
      sel.appendChild(og);
    });
    picker.appendChild(sel);
    const go = el("button", "primary-btn", "Teach me this");
    picker.appendChild(go);
    v.appendChild(picker);

    const out = el("div", "panel lesson"); out.hidden = true;
    v.appendChild(out);

    async function teach(topicKey) {
      if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
      out.hidden = false; out.innerHTML = "<div class='panel-h'>" + r.esc(GRE.store.titleOf(topicKey)) + "</div><div class='lesson-body'><span class='spinner small'></span> Coach is preparing the lesson…</div>";
      const lb = out.querySelector(".lesson-body");
      try {
        let full = "";
        await GRE.api.chat([{ role: "user", content: GRE.prompts.learnLesson(topicKey) }], (delta, f) => {
          full = f; lb.innerHTML = r.mdLite(f);
        });
        GRE.store.markLearned(topicKey);
        const pr = el("div", "btn-row");
        const prac = el("button", "primary-btn", "Start timed practice (6)");
        prac.addEventListener("click", () => {
          const mount = el("div", "panel"); v.appendChild(mount);
          mount.scrollIntoView({ behavior: "smooth" });
          generateAndRun(mount, {
            topicKeys: [topicKey],
            userText: GRE.prompts.genProblems({ topicKeys: [topicKey], count: 6, intro: "Generate timed practice for the topic just taught." }),
            mode: "practice", title: "Practice · " + GRE.store.titleOf(topicKey),
            subtitle: "Immediate feedback after each question.",
            onFinish: (res, m) => practiceSummary(res, m)
          });
        });
        pr.appendChild(prac);
        out.appendChild(pr);
      } catch (e) { lb.innerHTML = "<span class='err'>" + r.esc(e.message) + "</span>"; }
    }
    go.addEventListener("click", () => teach(sel.value));
    if (preselect) teach(preselect);
  }

  // ---------- DRILL ----------
  function drill(preTopic) {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Timed drill"));
    v.appendChild(el("div", "page-sub", "Spaced-repetition picks your weakest, stalest, and leech topics."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const ctl = el("div", "panel");
    ctl.appendChild(el("div", "panel-h", "Set it up"));
    ctl.innerHTML +=
      "<div class='controls'>" +
      "<label>Questions <select id='dQ'><option>5</option><option selected>8</option><option>12</option><option>15</option></select></label>" +
      "<label>Area <select id='dArea'><option value=''>All (spaced repetition)</option>" +
      GRE.SEED.areas.map(a => "<option>" + a + "</option>").join("") + "</select></label>" +
      "<label>Difficulty <select id='dDiff'><option value=''>Adaptive</option><option>easy</option><option>medium</option><option>hard</option></select></label>" +
      "</div>";
    const start = el("button", "primary-btn", "Start drill");
    ctl.appendChild(start);
    v.appendChild(ctl);

    const mount = el("div", "panel"); mount.hidden = true; v.appendChild(mount);

    start.addEventListener("click", () => {
      const n = parseInt(document.getElementById("dQ").value, 10);
      const area = document.getElementById("dArea").value;
      const diff = document.getElementById("dDiff").value;
      let keys = preTopic ? [preTopic] : GRE.store.pickTopics(n, { area: area || undefined });
      if (preTopic) { while (keys.length < n) keys.push(preTopic); }
      mount.hidden = false; mount.scrollIntoView({ behavior: "smooth" });
      generateAndRun(mount, {
        topicKeys: keys,
        userText: GRE.prompts.genProblems({ topicKeys: keys, count: n, difficulty: diff || undefined }),
        mode: "practice", title: "Drill" + (area ? " · " + area : ""),
        subtitle: keys.slice(0, 4).map(k => GRE.store.titleOf(k)).join(", ") + (keys.length > 4 ? "…" : ""),
        onFinish: (res, m) => practiceSummary(res, m)
      });
    });
  }

  // ---------- FULL SECTION (adaptive) ----------
  function section() {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Full adaptive section"));
    v.appendChild(el("div", "page-sub", "Section 1 is 12 questions in 21 minutes. Do well and Section 2 (15 in 26) gets harder — exactly like the real test."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const intro = el("div", "panel");
    intro.appendChild(el("div", "panel-h", "How it works"));
    intro.innerHTML += "<ul class='bullets'>" +
      "<li>Timed countdown. No feedback until you finish the section — just like ETS.</li>" +
      "<li>Two-pass strategy: answer the quick ones, mark the slow ones, come back.</li>" +
      "<li>Never leave a blank — guess if time runs out (no penalty).</li>" +
      "<li>Protect Section 1 accuracy — it unlocks the high-scoring Section 2.</li></ul>";
    const start = el("button", "primary-btn", "Start Section 1 (12 Q · 21:00)");
    intro.appendChild(start);
    v.appendChild(intro);

    const mount = el("div"); v.appendChild(mount);

    start.addEventListener("click", () => {
      intro.hidden = true;
      const keys = GRE.store.pickTopics(12, { stratify: true });
      generateAndRun(mount, {
        loadingMsg: "Building Section 1…",
        topicKeys: keys,
        userText: GRE.prompts.genProblems({ topicKeys: keys, count: 12, qcFirst: true, difficulty: "medium", coverage: COVERAGE12,
          intro: "Generate Section 1 of an adaptive GRE Quant test: 12 questions of moderate difficulty, all four question types, all four content areas." }),
        mode: "exam", sectionSeconds: 21 * 60, title: "Section 1", subtitle: "12 questions · 21 minutes",
        onFinish: (res, m) => {
          const pct = res.correct / res.total;
          const strong = pct >= 0.72;
          const diff2 = strong ? "hard" : "medium";
          examReview(res, m, {
            label: "Section 1",
            banner: strong
              ? "Strong Section 1 (" + Math.round(pct * 100) + "%). On the real test this unlocks the <strong>harder, higher-scoring</strong> Section 2. Section 2 will be harder."
              : "Section 1 was " + Math.round(pct * 100) + "%. On the real test, this sets a lower ceiling for Section 2. Let's keep Section 2 at " + diff2 + " and rebuild accuracy.",
            bannerKind: strong ? "good" : "warn",
            nextLabel: "Start Section 2 (15 Q · 26:00)",
            onNext: () => {
              const v2 = $view(); v2.innerHTML = "";
              v2.appendChild(el("h1", "page-h", "Section 2"));
              const m2 = el("div"); v2.appendChild(m2);
              const keys2 = GRE.store.pickTopics(15, { stratify: true });
              generateAndRun(m2, {
                loadingMsg: "Building Section 2 (" + diff2 + ")…",
                topicKeys: keys2,
                userText: GRE.prompts.genProblems({ topicKeys: keys2, count: 15, qcFirst: true, difficulty: diff2, coverage: COVERAGE15,
                  intro: "Generate Section 2 of an adaptive GRE Quant test at " + diff2 + " difficulty: 15 questions, all four question types, all four content areas." }),
                mode: "exam", sectionSeconds: 26 * 60, title: "Section 2", subtitle: "15 questions · 26 minutes · " + diff2,
                onFinish: (res2, m2b) => {
                  const overall = res.correct + res2.correct, total = res.total + res2.total;
                  const rd = GRE.store.readiness();
                  examReview(res2, m2b, {
                    label: "Section 2 (" + diff2 + ")",
                    banner: "Full simulation: <strong>" + overall + " / " + total + "</strong> correct" +
                      (rd.band ? " · estimated band <strong>" + rd.band + "</strong> (" + rd.low + "–" + rd.high + ")" : "") +
                      ".<br>" + r.esc(rd.note)
                  });
                }
              });
            }
          });
        }
      });
    });
  }

  // ---------- DIAGNOSTIC ----------
  function diagnostic(opts) {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Find your starting point"));
    v.appendChild(el("div", "page-sub", "Not sure where you stand? Start here. Two ways to measure your level."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const mount = el("div");

    // --- Quick placement (recommended for a cold start) ---
    const p1 = el("div", "panel rec");
    p1.appendChild(el("div", "panel-h", "Quick placement — recommended"));
    p1.innerHTML += "<p class='p'>12 questions, <strong>untimed</strong>, across all four areas, easy-to-medium. ~15 minutes, no pressure. You get your estimated starting band and the exact areas to attack first. Best if you're rusty or just beginning.</p>";
    const b1 = el("button", "primary-btn", "Start quick placement");
    p1.appendChild(b1);
    v.appendChild(p1);

    // --- Full timed diagnostic ---
    const p2 = el("div", "panel");
    p2.appendChild(el("div", "panel-h", "Full diagnostic"));
    p2.innerHTML += "<p class='p'>27 questions in the real timed 12 + 15 split (~50 minutes). The most accurate baseline — do this once you're warmed up, or for a realistic dry run. No notes, calculator only, never leave a blank.</p>";
    const b2 = el("button", "ghost-btn", "Start full diagnostic (timed)");
    p2.appendChild(b2);
    v.appendChild(p2);

    v.appendChild(mount);

    function startPlacement() {
      p1.hidden = true; p2.hidden = true;
      const keys = GRE.store.pickTopics(12, { stratify: true });
      generateAndRun(mount, {
        loadingMsg: "Building your placement…",
        topicKeys: keys,
        userText: GRE.prompts.genProblems({ topicKeys: keys, count: 12, qcFirst: true,
          coverage: "Cover all four content areas (Arithmetic, Algebra, Geometry, Data Analysis) and include at least 2 Quantitative Comparison, 1 select-all-that-apply, and 1 Numeric Entry. Use a beginner-friendly mix: mostly EASY with a few MEDIUM, and NO hard items.",
          intro: "Generate a gentle placement quiz to gauge a cold-start learner's current level: 12 questions, easy-to-medium, all four areas, all four question types." }),
        mode: "exam", title: "Quick placement", subtitle: "12 questions · untimed · find your level",
        onFinish: (res, m) => {
          const rd = GRE.store.readiness();
          const stats = GRE.store.areaStats();
          const weak = GRE.SEED.areas.map(a => ({ a, acc: stats[a].accuracy }))
            .filter(x => x.acc != null).sort((x, y) => x.acc - y.acc).slice(0, 3).map(x => x.a);
          GRE.store.logSession("placement", "starting-point check", res.total, res.correct);
          const first = GRE.store.dueList(1)[0];
          examReview(res, m, {
            label: "Placement (untimed)",
            banner: "Your starting point: " +
              (rd.band ? "estimated band <strong>" + rd.band + "</strong> (" + rd.low + "–" + rd.high + ")" : "scored " + res.correct + "/" + res.total) +
              ".<br>Attack these areas first: <strong>" + (weak.length ? weak.join(", ") : "—") + "</strong>.<br>" +
              "This is a gentle floor — your real ceiling shows once you drill harder questions. " + r.esc(rd.note),
            bannerKind: "good",
            nextLabel: first ? ("Learn " + first.title + " →") : null,
            onNext: first ? (() => GRE.app.go("learn", first.key)) : null
          });
        }
      });
    }

    function startFull() {
      p1.hidden = true; p2.hidden = true;
      const keys1 = GRE.store.pickTopics(12, { stratify: true });
      generateAndRun(mount, {
        loadingMsg: "Building diagnostic Section 1…",
        topicKeys: keys1,
        userText: GRE.prompts.genProblems({ topicKeys: keys1, count: 12, qcFirst: true, coverage: COVERAGE12,
          intro: "Generate Section 1 of a 27-question GRE Quant diagnostic: 12 moderate questions spanning all four areas and all four question types." }),
        mode: "exam", sectionSeconds: 21 * 60, title: "Diagnostic · Section 1", subtitle: "12 questions · 21 minutes",
        onFinish: (res1, m1) => {
          examReview(res1, m1, {
            label: "Diagnostic Section 1",
            nextLabel: "Continue to Section 2 (15 Q · 26:00)",
            onNext: () => {
              const v2 = $view(); v2.innerHTML = "";
              v2.appendChild(el("h1", "page-h", "Diagnostic · Section 2"));
              const m2 = el("div"); v2.appendChild(m2);
              const keys2 = GRE.store.pickTopics(15, { stratify: true });
              generateAndRun(m2, {
                loadingMsg: "Building diagnostic Section 2…",
                topicKeys: keys2,
                userText: GRE.prompts.genProblems({ topicKeys: keys2, count: 15, qcFirst: true, coverage: COVERAGE15,
                  intro: "Generate Section 2 of a 27-question GRE Quant diagnostic: 15 questions spanning all four areas and all four question types, slightly harder." }),
                mode: "exam", sectionSeconds: 26 * 60, title: "Diagnostic · Section 2", subtitle: "15 questions · 26 minutes",
                onFinish: (res2, m2b) => {
                  const overall = res1.correct + res2.correct, total = res1.total + res2.total;
                  const rd = GRE.store.readiness();
                  const stats = GRE.store.areaStats();
                  const weak = GRE.SEED.areas.map(a => ({ a, m: stats[a].accuracy == null ? 0 : stats[a].accuracy }))
                    .sort((x, y) => x.m - y.m).slice(0, 3).map(x => x.a);
                  GRE.store.logSession("diagnostic", "27-question baseline", total, overall);
                  examReview(res2, m2b, {
                    label: "Diagnostic Section 2",
                    banner: "Baseline set: <strong>" + overall + " / " + total + "</strong>" +
                      (rd.band ? " · estimated band <strong>" + rd.band + "</strong> (" + rd.low + "–" + rd.high + ")" : "") +
                      ".<br>Three weakest areas to attack first: <strong>" + weak.join(", ") + "</strong>.<br>" + r.esc(rd.note),
                    bannerKind: "good"
                  });
                }
              });
            }
          });
        }
      });
    }

    b1.addEventListener("click", startPlacement);
    b2.addEventListener("click", startFull);
    if (opts === "placement") startPlacement();
    else if (opts === "full") startFull();
  }

  // ---------- REVIEW & LEECHES ----------
  function review() {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Review & leeches"));
    v.appendChild(el("div", "page-sub", "Leeches are topics you've missed twice. Clear them by getting two in a row right."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const leeches = GRE.store.leechList();
    const due = GRE.store.dueList(8);

    const lp = el("div", "panel");
    lp.appendChild(el("div", "panel-h", "Leeches (" + leeches.length + ")"));
    if (!leeches.length) lp.appendChild(el("div", "muted", "No leeches right now. Nice."));
    else leeches.forEach(t => lp.appendChild(el("div", "topic-line", "<span>" + r.esc(t.title) + "</span><span class='bad'>" + (t.attempts ? Math.round(100 * t.correct / t.attempts) + "%" : "—") + "</span>")));
    const reLeech = el("button", "primary-btn", leeches.length ? "Re-test my leeches" : "Re-test due topics");
    reLeech.addEventListener("click", () => {
      const keys = (leeches.length ? leeches : due).map(t => t.key).slice(0, 8);
      while (keys.length < 6 && due.length) keys.push(due[keys.length % due.length].key);
      const mount = el("div", "panel"); v.appendChild(mount); mount.scrollIntoView({ behavior: "smooth" });
      generateAndRun(mount, {
        topicKeys: keys,
        userText: GRE.prompts.genProblems({ topicKeys: keys, count: Math.min(8, Math.max(6, keys.length)), intro: "Generate targeted re-test problems for these weak/leech topics." }),
        mode: "practice", title: "Leech & due re-test",
        onFinish: (res, m) => practiceSummary(res, m)
      });
    });
    lp.appendChild(reLeech);
    v.appendChild(lp);

    // error log
    const errs = GRE.store.get().errorLog.slice(0, 25);
    const ep = el("div", "panel");
    ep.appendChild(el("div", "panel-h", "Recent misses (" + GRE.store.get().errorLog.length + ")"));
    if (!errs.length) ep.appendChild(el("div", "muted", "Nothing logged yet."));
    errs.forEach(e => {
      const it = el("details", "review-item bad");
      it.appendChild(el("summary", null, "<span class='ri-t'>" + r.esc(GRE.store.titleOf(e.topic)) + " · " + (GRE.quiz.TYPE_LABEL[e.type] || e.type) + "</span><span class='muted'>" + new Date(e.ts).toLocaleDateString() + "</span>"));
      const b = el("div", "ri-body");
      b.appendChild(el("div", "q-stem", r.mathText(e.stem || "")));
      b.appendChild(el("div", "fb-line", "<strong>Answer:</strong> " + r.mathText(e.answerLabel || "") + "  ·  <span class='muted'>you chose " + r.mathText(e.yourAnswer || "—") + "</span>"));
      if (e.trap) b.appendChild(el("div", "fb-block trap", "<div class='fb-h'>⚠ Trap</div>" + r.mathText(e.trap)));
      it.appendChild(b);
      ep.appendChild(it);
    });
    v.appendChild(ep);
  }

  // ---------- COACH CHAT ----------
  let chatHistory = [];
  function coach() {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Ask the coach"));
    v.appendChild(el("div", "page-sub", "Questions, explanations, strategy, a study plan — anything."));
    const bn = needKeyBanner(); if (bn) v.appendChild(bn);

    const quick = el("div", "btn-row");
    [["Readiness report", () => sendQuick(GRE.prompts.statusReport(trackerSummary()))],
     ["Build my study plan", () => sendQuick(GRE.prompts.planReport(trackerSummary(), GRE.store.settings().targetDate))],
     ["Drill my weakest topic", () => GRE.app.go("drill", GRE.store.dueList(1)[0] && GRE.store.dueList(1)[0].key)]
    ].forEach(([t, fn]) => { const b = el("button", "ghost-btn small", t); b.addEventListener("click", fn); quick.appendChild(b); });
    v.appendChild(quick);

    const log = el("div", "chat-log"); v.appendChild(log);
    chatHistory.forEach(m => appendMsg(log, m.role, m.content));
    if (!chatHistory.length) appendMsg(log, "assistant", "I'm your GRE Quant coach. Ask me to explain a concept, walk through a problem, or tell me where you're stuck. The fastest win right now is usually drilling your weakest topic — try the buttons above.");

    const bar = el("div", "chat-bar");
    const inp = el("textarea", "chat-input"); inp.placeholder = "Ask anything… (Enter to send, Shift+Enter for newline)"; inp.rows = 1;
    const send = el("button", "primary-btn", "Send");
    bar.appendChild(inp); bar.appendChild(send);
    v.appendChild(bar);

    function doSend() {
      const text = inp.value.trim(); if (!text) return;
      if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
      inp.value = ""; sendMessage(log, text);
    }
    send.addEventListener("click", doSend);
    inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); doSend(); } });
    inp.focus();

    function sendQuick(prompt) {
      if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
      sendMessage(log, prompt, true);
    }
  }
  function appendMsg(log, role, content) {
    const m = el("div", "msg " + role);
    m.innerHTML = "<div class='msg-body'>" + (role === "assistant" ? r.mdLite(content) : r.esc(content)) + "</div>";
    log.appendChild(m); log.scrollTop = log.scrollHeight; return m;
  }
  async function sendMessage(log, text, hideUser) {
    if (!hideUser) { appendMsg(log, "user", text); chatHistory.push({ role: "user", content: text }); }
    const out = appendMsg(log, "assistant", "");
    const ob = out.querySelector(".msg-body");
    ob.innerHTML = "<span class='spinner small'></span>";
    const msgs = chatHistory.slice(-12).concat(hideUser ? [{ role: "user", content: text }] : []);
    const sys = GRE.prompts.SYSTEM + "\n\n" + GRE.prompts.chatContext();
    try {
      let full = "";
      await GRE.api.chat(msgs.length ? msgs : [{ role: "user", content: text }], (d, f) => { full = f; ob.innerHTML = r.mdLite(f); log.scrollTop = log.scrollHeight; }, null, sys);
      chatHistory.push({ role: "assistant", content: full });
    } catch (e) { ob.innerHTML = "<span class='err'>" + r.esc(e.message) + "</span>"; }
  }

  // ---------- STATUS ----------
  function trackerSummary() {
    const stats = GRE.store.areaStats();
    const rd = GRE.store.readiness();
    let s = "Estimated band: " + (rd.band || "n/a") + ". Target: 165-170. Days to test: " + (daysToTest() ?? "?") + ". Track: " + GRE.store.settings().track + ".\n";
    GRE.SEED.areas.forEach(a => {
      const x = stats[a];
      s += a + ": accuracy " + (x.accuracy != null ? Math.round(x.accuracy * 100) + "%" : "n/a") + ", mastery " + (x.mastery ?? "n/a") + ", topics practiced " + x.seen + "/" + x.total + ".\n";
    });
    const leech = GRE.store.leechList().map(t => t.title);
    if (leech.length) s += "Leeches: " + leech.join(", ") + ".\n";
    const weak = Object.values(GRE.store.topics()).filter(t => t.attempts >= 2 && t.correct / t.attempts < 0.6).map(t => t.title);
    if (weak.length) s += "Weakest practiced topics: " + weak.slice(0, 10).join(", ") + ".\n";
    return s;
  }

  function status() {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Readiness"));
    const rd = GRE.store.readiness();
    v.appendChild(el("div", "page-sub", rd.note));

    const cards = el("div", "stat-cards");
    cards.appendChild(statCard("Estimated band", rd.band ? String(rd.band) : "—", rd.band ? rd.low + "–" + rd.high : "needs data"));
    cards.appendChild(statCard("Target", "165–170", GRE.store.settings().track));
    const d = daysToTest();
    cards.appendChild(statCard("Days to test", d != null ? String(Math.max(0, d)) : "—", GRE.store.settings().targetDate || "—"));
    cards.appendChild(statCard("Leeches", String(GRE.store.leechList().length), "to clear"));
    v.appendChild(cards);

    const stats = GRE.store.areaStats();
    const am = el("div", "panel");
    am.appendChild(el("div", "panel-h", "Area breakdown"));
    GRE.SEED.areas.forEach(area => {
      const s = stats[area];
      am.appendChild(el("div", "bar-row",
        "<span class='bar-label'>" + area + "</span>" +
        "<span class='bar'><span class='bar-fill' style='width:" + (s.mastery || 0) + "%'></span></span>" +
        "<span class='bar-val'>" + (s.accuracy != null ? Math.round(s.accuracy * 100) + "%" : "—") + "</span>"));
    });
    v.appendChild(am);

    const ap = el("div", "panel");
    ap.appendChild(el("div", "panel-h", "Coach analysis"));
    const row = el("div", "btn-row");
    const rep = el("button", "primary-btn", "Generate readiness report");
    const plan = el("button", "ghost-btn", "Build week-by-week plan");
    row.appendChild(rep); row.appendChild(plan);
    ap.appendChild(row);
    const out = el("div", "lesson-body"); out.hidden = true; ap.appendChild(out);
    v.appendChild(ap);

    async function run(promptFn) {
      if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
      out.hidden = false; out.innerHTML = "<span class='spinner small'></span> Analyzing…";
      try { let f = ""; await GRE.api.chat([{ role: "user", content: promptFn() }], (d, full) => { f = full; out.innerHTML = r.mdLite(full); }); }
      catch (e) { out.innerHTML = "<span class='err'>" + r.esc(e.message) + "</span>"; }
    }
    rep.addEventListener("click", () => run(() => GRE.prompts.statusReport(trackerSummary())));
    plan.addEventListener("click", () => run(() => GRE.prompts.planReport(trackerSummary(), GRE.store.settings().targetDate)));
  }

  // ---------- FORMULAS (static, works offline) ----------
  const FORMULA_SHEET = [
    ["Arithmetic & number sense", [
      "Percent change = (new − old) / old × 100. A→B then back: a +x% then −x% is a net loss.",
      "Successive percents multiply: +20% then +30% = ×1.2×1.3 = ×1.56 (a 56% increase).",
      "Average (mean) = sum / count. Sum = mean × count (use this to add/remove items).",
      "Divisibility: 3 if digit-sum ÷3; 9 if digit-sum ÷9; 4 if last two digits ÷4; 8 if last three ÷8; 6 if even and ÷3.",
      "Even ± Even = Even; Odd ± Odd = Even; Even × anything = Even; Odd × Odd = Odd.",
      "Consecutive integers: sum of n consecutive = n × (median). n consecutive integers contain exactly one multiple of n.",
      "Prime factorization gives every factor; # of factors = product of (exponent+1).",
      "Remainder logic: dividend = divisor × quotient + remainder, 0 ≤ remainder < divisor.",
      "GCF × LCM = product of the two numbers."
    ]],
    ["Exponents & roots", [
      "xᵃ·xᵇ = xᵃ⁺ᵇ ;  xᵃ/xᵇ = xᵃ⁻ᵇ ;  (xᵃ)ᵇ = xᵃᵇ ;  x⁰ = 1 ;  x⁻ᵃ = 1/xᵃ.",
      "(xy)ᵃ = xᵃyᵃ ;  √(ab) = √a·√b ;  x^(1/2) = √x ;  x^(a/b) = (ᵇ√x)ᵃ.",
      "Squares to know: 11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 25²=625.",
      "√2 ≈ 1.41, √3 ≈ 1.73, √5 ≈ 2.24."
    ]],
    ["Algebra", [
      "Difference of squares: a² − b² = (a+b)(a−b).",
      "(a+b)² = a² + 2ab + b² ;  (a−b)² = a² − 2ab + b².",
      "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a. Discriminant b²−4ac: >0 two roots, =0 one, <0 none.",
      "Slope m = (y₂−y₁)/(x₂−x₁). Line: y = mx + b. Parallel: equal slope. Perpendicular: slopes multiply to −1.",
      "Inequalities: multiplying/dividing by a negative flips the sign."
    ]],
    ["Coordinate geometry", [
      "Distance = √((x₂−x₁)² + (y₂−y₁)²).",
      "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)."
    ]],
    ["Geometry", [
      "Triangle angles sum to 180°; exterior angle = sum of two remote interior angles.",
      "Area of triangle = ½ · base · height. Pythagorean: a² + b² = c².",
      "Triples: 3-4-5, 5-12-13, 8-15-17 (and multiples).",
      "45-45-90: sides 1 : 1 : √2.  30-60-90: sides 1 : √3 : 2.",
      "Polygon interior angles sum = (n−2)·180°. Each exterior angle of a regular n-gon = 360°/n.",
      "Circle: circumference = 2πr = πd; area = πr². Arc length = (θ/360)·2πr; sector area = (θ/360)·πr².",
      "Rectangle area = lw; box volume = lwh, surface = 2(lw+lh+wh).",
      "Cylinder volume = πr²h; surface = 2πr² + 2πrh."
    ]],
    ["Data analysis & statistics", [
      "Median = middle value (average of two middles if even count). Mode = most frequent.",
      "Range = max − min. IQR = Q3 − Q1.",
      "Standard deviation measures spread; you rarely compute it — compare spreads instead.",
      "Normal distribution (68-95-99.7): ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD."
    ]],
    ["Counting & probability", [
      "Multiplication principle: choices multiply (m ways then n ways = m·n).",
      "Permutations (order matters): nPr = n!/(n−r)!.",
      "Combinations (order doesn't): nCr = n!/(r!(n−r)!).",
      "P(event) = favorable / total. P(A and B independent) = P(A)·P(B). P(A or B) = P(A)+P(B)−P(A and B).",
      "Two overlapping sets: Total = A + B − Both + Neither.",
      "Expected value = Σ (outcome × probability)."
    ]],
    ["Rates, work & mixtures", [
      "Distance = rate × time. Average speed = total distance / total time (NOT the average of the speeds).",
      "Combined work: if one does a job in a hours and another in b, together = ab/(a+b) hours.",
      "Mixtures: track the amount of the pure component, not the percentages."
    ]],
    ["Mental-math benchmarks", [
      "1/2 = 50% ;  1/3 ≈ 33.3% ;  2/3 ≈ 66.7% ;  1/4 = 25% ;  1/5 = 20% ;  1/6 ≈ 16.7%.",
      "1/8 = 12.5% ;  3/8 = 37.5% ;  5/8 = 62.5% ;  1/9 ≈ 11.1% ;  1/12 ≈ 8.3%.",
      "To take 15%: 10% + half of that. To take 5%: half of 10%."
    ]]
  ];
  function formulas() {
    const v = $view(); v.innerHTML = "";
    v.appendChild(el("h1", "page-h", "Formula reference"));
    v.appendChild(el("div", "page-sub", "The formulas that actually show up. Memorize these cold — the GRE rewards recall speed."));
    FORMULA_SHEET.forEach(([title, items]) => {
      const p = el("div", "panel");
      p.appendChild(el("div", "panel-h", title));
      const ul = el("ul", "formula-list");
      items.forEach(it => ul.appendChild(el("li", null, r.math(r.esc(it)))));
      p.appendChild(ul);
      v.appendChild(p);
    });
    const quiz = el("div", "panel");
    quiz.appendChild(el("div", "panel-h", "Quiz me"));
    quiz.appendChild(el("div", "muted", "Have the coach quiz you on these formulas (needs API key)."));
    const b = el("button", "primary-btn", "Quiz me on formulas");
    const out = el("div", "lesson-body"); out.hidden = true;
    b.addEventListener("click", async () => {
      if (!GRE.store.hasKey()) { GRE.app.openSettings(); return; }
      out.hidden = false; out.innerHTML = "<span class='spinner small'></span>";
      try { let f = ""; await GRE.api.chat([{ role: "user", content: "Quiz me on the most test-critical GRE Quant formulas. Ask me 6 rapid-fire recall questions one after another with the answers hidden under each (I'll check myself). Plain text, no LaTeX." }], (d, full) => { f = full; out.innerHTML = r.mdLite(full); }); }
      catch (e) { out.innerHTML = "<span class='err'>" + r.esc(e.message) + "</span>"; }
    });
    quiz.appendChild(b); quiz.appendChild(out);
    v.appendChild(quiz);
  }

  GRE.views = { dashboard, learn, drill, section, diagnostic, review, coach, formulas, status };
})();
