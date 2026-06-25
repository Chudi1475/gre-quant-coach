# L09 — Ratios and proportions

_Area: Arithmetic · Topic: ratio_proportion_


## Concept

## What a ratio actually is

A ratio is a recipe. "3:5" does not mean "3 things and 5 things." It means *for every 3 of one, there are 5 of the other* — and that recipe can scale up forever. 3:5 is the same recipe as 6:10, as 30:50, as 300:500. The numbers can change; the relationship cannot.

This is the whole game. A ratio fixes the *proportions* between quantities but leaves the *actual amounts* free. To pin down real amounts, you need one more fact: a total, a difference, or one actual value.

## The "parts" mental model (your main tool)

Read 3:5 as **3 parts to 5 parts**. Picture 8 identical boxes total — 3 of them one type, 5 the other. Every problem becomes: *find the size of one box.*

- Total of 240 split 3:5? That's 3 + 5 = **8 parts**. One part = 240 ÷ 8 = 30. So 90 and 150.
- The difference between the two is 5 − 3 = **2 parts**.

Once you know what one part is worth, every quantity in the problem is just a multiple of it. This single idea — *add the parts, divide into the given, multiply back out* — solves the large majority of GRE ratio problems faster than algebra.

## Part-to-part vs part-to-whole (the classic trap)

This is the #1 place students lose points. There are two different things a ratio can describe:

- **Part-to-part:** boys to girls = 4:5. (Comparing two pieces.)
- **Part-to-whole:** boys to *total* = 4:9. (Comparing a piece to everything.)

When a ratio is 4:5, the total is 4 + 5 = **9 parts**. So boys are **4/9** of the class, NOT 4/5. The rushed test-taker sees "4:5" and writes 4/5 — wrong, that's the part-to-part ratio masquerading as a fraction of the whole. **Whenever a question asks "what fraction/percent of the total," sum the parts to get the denominator.**

## Proportions and the unit-multiplier method

A proportion is just two equal ratios: a/b = c/d. The GRE loves "if 4 widgets cost $6, how much do 10 cost?" You can cross-multiply, but the faster habit is the **unit multiplier**: find the price per widget, then scale.

$6 for 4 → $1.50 each → 10 × $1.50 = $15.

Or scale the recipe directly: 10 is 10/4 = 2.5 times as many widgets, so cost is 2.5 × $6 = $15. Pick whichever makes the arithmetic cleaner — scaling by the recipe is often faster than computing a unit price.

## Chaining ratios (a:b and b:c → a:b:c)

When two ratios share a term, link them by matching that shared term. a:b = 2:3 and b:c = 4:5. The b's disagree (3 vs 4), so scale each so b matches their LCM, 12:
- a:b = 2:3 → ×4 → 8:12
- b:c = 4:5 → ×3 → 12:15

Now stitch: **a:b:c = 8:12:15**, so a:c = 8:15. This "match the bridge" move shows up constantly.

## Why this matters

Ratios are the engine under rates (distance:time), mixtures (this:that), similar figures (side:side), and a huge slice of word problems. Master the parts model and the part-to-whole conversion, and a whole category of the test gets fast and automatic.


## Formulas that earn points

- **Parts method:** total ÷ (sum of ratio terms) = value of one part. *Use when given a ratio and a total to split.*
- **Part-to-whole conversion:** for ratio a:b, each piece is a/(a+b) and b/(a+b) of the total. *Use whenever the question asks "what fraction/percent of the total."*
- **Difference as parts:** the gap between two quantities in ratio a:b equals (a−b) parts. *Use when given "X more than Y" instead of a total.*
- **Proportion (cross-multiply):** a/b = c/d ⇒ ad = bc. *Use to solve for one unknown in two equal ratios.*
- **Unit multiplier / scaling:** new amount = (scale factor) × old amount, where scale factor = (new known)/(old known). *Use for "if this much costs/makes that, then…" problems.*
- **Chaining:** to combine a:b and b:c, scale both so the shared term matches (use its LCM), then read off a:b:c. *Use when two ratios share a variable.*
- **Ratios are scale-free:** a:b = ka:kb for any k≠0. Reduce or expand freely. *Use to simplify before comparing or to hit a target number.*


## Mental-math / speed

- **Always sum the parts first.** The instant you see a ratio with a total, compute the sum of terms (3:5 → 8). That number is your divisor and it prevents the part-to-whole trap.
- **Reduce before you compute.** 18:24 → divide by 6 → 3:4. Smaller numbers = faster, fewer errors.
- **Fraction-of-total sanity check:** in a:b, the bigger term's share is always more than half, the smaller less than half. 7:4 → red is 7/11 ≈ 64%, clearly above 50% — catch wrong answers instantly.
- **Scale by clean factors.** To go from 3 to 9, multiply by 3 — don't find a unit value first. Recognize the multiplier (×2, ×3, ×½, ×10) and apply it to every term at once.
- **Difference vs total:** "20 more girls" → that's the *difference* in parts; "60 students" → that's the *total*. Map the given number to parts before dividing.
- **Common splits to know cold:** 1:1 = 50/50, 1:2 = ⅓ & ⅔, 1:3 = 25/75, 1:4 = 20/80, 2:3 = 40/60, 3:5 = 37.5/62.5. Convert ratio to percent on sight.


## Worked examples


**Example 1.** A scholarship of $240 is split between two students in the ratio 3:5. How much more does the second student receive than the first?

*Fast method:* Sum the parts: 3 + 5 = 8 parts. One part = 240 ÷ 8 = $30. The gap is 5 − 3 = 2 parts = 2 × 30 = $60. (You don't even need the individual amounts — the difference is just the difference in parts.) Sanity: shares are $90 and $150, sum $240. Correct.

*Trap:* Rushing to compute both shares ($90 and $150) wastes time, and worse, some students compute 3/5 or 5/3 of $240 — treating part-to-part as if it were part-to-whole. The denominator must be the SUM of parts (8), never one of the terms.


**Example 2.** In a club the ratio of boys to girls is 4:5. There are 18 more girls than boys. How many people are in the club?

*Fast method:* The clue is a DIFFERENCE, not a total. Difference in parts = 5 − 4 = 1 part, and that equals 18. So one part = 18. Total parts = 4 + 5 = 9, so total people = 9 × 18 = 162. Quick check: boys 4×18=72, girls 5×18=90, gap 18. Correct.

*Trap:* Mapping 18 to the wrong thing. A rushed test-taker divides 18 by 9 (treating it as the total) or by 5 (a single term). The 18 corresponds to the DIFFERENCE in parts (1 part here), so map the given number to what it actually describes before dividing.


**Example 3.** Paint mix uses base to tint in the ratio 2:3. If a:b = 2:3 and b:c = 4:5 for related batches, what is a:c?

*Fast method:* Chain through the shared term b. The b's are 3 and 4; make them match using LCM 12. Scale a:b = 2:3 by 4 → 8:12. Scale b:c = 4:5 by 3 → 12:15. Now b lines up: a:b:c = 8:12:15, so a:c = 8:15. Done — no equations needed.

*Trap:* Just multiplying straight across (2×4 : 3×5 = 8:15 by luck here, but that shortcut is NOT valid in general and fails the moment the shared terms differ). You must first make the bridge term (b) equal in both ratios, then read off a and c.


## Practice (try before reading answers)


**P1** (easy, MC-one). Two quantities are in the ratio 5:3 and their sum is 64. What is the value of the larger quantity?
- A) 24
- B) 32
- C) 40
- D) 45
- E) 48

**P2** (easy, QC). In a bag, the ratio of red marbles to blue marbles is 7:4.

Quantity A: the fraction of the marbles that are red
Quantity B: 1/2
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined

**P3** (medium, Numeric). For three quantities, a:b = 2:3 and b:c = 4:5. If c = 45, what is the value of a?

**P4** (medium, MC-one). A 20-liter mixture contains milk and water in the ratio 3:2. How many liters of water must be added so that the milk-to-water ratio becomes 1:1?
- A) 2
- B) 4
- C) 6
- D) 8
- E) 12

**P5** (hard, MC-select). In which of the following ratios of smaller part to larger part is the smaller part exactly 1/4 of the total? Indicate all that apply.
- A) 1:3
- B) 2:6
- C) 3:1
- D) 5:15
- E) 2:8

**P6** (hard, QC). Quantities x and y are always in the ratio x:y = 5:8.

Quantity A: the value of x when x + y = 78
Quantity B: the value of y when x + y = 52
- A) Quantity A is greater
- B) Quantity B is greater
- C) The two quantities are equal
- D) The relationship cannot be determined


---
## Answers, fast solutions & traps


**P1 — C**  
Solution: Sum of parts = 5 + 3 = 8. One part = 64 ÷ 8 = 8. Larger = 5 × 8 = 40.  
Trap: Picking 24 (the smaller part) by grabbing the wrong term, or splitting 64 in half (32) and ignoring the ratio entirely.


**P2 — A**  
Solution: Red as a fraction of the WHOLE = 7/(7+4) = 7/11 ≈ 0.64, which is greater than 1/2. Quantity A is greater.  
Trap: Writing red = 7/4 and comparing that, or assuming any ratio splits near half. The fraction of the total uses the SUM (11) as the denominator; since 7 > 4, red is clearly above half.


**P3 — 24**  
Solution: Chain via b: scale a:b=2:3 by 4 → 8:12; scale b:c=4:5 by 3 → 12:15. So a:b:c = 8:12:15, giving a:c = 8:15. Then a = 45 × (8/15) = 24.  
Trap: Combining the ratios without matching the shared term b first, or using a:b directly (and computing a from b before finding b). Align b to its LCM (12) before reading off a:c.


**P4 — B**  
Solution: Milk = 20 × 3/5 = 12 L, water = 20 × 2/5 = 8 L. Milk doesn't change. For 1:1, water must equal milk = 12 L. Add 12 − 8 = 4 L.  
Trap: Trying to scale both quantities, or adding water to reach 20 L total again (which gives the wrong split). Only water is added, so hold milk fixed at 12 and bring water UP to 12.


**P5 — A,B,D**  
Solution: Smaller = 1/4 of total means smaller:larger = 1:3 (since 1 part of 4 is the smaller). Test each: 1:3 → 1/4 ✓; 2:6 reduces to 1:3 → 1/4 ✓; 3:1 → 3/4 ✗; 5:15 reduces to 1:3 → 1/4 ✓; 2:8 reduces to 1:4 → 1/5 ✗.  
Trap: Misreading 2:8 as 'smaller is 1/4' because a '4' appears — but 2:8 = 1:4, so the smaller is 1/5 of the total, not 1/4. Also missing that 2:6 and 5:15 are the SAME recipe as 1:3. Convert each to part-to-whole and reduce; never pattern-match on the digits.


**P6 — B**  
Solution: Sum of parts = 5 + 8 = 13. For x + y = 78: one part = 78 ÷ 13 = 6, so x = 5 × 6 = 30 (Quantity A). For x + y = 52: one part = 52 ÷ 13 = 4, so y = 8 × 4 = 32 (Quantity B). 32 > 30, so Quantity B is greater.  
Trap: Assuming Quantity A wins because its total (78) is bigger — but the two quantities measure different terms (x vs y) under different totals. Compute each value explicitly; the larger term (y) under the smaller total still edges out the smaller term (x) under the larger total.


## Common mistakes

- **Part-to-part read as part-to-whole.** Seeing 4:5 and writing 4/5 of the total. The total is 4+5 = 9 parts, so the share is 4/9. Always sum the parts to get the denominator when asked for a fraction or percent of the whole.
- **Mapping the given number to the wrong "parts."** A *total* divides by the SUM of terms; a *difference* divides by the DIFFERENCE of terms; one *actual value* divides by its own term. Identify which one the problem gives before you divide.
- **Chaining ratios without matching the bridge.** To combine a:b and b:c you must first make the shared term b equal in both (scale to its LCM). Multiplying straight across is invalid in general.
- **Forgetting ratios are scale-free.** 2:6, 5:15, and 1:3 are the same relationship. Reduce before comparing or you'll treat equivalent ratios as different (and miss MC-select answers).
- **Over-computing.** For "how much more/what fraction," you often don't need both raw amounts — work in parts (the difference is just the difference in parts). Solving everything longhand burns clock and invites arithmetic slips.
