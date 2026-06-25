# L04 — Divisibility, factors, and multiples

_Area: Arithmetic · Topic: divisibility_factors_multiples_


## Concept

## The one idea everything else hangs on

"a is divisible by b" means: when you split a into groups of size b, **nothing is left over.** 12 splits cleanly into groups of 4 (three groups, remainder 0). 13 does not. That clean split is the whole topic. Five words say the same thing, and the GRE will use all five interchangeably — learn to hear them as identical:

- 12 **is divisible by** 4
- 4 **divides** 12
- 4 **is a factor** of 12
- 12 **is a multiple** of 4
- 12 **/** 4 **is an integer**

If a sentence says any one of these, mentally rewrite it as the others. That flexibility is half the battle.

## Factors vs. multiples — don't mix them up

**Factors** of a number are the building blocks that fit *inside* it. They are always **less than or equal to** the number, and there are **finitely many.** Factors of 12: {1, 2, 3, 4, 6, 12}. Six of them, that's the whole list.

**Multiples** are what you get by *scaling the number up*: 12, 24, 36, 48, ... They are always **greater than or equal to** the number, and there are **infinitely many.**

A clean memory hook: factors live *under* a number (a small family), multiples live *above* it (an endless line). The GRE loves to swap these words on a stressed test-taker.

## Why divisibility rules exist (so you never need long division)

A number is built from its digits, and each digit's place value (1, 10, 100, ...) has its own divisibility behavior. That's why short rules work:

- **Ends in 0, 2, 4, 6, 8** -> divisible by **2** (it's even).
- **Last digit 0 or 5** -> divisible by **5**.
- **Ends in 0** -> divisible by **10**.
- **Digit sum divisible by 3** -> divisible by **3**. (Each power of 10 is one more than a multiple of 9, so only the digit sum matters.) Example: 1,737 -> 1+7+3+7 = 18 -> yes.
- **Digit sum divisible by 9** -> divisible by **9**. Same logic, stronger. Example: 4+2+3 = 9 -> 423 is divisible by 9.
- **Last two digits divisible by 4** -> divisible by **4**. (Every hundred is a multiple of 4, so only the last two digits decide.) Example: 1,316 -> "16" is divisible by 4 -> yes.
- **Divisible by both 2 and 3** -> divisible by **6**. That's the rule: 6 = 2 x 3, so check even AND digit-sum-by-3.

## The deepest trick: prime factorization is a number's DNA

Break a number into primes once, and you can answer almost everything. 36 = 2 x 2 x 3 x 3 = 2² x 3². From that single fact:
- **Every factor of 36** is built only from those primes (no 5s, no 7s allowed inside).
- **n is divisible by 36** only if n's prime DNA contains *at least* two 2s and two 3s.

This is the move that separates a 160 from a 168: when a problem says "n is a multiple of 12," translate it to "n contains at least 2² and 3¹," and reason from there.

## GCF and LCM — two sides of one coin

**GCF (greatest common factor)**: the biggest number that divides *both*. Use it to **reduce** and to find "how many fit." Think: the **overlap** of two prime DNAs — take each shared prime to its **lowest** power.

**LCM (least common multiple)**: the smallest number both divide *into*. Use it for "when do cycles line up" (two events repeating). Think: the **union** — take each prime to its **highest** power.

Example with 12 = 2²·3 and 18 = 2·3²:
- GCF = lowest of each shared prime = 2¹ · 3¹ = **6**.
- LCM = highest of each prime = 2² · 3² = **36**.

Sanity check that always holds: **GCF x LCM = the product of the two numbers.** Here 6 x 36 = 216 = 12 x 18. ✓


## Formulas that earn points

- **Divisibility by 2:** last digit even. *Use to spot even numbers and rule out odd answers instantly.*
- **Divisibility by 3:** digit sum is a multiple of 3. *Use on any "is this a multiple of 3/6/9" check — faster than dividing.*
- **Divisibility by 4:** last two digits form a multiple of 4. *Use on big numbers; ignore everything but the final two digits.*
- **Divisibility by 5:** last digit 0 or 5. **By 10:** last digit 0. *Instant.*
- **Divisibility by 6:** passes the 2-rule AND the 3-rule. *Use whenever you see 6; never divide by 6 directly.*
- **Divisibility by 9:** digit sum is a multiple of 9. *Stronger than the 3-rule; great for fraction reduction.*
- **Prime factorization:** write n = p₁^a · p₂^b · ... *The master tool — convert "multiple of k" into "must contain k's primes."*
- **GCF:** product of shared primes at their LOWEST powers. *For reducing fractions and "largest that divides both."*
- **LCM:** all primes at their HIGHEST powers. *For "when do two cycles coincide" and adding unlike fractions.*
- **GCF(a,b) x LCM(a,b) = a x b.** *Use to get one from the other, or to sanity-check your answer.*
- **Number of factors:** if n = p^a · q^b, count = (a+1)(b+1). *For "how many factors does n have" without listing.*


## Mental-math / speed

- **Hear all five phrasings as one.** "Factor of," "divides," "divisible by," "multiple of," "/ is an integer" — same fact. Rewrite on sight.
- **Digit-sum reflex:** for ANY 3/6/9 question, add the digits first. 8,514 -> 8+5+1+4 = 18 -> divisible by 3 and 9 (and by 6 since it's even). No division.
- **The 4-rule beats long division:** for divisibility by 4, glance only at the last two digits. 7,328 -> "28" -> yes.
- **Reduce fractions by killing shared primes, not by trial:** 84/36 -> both even (/2 -> 42/18), both even again (/2 -> 21/9), both /3 -> 7/3. Or jump straight via GCF(84,36)=12 -> 7/3.
- **Factor in PAIRS to never miss one:** for 36, walk up: 1·36, 2·18, 3·12, 4·9, 6·6 — stop when the pair meets. That's all 9 factors, guaranteed complete.
- **Translate "multiple of k" to prime DNA.** Multiple of 24 = must contain 2³ and 3. Then any factor of 24 (1,2,3,4,6,8,12,24) is guaranteed to divide it; 5,9,16 are not.
- **Squares to know cold** (they decide factor counts and reductions): 11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 18²=324, 20²=400.


## Worked examples


**Example 1.** Is 6,453 divisible by 9? By 6? By 4?

*Fast method:* Digit sum = 6+4+5+3 = 18. 18 is a multiple of 9 -> YES divisible by 9 (and by 3). By 6? Need even AND divisible by 3. Last digit is 3 (odd) -> NOT divisible by 6. By 4? Look only at last two digits: '53.' 53 is not a multiple of 4 -> NOT divisible by 4. Total work: one digit-sum and two glances, zero long division.

*Trap:* Seeing the digit sum 18 (a multiple of both 3 and 9) and assuming the number is therefore divisible by 6 too. The 6-rule ALSO demands the number be even, and 6,453 is odd. Divisibility by 3 never guarantees divisibility by 6.


**Example 2.** Two lighthouses flash on cycles: one every 12 seconds, one every 18 seconds. They just flashed together. After how many seconds do they next flash together?

*Fast method:* 'When do two cycles coincide' = LCM. Prime DNA: 12 = 2²·3, 18 = 2·3². Take each prime at its HIGHEST power: 2²·3² = 4·9 = 36 seconds. Sanity check: 36/12 = 3 and 36/18 = 2, both whole -> correct.

*Trap:* Grabbing the GCF (6) instead of the LCM, because 'common' pulls the eye toward GCF. GCF answers 'largest that fits inside both'; coinciding cycles need the smallest number both divide INTO — that's LCM. Multiplying 12 x 18 = 216 also works as a common multiple but it's not the LEAST, so it's wrong here.


**Example 3.** If n is a positive multiple of 15, which of these MUST be a factor of n: 3, 5, 9, 10, 25?

*Fast method:* Multiple of 15 -> n contains at least one 2... no: 15 = 3·5, so n's DNA is guaranteed to have at least one 3 and one 5. So 3 (✓) and 5 (✓) must divide n. 9 = 3² needs two 3s — not guaranteed (n=15 fails). 10 = 2·5 needs a 2 — not guaranteed (15 has no 2). 25 = 5² needs two 5s — not guaranteed. Must-be factors: 3 and 5 only.

*Trap:* Testing only one value of n, like n = 30, where 3, 5, AND 10 all happen to divide it, and concluding 10 'must' work. 'Must be true' means true for EVERY valid n. Always test the smallest case (n = 15) — it instantly kills 9, 10, and 25.


## Practice (try before reading answers)


**P1** (easy, Numeric). What is the smallest three-digit number that is a multiple of 7?

**P2** (easy, QC). Quantity A: the number of distinct positive factors of 36. Quantity B: 9
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P3** (medium, MC-select). Which of the following are divisible by 6? Indicate all that apply.
- A) 132
- B) 210
- C) 318
- D) 402
- E) 525
- F) 516

**P4** (medium, Numeric). What is the least common multiple of 12 and 18?

**P5** (hard, QC). Quantity A: the greatest common factor of 48 and 72. Quantity B: the least common multiple of 6 and 8
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined from the information given

**P6** (hard, MC-select). The positive integer n is a multiple of 24. Which of the following MUST be a factor of n? Indicate all that apply.
- A) 4
- B) 6
- C) 8
- D) 9
- E) 16


---
## Answers, fast solutions & traps


**P1 — 105**  
Solution: Three-digit numbers start at 100. 7 x 14 = 98 (too small, two digits). 7 x 15 = 105. That's the first multiple of 7 at or above 100.  
Trap: Answering 98 because it's the nearest multiple of 7 to 100 — but 98 has only two digits. 'Three-digit' means 100 or more; round UP to the next multiple, not to the closest one.


**P2 — C**  
Solution: Count factors in pairs: 1·36, 2·18, 3·12, 4·9, 6·6. That's 1,2,3,4,6,9,12,18,36 = nine factors. (Check via formula: 36 = 2²·3², so (2+1)(2+1) = 9.) Quantity A = 9 = Quantity B.  
Trap: Forgetting that 6·6 contributes only ONE factor (6), not two — or listing factors loosely and double-counting or missing one. Pairing forces a complete, no-duplicate list.


**P3 — A,B,C,D,F**  
Solution: Divisible by 6 = even AND digit-sum divisible by 3. 132: even, 1+3+2=6 ✓. 210: even, 3 ✓. 318: even, 12 ✓. 402: even, 6 ✓. 525: ODD -> out. 516: even, 12 ✓. So A,B,C,D,F.  
Trap: Including 525 because its digit sum (12) is divisible by 3, while overlooking that it ends in 5 and is therefore odd. The 6-rule requires BOTH conditions; passing the 3-test alone is not enough.


**P4 — 36**  
Solution: Prime DNA: 12 = 2²·3, 18 = 2·3². LCM takes each prime at its highest power: 2²·3² = 4·9 = 36. Check: 36/12 = 3, 36/18 = 2, both integers.  
Trap: Multiplying 12 x 18 = 216 and calling it the LCM. The product is A common multiple but not the LEAST. Also resist answering 6 — that's the GCF, the wrong tool.


**P5 — C**  
Solution: A: 48 = 2⁴·3, 72 = 2³·3². GCF = shared primes at lowest powers = 2³·3 = 8·3 = 24. B: 6 = 2·3, 8 = 2³. LCM = highest powers = 2³·3 = 24. Both equal 24.  
Trap: Rushing GCF as 'the bigger number's factor' or sloppily taking 2⁴ instead of 2³ for the GCF (GCF uses the LOWEST shared power). Mixing up which operation takes lowest vs. highest powers flips both answers.


**P6 — A,B,C**  
Solution: n is a multiple of 24, so n's DNA contains at least 24 = 2³·3. Anything that divides 24 is guaranteed to divide n: 4=2² ✓, 6=2·3 ✓, 8=2³ ✓. But 9=3² needs two 3s (24 has one) -> not guaranteed. 16=2⁴ needs four 2s (24 has three) -> not guaranteed. So A, B, C.  
Trap: Testing one convenient value like n = 48 (= 2⁴·3) where 16 divides it, and concluding 16 'must' be a factor. 'Must' = true for every multiple of 24, including n = 24 itself, which kills both 9 and 16. Always test the smallest case.


## Common mistakes

- **Confusing factors and multiples.** Factors are finite and ≤ the number; multiples are infinite and ≥ the number. When a problem says "factor," picture the small family underneath; "multiple," the endless line above. Slow down on the exact word.
- **Treating "must be true" like "could be true."** On QC and select-all problems, testing a single lucky value and generalizing is the #1 score-killer. "Must" means EVERY valid case — always test the smallest/edge case (often the number itself, or 0/1) to break false candidates.
- **Swapping GCF and LCM.** "Common" pulls people toward GCF when the situation (coinciding cycles, adding fractions, "smallest number both divide into") actually needs LCM. Memorize: GCF = overlap/lowest powers/reducing; LCM = union/highest powers/lining up.
- **Applying the 6-rule (or 4-rule) halfway.** Divisible by 6 needs BOTH even and digit-sum-by-3 — passing only one is a trap. For 4, check the last two digits, not just the last one or the digit sum.
- **Botching factor counts by mishandling perfect squares.** A square's middle factor pairs with itself (6·6 for 36) and counts once, giving an ODD total number of factors. Pair-listing or the (a+1)(b+1) formula prevents both double-counting and omissions.
