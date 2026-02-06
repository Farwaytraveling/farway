import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Snowflake, Clock, DollarSign, Calendar, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <section className="relative py-20 bg-gradient-to-br from-sky-400 to-indigo-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Snowflake className="w-7 h-7" />
                </div>
                <span className="text-white/80 font-medium">Program</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Skidsäsong
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Jobba på skidorter världen över. Kombinera din passion för skidåkning med arbete och få betalt för att leva i bergen.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4" />
                  <span>Nov - April (Europa)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-4 h-4" />
                  <span>3-6 månader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <DollarSign className="w-4 h-4" />
                  <span>€1,000-4,500/mån</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Populära skiddestinationer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Från Alpernas klassiska skidorter till Japans legendariska powder - här hittar du din nästa skidsäsong.
              </p>
            </div>

            <div className="space-y-8">
              {skiDestinations.map((destination) => (
                <div
                  key={destination.country}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
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
                        <p className="text-muted-foreground text-sm mb-4">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {destination.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs py-3 bg-muted/50 rounded-lg px-3 mb-4">
                          <div>
                            <div className="text-muted-foreground">Säsong</div>
                            <div className="font-medium text-foreground">{destination.season}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Lön</div>
                            <div className="font-medium text-foreground">{destination.avgSalary}</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                          {destination.visaInfo}
                        </p>
                        <a href={destination.jobUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-colors">
                            <span>Hitta jobb</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>

                      {/* Resorts */}
                      <div className="lg:w-2/3">
                        <h4 className="font-semibold text-foreground mb-4">Populära skidorter</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {destination.resorts.map((resort) => (
                            <div
                              key={resort.name}
                              className="bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors"
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Att jobba på skidort
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Att jobba en skidsäsong är drömmen för många skidentusiaster. Du får möjlighet att bo i bergen, skida på din fritid och träffa likasinnade från hela världen. De flesta jobb inkluderar boende och ofta även liftkort.
                </p>
                <p>
                  Vanliga jobb inkluderar arbete i barer och restauranger, på hotell, i skiduthyrning, som liftvärd eller i skidskola. Har du erfarenhet kan du söka mer specialiserade roller som pistör, guide eller snowboardinstruktör.
                </p>
                <p>
                  För europeiska skidorter kan du som svensk jobba fritt utan visum. För destinationer utanför EU som Kanada, Japan och Nya Zeeland behöver du ett Working Holiday-visum. Ansök i god tid - de populäraste orterna fyller sina positioner snabbt!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkiSeason;
