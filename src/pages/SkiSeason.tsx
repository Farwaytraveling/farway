import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Snowflake, Clock, DollarSign, Calendar, ExternalLink, MapPin, Sparkles, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Hur hittar jag säsongsjobb på skidort?",
    answer: "Börja söka tidigt - helst 3-6 månader innan säsongen startar. Använd jobbsajter specifika för varje land, kontakta skidorter direkt via deras hemsidor, eller gå via rekryteringsföretag som specialiserar sig på säsongsarbete. Nätverk är också viktigt - många jobb tillsätts genom rekommendationer från tidigare säsongsarbetare."
  },
  {
    question: "Behöver jag erfarenhet för att få jobb?",
    answer: "Nej, många jobb kräver ingen tidigare erfarenhet. Positioner som diskare, städare, liftvärd eller barbacka är ofta öppna för nybörjare. Har du erfarenhet av restaurang, bar eller kundservice ökar dina chanser. För specialiserade roller som skidlärare eller pistör krävs certifikat och erfarenhet."
  },
  {
    question: "Ingår boende och liftkort?",
    answer: "De flesta arbetsgivare erbjuder subventionerat eller gratis boende - detta är standard i branschen. Liftkort ingår ofta, men villkoren varierar. Vissa ger gratis säsongskort, andra erbjuder rabatterade kort eller begränsat antal skiddagar. Fråga alltid om detta vid anställning."
  },
  {
    question: "Hur mycket kan jag tjäna?",
    answer: "Lönerna varierar kraftigt beroende på land och position. I Schweiz kan du tjäna CHF 3,500-4,500/mån, medan lönen i Österrike ligger på €1,200-1,800/mån. Kom ihåg att boende ofta ingår, vilket gör att du kan spara en större del av lönen. Tips kan också vara en betydande inkomstkälla i bar- och restaurangjobb."
  },
  {
    question: "Behöver jag visum för att jobba i Alperna?",
    answer: "Som svensk (EU-medborgare) kan du jobba fritt i alla EU-länder samt Schweiz utan visum. För Andorra krävs arbetstillstånd. För destinationer utanför Europa som Kanada, Japan och Nya Zeeland behöver du ett Working Holiday-visum - ansök i god tid då dessa kan ta tid att behandla."
  },
  {
    question: "Hur bra måste jag kunna skida?",
    answer: "För de flesta jobb behöver du inte vara en expert på skidor. Många jobbar hela säsongen och lär sig skida på fritiden. Dock, om du vill maximera din tid i backarna, är det bra att ha grundläggande skidkunskaper. För jobb som skidlärare eller guide krävs naturligtvis hög skidnivå och ofta certifikat."
  },
  {
    question: "När börjar och slutar säsongen?",
    answer: "I Europa (Alperna) pågår säsongen vanligtvis från december till april, med högsäsong under jul/nyår och sportlov (februari). Glaciärorter som Zermatt och Hintertux har längre säsonger. I södra halvklotet (Nya Zeeland) är säsongen juni-oktober. Japan har säsong december-mars med bäst snö i januari-februari."
  },
  {
    question: "Kan jag åka med vänner?",
    answer: "Absolut! Många åker med vänner och söker jobb tillsammans. Vissa arbetsgivare föredrar till och med att anställa grupper eftersom det minskar risken att folk hoppar av. Delat boende är också standard, så du kommer träffa massor av nya vänner från hela världen under säsongen."
  },
];


const skiDestinations = [
  {
    country: "Österrike",
    flag: "🇦🇹",
    region: "Tyrolen & Salzburg",
    season: "December - April",
    avgSalary: "€1,200-1,800/mån",
    description: "Österrike är hjärtat av Alperna med världsberömda skidorter och ett livligt après-ski. Perfekt för dig som vill kombinera skidåkning med festliv.",
    resorts: [
      { name: "St. Anton", type: "Party & Powder", jobs: "Barer, hotell, liftar" },
      { name: "Ischgl", type: "Exklusivt", jobs: "Restauranger, butiker" },
      { name: "Kitzbühel", type: "Klassiskt", jobs: "Hotell, skidskola" },
      { name: "Sölden", type: "Glaciär", jobs: "Liftar, uthyrning" },
      { name: "Mayrhofen", type: "Ungdomligt", jobs: "Barer, hostels" },
    ],
    highlights: ["Après-ski", "Gratis liftkort", "Bra löner"],
    jobUrl: "https://www.jobs.at/",
    visaInfo: "EU-medborgare behöver inget visum",
  },
  {
    country: "Schweiz",
    flag: "🇨🇭",
    region: "Valais & Graubünden",
    season: "November - April",
    avgSalary: "CHF 3,500-4,500/mån",
    description: "Schweiz erbjuder de högsta lönerna i Alperna och spektakulära skidområden. Perfekt för dig som vill spara pengar samtidigt som du njuter av världsklassig skidåkning.",
    resorts: [
      { name: "Zermatt", type: "Ikoniskt", jobs: "Hotell, restauranger" },
      { name: "Verbier", type: "Exklusivt", jobs: "Chalets, barer" },
      { name: "St. Moritz", type: "Lyx", jobs: "5-stjärniga hotell" },
      { name: "Davos", type: "Stort", jobs: "Liftar, skidskola" },
      { name: "Laax", type: "Freestyle", jobs: "Parker, events" },
    ],
    highlights: ["Högsta lönerna", "Alperna", "Schweizisk kvalitet"],
    jobUrl: "https://www.jobs.ch/",
    visaInfo: "EU-medborgare kan jobba fritt",
  },
  {
    country: "Frankrike",
    flag: "🇫🇷",
    region: "Franska Alperna",
    season: "December - April",
    avgSalary: "€1,100-1,600/mån",
    description: "Frankrike har några av världens största sammanlänkade skidområden. Här kan du skida i veckor utan att åka samma pist två gånger.",
    resorts: [
      { name: "Val d'Isère", type: "Legendariskt", jobs: "Barer, hotell, liftar" },
      { name: "Chamonix", type: "Extrem", jobs: "Guider, uthyrning" },
      { name: "Courchevel", type: "Lyx", jobs: "5-stjärniga hotell" },
      { name: "Méribel", type: "Brittiskt", jobs: "Chalets, barer" },
      { name: "Les Deux Alpes", type: "Glaciär", jobs: "Skidskola, barer" },
    ],
    highlights: ["Enorma skidområden", "Bra mat", "Varierat"],
    jobUrl: "https://www.emploi.gouv.fr/",
    visaInfo: "EU-medborgare behöver inget visum",
  },
  {
    country: "Italien",
    flag: "🇮🇹",
    region: "Dolomterna & Aosta",
    season: "December - Mars",
    avgSalary: "€1,000-1,400/mån",
    description: "Italien erbjuder fantastisk mat, vänliga människor och spektakulära bergsvyer. Dolomterna är UNESCO-världsarv och erbjuder unik skidåkning.",
    resorts: [
      { name: "Val Gardena", type: "Pittoreskt", jobs: "Hotell, restauranger" },
      { name: "Cortina d'Ampezzo", type: "Glamoröst", jobs: "Butiker, hotell" },
      { name: "Livigno", type: "Taxfree", jobs: "Butiker, barer" },
      { name: "Courmayeur", type: "Charmigt", jobs: "Restauranger, guider" },
      { name: "Madonna di Campiglio", type: "Elegant", jobs: "Hotell, spa" },
    ],
    highlights: ["Italiensk mat", "Dolomterna", "Taxfree i Livigno"],
    jobUrl: "https://www.indeed.it/",
    visaInfo: "EU-medborgare kan jobba fritt",
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    region: "Pyrenéerna",
    season: "December - April",
    avgSalary: "€1,200-1,600/mån",
    description: "Andorra är ett litet furstendöme mellan Frankrike och Spanien med taxfree-shopping och prisvärda skidorter. Perfekt för budgetmedvetna.",
    resorts: [
      { name: "Grandvalira", type: "Största", jobs: "Liftar, hotell, barer" },
      { name: "Vallnord", type: "Lugnt", jobs: "Skidskola, uthyrning" },
      { name: "Soldeu", type: "Brittiskt", jobs: "Barer, restauranger" },
      { name: "Pas de la Casa", type: "Festligt", jobs: "Nattklubbar, butiker" },
      { name: "Arinsal", type: "Budget", jobs: "Hostels, barer" },
    ],
    highlights: ["Taxfree", "Prisvärt", "Spansk/Fransk kultur"],
    jobUrl: "https://www.treball.ad/",
    visaInfo: "Kräver arbetstillstånd (ej EU)",
  },
  {
    country: "Kanada",
    flag: "🇨🇦",
    region: "British Columbia & Alberta",
    season: "November - April",
    avgSalary: "CAD 2,500-3,500/mån",
    description: "Kanada erbjuder legendarisk powder och enorma skidområden. Med Working Holiday-visum kan du jobba en hel säsong på några av världens bästa backar.",
    resorts: [
      { name: "Whistler", type: "Ikoniskt", jobs: "Allt från liftar till restauranger" },
      { name: "Banff", type: "Nationalpark", jobs: "Hotell, guider" },
      { name: "Revelstoke", type: "Powder", jobs: "Liftar, lodge" },
      { name: "Big White", type: "Familjevänligt", jobs: "Skidskola, uthyrning" },
      { name: "Sun Peaks", type: "Avlägset", jobs: "Hotell, restauranger" },
    ],
    highlights: ["Champagne powder", "Working Holiday", "Nordamerikansk kultur"],
    jobUrl: "https://www.jobbank.gc.ca/",
    visaInfo: "Working Holiday (IEC) krävs",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    region: "Hokkaido & Nagano",
    season: "December - Mars",
    avgSalary: "¥180,000-250,000/mån",
    description: "Japan är känt för sin fantastiska powder och unika kultur. Upplev japansk gästfrihet samtidigt som du njuter av världens fluffigaste snö.",
    resorts: [
      { name: "Niseko", type: "Powder paradise", jobs: "Hotell, restauranger, skidskola" },
      { name: "Hakuba", type: "OS-ort", jobs: "Liftar, uthyrning" },
      { name: "Nozawa Onsen", type: "Traditionellt", jobs: "Ryokan, onsen" },
      { name: "Rusutsu", type: "Tree skiing", jobs: "Resort, hotell" },
      { name: "Furano", type: "Avlägset", jobs: "Hotell, guider" },
    ],
    highlights: ["Japow (japansk powder)", "Gratis visum", "Unik kultur"],
    jobUrl: "https://www.gaijinpot.com/jobs/",
    visaInfo: "Working Holiday (gratis)",
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    region: "Södra ön",
    season: "Juni - Oktober",
    avgSalary: "NZD 22-28/tim",
    description: "Nya Zeeland erbjuder skidsäsong under nordisk sommar. Perfekt för dig som vill förlänga vintern och uppleva äventyr på andra sidan jorden.",
    resorts: [
      { name: "Queenstown", type: "Äventyr", jobs: "Barer, hotell, äventyr" },
      { name: "Wanaka", type: "Avslappnat", jobs: "Caféer, uthyrning" },
      { name: "The Remarkables", type: "Spektakulärt", jobs: "Liftar, skidskola" },
      { name: "Coronet Peak", type: "Nära stan", jobs: "Nattkidåkning, events" },
      { name: "Cardrona", type: "Freestyle", jobs: "Parker, events" },
    ],
    highlights: ["Sommarsäsong", "Working Holiday", "Bungyjump"],
    jobUrl: "https://www.seek.co.nz/",
    visaInfo: "Working Holiday krävs",
  },
];

const SkiSeason = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute top-10 right-10 text-8xl opacity-10 select-none hidden sm:block">⛷️</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none hidden sm:block">🏔️</div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-6">
                ❄️ Vinterns bästa äventyr
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Skidsäsong
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light leading-relaxed">
                Jobba på skidorter och få betalt för att leva i bergen.
              </p>
              <p className="text-lg text-white/70 mb-10 max-w-xl">
                Från Alpernas après-ski till Japans legendariska powder – kombinera din passion med arbete.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Calendar className="w-4 h-4" />
                  <span>Nov – April (Europa)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Clock className="w-4 h-4" />
                  <span>3–6 månader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <DollarSign className="w-4 h-4" />
                  <span>€1,000–4,500/mån</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
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
                <div
                  key={destination.country}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500" />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Country Header */}
                      <div className="lg:w-1/3">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-5xl">{destination.flag}</span>
                          <div>
                            <h3 className="font-display text-2xl font-bold text-foreground">
                              {destination.country}
                            </h3>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{destination.region}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {destination.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs font-medium bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 border border-sky-200/60 px-2.5 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-xs py-3 bg-muted/30 rounded-xl px-3 mb-4">
                          <div>
                            <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Säsong</div>
                            <div className="font-semibold text-foreground">{destination.season}</div>
                          </div>
                          <div className="border-l border-border pl-3">
                            <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Lön</div>
                            <div className="font-semibold text-foreground">{destination.avgSalary}</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 italic">
                          {destination.visaInfo}
                        </p>
                        <a href={destination.jobUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white hover:border-transparent transition-all duration-300">
                            <span>Hitta jobb</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>

                      {/* Resorts */}
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-2 mb-4">
                          <Mountain className="w-4 h-4 text-sky-500" />
                          <h4 className="font-semibold text-foreground">Populära skidorter</h4>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {destination.resorts.map((resort) => (
                            <div
                              key={resort.name}
                              className="bg-gradient-to-br from-muted/30 to-muted/60 rounded-xl p-4 hover:from-sky-50 hover:to-indigo-50/50 transition-colors border border-transparent hover:border-sky-200/50"
                            >
                              <h5 className="font-semibold text-foreground mb-1">{resort.name}</h5>
                              <p className="text-xs text-sky-600 font-medium mb-2">{resort.type}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-medium text-sky-600">Bra att veta</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
                Att jobba på skidort
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Att jobba en skidsäsong är drömmen för många skidentusiaster. Du får möjlighet att bo i bergen, skida på din fritid och träffa likasinnade från hela världen.
                </p>
                <div className="bg-white rounded-2xl border border-sky-200/50 p-6 shadow-sm">
                  <p className="text-foreground font-medium mb-2">🎿 Tips från säsongsarbetare</p>
                  <p className="text-muted-foreground">
                    De flesta jobb inkluderar boende och ofta liftkort. Sök tidigt – populära orter som Verbier och Niseko fyller sina platser snabbt. Bar- och restaurangerfarenhet är guld värt.
                  </p>
                </div>
                <p>
                  Vanliga jobb inkluderar barer, restauranger, hotell, skiduthyrning, liftvärd och skidskola. Har du certifikat kan du söka som pistör eller instruktör.
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
                <span className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                  ❓ Vanliga frågor
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-3">
                  Allt om skidsäsong
                </h2>
                <p className="text-muted-foreground">
                  Svar på de vanligaste frågorna om att jobba på skidort.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-5 bg-card data-[state=open]:shadow-md transition-shadow">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
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
