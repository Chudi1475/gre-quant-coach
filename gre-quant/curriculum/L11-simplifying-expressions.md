# L11 — Simplifying expressions and the laws of algebra

_Area: Algebra · Topic: simplifying_expressions_


## Concept

## Why this lesson is load-bearing

Every equation, inequality, and function problem on the GRE starts with you rewriting a messy expression into a clean one. If your simplification is sloppy, the right method still gives the wrong answer. This is the single most common *hidden* error source at the 160+ level: people lose points not because they didn't know what to do, but because they dropped a sign or distributed wrong. Nail this and you stop bleeding "silly" points.

## The one idea behind all of it

An algebraic expression is just **arithmetic with placeholders**. `3x` means "3 of whatever x is." The laws of algebra are not new rules — they are the *same* rules you use on numbers, applied to placeholders.

- **2 apples + 3 apples = 5 apples.** That's it — that's combining like terms. `2x + 3x = 5x`. You can only add things of the same kind. `2x + 3y` does NOT combine, the same way 2 apples + 3 oranges don't merge into 5 of anything.
- **"Like terms" = same variable(s), same exponents.** `4x²` and `7x²` are like terms (both are "x-squared things"). `4x²` and `7x` are NOT — one is x-squared, one is x. Coefficients (the numbers in front) can differ; the variable part must match exactly.

## Distribution: multiply across, every term

`3(x + 4)` means "3 copies of (x + 4)" = `3x + 12`. The 3 hits **both** terms inside. This is the distributive law and it is where most errors live, because of signs.

- `-2(x - 5)` = `-2x + 10`. The `-2` multiplies the `-5`, and negative times negative is **positive**. Forgetting that flips your answer.
- A minus sign in front of parentheses flips **every** sign inside: `-(x - 3y + 4)` = `-x + 3y - 4`. Treat it as `-1` distributed.

## Multiplying two binomials (FOIL)

`(a + b)(c + d)` = each term in the first times each term in the second = `ac + ad + bc + bd`. The mnemonic is **FOIL** (First, Outer, Inner, Last), but the real idea is just full distribution. Example: `(x + 2)(x + 3)` = `x² + 3x + 2x + 6` = `x² + 5x + 6`. Combine the two middle terms — they're like terms.

## The three patterns that show up constantly

The GRE recycles three product patterns. Memorizing them turns 30 seconds of FOIL into instant recognition:

- **(a + b)² = a² + 2ab + b²** — square a sum.
- **(a − b)² = a² − 2ab + b²** — square a difference.
- **(a + b)(a − b) = a² − b²** — difference of squares. The middle terms cancel.

The classic trap: people write `(a + b)² = a² + b²`. **Wrong.** You lose the `2ab` middle term. `(x+3)² = x² + 6x + 9`, not `x² + 9`.

## Algebraic fractions: same rules as number fractions

A fraction with variables behaves exactly like `6/8`. To add `1/x + 1/(x+1)`, you need a common denominator `x(x+1)`, just like adding `1/2 + 1/3` needs denominator 6. To simplify `6x²y / (2xy)`, cancel common factors top and bottom (when nonzero): `= 3x`. **Critical rule: you can only cancel whole factors, never individual terms that are added.** `(x + 2)/x` does NOT simplify to `2` — the x on top is added, not multiplied, so it doesn't cancel.

## The order to work in

1. Distribute / expand everything (clear all parentheses).
2. Combine like terms.
3. Only then factor or cancel if the problem rewards it.

Going in this order keeps you from canceling something you weren't allowed to.


## Formulas that earn points

- **Distributive law: a(b + c) = ab + ac** — use to clear any parentheses; watch the sign on every term.
- **Sign flip: −(b − c + d) = −b + c − d** — use whenever a minus sits in front of parentheses; flip *every* inside sign.
- **(a + b)² = a² + 2ab + b²** — use to expand a squared sum instantly; never forget the 2ab.
- **(a − b)² = a² − 2ab + b²** — use for a squared difference; middle term is negative.
- **(a + b)(a − b) = a² − b²** — use the instant you see "sum times difference"; skip FOIL entirely.
- **Combine like terms: only same variable + same exponent** — use after distributing; add coefficients, keep the variable part.
- **Cancel only common FACTORS: (k·m)/(k·n) = m/n (k ≠ 0)** — use on algebraic fractions; never cancel across a + or − sign.
- **Common denominator: a/p + b/q = (aq + bp)/(pq)** — use to combine fractions before comparing or solving.


## Mental-math / speed

- **Memorize the three product patterns cold** so `(x−7)(x+7)` is `x²−49` on sight, no FOIL.
- **Treat a leading minus as −1 and distribute it visually** before you write anything — pre-flip the signs in your head, then write the clean line. Stops 80% of sign errors.
- **Coefficient + sign first, variable second.** When combining `5x − 8x`, do the numbers (`−3`), then attach `x`. Keeps you from losing the variable.
- **Squares to 20 and perfect squares matter** for difference-of-squares: recognizing `x² − 64` as `(x−8)(x+8)` requires knowing 64 = 8².
- **Plug in x = 2** to sanity-check any "simplify" step in 5 seconds: original and your simplified version must give the same number. If they don't, you erred — find it before moving on.
- **For algebraic fractions, factor first, then look for matching factors** top and bottom. If nothing factors into a shared factor, nothing cancels — don't force it.


## Worked examples


**Example 1.** Simplify (2x + 3)(x − 4) − 2x(x − 5).

*Fast method:* Expand each piece, then combine. FOIL the first: (2x+3)(x−4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12. Distribute the second: −2x(x−5) = −2x² + 10x (note: minus times minus 5 gives +10x). Now add: (2x² − 2x²) + (−5x + 10x) + (−12) = 0 + 5x − 12 = **5x − 12**. Sanity check with x=2: original = (7)(−2) − 4(−3) = −14 + 12 = −2; simplified = 5(2)−12 = −2. Match.

*Trap:* Rushed test-takers write −2x(x−5) = −2x² − 10x, forgetting that minus times minus is plus. That turns the answer into 5x... wait — actually it makes the x-terms −5x − 10x = −15x, giving the wrong −15x − 12. The sign on the 10x is the whole game.


**Example 2.** Simplify (a + b)² − (a − b)².

*Fast method:* Recognize the patterns instead of expanding blindly. (a+b)² = a² + 2ab + b²; (a−b)² = a² − 2ab + b². Subtract: (a² + 2ab + b²) − (a² − 2ab + b²). The a² and b² cancel; you're left with 2ab − (−2ab) = **4ab**. Even faster: this is a difference of squares with 'first' = (a+b), 'second' = (a−b), so it equals [(a+b)+(a−b)]·[(a+b)−(a−b)] = (2a)(2b) = 4ab.

*Trap:* The killer mistake is dropping the parentheses on the second square: writing a² + 2ab + b² − a² − 2ab + b² and getting 2b². Subtracting the WHOLE expression means flipping every sign of (a−b)², so the −2ab becomes +2ab. Forget that and you lose the entire answer.


**Example 3.** Combine into a single fraction: 1/x + 1/(x + 1).

*Fast method:* Common denominator is x(x+1) — just multiply the two denominators since they share no factor. Rewrite each: 1/x = (x+1)/[x(x+1)] and 1/(x+1) = x/[x(x+1)]. Add the numerators: (x+1) + x = 2x + 1. Result: **(2x + 1) / [x(x + 1)]**. Sanity check at x=1: original = 1/1 + 1/2 = 3/2; simplified = (3)/(1·2) = 3/2. Match.

*Trap:* People 'add the fractions' by adding numerators and denominators straight across: 1/x + 1/(x+1) = 2/(2x+1). That is flatly false — you must convert to a common denominator first, exactly as with numeric fractions. The fast tell: never add denominators.


## Practice (try before reading answers)


**P1** (easy, MC-one). Simplify the expression 3(2x − 5) − 2(x − 4).
- A) 4x − 23
- B) 4x − 7
- C) 4x + 3
- D) 8x − 7
- E) 4x − 11

**P2** (easy, MC-one). If x ≠ 0 and y ≠ 0, simplify (6x²y) / (2xy).
- A) 3xy
- B) 3x
- C) 3x²
- D) 3
- E) 3x²y

**P3** (medium, Numeric). The expression (x + 5)(x − 5) − (x − 3)² is equal to ax + b for constants a and b. What is the value of the expression when x = 10? (Enter a number.)

**P4** (hard, MC-select). Indicate ALL expressions that are equivalent to x² − 9 for all values of x.
- A) (x − 3)(x + 3)
- B) (x + 3)² − 6x − 18
- C) (3 − x)(3 + x)
- D) x² − 6x + 9
- E) (x − 3)² + 6x − 18

**P5** (hard, QC). x > 0.
Quantity A: (2x² + 6x) / (2x)
Quantity B: x + 3
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P6** (hard, Numeric). For nonzero a and b, the expression ( (1/a) − (1/b) ) / ( (1/a) + (1/b) ) simplifies to a single fraction in a and b. What is its value when a = 2 and b = 6? (Enter a fraction.)


---
## Answers, fast solutions & traps


**P1 — B**  
Solution: Distribute both: 3(2x−5) = 6x − 15; −2(x−4) = −2x + 8 (minus times minus 4 is +8). Add: (6x − 2x) + (−15 + 8) = 4x − 7.  
Trap: Writing −2(x−4) = −2x − 8 (sign error on the −4) gives 4x − 23, choice A. The second sign flip is the trap.


**P2 — B**  
Solution: Cancel common factors: 6/2 = 3; x²/x = x; y/y = 1. Left with 3x. (Plug-in check: x=2, y=5 gives 6·4·5 / (2·2·5) = 120/20 = 6 = 3·2.)  
Trap: Canceling only the y and leaving x² (giving 3x², choice C) — or forgetting to reduce x²/x to x. Cancel each factor fully.


**P3 — 26**  
Solution: (x+5)(x−5) = x² − 25 (difference of squares). (x−3)² = x² − 6x + 9. Subtract the whole thing: x² − 25 − x² + 6x − 9 = 6x − 34. At x = 10: 60 − 34 = 26.  
Trap: Expanding (x−3)² as x² − 9 (forgetting the −6x middle term) or failing to flip both signs of (x²−6x+9) when subtracting. Either kills it.


**P4 — A,B,E**  
Solution: A: difference of squares = x²−9. ✓  B: (x+3)² = x²+6x+9; minus 6x minus 18 = x²−9. ✓  C: (3−x)(3+x) = 9 − x² (opposite sign). ✗  D: that's (x−3)², not x²−9. ✗  E: (x−3)² = x²−6x+9; plus 6x minus 18 = x²−9. ✓  So A, B, E.  
Trap: Picking C because it 'looks like' difference of squares — but the order gives 9 − x², the negative. And picking D, confusing x²−9 with the perfect-square (x−3)². No partial credit, so each option must be checked independently.


**P5 — C**  
Solution: Factor the top: 2x² + 6x = 2x(x + 3). Divide by 2x (legal since x > 0, so 2x ≠ 0): = x + 3. So A = B exactly, for every allowed x. Answer C.  
Trap: Splitting the fraction wrong as x² + 3x or canceling only part of it, then plugging one value and guessing. Also: thinking you 'can't cancel' and calling it indeterminate (D). The domain x > 0 guarantees the cancellation is valid.


**P6 — 1/2**  
Solution: Multiply top and bottom by ab to clear the inner fractions: numerator (1/a − 1/b)·ab = b − a; denominator (1/a + 1/b)·ab = b + a. So the expression = (b − a)/(b + a). At a=2, b=6: (6−2)/(6+2) = 4/8 = 1/2.  
Trap: Trying to cancel the 1/a or 1/b terms across the + and − signs (illegal — they're added, not factors), or plugging in before simplifying and botching the nested fractions. Clear the complex fraction by multiplying by ab first.


## Common mistakes

- **Sign errors when distributing a negative.** `−2(x − 5)` becomes `−2x + 10`, not `−2x − 10`. Fix: mentally pre-flip every inside sign before writing, and treat a bare minus as `−1`.
- **`(a + b)² = a² + b²`.** The single most punished error in algebra. You must include the middle term: `a² + 2ab + b²`. Fix: say "square, twice the product, square" every time you square a binomial.
- **Canceling terms instead of factors in fractions.** `(x + 2)/x ≠ 2`, and `(x² + 6)/(x² ) ≠ 6`. You can only cancel things that are *multiplied* across the whole top and bottom. Fix: factor first; only cancel a factor that appears as a complete factor in both.
- **Adding fractions straight across.** `1/x + 1/(x+1) ≠ 2/(2x+1)`. Fix: always build a common denominator, identical to numeric-fraction addition.
- **Forgetting to subtract the WHOLE second expression.** In `(…) − (x² − 6x + 9)`, the minus flips all three signs: `− x² + 6x − 9`. Fix: wrap the subtracted expression in mental parentheses and distribute the minus before combining.
