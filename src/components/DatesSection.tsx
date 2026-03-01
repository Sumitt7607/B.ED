import AnimatedSection from "./AnimatedSection";
import { Calendar, Clock } from "lucide-react";

const dates = [
  { event: "Application Form Available", date: "March 15, 2026", status: "open" },
  { event: "Last Date for Registration", date: "May 31, 2026", status: "upcoming" },
  { event: "Entrance Exam Date", date: "June 20, 2026", status: "upcoming" },
  { event: "Result Declaration", date: "July 10, 2026", status: "upcoming" },
  { event: "Counseling Round 1", date: "July 20-25, 2026", status: "upcoming" },
  { event: "Counseling Round 2", date: "August 1-5, 2026", status: "upcoming" },
  { event: "Classes Commence", date: "August 20, 2026", status: "upcoming" },
];

const DatesSection = () => (
  <section className="section-padding gradient-warm">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Timeline</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Important <span className="text-gradient-saffron">Dates</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-4">
        {dates.map((d, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-saffron transition-shadow border border-border">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                d.status === "open" ? "gradient-saffron animate-pulse-glow" : "bg-muted"
              }`}>
                {d.status === "open" ? (
                  <Clock className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">{d.event}</h3>
              </div>
              <div className="text-right">
                <span className="font-semibold text-foreground">{d.date}</span>
                {d.status === "open" && (
                  <span className="block text-xs gradient-saffron text-primary-foreground px-2 py-0.5 rounded-full mt-1 w-fit ml-auto font-bold">
                    OPEN NOW
                  </span>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DatesSection;
