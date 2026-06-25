# L02b — Estimation and mental-math number sense

_Area: Arithmetic · Topic: estimation_


## Concept

## Why estimation wins the GRE

You have about 1.75 minutes per question. The students who hit 165+ are not faster *calculators* — they are faster *deciders*. They look at a problem, round everything to friendly numbers, get an approximate answer in 5 seconds, and use it to kill 3 or 4 wrong choices instantly. Often that approximation alone picks the answer. When it doesn't, it tells you which exact computation is worth your time.

Estimation is also your **lie detector**. After any calculation, ask "is this answer roughly the size I expected?" A misplaced decimal, a slipped digit, a wrong operation — almost all of these produce an answer that *looks wrong* the moment you compare it to a rough estimate. The on-screen calculator does not catch your mistakes. Your number sense does.

## The core idea: round to friendly numbers

Every messy number is close to a clean one.
- **802 ≈ 800**, **19.8 ≈ 20**, **0.49 ≈ 0.5 = 1/2**, **48% ≈ 1/2**, **0.33 ≈ 1/3**.
- Replace each ugly number with its friendly neighbor, do the easy arithmetic, then judge how far off your rounding pushed you.

The skill that makes this fast is **recognizing benchmarks on sight**: knowing that 3/8 is 0.375, that 5/8 is 62.5%, that √2 ≈ 1.41, that 13² = 169. You should not *compute* these on the test — you should *recall* them. That recall is what this lesson installs.

## Round smart, then correct for direction

When you round, track which way you pushed. If you rounded the top of a fraction **up** and the bottom **down**, you made the fraction **bigger** than the truth — so the real answer is a bit *smaller* than your estimate. This directional awareness is the difference between "about 20" and "a hair under 20," and on QC problems that hair decides the answer.

Rule of thumb: round **both** numbers the **same direction** when you can (both up or both down) so the errors partly cancel in products and quotients. When that's impossible, note which way the true answer leans.

## Squares, roots, and the "trap between two integers"

A √n that isn't a perfect square lives **between two consecutive integers**: the ones whose squares bracket n. √150 sits between 12 (144) and 13 (169), much closer to 12. The GRE loves to ask you to place a root, compare two roots, or compare a root to a plain number. If you've memorized squares 1–20, you do this in your head with zero calculator. If you haven't, you waste 40 seconds and still guess.

Master rounding plus benchmarks plus squares, and most "hard arithmetic" problems collapse into a 10-second sanity check.


## Formulas that earn points

**Percent ⇄ fraction conversion: x% = x/100.** Use to swap a messy percent for a clean fraction (e.g., 48% ≈ 1/2, 33% ≈ 1/3, 12.5% = 1/8).

**a% of b = b% of a.** Use to flip an awkward percent: 18% of 50 = 50% of 18 = 9.

**Percent of a number ≈ (rounded %) × (rounded number).** Use for any "what is __% of __" — round both, multiply, adjust for direction.

**Product/quotient estimation: round factors to one or two significant figures, then compute.** Use when choices are spread out; cancel zeros (800/20 = 40, not 800÷20 on the calculator).

**√n lies between the two integers whose squares bracket n.** Use to place or compare any non-perfect square root (k² ≤ n < (k+1)² ⇒ k ≤ √n < k+1).

**(x − ε)(x + ε) = x² − ε².** Use to compare a product of two numbers straddling a round value to that value's square: 19×21 = 20² − 1 = 399 < 400.

**Direction rule for fractions: bigger top or smaller bottom ⇒ bigger fraction.** Use to compare fractions and to know which way your rounding error went.


## Mental-math / speed

**Squares 1–20 (memorize cold):**
1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400.

**Common roots:** √2 ≈ 1.41, √3 ≈ 1.73, √5 ≈ 2.24, √10 ≈ 3.16. Drill these until they're reflexes.

**Simplify roots fast:** pull out the biggest perfect-square factor. √96 = √(16·6) = 4√6 ≈ 4(2.45) ≈ 9.8. √50 = √(25·2) = 5√2 ≈ 7.07.

**Fraction → decimal/percent benchmarks (instant recall):**
1/2 = .5 = 50%, 1/3 ≈ .333 ≈ 33.3%, 2/3 ≈ .667 ≈ 66.7%, 1/4 = .25, 3/4 = .75, 1/5 = .2 = 20%, 1/6 ≈ .167, 1/8 = .125 = 12.5%, 3/8 = .375, 5/8 = .625, 7/8 = .875, 1/9 ≈ .111, 1/11 ≈ .0909, 1/12 ≈ .083.

**Percent shortcuts:** 10% = move the decimal one left. 5% = half of 10%. 1% = move two left. 15% = 10% + 5%. 20% = double 10%. Build any percent from 10%, 5%, 1%.

**Flip the percent when it's easier:** a% of b = b% of a. 8% of 25 = 25% of 8 = 2.

**Multiply numbers straddling a round value:** 19×21 = 20²−1, 18×22 = 20²−4, 47×53 = 50²−9. (Difference-of-squares.)

**Sig-fig multiply:** 0.49 × 802 → 0.5 × 800 = 400. Then nudge: both rounded slightly off, true value ≈ 393, close enough to choose.

**Compare two fractions without common denominators:** cross-multiply (a/b vs c/d ⇒ compare a·d to b·c), or compare each to a benchmark like 1/2 or 1/3.


## Worked examples


**Example 1.** Estimate: 0.51 × 397 ÷ 24.6. Which of these is closest — 4, 8, 16, 80, or 160?

*Fast method:* Round to friendly numbers: 0.51 ≈ 1/2, 397 ≈ 400, 24.6 ≈ 25. So (1/2 × 400) ÷ 25 = 200 ÷ 25 = 8. Done in one breath. (Exact is ~8.23, so 8 is the answer.) The calculator would take longer and invite a decimal slip.

*Trap:* A rushed test-taker keys 0.51 × 397 first, gets ~202, then divides by 24.6 — fine if careful, but many fat-finger the decimal in 0.51 and land near 80 or 4. Estimation makes 8 obviously right and 80/4 obviously off by a factor of 10.


**Example 2.** Quantity A: √80. Quantity B: 9. Which is greater?

*Fast method:* Place √80 between memorized squares: 8²=64 and 9²=81. Since 80 < 81, √80 < 9. So B is greater — no calculator. You can even see √80 is just barely under 9 (80 vs 81), but 'barely under' is still under.

*Trap:* The trap is rounding √80 to 'about 9' and calling them equal. They are NOT equal — 80 ≠ 81. On QC, 'approximately equal' is never the answer; you must determine direction. Knowing 9² = 81 settles it instantly.


**Example 3.** A jacket costs $79.95. The store takes 30% off, then adds 8% sales tax on the discounted price. Estimate the final price to the nearest dollar — about $59, $63, $67, or $72?

*Fast method:* Round $79.95 ≈ $80. 30% off ⇒ pay 70% ⇒ 0.7 × 80 = $56. Add 8% tax: 8% of 56 ≈ 0.08 × 56 ≈ $4.5 (8% of 50 is 4, plus a bit). 56 + 4.5 ≈ $60.5. Closest choice is $59 (true value with $79.95 is ~$60.4, nearest the $59 option among the gaps). Reason by which choice your estimate lands on, not exact pennies.

*Trap:* Taking 30% off and then 8% off — i.e., subtracting both percents from 100 to get 62% — gives ~$50 and a wrong pick. Discount and tax don't combine by simple subtraction; you multiply 0.70 then 1.08. Also, applying tax to the original $80 instead of the discounted $56 inflates the answer.


## Practice (try before reading answers)


**P1** (easy, MC-one). The value of √150 lies between which two consecutive integers?
- A) 10 and 11
- B) 11 and 12
- C) 12 and 13
- D) 13 and 14
- E) 14 and 15

**P2** (easy, QC). Quantity A: 19 × 21.   Quantity B: 400.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P3** (medium, MC-one). Which value is closest to (0.49 × 802) ÷ 19.8 ?
- A) 2
- B) 10
- C) 20
- D) 40
- E) 200

**P4** (medium, MC-select). Which of the following are greater than 0.3 and less than 0.4? Indicate all such values.
- A) 3/8
- B) 2/7
- C) 5/13
- D) 1/3
- E) 4/11

**P5** (medium, Numeric). Approximately 68 percent of a town's 2,950 registered voters cast a ballot in an election. Estimate the number of ballots cast, rounded to the nearest hundred.

**P6** (hard, QC). Quantity A: √96 + √50.   Quantity B: 17.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given


---
## Answers, fast solutions & traps


**P1 — C**  
Solution: Bracket with memorized squares: 12² = 144 and 13² = 169. Since 144 < 150 < 169, √150 is between 12 and 13.  
Trap: Guessing 'about half of 150' or estimating √150 ≈ 7 (confusing it with 150/2 ≈ 75 then halving). Roots grow slowly — anchor to squares, not to fractions of the number.


**P2 — B**  
Solution: 19 × 21 straddles 20: it equals 20² − 1² = 400 − 1 = 399. Since 399 < 400, Quantity B is greater. No multiplication needed.  
Trap: Eyeballing '19×21 ≈ 20×20 = 400' and choosing C (equal). The numbers straddle 20 symmetrically, so the product is always a touch LESS than 20² — difference of squares guarantees it.


**P3 — C**  
Solution: Round: 0.49 ≈ 0.5 = 1/2, 802 ≈ 800, 19.8 ≈ 20. So (1/2 × 800) ÷ 20 = 400 ÷ 20 = 20. (Exact ≈ 19.85.)  
Trap: Decimal slips: treating 0.49 as 4.9 lands near 200, or dropping a zero lands near 2. A quick estimate pins the magnitude at ~20 and makes the off-by-10 traps obvious.


**P4 — A, C, D, E**  
Solution: Convert via benchmarks: 3/8 = .375 ✓; 2/7 ≈ .286 ✗ (just under 0.3); 5/13 ≈ .385 ✓; 1/3 ≈ .333 ✓; 4/11 ≈ .364 ✓. Only 2/7 falls below 0.3. Quick check: 0.3 = 3/10 and 0.4 = 4/10; cross-multiply each candidate against these bounds if unsure.  
Trap: Assuming 2/7 ≈ 1/3 ≈ 'about a third' and including it. 2/7 ≈ 0.286 is below 0.3. Since there's no partial credit on select-all, rushing one conversion sinks the whole question — convert each independently.


**P5 — 2000**  
Solution: Round 2,950 ≈ 3,000 and 68% ≈ 2/3 (≈ 0.667). 2/3 of 3,000 = 2,000. (Exact: 0.68 × 2,950 = 2,006, which rounds to 2,000.) Sanity: 68% is about two-thirds, two-thirds of ~3,000 is ~2,000.  
Trap: Reading '68% to the nearest hundred' and answering 2,006 or 2,010 without rounding to the requested place — Numeric Entry has no choices to catch you, so honor the exact instruction ('nearest hundred'). Also don't compute 68% of 2,000; the base is the voters (2,950).


**P6 — B**  
Solution: Place each root between squares. √96: 9²=81, 10²=100, and 96 is near 100, so √96 ≈ 9.8 (a bit under 10). √50: 7²=49, so √50 ≈ 7.07 (just over 7). Sum ≈ 9.8 + 7.07 ≈ 16.87 < 17. Quantity B is greater. (Exact ≈ 16.87.)  
Trap: Sloppy rounding to whole roots: calling √96 ≈ 10 and √50 ≈ 7 gives 17 and tempts C (equal). √96 is UNDER 10, and the true sum lands just below 17. When a QC sum sits this close to the boundary, estimate to one decimal, not to the nearest integer.


## Common mistakes

**1. Over-rounding on close calls.** Rounding √96 to 10 or 48% to 50% is fine when answer choices are far apart, but on QC and near-boundary problems it erases the very difference you're asked to find. Fix: when the choices (or the two quantities) are close, keep one decimal place and track the direction of your rounding error.

**2. Ignoring rounding direction.** Estimating gives a number, but you also need to know whether the truth is above or below it. If you rounded the numerator up and denominator down, the real value is smaller than your estimate. Fix: after estimating, say "true answer is a bit MORE / a bit LESS."

**3. Reaching for the calculator first.** The on-screen calculator is slow to key and invites decimal slips, and it never tells you an answer is unreasonable. Fix: estimate first, always; use the calculator only to finish a computation your estimate has already framed (and to confirm magnitude).

**4. Not memorizing the squares and benchmarks.** If you're computing 13² or converting 3/8 on the test, you've already lost 30 seconds. These must be recall, not calculation. Fix: drill squares 1–20 and the fraction/percent benchmark table until they're automatic.

**5. Combining percents by adding or subtracting them.** A 30% discount then 8% tax is 0.70 × 1.08, not (100 − 30 + 8)%. Successive percent changes multiply. Fix: convert each change to a multiplier and multiply them.
