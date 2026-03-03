import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What Is The Duration Of The B.Ed Program?", a: "The B.Ed Program Is a 2-Year (4 Semesters) Full-Time Course As Per NCTE Norms. It Includes Both Theoretical Studies And Practical School Internships." },
  { q: "Is B.Ed Compulsory For Becoming A Teacher?", a: "Yes, B.Ed Is Mandatory For Teaching At Secondary And Higher Secondary Levels In Both Government And Private Schools In India, As Per The RTE Act 2009." },
  { q: "Can I pursue B.Ed Through Distance Learning?", a: "Yes, Some Universities Offer B.Ed Through ODL (Open Distance Learning) Mode Approved By NCTE. However, Regular Mode Is Preferred By Most Employers." },
  { q: "What Are The Entrance Exams For B.Ed?", a: "Popular Entrance Exams Include State-Level B.Ed Entrance Tests, BHU B.Ed, DU B.Ed, IGNOU B.Ed, UP B.Ed JEE, MAH B.Ed CET, And Others." },
  { q: "Are There Scholarships Available?", a: "Yes! We offer Merit-Based Scholarships Up To 50%, SC/ST Fee Concessions, And Education Loans Through Partnered Banks." },
  { q: "What Subjects Can I Specialize In?", a: "You Can Choose From Various Teaching Subjects Like Mathematics, Science, Social Studies, English, Hindi, Computer Science, And Commerce Based On Your Graduation Background." },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Got Questions?</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Frequently Asked <span className="text-gradient-saffron">Questions</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-6 shadow-card"
            >
              <AccordionTrigger className="font-display font-bold text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
