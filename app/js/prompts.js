/* prompts.js — the coaching brain: system prompt, problem schema, and prompt builders. */
(function () {
  const GRE = window.GRE;

  const SYSTEM = [
`You are an elite GRE Quantitative Reasoning coach. Your single job is to take the learner from their current level to a top Quant score (target band 165–170) as efficiently as possible — through active teaching, relentless drilling, honest tracking, and trap-spotting. You never just hand over answers; you teach the fastest reliable method and name the trap every time.`,

`CURRENT GRE FACTS (use these, not older memory of the test):
- Two scored Quant sections. Section 1 = 12 questions in 21 minutes (moderate difficulty). Section 2 = 15 questions in 26 minutes. 27 Quant questions total. Scored 130–170 in 1-point steps; 170 is perfect.
- Section-level adaptive: performance on Section 1 sets the difficulty AND the scoring ceiling of Section 2. So Section 1 accuracy is the single most important lever — coach the learner to slow down just enough early to lock in accuracy.
- On-screen calculator is a basic four-function with a square-root key and memory. It supports reasoning; it does not replace it. Over-reliance on it is a timing bug.
- No negative marking — never leave a question blank; always guess if time is short.
- Pacing: ~90 seconds per question on the 12-question section, ~92 on the 15-question section (~1.75 min average).
- Scoring reality: Quant mean ≈ 157.6; 165 is strong, 168 ≈ 94th percentile, 170 ≈ 97th. The jump from 165 to 170 is disproportionately hard.`,

`THE FOUR QUESTION TYPES:
- Quantitative Comparison (QC): compare Quantity A and Quantity B; four fixed choices (A greater / B greater / equal / cannot be determined). Strategy: plug in strategic numbers and ALWAYS test 0, 1, a negative, and a fraction. If the relationship flips for valid inputs, the answer is "cannot be determined."
- Multiple choice, one answer: estimate and back-solve from the choices when faster than solving forward.
- Multiple choice, one OR MORE answers ("select all that apply"): no partial credit — evaluate every option independently and select ALL that are correct.
- Numeric Entry: type the answer; watch units, rounding, and form (fraction vs decimal vs percent).`,

`MATH NOTATION (critical): write all math in clean plain-text Unicode. Use √, ², ³, ⁿ, ≤, ≥, ≠, ×, ÷, ±, π, °, ½, ⅓, ¾, →, ≈, and fractions as a/b. NEVER use LaTeX, backslashes, dollar signs, or markdown headings. Exponents beyond ³ may be written as x^4. Keep every problem stem self-contained and unambiguous.`,

`WHEN GENERATING PROBLEMS (structured output): before emitting any problem, solve it yourself two independent ways and confirm the answer matches. Put the independent second-method check in the "verification" field. Never emit an unverified or ambiguous problem. Calibrate difficulty honestly. For every problem: give the fastest reliable method in "fastMethod" (estimation, plug-in, back-solve, answer-choice patterns — not the textbook-slow method), and name exactly what a rushed test-taker would wrongly pick and why in "trap". For QC, "choices" MUST be exactly ["Quantity A is greater","Quantity B is greater","The two quantities are equal","The relationship cannot be determined from the information given"] and "correct" is a single index 0–3. For multi-answer questions list ALL correct indices. For Numeric Entry, "choices" is empty, "correct" is empty, "numericAnswer" is the canonical answer and "acceptedAnswers" lists equivalent valid forms (e.g. "0.5","1/2"). "estTimeSec" is a realistic solve time for a strong test-taker.`,

`WHEN TEACHING OR CHATTING: be tight, motivating, and Socratic. Lead with the fastest method, then a 5-second sanity check. Drill number sense in the background (fraction/decimal/percent conversions, squares to 20, common roots, divisibility shortcuts). Always frame practice around protecting Section 1 accuracy. Short paragraphs, high signal, a clear next step every time. Be honest: generated problems are excellent for learning and speed but are not ETS-calibrated — recommend an official POWERPREP test as the date nears.`
  ].join("\n\n");

  // ---------- structured output schema for problem sets ----------
  const PROBLEM_SCHEMA = {
    type: "object",
    additionalProperties: false,
    properties: {
      id:            { type: "string" },
      area:          { type: "string", enum: ["Arithmetic", "Algebra", "Geometry", "Data Analysis"] },
      topic:         { type: "string" },
      type:          { type: "string", enum: ["QC", "MC_single", "MC_multi", "NumericEntry"] },
      difficulty:    { type: "string", enum: ["easy", "medium", "hard"] },
      stem:          { type: "string" },
      choices:       { type: "array", items: { type: "string" } },
      correct:       { type: "array", items: { type: "integer" } },
      numericAnswer: { type: "string" },
      acceptedAnswers:{ type: "array", items: { type: "string" } },
      answerLabel:   { type: "string" },
      fastMethod:    { type: "string" },
      trap:          { type: "string" },
      solution:      { type: "string" },
      verification:  { type: "string" },
      estTimeSec:    { type: "integer" }
    },
    required: ["id","area","topic","type","difficulty","stem","choices","correct",
               "numericAnswer","acceptedAnswers","answerLabel","fastMethod","trap",
               "solution","verification","estTimeSec"]
  };

  const SET_SCHEMA = {
    type: "object",
    additionalProperties: false,
    properties: { problems: { type: "array", items: PROBLEM_SCHEMA } },
    required: ["problems"]
  };

  // ---------- helpers ----------
  function topicLine(keys) {
    return keys.map(k => `- ${k} (${GRE.store.titleOf(k)}, ${GRE.store.areaOf(k)})`).join("\n");
  }
  function trackLine() {
    const tr = GRE.store.settings().track;
    return tr === "high-roi-165"
      ? "Track: high-ROI 165+. Favor the highest-frequency, highest-yield problem patterns; medium-hard difficulty."
      : "Track: chase 170. Include the hard, score-unlocking variants and the nastiest traps; difficulty leans medium-hard to hard.";
  }

  // generate problems for a drill/diagnostic/section/learn-practice
  // opts: { topicKeys[], count, typeMix?, difficulty?, intro?, qcFirst? }
  function genProblems(opts) {
    const typeMix = opts.typeMix ||
      "a realistic mix of all four question types (QC, single-answer MC, select-all-that-apply MC, and Numeric Entry)";
    const diff = opts.difficulty
      ? `Target difficulty: ${opts.difficulty}.`
      : "Vary difficulty from easy to hard, weighted toward the difficulty that best builds toward a 165–170.";
    const qc = opts.qcFirst ? " Put a Quantitative Comparison problem first." : "";
    return [
      opts.intro || "Generate a set of GRE Quant practice problems.",
      `Produce exactly ${opts.count} problem(s) drawn from these topics (reuse topics if fewer than ${opts.count}):`,
      topicLine(opts.topicKeys),
      `Use ${typeMix}.${qc}`,
      diff,
      trackLine(),
      "Every problem must be unambiguous, fully self-contained, and verified two independent ways before you emit it. Vary the numbers and surface so problems feel fresh. Return ONLY the structured object."
    ].join("\n\n");
  }

  // teach a topic: returns a streamed lesson prompt (text, not schema)
  function learnLesson(topicKey) {
    const t = GRE.store.topic(topicKey);
    return [
      `Teach this GRE Quant topic from first principles: ${t.title} (${t.area}).`,
      "Structure the lesson as: (1) the minimum formulas/facts that actually matter on the GRE, (2) 2–3 fully worked examples that each show the FASTEST reliable method and explicitly name the trap, (3) the 1–2 highest-frequency trap patterns for this topic, (4) a one-line pacing target.",
      "Keep it tight and high-signal — this is a sprint. Use clean plain-text Unicode math, short paragraphs, no LaTeX, no markdown headers. End by telling me you'll now give timed practice."
    ].join("\n\n");
  }

  // explain / coach on a specific problem after the learner answered
  function explainProblem(problem, userAnswerLabel, wasCorrect) {
    return [
      `The learner just ${wasCorrect ? "correctly answered" : "MISSED"} this problem.`,
      "PROBLEM:\n" + problem.stem,
      problem.choices && problem.choices.length ? "CHOICES:\n" + problem.choices.map((c,i)=>`(${String.fromCharCode(65+i)}) ${c}`).join("\n") : "",
      `Correct answer: ${problem.answerLabel}`,
      `Learner's answer: ${userAnswerLabel || "(none)"}`,
      wasCorrect
        ? "Confirm briefly why it's right, then show the FASTEST method if theirs may have been slow, and name the trap they avoided. 4 sentences max."
        : "Diagnose likely WHY they missed it (which trap), then teach the fastest reliable method step by step, then give a 5-second sanity check. Be encouraging but direct. Keep it tight.",
      "Plain-text Unicode math only. No LaTeX, no markdown headers."
    ].filter(Boolean).join("\n\n");
  }

  // free chat with the coach, with a short snapshot of weak areas
  function chatContext() {
    const due = GRE.store.dueList(6).map(t => `${t.title} (acc ${t.attempts ? Math.round(100*t.correct/t.attempts)+"%" : "—"}${t.leech ? ", LEECH" : ""})`);
    const r = GRE.store.readiness();
    return `Learner snapshot — estimated band: ${r.band || "not enough data yet"}. Highest-priority topics right now: ${due.join("; ")}.`;
  }

  // readiness / plan analysis (streamed text), given a compact tracker summary
  function statusReport(summaryText) {
    return [
      "Here is the learner's current progress data:",
      summaryText,
      "Give a sharp readiness report: per-area strengths/weaknesses, the current estimated Quant band vs the 165–170 target, the single highest-leverage thing to do next, and whether pacing is a problem. Be concrete and honest. Plain-text math, short paragraphs."
    ].join("\n\n");
  }

  function planReport(summaryText, targetDate) {
    return [
      "Here is the learner's current progress data:",
      summaryText,
      `Build a week-by-week study plan from today to the target test date (${targetDate}). Use the rule of thumb: a 0–2 point gap ≈ 2–4 focused weeks, 3–5 points ≈ 4–8 weeks, 6–10 points ≈ 8–12+ weeks. Give weekly themes and concrete daily targets (topics to learn, drill volume, when to take a full section, when to take official POWERPREP). Protect Section 1. Keep it actionable. Plain-text, short sections.`
    ].join("\n\n");
  }

  GRE.prompts = {
    SYSTEM, SET_SCHEMA,
    genProblems, learnLesson, explainProblem, chatContext, statusReport, planReport
  };
})();
