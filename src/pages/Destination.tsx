import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Sun, Briefcase } from "lucide-react";

const destinationData: Record<string, {
  name: string;
  flag: string;
  heroImage: string;
  description: string;
  highlights: string[];
  programs: { title: string; description: string; icon: React.ElementType }[];
  facts: { label: string; value: string }[];
  bestTime: string;
  currency: string;
  language: string;
}> = {
  australien: {
    name: "Australien",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=600&fit=crop",
    description: "Australien är drömmen för många svenska ungdomar. Med sitt Working Holiday-visum, fantastiska natur och avslappnade livsstil är det perfekt för dig som vill kombinera arbete och äventyr.",
    highlights: ["Working Holiday-visum upp till 3 år", "Fantastiska stränder och natur", "Höga löner och bra arbetsmarknad", "Perfekt för surfing och äventyr"],
    programs: [
      { title: "Working Holiday", description: "Arbeta och res runt i upp till 3 år med WHV.", icon: Briefcase },
      { title: "Farm Work", description: "Jobba på gårdar och förläng ditt visum.", icon: Sun },
      { title: "Au Pair", description: "Bo hos en värd familj och ta hand om barn.", icon: Users },
    ],
    facts: [
      { label: "Visumlängd", value: "1–3 år" },
      { label: "Åldersgräns", value: "18–35 år" },
      { label: "Minsta sparkapital", value: "~35 000 kr" },
    ],
    bestTime: "Oktober – Mars (sommar)",
    currency: "Australiensisk dollar (AUD)",
    language: "Engelska",
  },
  "nya-zeeland": {
    name: "Nya Zeeland",
    flag: "🇳🇿",
    heroImage: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&h=600&fit=crop",
    description: "Nya Zeeland erbjuder en unik blandning av hisnande natur, äventyrssporter och en välkomnande kultur. Perfekt för dig som älskar utomhusliv och vill uppleva världens vackraste landskap.",
    highlights: ["Working Holiday-visum i 12 månader", "Världens äventyrshuvudstad Queenstown", "Otrolig natur och vandringsleder", "Vänligt och avslappnat folk"],
    programs: [
      { title: "Working Holiday", description: "Arbeta och res i 12 månader.", icon: Briefcase },
      { title: "Äventyrsprogram", description: "Bungy, skydiving och mycket mer.", icon: Sun },
      { title: "Farmarbete", description: "Jobba på vingårdar och fruktgårdar.", icon: Users },
    ],
    facts: [
      { label: "Visumlängd", value: "12 månader" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "Minsta sparkapital", value: "~30 000 kr" },
    ],
    bestTime: "November – April (sommar)",
    currency: "Nyzeeländsk dollar (NZD)",
    language: "Engelska",
  },
  chamonix: {
    name: "Chamonix",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&h=600&fit=crop",
    description: "Chamonix vid foten av Mont Blanc är drömmen för alla skid- och snowboardälskare. Jobba en säsong i Alperna och njut av världsklass-skidåkning, afterski och en internationell gemenskap.",
    highlights: ["Skidåkning i världsklass", "Fantastisk afterski-kultur", "Internationell gemenskap", "Möjlighet att utforska Alperna"],
    programs: [
      { title: "Skidsäsong", description: "Arbeta på skidort under vintersäsongen.", icon: Briefcase },
      { title: "Hotell & Restaurang", description: "Jobb inom hospitality-branschen.", icon: Users },
      { title: "Skidlärare", description: "Certifiera dig och lär ut skidåkning.", icon: Sun },
    ],
    facts: [
      { label: "Säsong", value: "December – April" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "December – April (skidsäsong)",
    currency: "Euro (EUR)",
    language: "Franska",
  },
  usa: {
    name: "USA",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop",
    description: "USA erbjuder otroliga möjligheter för svenska ungdomar. Från au pair-program till summer camps – upplev den amerikanska drömmen och skapa minnen för livet.",
    highlights: ["Au Pair-program med värd familj", "Summer Camp-upplevelser", "Kulturellt utbyte", "Möjlighet att resa runt i hela landet"],
    programs: [
      { title: "Au Pair", description: "Bo hos en amerikansk familj i 12–24 månader.", icon: Users },
      { title: "Summer Camp", description: "Jobba som campledare under sommaren.", icon: Sun },
      { title: "Praktik", description: "Gör praktik inom ditt yrkesområde.", icon: Briefcase },
    ],
    facts: [
      { label: "Au Pair-längd", value: "12–24 månader" },
      { label: "Åldersgräns", value: "18–26 år" },
      { label: "Visum", value: "J-1 visum" },
    ],
    bestTime: "Året runt",
    currency: "US Dollar (USD)",
    language: "Engelska",
  },
  thailand: {
    name: "Thailand",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    description: "Thailand är perfekt för dig som vill volontärarbeta, lära dig ett nytt språk eller helt enkelt uppleva en fantastisk kultur. Med sin otroliga mat, vänliga människor och paradisiska stränder är det ett oförglömligt äventyr.",
    highlights: ["Volontärprogram med djur och samhällen", "Otrolig matkultur", "Paradisiska stränder och öar", "Prisvänligt boende och mat"],
    programs: [
      { title: "Volontärarbete", description: "Hjälp lokalsamhällen och djurprojekt.", icon: Users },
      { title: "Språkkurs", description: "Lär dig thailändska eller förbättra din engelska.", icon: Globe },
      { title: "Dykutbildning", description: "Bli certifierad dykare i kristallklart vatten.", icon: Sun },
    ],
    facts: [
      { label: "Visum", value: "Turistvisum 60 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~8 000 kr" },
    ],
    bestTime: "November – Mars (torrsäsong)",
    currency: "Thailändsk baht (THB)",
    language: "Thailändska",
  },
  paris: {
    name: "Paris",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    description: "Paris, ljusets stad, erbjuder en unik möjlighet att uppleva fransk kultur på nära håll. Arbeta som au pair, studera franska eller gör praktik i en av världens mest ikoniska städer.",
    highlights: ["Au Pair hos franska familjer", "Studera franska på plats", "Praktik inom mode, konst och gastronomi", "Upplev världens kulturhuvudstad"],
    programs: [
      { title: "Au Pair", description: "Bo hos en fransk familj och lär dig språket.", icon: Users },
      { title: "Språkkurs", description: "Intensiva franskakurser i Paris.", icon: Globe },
      { title: "Praktik", description: "Praktisera inom mode, mat eller konst.", icon: Briefcase },
    ],
    facts: [
      { label: "Au Pair-längd", value: "6–12 månader" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "Året runt",
    currency: "Euro (EUR)",
    language: "Franska",
  },
};

const Destination = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? destinationData[slug] : null;

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Destinationen hittades inte</h1>
            <Link to="/">
              <Button variant="outline" className="rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till startsidan
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Tillbaka
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{dest.flag}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{dest.name}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{dest.description}</p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {dest.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <Sun className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{h}</span>
                </div>
              ))}
            </div>

            {/* Programs */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Program i {dest.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {dest.programs.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <p.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Snabbfakta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {dest.facts.map((f) => (
                <div key={f.label} className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{f.label}</p>
                  <p className="font-semibold text-foreground">{f.value}</p>
                </div>
              ))}
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Bästa tid</p>
                <p className="font-semibold text-foreground">{dest.bestTime}</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Valuta</p>
                <p className="font-semibold text-foreground">{dest.currency}</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Språk</p>
                <p className="font-semibold text-foreground">{dest.language}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Redo att åka till {dest.name}?</h3>
              <p className="text-muted-foreground mb-6">Kontakta oss för att få hjälp med planering och bokning.</p>
              <Button size="lg" className="rounded-xl">
                Kontakta oss
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Destination;
