import { AlertCircle, Factory, TrendingDown, Users } from 'lucide-react';

export function ProblemStatement() {
  const problems = [
    {
      icon: Factory,
      title: 'Mass Production Issues',
      description: 'Mass-produced spice powders often contain added colors, preservatives, and fillers that compromise both taste and nutrition.'
    },
    {
      icon: Users,
      title: 'Health-Conscious Consumers',
      description: 'Today\'s consumers are increasingly aware of the nutrients in their food, seeking authentic and clean-label products.'
    },
    {
      icon: TrendingDown,
      title: 'Fading Traditions',
      description: 'The traditional practice of blending handcrafted spices at home is disappearing, taking with it centuries of culinary heritage.'
    },
    {
      icon: AlertCircle,
      title: 'Market Gap',
      description: 'There is a significant gap in the market for products that combine nutritional innovation with authentic, traditional methods.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              The Problem We're Solving
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Pureblend addresses the critical gap between modern wellness needs and authentic spice traditions
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statement */}
          <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border">
            <p className="text-lg md:text-xl text-center text-foreground/90 leading-relaxed">
              Pureblend Spice Private Limited is solving the problem of unhealthy, mass-produced spice powders by reviving heritage methods and ensuring clean-label products that meet modern wellness needs while supporting sustainable sourcing from women-led farmer groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
