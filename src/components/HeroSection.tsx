import { CheckCircle, Sparkles } from "lucide-react";
import { DestinationSearch } from "./DestinationSearch";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-accent/30" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />
      
      {/* Decorative dots */}
      <div className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-48 right-[20%] w-3 h-3 rounded-full bg-primary/15 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-[25%] w-2.5 h-2.5 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 text-sm font-medium border border-primary/15 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>100% gratis jämförelsetjänst</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.15] tracking-tight">
              Hitta din väg
              <span className="block text-primary">ut i världen</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Få all den information som just du behöver innan ditt stora äventyr
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { text: "Ingen kostnad", emoji: "💰" },
                { text: "Oberoende jämförelser", emoji: "⚖️" },
                { text: "Svenska partners", emoji: "🇸🇪" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 text-sm text-muted-foreground shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <span>{badge.emoji}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <DestinationSearch />
          </div>

          {/* Social proof */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2 000+</span> svenskar har hittat sitt äventyr via Farway
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
