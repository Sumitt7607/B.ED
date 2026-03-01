import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EligibilitySection from "@/components/EligibilitySection";
import ProcessSection from "@/components/ProcessSection";
import CurriculumSection from "@/components/CurriculumSection";
import CareersSection from "@/components/CareersSection";
import FeeSection from "@/components/FeeSection";
import DatesSection from "@/components/DatesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* <Navbar /> */}
    <HeroSection />
    <AboutSection />
    <EligibilitySection />
    <ProcessSection />
    {/* <CurriculumSection /> */}
    <CareersSection />
    {/* <FeeSection /> */}
    {/* <DatesSection />
    <WhyUsSection />
    <TestimonialsSection />
    <FAQSection /> */}
    <ContactSection />
    {/* <Footer /> */}
  </div>
);

export default Index;
