import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const semesters = [
  {
    title: "Semester I",
    subjects: [
      "Childhood & Growing Up",
      "Contemporary India & Education",
      "Language Across The Curriculum",
      "Understanding Disciplines & Subjects",
      "Pedagogy Of School Subject - I",
    ],
  },
  {
    title: "Semester II",
    subjects: [
      "Learning & Teaching",
      "Assessment For Learning",
      "ICT In Education",
      "Pedagogy Of School Subject - II",
      "School Internship - I (4 weeks)",
    ],
  },
  {
    title: "Semester III",
    subjects: [
      "Knowledge & Curriculum",
      "Inclusive School: Creating An Enabling Environment",
      "Gender, School & Society",
      "School Internship - II (16 weeks)",
      "Community Engagement Programs",
    ],
  },
  {
    title: "Semester IV",
    subjects: [
      "Reading & Reflecting On Texts",
      "Understanding The Self",
      "Optional Course (Guidance & Counseling / Health & Physical Education)",
      "Drama & Art In Education",
      "Action Research / Dissertation",
    ],
  },
];

const CurriculumSection = () => (
  <section id="curriculum" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Course Structure</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          B.Ed <span className="text-gradient-saffron">Curriculum</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Our 2-year Program Is Divided Into 4 Semesters, Combining Theoretical Knowledge With Extensive Practical Training.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {semesters.map((sem, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-xl gradient-saffron flex items-center justify-center text-primary-foreground font-bold text-lg font-display">
                  {i + 1}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">{sem.title}</h3>
              </div>
              <ul className="space-y-3">
                {sem.subjects.map((sub, j) => (
                  <li key={j} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{sub}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
