"use client";

import ToolHeader from "@/components/layout/ToolHeader";
import Link from "next/link";
import { useState, useCallback } from "react";

// ✅ University of Malakand — GPA thresholds
const UOM_GRADE_MAP = [
  { min: 4.00, max: 4.00, grade: "A",  label: "Brilliant",  color: "text-green-600" },
  { min: 3.70, max: 3.99, grade: "A-", label: "Excellent",  color: "text-green-500" },
  { min: 3.33, max: 3.69, grade: "B+", label: "Very Good",  color: "text-blue-600"  },
  { min: 3.00, max: 3.32, grade: "B",  label: "Good",       color: "text-blue-500"  },
  { min: 2.67, max: 2.99, grade: "B-", label: "Above Average", color: "text-blue-400" },
  { min: 2.33, max: 2.66, grade: "C+", label: "Average",    color: "text-yellow-600"},
  { min: 2.00, max: 2.32, grade: "C",  label: "Satisfactory (Min Pass)", color: "text-yellow-500" },
  { min: 1.67, max: 1.99, grade: "C-", label: "Below Min — Improve!", color: "text-orange-500" },
  { min: 1.33, max: 1.66, grade: "D+", label: "Poor",       color: "text-orange-600"},
  { min: 1.00, max: 1.32, grade: "D",  label: "Very Poor",  color: "text-red-500"   },
  { min: 0.00, max: 0.99, grade: "F",  label: "Fail ❌",    color: "text-red-600"   },
];

function getUoMInfo(val) {
  const v = parseFloat(val);
  for (const row of UOM_GRADE_MAP) {
    if (v >= row.min && v <= row.max) return row;
  }
  return UOM_GRADE_MAP[UOM_GRADE_MAP.length - 1];
}

// ✅ UoM semesters — 8 semesters for BS (4 years)
const emptySemester = (n) => ({
  name: `Semester ${n}`,
  gpa: "",
  credits: "18", // ✅ UoM default credit hours per semester
});

export default function CGPACalculatorPage() {
  const [semesters, setSemesters] = useState([
    emptySemester(1),
    emptySemester(2),
  ]);
  const [result, setResult] = useState(null);

  const addSemester = () => {
    if (semesters.length >= 8) return; // ✅ max 8 semesters for BS
    setSemesters((prev) => [...prev, emptySemester(prev.length + 1)]);
  };

  const removeSemester = (i) =>
    setSemesters((prev) => prev.filter((_, idx) => idx !== i));

  const update = (i, field, value) =>
    setSemesters((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, [field]: value } : s))
    );

  const calculate = useCallback(() => {
    let totalQP = 0;
    let totalCredits = 0;
    const rows = [];

    for (const s of semesters) {
      const gpa = parseFloat(s.gpa);
      const cr = parseFloat(s.credits);
      if (!isNaN(gpa) && !isNaN(cr) && cr > 0 && gpa >= 0 && gpa <= 4) {
        const qp = gpa * cr;
        totalQP += qp;
        totalCredits += cr;
        rows.push({
          name: s.name,
          gpa: gpa.toFixed(2),
          credits: cr,
          qp: qp.toFixed(2),
        });
      }
    }

    const cgpa =
      totalCredits > 0 ? (totalQP / totalCredits).toFixed(2) : "0.00";
    setResult({ cgpa, totalCredits, totalQP: totalQP.toFixed(2), rows });
  }, [semesters]);

  const reset = () => {
    setSemesters([emptySemester(1), emptySemester(2)]);
    setResult(null);
  };

  // ✅ Scholarship / Dean's List info based on UoM standards
  const getAchievement = (val) => {
    const v = parseFloat(val);
    if (v >= 3.70) return { text: "🏆 Dean's List — Outstanding!", bg: "bg-green-50 border-green-200 text-green-700" };
    if (v >= 3.33) return { text: "🌟 Excellent Academic Standing", bg: "bg-blue-50 border-blue-200 text-blue-700" };
    if (v >= 3.00) return { text: "✅ Good Academic Standing",      bg: "bg-blue-50 border-blue-100 text-blue-600" };
    if (v >= 2.00) return { text: "📚 Satisfactory — Keep Improving", bg: "bg-yellow-50 border-yellow-200 text-yellow-700" };
    return { text: "⚠️ Below Minimum — CGPA must be ≥ 2.00 to graduate", bg: "bg-red-50 border-red-200 text-red-700" };
  };

  return (
    <section className="bg-blue-100">
      <div className="mx-auto px-4 py-10 max-w-3xl">
        <ToolHeader
          heading="CGPA Calculator"
          desc="University of Malakand — Calculate your Cumulative GPA (4.00 Scale)"
        />

        {/* ✅ UoM Grading Reference */}
        <div className="bg-white rounded-xl border border-blue-100 p-4 mb-6 text-xs text-gray-600">
          <p className="font-semibold text-gray-700 mb-2">
            📋 UoM Grading Scale Reference
          </p>
          <div className="grid grid-cols-4 gap-1">
            {UOM_GRADE_MAP.map((row) => (
              <div key={row.grade} className="flex items-center gap-1">
                <span className={`font-bold ${row.color}`}>{row.grade}</span>
                <span className="text-gray-400">= {row.min.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-orange-600 font-medium">
            ⚠️ Minimum CGPA to pass / graduate: 2.00 (Grade C)
          </p>
        </div>

        {/* Semester Rows */}
        <div className="card mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Enter Semester GPAs</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
              {semesters.length} / 8 semesters
            </span>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-3 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide px-1">
            <div className="col-span-4">Semester</div>
            <div className="col-span-3">GPA (0–4.0)</div>
            <div className="col-span-3">Credit Hours</div>
            <div className="col-span-2"></div>
          </div>

          <div className="space-y-2">
            {semesters.map((sem, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-4">
                  <input
                    type="text"
                    value={sem.name}
                    onChange={(e) => update(i, "name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    value={sem.gpa}
                    onChange={(e) => update(i, "gpa", e.target.value)}
                    placeholder="e.g. 3.33"
                    min="0"
                    max="4"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    value={sem.credits}
                    onChange={(e) => update(i, "credits", e.target.value)}
                    placeholder="18"
                    min="1"
                    max="24"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div className="col-span-2 flex justify-center">
                  <button
                    onClick={() => removeSemester(i)}
                    disabled={semesters.length <= 1}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-30 transition"
                    title="Remove semester"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Add Semester button — disabled after 8 */}
          <button
            onClick={addSemester}
            disabled={semesters.length >= 8}
            className="mt-4 w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {semesters.length >= 8
              ? "Maximum 8 semesters reached (BS Program)"
              : "+ Add Semester"}
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={calculate}
            className="flex-1 py-3 navbar-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-md"
          >
            Calculate CGPA
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 border border-gray-300 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {result && (() => {
          const info = getUoMInfo(result.cgpa);
          const achievement = getAchievement(result.cgpa);
          return (
            <div className="card fade-in">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                  Your CGPA — University of Malakand
                </p>
                <p className={`text-6xl font-bold ${info.color}`}>
                  {result.cgpa}
                </p>
                {/* ✅ Grade letter + label */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className={`text-2xl font-bold ${info.color}`}>
                    Grade {info.grade}
                  </span>
                  <span className="text-gray-400">—</span>
                  <span className="text-lg text-gray-600">{info.label}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Total Credits: {result.totalCredits} &nbsp;|&nbsp; Total
                  Quality Points: {result.totalQP}
                </p>
              </div>

              {/* ✅ Achievement / Warning Banner */}
              <div className={`rounded-xl border px-4 py-3 mb-5 text-sm font-medium ${achievement.bg}`}>
                {achievement.text}
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>0.0</span>
                  <span>2.0 (Pass)</span>
                  <span>3.0</span>
                  <span>4.0</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                  {/* ✅ Minimum pass line marker at 50% (2.0/4.0) */}
                  <div className="absolute left-1/2 top-0 h-full w-0.5 bg-orange-400 z-10" />
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(parseFloat(result.cgpa) / 4.0) * 100}%`,
                      background: "#1a3c6e",
                    }}
                  />
                </div>
                <p className="text-xs text-orange-500 mt-1 text-center">
                  Orange marker = 2.0 minimum pass requirement (UoM)
                </p>
              </div>

              {/* Semester breakdown */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-xs uppercase text-gray-500">
                      <th className="text-left px-3 py-2 rounded-l">Semester</th>
                      <th className="text-center px-3 py-2">GPA</th>
                      <th className="text-center px-3 py-2">Grade</th>
                      <th className="text-center px-3 py-2">Credits</th>
                      <th className="text-center px-3 py-2 rounded-r">QP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {result.rows.map((r, i) => {
                      const rowInfo = getUoMInfo(r.gpa);
                      return (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-3 py-2 font-medium text-gray-700">
                            {r.name}
                          </td>
                          <td className={`px-3 py-2 text-center font-bold ${rowInfo.color}`}>
                            {r.gpa}
                          </td>
                          {/* ✅ Grade letter column */}
                          <td className={`px-3 py-2 text-center font-semibold ${rowInfo.color}`}>
                            {rowInfo.grade}
                          </td>
                          <td className="px-3 py-2 text-center text-gray-600">
                            {r.credits}
                          </td>
                          <td className="px-3 py-2 text-center text-gray-600">
                            {r.qp}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-blue-50 font-semibold">
                      <td className="px-3 py-2 text-gray-700">CGPA</td>
                      <td className={`px-3 py-2 text-center font-bold text-xl ${info.color}`}>
                        {result.cgpa}
                      </td>
                      <td className={`px-3 py-2 text-center font-bold ${info.color}`}>
                        {info.grade}
                      </td>
                      <td className="px-3 py-2 text-center text-gray-700">
                        {result.totalCredits}
                      </td>
                      <td className="px-3 py-2 text-center text-gray-700">
                        {result.totalQP}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          );
        })()}

        {/* Tip */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-sm text-blue-700">
            💡 <strong>Tip:</strong> Save your semester records in the{" "}
            <Link href="/portal" className="underline font-medium">
              Student Portal
            </Link>{" "}
            to automatically track your CGPA across all 8 semesters.
          </p>
        </div>
      </div>
    </section>
  );
}