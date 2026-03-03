import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Landmark, Building2, School } from "lucide-react";
import { Link } from "react-router-dom";

const universityTypes = [
  {
    title: "Central Universities",
    slug: "central",
    icon: Landmark,
    description:
      "Funded by the Central Government with low fee structure and strong academic reputation. Admission through national-level entrance exams.",
    features: [
      "Low Fees (₹8k – ₹25k / year)",
      "National Level Entrance Exam",
      "High NAAC Accreditation",
      "Highly Competitive Admission",
    ],
  },
  {
    title: "State Universities",
    slug: "state",
    icon: School,
    description:
      "Operated by State Governments with moderate fee structure and state-level entrance exams.",
    features: [
      "Affordable Fees (₹10k – ₹50k / year)",
      "State Entrance Based Admission",
      "Wide Network of Affiliated Colleges",
      "Government Recognized Degree",
    ],
  },
  {
    title: "Deemed Universities",
    slug: "deemed",
    icon: GraduationCap,
    description:
      "Autonomous institutions recognized by UGC with flexible curriculum structure.",
    features: [
      "UGC Recognized",
      "Flexible Curriculum",
      "Moderate to High Fees",
      "Strong Academic Focus",
    ],
  },
  {
    title: "Private Universities",
    slug: "private",
    icon: Building2,
    description:
      "Privately managed universities offering modern infrastructure and scholarship options.",
    features: [
      "Modern Infrastructure",
      "Fees ₹60k – ₹1.5L / year",
      "Scholarships Available",
      "Placement & Career Support",
    ],
  },
];

const UniversityTypesSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">

      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Explore Options
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
          Types of <span className="text-gradient-saffron">Universities for B.Ed</span>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Explore different institutions offering B.Ed programs and choose the right path for your teaching career.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {universityTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link to={`/university/${type.slug}`}>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-saffron hover:scale-105 transition-all duration-300 h-full flex flex-col cursor-pointer">

                  <div className="w-14 h-14 rounded-2xl gradient-saffron flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {type.description}
                  </p>

                  <ul className="space-y-2 mt-auto">
                    {type.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default UniversityTypesSection;