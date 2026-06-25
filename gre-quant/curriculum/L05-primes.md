# L05 — Prime numbers and prime factorization

_Area: Arithmetic · Topic: primes_


## Concept

## Why this is the master tool

Every positive integer above 1 is built from **primes** the way every molecule is built from atoms. Once you break a number into its prime "atoms," almost every hard GRE Arithmetic question becomes mechanical: divisibility, GCF/LCM, perfect squares/cubes, counting factors, "must be true" traps. Learn this one skill well and a whole band of top-difficulty questions opens up.

## What a prime actually is

A **prime** is a positive integer with **exactly two** distinct positive divisors: 1 and itself. That's the whole definition. From it, three facts you must never forget:

- **1 is NOT prime.** It has only one divisor (itself). The GRE loves this trap.
- **2 IS prime — and it's the only even prime.** Every other even number is divisible by 2, so it has a third divisor. So "2 is the smallest prime and the only even one" is a fact you'll use constantly.
- A **composite** number is a positive integer with more than two divisors (e.g., 6 = 1, 2, 3, 6). Numbers above 1 are either prime or composite. The number 1 is neither.

The first primes, memorize cold: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47**.

## The Fundamental Theorem: one number, one factorization

Every integer greater than 1 can be written as a product of primes in **exactly one way** (ignoring order). 12 = 2 × 2 × 3, always. 360 = 2³ × 3² × 5, always. This uniqueness is *why* prime factorization is so powerful — it's a number's fingerprint.

To find it, **build a factor tree**: split the number into any two factors, then keep splitting until everything is prime. Order doesn't matter; you always land on the same primes.

```
        360
       /   \
      4      90
     / \    /  \
    2   2  9    10
          / \   / \
         3   3 2   5     ->  360 = 2 x 2 x 2 x 3 x 3 x 5 = 2^3 x 3^2 x 5
```

## The one big idea: divisibility lives inside the factorization

This is the payoff. Once you have a number's prime factorization, **a divides b only if every prime in a's factorization appears in b's factorization with at least as high a power.**

Example: does 8 = 2³ divide n = 2⁴ × 3² × 5? Yes — n has four 2s, you only need three. Does 50 = 2 × 5² divide it? No — n has only one 5, and you need two. You don't multiply anything out; you just compare prime "inventories." This turns scary divisibility questions into a quick stock check.

## Counting divisors without listing them

Here's the trick the hardest questions are built on. If n = p^a × q^b × r^c, then the **number of positive divisors** of n is (a+1)(b+1)(c+1). 

Why? To build any divisor, you choose how many copies of p to include (0 up to a → that's a+1 choices), independently how many q's (b+1 choices), and so on. Multiply the choices. For 360 = 2³ × 3² × 5: (3+1)(2+1)(1+1) = 4 × 3 × 2 = **24 divisors** — counted in five seconds, no listing.

## Perfect squares and cubes in factorization language

A number is a **perfect square** exactly when **every prime exponent is even** (because √ halves each exponent and you need whole numbers). It's a **perfect cube** when every exponent is a multiple of 3. This single insight cracks every "smallest k to make it a perfect square/cube" problem: just find which exponents are short and supply the missing primes.


## Formulas that earn points

- **Prime = exactly 2 divisors (1 and itself).** 1 is NOT prime; 2 is the only even prime. — *Use whenever a question hinges on counting or identifying primes.*
- **Unique prime factorization: n = p₁^a · p₂^b · p₃^c …** — *Use as step 1 of nearly every integer-property question; it's the number's fingerprint.*
- **Divisibility rule: a | b ⇔ every prime power in a's factorization ≤ the matching power in b's.** — *Use for "is n divisible by…", "which must be a factor", and "must be true" QC/select-all.*
- **Number of positive divisors = (a+1)(b+1)(c+1)…** (exponents + 1, multiplied). — *Use for "how many factors/divisors does n have".*
- **Perfect square ⇔ all prime exponents even. Perfect cube ⇔ all exponents multiples of 3.** — *Use for "smallest k so that nk is a perfect square/cube" and "is n a perfect square".*
- **GCF = product of shared primes to the LOWEST power; LCM = all primes to the HIGHEST power.** — *Use for GCF/LCM, and for combining two factorizations.*
- **Prime-test ceiling: to check if n is prime, only test prime divisors up to √n.** — *Use to confirm a number is prime fast (e.g., 67: test 2,3,5,7; 8² = 64 < 67 < 81 = 9², so stop at 7).*


## Mental-math / speed

- **Divisibility quick-checks** (these find the small primes fast): by **2** if even; by **3** if digit-sum divisible by 3; by **5** if it ends in 0 or 5; by **9** if digit-sum divisible by 9; by **4** if last two digits form a multiple of 4; by **11** via alternating digit-sum. Strip 2s, 3s, and 5s first — what's left is usually small.
- **√n shortcut for prime-testing:** you only divide by primes up to the square root. Know your squares: 11²=121, 13²=169, 17²=289, 19²=361. So any number under 121 is prime if it survives division by 2, 3, 5, 7.
- **The "97 trap" numbers** that LOOK prime but aren't: 51 = 3×17, 57 = 3×19, 87 = 3×29, 91 = 7×13, 119 = 7×17, 133 = 7×19, 143 = 11×13. Digit-sum or a quick ÷7/÷11 catches them.
- **Build the factorization by peeling, not guessing:** keep dividing by 2 until odd, then by 3 until it stops, then 5, 7… You'll have the full factorization in seconds.
- **Divisor-count reflex:** see "how many factors" → factor → add 1 to each exponent → multiply. Never list.
- **Square/cube reflex:** see "perfect square" → check each exponent is even; "perfect cube" → check each is a multiple of 3. The fix is always supplying the *missing* primes.


## Worked examples


**Example 1.** How many positive divisors does 360 have?

*Fast method:* Factor by peeling: 360 = 36 x 10 = (2^2 x 3^2)(2 x 5) = 2^3 x 3^2 x 5^1. Apply the divisor-count formula: add 1 to each exponent and multiply: (3+1)(2+1)(1+1) = 4 x 3 x 2 = 24. Done in under 15 seconds, no listing.

*Trap:* Trying to list every divisor by hand (1, 2, 3, 4, 5, 6, 8, 9...). You'll burn 90 seconds and almost certainly miss one or double-count. The whole point of factorization is that you NEVER list.


**Example 2.** If n = 2^4 x 3^2 x 5, which of 12, 45, 8, and 50 divide n evenly?

*Fast method:* Factor each candidate and do an inventory check against n (which has four 2s, two 3s, one 5). 12 = 2^2 x 3: needs two 2s (have 4) and one 3 (have 2) -> YES. 45 = 3^2 x 5: needs two 3s (have 2) and one 5 (have 1) -> YES. 8 = 2^3: needs three 2s (have 4) -> YES. 50 = 2 x 5^2: needs TWO 5s but n has only one -> NO. Never multiply n out; just compare prime stock.

*Trap:* Computing n = 720 and long-dividing each number into 720 on the calculator. It works but it's slow and error-prone. Worse, students see '720 ends in 0, divisible by 5, and 50 ends in 0' and wrongly assume 50 divides it. The factorization shows instantly there's only one 5.


**Example 3.** What is the smallest positive integer k such that 540k is a perfect square?

*Fast method:* Factor 540 = 2^2 x 3^3 x 5^1. A perfect square needs EVERY exponent even. The 2 is fine (exponent 2). The 3 has exponent 3 (odd, short by one 3) and the 5 has exponent 1 (odd, short by one 5). Supply exactly the missing primes: k = 3 x 5 = 15. Check: 540 x 15 = 8100 = 90^2. The answer is k = 15.

*Trap:* Picking the first 'obvious' value like k = 5 or k = 3 (fixing only one odd exponent) or grabbing a perfect square like k = 4 (which doesn't fix the odd exponents at all). The rule is surgical: supply ONE of each prime that currently has an odd power, nothing more.


## Practice (try before reading answers)


**P1** (easy, MC-one). Which of the following integers is prime?
- A) 51
- B) 57
- C) 67
- D) 87
- E) 91

**P2** (easy, Numeric). How many positive divisors does 84 have?

**P3** (medium, MC-select). If n = 2^3 x 3^2 x 7, which of the following must be divisors of n? Select all that apply.
- A) 21
- B) 28
- C) 63
- D) 56
- E) 35

**P4** (medium, MC-one). What is the smallest positive integer k such that 72k is a perfect cube?
- A) 2
- B) 3
- C) 4
- D) 6
- E) 9

**P5** (hard, QC). Let x be the product of the first four prime numbers.

Quantity A: the number of positive divisors of x
Quantity B: 16
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P6** (hard, Numeric). What is the least positive integer that has exactly 15 positive divisors?


---
## Answers, fast solutions & traps


**P1 — C**  
Solution: Run divisibility checks. 51, 57, 87 all have digit-sums divisible by 3 (5+1=6, 5+7=12, 8+7=15), so each is divisible by 3 -> composite. 91 = 7 x 13 (a classic fake-prime). That leaves 67: not even, digit-sum 13 not divisible by 3, doesn't end in 0/5, and 67/7 isn't whole. Since 8^2 = 64 < 67 < 81 = 9^2, we only needed to test up to 7. 67 is prime.  
Trap: Eyeballing and picking 91 or 87 because they 'feel prime.' 91 = 7 x 13 and 87 = 3 x 29 are the exact numbers the GRE plants to punish students who skip the digit-sum and the ÷7 check.


**P2 — 12**  
Solution: Factor by peeling: 84 = 2 x 42 = 2 x 2 x 21 = 2^2 x 3 x 7. Divisor count = (2+1)(1+1)(1+1) = 3 x 2 x 2 = 12.  
Trap: Forgetting to add 1 to each exponent and instead multiplying the exponents themselves (2 x 1 x 1 = 2), or stopping the factorization early at 84 = 4 x 21 without breaking 4 into 2^2 and 21 into 3 x 7.


**P3 — A,B,C,D**  
Solution: Inventory of n: three 2s, two 3s, one 7. Factor each option and check it fits inside. 21 = 3 x 7 -> fits. 28 = 2^2 x 7 -> fits. 63 = 3^2 x 7 -> fits (uses both 3s). 56 = 2^3 x 7 -> fits (uses all three 2s). 35 = 5 x 7 -> n has NO factor of 5, so it fails. Answer: 21, 28, 63, 56.  
Trap: Including 35 because it 'looks small and divides things ending in 5/0.' There is no 5 anywhere in n's factorization, so any number containing a 5 is automatically out. Select-all has no partial credit, so one careless inclusion kills the whole question.


**P4 — B**  
Solution: Factor 72 = 2^3 x 3^2. A perfect cube needs every exponent to be a multiple of 3. The 2 has exponent 3 (already a multiple of 3 -> fine). The 3 has exponent 2, which needs to climb to 3, so it's short by exactly one 3. Supply k = 3. Check: 72 x 3 = 216 = 6^3.  
Trap: Reflexively applying the perfect-SQUARE habit and making exponents even instead of multiples of 3 (which would push you toward k = 2 to 'fix' the 2^3). Read whether it says square or cube, then match exponents to 2 or 3 accordingly.


**P5 — C**  
Solution: First four primes: 2, 3, 5, 7. So x = 2 x 3 x 5 x 7, with every exponent equal to 1. Divisor count = (1+1)(1+1)(1+1)(1+1) = 2^4 = 16. Quantity A = 16 = Quantity B. They are equal.  
Trap: Starting the prime list at 1 (1 is not prime) and using 1, 2, 3, 5 -> wrong product, wrong count. Or trying to list all divisors of 210 by hand and miscounting. Anchor on the definition: the first prime is 2, and four distinct primes each to the first power give exactly 2^4 divisors.


**P6 — 144**  
Solution: Work backward from the divisor formula. We need (exponents + 1) to multiply to 15. The ways to write 15 are 15 (one prime, exponent 14) or 3 x 5 (two primes, exponents 2 and 4). One prime gives 2^14 (huge). Two primes give p^4 x q^2; to minimize, put the BIGGER exponent on the SMALLEST prime: 2^4 x 3^2 = 16 x 9 = 144. Compare with 2^2 x 3^4 = 324 -> bigger. So 144 wins.  
Trap: Putting the larger exponent on the larger prime (2^2 x 3^4 = 324) or assuming '15 divisors' means 2^14 because 15 = 14+1. Also forgetting to test the 3 x 5 split. The minimizing rule is always: largest exponent on the smallest prime.


## Common mistakes

- **Treating 1 as prime (or forgetting 2 is prime).** 1 is neither prime nor composite — it breaks "first prime" and divisor-counting problems. And 2 is prime AND the only even prime; students who forget this mis-handle even/odd-prime logic. Anchor: the prime list starts at 2.
- **Falling for fake primes.** 51, 57, 87, 91, 119, 133, 143 look prime but aren't. Always run digit-sum (÷3, ÷9) and a quick ÷7 / ÷11 before calling anything prime. You only need to test primes up to √n.
- **Multiplying exponents instead of (exponent + 1) when counting divisors.** The formula is (a+1)(b+1)(c+1), not a·b·c. Forgetting the "+1" silently halves your count. Say "add one, then multiply" out loud.
- **Confusing the square rule with the cube rule.** Perfect square = all exponents EVEN; perfect cube = all exponents multiples of 3. Read which one the problem wants before fixing exponents, and supply only the missing primes — not a random perfect square/cube multiplier.
- **Computing the big number and long-dividing instead of comparing prime inventories.** For divisibility and "must be a factor" questions, factor both numbers and check that every prime power on the smaller one fits inside the bigger one. It's faster, calculator-free, and immune to the "ends in 0 so it's divisible by 50" illusion.
