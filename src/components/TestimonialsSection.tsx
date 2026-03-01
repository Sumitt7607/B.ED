import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Ed Graduate 2024",
    text: "The B.Ed program transformed my passion for teaching into a professional skill set. The practical training in schools was invaluable!",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Now Teaching at DPS",
    text: "Excellent faculty and comprehensive curriculum. I got placed in a top school even before completing my final semester.",
    initials: "RK",
  },
  {
    name: "Anita Verma",
    role: "Education Consultant",
    text: "The B.Ed degree from this institution opened doors I never imagined. The support system and mentoring were outstanding.",
    initials: "AV",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding gradient-warm">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Student Voices</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          What Our <span className="text-gradient-saffron">Alumni Say</span>
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
