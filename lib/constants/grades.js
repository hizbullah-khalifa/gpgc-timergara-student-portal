export const GRADE_POINTS = {
  A:    4.00,
  "A-": 3.70,
  "B+": 3.33,
  B:    3.00,
  "B-": 2.67,
  "C+": 2.33,
  C:    2.00,
  "C-": 1.67,
  "D+": 1.33,
  D:    1.00,
  F:    0.00,
};

export const GRADE_MARKS = {
  A:    { min: 85.00, max: 100   },
  "A-": { min: 80.00, max: 84.99 },
  "B+": { min: 75.00, max: 79.99 },
  B:    { min: 70.00, max: 74.99 },
  "B-": { min: 68.00, max: 70.99 }, // ← was wrong: 2.7 → 2.67
  "C+": { min: 64.00, max: 67.99 }, // ← was wrong: 2.3 → 2.33
  C:    { min: 60.00, max: 63.99 }, // minimum passing grade
  "C-": { min: 55.00, max: 59.99 },
  "D+": { min: 50.00, max: 54.99 },
  D:    { min: 45.00, max: 49.99 },
  F:    { min: 0,     max: 44.99 },
};

export const GRADE_COLOR = {
  A:    "text-green-600",
  "A-": "text-green-500",
  "B+": "text-blue-600",
  B:    "text-blue-500",
  "B-": "text-blue-400",
  "C+": "text-yellow-600",
  C:    "text-yellow-500",
  "C-": "text-yellow-400",
  "D+": "text-orange-500",
  D:    "text-orange-600",
  F:    "text-red-600",
};

export function gpaColor(gpa) {
  const g = parseFloat(gpa);
  if (g >= 3.5)  return "text-green-600";  // A range
  if (g >= 3.0)  return "text-blue-600";   // B range
  if (g >= 2.0)  return "text-yellow-600"; // C range (2.0 = min passing)
  if (g >= 1.0)  return "text-orange-500"; // D range
  return "text-red-500";                   // F
}

// Helper: get grade letter from percentage marks
export function getGradeFromMarks(marks) {
  const m = parseFloat(marks);
  for (const [grade, { min, max }] of Object.entries(GRADE_MARKS)) {
    if (m >= min && m <= max) return grade;
  }
  return "F";
}

// Helper: get grade letter from GPA point
export function getGradeFromGPA(gpa) {
  const g = parseFloat(gpa);
  for (const [grade, point] of Object.entries(GRADE_POINTS)) {
    if (g >= point) return grade;
  }
  return "F";
}