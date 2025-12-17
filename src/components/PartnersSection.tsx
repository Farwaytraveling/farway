import { ExternalLink, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "EF Education First",
    logo: "EF",
    description: "Världens största utbildningsföretag. Språkkurser, studieresor och volontärprogram.",
    features: ["Språkkurser", "Studieresor", "Karriärprogram"],
    rating: 4.5,
    url: "https://www.ef.se",
    tag: "Populärt val",
  },
  {
    name: "Kilroy",
    logo: "K",
    description: "Skandinaviens största resebyrå för unga. Specialister på Working Holiday och äventyrsresor.",
    features: ["Working Holiday", "Äventyrsresor", "Flygbiljetter"],
    rating: 4.3,
    url: "https://www.kilroy.se",
    tag: "Bäst för WHV",
  },
  {
    name: "Workaway",
    logo: "W",
    description: "Byt arbete mot mat och boende världen över. Perfekt för budgetmedvetna resenärer.",
    features: ["Volontärarbete", "Kulturutbyte", "Budgetvänligt"],
    rating: 4.6,
    url: "https://www.workaway.info",
    tag: "Bäst för volontär",
  },
  {
    name: "Cultural Care Au Pair",
    logo: "CC",
    description: "USA:s största au pair-program. Professionellt stöd och trygg process.",
    features: ["Au Pair USA", "Visum-stöd", "24/7 support"],
    rating: 4.4,
    url: "https://www.culturalcare.se",
    tag: "Bäst för Au Pair",
  },
  {
    name: "WWOOF",
    logo: "WF",
    description: "World Wide Opportunities on Organic Farms. Jobba på ekologiska gårdar världen över.",
    features: ["Ekologiska gårdar", "Farm stay", "Lär dig odla"],
    rating: 4.2,
    url: "https://wwoof.net",
    tag: "Bäst för farm",
  },
  {
    name: "STA Travel",
    logo: "STA",
    description: "Specialister på student- och ungdomsresor. Flexibla flygbiljetter och paket.",
    features: ["Flygbiljetter", "Reseförsäkring", "Studentrabatt"],
    rating: 4.1,
    url: "https://www.statravel.se",
    tag: "Bäst för flyg",
  },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">100% gratis att jämföra</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Våra samarbetspartners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi samarbetar med de bästa företagen för utlandsäventyr. Jämför och hitta rätt tjänst för dig – helt kostnadsfritt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {partner.logo}
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {partner.tag}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {partner.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(partner.rating) ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">{partner.rating}</span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {partner.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {partner.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 rounded-lg bg-secondary text-xs text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
              >
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  Besök {partner.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
