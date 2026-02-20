import { TrendingUp, Target, Globe, Award } from 'lucide-react';

export function MarketOpportunity() {
  const opportunities = [
    {
      icon: TrendingUp,
      title: 'Clean-Label Demand',
      description: 'Rising consumer demand for functional foods and transparent ingredient lists'
    },
    {
      icon: Globe,
      title: 'Global Growth',
      description: 'Spice market projected to grow steadily with focus on health and wellness'
    }
  ];

  const customers = [
    {
      icon: Target,
      title: 'Health-Conscious Families',
      description: 'Families seeking nutritious, authentic ingredients for daily cooking'
    },
    {
      icon: Award,
      title: 'Millennials',
      description: 'Young consumers valuing authentic, eco-friendly, and ethically sourced products'
    },
    {
      icon: Globe,
      title: 'Export Markets',
      description: 'International markets appreciating nutritional innovation in traditional foods'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Market Opportunity</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              A Growing Market
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Positioned at the intersection of wellness, authenticity, and sustainability
            </p>
          </div>

          {/* Market Trends */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-soft"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <opportunity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {opportunity.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Target Customers */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-foreground text-center mb-10">
              Target Customers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <customer.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {customer.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {customer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Positioning */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center space-y-4">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Premium Wellness Brand
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Pureblend Spice is uniquely positioned as a premium wellness brand that bridges the gap between traditional authenticity and modern nutritional science, appealing to discerning consumers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
