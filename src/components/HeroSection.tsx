import { ArrowDownRight, Sparkles } from "lucide-react";
import { DestinationSearch } from "./DestinationSearch";

export const HeroSection = () => {
  return (
    <section className="relative border-b border-border/60 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--accent)/0.35))]" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="flex items-center justify-between gap-4 border-y border-border/60 py-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>100% gratis guide</span>
          </div>
          <span className="hidden sm:inline">Sverige → världen</span>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Editorial guide för unga svenskar
            </p>
            <h1 className="font-display text-5xl font-light leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl md:text-7xl lg:text-[92px]">
              Hitta din väg
              <span className="block italic text-primary">ut i världen.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-base leading-8 text-muted-foreground sm:text-lg">
              Allt du behöver för Working Holiday, skidsäsong, studier och Au Pair — samlat på ett snyggare,
              smartare och mer inspirerande sätt.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-8">
            <div className="border border-border/60 bg-card/70 p-3 shadow-soft backdrop-blur-sm sm:p-4">
              <DestinationSearch />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between border border-border/60 bg-secondary/30 p-6">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Just nu i fokus
                </p>
                <div className="space-y-3">
                  {[
                    "Australien & NZ för Working Holiday",
                    "London, Paris & Barcelona",
                    "Skidsäsong i Alperna",
                  ].map((item) => (
                    <div key={item} className="border-b border-border/50 pb-3 text-sm text-foreground last:border-b-0 last:pb-0">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                <span>Scrolla vidare</span>
                <ArrowDownRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
