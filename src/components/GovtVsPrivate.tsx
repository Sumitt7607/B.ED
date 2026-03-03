import { motion } from "framer-motion";
import { Building2, Landmark, IndianRupee, GraduationCap, Clock, Award, Users, BookOpen } from "lucide-react";

const govtFeatures = [
  { icon: IndianRupee, title: "Low Fees", desc: "₹5,000 – ₹25,000 per year" },
  { icon: Award, title: "High Recognition", desc: "NCTE & UGC approved, widely accepted" },
  { icon: Users, title: "Competitive Admission", desc: "Merit-based through entrance exams" },
  { icon: Clock, title: "Duration", desc: "2 years (regular mode)" },
];

const privateFeatures = [
  { icon: IndianRupee, title: "Higher Fees", desc: "₹50,000 – ₹2,00,000 per year" },
  { icon: BookOpen, title: "Modern Facilities", desc: "Better infrastructure & resources" },
  { icon: Users, title: "Easier Admission", desc: "Entrance + management quota seats" },
  { icon: Clock, title: "Duration", desc: "2 years (regular & distance)" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const GovtVsPrivate = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-saffron/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-saffron-light/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron-dark text-sm font-semibold mb-4 border border-saffron/20"
            whileHover={{ scale: 1.05 }}
          >
            Compare & Decide
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Govt <span className="text-primary">vs</span> Private B.Ed Colleges
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Make an informed decision by comparing fees, admission process, and recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Govt Card */}
          <motion.div
            className="rounded-2xl border-2 border-saffron/30 bg-card p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px -15px hsl(25 95% 53% / 0.2)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-dark via-primary to-saffron-light"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Landmark className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Government</h3>
                <p className="text-sm text-muted-foreground">B.Ed Colleges</p>
              </div>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {govtFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/60 hover:bg-saffron/5 transition-colors"
                  whileHover={{ x: 6 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-6 p-3 rounded-xl bg-saffron/5 border border-saffron/10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm font-medium text-saffron-dark">✅ Best for budget-conscious students</p>
            </motion.div>
          </motion.div>

          {/* Private Card */}
          <motion.div
            className="rounded-2xl border-2 border-accent/30 bg-card p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px -15px hsl(15 90% 58% / 0.2)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-saffron-glow to-saffron-light"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center"
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <Building2 className="w-7 h-7 text-accent" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Private</h3>
                <p className="text-sm text-muted-foreground">B.Ed Colleges</p>
              </div>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {privateFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/60 hover:bg-accent/5 transition-colors"
                  whileHover={{ x: 6 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-6 p-3 rounded-xl bg-accent/5 border border-accent/10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm font-medium text-burnt-orange">🏫 Best for modern facilities & flexibility</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GovtVsPrivate;
