import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mountain, MapPin, Snowflake, Sun, ArrowRight, Briefcase, Users, Home as HomeIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const alpineDestinations = [
  {
    country: "Frankrike",
    flag: "🇫🇷",
    regions: ["Chamonix", "Val d'Isère", "Méribel", "Les Deux Alpes"],
    description: "Frankrike har Europas största sammanhängande skidområden och en otrolig matkultur. Perfekt för dig som vill kombinera skidåkning med gastronomi.",
    highlights: ["Störst skidområden", "Fantastisk mat", "Livlig après-ski"],
    activities: ["Skidsäsong", "Au Pair", "Språkresa", "Sommarvandring"],
    season: "Dec–Apr (vinter) / Jun–Sep (sommar)",
    slug: "frankrike",
  },
  {
    country: "Schweiz",
    flag: "🇨🇭",
    regions: ["Zermatt", "Verbier", "St. Moritz", "Davos"],
    description: "Schweiz erbjuder de högsta lönerna i Alperna, spektakulära glaciärer och året-runt-skidåkning på vissa orter.",
    highlights: ["Högst löner", "Glaciärskidåkning", "Lyxorter"],
    activities: ["Skidsäsong", "Au Pair", "Vandring"],
    season: "Nov–Apr (vinter) / Jun–Sep (sommar)",
    slug: "schweiz",
  },
  {
    country: "Österrike",
    flag: "🇦🇹",
    regions: ["St. Anton", "Ischgl", "Kitzbühel", "Sölden", "Mayrhofen"],
    description: "Österrike är hjärtat av alpkulturen med legendarisk après-ski, mysiga byar och en otroligt välkomnande atmosfär.",
    highlights: ["Bäst après-ski", "Gratis liftkort", "Mysig kultur"],
    activities: ["Skidsäsong", "Vandring", "Kultur"],
    season: "Dec–Apr (vinter) / Jun–Okt (sommar)",
    slug: "osterrike",
  },
  {
    country: "Italien",
    flag: "🇮🇹",
    regions: ["Cortina d'Ampezzo", "Val Gardena", "Livigno", "Courmayeur"],
    description: "Italienska Alperna bjuder på Dolomiterna – kanske världens vackraste bergsmiljö – med fantastisk mat och lägre levnadskostnader.",
    highlights: ["Dolomiterna", "Italiensk mat", "Lägre kostnader"],
    activities: ["Skidsäsong", "Språkresa", "Kultur", "Mat"],
    season: "Dec–Apr (vinter) / Jun–Sep (sommar)",
    slug: "italien",
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    regions: ["Grandvalira", "Vallnord"],
    description: "Litet furstendöme i Pyrenéerna med skattefria priser, sol och överraskande bra skidåkning.",
    highlights: ["Skattefritt", "Soligt klimat", "Budgetvänligt"],
    activities: ["Skidsäsong"],
    season: "Dec–Apr",
    slug: "andorra",
  },
];

const facebookGroups = [
  {
    category: "Jobb",
    icon: Briefcase,
    description: "Hitta säsongsjobb direkt från arbetsgivare och andra säsongare.",
    groups: [
      { name: "Ski Season Jobs", url: "https://www.facebook.com/groups/skiseasonjobs/", members: "80k+" },
      { name: "Seasonaires - Ski Season Jobs & Workers", url: "https://www.facebook.com/groups/seasonaires/", members: "60k+" },
      { name: "Ski Season Jobs in the Alps", url: "https://www.facebook.com/groups/skiseasonjobsalps/", members: "40k+" },
      { name: "Chalet Staff & Ski Season Jobs", url: "https://www.facebook.com/groups/chaletstaff/", members: "25k+" },
      { name: "Verbier Job Board", url: "https://www.facebook.com/groups/verbierjobs/", members: "10k+" },
    ],
  },
  {
    category: "Svenskar i Alperna",
    icon: Users,
    description: "Nätverka med andra svenskar som bor och jobbar i Alperna.",
    groups: [
      { name: "Svenskar i Alperna", url: "https://www.facebook.com/groups/svenskarialperna/", members: "15k+" },
      { name: "Svenskar i Schweiz", url: "https://www.facebook.com/groups/svenskariSchweiz/", members: "12k+" },
      { name: "Svenskar i Österrike", url: "https://www.facebook.com/groups/svenskariosterrike/", members: "8k+" },
      { name: "Svenskar i Frankrike", url: "https://www.facebook.com/groups/svenskarifrankrike/", members: "20k+" },
      { name: "Svenskar i Chamonix", url: "https://www.facebook.com/groups/svenskarichamonix/", members: "3k+" },
    ],
  },
  {
    category: "Boende",
    icon: HomeIcon,
    description: "Hitta lägenheter, rum och säsongsboende på alporterna.",
    groups: [
      { name: "Chamonix Accommodation & Housing", url: "https://www.facebook.com/groups/chamonixaccommodation/", members: "30k+" },
      { name: "Verbier Accommodation", url: "https://www.facebook.com/groups/verbieraccommodation/", members: "15k+" },
      { name: "Val d'Isère & Tignes Accommodation", url: "https://www.facebook.com/groups/valdisereaccommodation/", members: "12k+" },
      { name: "Méribel Accommodation", url: "https://www.facebook.com/groups/meribelaccommodation/", members: "10k+" },
      { name: "St. Anton Accommodation & Jobs", url: "https://www.facebook.com/groups/stantonaccommodation/", members: "8k+" },
      { name: "Zermatt Housing & Jobs", url: "https://www.facebook.com/groups/zermatthousing/", members: "7k+" },
    ],
  },
];

const Alperna = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100 dark:from-sky-950 dark:via-blue-950 dark:to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          {["⛷️", "🏔️", "❄️", "🎿", "🏂"].map((emoji, i) => (
            <span key={i} className="absolute text-4xl animate-pulse" style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%`, animationDelay: `${i * 0.5}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mountain className="w-4 h-4" />
            Alperna
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Jobba & lev i Alperna
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Från Chamonix till Kitzbühel – hitta säsongsjobb, äventyr och en livsstil i Europas mest majestätiska berg. Som EU-medborgare kan du jobba fritt i hela regionen.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Snowflake, label: "Vintersäsong", value: "Dec – Apr" },
              { icon: Sun, label: "Sommarsäsong", value: "Jun – Sep" },
              { icon: Briefcase, label: "Visum", value: "Ej krävs (EU)" },
              { icon: MapPin, label: "Länder", value: "5 alpländer" },
            ].map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <fact.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">{fact.value}</div>
                <div className="text-xs text-muted-foreground">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Alpländerna
          </h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {alpineDestinations.map((dest) => (
              <div key={dest.country} className="bg-card rounded-2xl border border-border/60 p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{dest.flag}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground">{dest.country}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{dest.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Populära orter</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.regions.map((r) => (
                        <span key={r} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Höjdpunkter</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((h) => (
                        <span key={h} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">{dest.season}</span>
                  <Link to={`/destination/${dest.slug}`}>
                    <Button variant="outline" size="sm" className="rounded-xl gap-2">
                      Utforska <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Redo att ta steget?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Oavsett om du drömmer om pudersnö i Chamonix eller sommarvandringar i Tyrolen – Alperna väntar på dig.
          </p>
          <Link to="/ski-season">
            <Button size="lg" className="rounded-xl gap-2">
              Se skidsäsongsjobb <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alperna;
