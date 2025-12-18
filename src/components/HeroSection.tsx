import { CheckCircle } from "lucide-react";
import { DestinationSearch } from "./DestinationSearch";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">100% gratis guide & jämförelsetjänst</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Hitta din väg ut i världen
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sök på din drömdestination och få alla viktiga resurser, visum-info och tips samlat på ett ställe.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Ingen kostnad", "Oberoende jämförelser", "Svenska partners"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Search */}
          <div>
            <DestinationSearch />
          </div>
        </div>
      </div>
    </section>
  );
};
