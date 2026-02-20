import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-spices.dim_1920x800.png"
          alt="Artisanal spice blends"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand Mark */}
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary drop-shadow-lg" />
            <div className="h-8 w-px bg-primary/30" />
            <Sparkles className="w-8 h-8 text-accent drop-shadow-lg" />
          </div>

          {/* Company Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-hero-yellow tracking-tight"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            Pureblend Spice
          </h1>

          {/* Tagline */}
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-hero-yellow font-semibold"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.2)'
            }}
          >
            Pure Taste. Pure Health. Pureblend.
          </p>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <p 
              className="text-lg md:text-xl text-hero-yellow leading-relaxed font-medium"
              style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              Pureblend Spice Private Limited is a handcrafted spice blend company committed to reviving the forgotten tradition of authentic spice mixing while addressing modern nutritional needs.
            </p>
            <p 
              className="text-base md:text-lg text-hero-yellow leading-relaxed"
              style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              Unlike mass-produced powders that often contain artificial colors and preservatives, Pureblend offers clean-label blends enriched with functional ingredients like moringa and curry leaves, delivering both flavor and wellness.
            </p>
            <p 
              className="text-base md:text-lg text-hero-yellow leading-relaxed"
              style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              Our mission extends beyond product innovation—we actively source raw materials from women-led Farmer Producer Organizations (FPOs), empowering rural communities and fostering sustainable agriculture.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rounded-full bg-primary shadow-lg" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
