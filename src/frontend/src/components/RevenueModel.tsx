import { ShoppingBag, Store, RefreshCw, Package } from 'lucide-react';

export function RevenueModel() {
  const channels = [
    {
      icon: ShoppingBag,
      title: 'Direct-to-Consumer',
      description: 'E-commerce marketplaces and branded online store targeting wellness-focused consumers',
      features: ['Online marketplace presence', 'Branded e-commerce platform', 'Digital marketing campaigns']
    },
    {
      icon: Store,
      title: 'Retail Partnerships',
      description: 'Strategic partnerships with health-focused outlets and gourmet food stores',
      features: ['Wellness retail outlets', 'Gourmet food stores', 'Specialty health cafés']
    },
    {
      icon: RefreshCw,
      title: 'Subscription Model',
      description: 'Recurring revenue through regular spice blend deliveries to loyal customers',
      features: ['Monthly spice boxes', 'Customizable subscriptions', 'Loyalty rewards program']
    },
    {
      icon: Package,
      title: 'Premium Offerings',
      description: 'Higher-margin opportunities through premium packaging and limited editions',
      features: ['Gift sets and hampers', 'Limited-edition blends', 'Custom corporate gifting']
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-medium">Revenue Model</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Multi-Channel Strategy
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Building sustainable revenue through diverse sales channels and customer touchpoints
            </p>
          </div>

          {/* Revenue Channels */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 shadow-soft"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <channel.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {channel.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-20">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border border-accent/20">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Sustainable & Scalable Growth
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                By aligning product innovation with consumer wellness trends and leveraging socially responsible sourcing from women-led FPOs, Pureblend aims to build a sustainable and scalable revenue stream that benefits all stakeholders—from farmers to consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
