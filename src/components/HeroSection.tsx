import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Users, Award } from "lucide-react";
import heroCampus from "@/assets/hero-campus.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
  
      <div className="absolute inset-0">
        <img src={heroCampus} alt="University Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
        <div className="absolute top-6 left-6 z-20">
  <img 
    src="/image.png" 
    alt="B.Ed Admission Logo" 
    className="h-28 md:h-36 lg:h-44 w-auto object-contain drop-shadow-2xl"
  />
</div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block gradient-saffron px-4 py-1.5 rounded-full text-primary-foreground text-sm font-semibold mb-6"
          >
            Admissions Open 2026-27  
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6"
          >
            Bachelor of
            <br />
            <span className="text-saffron-300">Education</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-saffron-100 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body"
          >
            Shape The Future Of Education. Join Our NCTE-Approved B.Ed Program And Become a Certified, 
            Passionate Educator Ready To Inspire The Next Generation.
          </motion.p>

         

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: BookOpen, value: "2 Years", label: "Duration" },
              { icon: Users, value: "5000+", label: "Graduates" },
              { icon: Award, value: "NCTE", label: "Approved" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 text-saffron-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground font-display">{stat.value}</div>
                <div className="text-saffron-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-saffron-300" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
