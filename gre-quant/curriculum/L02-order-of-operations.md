# L02 — Order of operations and signed-number arithmetic

_Area: Arithmetic · Topic: order_of_operations_


## Concept

## Why this lesson is non-negotiable

You will never see a question that says "do PEMDAS." Instead, order-of-operations and sign errors hide inside *every* multi-step problem. You set up the algebra perfectly, then evaluate `6 - 2(-3)^2` wrong by one sign and lose a question you understood. This is the single most common way strong students bleed easy points. Master this and a whole class of careless misses disappears.

## The one rule, from first principles

Math is a shared language. If two people read `2 + 3 x 4` and one gets 20 and the other gets 14, the notation is useless. So mathematicians agreed on a fixed reading order. Burn this in:

**P** Parentheses (and brackets) first — innermost out.
**E** Exponents and roots next.
**MD** Multiply and Divide — **left to right**, as equals, whichever comes first.
**AS** Add and Subtract — **left to right**, as equals, whichever comes first.

The trap that ruins people: they think Multiply *always* beats Divide, and Add *always* beats Subtract. **False.** M and D are the same tier; A and S are the same tier. You sweep left to right within a tier. So `12 / 4 * 3` is `(12/4)*3 = 9`, **not** `12/(4*3) = 1`.

## Signed numbers: think "money and direction"

A negative number is a debt or a step left on the number line. Three intuitions handle 95% of GRE sign work:

- **Adding** = move right by that amount. **Subtracting** = move left. So `-6 - 4` means start at -6, step 4 left → -10. And `-6 - (-4)` means start at -6, step 4 *right* (subtracting a debt) → -2. **Subtracting a negative adds.**
- **Multiplying/dividing:** count the minus signs. **Even number of negatives → positive. Odd → negative.** `(-2)(-3)(-1)` has three negatives → negative → -6.
- **Powers:** an exponent is repeated multiplication, so the same count-the-negatives rule applies. A negative base to an **even** power is positive; to an **odd** power is negative.

## The single biggest sign trap: `-3^2` vs `(-3)^2`

These are different.
- `(-3)^2` means "(-3) times (-3)" = **+9**. The parentheses make -3 the base.
- `-3^2` means "the negative of 3 squared" = `-(3 x 3)` = **-9**. With no parentheses, the exponent grabs only the 3; the minus sign sits outside and is applied last.

The exponent binds tighter than the leading minus. When you see a negative being squared, *ask whether parentheses are present.* This one distinction is worth real points on QC.

## Using the on-screen calculator without poisoning your work

The GRE calculator is a basic 4-function with a square-root and memory key. **It does not know PEMDAS the way a scientific calculator does, and it has no parentheses keys.** If you type `2 + 3 * 4` it may compute left-to-right and give 20, not 14.

Rule: **you** decide the order; the calculator only does one ugly operation at a time. Compute the exponent/parentheses *in your head or on scratch paper*, then feed the calculator the multiplication or division you actually want. Treat it as a tool for messy digits, never as a judge of structure. Over-relying on it to "just evaluate the expression" is a guaranteed sign/order bug.


## Formulas that earn points

- **PEMDAS tiers:** Parentheses → Exponents/roots → ×/÷ (left to right) → +/− (left to right). *Use on every multi-step evaluation; the left-to-right rule inside a tier is what most people get wrong.*
- **Subtracting a negative:** `a − (−b) = a + b`. *Use whenever you see two adjacent signs; convert `− −` to `+` immediately.*
- **Adding a negative:** `a + (−b) = a − b`. *Use to clean up `+ −` into a single subtraction.*
- **Sign of a product/quotient:** even count of negative factors → positive; odd → negative. *Use to get the sign instantly before computing magnitude.*
- **Negative base powers:** `(−x)^even = +`, `(−x)^odd = −`. *Use on any negative raised to a power.*
- **Parenthesized vs bare negative:** `(−a)^n` makes −a the base; `−a^n = −(a^n)` applies the minus last. *Use the instant you see a negative with an exponent — check for parentheses.*


## Mental-math / speed

- **Read sign first, magnitude second.** For any × or ÷ chain, count the minus signs to lock the sign, then ignore signs and just multiply the digits. Splitting the job kills sign errors.
- **Collapse double signs on sight.** `− −` becomes `+`; `+ −` and `− +` become `−`. Rewrite the expression with single signs before you compute anything.
- **Squares to 15** (so you don't fumble exponents): 11²=121, 12²=144, 13²=169, 14²=196, 15²=225. Knowing these means `(−13)^2` is an instant 169, no calculator.
- **Powers of small negatives cycle:** `(−1)^n` is +1 for even n, −1 for odd n. `(−2)^n`: 2, −4, 8, −16, 32… (sign alternates starting positive at n=2). Spot the pattern instead of recomputing.
- **Left-to-right gut check:** when you see `÷` and `×` together, physically point left to right. `a / b * c = (a/b)*c`. Never let `*` jump the queue.
- **Division can become a fraction.** `10 / 2 / 5` = `10 / (2·5)`? No — it's `(10/2)/5 = 5/5 = 1`. Dividing twice multiplies the denominators *only when both are divisors*, which they are here, so `10/(2·5)=1` agrees. But always sweep left to right to be safe.


## Worked examples


**Example 1.** Evaluate: 6 − 2(−3)^2 + 8 ÷ 2

*Fast method:* Sign-and-tier sweep. Exponent first: (−3)^2 = +9 (negative base, even power → positive). Now 6 − 2·9 + 8÷2. Do the ×/÷ tier left to right: 2·9 = 18, 8÷2 = 4. Now the +/− tier left to right: 6 − 18 + 4 = (6 − 18) + 4 = −12 + 4 = −8. Answer: −8.

*Trap:* Reading (−3)^2 as −9 (forgetting the parentheses make −3 the base) gives 6 − 2(−9) + 4 = 6 + 18 + 4 = 28. The rushed test-taker either drops the parentheses or thinks 'negative squared is negative.' Even power of a negative is positive.


**Example 2.** Evaluate: −2 − [4 − (3 − 7)]

*Fast method:* Work innermost parentheses out. Inner: 3 − 7 = −4. Brackets: 4 − (−4) = 4 + 4 = 8 (subtracting a negative adds). Outer: −2 − 8 = −10. Answer: −10.

*Trap:* Distributing the outer minus carelessly: −2 − 4 − (3 − 7) = −2 − 4 − (−4) = −6 + 4 = −2. You cannot strip the bracket without negating everything inside it. Either evaluate the bracket fully first (safest) or distribute the minus to BOTH terms.


**Example 3.** Evaluate: (−2)^3 · (−1)^4 ÷ (−4)

*Fast method:* Sign first by counting negatives across the whole product/quotient. (−2)^3 is negative (odd power) = −8. (−1)^4 = +1 (even power). Now −8 · 1 ÷ (−4): one negative on top, one on bottom → even count of negatives → positive result. Magnitude: 8 · 1 / 4 = 2. Answer: +2.

*Trap:* Assuming the answer is negative because there are lots of minus signs floating around. Count them: the result has an even total of negatives, so it's positive. Also, evaluating (−1)^4 as −1 (odd-power thinking) would flip the sign.


## Practice (try before reading answers)


**P1** (easy, MC-one). Evaluate: 8 − 12 ÷ 4 × 3 + 1
- A) −2
- B) 0
- C) 4
- D) 8
- E) 18

**P2** (easy, Numeric). Evaluate: −6 − (−4) + (−3)(2). Enter the value.

**P3** (medium, QC). Quantity A: (−2)^4    Quantity B: −2^4
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined

**P4** (medium, MC-select). Which of the following expressions are equal to −1? Select all that apply.
- A) (−1)^101
- B) −(1^50)
- C) (−1)^100
- D) −((−1)^99)
- E) (−1)(−1)(−1)

**P5** (hard, Numeric). Evaluate: 12 ÷ (2 + 4) × (−3)^2 − 10 ÷ 2 ÷ 5. Enter the value.

**P6** (hard, MC-one). Evaluate: −3[2 − (5 − 8)] − (−4)^2 ÷ (−2)
- A) −23
- B) −15
- C) −7
- D) 1
- E) 7


---
## Answers, fast solutions & traps


**P1 — B**  
Solution: Do the ÷/× tier strictly left to right: 12 ÷ 4 = 3, then 3 × 3 = 9. Now 8 − 9 + 1 = 0.  
Trap: Treating × as higher priority than ÷ and computing 4 × 3 = 12 first → 12 ÷ 12 = 1 → 8 − 1 + 1 = 8 (choice D). Multiplication does NOT outrank division; sweep left to right.


**P2 — -8**  
Solution: Collapse signs: −6 − (−4) = −6 + 4 = −2. Then (−3)(2) = −6. So −2 + (−6) = −8.  
Trap: Mishandling −(−4) as −4 (keeping it negative) gives −6 − 4 − 6 = −16. Subtracting a negative ADDS.


**P3 — A**  
Solution: (−2)^4: negative base, even power → +16. −2^4: the exponent binds only to 2, minus applied last → −(16) = −16. So A = 16 > B = −16. A is greater.  
Trap: Assuming both equal 16 (choice C) because '2 to the 4th is 16 either way.' The parentheses matter: only (−2)^4 has −2 as the base. Without them, the minus sits outside the power.


**P4 — A, B, E**  
Solution: A: (−1)^odd = −1 ✓. B: 1^50 = 1, negated = −1 ✓. C: (−1)^even = +1 ✗. D: (−1)^99 = −1, negated = +1 ✗. E: three negatives (odd) → −1 ✓. So A, B, E.  
Trap: Marking C because '100 is a big even number, who cares' or flipping D's double-negative wrong. Even power of −1 is +1; the leading minus in D turns −1 into +1. No partial credit on select-all, so check each independently.


**P5 — 17**  
Solution: Parentheses: 2 + 4 = 6. Exponent: (−3)^2 = 9. Now 12 ÷ 6 × 9 − 10 ÷ 2 ÷ 5. ÷/× tier left to right: 12÷6 = 2, 2×9 = 18; separately 10÷2 = 5, 5÷5 = 1. Then 18 − 1 = 17.  
Trap: Two traps: (1) computing 6 × 9 first (×before÷) giving 12÷54; (2) reading (−3)^2 as −9. Either one wrecks it. Also 10÷2÷5 is (10÷2)÷5 = 1, not 10÷(2÷5) = 25.


**P6 — C**  
Solution: Inner parens: 5 − 8 = −3. Bracket: 2 − (−3) = 5. First term: −3 × 5 = −15. Second term: (−4)^2 = +16; 16 ÷ (−2) = −8; with the leading minus it's −(−8) = +8. Total: −15 + 8 = −7.  
Trap: The big one is −16 ÷ (−2): reading (−4)^2 as −16 flips the second term and gives −15 − 8 = −23 (choice A). Even power of a negative is positive, then track the subtraction sign carefully: minus a negative becomes plus.


## Common mistakes

1. **Thinking × beats ÷ (or + beats −).** They're co-equal tiers; you go **left to right**. `12 ÷ 4 × 3 = 9`, not 1. Fix: physically point left to right when a tier has mixed operations.
2. **`−a^n` vs `(−a)^n`.** Without parentheses the exponent grabs only the number and the minus is applied last: `−3^2 = −9`, but `(−3)^2 = +9`. Fix: the instant you see a negative with a power, ask "are there parentheses around the negative?"
3. **Subtracting a negative as if it stayed negative.** `−6 − (−4) = −2`, not −10. Fix: collapse `− −` into `+` *before* computing anything.
4. **Distributing a leading minus to only the first term in brackets.** `−[4 − (3−7)]` must negate the whole bracket. Fix: evaluate the bracket completely to a single number first, then apply the outside minus.
5. **Trusting the on-screen calculator to handle order.** It's a left-to-right 4-function tool with no parentheses keys; typing a full expression gives wrong results. Fix: compute exponents and parentheses yourself, then use the calculator only for the leftover ugly multiplication/division.
