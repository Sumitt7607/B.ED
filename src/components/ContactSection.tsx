import AnimatedSection from "./AnimatedSection";
import { Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-warm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
            Contact & <span className="text-gradient-saffron">Us</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          {/* Helpline + Office Hours Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Admission Helpline */}
            <div className="gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">
                Admission Helpline
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-saffron-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-saffron-200">+91 9650831008</p>
                    <p className="text-saffron-200">+91 9910992965</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-saffron-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Company Website</p>
                    <a
                      href="https://career4s.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-saffron-200 underline hover:text-white transition"
                    >
                      www.career4s.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-saffron-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-saffron-200">
                     119,First Floor, Dlf Tower- A Jasola,
                      <br />
                      New Delhi - 110025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Office Hours
              </h3>

              <div className="space-y-4 text-foreground">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  
                </div>
                 <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                 <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Wednesday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;