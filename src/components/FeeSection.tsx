import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    title: "Government B.Ed College",
    price: "₹8,000 - ₹40,000",
    period: "per year (2-Year Program)",
    highlight: false,
    features: [
      "NCTE & State Government Approved",
      "2-Year Regular B.Ed Degree",
      "Entrance Exam Based Admission",
      "Experienced Government Faculty",
      "Teaching Internship in Recognized Schools",
      "Library, Psychology Lab & ICT Lab Access",
      "State & Central Scholarship Schemes Available",
    ],
  },
  {
    title: "Private University (B.Ed)",
    price: "₹60,000 - ₹1,50,000",
    period: "per year (2-Year Regular Program)",
    highlight: false,
    features: [
      "NCTE Approved & UGC Recognized University",
      "2-Year Regular B.Ed Degree",
      "Entrance / Merit-Based Admission",
      "Modern Smart Classrooms & ICT Enabled Campus",
      "Psychology Lab, Education Technology Lab & Library Access",
      "16–20 Weeks Mandatory School Internship",
      "Career Guidance & Placement Assistance",
      "On-Campus Hostel & Transportation Facility",
    ],
  },
];

const FeeSection = () => (
  <section id="fees" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Investment
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Fee <span className="text-gradient-saffron">Structure</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Compare Fee Structures Across Different Types Of Institutions And Find The Best Fit For You.
        </p>
      </AnimatedSection>

      {/* Centered 2 Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <span className="text-sm font-bold uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
              )}

              <h3
                className={`font-display text-xl font-bold mb-2 ${
                  plan.highlight ? "" : "text-foreground"
                }`}
              >
                {plan.title}
              </h3>

              <div className="mb-1">
                <span
                  className={`text-3xl font-display font-bold ${
                    plan.highlight ? "" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "opacity-80" : "text-muted-foreground"
                }`}
              >
                {plan.period}
              </p>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "" : "text-primary"
                      }`}
                    />
                    <span className="leading-relaxed">{feature}</span>
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

export default FeeSection;