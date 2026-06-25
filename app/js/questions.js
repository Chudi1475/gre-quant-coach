/* questions.js — quiz engine: render any of the 4 GRE question types, grade, time,
   give feedback (immediate for drills, deferred for exams), and stream coach explanations. */
(function () {
  const GRE = window.GRE;
  const r = GRE.r;

  const TYPE_LABEL = {
    QC: "Quantitative Comparison",
    MC_single: "Multiple choice — one answer",
    MC_multi: "Select all that apply",
    NumericEntry: "Numeric entry"
  };
  const letter = (i) => String.fromCharCode(65 + i);

  // ---- numeric parsing for numeric-entry grading ----
  function parseNum(s) {
    if (s == null) return NaN;
    let x = String(s).trim().replace(/,/g, "").replace(/\s+/g, "");
    if (x === "") return NaN;
    let pct = false;
    if (x.endsWith("%")) { pct = true; x = x.slice(0, -1); }
    let val;
    if (/^-?\d*\.?\d+\/-?\d*\.?\d+$/.test(x)) {
      const [a, b] = x.split("/");
      val = parseFloat(a) / parseFloat(b);
    } else {
      val = parseFloat(x);
    }
    if (pct) val = val / 100;
    return val;
  }
  function numEqual(a, b) {
    if (isNaN(a) || isNaN(b)) return false;
    const tol = Math.max(1e-6, Math.abs(b) * 1e-4);
    return Math.abs(a - b) <= tol;
  }

  function gradeNumeric(problem, str) {
    const target = parseNum(problem.numericAnswer);
    const u = parseNum(str);
    if (numEqual(u, target)) return true;
    const norm = String(str).trim().replace(/\s+/g, "");
    for (const a of (problem.acceptedAnswers || [])) {
      if (numEqual(u, parseNum(a))) return true;
      if (norm && norm === String(a).trim().replace(/\s+/g, "")) return true;
    }
    return false;
  }

  function grade(problem, ans) {
    if (problem.type === "NumericEntry") return gradeNumeric(problem, ans);
    if (problem.type === "MC_multi") {
      const want = (problem.correct || []).slice().sort().join(",");
      const got = (Array.isArray(ans) ? ans.slice().sort() : []).join(",");
      return want === got && want.length > 0;
    }
    // QC, MC_single
    return Array.isArray(problem.correct) && problem.correct[0] === ans;
  }

  function answerLabel(problem) {
    if (problem.answerLabel) return problem.answerLabel;
    if (problem.type === "NumericEntry") return problem.numericAnswer;
    if (problem.type === "MC_multi") return (problem.correct || []).map(letter).join(", ");
    if (Array.isArray(problem.correct)) return letter(problem.correct[0]);
    return "";
  }
  function userLabel(problem, ans) {
    if (ans == null || (Array.isArray(ans) && ans.length === 0) || ans === "") return "(skipped)";
    if (problem.type === "NumericEntry") return String(ans);
    if (problem.type === "MC_multi") return ans.map(letter).join(", ");
    return letter(ans);
  }

  // ---- build the answer input block; returns { node, get } ----
  function buildInputs(problem, onChange) {
    const wrap = r.el("div", "q-choices");
    if (problem.type === "NumericEntry") {
      const inp = r.el("input", "num-entry");
      inp.type = "text"; inp.inputMode = "decimal";
      inp.placeholder = "Type your answer (a decimal or a fraction like 3/4)";
      inp.autocomplete = "off";
      inp.addEventListener("input", onChange);
      wrap.appendChild(inp);
      return { node: wrap, get: () => inp.value.trim(), focus: () => inp.focus(), input: inp };
    }
    const multi = problem.type === "MC_multi";
    const name = "ch-" + Math.random().toString(36).slice(2);
    const inputs = [];
    (problem.choices || []).forEach((c, i) => {
      const row = r.el("label", "choice");
      const box = document.createElement("input");
      box.type = multi ? "checkbox" : "radio";
      box.name = name; box.value = String(i);
      box.addEventListener("change", onChange);
      const tag = r.el("span", "choice-letter", letter(i));
      const txt = r.el("span", "choice-text", r.mathText(c));
      row.appendChild(box); row.appendChild(tag); row.appendChild(txt);
      wrap.appendChild(row);
      inputs.push(box);
    });
    return {
      node: wrap,
      get: () => {
        if (multi) return inputs.map((b, i) => b.checked ? i : -1).filter(i => i >= 0);
        const sel = inputs.findIndex(b => b.checked);
        return sel >= 0 ? sel : null;
      }
    };
  }

  function feedbackPanel(problem, ans, correct) {
    const fb = r.el("div", "q-feedback " + (correct ? "good" : "bad"));
    const verdict = correct ? "✓ Correct" : (ans == null || ans === "" || (Array.isArray(ans) && !ans.length) ? "— Skipped" : "✗ Not quite");
    fb.appendChild(r.el("div", "verdict", verdict));
    const ans1 = r.el("div", "fb-line", "<strong>Answer:</strong> " + r.mathText(answerLabel(problem)));
    fb.appendChild(ans1);
    if (!correct) fb.appendChild(r.el("div", "fb-line muted", "<strong>You chose:</strong> " + r.mathText(userLabel(problem, ans))));
    fb.appendChild(r.el("div", "fb-block", "<div class='fb-h'>⚡ Fastest method</div>" + r.mathText(problem.fastMethod)));
    fb.appendChild(r.el("div", "fb-block trap", "<div class='fb-h'>⚠ The trap</div>" + r.mathText(problem.trap)));
    const sol = r.el("details", "fb-details");
    sol.appendChild(r.el("summary", null, "Full solution"));
    sol.appendChild(r.el("div", "fb-sol", r.mathText(problem.solution)));
    if (problem.verification) sol.appendChild(r.el("div", "fb-verify", "✓ Verified: " + r.mathText(problem.verification)));
    fb.appendChild(sol);

    // explain with coach
    const explainBtn = r.el("button", "ghost-btn small", "✦ Ask the coach to explain");
    const explainOut = r.el("div", "explain-out");
    explainOut.hidden = true;
    explainBtn.addEventListener("click", async () => {
      if (!GRE.store.hasKey()) { r.toast("Add your API key in Settings first.", "bad"); return; }
      explainBtn.disabled = true; explainBtn.textContent = "Coach is thinking…";
      explainOut.hidden = false; explainOut.innerHTML = "";
      try {
        const prompt = GRE.prompts.explainProblem(problem, userLabel(problem, ans), correct);
        let acc = "";
        await GRE.api.chat([{ role: "user", content: prompt }], (delta, full) => {
          acc = full; explainOut.innerHTML = r.mdLite(full);
        });
        explainBtn.textContent = "✦ Explained";
      } catch (e) {
        explainOut.innerHTML = "<span class='err'>" + r.esc(e.message) + "</span>";
        explainBtn.disabled = false; explainBtn.textContent = "✦ Try again";
      }
    });
    fb.appendChild(explainBtn);
    fb.appendChild(explainOut);
    return fb;
  }

  // ============ the quiz controller ============
  // opts: { mode:'practice'|'exam', sectionSeconds, title, subtitle, onFinish }
  function createQuiz(mount, problems, opts) {
    opts = opts || {};
    const mode = opts.mode || "practice";
    const N = problems.length;
    const answers = new Array(N).fill(null);
    const submitted = new Array(N).fill(false);
    const correctFlags = new Array(N).fill(false);
    const times = new Array(N).fill(0);
    const marked = new Array(N).fill(false);
    let idx = 0;
    let qStart = Date.now();
    let sectionTimer = null;
    let sectionRemaining = opts.sectionSeconds || 0;
    let finished = false;

    mount.innerHTML = "";
    const head = r.el("div", "quiz-head");
    head.innerHTML =
      "<div><div class='quiz-title'>" + r.esc(opts.title || "Practice") + "</div>" +
      (opts.subtitle ? "<div class='quiz-sub'>" + r.esc(opts.subtitle) + "</div>" : "") + "</div>";
    const timerBox = r.el("div", "quiz-timer");
    head.appendChild(timerBox);
    mount.appendChild(head);

    const palette = r.el("div", "palette");
    if (mode === "exam") mount.appendChild(palette);

    const body = r.el("div", "quiz-body");
    mount.appendChild(body);

    function renderPalette() {
      palette.innerHTML = "";
      for (let i = 0; i < N; i++) {
        const b = r.el("button", "pal" +
          (i === idx ? " cur" : "") +
          (answers[i] != null && !(Array.isArray(answers[i]) && !answers[i].length) && answers[i] !== "" ? " ans" : "") +
          (marked[i] ? " mark" : ""), String(i + 1));
        b.addEventListener("click", () => { saveCurrent(); idx = i; render(); });
        palette.appendChild(b);
      }
    }

    function startSectionTimer() {
      timerBox.classList.add("countdown");
      const tick = () => {
        timerBox.innerHTML = "⏱ <strong>" + r.mmss(sectionRemaining) + "</strong> left";
        if (sectionRemaining <= 30) timerBox.classList.add("danger");
        if (sectionRemaining <= 0) { finish(); return; }
        sectionRemaining--;
      };
      tick();
      sectionTimer = setInterval(tick, 1000);
    }

    let qClock = null;
    function startQClock() {
      clearInterval(qClock);
      qStart = Date.now();
      if (mode === "practice") {
        const tick = () => {
          const s = (Date.now() - qStart) / 1000;
          timerBox.innerHTML = "⏱ <strong>" + r.mmss(s) + "</strong>" +
            (s > GRE.store.PACE_SEC ? " <span class='over'>over pace</span>" : "");
        };
        tick(); qClock = setInterval(tick, 1000);
      }
    }

    function saveCurrent() {
      if (current && current.get && !submitted[idx]) answers[idx] = current.get();
      times[idx] += (Date.now() - qStart) / 1000;
    }

    let current = null;
    function render() {
      const p = problems[idx];
      startQClock();
      if (mode === "exam") renderPalette();
      body.innerHTML = "";

      const top = r.el("div", "q-top");
      top.innerHTML = "<div class='q-meta'>Q " + (idx + 1) + " / " + N + " · " +
        r.esc(p.area) + " · " + TYPE_LABEL[p.type] + " · " + r.esc(p.difficulty) + "</div>";
      const calcBtn = r.el("button", "ghost-btn small", "🖩 Calculator");
      calcBtn.addEventListener("click", () => GRE.calc.open());
      top.appendChild(calcBtn);
      body.appendChild(top);

      body.appendChild(r.el("div", "q-stem", r.mathText(p.stem)));
      if (p.type === "MC_multi") body.appendChild(r.el("div", "q-hint", "Select every correct option — no partial credit."));

      current = buildInputs(p, () => { if (mode === "exam") { answers[idx] = current.get(); renderPalette(); } });
      // restore prior answer
      if (answers[idx] != null) restore(current, p, answers[idx]);
      body.appendChild(current.node);

      const actions = r.el("div", "q-actions");
      if (mode === "practice") {
        const submit = r.el("button", "primary-btn", submitted[idx] ? "Next →" : "Submit");
        submit.addEventListener("click", () => {
          if (!submitted[idx]) doSubmitPractice(submit);
          else next();
        });
        actions.appendChild(submit);
        const skip = r.el("button", "ghost-btn", "Skip");
        skip.addEventListener("click", () => { if (!submitted[idx]) { answers[idx] = null; doSubmitPractice(submit); } });
        if (!submitted[idx]) actions.appendChild(skip);
      } else {
        if (idx > 0) { const prev = r.el("button", "ghost-btn", "← Prev"); prev.addEventListener("click", () => { saveCurrent(); idx--; render(); }); actions.appendChild(prev); }
        const mark = r.el("button", "ghost-btn" + (marked[idx] ? " active" : ""), marked[idx] ? "✓ Marked" : "Mark for review");
        mark.addEventListener("click", () => { marked[idx] = !marked[idx]; renderPalette(); mark.textContent = marked[idx] ? "✓ Marked" : "Mark for review"; mark.classList.toggle("active", marked[idx]); });
        actions.appendChild(mark);
        if (idx < N - 1) { const nx = r.el("button", "primary-btn", "Next →"); nx.addEventListener("click", () => { saveCurrent(); idx++; render(); }); actions.appendChild(nx); }
        else { const fin = r.el("button", "primary-btn", "Finish & score"); fin.addEventListener("click", () => { saveCurrent(); confirmFinish(); }); actions.appendChild(fin); }
      }
      body.appendChild(actions);

      if (mode === "practice" && submitted[idx]) {
        body.appendChild(feedbackPanel(p, answers[idx], correctFlags[idx]));
      }
      if (current.focus && !submitted[idx]) current.focus();
    }

    function restore(ctrl, p, ans) {
      if (p.type === "NumericEntry" && ctrl.input) ctrl.input.value = ans;
      else if (ctrl.node) {
        const boxes = ctrl.node.querySelectorAll("input");
        if (p.type === "MC_multi" && Array.isArray(ans)) ans.forEach(i => { if (boxes[i]) boxes[i].checked = true; });
        else if (typeof ans === "number" && boxes[ans]) boxes[ans].checked = true;
      }
    }

    function doSubmitPractice(submitBtn) {
      const p = problems[idx];
      answers[idx] = current.get();
      times[idx] += (Date.now() - qStart) / 1000;
      const ok = grade(p, answers[idx]);
      submitted[idx] = true; correctFlags[idx] = ok;
      GRE.store.recordAttempt(p.topic, ok, times[idx], {
        type: p.type, stem: p.stem, yourAnswer: userLabel(p, answers[idx]),
        answerLabel: answerLabel(p), trap: p.trap
      });
      render();
      const fb = body.querySelector(".q-feedback");
      if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function next() {
      if (idx < N - 1) { idx++; render(); }
      else finishPractice();
    }

    function confirmFinish() {
      const unanswered = answers.filter((a, i) => a == null || a === "" || (Array.isArray(a) && !a.length)).length;
      let msg = "Finish and score this section?";
      if (unanswered) msg += "\n\n" + unanswered + " question(s) are blank. On the real GRE you'd guess on every one (no penalty).";
      if (confirm(msg)) finish();
    }

    function gradeAll() {
      for (let i = 0; i < N; i++) {
        const ok = grade(problems[i], answers[i]);
        correctFlags[i] = ok;
        if (!submitted[i]) {
          submitted[i] = true;
          GRE.store.recordAttempt(problems[i].topic, ok, times[i] || (opts.sectionSeconds ? opts.sectionSeconds / N : 90), {
            type: problems[i].type, stem: problems[i].stem,
            yourAnswer: userLabel(problems[i], answers[i]),
            answerLabel: answerLabel(problems[i]), trap: problems[i].trap
          });
        }
      }
    }

    function results() {
      const correct = correctFlags.filter(Boolean).length;
      const totalTime = times.reduce((a, b) => a + b, 0);
      return { problems, answers, correctFlags, times, correct, total: N, totalTime, marked, mode, title: opts.title };
    }

    function finish() {
      if (finished) return; finished = true;
      clearInterval(sectionTimer); clearInterval(qClock);
      gradeAll();
      const res = results();
      GRE.store.logSession(mode === "exam" ? "section" : "drill", opts.title || "", N, res.correct);
      if (opts.onFinish) opts.onFinish(res, mount);
    }
    function finishPractice() {
      if (finished) return; finished = true;
      clearInterval(qClock);
      const res = results();
      GRE.store.logSession("drill", opts.title || "", N, res.correct);
      if (opts.onFinish) opts.onFinish(res, mount);
    }

    // boot
    if (mode === "exam" && opts.sectionSeconds) startSectionTimer();
    render();

    return { destroy: () => { clearInterval(sectionTimer); clearInterval(qClock); } };
  }

  GRE.quiz = { create: createQuiz, grade, answerLabel, userLabel, TYPE_LABEL, letter };
})();
