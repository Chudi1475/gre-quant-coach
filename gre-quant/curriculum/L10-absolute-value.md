# L10 — Absolute value and the number line

_Area: Arithmetic · Topic: absolute_value_


## Concept

## The one idea: absolute value is *distance*

Forget the textbook line "make it positive." That's a side effect, not the meaning. Absolute value answers one question:

**How far is this number from zero on the number line?**

Distance is never negative. You can be 5 steps left of zero (that's -5) or 5 steps right (that's +5), but in both cases you walked **5 steps**. So |−5| = 5 and |5| = 5. The bars strip away *direction* and keep only *size*.

```
       |--- 5 ---|--- 5 ---|
  -7  -6  -5  -4  -3  -2  -1   0   1   2   3   4   5
                          (-5 is 5 away)      (5 is 5 away)
```

Why this framing wins on the GRE: once "absolute value = distance," every equation and inequality becomes a sentence about a number line, and that sentence almost always splits into **two cases** (left side and right side of a point). Missing the second case is the single biggest score-killer on this topic.

## The two-case engine

**Equation: |something| = 5** means "this thing is 5 away from zero." Two ways to be 5 away: the thing is **+5** or it is **−5**. So:

`|x| = 5  →  x = 5  OR  x = −5.`

That's TWO answers, not one. A rushed test-taker writes x = 5 and walks away. The GRE built whole questions around catching exactly that.

**General rule:** `|A| = b` (with b ≥ 0) splits into `A = b` OR `A = −b`. If b < 0, there is **no solution** — distance can never be negative.

## Inequalities: "less than" traps you in, "greater than" pushes you out

This is pure number-line picture. No memorizing if you see it.

**|x| < 3** means "less than 3 away from zero" — you're **trapped near zero**, in the band between −3 and 3:

```
        <===== |x| < 3 =====>
  ---|---|---|---o---|---|---|---|---|---
    -4  -3  -2  -1   0   1   2   3   4
          (●========●)   open ends, between -3 and 3
```

`|x| < 3  →  −3 < x < 3.` (A single "sandwich" band.)

**|x| > 3** means "more than 3 away from zero" — you're **banished to the outside**, far left OR far right:

```
  <=== x < -3 ===                     === x > 3 ===>
  ---|---|---|---o---|---|---|---|---|---
    -4  -3  -2  -1   0   1   2   3   4
    ◄====●)               (●====►   two separate pieces
```

`|x| > 3  →  x < −3  OR  x > 3.` (Two disconnected rays — this is where people forget the negative side.)

When it's not `|x|` but `|x − c|`, the center just shifts from 0 to **c**. `|x − c|` literally reads "distance from x to c." So `|x − 4| < 2` means "x is within 2 of 4," i.e. 2 < x < 6. Read it as distance and you barely compute.

## Ordering on the number line (negatives and fractions)

Bigger absolute value does NOT mean bigger number. −9 is *farther* from zero than −2, but −9 is **smaller** (more negative, further left). On the number line, **left = smaller, right = bigger**, period.

Two reliable moves:
- Convert everything to decimals so you can compare apples to apples (−3/4 = −0.75).
- For negatives: the one with the **bigger** absolute value is the **smaller** number. −0.75 < −0.7 because 0.75 > 0.7.

And whenever you see absolute-value bars in an ordering question, **evaluate them first** — |−0.8| is just 0.8, a positive number, and now it sorts like any other.


## Formulas that earn points

- **|a| = distance from a to 0** (always ≥ 0). *Use:* the master interpretation — recast every problem as distance.
- **|a − b| = distance between a and b on the number line.** *Use:* "within k of c" problems and reading word problems; the center is whatever makes the inside zero.
- **|A| = b (b ≥ 0) → A = b OR A = −b.** *Use:* every absolute-value equation; forces the two cases.
- **|A| = b with b < 0 → no solution.** *Use:* spot-kill QC/MC traps where the right side is negative.
- **|A| < b (b > 0) → −b < A < b** (single band). *Use:* "less than" inequalities; one connected interval.
- **|A| > b (b > 0) → A < −b OR A > b** (two rays). *Use:* "greater than" inequalities; never forget the negative branch.
- **|A| ≤ b and |A| ≥ b:** same as above with the endpoints included. *Use:* watch ≤ vs < for counting integer solutions and for endpoint cases in QC.
- **Sign/order fact: more negative = smaller.** Among negatives, larger absolute value ⇒ smaller value. *Use:* ordering questions with negatives.
- **|a|² = a²  and  √(a²) = |a|.** *Use:* simplifying expressions; √(x²) is |x|, not x, when x could be negative.


## Mental-math / speed

- **Read the bars out loud as "distance."** "|x − 7| = 2" → "x is 2 away from 7" → 5 or 9, no algebra.
- **Center-and-radius for inequalities.** `|x − c| < r` is the interval `(c − r, c + r)`; `|x − c| > r` is everything outside `[c − r, c + r]`. Find center c (makes inside 0), step out by r both ways.
- **Counting integer solutions of |x| < k:** the integers run from the smallest integer above −k to the largest below k. For strict `< 4.5` it's −4…4 = **9 integers** (formula for non-integer k: 2·floor(k) + 1). For `|x| ≤ 4` it's −4…4 = **9** too; for `|x| < 4` it's −3…3 = **7**. The ≤ vs < distinction changes the count — slow down on it.
- **Negatives flip your instinct:** when comparing two negative fractions, write them as decimals and remember the "uglier-looking bigger" number is actually smaller: −3/4 (−0.75) < −2/3 (−0.67).
- **Strip the bars before sorting.** Any |…| in an ordering list is a positive number; replace it first, then sort left-to-right.
- **Squares undo bars:** if a problem gives |x| or x² and asks for the other, remember |x| = √(x²); they carry the same "size, no sign" information.


## Worked examples


**Example 1.** Solve |x − 3| = 5 for all real x, then find the sum of the solutions.

*Fast method:* Read it as distance: x is 5 away from 3. Step 5 left and 5 right of 3: 3 + 5 = 8 and 3 − 5 = −2. Solutions are x = 8 and x = −2; their sum is 8 + (−2) = 6. (Algebraic backup: x − 3 = 5 gives 8; x − 3 = −5 gives −2 — same two cases.)

*Trap:* Writing only x − 3 = 5 → x = 8 and stopping. Missing the −5 case loses the second solution (−2) and wrecks the sum. Absolute-value equations almost always have TWO answers.


**Example 2.** Solve the inequality |2x + 1| < 7. Express the answer as an interval for x.

*Fast method:* "Less than" = trapped in one band, so drop the bars and sandwich: −7 < 2x + 1 < 7. Subtract 1 across: −8 < 2x < 6. Divide by 2: −4 < x < 3. One connected interval, (−4, 3).

*Trap:* Splitting it into two separate rays (like a 'greater than' problem) and writing x < 3 OR x > −4 — which is actually all real numbers and wrong. "Less than" gives ONE band; "greater than" gives two pieces. Picture the number line to keep them straight.


**Example 3.** Order these five values from least to greatest:  −3/4,  −0.7,  |−0.8|,  1/2,  |−1/3|.

*Fast method:* First kill the bars: |−0.8| = 0.8 and |−1/3| = 1/3 ≈ 0.333. Now convert all to decimals: −0.75, −0.7, 0.8, 0.5, 0.333. Sort left-to-right on the number line: −0.75 < −0.7 < 0.333 < 0.5 < 0.8. So the order is −3/4, −0.7, |−1/3|, 1/2, |−0.8|.

*Trap:* Two traps. (1) Treating |−0.8| as a negative — the bars make it +0.8, the largest value. (2) Ranking −3/4 above −0.7 because 'three-quarters feels bigger.' For negatives, bigger size means SMALLER value: −0.75 sits left of −0.7, so −3/4 is the least.


## Practice (try before reading answers)


**P1** (easy, Numeric). If |x| = 4, what is the sum of all possible values of x?

**P2** (easy, QC). Given that x = −5.
Quantity A: |x|
Quantity B: x + 10
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined

**P3** (medium, MC-one). If |x − 2| = 6, which of the following is a possible value of x?
- A) −8
- B) −4
- C) 0
- D) 4
- E) 6

**P4** (medium, Numeric). How many integer values of x satisfy |x| < 4.5 ?

**P5** (hard, MC-select). For which of the following values of x is |x + 1| ≥ 3 true? Select ALL that apply.
- A) x = −5
- B) x = −4
- C) x = −1
- D) x = 2
- E) x = 3

**P6** (hard, QC). It is given that 0 < x < 1.
Quantity A: |x − 2|
Quantity B: |x + 2|
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined


---
## Answers, fast solutions & traps


**P1 — 0**  
Solution: x is 4 away from zero: x = 4 or x = −4. Sum = 4 + (−4) = 0.  
Trap: Answering 4 by taking only the positive case. The negative solution −4 cancels it to 0 — and forgetting it is exactly the oversight this topic punishes.


**P2 — C**  
Solution: x is fixed at −5, so just compute both. A: |−5| = 5. B: −5 + 10 = 5. They're equal.  
Trap: Assuming |x| must be the bigger quantity 'because absolute value is large.' Here both equal 5. Also: because x is a fixed number (not a variable), the answer can't be 'cannot be determined' — there's nothing undetermined to compare.


**P3 — B**  
Solution: x is 6 away from 2: x = 2 + 6 = 8 or x = 2 − 6 = −4. Only −4 appears among the choices.  
Trap: Picking 8 (the 'positive' case) — but 8 isn't an option, so a careless solver who only finds 8 panics or guesses. The other branch, −4, is the listed answer. Always generate BOTH solutions before scanning the choices.


**P4 — 9**  
Solution: |x| < 4.5 means −4.5 < x < 4.5. The integers inside are −4, −3, −2, −1, 0, 1, 2, 3, 4 — that's 9 of them (don't forget 0).  
Trap: Counting only 1 through 4 and doubling to get 8, forgetting that 0 is also an integer with |0| = 0 < 4.5. Zero is the most-forgotten solution. Count it explicitly.


**P5 — A,B,D,E**  
Solution: "Greater than or equal" pushes outward: |x + 1| ≥ 3 means x + 1 ≤ −3 OR x + 1 ≥ 3, i.e. x ≤ −4 OR x ≥ 2. Check: −5 (yes), −4 (yes, endpoint ≥), −1 (no, it's in the middle band), 2 (yes, endpoint), 3 (yes). So A, B, D, E.  
Trap: Dropping the endpoints x = −4 and x = 2 by reading ≥ as strict >. Because it's ≥, the points where |x+1| equals exactly 3 count. Also forgetting the left ray (x ≤ −4) and only catching x ≥ 2. No partial credit here, so every option must be checked.


**P6 — B**  
Solution: x is between 0 and 1, so x − 2 is negative (between −2 and −1): |x − 2| = 2 − x, which lands between 1 and 2. And x + 2 is positive (between 2 and 3): |x + 2| = x + 2, between 2 and 3. The B-value is always above 2 and the A-value always below 2, so B > A for every allowed x. Sanity-check with x = 0.5: A = 1.5, B = 2.5 → B greater.  
Trap: Reaching for 'cannot be determined' because variables appear with absolute-value bars. But x is pinned to (0,1), so both distances are forced: A measures distance from x to 2 (small, since x is near 2-ish on the left) and B distance from x to −2 (large). Test a value to confirm rather than defaulting to D.


## Common mistakes

1. **Solving only one case.** |A| = b gives A = b *and* A = −b. The forgotten negative branch is the #1 error on this entire topic. Train the reflex: see bars, write two equations.
2. **Confusing the two inequality shapes.** "Less than" (|x| < b) traps you in ONE band (−b < x < b); "greater than" (|x| > b) banishes you to TWO rays (x < −b OR x > b). People swap them. Cure: always draw the number line and ask "near zero or far from zero?"
3. **Thinking bigger absolute value = bigger number.** For negatives it's the opposite: −9 < −2 even though |−9| > |−2|. On the number line, left is always smaller. Convert to decimals and read left-to-right.
4. **Treating |negative| as still negative.** |−0.8| = 0.8, a positive number. Strip every bar to a non-negative value *before* you order, compare, or substitute.
5. **Botching ≤ vs < when counting solutions.** |x| ≤ 4 includes the endpoints (−4…4 = 9 integers); |x| < 4 excludes them (−3…3 = 7). And never forget x = 0 in the count. Read the symbol carefully — one character changes the answer.
