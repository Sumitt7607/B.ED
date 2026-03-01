import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the duration of the B.Ed program?", a: "The B.Ed program is a 2-year (4 semesters) full-time course as per NCTE norms. It includes both theoretical studies and practical school internships." },
  { q: "Is B.Ed compulsory for becoming a teacher?", a: "Yes, B.Ed is mandatory for teaching at secondary and higher secondary levels in both government and private schools in India, as per the RTE Act 2009." },
  { q: "Can I pursue B.Ed through distance learning?", a: "Yes, some universities offer B.Ed through ODL (Open Distance Learning) mode approved by NCTE. However, regular mode is preferred by most employers." },
  { q: "What are the entrance exams for B.Ed?", a: "Popular entrance exams include state-level B.Ed entrance tests, BHU B.Ed, DU B.Ed, IGNOU B.Ed, UP B.Ed JEE, MAH B.Ed CET, and others." },
  { q: "Are there scholarships available?", a: "Yes! We offer merit-based scholarships up to 50%, SC/ST fee concessions, and education loans through partnered banks." },
  { q: "What subjects can I specialize in?", a: "You can choose from various teaching subjects like Mathematics, Science, Social Studies, English, Hindi, Computer Science, and Commerce based on your graduation background." },
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
