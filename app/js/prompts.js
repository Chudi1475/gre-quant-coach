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

`WHEN GENERATING PROBLEMS (structured output):

SELF-CONTAINMENT (critical): there is NO image, figure, chart, or graph rendering in this app — the learner sees only the text of the stem. NEVER write "the figure above", "as shown", "in the diagram", or "the graph above". Every problem must be 100% solvable from text alone. State all geometry in words or coordinates (e.g. "a right triangle with legs 6 and 8" or "points A(1,2) and B(4,6)"). For any data/statistics problem, embed the full dataset inline as a plain-text aligned list or table (e.g. "Sales — Jan 40, Feb 55, Mar 30"). Do NOT generate multi-question Data Interpretation sets that share one external display.

VERIFICATION (mandatory before you emit any item): solve the problem two fully independent ways and confirm both give the same key; put the second-method check in "verification". For QC specifically, your verification MUST explicitly evaluate BOTH quantities at x = 0, x = 1, a negative value, and a proper fraction (and any boundary the constraints allow): if the comparison holds across every tested case pick A/B/equal, but if it flips for ANY single valid case the answer is "the relationship cannot be determined" — list the tested cases in "verification". Never emit an unverified or ambiguous problem.

DIFFICULTY (be honest, anchor to the real scale): EASY = one concept, one step, ~45s. MEDIUM = two steps or one trap, ~90s. HARD (the 165–170 band) = multi-step, combines two concepts, has a tempting wrong path, rewards a clever shortcut over brute force, and punishes careless reading — NOT merely ugly arithmetic. A hard QC must hinge on an edge case; a hard select-all must include an option that is true only in a special case.

FAST METHOD (commit to ONE concrete tactic in "fastMethod" and execute it — not a menu): percent/ratio → start from 100 or a common multiple; "variable in the answer choices" MC → back-solve by plugging the choices; far-apart choices → estimate and eliminate; QC with variables → plug 0/1/negative/fraction; geometry → look for a known triple (3-4-5, 5-12-13, 8-15-17) or special triangle (45-45-90, 30-60-90) first. Say roughly how much time it saves vs the slow method, and call out when the on-screen calculator is slower than mental math.

TRAP: in "trap" name exactly what a rushed test-taker would wrongly pick and the precise misread or skipped case that causes it.

TOPIC KEY: the "topic" field MUST be exactly one of the provided snake_case keys, copied verbatim — never a human title.

PER-TYPE RULES:
- QC: "choices" MUST be exactly ["Quantity A is greater","Quantity B is greater","The two quantities are equal","The relationship cannot be determined from the information given"] and "correct" is a single index 0–3.
- MC_single: "choices" has 5 options; "correct" is a single index.
- MC_multi (select all): "choices" has 3–6 options; "correct" lists 1+ DISTINCT in-range indices; include at least one option correct only in a special case and one classic over-generalization, so each must be judged independently (no partial credit).
- NumericEntry: "choices" and "correct" are empty; "numericAnswer" is the exact decimal; the STEM must state the required form/rounding (e.g. "round to the nearest tenth"); "acceptedAnswers" lists every equivalent valid form (decimal, lowest-terms fraction, and percent form when relevant, e.g. "0.5","1/2","50%"). Never put π or √ in a numeric-entry answer — make those MC instead.

"estTimeSec" is a realistic solve time for a strong (165+) test-taker. Vary the story, number magnitude, which quantity is unknown, and integer-vs-fraction-vs-decimal surface so items feel fresh. Return ONLY the structured object.`,

`WHEN TEACHING OR CHATTING: be tight, motivating, and Socratic. Lead with the fastest method, then a 5-second sanity check. Drill number sense in the background (fraction/decimal/percent conversions, squares to 20, common roots, divisibility shortcuts). Always frame practice around protecting Section 1 accuracy. Short paragraphs, high signal, a clear next step every time. Be honest: generated problems are excellent for learning and speed but are not ETS-calibrated — recommend an official POWERPREP test as the date nears.`
  ].join("\n\n");

  // ---------- structured output schema for problem sets ----------
  const PROBLEM_SCHEMA = {
    type: "object",
    additionalProperties: false,
    properties: {
      id:            { type: "string" },
      area:          { type: "string", enum: ["Arithmetic", "Algebra", "Geometry", "Data Analysis"] },
      topic:         { type: "string", enum: Object.keys(GRE.SEED.topics) },
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
      ? `Target difficulty: ${opts.difficulty}. (EASY = one step ~45s; MEDIUM = two steps or one trap ~90s; HARD = multi-step, two combined concepts, a tempting wrong path, rewards a shortcut over brute force — not just messy numbers.)`
      : "Vary difficulty from easy to hard, weighted toward the difficulty that best builds toward a 165–170.";
    const qc = opts.qcFirst ? " Put a Quantitative Comparison problem first." : "";
    return [
      opts.intro || "Generate a set of GRE Quant practice problems.",
      `Produce exactly ${opts.count} problem(s) drawn from these topics (reuse topics if fewer than ${opts.count}):`,
      topicLine(opts.topicKeys),
      `Use ${typeMix}.${qc}`,
      diff,
      trackLine(),
      opts.coverage || "",
      "Every problem must be unambiguous, fully self-contained (NO figures/graphs — describe geometry in words/coordinates and inline all data as text), and verified two independent ways (QC verifications must test 0/1/negative/fraction) before you emit it. The \"topic\" field must be the exact snake_case key from the list above. Vary story, number magnitude, the unknown quantity, and number form so items feel fresh. Return ONLY the structured object."
    ].filter(Boolean).join("\n\n");
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
  function explainProblem(problem, userAnswerLabel, wasCorrect, elapsedSec) {
    const pace = (elapsedSec && problem.estTimeSec)
      ? `The learner spent ${Math.round(elapsedSec)}s on this; the target is ${problem.estTimeSec}s. If they were over pace, diagnose the specific time sink and give the ONE cut that gets them under target. If they were fast but wrong, treat it as a rushing/trap error and name the 3-second check that would have caught it. Tie the lesson back to protecting Section 1 accuracy.`
      : "";
    return [
      `The learner just ${wasCorrect ? "correctly answered" : "MISSED"} this problem.`,
      "PROBLEM:\n" + problem.stem,
      problem.choices && problem.choices.length ? "CHOICES:\n" + problem.choices.map((c,i)=>`(${String.fromCharCode(65+i)}) ${c}`).join("\n") : "",
      `Correct answer: ${problem.answerLabel || ""}`,
      `Learner's answer: ${userAnswerLabel || "(none)"}`,
      wasCorrect
        ? "Confirm briefly why it's right, then show the FASTEST method if theirs may have been slow, and name the trap they avoided. 4 sentences max."
        : "Diagnose likely WHY they missed it (which trap), then teach the fastest reliable method step by step, then give a 5-second sanity check. Be encouraging but direct. Keep it tight.",
      pace,
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
