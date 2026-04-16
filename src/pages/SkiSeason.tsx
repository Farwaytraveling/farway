import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Clock, DollarSign, Calendar, MapPin, Sparkles, ArrowRight, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-ski.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { question: "Hur hittar jag säsongsjobb på skidort?", answer: "Börja söka tidigt - helst 3-6 månader innan säsongen startar. Använd jobbsajter specifika för varje land, kontakta skidorter direkt via deras hemsidor, eller gå via rekryteringsföretag som specialiserar sig på säsongsarbete." },
  { question: "Behöver jag erfarenhet för att få jobb?", answer: "Nej, många jobb kräver ingen tidigare erfarenhet. Positioner som diskare, städare, liftvärd eller barbacka är ofta öppna för nybörjare. Har du erfarenhet av restaurang, bar eller kundservice ökar dina chanser." },
  { question: "Ingår boende och liftkort?", answer: "De flesta arbetsgivare erbjuder subventionerat eller gratis boende - detta är standard i branschen. Liftkort ingår ofta, men villkoren varierar. Fråga alltid om detta vid anställning." },
  { question: "Hur mycket kan jag tjäna?", answer: "Lönerna varierar kraftigt. I Schweiz kan du tjäna CHF 3,500-4,500/mån, medan lönen i Österrike ligger på €1,200-1,800/mån. Kom ihåg att boende ofta ingår." },
  { question: "Behöver jag visum för att jobba i Alperna?", answer: "Som svensk (EU-medborgare) kan du jobba fritt i alla EU-länder samt Schweiz utan visum. För Andorra krävs arbetstillstånd. För Kanada, Japan och Nya Zeeland behöver du Working Holiday-visum." },
  { question: "Hur bra måste jag kunna skida?", answer: "För de flesta jobb behöver du inte vara en expert på skidor. Många jobbar hela säsongen och lär sig skida på fritiden. För jobb som skidlärare krävs hög skidnivå och certifikat." },
  { question: "När börjar och slutar säsongen?", answer: "I Europa (Alperna) pågår säsongen vanligtvis från december till april. Glaciärorter som Zermatt har längre säsonger. I södra halvklotet (Nya Zeeland) är säsongen juni-oktober. Japan har säsong december-mars." },
  { question: "Kan jag åka med vänner?", answer: "Absolut! Många åker med vänner och söker jobb tillsammans. Vissa arbetsgivare föredrar att anställa grupper. Delat boende är standard." },
];

const skiDestinations = [
  {
    country: "Österrike", flag: "🇦🇹", region: "Tyrolen & Salzburg", season: "December - April", avgSalary: "€1,200-1,800/mån",
    description: "Österrike är hjärtat av Alperna med världsberömda skidorter och ett livligt après-ski.",
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
    country: "Schweiz", flag: "🇨🇭", region: "Valais & Graubünden", season: "November - April", avgSalary: "CHF 3,500-4,500/mån",
    description: "Schweiz erbjuder de högsta lönerna i Alperna och spektakulära skidområden.",
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
    country: "Frankrike", flag: "🇫🇷", region: "Franska Alperna", season: "December - April", avgSalary: "€1,100-1,600/mån",
    description: "Frankrike har några av världens största sammanlänkade skidområden.",
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
    country: "Italien", flag: "🇮🇹", region: "Dolomterna & Aosta", season: "December - Mars", avgSalary: "€1,000-1,400/mån",
    description: "Italien erbjuder fantastisk mat, vänliga människor och spektakulära bergsvyer.",
    resorts: [
      { name: "Val Gardena", type: "Pittoreskt", jobs: "Hotell, restauranger" },
      { name: "Cortina d'Ampezzo", type: "Glamoröst", jobs: "Butiker, hotell" },
      { name: "Livigno", type: "Taxfree", jobs: "Butiker, barer" },
      { name: "Courmayeur", type: "Charmigt", jobs: "Restauranger, guider" },
      { name: "Madonna di Campiglio", type: "Elegant", jobs: "Hotell, spa" },
    ],
    highlights: ["Italiensk mat", "Dolomterna", "Taxfree i Livigno"],
    jobUrl: "https://www.indeed.it/", visaInfo: "EU-medborgare kan jobba fritt",
  },
  {
    country: "Andorra", flag: "🇦🇩", region: "Pyrenéerna", season: "December - April", avgSalary: "€1,200-1,600/mån",
    description: "Andorra är ett litet furstendöme med taxfree-shopping och prisvärda skidorter.",
    resorts: [
      { name: "Grandvalira", type: "Största", jobs: "Liftar, hotell, barer" },
      { name: "Vallnord", type: "Lugnt", jobs: "Skidskola, uthyrning" },
      { name: "Soldeu", type: "Brittiskt", jobs: "Barer, restauranger" },
      { name: "Pas de la Casa", type: "Festligt", jobs: "Nattklubbar, butiker" },
      { name: "Arinsal", type: "Budget", jobs: "Hostels, barer" },
    ],
    highlights: ["Taxfree", "Prisvärt", "Spansk/Fransk kultur"],
    jobUrl: "https://www.treball.ad/", visaInfo: "Kräver arbetstillstånd (ej EU)",
  },
  {
    country: "Kanada", flag: "🇨🇦", region: "British Columbia & Alberta", season: "November - April", avgSalary: "CAD 2,500-3,500/mån",
    description: "Kanada erbjuder legendarisk powder och enorma skidområden.",
    resorts: [
      { name: "Whistler", type: "Ikoniskt", jobs: "Allt från liftar till restauranger" },
      { name: "Banff", type: "Nationalpark", jobs: "Hotell, guider" },
      { name: "Revelstoke", type: "Powder", jobs: "Liftar, lodge" },
      { name: "Big White", type: "Familjevänligt", jobs: "Skidskola, uthyrning" },
      { name: "Sun Peaks", type: "Avlägset", jobs: "Hotell, restauranger" },
    ],
    highlights: ["Champagne powder", "Working Holiday", "Nordamerikansk kultur"],
    jobUrl: "https://www.jobbank.gc.ca/", visaInfo: "Working Holiday (IEC) krävs",
  },
  {
    country: "Japan", flag: "🇯🇵", region: "Hokkaido & Nagano", season: "December - Mars", avgSalary: "¥180,000-250,000/mån",
    description: "Japan är känt för sin fantastiska powder och unika kultur.",
    resorts: [
      { name: "Niseko", type: "Powder paradise", jobs: "Hotell, restauranger, skidskola" },
      { name: "Hakuba", type: "OS-ort", jobs: "Liftar, uthyrning" },
      { name: "Nozawa Onsen", type: "Traditionellt", jobs: "Ryokan, onsen" },
      { name: "Rusutsu", type: "Tree skiing", jobs: "Resort, hotell" },
      { name: "Furano", type: "Avlägset", jobs: "Hotell, guider" },
    ],
    highlights: ["Japow (japansk powder)", "Gratis visum", "Unik kultur"],
    jobUrl: "https://www.gaijinpot.com/jobs/", visaInfo: "Working Holiday (gratis)",
  },
  {
    country: "Nya Zeeland", flag: "🇳🇿", region: "Södra ön", season: "Juni - Oktober", avgSalary: "NZD 22-28/tim",
    description: "Nya Zeeland erbjuder skidsäsong under nordisk sommar. Perfekt för dig som vill förlänga vintern.",
    resorts: [
      { name: "Queenstown", type: "Äventyr", jobs: "Barer, hotell, äventyr" },
      { name: "Wanaka", type: "Avslappnat", jobs: "Caféer, uthyrning" },
      { name: "The Remarkables", type: "Spektakulärt", jobs: "Liftar, skidskola" },
      { name: "Coronet Peak", type: "Nära stan", jobs: "Nattkidåkning, events" },
      { name: "Cardrona", type: "Freestyle", jobs: "Parker, events" },
    ],
    highlights: ["Sommarsäsong", "Working Holiday", "Bungyjump"],
    jobUrl: "https://www.seek.co.nz/", visaInfo: "Working Holiday krävs",
  },
];

const SkiSeason = () => {
  return (
    <div className="min-h-screen bg-background">
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
                  { icon: DollarSign, text: "€1,000–4,500/mån" },
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
                8 destinationer
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Välj din skidort
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Europas Alper, Kanadas powder eller Japans unika snö – vart drar du?
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
                          {destination.resorts.map((resort) => (
                            <div key={resort.name} className="bg-muted/30 rounded-xl p-4 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/15">
                              <h5 className="font-semibold text-foreground mb-1">{resort.name}</h5>
                              <p className="text-xs text-primary font-medium mb-2">{resort.type}</p>
                              <p className="text-xs text-muted-foreground">{resort.jobs}</p>
                            </div>
                          ))}
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
    </div>
  );
};

export default SkiSeason;