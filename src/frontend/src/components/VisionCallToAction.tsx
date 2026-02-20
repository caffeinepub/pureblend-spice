import { Sparkles, Target, Mail, ArrowRight } from 'lucide-react';

export function VisionCallToAction() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Building the Future
            </h2>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                To revive the handcrafted spice traditions of our heritage while innovating for modern nutrition, creating a bridge between ancestral wisdom and contemporary wellness needs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                To deliver authentic, nutrient-rich spice blends that empower women farmers and delight consumers, creating a sustainable ecosystem of health, heritage, and community prosperity.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Join Us in This Journey
              </h3>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                We're seeking partners and investors who share our vision of transforming the spice industry through authenticity, nutrition, and social impact.
              </p>

              {/* Investment Ask */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                    Investment Opportunity
                  </h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Seeking investment for scaling production, branding, and distribution to bring Pureblend to markets worldwide.
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                    Partnership Opportunities
                  </h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Collaborating with wellness retailers and e-commerce platforms to reach health-conscious consumers.
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground font-medium">
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>Contact Us for Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
