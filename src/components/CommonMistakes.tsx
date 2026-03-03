import React from "react";

const mistakes = [
  {
    title: "Not Checking NCTE Approval",
    desc: "Many students do not verify whether the college is approved by NCTE. Without approval, the B.Ed degree may not be valid for government jobs.",
  },
  {
    title: "Ignoring University Affiliation",
    desc: "Students fail to check whether the college is affiliated with a recognized university approved by UGC.",
  },
  {
    title: "Not Understanding Entrance Process",
    desc: "Some universities require CUET PG or state entrance exams. Many students miss deadlines due to lack of awareness.",
  },
  {
    title: "Choosing Only Based on Low Fees",
    desc: "Low fees does not always mean quality education. Faculty, internship, and infrastructure matter more.",
  },
  {
    title: "Ignoring Internship Quality",
    desc: "B.Ed is practical-oriented. Poor school internship programs reduce real teaching experience.",
  },
  {
    title: "Not Checking Hidden Fees",
    desc: "Students only see tuition fees and ignore exam, practical, library, and internship charges.",
  },
  {
    title: "Falling for Fake Agents",
    desc: "Some agents promise guaranteed government jobs after B.Ed. Recruitment happens only through TET and official exams.",
  },
  {
    title: "Not Planning Career Path",
    desc: "Many students take B.Ed without deciding whether they want government teaching, private school jobs, or higher studies.",
  },
];

const CommonMistakes = () => {
  return (
    <section className="bg-orange-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600">
            Common Mistakes While Taking B.Ed Admission
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Avoid these common errors before taking admission in any B.Ed college.
            Make informed decisions and secure your teaching career.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-orange-500 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommonMistakes;