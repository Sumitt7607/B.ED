import AnimatedSection from "./AnimatedSection";
import { BookOpen, Target, Heart, Lightbulb } from "lucide-react";
import studentsImg from "@/assets/students-classroom.webp";

const features = [
  { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Covers Pedagogy, Psychology, Educational Technology, and Practical Teaching Methods." },
  { icon: Target, title: "NCTE Approved", desc: "Fully Recognized By The National Council For Teacher Education with Modern Standards." },
  { icon: Heart, title: "Holistic Development", desc: "Focus On Personality Development, Communication Skills, And Emotional Intelligence." },
  { icon: Lightbulb, title: "Innovation In Teaching", desc: "Learn Modern Teaching Tools Including Smart Classrooms And Digital Pedagogy." },
];

const AboutSection = () => (
  <section id="about" className="section-padding gradient-warm">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About The Program</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          What Is <span className="text-gradient-saffron">B.Ed?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
          The Bachelor Of Education (B.Ed) Is a Two-Year Professional Degree That Prepares Graduates To Become 
          Qualified Teachers In Secondary And Higher Secondary Schools.It Is a Mandatory Requirement For Teaching. In Government And Private Schools Across India.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={studentsImg} alt="Students in classroom" className="w-full h-[400px] object-cover" />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="right">
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-saffron transition-shadow duration-300 group">
                <div className="w-12 h-12 rounded-lg gradient-saffron flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
