import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'pureblend-spice';

  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center space-y-6 mb-8">
            <h3 className="text-3xl font-bold text-foreground font-serif">
              Pureblend Spice
            </h3>
            <p className="text-lg text-muted-foreground italic">
              Pure Taste. Pure Health. Pureblend.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Attribution */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pureblend Spice Private Limited. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with{' '}
              <Heart className="w-4 h-4 text-primary fill-primary" />
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
