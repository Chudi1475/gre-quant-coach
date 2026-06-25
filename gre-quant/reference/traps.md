# GRE Traps — running list

_Seeded by domain experts; append every trap we hit live._


## Arithmetic

**Trap:** Percent change computed off the new value instead of the original. -> **Why it fools people:** "From 80 to 100 is a 20% increase" feels right because the gap is 20. -> **Defense:** Always divide the change by the ORIGINAL: (100−80)/80 = 25% up, but 100→80 is only 20% down. Increase % and decrease % between the same two numbers are never equal.

**Trap:** Adding successive percent changes (+20% then −20% = "back to start"). -> **Why it fools people:** The percents look symmetric. -> **Defense:** Multiply factors: 1.20 × 0.80 = 0.96 → a net 4% LOSS. Two same-size up/down moves always lose (p/100)².

**Trap:** Assuming variables are positive integers in QC plug-in. -> **Why it fools people:** Test-takers try x=2, x=3, get a clean relationship, and pick A or B. -> **Defense:** Always test 0, 1, a negative, and a fraction (the "ONE-FZ" set). If the relationship flips, the answer is D (cannot be determined). Fractions and negatives break most "obvious" QC answers.

**Trap:** "x² > x so x is bigger when squared." -> **Why it fools people:** True for x>1, but the test feeds you x between 0 and 1, where x² < x, and negatives where signs flip. -> **Defense:** For 0<x<1, raising to a power shrinks it; for x<0, even powers turn positive. Check a fraction and a negative before committing.

**Trap:** Treating √(x²) as just x. -> **Why it fools people:** The square and root look like they cancel. -> **Defense:** √(x²) = |x|. If x could be negative, the result is −x. Same care with even roots generally.

**Trap:** Reading "remainder" without the constraint 0 ≤ r < divisor. -> **Why it fools people:** People allow a remainder equal to or larger than the divisor. -> **Defense:** The remainder is strictly less than the divisor; if "divided by 5," the only legal remainders are 0–4. Use n = 5k + r and plug k = 0,1,2 to find the pattern.

**Trap:** Confusing factors with multiples. -> **Why it fools people:** Both involve divisibility and the words blur under time pressure. -> **Defense:** Factors of n are FINITE and ≤ n (they divide it); multiples of n are INFINITE and ≥ n (it divides them). 3 is a factor of 12; 12 is a multiple of 3.

**Trap:** Forgetting 1 is not prime and 2 is the only even prime. -> **Why it fools people:** Habit says "prime = odd" and "1 is special." -> **Defense:** Smallest prime is 2; it is even. 1 is neither prime nor composite. This breaks "sum of two primes" and "product of primes" questions.

**Trap:** Averaging two speeds to get average speed. -> **Why it fools people:** 40 mph there, 60 mph back "obviously" averages 50. -> **Defense:** Average speed = total distance / total time. Equal distances at 40 and 60 give 48 mph (use the harmonic mean 2ab/(a+b)), never the arithmetic mean.

**Trap:** "Select all that apply" treated like single-answer. -> **Why it fools people:** Finding one correct option feels like done; there's no partial credit so one miss = zero. -> **Defense:** Test EVERY option independently against the condition, including edge values. Slow down deliberately on this type.

**Trap:** Ratio given, but solving as if it were the actual amount. -> **Why it fools people:** "Boys to girls is 3:2, there are 12 boys" — people answer using 3 and 2 directly. -> **Defense:** Introduce the multiplier k: boys = 3k, girls = 2k. Solve 3k = 12 → k = 4. The ratio is parts, not counts.

**Trap:** Fencepost (off-by-one) errors counting inclusive ranges. -> **Why it fools people:** "Integers from 20 to 50" feels like 30. -> **Defense:** Inclusive count = last − first + 1 = 31. For multiples in a range use ⌊b/k⌋ − ⌊(a−1)/k⌋.

**Trap:** Distributing a root or exponent over a sum. -> **Why it fools people:** It works for products, so people assume sums behave the same. -> **Defense:** √(a+b) ≠ √a + √b and (a+b)² ≠ a²+b². The cross term matters: (a+b)² = a² + 2ab + b².

**Trap:** "x% of y" vs "x% greater than y." -> **Why it fools people:** Both contain x% and y. -> **Defense:** "x% OF y" = (x/100)y; "x% GREATER THAN y" = y(1 + x/100). "150% of" ≠ "150% more than."

**Trap:** Decimal/place-value slips with the on-screen calculator. -> **Why it fools people:** The calculator gives a long readout and people transcribe or misplace the decimal. -> **Defense:** Estimate the magnitude FIRST (is the answer near 4 or 400?). The calculator confirms digits; your estimate guards the decimal point.

**Trap:** Assuming a fraction's value moves the "obvious" way when adding to top/bottom. -> **Why it fools people:** Intuition about a/b under changes is unreliable. -> **Defense:** For a/b with 0<a<b, adding the same positive number to both top and bottom moves the fraction TOWARD 1 (increases it). Verify by plugging in actual numbers.

**Trap:** Weighted average split down the middle. -> **Why it fools people:** Two class averages 70 and 90 → people say 80. -> **Defense:** The combined average is pulled toward the LARGER group. With 30 and 10 students it's much closer to 70. Use (Σ weight·value)/(Σ weight).


## Algebra

**Trap:** Dividing both sides of an equation by a variable. -> **Why it fools people:** From `x² = 5x`, dividing by x gives x=5 and feels clean. -> **Defense:** Never divide by a variable (it may be 0). Move everything to one side and factor: `x²−5x=0 → x(x−5)=0 → x=0 or x=5`. You lose the x=0 root by dividing.

**Trap:** Forgetting to flip the inequality when multiplying/dividing by a negative. -> **Why it fools people:** The arithmetic looks identical to equation-solving, so the habit carries over. -> **Defense:** Every time you multiply/divide an inequality by a negative, physically flip the sign. Better: avoid it by adding the negative term to the other side instead.

**Trap:** Assuming variables are positive integers. -> **Why it fools people:** Examples that "work" with x=2 feel conclusive; the test bets you won't test fractions, negatives, or zero. -> **Defense:** On QC and "select all," always test the full kit: 0, 1, −1, a fraction (½), a large number. The relationship often flips, making the answer "cannot be determined."

**Trap:** `√(x²) = x`. -> **Why it fools people:** Looks like roots and squares just cancel. -> **Defense:** `√(x²) = |x|`. If x could be negative, the square root returns the positive value. Critical in QC when a variable's sign is unknown.

**Trap:** `(a+b)² = a² + b²`. -> **Why it fools people:** Distribution "feels" right and the middle term is invisible. -> **Defense:** `(a+b)² = a² + 2ab + b²` — the `2ab` cross term is always there. Same logic: `√(a²+b²) ≠ a+b`.

**Trap:** Squaring both sides without checking for extraneous roots. -> **Why it fools people:** Squaring (in radical or absolute-value equations) can manufacture solutions that don't satisfy the original. -> **Defense:** After squaring, plug every candidate back into the ORIGINAL equation and discard any that fail.

**Trap:** Taking the square root of both sides and keeping only the positive root. -> **Why it fools people:** `x² = 16` instinctively reads as x=4. -> **Defense:** `x² = 16 → x = ±4`. Always write both signs; the negative root is frequently the one that breaks a QC.

**Trap:** "Cannot be determined" panic in QC with concrete numbers. -> **Why it fools people:** If both quantities are fully numeric (no variables), D is impossible — but test-takers still pick it when arithmetic looks hard. -> **Defense:** If neither quantity contains a variable, the answer is A, B, or C — never D. Just compute.

**Trap:** Solving for a single variable when the question asks for an expression. -> **Why it fools people:** Instinct says "find x and y." Often you can't, or it wastes time. -> **Defense:** Read what's asked (x+y, x/y, 2x−3y). Combine the equations to build that expression directly — sometimes solvable even when individual variables aren't.

**Trap:** Perpendicular slope as the reciprocal instead of the negative reciprocal. -> **Why it fools people:** "Reciprocal" is half-remembered; sign gets dropped. -> **Defense:** Perpendicular slopes multiply to −1. If a slope is 2/3, perpendicular is −3/2 (flip AND negate).

**Trap:** Made-up function symbol applied in the wrong order. -> **Why it fools people:** For `a ◇ b = a² − b`, the symbol looks symmetric so people compute `b ◇ a`. -> **Defense:** Substitute strictly left-to-right exactly as defined; these operations are usually NOT commutative.

**Trap:** Misreading an absolute-value inequality direction. -> **Why it fools people:** `|x| > 3` and `|x| < 3` look interchangeable under time pressure. -> **Defense:** "Less than" = sandwich (`−3 < x < 3`); "greater than" = split outward (`x < −3 or x > 3`). Memorize "less-AND, greater-OR."

**Trap:** Treating a system with 0 or infinite solutions as having one. -> **Why it fools people:** You start solving before checking the slopes. -> **Defense:** If the two equations are scalar multiples → infinite solutions; same slope, different intercept → none. Spot this before grinding algebra.

**Trap:** Plugging in numbers that are "too friendly" (using the same value for two variables, or 1/0/values that hide structure). -> **Why it fools people:** x=y=2 makes many distinct expressions look equal. -> **Defense:** Use distinct, non-trivial numbers (e.g., x=2, y=5), and avoid 0 and 1 for the first pass since they collapse too many terms.


## Geometry

**Trap:** "Figure not drawn to scale." -> **Why it fools people:** Students eyeball the figure and assume an angle is 90°, two segments are equal, or a point is a midpoint because it *looks* that way. -> **Defense:** Use ONLY labeled values and stated facts. If a property isn't given or forced by a theorem, treat it as variable and test extremes — especially on QC.

**Trap:** Geometry QC where one configuration gives a clean answer. -> **Why it fools people:** The obvious case makes A or B look bigger, so they lock it in. The figure can often be re-drawn (longer, flatter, skewed) keeping all given constraints but flipping the comparison. -> **Defense:** Whenever a figure is under-constrained, deliberately draw a second, distorted-but-legal version. If the comparison changes, the answer is **D (cannot be determined)**.

**Trap:** Using the slanted side as the height of a parallelogram/triangle/trapezoid. -> **Why it fools people:** The slant length is the number printed, so it's grabbed for the area formula. -> **Defense:** Height is the **perpendicular** distance to the base. The slant side is the hypotenuse and is always longer than the true height — never plug it into area.

**Trap:** Doubling a dimension and assuming area or volume doubles. -> **Why it fools people:** Linear intuition. -> **Defense:** Area scales by k², volume by k³. Double the radius ⇒ **4×** the area, **8×** the volume. Triple a side ⇒ 9× area. State the exponent before computing.

**Trap:** Assuming an isosceles or equilateral triangle when only some info is given. -> **Why it fools people:** A triangle drawn symmetrically looks equilateral. -> **Defense:** Only equal-marked sides/angles are equal. Don't import symmetry the problem didn't state.

**Trap:** Triangle "third side" or "can these be a triangle" problems. -> **Why it fools people:** People only check that the new side is less than the sum, forgetting the lower bound. -> **Defense:** Apply BOTH halves: |a−b| < third side < a+b. The number of valid integer lengths is bounded on both ends.

**Trap:** Forgetting that two valid circle/angle positions exist (the relationship "cannot be determined"). -> **Why it fools people:** They find one inscribed angle or one chord length and stop. -> **Defense:** Ask whether the point/chord/angle could sit elsewhere on the circle while honoring all constraints. If yes, the value may not be unique.

**Trap:** Shaded-region problems. -> **Why it fools people:** Students try to compute the weird shape directly. -> **Defense:** Shaded = (big simple shape) − (small simple shape). Almost always a square/rectangle/circle minus circle(s)/triangle(s). Set it up as subtraction, not integration.

**Trap:** Mixing diameter and radius in circle formulas. -> **Why it fools people:** The problem gives diameter; C = πd uses d but Area = πr² needs r. -> **Defense:** Immediately convert to radius and label it. r = d/2. Most circle errors are a sneaky factor of 2 or 4.

**Trap:** 30-60-90 side assignment reversed. -> **Why it fools people:** They put √3 opposite the wrong angle. -> **Defense:** Anchor it: shortest side (x) faces 30°, long leg (x√3) faces 60°, hypotenuse (2x) faces 90°. The hypotenuse is always the biggest; √3 ≈ 1.7 goes on the medium side.

**Trap:** Angle-chasing in parallel-line figures with z/Z shapes. -> **Why it fools people:** They guess "supplementary" vs "equal" wrong. -> **Defense:** In any parallel-line figure only two angle sizes exist: some value x and 180−x. Acute angles all equal each other; obtuse all equal each other; an acute + an obtuse = 180.

**Trap:** Coordinate-geometry slope sign and reciprocal errors for perpendicular lines. -> **Why it fools people:** They negate OR reciprocate, not both. -> **Defense:** Perpendicular slope = negate AND flip: m → −1/m. Quick check: the product must equal −1.

**Trap:** Counting interior vs exterior angles. -> **Why it fools people:** They use (n−2)·180 when the figure marks an exterior angle. -> **Defense:** Exterior angles of ANY convex polygon sum to 360. For "how many sides," use n = 360 / (each exterior angle) — far faster than the interior formula.

**Trap:** Inscribed triangle where one side is the diameter. -> **Why it fools people:** Students miss that this forces a right angle. -> **Defense:** A triangle inscribed in a circle with a side passing through the center (a diameter) is ALWAYS a right triangle, with the 90° at the third vertex. Look for the diameter.

**Trap:** Overlapping / Venn-style region and "at most/at least" in geometry counting figures. -> **Why it fools people:** Double-counting the intersection. -> **Defense:** Total = A + B − (both). Subtract the overlap exactly once.

**Trap:** Assuming a quadrilateral is a square/rectangle from the picture. -> **Why it fools people:** A parallelogram or rhombus can look rectangular. -> **Defense:** Right angles must be marked or derivable. Don't assume 90° corners or equal diagonals without proof.


## Data Analysis

**Trap:** Successive percent changes are added instead of multiplied. -> **Why it fools people:** "+20% then −20%" reads like it cancels to 0%, so the rushed answer is "back to original." -> **Defense:** Always chain as multipliers: ×1.20 × 0.80 = 0.96, a net 4% LOSS. A rise then an equal-percent fall always ends BELOW the start.

**Trap:** Confusing percent change with percentage points. -> **Why it fools people:** A share rising from 40% to 50% feels like "+10%," matching the visible numbers. -> **Defense:** Points = simple subtraction (10 points). Percent CHANGE = (50−40)/40 = +25%. When the quantity is itself a percent, decide which the question wants — they rarely match.

**Trap:** Percent-of-percent without a common base. -> **Why it fools people:** "Sales rose 30% and 30% of those were online" tempts adding/comparing percentages across different wholes. -> **Defense:** Percents only combine when they share a base. Anchor with an actual number (use 100) and compute counts, not percentages, then re-derive the percent at the end.

**Trap:** Mixing up mean and median on skewed data. -> **Why it fools people:** People treat "average" as one fixed center. -> **Defense:** Outliers/long tails pull the MEAN toward them; the median barely moves. Right-skew → mean > median; left-skew → mean < median. In QC, an unknown outlier often makes mean/median comparison "cannot be determined."

**Trap:** "Cannot be determined" on standard deviation comparisons. -> **Why it fools people:** Two sets with the same range or same mean look like they'd have the same SD. -> **Defense:** SD depends on clustering, not range or mean. {1,5,9} and {1,1,9} share max/min but have different SDs. Identical mean tells you NOTHING about SD.

**Trap:** Treating "at least one" as a single direct probability. -> **Why it fools people:** It feels like one event to compute. -> **Defense:** Almost always use 1 − P(none). Listing the "at least one" cases is slow and error-prone; the complement is one short calculation.

**Trap:** Adding probabilities of "or" events without removing overlap. -> **Why it fools people:** P(A or B) = P(A) + P(B) looks complete. -> **Defense:** Subtract P(A and B) unless the events are mutually exclusive. Ask "can both happen at once?" — if yes, there's overlap to remove.

**Trap:** Permutation vs. combination chosen by feel. -> **Why it fools people:** "Select" and "arrange" both sound like "pick some." -> **Defense:** Ask "does order change the outcome?" Committee/handshake/group = combination. Ranking/seating/password/medal-order = permutation. Wrong choice inflates the count by exactly r!.

**Trap:** Misreading the graph's axis scale or units. -> **Why it fools people:** The eye trusts the bar height, ignoring that the axis is in thousands, millions, or starts above zero. -> **Defense:** Before reading ANY value, lock in the units and confirm the axis starts at 0. A truncated y-axis makes small differences look huge — answer from numbers, not visual size.

**Trap:** Pie chart percentages mistaken for absolute quantities. -> **Why it fools people:** A 40% slice "feels" bigger than a 30% slice on a smaller total. -> **Defense:** Percent of a SMALL whole can be fewer items than a smaller percent of a LARGE whole. Always multiply the slice percent by that chart's stated total before comparing across charts/years.

**Trap:** Forgetting the "neither" category in set problems. -> **Why it fools people:** Total = A + B − both seems to cover everyone. -> **Defense:** Total = A + B − both + neither. If anyone could belong to no group, that term is mandatory; ETS hides it in the wording.

**Trap:** Double-counting the triple overlap in three-set Venn problems. -> **Why it fools people:** Subtracting all pairwise overlaps feels like it cleans up the count. -> **Defense:** Inclusion-exclusion ADDS the all-three region back once. Safer: draw the Venn and fill from the center outward, subtracting the center before computing pairwise-only regions.

**Trap:** Averaging the averages of unequal groups. -> **Why it fools people:** Two class averages of 80 and 90 "obviously" combine to 85. -> **Defense:** Only true if the groups are the same size. Use the weighted mean: total points ÷ total people. The combined average leans toward the larger group.

**Trap:** Normal-distribution questions answered with 68/95/99.7 when asked for a one-sided region. -> **Why it fools people:** The rule gives two-sided bands. -> **Defense:** Halve them: one side of the 1-SD band is 34%, not 68%. Sketch the curve, mark the mean (50%), and add the 34/13.5/2.35 slices on the correct side.

**Trap:** "Median = average of two middle terms" forgotten / data not sorted. -> **Why it fools people:** Test-takers grab the physical middle of the LISTED order. -> **Defense:** Sort first, always. For even n, average the two central values — don't just pick one.

**Trap:** Reverse-percent done by subtracting the same percent. -> **Why it fools people:** "Price is $120 after 20% tax, so pre-tax is $120 − 20% = $96." -> **Defense:** Divide: 120 / 1.20 = $100. The original is the base, so you undo with division, not by taking the percent of the new (larger) number.

**Trap:** Stacked-bar segment read as its top value. -> **Why it fools people:** The top of a segment sits at a tall gridline. -> **Defense:** A stacked segment's value = top reading − bottom reading. Only the lowest segment equals its top reading.

**Trap:** Weighted/expected-value problems where probabilities don't sum to 1. -> **Why it fools people:** People compute Σ(value × prob) without checking the setup. -> **Defense:** Confirm all probabilities sum to 1 (or account for the leftover outcome) before trusting an expected value.

**Trap:** Counting integers/data points off by one. -> **Why it fools people:** b − a feels like the count from a to b. -> **Defense:** Inclusive count = b − a + 1 (fencepost). Re-check with a tiny case (3 to 5 → 3 values).

**Trap:** Probability without replacement computed with a fixed denominator. -> **Why it fools people:** The first draw's total carries over by habit. -> **Defense:** After each draw, shrink BOTH the favorable count and the total. "Without replacement" is the signal to update every fraction.
