# L03 — Integer properties and odd/even rules

_Area: Arithmetic · Topic: integer_properties_


## Concept

## Why this lesson is your highest-leverage hour

A huge share of GRE Quant Comparison (QC) and "must be true" traps are pure integer-property logic dressed up to look like calculation. If you reason with parity (odd/even) and integer rules, you answer in 15 seconds while the rushed test-taker grinds through algebra and falls into the trap. This is the difference between protecting Section 1 and bleeding time.

## Integers, first principles

An **integer** is a whole number with no fraction or decimal part: ..., -3, -2, -1, 0, 1, 2, 3, ... That's it. Negatives count. **Zero counts.** Non-integers (1/2, 0.7, sqrt(2)) are NOT integers — and the GRE constantly checks whether you forgot that a "number" might not be a whole one.

When a problem says "integer," your edge cases are always the same four troublemakers: **0, 1, a negative, and (if the problem allows non-integers) a fraction.** Memorize that quartet. It breaks more wrong answers than any formula.

## Even and odd, from scratch

An **even** integer is any integer divisible by 2 with no remainder: ..., -4, -2, 0, 2, 4, ... Write it as 2k. A **odd** integer leaves remainder 1: ..., -3, -1, 1, 3, ... Write it as 2k+1.

Two facts students blow:
- **0 is even.** It's divisible by 2 (0/2 = 0, no remainder). Not odd, not "neither." Even.
- **Negatives have parity too.** -7 is odd, -8 is even. Parity ignores sign.

Only integers are even or odd. The number 2.5 is neither — the question "is 2.5 even?" is a category error the GRE never makes by accident.

## The arithmetic of parity — and why you should never memorize blindly

You can rebuild every rule in two seconds by picturing pairs. Even = things that pair up perfectly. Odd = one leftover.

**Addition / subtraction** (same rule for + and -):
- even ± even = even (two perfect sets, still pairs)
- odd ± odd = even (two leftovers combine into a pair)
- even ± odd = odd (one leftover survives)

Shortcut: the result is **odd only when you combine an odd COUNT of odd numbers.** Sum of three odds = odd. Sum of two odds = even.

**Multiplication** — the asymmetry that wins points:
- even × anything = even (one factor of 2 infects the whole product)
- odd × odd = odd (no 2 anywhere)

So a product is **odd ONLY if every factor is odd.** One single even factor makes the whole thing even. This is the most-tested rule in the topic. "pq is odd" instantly means "both p and q are odd."

## The identities that look like algebra but are parity gifts

- **n^2 + n = n(n+1)** is the product of two consecutive integers. One of any two consecutive integers is even, so this is **always even**, for every integer n — positive, negative, or zero. Same logic: n^2 - n = n(n-1) is always even.
- A square has the **same parity as its root.** Odd squared is odd; even squared is even. And if n^2 is even, n must be even (no calculation needed).
- **k consecutive integers** always contain a multiple of k. So the product of 3 consecutive integers is always divisible by 6 (it has a multiple of 2 and a multiple of 3). The sum of 3 consecutive integers is always a multiple of 3 (it equals 3 times the middle one).

## How to actually use this on test day

When you see "integer," "even," "odd," or a QC with variables and no numbers, **do not solve forward.** Reach for parity rules first, then plug in 0, 1, a negative, and a fraction. If the relationship flips across those cases, the QC answer is "cannot be determined." If a parity rule forces one outcome, you're done before the test-taker next to you has picked up the calculator.


## Formulas that earn points

**Parity of sums/differences** — even±even=even, odd±odd=even, even±odd=odd.
*When to use:* any "is the result odd or even" question; remember the result is odd only when you add an odd number of odd terms.

**Parity of products** — even × (anything) = even; odd × odd = odd. A product is odd only if EVERY factor is odd.
*When to use:* the instant you see "pq is odd / even." Odd product => all factors odd. Even product => at least one even factor.

**Square keeps parity** — n even => n^2 even; n odd => n^2 odd; and n^2 even => n even.
*When to use:* QC comparing a variable to its square, or "must n be even?" reasoning.

**n^2 + n and n^2 - n are always even** (= n(n+1) and n(n-1), consecutive integers).
*When to use:* anytime you spot n^2 ± n — it is even for every integer n, full stop.

**Product of k consecutive integers is divisible by k!** — e.g., 2 consecutive => divisible by 2; 3 consecutive => divisible by 6.
*When to use:* "consecutive integers" + divisibility questions.

**Sum of k consecutive integers** — for odd k, it equals k times the middle term (so divisible by k). Sum of 3 consecutive = 3 × middle.
*When to use:* "consecutive integers" + sum/divisibility questions.

**The edge-case quartet: 0, 1, negative, fraction.**
*When to use:* every variable QC — test these before declaring a relationship; if it flips, the answer is "cannot be determined."


## Mental-math / speed

- **Parity check by last digit:** an integer is even iff its last digit is 0,2,4,6,8 — sign and size are irrelevant. -1,234,568 is even at a glance.
- **Collapse a long chain of operations to one parity bit.** Don't compute the value; track only odd/even. Example: (odd × even) + odd = even + odd = odd. Two seconds, no arithmetic.
- **"Product is odd" = "all factors odd"** is a one-way door you should walk through instantly. Likewise "sum of two integers is odd" => exactly one of them is even.
- **Squares mnemonic:** odd^2 always ends in an odd digit; even^2 always ends in an even digit. Useful as a sanity check on numeric-entry answers.
- **Spot n(n+1) and n(n-1) on sight.** If you see n^2+n, n^2-n, or "two consecutive integers multiplied," stamp it EVEN and move on.
- **0 is even — say it out loud once** so you never freeze on it under time pressure.


## Worked examples


**Example 1.** p and q are integers and pq is odd. Quantity A: p + q. Quantity B: 7. (Choose: A greater / B greater / equal / cannot be determined.)

*Fast method:* pq is odd => by the product rule, BOTH p and q are odd. Odd + odd = even, so p+q is even — but its size is unknown. Test the edge cases: p=q=1 gives p+q=2 (less than 7); p=q=5 gives p+q=10 (greater than 7). The relationship flips, so the answer is cannot be determined (D). The parity insight (both odd) was a red herring meant to make you feel you'd 'solved' it.

*Trap:* The rushed test-taker proves p+q is even, feels clever, and assumes that pins down the comparison — picking equal or B. Knowing the parity does NOT fix the magnitude. Always still test small and large values.


**Example 2.** n is an integer. Is n^2 + 3n + 1 even or odd?

*Fast method:* Track parity only, never the value. n^2 + 3n = n^2 + n + 2n. The piece n^2 + n is n(n+1) = product of consecutive integers = always even. Then +2n is even, and +1 flips it: even + even + odd = ODD. So n^2 + 3n + 1 is odd for every integer n. Sanity check with n=2: 4+6+1=11 (odd). n=3: 9+9+1=19 (odd). Confirmed.

*Trap:* Plugging in one value (say n=2) and stopping — you'd get 11 and might assume it's only odd 'for that case.' Or trying to factor/solve the quadratic. The fast path is pure parity bookkeeping: identify n^2+n as guaranteed even and let the leftover +1 decide.


**Example 3.** a and b are positive integers with a + b odd. Quantity A: a × b. Quantity B: a + b. (Choose: A greater / B greater / equal / cannot be determined.)

*Fast method:* a+b odd means exactly one of a,b is even and the other odd, so a×b is even (has an even factor) — but again that's just parity, not size. Plug in: a=1,b=2 gives product 2 < sum 3 (B greater). a=2,b=3 gives product 6 > sum 5 (A greater). Flips => cannot be determined (D).

*Trap:* Concluding that because a×b is even and a+b is odd they can never be equal, and then guessing one is 'usually' bigger. Parity rules out equality but says nothing about which is larger — you must test both a small case and a slightly larger case to see the flip.


## Practice (try before reading answers)


**P1** (easy, QC). n is an integer. Quantity A: n^2 + n. Quantity B: an odd integer of your choosing. Specifically — Quantity A: n^2 + n. Quantity B: 0. (Note: n^2 + n is even; you are comparing it to 0.)
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined

**P2** (easy, MC-one). a, b, and c are three consecutive integers. Which of the following must be true of their product a × b × c?
- A) It is always odd
- B) It is always divisible by 6
- C) It is always negative
- D) It equals 3 times the middle integer
- E) It is always a perfect square

**P3** (medium, MC-select). k is an odd integer. Select ALL of the following expressions that must also be odd.
- A) k^2
- B) k + 1
- C) 3k
- D) k^2 + k + 1
- E) 2k - 1

**P4** (medium, Numeric). How many integers n with 1 <= n <= 50 are such that n^2 - n is odd?

**P5** (hard, QC). a and b are positive integers with a + b odd. Quantity A: a × b. Quantity B: a + b. (Choose one.)
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined

**P6** (hard, MC-select). n is an integer greater than 1. Select ALL statements that MUST be true.
- A) If n is even, then n^2 is even
- B) If n^2 is even, then n is even
- C) n^2 > n
- D) n^2 - n is even
- E) If n is prime, then n is odd


---
## Answers, fast solutions & traps


**P1 — D**  
Solution: n^2+n = n(n+1) is always even, but not always positive. n=1 => 2 (A greater). n=0 => 0 (equal). n=-1 => 0 (equal). n=2 => 6 (A greater). Since it can equal 0 and can exceed 0, A is sometimes greater and sometimes equal — relationship cannot be determined (D).  
Trap: Assuming n^2+n is always positive because of the square. At n=0 and n=-1 it equals 0. Forgetting the edge cases 0 and -1 makes you wrongly pick A.


**P2 — B**  
Solution: Among any 3 consecutive integers there is at least one multiple of 2 and one multiple of 3, so the product is divisible by 2×3 = 6. (1×2×3=6, 2×3×4=24, both divisible by 6.) The '3 times the middle' rule is for the SUM, not the product — that's the decoy.  
Trap: Picking 'equals 3 times the middle integer' — true for the SUM of 3 consecutive integers, false for the product. Mixing up the sum rule and product rule is the classic slip.


**P3 — A,C,D,E**  
Solution: Track parity with k odd. k^2 = odd×odd = odd (A). k+1 = odd+1 = EVEN, so not odd (eliminate B). 3k = odd×odd = odd (C). k^2+k+1: k^2+k = k(k+1) is even, +1 => odd (D). 2k-1 = even-1 = odd (E). Answer: A, C, D, E.  
Trap: Including k+1 because 'it has k in it' — adding 1 to an odd number gives even. Each option must be tested independently; MC-select gives no partial credit, so one careless inclusion sinks the whole question.


**P4 — 0**  
Solution: n^2 - n = n(n-1) = product of two consecutive integers, one of which is always even. So n^2 - n is even for EVERY integer n — it is never odd. The count is 0.  
Trap: Assuming the answer must be 'about half' (25) because parity 'usually' splits evenly. Here a structural identity forces it to be always even, so the count is exactly 0. Don't reflexively estimate half.


**P5 — D**  
Solution: a+b odd => one of a,b even and one odd => a×b is even (always), but magnitude varies. a=1,b=2: product 2 < sum 3 (B greater). a=2,b=3: product 6 > sum 5 (A greater). It flips, so cannot be determined (D).  
Trap: Reasoning that the product (even) and sum (odd) can never be equal and then guessing the product 'must' be bigger. Parity rules out equality but not the direction — you must find both a flip case to land on D.


**P6 — A,B,C,D**  
Solution: A: even×even=even — true. B: contrapositive of parity-of-squares (if n were odd, n^2 would be odd) — true. C: for integer n>1, n^2 = n·n > n·1 = n — true. D: n^2-n = n(n-1), consecutive integers, always even — true. E: FALSE because n=2 is prime and even. Answer: A, B, C, D.  
Trap: Including 'if n is prime then n is odd' — 2 is the lone even prime and breaks it. The GRE loves the n=2 counterexample. One overlooked edge case on an MC-select costs the entire question.


## Common mistakes

1. **Forgetting 0 is even — and that 0 and negatives are integers.** Students treat "integer" as "positive whole number." Whenever you plug in, deliberately try 0, 1, and a negative. Half the QC "cannot be determined" answers hinge on one of these.

2. **Assuming a known parity pins down the comparison.** Proving "p+q is even" feels like an answer, but it tells you nothing about size. In any QC, after you nail the parity, STILL test a small and a large case — if the result flips, it's "cannot be determined."

3. **Mixing up the sum rule and the product rule for consecutive integers.** Sum of 3 consecutive = 3×middle (divisible by 3). Product of 3 consecutive = divisible by 6. Keep these straight or the decoy answers eat you.

4. **Plugging in a single value and generalizing.** One test case can't prove "must be true" or "always odd." Either use a parity argument that covers all cases, or test enough cases (including edge ones) to expose a flip.

5. **Mishandling MC-select.** No partial credit means one wrong inclusion or omission = zero. Slow down and evaluate every option independently — especially watch for the n=2 even-prime trap and the "add 1 to an odd number" (becomes even) trap.
