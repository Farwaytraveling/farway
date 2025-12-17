import { CheckCircle, Sparkles } from "lucide-react";
import { DestinationSearch } from "./DestinationSearch";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-up">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">100% gratis guide & jämförelsetjänst</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
              Vart vill du{" "}
              <span className="text-primary relative">
                resa?
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" fill="none">
                  <path d="M2 10C20 4 40 2 50 6C60 10 80 4 98 8" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Sök på din drömdestination och få alla viktiga resurser, visum-info och tips på ett ställe.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              {["Ingen kostnad", "Oberoende jämförelser", "Svenska partners"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <DestinationSearch />
          </div>
        </div>
      </div>
    </section>
  );
};
