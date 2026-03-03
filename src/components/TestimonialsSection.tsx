import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Ed Graduate 2024",
    text: "The B.Ed Program Transformed My Passion For Teaching Into a Professional Skill Set. The Practical Training In Schools Was Invaluable!",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Now Teaching at DPS",
    text: "Excellent Faculty And Comprehensive Curriculum. I Got Placed In a Top School Even Before Completing My Final Semester.",
    initials: "RK",
  },
  {
    name: "Anita Verma",
    role: "Education Consultant",
    text: "The B.Ed Degree From This Institution Opened Doors I Never Imagined. The Support System And Mentoring Were Outstanding.",
    initials: "AV",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding gradient-warm">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Student Voices</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          What Our alumni <span className="text-gradient-saffron">Alumni Say</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border h-full flex flex-col"
            >
              <Quote className="w-10 h-10 text-saffron-200 mb-4" />
              <p className="text-foreground leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center text-primary-foreground font-bold font-display">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
