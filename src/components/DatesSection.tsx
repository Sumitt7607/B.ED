import AnimatedSection from "./AnimatedSection";
import { Calendar, Clock } from "lucide-react";

const dates = [
  { event: "Application Forms Start", date: "April 1, 2026", status: "Open" },
  { event: "Last Date of Online Registration", date: "May 30, 2026", status: "Upcoming" },
  { event: "B.Ed Entrance Examination", date: "June 15, 2026", status: "Upcoming" },
  { event: "Result Declaration", date: "July 5, 2026", status: "Upcoming" },
  { event: "Counselling & Seat Allotment (Round 1)", date: "July 15–20, 2026", status: "Upcoming" },
  { event: "Document Verification & Fee Submission", date: "July 25–30, 2026", status: "Upcoming" },
  { event: "Commencement of Classes (Session 2026–28)", date: "August 20, 2026", status: "Upcoming" },
];

const DatesSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-saffron-600 font-semibold text-base uppercase tracking-widest mb-3 text-center">
          Admission Timeline 2026–28
        </p>

        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16">
          Important <span className="text-gradient-saffron">B.Ed Dates</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-6">
        {dates.map((d, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-center gap-6 bg-card rounded-2xl p-6 shadow-card hover:shadow-saffron transition-all border border-border">
              
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  d.status === "Open"
                    ? "gradient-saffron animate-pulse-glow"
                    : "bg-muted"
                }`}
              >
                {d.status === "Open" ? (
                  <Clock className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                )}
              </div>

              {/* Event Name */}
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {d.event}
                </h3>
              </div>

              {/* Date */}
              <div className="text-right">
                <span className="text-lg md:text-xl font-semibold text-foreground">
                  {d.date}
                </span>

                {d.status === "Open" && (
                  <span className="block text-xs gradient-saffron text-primary-foreground px-3 py-1 rounded-full mt-2 w-fit ml-auto font-bold">
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