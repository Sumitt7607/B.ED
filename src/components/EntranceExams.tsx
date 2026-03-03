import { motion } from "framer-motion";
import { FileText, Calendar, MapPin, Star, ArrowRight, CheckCircle2 } from "lucide-react";

const exams = [
  {
    name: "CTET",
    fullName: "Central Teacher Eligibility Test",
    conducting: "CBSE",
    frequency: "Twice a year",
    level: "National",
    highlights: ["Paper I (Class 1-5)", "Paper II (Class 6-8)", "Valid for 7 years"],
    color: "primary",
  },
  {
    name: "State TET",
    fullName: "State Teacher Eligibility Test",
    conducting: "State Govts",
    frequency: "Once/Twice a year",
    level: "State",
    highlights: ["State-specific syllabus", "Mandatory for govt jobs", "Varies by state"],
    color: "accent",
  },
  {
    name: "DUET",
    fullName: "Delhi University Entrance Test",
    conducting: "NTA",
    frequency: "Once a year",
    level: "University",
    highlights: ["For DU B.Ed admission", "MCQ-based exam", "Merit-based selection"],
    color: "primary",
  },
  {
    name: "MAH B.Ed CET",
    fullName: "Maharashtra B.Ed Common Entrance Test",
    conducting: "State CET Cell",
    frequency: "Once a year",
    level: "State",
    highlights: ["For Maharashtra colleges", "Online exam", "Centralized counselling"],
    color: "accent",
  },
  {
    name: "UP B.Ed JEE",
    fullName: "Uttar Pradesh B.Ed Joint Entrance Exam",
    conducting: "Lucknow University",
    frequency: "Once a year",
    level: "State",
    highlights: ["Largest state B.Ed exam", "2 papers", "Arts/Science/Commerce streams"],
    color: "primary",
  },
  {
    name: "IGNOU B.Ed",
    fullName: "IGNOU B.Ed Entrance Test",
    conducting: "IGNOU",
    frequency: "Once a year",
    level: "National",
    highlights: ["Distance learning", "For working teachers", "Flexible schedule"],
    color: "accent",
  },
];

const EntranceExams = () => {
  return (
    <section className="py-20 px-4 bg-cream relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-saffron/5 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-saffron-dark text-sm font-semibold mb-4 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Entrance Exams
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            B.Ed <span className="text-primary">Entrance Exams</span> in India
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete guide to all major entrance exams you need to crack for B.Ed admission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, i) => (
            <motion.div
              key={exam.name}
              className="group rounded-2xl border border-border bg-card p-6 relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 60px -12px hsl(25 95% 53% / 0.15)",
              }}
            >
              {/* Top accent line */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-1 ${exam.color === "primary" ? "bg-gradient-to-r from-primary to-saffron-light" : "bg-gradient-to-r from-accent to-saffron-glow"}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              />

              {/* Badge */}
              <motion.div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${exam.level === "National" ? "bg-primary/10 text-primary" : exam.level === "State" ? "bg-accent/10 text-accent" : "bg-saffron-light/20 text-saffron-dark"}`}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-3 h-3" />
                {exam.level} Level
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-1">{exam.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{exam.fullName}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-primary" />
                  {exam.conducting}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {exam.frequency}
                </span>
              </div>

              <div className="space-y-2">
                {exam.highlights.map((h, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.1 + 0.4 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {h}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 4 }}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px -10px hsl(25 95% 53% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            View Full Exam Calendar 2025
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EntranceExams;
