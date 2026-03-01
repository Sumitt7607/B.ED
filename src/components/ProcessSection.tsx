import AnimatedSection from "./AnimatedSection";
import { FileText, PenTool, ListChecks, UserCheck, GraduationCap } from "lucide-react";

const steps = [
  { icon: FileText, title: "Online Registration", desc: "Fill Out The Online Application Form With Your Personal And Academic Details On Our Official Portal.", num: "01" },
  { icon: PenTool, title: "Entrance Examination", desc: "Appear For The State/National Level B.Ed Entrance Exam. Prepare With Our Recommended Study Materials.", num: "02" },
  { icon: ListChecks, title: "Merit List & Counseling", desc: "Based On Entrance Scores, Merit Lists Are Published. Attend Counseling Sessions For Seat Allocation.", num: "03" },
  { icon: UserCheck, title: "Document Verification", desc: "Submit Original Documents For Verification. Complete Fee Payment And Secure Your Admission.", num: "04" },
  { icon: GraduationCap, title: "Welcome to B.Ed!", desc: "Congratulations! Begin Your Journey As a Future Educator With Orientation And Induction Programs.", num: "05" },
];

const ProcessSection = () => (
  <section id="process" className="section-padding gradient-warm">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Step by Step</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Admission <span className="text-gradient-saffron">Process</span>
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-px hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1 lg:text-right">
                  {i % 2 === 0 && (
                    <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-saffron transition-shadow">
                      <span className="text-5xl font-display font-bold text-saffron-100">{step.num}</span>
                      <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center icon */}
                <div className="relative z-10 w-14 h-14 rounded-full gradient-saffron flex items-center justify-center shadow-saffron flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div className="flex-1">
                  {i % 2 !== 0 && (
                    <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-saffron transition-shadow">
                      <span className="text-5xl font-display font-bold text-saffron-100">{step.num}</span>
                      <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
