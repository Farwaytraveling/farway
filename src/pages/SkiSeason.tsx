import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Clock, DollarSign, Calendar, MapPin, Sparkles, ArrowRight, Mountain, Info } from "lucide-react";
import heroImg from "@/assets/hero-ski.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResortDetailDialog } from "@/components/ResortDetailDialog";
import { resortDetails, type ResortDetail } from "@/data/skiResortDetails";

const faqItems = [
  { question: "Hur hittar jag säsongsjobb på skidort?", answer: "Börja söka tidigt - helst 3-6 månader innan säsongen startar. Använd jobbsajter specifika för varje land, kontakta skidorter direkt via deras hemsidor, eller gå via rekryteringsföretag som specialiserar sig på säsongsarbete." },
  { question: "Behöver jag erfarenhet för att få jobb?", answer: "Nej, många jobb kräver ingen tidigare erfarenhet. Positioner som diskare, städare, liftvärd eller barbacka är ofta öppna för nybörjare. Har du erfarenhet av restaurang, bar eller kundservice ökar dina chanser." },
  { question: "Ingår boende och liftkort?", answer: "De flesta arbetsgivare erbjuder subventionerat eller gratis boende - detta är standard i branschen. Liftkort ingår ofta, men villkoren varierar. Fråga alltid om detta vid anställning." },
  { question: "Hur mycket kan jag tjäna?", answer: "Lönerna varierar kraftigt. I Schweiz tjänar säsongspersonal vanligtvis CHF 3 200–4 500/månad enligt branschens kollektivavtal (L-GAV). I Österrike ligger lönen på €1 600–2 000/månad enligt Hotel- und Gastgewerbe-KV, och i Frankrike runt SMIC (€1 800–1 900/månad brutto). Kost och logi ingår nästan alltid – så det mesta du tjänar är sparbart." },
  { question: "Behöver jag visum för att jobba i Alperna?", answer: "Som svensk EU-medborgare kan du jobba fritt i alla EU-länder samt Schweiz utan visum (Schweiz baseras på personrörlighetsavtalet). För Kanada, Japan och Nya Zeeland behöver du Working Holiday-visum." },
  { question: "Hur bra måste jag kunna skida?", answer: "För de flesta jobb behöver du inte vara en expert på skidor. Många jobbar hela säsongen och lär sig skida på fritiden. För jobb som skidlärare krävs hög skidnivå och certifikat." },
  { question: "När börjar och slutar säsongen?", answer: "I Europa (Alperna) pågår säsongen vanligtvis från december till april. Glaciärorter som Zermatt har längre säsonger. I södra halvklotet (Nya Zeeland) är säsongen juni-oktober. Japan har säsong december-mars." },
  { question: "Kan jag åka med vänner?", answer: "Absolut! Många åker med vänner och söker jobb tillsammans. Vissa arbetsgivare föredrar att anställa grupper. Delat boende är standard." },
];

const skiDestinations = [
  {
    country: "Österrike", flag: "🇦🇹", region: "Tyrolen & Salzburg", season: "December – April", avgSalary: "€1 600–2 000/mån",
    description: "Österrike är hjärtat av Alperna med världsberömda skidorter och ett livligt après-ski. Perfekt för dig som vill kombinera bra löner med legendariskt festliv.",
    resorts: [
      { name: "St. Anton", type: "Party & Powder", jobs: "Barer, hotell, liftar" },
      { name: "Ischgl", type: "Exklusivt", jobs: "Restauranger, butiker" },
      { name: "Kitzbühel", type: "Klassiskt", jobs: "Hotell, skidskola" },
      { name: "Sölden", type: "Glaciär", jobs: "Liftar, uthyrning" },
      { name: "Mayrhofen", type: "Ungdomligt", jobs: "Barer, hostels" },
    ],
    highlights: ["Après-ski", "Gratis liftkort", "Bra löner"],
    jobUrl: "https://www.jobs.at/", visaInfo: "EU-medborgare behöver inget visum",
  },
  {
    country: "Schweiz", flag: "🇨🇭", region: "Valais & Graubünden", season: "November – April", avgSalary: "CHF 3 200–4 500/mån",
    description: "Schweiz erbjuder de högsta lönerna i Alperna och spektakulära skidområden. Här kan du spara rejält medan du lever i bergen.",
    resorts: [
      { name: "Zermatt", type: "Ikoniskt", jobs: "Hotell, restauranger" },
      { name: "Verbier", type: "Exklusivt", jobs: "Chalets, barer" },
      { name: "St. Moritz", type: "Lyx", jobs: "5-stjärniga hotell" },
      { name: "Davos", type: "Stort", jobs: "Liftar, skidskola" },
      { name: "Laax", type: "Freestyle", jobs: "Parker, events" },
    ],
    highlights: ["Högsta lönerna", "Alperna", "Schweizisk kvalitet"],
    jobUrl: "https://www.jobs.ch/", visaInfo: "EU-medborgare kan jobba fritt",
  },
  {
    country: "Frankrike", flag: "🇫🇷", region: "Franska Alperna", season: "December – April", avgSalary: "€1 800–2 100/mån",
    description: "Frankrike har några av världens största sammanlänkade skidområden. Fantastisk mat, bra skidåkning och en avslappnad livsstil.",
    resorts: [
      { name: "Val d'Isère", type: "Legendariskt", jobs: "Barer, hotell, liftar" },
      { name: "Chamonix", type: "Extrem", jobs: "Guider, uthyrning" },
      { name: "Courchevel", type: "Lyx", jobs: "5-stjärniga hotell" },
      { name: "Méribel", type: "Brittiskt", jobs: "Chalets, barer" },
      { name: "Les Deux Alpes", type: "Glaciär", jobs: "Skidskola, barer" },
    ],
    highlights: ["Enorma skidområden", "Bra mat", "Varierat"],
    jobUrl: "https://www.emploi.gouv.fr/", visaInfo: "EU-medborgare behöver inget visum",
  },
  {
    country: "Japan", flag: "🇯🇵", region: "Hokkaido & Nagano", season: "December – Mars", avgSalary: "¥180 000–250 000/mån",
    description: "Japan är legendariskt för sin lätta, torra powder – \"Japow\". Kombinera världsklass-åkning med onsen, ramen och en helt unik kultur.",
    resorts: [
      { name: "Niseko", type: "Powder-mecka", jobs: "Hotell, barer, skidskola" },
      { name: "Hakuba", type: "OS-ort", jobs: "Hotell, restauranger, liftar" },
      { name: "Furano", type: "Autentiskt", jobs: "Hotell, uthyrning" },
      { name: "Rusutsu", type: "Tree-skiing", jobs: "Resort, restauranger" },
      { name: "Nozawa Onsen", type: "Traditionellt", jobs: "Ryokan, barer" },
    ],
    highlights: ["Världens bästa powder", "Onsen & kultur", "Unik upplevelse"],
    jobUrl: "https://www.gaijinpot.com/", visaInfo: "Working Holiday-visum krävs (18–30 år)",
  },
];

const SkiSeason = () => {
  const [selectedResort, setSelectedResort] = useState<ResortDetail | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openResort = (name: string) => {
    const detail = resortDetails[name];
    if (detail) {
      setSelectedResort(detail);
      setDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Skidsäsong i Alperna 2025/2026 – jobba i Österrike, Schweiz, Frankrike | Farway"
        description="Allt om att jobba en skidsäsong: Österrike, Schweiz, Frankrike, Italien, Japan & Kanada. Löner, jobb, ansökan och bästa skidorterna – samlad guide."
        canonical="https://farway.lovable.app/ski-season"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
                ❄️ Vinterns bästa äventyr
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Skidsäsong
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed">
                Jobba på skidorter och få betalt för att leva i bergen.
              </p>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
                Från Alpernas après-ski till Japans legendariska powder – kombinera din passion med arbete.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: Calendar, text: "Nov – April (Europa)" },
                  { icon: Clock, text: "3–6 månader" },
                  { icon: DollarSign, text: "€1 600–4 500/mån" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-full px-5 py-2.5 text-primary-foreground">
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                4 toppländer
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Välj din skidort
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Österrike, Schweiz, Frankrike eller Japan – fyra av världens bästa länder för säsongsjobb.
              </p>
            </div>

            <div className="space-y-6">
              {skiDestinations.map((destination) => (
                <div key={destination.country} className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Country Header */}
                      <div className="lg:w-1/3">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-4xl">{destination.flag}</span>
                          <div>
                            <h3 className="font-display text-2xl font-bold text-foreground">{destination.country}</h3>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{destination.region}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{destination.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {destination.highlights.map((highlight) => (
                            <span key={highlight} className="text-xs font-medium bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-full">{highlight}</span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-xs py-3 bg-muted/40 rounded-xl px-3 mb-4">
                          <div>
                            <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Säsong</div>
                            <div className="font-semibold text-foreground">{destination.season}</div>
                          </div>
                          <div className="border-l border-border pl-3">
                            <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Lön</div>
                            <div className="font-semibold text-foreground">{destination.avgSalary}</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 italic">{destination.visaInfo}</p>
                        <a href={destination.jobUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                            <span>Hitta jobb</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>

                      {/* Resorts */}
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-2 mb-4">
                          <Mountain className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-foreground">Populära skidorter</h4>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {destination.resorts.map((resort) => {
                            const hasDetail = !!resortDetails[resort.name];
                            return (
                              <button
                                key={resort.name}
                                type="button"
                                onClick={() => openResort(resort.name)}
                                disabled={!hasDetail}
                                className="text-left bg-muted/30 rounded-xl p-4 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/30 disabled:opacity-60 disabled:cursor-not-allowed group relative"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <h5 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{resort.name}</h5>
                                  {hasDetail && <Info className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5" />}
                                </div>
                                <p className="text-xs text-primary font-medium mb-2">{resort.type}</p>
                                <p className="text-xs text-muted-foreground">{resort.jobs}</p>
                                {hasDetail && (
                                  <p className="text-[10px] text-primary/70 font-medium mt-2 uppercase tracking-wider">Klicka för mer info →</p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-primary/[0.03]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Bra att veta</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
                Livet på skidorten
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  En skidsäsong utomlands är mer än bara ett jobb – det är en livsstil. Du bor i bergen, skider på fritiden och träffar likasinnade från hela världen.
                </p>
                <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
                  <p className="text-foreground font-medium mb-2">💡 Tips</p>
                  <p className="text-muted-foreground">
                    Börja söka jobb 3-6 månader innan säsongen. De bästa positionerna och boendena går snabbt. Schweiz betalar bäst, men Österrike har mest après-ski.
                  </p>
                </div>
                <p>
                  De flesta arbetsgivare erbjuder subventionerat boende och liftkort. Det gör att du kan spara pengar samtidigt som du lever drömmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ❓ Vanliga frågor
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-3">
                  Allt om skidsäsongen
                </h2>
                <p className="text-muted-foreground">Svar på dina frågor om att jobba på skidort.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 rounded-xl px-5 bg-card data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5 hover:text-primary transition-colors">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ResortDetailDialog resort={selectedResort} open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default SkiSeason;