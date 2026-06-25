# L07 — Exponents and roots: rules and estimation

_Area: Arithmetic · Topic: exponents_roots_


## Concept

## What an exponent actually is

An exponent is just a counting device for repeated multiplication. `2^5` means "multiply five 2's together" = 32. The base is what's being multiplied; the exponent counts how many times. That's the whole idea. Every rule you'll memorize below is just bookkeeping that falls out of this one fact.

**Why the rules are obvious once you see them:**
- `2^3 * 2^2` is `(2·2·2)·(2·2)` = five 2's = `2^5`. Same base, multiply -> **add** the counts.
- `2^5 / 2^2` is `(2·2·2·2·2)/(2·2)`, two 2's cancel, three left = `2^3`. Same base, divide -> **subtract** the counts.
- `(2^3)^2` is `2^3` written down twice and multiplied = six 2's = `2^6`. Power of a power -> **multiply** the counts.

Do not memorize these as arbitrary laws. Re-derive them in your head with tiny numbers any time you blank.

## Stretching the idea: zero, negative, fractional exponents

The pattern "subtract when dividing" forces what the weird exponents must mean:
- `2^3 / 2^3 = 2^0`, but it's also 8/8 = 1. So **anything^0 = 1** (except 0^0, which the GRE won't ask).
- `2^2 / 2^3 = 2^(-1)`, but it's also 4/8 = 1/2. So a **negative exponent means reciprocal**: `2^(-n) = 1/2^n`. The minus sign flips it to the bottom; it never makes the number negative.
- A **fractional exponent is a root**: `9^(1/2)` is the number that, squared, gives 9 — that's the square root, 3. The denominator is the root, the numerator is a power. `8^(2/3)` = (cube root of 8)^2 = 2^2 = 4.

## What a root really is

A square root undoes a square. `sqrt(9) = 3` because 3^2 = 9. On the GRE, `sqrt` of a number means the **positive** root only (the radical symbol is defined as non-negative). This matters: `sqrt(25) = 5`, not ±5. (You only get ±5 when YOU solve `x^2 = 25`.)

**Simplifying radicals** = pulling out perfect-square factors. `sqrt(72)` — find the biggest perfect square hiding inside 72. That's 36, since 72 = 36·2. So `sqrt(72) = sqrt(36)·sqrt(2) = 6·sqrt(2)`. You "walk a factor out the door" by halving its power.

**Rationalizing** = clearing a root out of a denominator. `1/sqrt(2)` is ugly. Multiply top and bottom by `sqrt(2)`: `sqrt(2)/2`. You multiplied by 1 (sqrt2/sqrt2), so the value is unchanged, but now it's clean and easy to estimate.

## The two traps that define this whole topic

1. **You CANNOT add bases or add/split across a sum.** `2^3 + 2^3` is NOT `2^6` and NOT `4^3`. It's just 8 + 8 = 16. The add/subtract rules ONLY apply to multiplying/dividing the SAME base. Likewise `sqrt(a+b)` is NOT `sqrt(a)+sqrt(b)` — `sqrt(9+16)=sqrt(25)=5`, but `sqrt9+sqrt16=3+4=7`. Different.
2. **Comparing big powers? Match the base or match the exponent — don't compute.** `3^50` vs `2^75` looks hopeless. Rewrite both with exponent 25: `3^50 = 9^25`, `2^75 = 8^25`. Now it's just 9 vs 8 -> the first wins. This trick is the heart of hard QC exponent problems.

Master "same base, then combine the counts" and "match base or match exponent to compare," and exponent questions become fast points instead of time sinks.


## Formulas that earn points

**Core exponent rules** (all require the SAME base):
- `a^m · a^n = a^(m+n)` — when multiplying same-base powers (add the exponents).
- `a^m / a^n = a^(m−n)` — when dividing same-base powers (subtract).
- `(a^m)^n = a^(mn)` — power raised to a power (multiply).
- `(ab)^n = a^n · b^n` and `(a/b)^n = a^n/b^n` — when a product/quotient is raised to a power (distribute the exponent — this is the ONLY time you may "split").

**Special exponents:**
- `a^0 = 1` (a ≠ 0) — any nonzero base to the zero power.
- `a^(−n) = 1/a^n` — negative exponent means reciprocal; flip it, never negate.
- `a^(1/n) = ⁿ√a` and `a^(m/n) = (ⁿ√a)^m` — fractional exponent = root (denominator) then power (numerator).

**Roots:**
- `√(ab) = √a · √b` and `√(a/b) = √a/√b` — to simplify radicals (split products/quotients only, never sums).
- `√a · √a = a` — a root times itself clears the radical (key for rationalizing).
- `(√a)^2 = a`; `√(a^2) = |a|` — squaring and rooting undo each other (use absolute value for the GRE-safe form).

**WARNING — these are NOT rules (common fake-rules):**
- `a^m + a^n ≠ a^(m+n)`; `√(a+b) ≠ √a + √b`; `(a+b)^2 ≠ a^2+b^2` (it's `a^2+2ab+b^2`).

**Squares to know cold:** 11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 20²=400, 25²=625. **Cubes:** 2³=8, 3³=27, 4³=64, 5³=125. **Useful root estimates:** √2≈1.41, √3≈1.73, √5≈2.24, √10≈3.16.


## Mental-math / speed

**To compare two powers, never compute them — manipulate them:**
- **Match the exponent:** rewrite both so the exponents are equal, then just compare bases. `3^50 = 9^25` vs `2^75 = 8^25` -> compare 9 vs 8.
- **Match the base:** rewrite both with the same base, then compare exponents. `4^10` vs `8^6` -> `(2^2)^10 = 2^20` vs `(2^3)^6 = 2^18` -> compare 20 vs 18.

**Negative exponent = "flip and drop the sign."** `5^(-2)` -> 1/5² = 1/25. The exponent's sign tells you which floor it lives on, never whether it's positive.

**Fractional exponent decoder:** read denominator first (the root), numerator second (the power), and take the root FIRST to keep numbers small. `64^(2/3)` -> cube root of 64 = 4, then 4² = 16. (Squaring first gives 4096, then cube-rooting — same answer, way more work.)

**Estimate any square root by bracketing perfect squares.** `√150`: 12²=144, 13²=169, and 150 is just past 144, so ≈12.2. `√50`: between 7²=49 and 8²=64, so ≈7.1.

**Simplify radicals by spotting the biggest perfect-square factor.** `√48` -> 16·3 -> `4√3`. `√200` -> 100·2 -> `10√2`. Keep a mental list: 4, 9, 16, 25, 36, 49, 64, 81, 100.

**Rationalize on sight:** `1/√2 = √2/2 ≈ 0.71`, `1/√3 = √3/3 ≈ 0.58`. Memorize these two — they appear constantly in geometry (45-45-90 and 30-60-90 triangles).

**Powers of 2 (know through 2^10):** 2,4,8,16,32,64,128,256,512,1024. Lets you instantly rewrite 8, 16, 32, etc. as powers of 2 for base-matching.


## Worked examples


**Example 1.** Simplify (3^4 · 3^(−2)) / 3^(−1).

*Fast method:* One base (3), so just track the exponent count: top is 4 + (−2) = 2, then divide by 3^(−1) means subtract (−1), i.e. add 1. Total exponent = 4 − 2 − (−1) = 4 − 2 + 1 = 3. Answer: 3^3 = 27. Never compute the individual powers — collapse to a single exponent first, evaluate last.

*Trap:* A rushed test-taker mishandles the double negative: dividing by 3^(−1) feels like subtracting 1, giving exponent 2 -> 3^2 = 9. Dividing by a negative exponent ADDS. When in doubt, rewrite 1/3^(−1) as 3^1 explicitly so the sign is unmistakable.


**Example 2.** Simplify √72 + √18 into the form k√2, and give k.

*Fast method:* Pull out perfect squares. √72 = √(36·2) = 6√2. √18 = √(9·2) = 3√2. Same radical (√2), so add the coefficients like apples: 6√2 + 3√2 = 9√2. k = 9. The skill is spotting 36 and 9 as the largest square factors so both reduce to √2.

*Trap:* The classic error is √72 + √18 = √90 — adding under the radical. You can only combine radicals after simplifying when the leftover root matches; you add the COEFFICIENTS, not the insides. √90 ≈ 9.49 while the true answer 9√2 ≈ 12.7, so the trap isn't even close.


**Example 3.** Quantity A: 2^30.   Quantity B: 4^16. Which is greater?

*Fast method:* Match the base. 4 = 2^2, so 4^16 = (2^2)^16 = 2^32. Now compare 2^30 vs 2^32 — same base, bigger exponent wins. 2^32 is larger, so Quantity B is greater. Zero arithmetic, pure exponent rules.

*Trap:* Panic-computing 2^30 (over a billion) on the calculator burns 90 seconds and invites a typo. Worse, some see '2 vs 4, but 30 vs 16' and guess A because 30 > 16 — but the bases differ, so raw exponents are not comparable until you unify the base. Always convert to one base BEFORE comparing exponents.


## Practice (try before reading answers)


**P1** (easy, QC). Quantity A: 2^5 · 2^3.   Quantity B: 2^8.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P2** (easy, MC-one). Simplify: (3^4 · 3^(−2)) / 3^(−1).
- A) 3
- B) 9
- C) 27
- D) 81
- E) 243

**P3** (medium, Numeric). When √72 is written in the form a√b with b as small as possible (b a positive integer with no perfect-square factor greater than 1), what is a + b?

**P4** (medium, MC-select). Which of the following are equal to 1/8? Select all that apply.
- A) 2^(−3)
- B) 8^(−1)
- C) (1/2)^3
- D) 4^(−3/2)
- E) 2^3

**P5** (hard, QC). Quantity A: 3^50.   Quantity B: 2^75.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P6** (hard, Numeric). If x = 1/(√5 − √3) is rewritten with a rational denominator, x = (√5 + √3)/k. What is the value of k?


---
## Answers, fast solutions & traps


**P1 — C**  
Solution: Same base: add the exponents on the left, 5 + 3 = 8, giving 2^8. That is identical to Quantity B. Equal -> C.  
Trap: Multiplying the exponents (5·3 = 15 -> 2^15) makes A look huge and you pick A. You ADD exponents when multiplying same-base powers; you multiply only for a power of a power.


**P2 — C**  
Solution: Single base 3: exponent = 4 + (−2) − (−1) = 3. So 3^3 = 27 -> C.  
Trap: Dividing by 3^(−1) tempts you to subtract 1 (exponent 2 -> 9, choice B). Dividing by a negative exponent ADDS. Rewrite 1/3^(−1) as 3^1 to see it.


**P3 — 8**  
Solution: √72 = √(36·2) = 6√2, so a = 6, b = 2. a + b = 8.  
Trap: Pulling out a smaller square like 4 gives √72 = 2√18, leaving b = 18 (not fully reduced) and a wrong sum. Always extract the LARGEST perfect-square factor (36, not 4 or 9).


**P4 — A,B,C,D**  
Solution: 1/8 in many disguises: 2^(−3) = 1/2^3 = 1/8 (A). 8^(−1) = 1/8 (B). (1/2)^3 = 1^3/2^3 = 1/8 (C). 4^(−3/2) = 1/(4^(3/2)) = 1/(√4)^3 = 1/2^3 = 1/8 (D). 2^3 = 8, not 1/8 (E, the decoy). Correct: A, B, C, D.  
Trap: On select-all there's no partial credit, so people grab 2^3 (E) because '2 and 3 and 8 feel related' or skip D thinking the fractional/negative exponent is too messy. Evaluate every option independently; 4^(−3/2) cleanly equals 1/8.


**P5 — A**  
Solution: Match the exponent. 3^50 = (3^2)^25 = 9^25. 2^75 = (2^3)^25 = 8^25. Same exponent (25), so compare bases: 9 > 8 -> 9^25 > 8^25. Quantity A is greater -> A.  
Trap: Comparing the raw numbers (3 < 2? no; 50 < 75? yes) and guessing B because 75 > 50. Different bases make raw exponents meaningless — unify base OR exponent first. Also, these numbers are far too large to compute on the four-function calculator, so manipulation is the only path.


**P6 — 2**  
Solution: Multiply top and bottom by the conjugate (√5 + √3): denominator becomes (√5 − √3)(√5 + √3) = (√5)^2 − (√3)^2 = 5 − 3 = 2. So x = (√5 + √3)/2 and k = 2.  
Trap: Multiplying by √5 + √3 but then mis-expanding the denominator as 5 + 3 = 8, or forgetting it's a difference of squares and getting cross terms. The conjugate kills the middle terms: (a−b)(a+b) = a² − b², leaving 5 − 3 = 2.


## Common mistakes

1. **Adding exponents when you should multiply (and vice versa).** Multiplying same-base powers ADDS exponents (`a^m·a^n = a^(m+n)`); a power of a power MULTIPLIES (`(a^m)^n = a^(mn)`). Mixing these is the #1 error. Fix: re-derive with `2^2·2^3` (five 2's = 2^5) versus `(2^2)^3` (2^2 written three times = 2^6) whenever you hesitate.

2. **Treating a negative exponent as a negative number.** `2^(−3)` is 1/8, a small positive number — NOT −8 and not −1/8. The minus sign relocates the term to the denominator; it never changes the sign of the value. Fix: rewrite every negative exponent as a reciprocal immediately, before doing anything else.

3. **Splitting or combining across a SUM.** `√(a+b) ≠ √a + √b`, `(a+b)^2 ≠ a²+b²`, and `2^3 + 2^3 ≠ 2^6`. The distribute/split rules work ONLY for products and quotients, never for addition or subtraction. Fix: test with numbers — `√(9+16)=5` but `3+4=7` proves it instantly.

4. **Computing huge powers instead of comparing smartly.** Reaching for the calculator on `3^50` vs `2^75` wastes time and risks typos (and often overflows the basic calculator). Fix: always match the base or match the exponent first, then compare the leftover — it turns a "hard" problem into a one-line comparison.

5. **Not fully simplifying radicals (or forgetting to rationalize).** Leaving `2√18` instead of `6√2`, or leaving `1/√2` in a denominator, loses Numeric-Entry points and makes estimation harder. Fix: pull out the LARGEST perfect-square factor, and clear any root from a denominator by multiplying by it (or by the conjugate for two-term denominators).
