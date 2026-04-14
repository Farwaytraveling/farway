import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Palmtree, MapPin, ArrowRight, Wallet, Thermometer, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const seaDestinations = [
  {
    country: "Thailand",
    flag: "🇹🇭",
    highlights: ["Billigt", "Stränder", "Street food"],
    description: "Svenskarnas absoluta favorit i Sydostasien. Från Bangkoks tempel till Koh Phi Phis stränder – Thailand har allt för backpackern, volontären och den digitala nomaden.",
    activities: ["Backpacking", "Dykning", "Yoga", "Volontär", "Digital Nomad"],
    budget: "~5 000 kr/mån",
    visa: "Turistvisum 60 dagar",
    slug: "thailand",
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    highlights: ["Kultur", "Mat", "Motorrad"],
    description: "Vietnam erbjuder en otrolig blandning av historia, natur och gatumat. Populärt att köra motorcykel från norr till söder.",
    activities: ["Backpacking", "Undervisa engelska", "Digital Nomad", "Mat"],
    budget: "~4 000 kr/mån",
    visa: "E-Visa 90 dagar",
    slug: "vietnam",
  },
  {
    country: "Indonesien / Bali",
    flag: "🇮🇩",
    highlights: ["Surfing", "Yoga", "Digital Nomad-hub"],
    description: "Bali har blivit en av världens mest populära platser för digitala nomader och yogaälskare. Utanför Bali väntar tusentals öar att utforska.",
    activities: ["Surfing", "Yoga", "Digital Nomad", "Dykning", "Volontär"],
    budget: "~6 000 kr/mån",
    visa: "Visa on Arrival 30 dagar",
    slug: "indonesien",
  },
  {
    country: "Kambodja",
    flag: "🇰🇭",
    highlights: ["Angkor Wat", "Volontär", "Budget"],
    description: "Kambodja lockar med Angkor Wat, vänliga människor och möjligheter att göra skillnad genom volontärarbete.",
    activities: ["Backpacking", "Volontär", "Kultur", "Undervisa engelska"],
    budget: "~3 500 kr/mån",
    visa: "Visa on Arrival 30 dagar",
    slug: "kambodja",
  },
  {
    country: "Filippinerna",
    flag: "🇵🇭",
    highlights: ["Öparadis", "Dykning", "Surfing"],
    description: "Med över 7 000 öar erbjuder Filippinerna några av världens bästa dykplatser, vita stränder och en otroligt gästvänlig kultur.",
    activities: ["Backpacking", "Dykning", "Surfing", "Volontär"],
    budget: "~4 500 kr/mån",
    visa: "Visumfritt 30 dagar",
    slug: "filippinerna",
  },
  {
    country: "Myanmar",
    flag: "🇲🇲",
    highlights: ["Tempel", "Oturistat", "Kultur"],
    description: "Myanmar är Sydostasiens mest outforskade destination med gyllene tempel, flytande marknader och en unik kultur.",
    activities: ["Backpacking", "Volontär", "Kultur"],
    budget: "~3 000 kr/mån",
    visa: "E-Visa 28 dagar",
    slug: "myanmar",
  },
];

const Sydostasien = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-50 dark:from-emerald-950 dark:via-teal-950 dark:to-amber-950" />
        <div className="absolute inset-0 opacity-10">
          {["🌴", "🐘", "🏝️", "🛕", "🍜"].map((emoji, i) => (
            <span key={i} className="absolute text-4xl animate-pulse" style={{ left: `${10 + i * 20}%`, top: `${15 + (i % 3) * 25}%`, animationDelay: `${i * 0.4}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Sydostasien
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Utforska Sydostasien
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backpackingens mecka – från Thailands stränder till Vietnams berg. Billigt, varmt och fullt av äventyr för unga svenskar.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, label: "Klimat", value: "25–35°C" },
              { icon: Wallet, label: "Budget", value: "3–6k kr/mån" },
              { icon: MapPin, label: "Länder", value: "6+ länder" },
              { icon: Globe, label: "Visum", value: "Enkelt/VoA" },
            ].map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                  <fact.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
            Destinationer i Sydostasien
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seaDestinations.map((dest) => (
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
                    <span key={h} className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium">{h}</span>
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
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tips för Sydostasien</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            {[
              { emoji: "💉", title: "Vaccinationer", desc: "Kolla med Vaccinationsguiden vilka vaccin som rekommenderas." },
              { emoji: "🎒", title: "Packa lätt", desc: "Det är billigt att köpa kläder på plats. Ta med det viktigaste." },
              { emoji: "💰", title: "Budgettips", desc: "Ät lokalt, ta lokala bussar och bo på hostels för att spara." },
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

export default Sydostasien;
