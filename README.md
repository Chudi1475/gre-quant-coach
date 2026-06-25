# GRE Quant Coach

A clickable desktop app that coaches you to a top GRE Quantitative score (target band 165–170). It runs as its own app window and uses live AI to teach, drill, time, and track you — with every practice problem solved two independent ways before you see it.

## Run it
Double-click **GRE Quant Coach** on your Desktop. It opens in a clean app window (Microsoft Edge in app mode — no tabs, no address bar).

First launch: open **Settings (⚙)** and paste your Anthropic API key (get one at `console.anthropic.com → API Keys`). The key is stored only on this computer and is never written to backups or uploaded.

If the Desktop icon ever goes missing or you move the folder, re-create it:
```
powershell -ExecutionPolicy Bypass -File "app\install-shortcut.ps1"
```

## What's inside
- **Dashboard** — estimated band vs target, days to test, mastery by area, your single highest-leverage next step.
- **Learn a topic** — first-principles lesson → fastest method → timed practice.
- **Drill** — timed sets chosen by spaced repetition (your weakest, stalest, and "leech" topics first).
- **Full section** — adaptive simulation: Section 1 (12 Q / 21 min); do well and Section 2 (15 Q / 26 min) gets harder, exactly like the real test.
- **Diagnostic** — 27 questions in the real 12 + 15 split; sets your baseline.
- **Review & leeches** — clear topics you've missed twice; work your error log.
- **Ask the coach** — chat tutor, readiness report, week-by-week plan.
- **Formulas** — the formula sheet that actually shows up (works offline).
- On-screen **calculator** (four-function with √ and memory, like ETS), per-question and section **timers**, and pacing feedback.

All four GRE question types are supported (Quantitative Comparison, single-answer MC, select-all-that-apply with no partial credit, and Numeric Entry that accepts fractions or decimals).

## Your progress
Everything is saved in the app (in the browser, on this computer). Back it up or move it to another machine with **Settings → Export / Import backup**. The **📥 Save progress for coach** button (also automatic once a day) drops a snapshot in your Downloads so the daily coach can review it.

## Daily coach (optional)
A daily job can review what you studied, remember it, and improve the app for you. Enable it once:
```
powershell -ExecutionPolicy Bypass -File "app\setup-daily-coach.ps1"
```
Each day it reads your latest snapshot, updates `gre-quant/progress/learner-memory.md`, leaves a line in `gre-quant/progress/coach-notes.md`, makes one small targeted improvement, and commits it. Disable any time:
```
Unregister-ScheduledTask -TaskName 'GRE Coach Daily' -Confirm:$false
```

## Notes
- Generated problems are excellent for learning concepts, drilling question types, and building speed, but they are not ETS-calibrated. As your test nears, take an official **POWERPREP** practice test and trust that score as the truth.
- Model is set in Settings (Opus 4.8 recommended; Sonnet is faster/cheaper; Fable is most capable but slower).
