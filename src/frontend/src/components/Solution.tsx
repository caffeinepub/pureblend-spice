import { CheckCircle2, Leaf, Sparkles, Heart } from 'lucide-react';

export function Solution() {
  const features = [
    {
      title: 'Preservative-Free',
      description: 'No artificial preservatives or chemicals—just pure, natural ingredients'
    },
    {
      title: 'No Artificial Colors',
      description: 'Natural colors from real spices, maintaining authentic appearance and flavor'
    },
    {
      title: 'Handcrafted Quality',
      description: 'Traditional blending techniques that preserve natural aroma and taste'
    },
    {
      title: 'Clean Label',
      description: 'Complete transparency in ingredients—what you see is what you get'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Handcrafted Excellence
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Pureblend offers authentic spice blends that combine tradition with nutritional innovation
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Features List */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground mb-8">
                What Makes Us Different
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nutritional Enhancement */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/assets/generated/moringa-icon.dim_128x128.png"
                    alt="Moringa"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-foreground">Moringa</h4>
                    <p className="text-sm text-muted-foreground">Superfood Enhancement</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Rich in vitamins, minerals, and antioxidants, moringa adds a powerful nutritional boost to our blends while maintaining authentic flavor profiles.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/assets/generated/curry-leaves-icon.dim_128x128.png"
                    alt="Curry Leaves"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-foreground">Curry Leaves</h4>
                    <p className="text-sm text-muted-foreground">Traditional Wellness</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A staple in traditional cooking, curry leaves provide digestive benefits and aromatic depth, connecting heritage with health.
                </p>
              </div>
            </div>
          </div>

          {/* USP Highlight */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <Heart className="w-6 h-6" />
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                A Fusion of Tradition and Innovation
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Pureblend brings back heritage spice blending with added nutritional value, creating products that honor the past while nourishing the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
