import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, AlertCircle } from "lucide-react";

const criteria = [
  { 
    text: "Bachelor’s Degree (B.A / B.Sc / B.Com) Or Equivalent With At Least 50% Aggregate Marks From a Recognized University", 
    required: true 
  },
  { 
    text: "Minimum 55% Marks Required For Candidates With a Master’s Degree (As Per NCTE Norms)", 
    required: false 
  },
  { 
    text: "Relaxation Of 5% Marks (45%) For SC/ST/OBC/PWD And Other Reserved Categories As Per Government Rules", 
    required: true 
  },
  { 
    text: "Admission Is Generally Based On Performance In State-Level Or University-Level Entrance Examinations", 
    required: true 
  },
  { 
    text: "Candidates Appearing In The Final Year Of Graduation Are Eligible To Apply, Subject To Submission Of Final Marksheet At The Time Of Admission", 
    required: false 
  },
  { 
    text: "Age Criteria May Vary By State Or University; Most Institutions Do Not Have An Upper Age Limit", 
    required: false 
  },
];
const documents = [
  "10th Mark Sheet & Certificate (For Date Of Birth Proof)",
  "12th Mark Sheet & Certificate",
  "Graduation Mark Sheets (All Years/Semesters)",
  "Graduation Degree / Provisional Certificate",
  "Entrance Exam Score Card / Admit Card (If Applicable)",
  "Transfer Certificate (TC) From Last Attended Institution",
  "Migration Certificate (If From Another University)",
  "Category Certificate (SC/ST/OBC/EWS) – If Applicable",
  "PWD Certificate – If Applicable",
  "Valid Government ID Proof (Aadhaar Card / PAN / Voter ID)",
  "Recent Passport Size Photographs",
  "Gap Certificate (If There Is A Study Gap)",
  "Domicile Certificate (If Required By State University)",
];
const EligibilitySection = () => (
  <section id="eligibility" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Requirements</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
          Eligibility <span className="text-gradient-saffron">Criteria</span>
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Eligibility */}
        <AnimatedSection direction="left">
          <div className="bg-card rounded-2xl p-8 shadow-card h-full">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-saffron flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              Who Can Apply?
            </h3>
            <div className="space-y-4">
              {criteria.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.required ? "text-primary" : "text-saffron-300"}`} />
                  <span className="text-foreground leading-relaxed">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Documents */}
        <AnimatedSection direction="right">
          <div className="bg-card rounded-2xl p-8 shadow-card h-full">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-saffron flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              Required Documents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3 text-sm text-foreground"
                >
                  <span className="w-6 h-6 rounded-full gradient-saffron text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EligibilitySection;
