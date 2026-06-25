# L08 — Percents and percent change

_Area: Arithmetic · Topic: percent_and_percent_change_


## Concept

## What a percent actually is

"Percent" means "per hundred." `37%` is just the number `37/100 = 0.37`. That's the whole idea. A percent is not a special object — it's a fraction with a hidden denominator of 100, or equivalently a decimal. Train yourself to swap between the three forms on sight: `25% = 1/4 = 0.25`. The GRE rewards the person who sees `16%` and instantly thinks `0.16`, and who sees "what percent" and instantly thinks "part divided by whole, times 100."

## The one sentence that solves "percent OF" problems

**"X percent OF a number" = (X/100) × that number.** The word "of" means multiply.

- 30% of 80 = 0.30 × 80 = 24.
- "What percent of 50 is 12?" → 12/50 = 0.24 = 24%. (part ÷ whole)
- "15 is 25% of what?" → 15 = 0.25 × W, so W = 15/0.25 = 60.

Every basic percent question is one of those three shapes. Identify which quantity is missing (the part, the whole, or the percent) and the rest is one operation.

## Percent OF vs percent CHANGE — the single biggest trap

These are different questions and the GRE deliberately blurs them.

- **Percent of** asks for a piece of a number right now. "20 is what percent of 80?" → 25%.
- **Percent change** asks how much a number grew or shrank *relative to where it started*. Always: `(new − old) / OLD × 100`.

The killer detail: percent change divides by the **original** value, never the new one. Going from 40 to 50 is a 25% increase (10/40), but going from 50 back to 40 is a 20% decrease (10/50). Same 10-point gap, different percents, because the base changed. A rushed test-taker uses the wrong base and loses the point.

## The multiplier method — your most important tool

Stop thinking "add the percent." Think **multiply by a single number.**

- A **20% increase** multiplies by `1.20` (the original 100% plus 20% more = 120% = 1.20).
- A **20% decrease** multiplies by `0.80` (100% minus 20% = 80% = 0.80).
- A **7% decrease** → `0.93`. A **150% increase** → `2.50`.

Why this is gold: it turns multi-step percent chains into plain multiplication, and it kills the most common error in the topic.

## Successive / compound change — why you can't just add

If a price rises 20% then falls 20%, you do **not** end up where you started. Percents are taken on *different bases*. Use multipliers and chain them:

`100 × 1.20 × 0.80 = 96.` You're down 4%, not even.

The rule: **for back-to-back percent changes, multiply the multipliers.** Never add or subtract the percentages directly. Any time you see "then" — "increased 10%, then decreased 10%" — reach for multipliers automatically.

## Reverse percent — finding the original

When a problem gives you the *final* value after a change and asks for the *starting* value, you **divide by the multiplier** (don't multiply).

"After a 25% increase, the price is $90. What was it before?" The new price is `original × 1.25 = 90`, so `original = 90 / 1.25 = 72`. The trap is taking 25% of $90 ($22.50) and subtracting — wrong, because the 25% was based on the *original*, not the final price.

## Percentage points vs percent

"Interest rose from 4% to 6%" is a rise of **2 percentage points**, but a **50% increase** (2/4). The GRE loves this distinction. "Points" = subtract directly. "Percent change" = divide by the original.


## Formulas that earn points

**Percent ↔ decimal ↔ fraction:** `X% = X/100 = 0.0X`
*When:* always, the instant you see a percent — convert before computing.

**Percent of:** `(part) = (percent/100) × (whole)`
*When:* "what is P% of N", finding a piece of a known total.

**What percent / find the rate:** `percent = (part / whole) × 100`
*When:* "X is what percent of Y", the percent is the unknown.

**Find the whole:** `whole = part / (percent/100)`
*When:* "X is P% of what number", the base is unknown.

**Percent change:** `% change = (new − old) / old × 100`
*When:* increase/decrease problems. Denominator is ALWAYS the original.

**Increase multiplier:** `× (1 + r)` where r is the decimal rate (e.g., +30% → ×1.30)
*When:* applying a single increase, or building a chain.

**Decrease multiplier:** `× (1 − r)` (e.g., −15% → ×0.85)
*When:* applying a single decrease, or building a chain.

**Successive changes:** `final = original × m₁ × m₂ × … × mₙ`
*When:* two or more changes "in a row" / "then". Multiply multipliers; never add percents.

**Reverse percent (find original):** `original = final / multiplier`
*When:* given the result after a change, asked for the start. Divide, don't multiply.

**Percentage points:** `new_rate − old_rate` (direct subtraction, units stay "points")
*When:* the values are themselves percents and the question says "points."


## Mental-math / speed

**Memorize these fraction ↔ percent equivalents — they turn ugly multiplication into instant answers:**
- 1/2 = 50%, 1/3 ≈ 33.3%, 2/3 ≈ 66.7%, 1/4 = 25%, 3/4 = 75%
- 1/5 = 20%, 2/5 = 40%, 3/5 = 60%, 4/5 = 80%
- 1/6 ≈ 16.7%, 1/8 = 12.5%, 3/8 = 37.5%, 5/8 = 62.5%
- 1/9 ≈ 11.1%, 1/10 = 10%, 1/12 ≈ 8.3%, 1/20 = 5%

**Build any percent from 10% and 1%:**
- 10% of a number = move the decimal one place left (10% of 340 = 34).
- 1% = move it two places (1% of 340 = 3.4).
- 30% of 340 = 3 × 34 = 102. 5% = half of 10%. 15% = 10% + 5%.

**Percent-of is reversible:** "8% of 50" = "50% of 8" = 4. When one factor is friendly (like 50%, 25%, 10%), flip them.

**Multiplier reflexes:** +10% → ×1.1, −10% → ×0.9, +50% → ×1.5, double → +100% → ×2, triple → +200% → ×3, halve → −50% → ×0.5.

**The +x% then −x% shortcut:** a rise then equal fall of x% always leaves you below start by exactly `x²/100` percent. +10%/−10% → down 1%. +20%/−20% → down 4%. +50%/−50% → down 25%. Memorize this; it appears constantly in QC.

**Increase of 100% = doubles; 200% = triples.** "300% more" means 4× the original (original + 3× more). Read "more than" carefully.


## Worked examples


**Example 1.** A store raises the price of a $200 jacket by 25%, then puts it on sale for 20% off the new price. What is the final price?

*Fast method:* Multiplier chain, no addition. +25% → ×1.25, then −20% → ×0.80. Final = 200 × 1.25 × 0.80. Notice 1.25 × 0.80 = 1.00 exactly, so final = 200 × 1.00 = $200. Even faster: 25% of 200 is 50, giving $250; then 20% of 250 is 50, giving $200. The two cancel.

*Trap:* Adding the percents: +25% then −20% feels like 'net +5%', so the rusher answers $210. But the −20% is taken on the larger $250 base, not the original $200, so it removes more than the 25% added. Multipliers protect you: 1.25 × 0.80 = 1.00, not 1.05.


**Example 2.** After a price is reduced by 40%, it sells for $54. What was the original price?

*Fast method:* This is reverse percent — given the result, find the start, so DIVIDE by the multiplier. A 40% reduction is ×0.60. Original = 54 / 0.60 = $90. Sanity check: 40% of 90 is 36, and 90 − 36 = 54. Correct.

*Trap:* Taking 40% of $54 ($21.60) and adding it back to get $75.60. Wrong base — the 40% was a fraction of the unknown original, not of the final $54. Whenever you're handed the AFTER value, divide by the multiplier; never apply the percent to the final number.


**Example 3.** The number of members rose from 80 to 100 in year one, then fell back to 80 in year two. Quantity A: the percent increase in year one. Quantity B: the percent decrease in year two.

*Fast method:* Percent change divides by the ORIGINAL (starting) value each year. Year 1: (100 − 80)/80 = 20/80 = 25%. Year 2: (80 − 100)/100 = −20/100 = −20%, i.e., a 20% decrease. So A = 25%, B = 20%. Quantity A is greater.

*Trap:* Assuming that since the count returns to where it started, the up-percent and down-percent must be equal (picking 'C, the two are equal'). They can't be: the increase is measured against the smaller base (80) and the decrease against the larger base (100), so the same 20-member swing is a bigger percent on the way up. A > B.


## Practice (try before reading answers)


**P1** (easy, MC-one). What is 30% of 80?
- A) 2.4
- B) 11
- C) 24
- D) 50
- E) 240

**P2** (easy, Numeric). A town's population grew from 40,000 to 50,000. By what percent did it increase? (Enter a number; e.g., enter 12 for 12%.)

**P3** (medium, QC). A $100 item is increased by 20%, then the new price is decreased by 20%. Quantity A: the final price. Quantity B: $100.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P4** (medium, MC-one). After a 25% increase, the price of a book is $90. What was the original price, in dollars?
- A) $65
- B) $67.50
- C) $72
- D) $75
- E) $112.50

**P5** (hard, MC-select). Which of the following sequences of two successive percent changes produces the same overall result as a single 20% increase? Indicate all that apply.
- A) a 50% increase followed by a 20% decrease
- B) a 20% increase followed by a 20% increase
- C) a 10% increase followed by a 10% increase
- D) a 60% increase followed by a 25% decrease
- E) a 100% increase followed by a 40% decrease

**P6** (hard, Numeric). An employee's salary increases by 10% in year one, decreases by 10% in year two, and increases by 10% in year three. Over the three years combined, the salary changes by what percent? (If it is a decrease, enter a negative number; round to the nearest tenth.)


---
## Answers, fast solutions & traps


**P1 — C**  
Solution: 30% = 0.30. 0.30 × 80 = 24. Or: 10% of 80 = 8, so 30% = 3 × 8 = 24.  
Trap: Misplacing the decimal and answering 2.4 (that's 3%) or 240 (that's 3000%). Anchor on 10% = 8 to keep the size right.


**P2 — 25**  
Solution: Percent change = (new − old)/old × 100 = (50,000 − 40,000)/40,000 × 100 = 10,000/40,000 × 100 = 1/4 × 100 = 25%.  
Trap: Dividing by the NEW value (10,000/50,000 = 20%). Percent change always divides by the original, 40,000.


**P3 — B**  
Solution: Use multipliers: 100 × 1.20 × 0.80 = 100 × 0.96 = $96. Or use the shortcut: +x% then −x% drops you by x²/100 = 400/100 = 4%, landing at $96. So A = 96 < 100 = B. Quantity B is greater.  
Trap: Thinking +20% and −20% cancel to $100 (choosing C). The −20% is taken on the larger $120 base, so it removes more than was added.


**P4 — C**  
Solution: Reverse percent: divide by the multiplier. A 25% increase is ×1.25, so original = 90/1.25 = $72. Check: 25% of 72 = 18, and 72 + 18 = 90.  
Trap: Taking 25% of $90 ($22.50) and subtracting to get $67.50. Wrong base — the 25% was based on the original, not the final $90. Divide by 1.25; don't subtract a percent of the final price.


**P5 — A,D,E**  
Solution: A single 20% increase is a net multiplier of 1.20. Multiply each pair: A) 1.50 × 0.80 = 1.20 ✓. B) 1.20 × 1.20 = 1.44 ✗. C) 1.10 × 1.10 = 1.21 ✗. D) 1.60 × 0.75 = 1.20 ✓. E) 2.00 × 0.60 = 1.20 ✓. Correct: A, D, E.  
Trap: Picking C because 1.10 × 1.10 'looks like' 20% (10 + 10). Successive changes multiply, giving 1.21, not 1.20 — close enough to fool a rusher but wrong. Also picking B by adding 20 + 20 = 40 and confusing it with the target.


**P6 — 8.9**  
Solution: Chain the multipliers: 1.10 × 0.90 × 1.10. First 1.10 × 0.90 = 0.99, then 0.99 × 1.10 = 1.089. Net change = (1.089 − 1) × 100 = +8.9%.  
Trap: Adding the percents to get +10 − 10 + 10 = +10%, or assuming the +10/−10 pair cancels and answering +10%. Each percent applies to a different base, so you must multiply: the true result is +8.9%, not +10%.


## Common mistakes

**1. Dividing percent change by the wrong base.** Percent change is always `(new − old)/OLD`. Students reflexively divide by the new value or the larger value. Fix: physically write the original number in the denominator before you compute anything.

**2. Adding percentages across successive changes.** "+30% then −10%" is NOT +20%. It's ×1.30 × 0.90 = 1.17, a 17% increase. Fix: the word "then" = multiply multipliers, every single time. Never add or subtract the rates.

**3. Reversing a percent by applying it to the final value.** Given "after a 20% discount, price is $80," students take 20% of $80 and add it back. Wrong base. Fix: the final = original × multiplier, so original = final ÷ multiplier ($80/0.80 = $100). Divide, don't multiply.

**4. Confusing percentage points with percent change.** A tax rate going from 5% to 7% is +2 percentage points but a +40% change. Fix: "points" → subtract directly; "percent increase/decrease" → divide by the original.

**5. Decimal placement and misreading "percent of."** Computing 0.30 × 80 as 2.4 or 240, or reading "8 is what percent of 40" backwards. Fix: anchor every answer with 10% (move decimal one place) for a size check, and remember "of" = multiply, "is what percent of" = part ÷ whole.
