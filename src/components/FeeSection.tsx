import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    title: "Government College",
    price: "₹10,000 - ₹25,000",
    period: "per year",
    highlight: false,
    features: [
      "Low tuition fees",
      "Government-approved faculty",
      "Library & lab access",
      "Merit-based admission",
      "Scholarship available",
    ],
  },
  {
    title: "Our Institution",
    price: "₹35,000 - ₹50,000",
    period: "per year",
    highlight: true,
    features: [
      "NCTE approved program",
      "Experienced faculty panel",
      "Smart classrooms & ICT labs",
      "Placement assistance",
      "Flexible payment options",
      "Scholarship up to 50%",
      "Hostel facility available",
    ],
  },
  {
    title: "Private University",
    price: "₹50,000 - ₹1,50,000",
    period: "per year",
    highlight: false,
    features: [
      "Premium infrastructure",
      "International exposure",
      "Advanced pedagogy training",
      "Industry partnerships",
      "Campus placements",
    ],
  },
];

const FeeSection = () => (
  <section id="fees" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Investment</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Fee <span className="text-gradient-saffron">Structure</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Compare fee structures across different types of institutions and find the best fit for you.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-8 h-full flex flex-col ${
                plan.highlight
                  ? "gradient-saffron text-primary-foreground shadow-saffron scale-[1.03]"
                  : "bg-card shadow-card border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-bold uppercase tracking-wide">Recommended</span>
                </div>
              )}
              <h3 className={`font-display text-xl font-bold mb-2 ${plan.highlight ? "" : "text-foreground"}`}>
                {plan.title}
              </h3>
              <div className="mb-1">
                <span className={`text-3xl font-display font-bold ${plan.highlight ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                {plan.period}
              </p>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "" : "text-primary"}`} />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "gradient-saffron text-primary-foreground hover:opacity-90"
                }`}
              >
                Get Details
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeeSection;
