import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "98%", label: "Placement Rate" },
  { value: "50+", label: "Expert Faculty" },
  { value: "5000+", label: "Alumni Network" },
];

const reasons = [
  "State-of-the-art smart classrooms and laboratories",
  "Tie-ups with 200+ schools for internship programs",
  "Regular workshops by education leaders & policymakers",
  "Dedicated placement cell with career guidance",
  "Scholarship programs for meritorious students",
  "Sports, cultural & co-curricular activities",
  "Digital library with 50,000+ academic resources",
  "Well-equipped hostel with modern amenities",
];

const WhyUsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Strengths</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Why Choose <span className="text-gradient-saffron">Us?</span>
        </h2>
      </AnimatedSection>

      {/* Stats bar */}
      <AnimatedSection>
        <div className="gradient-saffron rounded-2xl p-8 md:p-10 mb-14 shadow-saffron">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{s.value}</div>
                <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Reasons grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-card rounded-xl p-5 shadow-card border border-border hover:border-primary/30 transition-all h-full flex items-start gap-3"
            >
              <span className="w-8 h-8 rounded-lg gradient-saffron flex items-center justify-center text-primary-foreground font-bold text-xs flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground text-sm leading-relaxed">{r}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
