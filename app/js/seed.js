/* seed.js — initial syllabus + profile, mirrored from the existing gre-quant tracker.
   The app stores all live progress in localStorage; this is only the day-one starting point. */
(function () {
  const AREAS = ["Arithmetic", "Algebra", "Geometry", "Data Analysis"];

  // topic key -> { area, title }.  Titles are what the learner sees.
  const TOPICS = {
    // Arithmetic
    integer_properties:           ["Arithmetic", "Integer properties"],
    divisibility_factors_multiples:["Arithmetic", "Divisibility, factors & multiples"],
    primes:                       ["Arithmetic", "Primes & prime factorization"],
    remainders:                   ["Arithmetic", "Remainders & modular reasoning"],
    odd_even:                     ["Arithmetic", "Odd / even rules"],
    consecutive_integers:         ["Arithmetic", "Consecutive integers"],
    exponents_roots:              ["Arithmetic", "Exponents & roots"],
    order_of_operations:          ["Arithmetic", "Order of operations & signs"],
    estimation:                   ["Arithmetic", "Estimation & number sense"],
    percent_and_percent_change:   ["Arithmetic", "Percent & percent change"],
    ratio_proportion:             ["Arithmetic", "Ratio & proportion"],
    rate:                         ["Arithmetic", "Rate, work & speed"],
    absolute_value:               ["Arithmetic", "Absolute value"],
    number_line:                  ["Arithmetic", "The number line"],
    fractions_decimals:           ["Arithmetic", "Fractions & decimals"],
    sequences:                    ["Arithmetic", "Sequences"],
    // Algebra
    exponent_rules:               ["Algebra", "Rules of exponents"],
    factoring:                    ["Algebra", "Factoring & special products"],
    simplifying_expressions:      ["Algebra", "Simplifying expressions"],
    linear_equations:             ["Algebra", "Linear equations"],
    quadratic_equations:          ["Algebra", "Quadratic equations"],
    inequalities:                 ["Algebra", "Inequalities"],
    simultaneous_equations:       ["Algebra", "Simultaneous equations"],
    functions_relations:          ["Algebra", "Functions & relations"],
    word_problem_translation:     ["Algebra", "Word-problem translation"],
    coordinate_geometry_lines:    ["Algebra", "Coordinate geometry: lines"],
    slope_and_intercepts:         ["Algebra", "Slope & intercepts"],
    distance_and_midpoint:        ["Algebra", "Distance & midpoint"],
    // Geometry
    lines_and_angles:             ["Geometry", "Lines & angles"],
    parallel_perpendicular:       ["Geometry", "Parallel & perpendicular lines"],
    triangles:                    ["Geometry", "Triangles"],
    pythagorean_theorem:          ["Geometry", "Pythagorean theorem & triples"],
    special_right_triangles:      ["Geometry", "Special right triangles"],
    quadrilaterals:               ["Geometry", "Quadrilaterals"],
    polygons_angles:              ["Geometry", "Polygons & interior angles"],
    circles:                      ["Geometry", "Circles, arcs & sectors"],
    similar_and_congruent:        ["Geometry", "Similar & congruent figures"],
    three_d_figures:              ["Geometry", "3-D figures"],
    area_and_perimeter:           ["Geometry", "Area & perimeter"],
    surface_area_and_volume:      ["Geometry", "Surface area & volume"],
    // Data Analysis
    mean_median_mode:             ["Data Analysis", "Mean, median & mode"],
    range_and_sd:                 ["Data Analysis", "Range & standard deviation"],
    quartiles_iqr:                ["Data Analysis", "Quartiles & IQR"],
    percentiles:                  ["Data Analysis", "Percentiles"],
    data_interpretation_sets:     ["Data Analysis", "Data interpretation sets"],
    probability_single:           ["Data Analysis", "Probability (single events)"],
    probability_compound:         ["Data Analysis", "Compound probability"],
    conditional_probability:      ["Data Analysis", "Conditional probability"],
    expected_value:               ["Data Analysis", "Expected value"],
    permutations:                 ["Data Analysis", "Permutations"],
    combinations:                 ["Data Analysis", "Combinations"],
    venn_diagrams:                ["Data Analysis", "Venn diagrams & sets"],
    multiplication_principle:     ["Data Analysis", "Multiplication principle"],
    normal_distribution:          ["Data Analysis", "Normal distribution (68-95-99.7)"]
  };

  GRE = window.GRE || {};
  window.GRE = GRE;
  GRE.SEED = {
    areas: AREAS,
    topics: TOPICS,
    profile: {
      setupDate: "2026-06-24",
      targetDate: "2026-07-31",
      track: "chase-170",
      targetBand: "165–170"
    }
  };
})();
