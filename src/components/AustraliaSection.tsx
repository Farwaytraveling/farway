import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, DollarSign, Briefcase, FileCheck, Plane, Users } from "lucide-react";

const australiaResources = [
  {
    category: "Visum & Myndigheter", icon: FileCheck,
    links: [
      { name: "Working Holiday Visa (subclass 417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", official: true },
      { name: "Svenska ambassaden i Canberra", url: "https://www.swedenabroad.se/canberra", official: true },
      { name: "Tax File Number (TFN)", url: "https://www.ato.gov.au/individuals/tax-file-number/", official: true },
    ],
  },
  {
    category: "Jobba i Australien", icon: Briefcase,
    links: [
      { name: "Seek - Australiens största jobbsajt", url: "https://www.seek.com.au", official: false },
      { name: "Indeed Australia", url: "https://au.indeed.com", official: false },
      { name: "Backpacker Job Board", url: "https://www.backpackerjobboard.com.au", official: false },
      { name: "Harvest Trail - Farm Jobs", url: "https://jobsearch.gov.au/harvest", official: true },
    ],
  },
  {
    category: "Boende", icon: MapPin,
    links: [
      { name: "Flatmates.com.au", url: "https://flatmates.com.au", official: false },
      { name: "Gumtree Australia", url: "https://www.gumtree.com.au", official: false },
      { name: "Hostelworld", url: "https://www.hostelworld.com", official: false },
    ],
  },
  {
    category: "Communities & Tips", icon: Users,
    links: [
      { name: "Svenska i Australien (Facebook)", url: "https://www.facebook.com/groups/svenskaiAustralien", official: false },
      { name: "Backpackers in Australia", url: "https://www.facebook.com/groups/backpackersinaustralia", official: false },
      { name: "r/australia (Reddit)", url: "https://www.reddit.com/r/australia", official: false },
    ],
  },
];

const quickFacts = [
  { icon: Calendar, label: "Visum giltighetstid", value: "12 månader" },
  { icon: DollarSign, label: "Visumavgift", value: "~$510 AUD" },
  { icon: Briefcase, label: "Max arbete/arbetsgivare", value: "6 månader" },
  { icon: Plane, label: "Ålderskrav", value: "18-30 år" },
];

export const AustraliaSection = () => {
  return (
    <section id="australia" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop" alt="Sydney Opera House" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/15">
            <span className="text-2xl">🇦🇺</span>
            <span className="text-sm font-medium">Mest populära destinationen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Allt du behöver för Australien
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alla resurser, visum-info och tips för ditt äventyr Down Under.
          </p>
        </div>

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/60 text-center hover:shadow-md hover:border-primary/20 transition-all">
              <fact.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
              <p className="font-display font-semibold text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {australiaResources.map((category) => (
            <div key={category.category} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/60 hover:shadow-md hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{category.category}</h3>
              </div>
              <div className="space-y-2">
                {category.links.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-muted/40 hover:bg-primary/5 transition-colors group">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground group-hover:text-primary transition-colors text-sm">{link.name}</span>
                      {link.official && (
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">Officiell</span>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Vill du ha hjälp att planera din resa? Våra partners kan hjälpa dig.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="rounded-xl">
              <a href="https://www.kilroy.se/australien" target="_blank" rel="noopener noreferrer">
                Boka via Kilroy
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <a href="https://www.ef.se/pg/sprakresa-australien/" target="_blank" rel="noopener noreferrer">
                Språkresa med EF
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};