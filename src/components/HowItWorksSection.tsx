import { Search, Filter, CheckCircle, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Berätta om dig",
    description: "Svara på några snabba frågor om dina mål, budget och intressen.",
  },
  {
    icon: Filter,
    title: "Få matchningar",
    description: "Vi jämför hundratals program och visar de som passar dig bäst.",
  },
  {
    icon: CheckCircle,
    title: "Jämför & välj",
    description: "Se priser, omdömen och villkor sida vid sida. Välj rätt program.",
  },
  {
    icon: Plane,
    title: "Boka & res",
    description: "Ansök direkt via oss eller kontakta arrangören. Vi hjälper dig hela vägen.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Så fungerar det
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Från dröm till verklighet på fyra enkla steg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center shadow-soft mb-6">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-soft">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
