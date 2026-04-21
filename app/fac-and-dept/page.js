"use client";
import Button from "@/components/UI/button";

export default function FacAndDeptPage() {
  const facultiesData = [
    {
      id: "cs",
      title: "Faculty of Computer Science",
      gridCols: "grid-cols-1 sm:grid-cols-2",
      departments: [
        { name: "Computer Science", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "AD Computer Science", url: "https://admission.hed.gkp.pk/faculty_details" },
      ],
    },
    {
      id: "sciences",
      title: "Faculty of Sciences",
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      departments: [
        { name: "Botany", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Zoology", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Physics", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Chemistry", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "HPE", url: "https://admission.hed.gkp.pk/faculty_details" },
      ],
    },
    {
      id: "arts",
      title: "Faculty of Arts & Humanities",
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      departments: [
        { name: "English", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Mathematics", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Political Science", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Pak Study", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Urdu", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Pashto", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Islamiyat", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "History", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Sociology", url: "https://admission.hed.gkp.pk/faculty_details" },
        { name: "Economics", url: "https://admission.hed.gkp.pk/faculty_details" },
      ],
    },
  ];

  return (
    <section className="bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-8">

        {/* ✅ HEADER */}
        <div className="text-center mb-8 py-6">
          <h1 className="text-[#083262] text-3xl font-bold">
            Government Postgraduate College Timergara
          </h1>
          <p className="text-[#1e40af] text-sm mt-2">
            Dir Lower, Khyber Pakhtunkhwa — Departments &amp; Programs
          </p>
        </div>

        {facultiesData.map((faculty) => (
          <div key={faculty.id} className="mb-10 bg-white/90 rounded-2xl p-6 sm:p-8 shadow-lg border border-[#083262]/10">
            <h1 className="text-[#083262] text-center text-2xl font-bold mb-6 pb-3 border-b-2 border-[#083262]">
              {faculty.title}
            </h1>
            <div className={`grid ${faculty.gridCols} gap-3`}>
              {faculty.departments.map((dept, index) => (
                <a key={index} href={dept.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button href={dept.name} className="!justify-self-center !w-[99%] !text-[16px] m-[0px] mt-[-15px]" />
                </a>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}