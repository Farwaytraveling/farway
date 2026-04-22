import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { MapPin, ArrowRight, Wallet, Music, Globe, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const saDestinations = [
  {
    country: "Argentina",
    flag: "🇦🇷",
    highlights: ["Tango", "Biff", "Patagonien"],
    description: "Argentina erbjuder allt från Buenos Aires pulsande nattliv till Patagoniens vildmark. Working Holiday-visum finns tillgängligt för svenskar.",
    activities: ["Working Holiday", "Språkresa", "Backpacking", "Vandring"],
    budget: "~5 000 kr/mån",
    visa: "WHV tillgängligt",
    slug: "argentina",
  },
  {
    country: "Brasilien",
    flag: "🇧🇷",
    highlights: ["Karneval", "Stränder", "Regnskog"],
    description: "Brasilien är rytm, natur och passion. Från Rios stränder till Amazonas djungel – en destination som aldrig slutar överraska.",
    activities: ["Backpacking", "Surfing", "Volontär", "Musik"],
    budget: "~5 500 kr/mån",
    visa: "Turistvisum 90 dagar",
    slug: "brasilien",
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    highlights: ["Kaffe", "Salsa", "Digital Nomad"],
    description: "Colombia har gått från att vara undanskymt till att bli Sydamerikas hetaste destination. Medellín rankas som en av världens bästa digital nomad-städer.",
    activities: ["Digital Nomad", "Språkresa", "Backpacking", "Surfing"],
    budget: "~4 500 kr/mån",
    visa: "Turistvisum 90 dagar",
    slug: "colombia",
  },
  {
    country: "Peru",
    flag: "🇵🇪",
    highlights: ["Machu Picchu", "Ceviche", "Inkakultur"],
    description: "Peru är drömmen för vandrare och kulturälskare. Inkaleden till Machu Picchu är en av världens mest ikoniska vandringsleder.",
    activities: ["Backpacking", "Vandring", "Volontär", "Kultur"],
    budget: "~4 000 kr/mån",
    visa: "Turistvisum 183 dagar",
    slug: "peru",
  },
  {
    country: "Chile",
    flag: "🇨🇱",
    highlights: ["Atacama", "Patagonien", "Vin"],
    description: "Chile sträcker sig från världens torraste öken till Patagoniens glaciärer. Working Holiday-visum finns för svenskar.",
    activities: ["Working Holiday", "Backpacking", "Vandring", "Skidsäsong"],
    budget: "~5 000 kr/mån",
    visa: "WHV tillgängligt",
    slug: "chile",
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    highlights: ["Galápagos", "Andes", "Volontär"],
    description: "Ecuador är kompakt men otroligt varierat – från Galápagos unika djurliv till Andernas bergsbyar och Amazonas regnskog.",
    activities: ["Volontär", "Backpacking", "Språkresa", "Dykning"],
    budget: "~3 500 kr/mån",
    visa: "Turistvisum 90 dagar",
    slug: "ecuador",
  },
  {
    country: "Bolivia",
    flag: "🇧🇴",
    highlights: ["Salar de Uyuni", "La Paz", "Budget"],
    description: "Bolivia är Sydamerikas billigaste land och hem till surrealistiska landskap som saltöknen Salar de Uyuni.",
    activities: ["Backpacking", "Vandring", "Volontär", "Kultur"],
    budget: "~3 000 kr/mån",
    visa: "Turistvisum 90 dagar",
    slug: "bolivia",
  },
];

const Sydamerika = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sydamerika – Argentina, Brasilien, Colombia, Peru & Chile | Farway"
        description="Allt om Sydamerika för svenska ungdomar: Working Holiday, språkkurser, backpacking och digital nomad-liv i Argentina, Brasilien, Colombia, Peru och Chile."
        canonical="https://farway.se/sydamerika"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 dark:from-amber-950 dark:via-orange-950 dark:to-red-950" />
        <div className="absolute inset-0 opacity-10">
          {["🦜", "🌎", "🎶", "⛰️", "🌺"].map((emoji, i) => (
            <span key={i} className="absolute text-4xl animate-pulse" style={{ left: `${10 + i * 20}%`, top: `${15 + (i % 3) * 25}%`, animationDelay: `${i * 0.4}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Compass className="w-4 h-4" />
            Sydamerika
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upplev Sydamerika
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontinent av kontraster – från Patagoniens glaciärer till Amazonas regnskog. Äventyr, kultur och livsglädje väntar.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: "Språk", value: "Spanska / Portugisiska" },
              { icon: Wallet, label: "Budget", value: "3–6k kr/mån" },
              { icon: MapPin, label: "Länder", value: "7 populära" },
              { icon: Music, label: "Kultur", value: "Tango, Samba, Salsa" },
            ].map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
                  <fact.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
            Destinationer i Sydamerika
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {saDestinations.map((dest) => (
              <div key={dest.country} className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dest.flag}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{dest.country}</h3>
                    <span className="text-xs text-muted-foreground">{dest.visa} · {dest.budget}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{dest.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.activities.map((a) => (
                    <span key={a} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">{a}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.highlights.map((h) => (
                    <span key={h} className="bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium">{h}</span>
                  ))}
                </div>
                <Link to={`/destination/${dest.slug}`} className="mt-auto">
                  <Button variant="outline" size="sm" className="rounded-xl gap-2 w-full">
                    Utforska <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tips för Sydamerika</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            {[
              { emoji: "🗣️", title: "Lär dig spanska", desc: "Engelska fungerar sällan. En grundkurs i spanska gör enorm skillnad." },
              { emoji: "🏔️", title: "Höjdsjuka", desc: "I Anderna (Bolivia, Peru) ligger städer på 3 000–4 000m. Ta det lugnt första dagarna." },
              { emoji: "🔒", title: "Säkerhet", desc: "Använd sunt förnuft – undvik att visa dyra saker och researcha stadsdelar." },
            ].map((tip) => (
              <div key={tip.title} className="bg-card rounded-xl border border-border/60 p-5 text-left">
                <span className="text-2xl">{tip.emoji}</span>
                <h3 className="font-semibold text-foreground mt-2 mb-1 text-sm">{tip.title}</h3>
                <p className="text-xs text-muted-foreground">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sydamerika;
