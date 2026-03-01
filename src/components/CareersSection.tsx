import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { School, Building2, Globe, BookMarked, Briefcase, Award } from "lucide-react";

const careers = [
  { 
    icon: School, 
    title: "School Teacher (PRT / TGT / PGT)", 
    desc: "Teach In Government Or Private Schools After Qualifying CTET Or State TET. Government Schools Offer Stable Salary And Benefits.", 
    salary: "₹2.5–7 LPA (Private), ₹4–9 LPA (Government approx)" 
  },
  { 
    icon: Building2, 
    title: "School Coordinator / Administrator", 
    desc: "Handle Academic Planning, Student Management, And School Operations After Gaining Teaching Experience.", 
    salary: "₹3–8 LPA" 
  },
  { 
    icon: Globe, 
    title: "Online Educator / Tutor", 
    desc: "Teach On EdTech Platforms Or Provide Private Online Tuition. Income Depends On Student Base And Subject Demand.", 
    salary: "₹2–10 LPA (Variable based on workload)" 
  },
  { 
    icon: BookMarked, 
    title: "Curriculum / Content Developer", 
    desc: "Develop Textbooks, Lesson Plans, And Digital Learning Materials For Publishers Or EdTech Companies.", 
    salary: "₹3–6 LPA" 
  },
  { 
    icon: Briefcase, 
    title: "Education Counselor / Consultant", 
    desc: "Guide Students In Academic Planning And Admissions After Gaining Relevant Experience.", 
    salary: "₹3–9 LPA" 
  },
  { 
    icon: Award, 
    title: "Higher Studies (M.Ed / Ph.D)", 
    desc: "Pursue M.Ed Or Ph.D To Become Assistant Professor After Clearing NET/SET Exams.", 
    salary: "₹6–15 LPA (University level approx)" 
  },
];
const CareersSection = () => (
  <section id="careers" className="section-padding gradient-warm">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">After B.Ed</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Career <span className="text-gradient-saffron">Opportunities</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          A B.Ed Degree Opens Doors To Diverse And Fulfilling Career Paths In The Education Sector.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card rounded-2xl p-7 shadow-card border border-border hover:border-primary/30 transition-all h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl gradient-saffron flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <c.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{c.desc}</p>
              <div className="inline-flex items-center gap-2 bg-saffron-50 text-primary px-3 py-1.5 rounded-lg text-sm font-semibold w-fit">
                {c.salary}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CareersSection;
