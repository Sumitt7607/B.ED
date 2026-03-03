import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-xl font-bold">
          <GraduationCap className="w-7 h-7 text-saffron-300" />
          B.Ed Admissions 2026
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-saffron-200">
          <a href="about" className="hover:text-saffron-300 transition-colors">About</a>
          <a href="eligibility" className="hover:text-saffron-300 transition-colors">Eligibility</a>
          <a href="process" className="hover:text-saffron-300 transition-colors">Process</a>
          <a href="curriculum" className="hover:text-saffron-300 transition-colors">Curriculum</a>
          <a href="careers" className="hover:text-saffron-300 transition-colors">Careers</a>
          <a href="contact" className="hover:text-saffron-300 transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-saffron-800 mt-8 pt-8 text-center text-sm text-saffron-300">
        © 2026 College of Education. All rights reserved. | NCTE Approved Institution
      </div>
    </div>
  </footer>
);

export default Footer;
