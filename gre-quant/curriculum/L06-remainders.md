# L06 — Remainders and modular reasoning

_Area: Arithmetic · Topic: remainders_


## Concept

## What a remainder actually is

Forget long division for a second. A remainder is just **what's left over after you take out as many full groups as you can.**

If you have 17 cookies and put them in boxes of 5, you fill 3 boxes (15 cookies) and have **2 left over**. That 2 is the remainder. We write it as:

> 17 = 5 x 3 + **2**

Every division-with-remainder problem fits this one template:

> **Number = Divisor x (whole quotient) + Remainder**

That single line is the whole topic. Memorize the shape: `N = dq + r`.

## The one rule that matters most

The remainder is **always smaller than the divisor**, and never negative.

- Divide by 5 -> the only possible remainders are 0, 1, 2, 3, 4. Never 5, never 6.
- Divide by 7 -> remainders are 0 through 6.

So if a problem says "remainder when divided by 6," and an answer choice is 7, kill it instantly. This rule alone solves some QC questions.

## Why the GRE loves this (and why brute force loses)

The GRE rarely asks "65 divided by 7." It asks "**7 to the 100th power** divided by 5." You cannot compute 7^100 — not even with the calculator. The test is daring you to try and waste 4 minutes.

The escape hatch is that **remainders repeat in cycles.** Powers, sequences, and "every Nth term" problems all settle into a short repeating pattern. Find the pattern with tiny cases, then ride it.

## The core skill: build the number, don't just hold the remainder

When a problem says "n has remainder 3 when divided by 7," don't carry the abstract idea around. **Write the actual number:**

> n = 7k + 3 (where k is some whole number: 0, 1, 2, ...)

Now you can do algebra on it. Want the remainder of 4n? Multiply:

> 4n = 28k + 12 = 7(4k) + 12

But 12 is bigger than 7, so pull out one more 7: 12 = 7 + 5.

> 4n = 7(4k + 1) + **5** -> remainder 5.

This "build it as `dk + r`, then simplify" move handles almost every hard remainder question on the test.

## The fast alternative: just pick a number

If algebra feels slow, **pick the smallest number that fits** and compute directly. "n has remainder 3 when divided by 7" -> just use n = 3 (since 3 = 7x0 + 3). Then test whatever the problem asks. If you're nervous it's a coincidence, pick a second value (n = 10) and confirm. Two cases agreeing is usually enough on the GRE.

## Cyclical patterns (the high-value pattern)

For "big power divided by something," compute the remainder of the first few powers, watch it loop, and use the loop length.

Example: powers of 7 divided by 5.
- 7^1 -> rem 2
- 7^2 = 49 -> rem 4
- 7^3 -> rem 3
- 7^4 -> rem 1
- 7^5 -> rem 2 (it restarted!)

The cycle is **2, 4, 3, 1** with length 4. To find 7^100's remainder, ask **where in the cycle does exponent 100 land?** Divide the exponent by the cycle length: 100 / 4 = 25 remainder 0. A remainder of 0 means it lands on the **last** spot in the cycle -> 1.

That's the whole technique: find the cycle, then take (exponent) mod (cycle length).


## Formulas that earn points

**Division identity: N = dq + r, with 0 <= r < d**
Use this on every remainder problem. "Divided by d, remainder r" means N = dk + r. Build the actual number, then manipulate.

**Remainder bound: 0 <= r < divisor**
Use to instantly eliminate impossible answer choices and to resolve QC. Remainder when dividing by 6 can only be 0-5.

**Remainder of a sum/product = remainder of (sum/product of the remainders)**
Use to combine. (a+b) mod d depends only on (a mod d) + (b mod d); same for multiplication. Lets you replace huge numbers with their small remainders before adding/multiplying. Example: remainder of 4n where n has remainder 3 mod 7 -> 4x3 = 12 -> 12 mod 7 = 5.

**Cycle method for powers: remainder of b^n mod d**
Use for "big exponent divided by small number." List remainders of b^1, b^2, b^3... until they repeat. Let L = cycle length. Compute n mod L; that position in the cycle is your answer (a result of 0 means use the last entry of the cycle).

**Remainder 0 means "divides evenly" / is a multiple**
Use to translate "x is a multiple of d" <=> "x has remainder 0 when divided by d" <=> "d is a factor of x."

**Same remainder for several divisors -> use LCM**
"Leaves remainder r when divided by each of d1, d2, d3" means N = LCM(d1,d2,d3) x k + r. Smallest such N>r is LCM + r. Use for "smallest number that leaves remainder 1 when divided by 2,3,4,5,6" type traps.


## Mental-math / speed

**Read remainders off the calculator fast.** The on-screen calculator has no remainder button. Do: divide, note the whole part, then `Number - Divisor x WholePart`. E.g. 65 / 7 = 9.28..., whole part 9, so 65 - 63 = **2**. Faster than guessing.

**Decimal-to-remainder shortcut.** The fractional part of (N / d) times d gives the remainder. 65/7 = 9.2857..., 0.2857 x 7 = 2. Handy when the whole part is large.

**Cycle lengths to recognize on sight (mod the common divisors):**
- Last digit of powers cycles in length 1, 2, or 4 (e.g. powers of 2 end in 2,4,8,6 repeating).
- Powers mod 5: usually cycle length 1, 2, or 4.
- Powers mod 9: digit-sum behavior; cycles are short.
You don't need to memorize these — just know cycles are short (almost always <= 6), so listing the first ~6 powers always reveals it.

**Multiples land on remainder 0.** Counting "how many numbers from 1 to 100 leave remainder 2 when divided by 5" = count of the sequence 2, 7, 12, ... = roughly 100/5 = 20.

**Smallest-number trick.** "Remainder r when divided by d" -> the smallest valid value is just r itself (when r < d). Plug r in directly to test the question.

**Negative-looking shortcut.** b mod d when b is just under a multiple: 6^n mod 7 -> 6 is "-1 mod 7," so 6^even -> 1, 6^odd -> 6. Recognizing "one less than the divisor" saves the whole cycle list.


## Worked examples


**Example 1.** What is the remainder when 7^100 is divided by 5?

*Fast method:* Don't touch 7^100. Find the cycle of remainders for powers of 7 mod 5. 7^1->2, 7^2=49->4, 7^3->3, 7^4->1, 7^5->2 (restarts). Cycle = [2,4,3,1], length 4. Now place exponent 100 in the cycle: 100 / 4 = 25 remainder 0. Remainder 0 means it lands on the LAST slot of the cycle -> 1. Answer: 1.

*Trap:* Two traps. (1) Trying to actually compute or estimate 7^100 and burning the clock. (2) Off-by-one on the cycle: when the exponent divides evenly by the cycle length (remainder 0), rushed students grab the FIRST entry (2) instead of the LAST (1). Remainder 0 = end of the cycle, not the start.


**Example 2.** When the positive integer n is divided by 7, the remainder is 3. What is the remainder when 4n is divided by 7?

*Fast method:* Build n: n = 7k + 3. Then 4n = 28k + 12. The 28k is a clean multiple of 7, so ignore it. 12 / 7 = 1 remainder 5. Answer: 5. (Sanity check by plugging the smallest n: n = 3, 4n = 12, 12 / 7 = remainder 5. Match.)

*Trap:* Rushed students see remainder 3, multiply 4 x 3 = 12, and write 12 as the answer. But 12 is larger than the divisor 7, which is impossible for a remainder. You must reduce: 12 mod 7 = 5. Any 'remainder' >= the divisor is a red flag you skipped the last step.


**Example 3.** A positive integer x leaves a remainder of 4 when divided by 6. What is the remainder when x is divided by 9?

*Fast method:* Test multiple values, since two divisors that aren't multiples of each other rarely lock the answer. x can be 4, 10, 16, 22... Check x mod 9: 4->4, 10->1, 16->7. Three different remainders. The remainder is NOT determined. Answer: cannot be determined.

*Trap:* The trap is assuming the divided-by-6 fact pins down the divided-by-9 result. Test-takers plug in ONE value (say x = 4 -> remainder 4) and confidently answer 4. Always test a second and third value when the question switches to a divisor that doesn't share the structure of the first. If results differ, it's 'cannot be determined.'


## Practice (try before reading answers)


**P1** (easy, Numeric). What is the remainder when 65 is divided by 7?

**P2** (easy, MC-one). When the positive integer n is divided by 5, the remainder is 3. What is the remainder when n + 9 is divided by 5?
- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**P3** (medium, QC). Quantity A: the remainder when 3^40 is divided by 7. Quantity B: the remainder when 2^40 is divided by 7.
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P4** (medium, MC-select). A positive integer k leaves a remainder of 2 when divided by 5. Which of the following could be the remainder when k is divided by 3? Indicate all that apply.
- A) 0
- B) 1
- C) 2

**P5** (hard, MC-one). The positive integer n leaves a remainder of 7 when divided by 12. What is the remainder when n^2 is divided by 12?
- A) 0
- B) 1
- C) 4
- D) 7
- E) 11

**P6** (hard, Numeric). What is the least integer greater than 1 that leaves a remainder of 1 when divided by each of 2, 3, 4, 5, and 6?


---
## Answers, fast solutions & traps


**P1 — 2**  
Solution: 65 / 7 = 9 with 7x9 = 63 used. 65 - 63 = 2. Or on the calculator: 65/7 = 9.28..., whole part 9, 65 - 7x9 = 2.  
Trap: Misreading the calculator's decimal (9.28) as the answer. The decimal is not the remainder; you must subtract the whole multiple back out.


**P2 — C**  
Solution: Smallest n is 3. n + 9 = 12. 12 / 5 = 2 remainder 2. Or: remainders add, 3 + 9 = 12, 12 mod 5 = 2.  
Trap: Adding the remainders to get 3 + 9 = 12 and stopping, or grabbing the leftover digit. 12 is bigger than the divisor 5, so reduce: 12 - 10 = 2.


**P3 — A**  
Solution: Cycle of 3^n mod 7: 3,2,6,4,5,1 (length 6). 40 mod 6 = 4 -> 4th entry = 4, so A = 4. Cycle of 2^n mod 7: 2,4,1 (length 3). 40 mod 3 = 1 -> 1st entry = 2, so B = 2. A = 4 > B = 2.  
Trap: Different exponent bases have different cycle lengths (6 vs 3), so the same exponent 40 lands in different places. Rushed test-takers reuse one cycle length for both, or assume equal exponents give equal remainders.


**P4 — A,B,C**  
Solution: k is one of 2, 7, 12, 17, 22, 27... Check mod 3: 12->0, 7->1, 2->2. All three remainders are achievable, so all options work.  
Trap: Assuming the 'divided by 5' condition restricts the 'divided by 3' outcome and selecting only one. Since 5 and 3 share no factors, k mod 3 ranges over every possible value. Test several k before eliminating any option.


**P5 — B**  
Solution: Build it: n = 12k + 7, so n^2 = 144k^2 + 168k + 49. Both 144k^2 and 168k are multiples of 12, so only 49 matters. 49 / 12 = 4 remainder 1. Answer 1. (Check: n = 7, 7^2 = 49, 49 mod 12 = 1.)  
Trap: Writing 7 (just squaring the remainder idea loosely) or writing 49 without reducing. The remainder of n^2 is (remainder)^2 reduced mod the divisor: 7^2 = 49, then 49 mod 12 = 1.


**P6 — 61**  
Solution: A number leaving remainder 1 for all those divisors is (a common multiple of 2,3,4,5,6) + 1. Smallest common multiple = LCM = 60. So the number is 60 + 1 = 61. Check: 61 = 60+1, and 60 is divisible by 2,3,4,5,6, so each division leaves remainder 1.  
Trap: Multiplying 2x3x4x5x6 = 720 (giving 721) instead of using the LCM (60). The numbers overlap in factors, so the LEAST common multiple is 60, not the raw product. Also don't forget the '+1.'


## Common mistakes

**1. Reporting a "remainder" that is >= the divisor.** Multiplying or adding remainders and forgetting to reduce (e.g. writing 12 as a remainder when dividing by 7). Fix: a remainder must satisfy 0 <= r < divisor. If yours is too big, subtract the divisor until it fits.

**2. Misreading the calculator decimal as the remainder.** 65/7 = 9.2857; students write 9, 2, or 28. Fix: remainder = Number - Divisor x (whole part). Always subtract the full multiple back out.

**3. Off-by-one in the power cycle when the exponent divides evenly.** When exponent mod cycle-length = 0, the answer is the LAST item in the cycle, not the first. Fix: rewrite "position 0" as "the end of the cycle."

**4. Testing only one value on "cannot be determined" QC questions.** One plug-in looks decisive, but an edge case flips it. Fix: whenever a question switches to a different, unrelated divisor, test 2-3 values before committing. Different results = cannot be determined.

**5. Using the product instead of the LCM for "same remainder, several divisors."** Multiplying all divisors over-counts shared factors. Fix: use LCM of the divisors, then add the common remainder.
