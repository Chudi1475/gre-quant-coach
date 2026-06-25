# Formula Sheet — memorize these

_Authored by domain experts. Living document._


## Arithmetic

### Integer Properties & Divisibility
- An integer `n` is divisible by `d` if `n = d·k` for some integer `k` (remainder 0) — *when a problem says "divisible," "multiple of," or "factor of."*
- Divisibility tests: 2 (last digit even); 3 (digit sum ÷ 3); 4 (last two digits ÷ 4); 5 (ends 0/5); 6 (÷2 and ÷3); 8 (last three digits ÷ 8); 9 (digit sum ÷ 9); 10 (ends 0); 11 (alternating digit sum ÷ 11) — *for fast factor/multiple checks without the calculator.*
- Prime factorization: every integer >1 = product of primes uniquely — *the master tool for GCD, LCM, factor counts, and "what divides this."*
- Number of factors: if `n = p^a · q^b · r^c`, factor count = `(a+1)(b+1)(c+1)` — *when asked how many divisors/factors an integer has.*
- GCD = product of shared primes to the **lowest** power; LCM = all primes to the **highest** power — *combining periods, "smallest number divisible by both," reducing fractions.*
- Key identity: `GCD(a,b) · LCM(a,b) = a · b` — *given one of GCD/LCM, find the other.*
- A perfect square has all **even** exponents in its prime factorization (and an odd number of total factors) — *"is it a perfect square," "what to multiply by to make a square."*
- Consecutive integers: the product of any `k` consecutive integers is divisible by `k!` — *divisibility of products like `n(n+1)(n+2)`.*
- Among any `k` consecutive integers, exactly one is divisible by `k` — *remainder and divisibility traps.*

### Odd / Even / Sign Rules
- even±even=even, odd±odd=even, even±odd=odd — *parity QC and "must be" questions.*
- even·(anything)=even; odd·odd=odd — *parity of products.*
- (+)(+)=+, (−)(−)=+, (+)(−)=−; same applies to division — *sign tracking in QC.*
- A product is even if **at least one** factor is even; odd only if **all** factors odd — *fast parity of long products.*

### Remainders
- `Dividend = Divisor · Quotient + Remainder`, with `0 ≤ Remainder < Divisor` — *every remainder problem; the remainder is strictly less than the divisor.*
- "Leaves remainder `r` when divided by `d`" means the number is of the form `d·k + r` — *translate remainder word problems; plug in `k=0,1,2…`.*
- Remainders add/multiply: `rem(a+b) = rem(rem a + rem b)`, same for products — *combine remainders without big arithmetic.*
- Units-digit cycles (powers): 2→{2,4,8,6}, 3→{3,9,7,1}, 7→{7,9,3,1}, 8→{8,4,2,6} cycle length 4; 4→{4,6}, 9→{9,1} length 2; 0,1,5,6 fixed — *units digit of large powers: take exponent mod 4.*

### Exponents & Roots
- `x^a · x^b = x^(a+b)`; `x^a / x^b = x^(a−b)`; `(x^a)^b = x^(ab)` — *combine/simplify same-base powers.*
- `(xy)^a = x^a y^a`; `(x/y)^a = x^a / y^a` — *distribute exponents over products/quotients.*
- `x^0 = 1` (x≠0); `x^(−a) = 1/x^a`; `x^(1/n) = ⁿ√x`; `x^(a/b) = (ᵇ√x)^a` — *negative and fractional exponents.*
- `√(ab) = √a·√b`; `√(a/b) = √a/√b`; `√a + √b ≠ √(a+b)` — *simplify radicals; never add under one root.*
- `(√a)² = a` and `√(a²) = |a|` — *the absolute-value catch on even roots.*
- Memorize: √2≈1.414, √3≈1.732, √5≈2.236 — *estimation and 30-60-90 / diagonal work.*
- Powers of 2 to 2^10=1024; squares 1–20; cubes 1–10 — *instant recognition speeds everything.*

### Fractions, Decimals, Percents
- Common conversions: 1/2=.5=50%, 1/3≈.333, 1/4=.25, 1/5=.2, 1/6≈.167, 1/8=.125, 1/9≈.111, 3/8=.375, 5/8=.625, 1/12≈.0833 — *swap forms to pick the easiest computation.*
- Percent = per 100: `x% of N = (x/100)·N` — *base of all percent work.*
- Percent change = `(New − Old)/Old · 100` — *always divide by the ORIGINAL.*
- Increase by `p%` → multiply by `(1 + p/100)`; decrease → `(1 − p/100)` — *successive % changes: MULTIPLY factors, never add %.*
- A `p%` increase then `p%` decrease nets a **decrease** of `(p/100)²·100 %` (e.g. ±20% → −4%) — *the "back to original?" trap.*
- "A is `p%` greater than B" → `A = B(1 + p/100)`; "A is `p%` of B" → `A = (p/100)B` — *parse "greater than" vs "of" carefully.*
- Fraction compare: cross-multiply `a/b` vs `c/d` → compare `ad` vs `bc` (b,d>0) — *order fractions fast without decimals.*

### Ratio & Proportion
- Ratio `a:b` means quantities `ak` and `bk`; total parts = `a+b` → each part = total/(a+b) — *split a total in a given ratio.*
- Combine ratios by scaling the shared term to a common value (LCM) — *chain `a:b` and `b:c` into `a:b:c`.*
- Set up proportions by matching units across the equals sign; cross-multiply — *scaling, similar-figure, and unit problems.*

### Rates, Work, Mixtures
- `Distance = Rate · Time` (`D=RT`) — *all motion problems.*
- Average speed = `Total Distance / Total Time` (NOT the average of the speeds) — *round-trip and two-leg speed traps.*
- Combined work rate: rates add. Together time = `(t₁·t₂)/(t₁+t₂)` for two workers — *"working together" problems.*
- Mixture/weighted concentration: `(amount of substance)/(total amount)`; total substance is conserved when mixing — *salt/alcohol/solution problems.*

### Averages & Number Sense
- Average = Sum / Count → `Sum = Average · Count` — *the most useful rearrangement on the test.*
- Weighted average = `(w₁x₁ + w₂x₂ + …)/(w₁ + w₂ + …)`; result lies between the group means, pulled toward the larger group — *mixed-group averages.*
- Evenly spaced set: mean = median = `(first + last)/2`; sum = `(first+last)/2 · (count)` — *sums of consecutive/arithmetic sequences.*
- Count of integers from `a` to `b` inclusive = `b − a + 1`; multiples of `k` in [a,b] = `⌊b/k⌋ − ⌊(a−1)/k⌋` — *"how many integers/multiples" (fencepost).*

### Absolute Value & Number Line
- `|x| = x` if x≥0, `−x` if x<0; `|x| ≥ 0` always — *sign-splitting and distance.*
- `|x| = a` (a>0) → `x = a` or `x = −a`; `|x| < a` → `−a < x < a`; `|x| > a` → `x>a` or `x<−a` — *solve absolute-value equations/inequalities (two cases).*
- `|a − b|` = distance between `a` and `b` on the number line — *interpret distance phrasing.*

### Sequences
- Arithmetic: `aₙ = a₁ + (n−1)d` — *constant-difference sequences; nth term.*
- Geometric: `aₙ = a₁ · r^(n−1)` — *constant-ratio sequences.*


**Mental-math / speed (Arithmetic):**

## Arithmetic — Mental Math & Number Sense

### Memorize Cold (instant recall = banked time)
- Squares 1–20 (…16²=256, 17²=289, 18²=324, 19²=361, 20²=400).
- Cubes 1–10; powers of 2 to 2^10 = 1024.
- Fraction↔decimal↔percent table: halves, thirds, quarters, fifths, sixths, eighths, ninths, twelfths.
- √2≈1.41, √3≈1.73, √5≈2.24, √10≈3.16.

### Percent Tricks
- 1% = move decimal two places left; 10% = one place left. Build any percent from these: 35% of 80 = 10%(8) ×3 + 5%(4) = 24+4 = 28.
- 5% = half of 10%. 15% = 10% + 5%. 20% = double 10%.
- Percents are reversible: x% of y = y% of x. 16% of 25 = 25% of 16 = 4.
- "% off" then "% off" → multiply the remaining fractions: 30% off then 20% off = 0.7 × 0.8 = 0.56 of original.

### Multiplication Shortcuts
- ×5 = ×10 then halve; ×25 = ÷4 then ×100; ×50 = ÷2 then ×100.
- ×9 = ×10 minus the number; ×11 (two-digit) = add the two digits between them (34×11 = 3_(3+4)_4 = 374).
- Squares near a base: (a±b)² = a² ± 2ab + b². 19² = 400 − 40 + 1 = 361.
- Difference of squares: a²−b² = (a+b)(a−b). 53²−47² = 100×6 = 600.

### Division & Fraction Sense
- To estimate a/b, round to a nearby easy fraction. 47/61 ≈ 48/60 = 0.8.
- Adding to top and bottom of a proper fraction pushes it toward 1; to an improper fraction, toward 1 from above.
- Simplify before multiplying fractions — cancel across numerator/denominator first to keep numbers tiny.

### Divisibility At A Glance
- 3 or 9: sum the digits. 7: hard, just divide. 4: last two digits. 8: last three digits. 6: even AND digit-sum ÷3. 11: alternating digit sum.

### Estimation Discipline
- Bound the answer first (round to 1 or 2 significant figures), then refine. Lets you eliminate 2–3 choices instantly and catch calculator decimal slips.
- For products/quotients of "ugly" numbers, round one up and one down to keep the estimate centered.

### Units-Digit Power Cycles (mod 4 on the exponent)
- 2,3,7,8 cycle every 4; 4,9 every 2; 0,1,5,6 stay fixed. Find units digit of huge powers by exponent mod 4 (using 4 if it divides evenly). E.g. 7^53: 53 mod 4 = 1 → units digit 7.


## Algebra

### Exponent Rules (the #1 source of GRE algebra points)
- `a^m · a^n = a^(m+n)` — multiplying same base: add exponents.
- `a^m / a^n = a^(m−n)` — dividing same base: subtract exponents.
- `(a^m)^n = a^(mn)` — power of a power: multiply.
- `(ab)^n = a^n · b^n` and `(a/b)^n = a^n / b^n` — distribute over product/quotient (NOT over sums).
- `a^0 = 1` (a ≠ 0) — anything nonzero to the 0 is 1.
- `a^(−n) = 1/a^n` — negative exponent flips to reciprocal.
- `a^(1/n) = ⁿ√a`, `a^(m/n) = (ⁿ√a)^m` — fractional exponent = root.
- To compare/combine powers, **rewrite to a common base** (e.g., 8 = 2³, 27 = 3³) — when bases match you can equate exponents.
- `2^10 = 1024 ≈ 10^3` — for estimating large powers of 2.

### Roots / Radicals
- `√(ab) = √a · √b`, `√(a/b) = √a / √b` — split products/quotients (NOT sums: √(a+b) ≠ √a+√b).
- `√(a²) = |a|` — even root returns nonnegative value; matters in QC with unknown signs.
- Rationalize: `1/√a = √a/a`; `1/(√a−√b) = (√a+√b)/(a−b)` — clear radicals from denominators.
- Memorize: √2≈1.414, √3≈1.732, √5≈2.236; squares 1–20; cubes 1–10.

### Factoring & Special Products (must recognize instantly, both directions)
- `a² − b² = (a+b)(a−b)` — difference of squares; THE most-tested identity.
- `(a+b)² = a² + 2ab + b²`; `(a−b)² = a² − 2ab + b²` — perfect-square trinomials.
- `(a+b)(a−b) = a² − b²` — used to simplify, and to compute things like 53²−47² fast.
- `a² + b² = (a+b)² − 2ab = (a−b)² + 2ab` — get a²+b² from sum/product without solving.
- `(x+m)(x+n) = x² + (m+n)x + mn` — factor monic quadratics by finding factors of constant that add to middle.
- Pull common factors first: `ab + ac = a(b+c)` — always factor GCF before anything else.

### Linear Equations & Word-Problem Translation
- Solve `ax + b = c` → `x = (c−b)/a` — isolate the variable.
- "percent of" → multiply by /100; "is" → =; "more than" → +; "per" → ÷ — direct translation cues.
- One equation, one unknown solves; **n unknowns need n independent equations** (key for QC "cannot be determined").

### Systems of Equations (Simultaneous)
- Substitution or elimination — pick whichever isolates a variable cleanly.
- Often the question asks for an **expression** (e.g., x+y or 3x−y), not x and y separately — add/subtract the equations to build it directly; don't fully solve.
- Two lines: one solution (different slopes), no solution (parallel: same slope, diff intercept), infinite (same line).

### Quadratics
- Standard form: `ax² + bx + c = 0`.
- Quadratic formula: `x = [−b ± √(b²−4ac)] / (2a)` — when it won't factor cleanly.
- Discriminant `D = b²−4ac`: D>0 → 2 real roots, D=0 → 1 (double) root, D<0 → no real roots.
- Sum of roots `= −b/a`; product of roots `= c/a` (Vieta) — answer "sum/product of roots" questions without solving.
- **Zero-product:** if `(x−r)(x−s)=0` then x=r or x=s — set each factor to 0; never divide both sides by a variable (you lose the x=0 root).

### Inequalities
- Same as equations EXCEPT: **multiplying/dividing by a negative flips the sign** (`−2x > 6 → x < −3`).
- Don't multiply/divide by a variable unless you know its sign — split into cases or cross-multiply only when both denominators are known positive.
- Adding/subtracting any quantity, or multiplying by a positive, preserves direction.
- Compound `a < x < b` — operate on all three parts at once.

### Absolute Value
- `|x| = k` (k≥0) → `x = k` OR `x = −k` — always two cases.
- `|x| < k` → `−k < x < k` (between); `|x| > k` → `x < −k OR x > k` (outside).
- `|a − b|` = distance between a and b on the number line — geometric read speeds many problems.
- `|x| ≥ 0` always — an absolute value can never be negative (instant elimination tool).

### Functions
- `f(a)` means substitute a for every input variable — pure plug-in.
- Composite `f(g(x))` — evaluate inner g(x) first, feed result into f.
- "Define x ※ y = ..." (made-up symbol) — just a function; substitute literally, mind order.

### Coordinate Geometry
- Slope `m = (y₂−y₁)/(x₂−x₁)` = rise/run.
- Slope-intercept: `y = mx + b` (b = y-intercept); point-slope: `y − y₁ = m(x − x₁)`.
- **Parallel lines: equal slopes.** **Perpendicular lines: slopes are negative reciprocals** (`m₁·m₂ = −1`).
- Distance: `√[(x₂−x₁)² + (y₂−y₁)²]` — Pythagorean theorem on coordinates.
- Midpoint: `((x₁+x₂)/2, (y₁+y₂)/2)` — average the coordinates.
- x-intercept: set y=0; y-intercept: set x=0.
- Horizontal line `y = c` (slope 0); vertical line `x = c` (slope undefined).

### Sequences (algebra-flavored)
- Arithmetic: `aₙ = a₁ + (n−1)d`; sum `Sₙ = n(a₁+aₙ)/2 = n·(mean of first & last)`.
- Geometric: `aₙ = a₁ · r^(n−1)`.

### Direct & Inverse Variation
- Direct: `y = kx` (ratio y/x constant) — "doubles when x doubles."
- Inverse: `y = k/x` (product xy constant) — "halves when x doubles."


**Mental-math / speed (Algebra):**

## Algebra — Speed & Number Sense

### Difference-of-squares as a calculator killer
- `a² − b² = (a+b)(a−b)`: `53² − 47² = (100)(6) = 600`. `48·52 = (50−2)(50+2) = 2500−4 = 2496`.
- Square near a round number: `19² = (20−1)² = 400 − 40 + 1 = 361`; `21² = 441`; `99² = 9801`.

### Plug-in defaults (when answers contain variables)
- Pick **small, distinct, non-trivial** numbers: x=2, y=3 (or y=5). Avoid 0 and 1 on the first pass (they collapse terms and create false ties).
- For percent/fraction problems, plug in **100** — percents become whole numbers.
- For "which expression equals…," compute the target with your numbers, then test each choice; eliminate as you go.

### Back-solving multiple choice
- Answer choices are usually in ascending order — start with the **middle (C)**. If it's too big, go lower; too small, go higher. Often 1–2 tests find it.
- Numeric-entry can't be back-solved — solve forward and sanity-check units/form.

### Exponent shortcuts
- Common base is everything: rewrite `4, 8, 16, 32` as `2², 2³, 2⁴, 2⁵`; `9, 27, 81` as `3², 3³, 3⁴`. Then add/subtract exponents.
- `2^10 ≈ 1000`, so `2^20 ≈ 10^6` — fast magnitude estimates.
- Negative exponent = "flip it"; fractional exponent = "root it" — read aloud to avoid sign/order slips.

### Slope & line instincts
- Slope = rise/run: count grid squares, don't compute when a graph is given.
- Positive slope ↗, negative ↘, zero is flat (horizontal), undefined is a wall (vertical).
- Perpendicular: "flip and negate" the slope; parallel: copy it.

### Quadratic shortcuts (skip the formula)
- Sum of roots = −b/a, product = c/a. For `x²−7x+12`: roots sum 7, multiply 12 → 3 and 4. Factor by inspection.
- A "select all" or "which could be a root" question: just plug each candidate into the equation; don't solve it.

### Algebra over arithmetic
- When a problem gives `x+y` and `xy`, you can get `x²+y²=(x+y)²−2xy` and `x−y=√((x+y)²−4xy)` without ever finding x and y.
- Average of an evenly spaced set = (first + last)/2 — no need to sum every term.


## Geometry

### Lines, Angles & Parallel Lines
- Angles on a straight line sum to **180°** — when angles sit on one line (linear pair).
- Angles around a point sum to **360°** — rays/sectors meeting at one vertex.
- **Vertical angles are equal** — two lines cross; opposite angles match.
- Two parallel lines cut by a transversal: corresponding & alternate angles **equal**; co-interior (same-side) angles **sum to 180°** — any "parallel + transversal" figure; only TWO distinct angle values exist, every angle is x or 180−x.
- Perpendicular lines meet at **90°**; slopes multiply to **−1** — coordinate perpendicularity.

### Triangles — Core
- Interior angles sum to **180°** — every triangle, always.
- Exterior angle = **sum of the two remote interior angles** — fast angle-chase, skip finding the third angle.
- **Triangle Inequality:** any side < sum of other two AND > their difference; |a−b| < c < a+b — "how many integer side lengths / can these form a triangle" QC.
- **Bigger side faces bigger angle** (and vice versa) — ordering sides/angles without numbers.
- Area = **½ · base · height** — height must be ⊥ to that base (can fall outside an obtuse triangle).
- Area = **½ · a · b · sin C** — only if a problem gives two sides + included angle (rare).
- Isosceles: equal sides ⇒ equal **base angles** (and converse) — unknown-angle problems with two equal sides.
- Equilateral: all angles **60°**; area = **(s²√3)/4**; height = **(s√3)/2** — any equilateral or a side of a hexagon.

### Right Triangles
- **Pythagorean:** a² + b² = c² (c = hypotenuse) — right triangles; also distance between points.
- Memorize triples: **3-4-5, 5-12-13, 8-15-17, 7-24-25** and ALL multiples (6-8-10, 9-12-15, 10-24-26) — recognize instead of computing roots.
- **45-45-90:** sides **x : x : x√2** — squares' diagonals, isosceles right triangles. (√2 ≈ 1.414)
- **30-60-90:** sides **x : x√3 : 2x** (short : long : hyp) — equilateral cut in half, hexagons. (√3 ≈ 1.732)
- Altitude to hypotenuse creates **two triangles similar** to the original — geometric-mean / "altitude" problems.

### Similar & Congruent
- Similar (equal angles): sides in **constant ratio k** — proportional sides, shadows, nested triangles.
- If linear ratio = k, then **area ratio = k²**, **volume ratio = k³** — scaling traps (double the side ≠ double the area).
- Congruence shortcuts: **SSS, SAS, ASA, AAS** (NOT SSA/AAA) — "are these triangles definitely equal" QC.

### Quadrilaterals & Polygons
- Square: area = s², perimeter = 4s, diagonal = **s√2** — diagonal links to 45-45-90.
- Rectangle: area = lw, diagonal = **√(l²+w²)** — fits in a box / screen problems.
- Parallelogram: area = **base · height** (⊥ height, not the slanted side) — classic "used the slant side" trap.
- Rhombus: area = **½ · d₁ · d₂** (product of diagonals over 2) — also works for any kite/figure with ⊥ diagonals.
- Trapezoid: area = **½ · (b₁ + b₂) · h** — average the two parallel sides times height.
- Sum of interior angles of n-gon = **(n − 2) · 180°** — polygon angle totals.
- **Regular** polygon each interior angle = **(n−2)·180 / n**; each exterior = **360 / n** — regular hexagon interior = 120°.
- Sum of exterior angles of ANY convex polygon = **360°** — shortcut for regular-polygon side counts (n = 360/exterior).
- Regular hexagon = **6 equilateral triangles**; area = **(3√3/2)s²** — hexagon area/relating side to radius.

### Circles
- Circumference = **2πr = πd**; Area = **πr²** — every circle.
- Arc length = **(θ/360) · 2πr**; Sector area = **(θ/360) · πr²** — "slice of pizza" problems; same fraction θ/360 for both.
- **Central angle = 2 × inscribed angle** subtending the same arc — inscribed-angle problems.
- Inscribed angle in a **semicircle = 90°** (angle in a diameter) — a triangle inscribed with a side as diameter is right.
- A **tangent is ⊥ to the radius** at the point of contact — tangent-line problems create right triangles.
- Equation of circle: **(x−h)² + (y−k)² = r²** — center (h,k), radius r on coordinate plane.

### Coordinate Geometry
- Distance = **√[(x₂−x₁)² + (y₂−y₁)²]** — Pythagorean in disguise; spot triples.
- Midpoint = **((x₁+x₂)/2, (y₁+y₂)/2)** — average the coordinates.
- Slope m = **(y₂−y₁)/(x₂−x₁)** = rise/run — steepness; horizontal slope 0, vertical undefined.
- Line: **y = mx + b** (b = y-intercept) — find b by plugging a known point.
- **Parallel ⇒ equal slopes; Perpendicular ⇒ slopes are negative reciprocals** (m₁·m₂ = −1) — line-relationship QC.
- x-intercept: set y = 0; y-intercept: set x = 0 — where a line crosses an axis.

### 3-D Solids (Surface Area & Volume)
- Rectangular box: V = **lwh**; SA = **2(lw + lh + wh)**; space diagonal = **√(l²+w²+h²)** — longest stick that fits in a box.
- Cube (side s): V = **s³**; SA = **6s²**; space diagonal = **s√3** — cube scaling traps.
- Cylinder: V = **πr²h**; lateral SA = **2πrh**; total SA = **2πrh + 2πr²** — cans, tanks.
- (Given-on-test) Sphere: V = **(4/3)πr³**, SA = **4πr²**; Cone: V = **(1/3)πr²h** — only if the formula is supplied or memorized; rare.
- Volume scales as **k³** with linear factor k — "melt and recast / double dimensions" problems.

### Key Decimal Approximations (memorize)
- π ≈ **3.14**, √2 ≈ **1.41**, √3 ≈ **1.73**, √5 ≈ **2.24** — estimate to eliminate choices fast.


**Mental-math / speed (Geometry):**

## Geometry — Speed & Number Sense

### Recognize, Don't Compute (Pythagorean triples)
- See **3-4-5, 5-12-13, 8-15-17, 7-24-25** and their multiples instantly. If two sides match a triple ratio, write the third with zero arithmetic (e.g., legs 6 & 8 ⇒ hyp 10; legs 9 & 12 ⇒ 15).
- See a side & hypotenuse: 5 & 13 ⇒ other leg 12; 10 & 26 ⇒ 24.

### Special-Triangle Decimal Shortcuts
- Multiply by √2 ≈ **1.4** and √3 ≈ **1.7** for fast estimates (square diagonal of side 10 ≈ 14; 30-60-90 long leg with short leg 10 ≈ 17).
- Equilateral height ≈ **0.87 × side** (since √3/2 ≈ 0.866). Side 10 ⇒ height ≈ 8.7.

### π Estimation
- π ≈ 3.14 but for fast elimination use **π ≈ 3** (slightly low) or **22/7 ≈ 3.14**.
- Circle area for r=10 ≈ **314**; circumference ≈ **63** (2π·10). Memorize these anchors and scale by r² / r.
- "In terms of π" answer choices: skip the multiplication entirely — just track the coefficient (area r=6 = 36π, no decimals).

### Squares to Memorize (for distance/Pythagoras)
- 11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 20²=400, 25²=625. Spotting these makes √(a²+b²) instant.

### Fraction-of-Circle Trick
- Arc and sector use the SAME fraction θ/360. Compute the fraction once (90°=¼, 60°=⅙, 45°=⅛, 120°=⅓, 72°=⅕) and reuse it for both arc length and sector area.

### Scaling Without Recalculating
- Linear ×k ⇒ area ×k², volume ×k³. "Radius increased 50%" ⇒ area ×(1.5)² = ×2.25; volume ×3.375.
- To halve work on similar figures, find the ratio of one pair of sides, then square (areas) or cube (volumes).

### Coordinate Quick Wins
- Distance between points often hides a triple: Δx=3, Δy=4 ⇒ distance 5 with no root.
- Slope of a line through the origin = y/x of any point on it.

### Hexagon Anchor
- Regular hexagon side s: it's 6 equilateral triangles, so area ≈ **2.6 s²** (3√3/2 ≈ 2.598). The distance across flats = s√3 ≈ 1.7s; across corners = 2s.

### Estimate-and-Eliminate Discipline
- On any "messy" geometry MC, round π and roots, compute a ballpark, and kill answer choices that are off by an order of magnitude before doing exact work. Reserve the on-screen calculator for genuinely ugly arithmetic only.


## Data Analysis

### Central Tendency
- **Mean** = (sum of values) / (count) — default "average"; the only stat that uses every value.
- **Sum = mean × count** — the single most useful rearrangement; use it whenever a problem gives an average and asks about a total, or vice versa.
- **Median** = middle value when ordered; for even n, average the two middle values — use for "typical" when outliers/skew are present.
- **Mode** = most frequent value(s); can be none or several — only when a question literally asks for it or for "most common."
- **Weighted mean** = Σ(value × weight) / Σ(weights) — combining groups of unequal size (e.g., two classes' averages into one).
- **New mean after adding a value** = (old sum + new value) / (old count + 1) — "what score is needed to raise the average to X."
- **Mean of evenly spaced set = (first + last)/2 = median** — instantly averages consecutive integers, arithmetic sequences, evenly spaced terms.

### Spread / Dispersion
- **Range** = max − min — quickest spread measure; sensitive to outliers.
- **Quartiles:** Q1 = median of lower half, Q2 = median, Q3 = median of upper half — boxplot construction; "middle 50%."
- **IQR = Q3 − Q1** — spread of the middle 50%; outlier-resistant spread.
- **Standard deviation (SD):** measures average distance from the mean; GRE almost never makes you compute it — compare SDs by how clustered vs. spread the data is. Tighter cluster = smaller SD.
- **SD facts that earn points:** adding a constant to every value leaves SD unchanged; multiplying every value by k multiplies SD by |k|; a set of identical values has SD = 0.
- **"Within k SDs of mean"** = interval [mean − k·SD, mean + k·SD] — pairs with the normal-curve rule below.

### Normal Distribution (68-95-99.7 rule)
- **≈68%** within 1 SD, **≈95%** within 2 SD, **≈99.7%** within 3 SD — any "normally distributed" question.
- **One-sided tail pieces (memorize):** each half is symmetric, so the slices from the mean outward are **34% / 13.5% / 2.35% / ~0.15%** for the 1st, 2nd, 3rd SD bands and beyond.
- **Below the mean = 50%; above the mean = 50%** — start every normal problem from the center line.
- **Percentile ↔ SD landmarks:** mean = 50th pct; +1 SD ≈ 84th; −1 SD ≈ 16th; +2 SD ≈ 97.5th; −2 SD ≈ 2.5th — converting a z-position to percentile.
- **Median = mean = mode** for a normal distribution — QC comparisons of these three.

### Percentiles & Position
- **kth percentile** = value below which ~k% of data falls — reading cumulative graphs/ogives.
- **Percentile is a rank, not a score** — "90th percentile" means position, never "90%."
- **Median = 50th percentile = Q2** — translate between vocabularies instantly.

### Percent & Percent Change (the bread and butter of DI sets)
- **Percent of:** part = (percent/100) × whole — basic "what is X% of Y."
- **Percent change = (new − old)/old × 100** — growth/decline; denominator is ALWAYS the original.
- **Percent increase by p%:** multiply by (1 + p/100); **decrease by p%:** multiply by (1 − p/100) — chained changes.
- **Successive changes multiply, never add:** +20% then −20% = ×1.20×0.80 = 0.96 = net −4% — the classic trap.
- **Reverse a percent:** if after a p% increase the result is N, original = N / (1 + p/100) — "price after tax was $X, find pre-tax."
- **Percentage POINTS ≠ percent:** 40% to 50% is +10 points but +25% change — DI questions exploit this constantly.

### Ratios & Proportions
- **a : b means parts; total = a + b (+...) parts** — "divide $120 in ratio 2:3" → 5 parts, each $24.
- **Part = (its ratio share / total ratio sum) × whole** — converting a ratio to actual quantities.
- **Cross-multiply** a/b = c/d → ad = bc — solving proportions, scaling.

### Probability
- **P(event) = favorable / total** — equally likely outcomes.
- **P(not A) = 1 − P(A)** — "at least one," complicated "or" — almost always faster via the complement.
- **P(A and B), independent** = P(A) × P(B) — successive independent events (coin, dice, draws with replacement).
- **P(A or B)** = P(A) + P(B) − P(A and B) — union; subtract the double-counted overlap.
- **Mutually exclusive:** P(A and B) = 0, so P(A or B) = P(A) + P(B) — events that can't co-occur.
- **Conditional P(A|B) = P(A and B) / P(B)** — "given that..."; restricts the sample space to B.
- **"At least one" = 1 − P(none)** — the highest-yield probability shortcut on the test.
- **Expected value = Σ(outcome × its probability)** — games, payouts, weighted long-run average.
- **Draws without replacement:** denominator shrinks each draw — adjust totals every step.

### Counting
- **Multiplication (fundamental counting) principle:** if step 1 has m ways and step 2 has n ways, together = m × n — "how many outfits / codes / paths."
- **Permutations (order matters):** nPr = n! / (n − r)! — arrangements, rankings, seat orders.
- **Combinations (order doesn't matter):** nCr = n! / [r!(n − r)!] — choosing a committee/group/handshakes.
- **nCr = nC(n−r)** — choosing 8 of 10 = choosing 2 to leave out; cuts computation.
- **n! arrangements of n distinct items**; **0! = 1** — line-ups; edge case in formulas.
- **Circular arrangements of n** = (n − 1)! — people around a round table (rotations identical).
- **Trigger words:** "arrange/order/rank" → permutation; "choose/select/group/committee" → combination.

### Sets, Venn, Overlaps
- **Two-set:** |A ∪ B| = |A| + |B| − |A ∩ B| — "how many take French or Spanish."
- **Total with "neither":** Total = A + B − (both) + neither — survey/group-membership problems.
- **Three-set:** |A∪B∪C| = Σsingles − Σpairs + |A∩B∩C| — inclusion-exclusion; or just fill a Venn from the innermost region out.

### Data Interpretation (reading graphs/tables)
- **Bar/line graph:** read axis scale and units FIRST (thousands? millions? %?) — every value depends on it.
- **Circle (pie) graph:** each slice's value = (slice % or angle/360°) × total — convert a percent slice to a count via the stated whole.
- **Pie angle:** a slice of p% spans (p/100 × 360)° = 3.6° per percent — "central angle" questions.
- **Stacked bars:** a segment's value = its top minus its bottom, not its top reading — common misread.
- **Two-display sets:** the answer often requires combining a table AND a graph — check whether a single source is enough.

### Frequency & Sequences (DA-adjacent, frequently tested)
- **Mean from a frequency table** = Σ(value × frequency) / Σ(frequency) — grouped data; don't average the distinct values.
- **Count of integers from a to b inclusive** = b − a + 1 — "how many data points between..." (fencepost).
- **Count of multiples of k from a to b** = floor(b/k) − floor((a−1)/k) — "how many values divisible by k."


**Mental-math / speed (Data Analysis):**

## Data Analysis — Mental Math & Number Sense

### Percent agility (most-used skill in DI sets)
- **1% = move decimal two left; 10% = one left.** Build any percent from these: 35% of 80 = 10%(8) ×3 + 5%(4) = 24+4 = 28.
- **5% = half of 10%; 15% = 10% + 5%; 20% = double 10%; 25% = ÷4; 50% = ÷2; 12.5% = ÷8.**
- **x% of y = y% of x** — 16% of 25 is hard, but 25% of 16 = 4 instantly. Flip whenever one side is a clean fraction.
- **Percent → fraction benchmarks (memorize):** 1/2=50, 1/3≈33.3, 2/3≈66.7, 1/4=25, 1/5=20, 1/6≈16.7, 1/8=12.5, 1/9≈11.1, 1/11≈9.1, 1/12≈8.3, 3/8=37.5, 5/8=62.5, 7/8=87.5. Spotting these turns "ugly" percents into clean fractions.

### Fast percent change
- **Use multipliers, not formulas:** +25% = ×1.25 = ×5/4; −20% = ×0.8 = ×4/5; +50% = ×3/2; −50% = ×1/2; +100% = ×2; −33⅓% = ×2/3.
- **Estimate % change fast:** part/whole as a benchmark fraction, then convert. 47 of 200 ≈ 47/200 ≈ 23.5%.

### Ratios & proportions
- **Find one "part" first:** ratio 3:5 of 240 → 8 parts → 1 part = 30 → 90 and 150. Always compute the unit part, then scale.
- **Scale a proportion by the multiplier, not cross-multiplication** when it's clean: 3 cost $4.50 → 7 cost? unit = 1.50 → 10.50.

### Combinations / counting
- **Memorize small combos:** nC2 = n(n−1)/2 — handshakes/pairs: 6C2=15, 7C2=21, 8C2=28, 10C2=45. This is the most common counting question.
- **nC1 = n, nCn = 1, nC0 = 1; nCr = nC(n−r)** — compute the smaller side: 10C8 = 10C2 = 45.
- **Factorials to know:** 4!=24, 5!=120, 6!=720, 7!=5040. Cancel factorials before multiplying — never expand fully.

### Averages
- **Average via deviations from a guess:** for {82,85,88}, guess 85 → deviations −3,0,+3 → mean 85. Fast for clustered data.
- **Evenly spaced set:** mean = (first+last)/2 instantly — sum = that × count.
- **Balance point:** to raise an average, the new value must exceed the current mean by (desired rise × new count).

### Normal curve (do it on a sketch, not by formula)
- **Draw the bell, mark mean = 50%, drop the 34 / 13.5 / 2.35 slices on each side.** Add the relevant slices. "Above +1 SD" = 13.5 + 2.35 + 0.15 ≈ 16%.

### Squares & roots (for SD/variance estimates and geometry-flavored data)
- **Squares 1–15** cold: …11²=121, 12²=144, 13²=169, 14²=196, 15²=225. Plus 20²=400, 25²=625.
- **√2≈1.41, √3≈1.73, √5≈2.24** — quick magnitude checks.

### Calculator discipline
- **Skip the calculator** for anything the benchmarks above handle (percents, simple ratios, /2, /4, /5). Reserve it for ugly multi-digit division and large DI sums — over-use is a timing bug.
- **Estimate first, compute second:** predict the answer's ballpark, then verify. If the calculator result is off by an order of magnitude, you misread the axis units.
- **Memory key:** in multi-step DI questions, store a running total (e.g., the chart total) to avoid re-entering it.
