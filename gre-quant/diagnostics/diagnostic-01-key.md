# Diagnostic 01 — Answer Key, Fast Solutions & Traps

_Do not read until you have answered._


### Q1 · Arithmetic · QC · moderate

**Answer:** C  ·  _topic: remainders_

**Fast method:** Write n = 7k + 3, so 2n = 14k + 6. The 14k is a multiple of 7, so the remainder of 2n is the remainder of 6, which is 6. Or just plug in the smallest case n = 3: 2n = 6, and 6 divided by 7 leaves remainder 6. Try n = 10: 2n = 20 = 14 + 6, remainder 6 again. It never changes, so both quantities equal 6.

**Trap:** A rushed test-taker reasons 'the original remainder was 3, doubling gives 6, but maybe a bigger n changes things' and picks D (cannot be determined). The remainder is locked at 6 for every valid n because 2(7k+3) = 7(2k) + 6, so the answer is fixed, not indeterminate.


### Q2 · Algebra · QC · moderate

**Answer:** C  ·  _topic: linear_equations_

**Fast method:** Solve in one step: 3x = 18, so x = 6. Quantity A equals Quantity B exactly, so the answer is C. No need to second-guess a clean linear equation with a unique solution.

**Trap:** A rushed solver who adds 7 to only one side or divides 18 by 6 incorrectly gets x = 4 or x = 8 and picks B or A. The equation has one exact solution (6), forcing 'equal' (C), not a 'cannot be determined' since x is fully pinned down.


### Q3 · Geometry · QC · moderate

**Answer:** B  ·  _topic: triangle_inequality_

**Fast method:** Don't try to nail down the third side; just bound it with the triangle inequality. The third side s must satisfy 15 - 8 < s < 15 + 8, i.e. 7 < s < 23. So the perimeter = 23 + s lies strictly between 30 and 46. The maximum is never actually reached, so the perimeter is always less than 46. Quantity B is greater.

**Trap:** Picking D ('cannot be determined') because the third side is unknown. The side IS unknown, but its range is bounded, and every allowed value keeps the perimeter under 46, so the comparison is in fact determined. A rushed test-taker also might force a right triangle (8-15-17) to get perimeter 40 and still wrongly conclude D from a single case.


### Q4 · Data Analysis · QC · moderate

**Answer:** A  ·  _topic: mean_vs_median_

**Fast method:** Don't fully compute. The median is the 4th value of 7 sorted values = 6. For the mean, eyeball the balance around 6: values below 6 are 2,4,4 (deficits of 4,2,2 = -8); values above are 9,10,13 (surpluses of 3,4,7 = +14), and 6 itself is neutral. Net pull is positive (+14 vs -8), so the mean sits above 6. Quantity A is greater. (Exact mean = 48/7 = 6.86 if you want to confirm.)

**Trap:** A rushed taker assumes a 'symmetric-looking' list has mean = median and picks C. The long right tail (the 13) drags the mean above the median; the values are not symmetric.


### Q5 · Arithmetic · MC-one · moderate

**Answer:** B  ·  _topic: successive_percent_change_

**Fast method:** Use 100 as the original price. After +25%: 125. After -20% of 125: 125 - 25 = 100. The final price equals the original, so it is 100% of the original. (Multiplier shortcut: 1.25 x 0.80 = 1.00.)

**Trap:** A rushed test-taker subtracts the percents (25% - 20% = 5%) and picks 105% (a net gain). That is wrong because the 20% decrease is taken on the larger 125 base, not the original 100, so the dollar drop (25) exactly cancels the dollar rise (25).


### Q6 · Algebra · MC-one · moderate

**Answer:** D  ·  _topic: linear_equations_

**Fast method:** Distribute and collect: 2x + 6 = 5x - 9, so 15 = 3x, giving x = 5. The question asks for x + 1, so the answer is 6. Read the target carefully: solve for x, then do the final +1.

**Trap:** The trap is option C (5): a hurried solver finds x = 5 and stops, forgetting the question asked for x + 1, not x. ETS deliberately seeds the value of x itself as a choice to catch the read-too-fast error.


### Q7 · Geometry · MC-one · moderate

**Answer:** B  ·  _topic: inscribed_rectangle_circle_

**Fast method:** For any rectangle inscribed in a circle, the rectangle's diagonal is a diameter of the circle. The diagonal of a 6 by 8 rectangle is a 3-4-5 triple scaled by 2, so it is 10. Thus the diameter is 10, the radius is 5, and the area is π(5)² = 25π. No calculator needed once you recognize the 6-8-10 triangle.

**Trap:** 100π comes from treating the diagonal 10 as the radius instead of the diameter (forgetting to halve). 48 is the rectangle's own area, not the circle's. 14π comes from averaging the sides ((6+8)/2 = 7) as a fake radius.


### Q8 · Data Analysis · MC-one · moderate

**Answer:** B  ·  _topic: circle_graph_

**Fast method:** Each degree is worth 36000/360 = $100. The Rent-minus-Salaries gap is just the angle gap: 150 - 96 = 54 degrees. So 54 x $100 = $5,400. No need to compute each category separately.

**Trap:** A rushed taker computes Rent only (150 x 100 = 15,000) or grabs $6,000 (the Marketing dollar amount, 60 x 100) thinking it's 'the difference,' instead of taking the 54-degree gap.


### Q9 · Arithmetic · MC-one · moderate

**Answer:** C  ·  _topic: consecutive_integers_

**Fast method:** For an odd count of consecutive integers, the sum equals the count times the middle term. So the middle term is 185 / 5 = 37. The five integers are 35, 36, 37, 38, 39, so the largest is 39.

**Trap:** A rushed test-taker computes the average 185/5 = 37 and selects 37, forgetting that 37 is the MIDDLE value, not the largest. The largest is two more than the middle: 39.


### Q10 · Algebra · Numeric · moderate

**Answer:** 2  ·  _topic: slope_of_line_

**Fast method:** Slope = (change in y)/(change in x) = (7 - (-1))/(6 - 2) = 8/4 = 2. Keep the sign of -1 straight when subtracting and the answer falls out immediately.

**Trap:** A rushed test-taker mishandles the negative y-value, computing (7 - 1)/(6 - 2) = 6/4 = 3/2, or inverts the formula to get 4/8 = 1/2. The correct rise is 7 - (-1) = 8, not 6, giving slope 2.


### Q11 · Data Analysis · Numeric · moderate

**Answer:** 19/66  ·  _topic: probability_without_replacement_

**Fast method:** Use combinations on the 12 marbles. Total ways to pick 2 = C(12,2) = 66. Same-color pairs: C(4,2)+C(3,2)+C(5,2) = 6+3+10 = 19. Probability = 19/66. (No need to reduce; 19 is prime and doesn't divide 66.)

**Trap:** A rushed taker forgets 'without replacement' and treats each draw as independent (e.g., squaring color probabilities), or counts only one color, or double-counts ordered pairs in the numerator but not the denominator. Mixing ordered and unordered counts gives a wrong fraction.


### Q12 · Arithmetic · MC-select · moderate

**Answer:** A,B,D,F  ·  _topic: divisibility_must_be_true_

**Fast method:** Anything that divides 12 must divide every multiple of 12. The divisors of 12 are 1, 2, 3, 4, 6, 12, so divisibility by 6, 4, 3, and 2 is guaranteed (choices A, B, D, F). For 8 and 24, test the smallest case n = 12: 12 is not divisible by 8 and not by 24, so those are not guaranteed.

**Trap:** A rushed test-taker sees 12 = 4 x 3 and assumes higher powers like 8 or the larger multiple 24 must follow, grabbing C and/or E. Testing n = 12 itself instantly kills both: 12 is divisible by 12 but not by 8 or 24, so they only happen sometimes, not always.


### Q13 · Arithmetic · QC · hard

**Answer:** B  ·  _topic: units_digit_cycles_

**Fast method:** Units digits cycle with period 4. Powers of 7 cycle 7, 9, 3, 1; powers of 3 cycle 3, 9, 7, 1. Find 83 mod 4 = 3, so take the 3rd term of each cycle: for 7 that is 3, for 3 that is 7. So Quantity A = 3 and Quantity B = 7, and B is greater.

**Trap:** A rushed test-taker uses 83 itself (odd, large) or takes 83 mod 4 = 3 but miscounts by using the 4th term (the '1' that ends both cycles) and concludes the two units digits are equal, picking C. Both cycles do end in 1, but exponent 83 lands on position 3, where the cycles differ (3 versus 7), so they are not equal.


### Q14 · Algebra · QC · hard

**Answer:** C  ·  _topic: quadratics_completing_the_square_

**Fast method:** Complete the square instead of factoring: x^2 + 6x + 9 = 16 + 9, so (x + 3)^2 = 25, which means |x + 3| = 5 directly. Both roots (x = 2 and x = -8) give |x + 3| = 5, so Quantity A is always 5. Answer C.

**Trap:** Because the quadratic has two solutions (x = 2 and x = -8), a careless solver assumes the two roots produce different values of x + 3 (5 and -5) and concludes 'cannot be determined' (D). But the absolute value collapses both cases to exactly 5, forcing 'equal' (C).


### Q15 · Geometry · QC · hard

**Answer:** C  ·  _topic: geometric_mean_altitude_

**Fast method:** Recognize the geometric-mean (altitude-on-hypotenuse) relationship. A right angle at C with the altitude CD to AB holds exactly when CD² = AD · DB. Here CD² = 16 and AD · DB = 8 · 2 = 16. They are equal, so angle ACB is exactly 90°, and Quantity A equals Quantity B. (Sanity check by coordinates: A(0,0), B(10,0), C(8,4) gives vectors CA and CB whose dot product is 0.)

**Trap:** Choosing D because 'a stray point D inside the triangle can't pin down angle ACB.' It can: the equality CD² = AD·DB forces the right angle. A test-taker who eyeballs the lopsided figure (AD = 8 vs DB = 2) assumes angle C is acute or obtuse and picks A or B; the geometric-mean condition makes it exactly right.


### Q16 · Data Analysis · QC · hard

**Answer:** A  ·  _topic: standard_deviation_

**Fast method:** Standard deviation measures spread, not size. Ignore the actual values and look at the gaps from the center. List A is spaced by 4 (deviations -8,-4,0,+4,+8); List B is spaced by 1 (deviations -2,-1,0,+1,+2). List A's values are spread far wider around their mean, so its standard deviation is larger. Quantity A is greater.

**Trap:** A rushed taker sees List B's much larger numbers (around 100) and assumes 'bigger numbers = bigger standard deviation,' picking B. Adding a constant to every value shifts the mean but does not change the spread; only the gaps matter.


### Q17 · Algebra · QC · very-hard

**Answer:** C  ·  _topic: sum_and_product_of_roots_

**Fast method:** Use Vieta's formulas: r + s = 6 and rs = 7. Then r^2 + s^2 = (r + s)^2 - 2rs = 36 - 14 = 22. Never solve the messy irrational roots (3 +/- sqrt2); the symmetric-function identity gives 22 in seconds. Answer C.

**Trap:** The trap is choosing A: a solver who computes (r + s)^2 = 36 and forgets to subtract 2rs reads 36 > 22 and picks A. The expansion (r + s)^2 = r^2 + 2rs + s^2 means r^2 + s^2 = 36 - 2(7) = 22, not 36.


### Q18 · Arithmetic · MC-one · hard

**Answer:** D  ·  _topic: simultaneous_remainders_crt_

**Fast method:** Notice each condition is 3 short of a clean multiple: N + 3 is divisible by 5 (since N leaves remainder 2, N + 3 leaves remainder 0) and N + 3 is divisible by 6 (N leaves remainder 3, so N + 3 leaves remainder 0). So N + 3 is a multiple of the LCM of 5 and 6, which is 30. Thus N = 30m - 3 = 30(m-1) + 27, giving remainder 27. Sanity check: smallest N is 27, and 27/5 leaves 2, 27/6 leaves 3.

**Trap:** A rushed test-taker just adds the two remainders (2 + 3 = 5) or multiplies, or stops at one congruence and answers 17 (which satisfies 17 mod 5 = 2 but fails 17 mod 6 = 5, not 3). Only 27 satisfies BOTH conditions, and since LCM(5,6) = 30, the remainder mod 30 is uniquely 27.


### Q19 · Algebra · MC-one · hard

**Answer:** B  ·  _topic: algebraic_identities_

**Fast method:** Cube the given expression using the identity (x + 1/x)^3 = x^3 + 1/x^3 + 3(x + 1/x). So 5^3 = x^3 + 1/x^3 + 3(5), giving 125 = (x^3 + 1/x^3) + 15, so x^3 + 1/x^3 = 110. Do not solve for x; the algebraic identity is far faster than the ugly quadratic roots.

**Trap:** The trap is option D (125): a solver who cubes 5 to get 125 but forgets the cross term 3(x + 1/x) = 15 stops there. The correct identity requires subtracting that 15, yielding 110.


### Q20 · Geometry · MC-one · hard

**Answer:** B  ·  _topic: circle_sectors_in_square_

**Fast method:** Each corner has a 90° (quarter) sector of radius 2. Four quarter circles = one full circle of radius 2, area = π(2)² = 4π. Because radius 2 is exactly half the side 4, the sectors meet edge-to-edge and do not overlap, so subtract once: square area minus circles = 16 - 4π. Estimate to confirm: 16 - 12.57 ≈ 3.4, a small but positive sliver, which matches.

**Trap:** 16 - 8π (negative, impossible) comes from doubling the circle area by mistakenly counting each quarter as a half. 16 - 2π comes from using only two of the four quarter circles. 4π is just the covered area, the exact opposite of what's asked.


### Q21 · Data Analysis · MC-one · hard

**Answer:** C  ·  _topic: conditional_probability_

**Fast method:** 'Selected from those who own a bicycle' narrows the universe to the 98 bike owners (the 'Owns Bike' column). Of those, 50 do not own a car. So the probability = 50/98 = 25/49. The total of 200 is irrelevant once you condition on bike owners.

**Trap:** A rushed taker computes 50/200 = 1/4 (the unconditional probability) instead of conditioning on the bike-owner column, or uses 50/80 = 5/8 (conditioning on the wrong total, the no-car row). The denominator must be the bike-owner total, 98.


### Q22 · Geometry · MC-one · very-hard

**Answer:** C  ·  _topic: equilateral_inradius_

**Fast method:** Triangle area = (√3/4)(12)² = 36√3. For an equilateral triangle the inradius is one-third of the height: height = (√3/2)(12) = 6√3, so r = (6√3)/3 = 2√3. Circle area = π(2√3)² = π·12 = 12π. Difference = 36√3 - 12π. (Fast inradius recall: r = side / (2√3) = 12/(2√3) = 2√3.)

**Trap:** 36√3 - 48π (which is negative, a giveaway it's wrong) uses the circumradius R = 4σ/√3 = 4√3 instead of the inradius, squaring to 48. Mixing up inradius (r = s/(2√3)) with circumradius (R = s/√3 = 2r) is the classic equilateral-triangle error; the inradius is half the circumradius.


### Q23 · Data Analysis · MC-one · very-hard

**Answer:** B  ·  _topic: normal_distribution_empirical_rule_

**Fast method:** Convert the endpoints to standard deviations: 600 = mean + 1 SD, 700 = mean + 2 SD. The empirical rule says about 68% lie within 1 SD and about 95% within 2 SD. The slice from 1 SD to 2 SD (on one side only) is (95% - 68%)/2 = 27%/2 = 13.5%. So about 0.135 x 1000 = 135 students.

**Trap:** A rushed taker computes 95% - 68% = 27% and answers 270, forgetting that the 27% is split across BOTH tails and must be halved. Others grab 475 (the full 47.5% from the mean out to +2 SD) by ignoring that the region starts at +1 SD, not at the mean.


### Q24 · Algebra · Numeric · hard

**Answer:** 33  ·  _topic: recursive_sequences_

**Fast method:** Just iterate four times: a_1 = 3, a_2 = 2(3) - 1 = 5, a_3 = 2(5) - 1 = 9, a_4 = 2(9) - 1 = 17, a_5 = 2(17) - 1 = 33. Five terms is fast enough that no closed form is needed; track the index carefully so you stop at a_5.

**Trap:** A rushed solver miscounts iterations and reports a_4 = 17 (one term short) or off-by-one starting the recursion at a_1 instead of a_2. The fifth term, reached after applying the rule four times, is 33.


### Q25 · Geometry · Numeric · very-hard

**Answer:** 36/125  ·  _topic: painted_cube_counting_

**Fast method:** Exactly-two-painted-face cubes lie along the edges but not at the corners. A cube has 12 edges; each edge of a 5-cube contributes (5 - 2) = 3 non-corner cubes. So 12 × 3 = 36 cubes have exactly two painted faces. The fraction is 36/125. (Self-check using the four categories: corners 8, edges 36, faces 6·(3²)=54, interior 3³=27; total 8+36+54+27 = 125. Correct.)

**Trap:** 54/125 grabs the exactly-one-face (face-center) cubes instead of the exactly-two-face (edge) cubes, the most common mix-up. 8/125 counts corners (three painted faces), and 27/125 counts the unpainted interior. Reading 'exactly two' as 'at least two' would wrongly add the 8 corners to get 44/125.


### Q26 · Data Analysis · MC-select · hard

**Answer:** B,D  ·  _topic: mean_median_constraints_

**Fast method:** With 7 values, mean 10 forces the sum = 7 x 10 = 70, so D is true. With 7 distinct integers, the median is the 4th value = 10; the three values after it must be strictly greater (distinct), so at least one element exceeds 10 -> B is true. For the others, find a counterexample: the set {7,8,9,10,11,12,13} has median 10, mean 10, distinct positive integers. Its largest is 13 (kills A, 'at least 16'), smallest is 7 (kills C, 'at most 4'), and range is 6 (kills E, 'at least 12').

**Trap:** A rushed taker reasons 'to balance a mean of 10 you need extreme values' and selects A, C, and E, not realizing a tightly clustered set like 7 through 13 satisfies both mean and median while staying compact. The forced facts are only the sum (D) and the existence of a value above the median (B).


### Q27 · Algebra · MC-select · very-hard

**Answer:** A,C,E  ·  _topic: integer_constraints_select_all_

**Fast method:** Since xy = 12 > 0, x and y share a sign; since x + y < 0, both are negative. List all integer pairs: (-1,-12), (-2,-6), (-3,-4) and their reverses. Test each statement against these three magnitude-pairs. Sums are -13, -8, -7 (all <= -7, so A holds); |x|+|y| is 13, 8, 7 (all >= 7, so C holds); x^2+y^2 is 145, 40, 25 (all >= 25, so E holds). B fails on (-3,-4); D fails because no negative integer pair with product 12 is equal (12 is not a perfect square). Answer A, C, E.

**Trap:** The trap is selecting B: a solver who only pictures the 'middle' pairs like (-2,-6) sees both even and over-generalizes, missing the odd pair (-3,-4). Also tempting is omitting A by checking only one pair and not realizing the minimum sum is exactly -7 (the boundary still satisfies <= -7). Each option must be tested against every valid pair, since 'select all' gives no partial credit.
