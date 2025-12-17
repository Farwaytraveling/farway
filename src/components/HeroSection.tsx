import { Button } from "@/components/ui/button";
import { Search, MapPin, Sparkles, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-up">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">100% gratis guide & jämförelsetjänst</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Din guide till{" "}
            <span className="text-primary relative">
              Australien
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            {" "}🇦🇺
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Jämför Working Holiday, volontärprogram och studieresor. Vi har samlat alla viktiga länkar, 
            tips och partners på ett ställe – så du kan fokusera på äventyret.
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

          {/* Search box */}
          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-2xl shadow-medium p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Sök program, destination eller tjänst..."
                  className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="hero" size="lg" className="sm:w-auto w-full">
                <Search className="w-5 h-5" />
                Sök
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "6+", label: "Partners" },
              { value: "100+", label: "Resurser" },
              { value: "Gratis", label: "Alltid" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
