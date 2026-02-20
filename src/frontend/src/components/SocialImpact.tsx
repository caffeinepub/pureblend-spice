import { Users, Heart, Sprout, TrendingUp } from 'lucide-react';

export function SocialImpact() {
  const impacts = [
    {
      icon: Users,
      title: 'Women-Led FPOs',
      description: 'Direct sourcing from women-led Farmer Producer Organizations'
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'Ensuring fair compensation and sustainable partnerships'
    },
    {
      icon: Sprout,
      title: 'Sustainable Agriculture',
      description: 'Supporting eco-friendly farming practices and local agriculture'
    },
    {
      icon: TrendingUp,
      title: 'Community Empowerment',
      description: 'Building a supply chain that uplifts women entrepreneurs'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Social Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Empowering Communities
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Every blend supports rural women farmers and sustainable agriculture
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img
                  src="/assets/generated/women-farmers.dim_800x600.png"
                  alt="Women farmers partnership"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>

            {/* Impact Points */}
            <div className="order-1 lg:order-2 space-y-6">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <impact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {impact.title}
                    </h4>
                    <p className="text-base text-muted-foreground">
                      {impact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Traceability & Authenticity
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our direct partnerships with women-led FPOs ensure complete traceability of ingredients from farm to package. This transparency guarantees authenticity while supporting local agriculture and preserving traditional farming knowledge.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Community-Driven Supply Chain
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                By building a community-driven supply chain, we create lasting economic opportunities for rural women. Our model ensures fair prices, sustainable practices, and the empowerment of women entrepreneurs across farming communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
