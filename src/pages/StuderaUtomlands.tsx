import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GraduationCap, Clock, DollarSign, ExternalLink, BookOpen, Languages, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const studyDestinations = [
  {
    country: "USA",
    flag: "🇺🇸",
    programType: "F-1 Student Visa",
    ageLimit: "Ingen gräns",
    duration: "1-4 år",
    cost: "$20,000-50,000/år",
    description: "Världens mest prestigefyllda universitet. Från Ivy League till community colleges - USA har alternativ för alla.",
    highlights: ["Ivy League", "Campus-liv", "OPT-arbete"],
    cities: ["New York", "Boston", "Los Angeles", "San Francisco", "Chicago"],
    applyUrl: "https://educationusa.state.gov/",
  },
  {
    country: "Storbritannien",
    flag: "🇬🇧",
    programType: "Student Visa",
    ageLimit: "Ingen gräns",
    duration: "1-3 år",
    cost: "£10,000-30,000/år",
    description: "Oxford, Cambridge och hundratals andra universitet i världsklass. Kortare utbildningar än i USA.",
    highlights: ["Traditionsrika uni", "1 års master", "Engelska"],
    cities: ["London", "Oxford", "Cambridge", "Edinburgh", "Manchester"],
    applyUrl: "https://www.ucas.com/",
  },
  {
    country: "Australien",
    flag: "🇦🇺",
    programType: "Student Visa (subclass 500)",
    ageLimit: "Ingen gräns",
    duration: "6 mån - 4 år",
    cost: "$20,000-45,000 AUD/år",
    description: "Hög livskvalitet och bra universitet. Du får arbeta 48 timmar per 14 dagar under studierna.",
    highlights: ["Arbeta vid sidan", "Bra klimat", "Post-study visa"],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    applyUrl: "https://www.studyaustralia.gov.au/",
  },
  {
    country: "Spanien",
    flag: "🇪🇸",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "3 mån - 4 år",
    cost: "€1,000-5,000/år (offentliga)",
    description: "Prisvärt med fantastisk livsstil. Perfekt för språkstudier i spanska eller universitetskurser.",
    highlights: ["Låga avgifter", "Spanska", "Sol & kultur"],
    cities: ["Barcelona", "Madrid", "Valencia", "Sevilla", "Granada"],
    applyUrl: "https://www.studying-in-spain.com/",
  },
  {
    country: "Tyskland",
    flag: "🇩🇪",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "1-4 år",
    cost: "€0-500/termin (offentliga)",
    description: "Nästan gratis universitetsstudier, även för internationella studenter. Många program på engelska.",
    highlights: ["Gratis studier", "Engelska program", "Ingenjörsland"],
    cities: ["Berlin", "München", "Hamburg", "Heidelberg", "Freiburg"],
    applyUrl: "https://www.daad.de/en/",
  },
  {
    country: "Frankrike",
    flag: "🇫🇷",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "1-4 år",
    cost: "€170-770/år (offentliga)",
    description: "Från Sorbonne till grandes écoles. Frankrike erbjuder utbildning i världsklass till lågt pris.",
    highlights: ["Mycket låga avgifter", "Franska", "Gastronomi"],
    cities: ["Paris", "Lyon", "Toulouse", "Montpellier", "Nice"],
    applyUrl: "https://www.campusfrance.org/en",
  },
  {
    country: "Nederländerna",
    flag: "🇳🇱",
    programType: "EU: inget visum krävs",
    ageLimit: "Ingen gräns",
    duration: "1-4 år",
    cost: "€2,200/år (EU-studenter)",
    description: "Flest engelskspråkiga program i icke-engelsktalande Europa. Internationell och välkomnande atmosfär.",
    highlights: ["Engelska program", "Internationellt", "Cykelkultur"],
    cities: ["Amsterdam", "Rotterdam", "Utrecht", "Leiden", "Groningen"],
    applyUrl: "https://www.studyinholland.nl/",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    programType: "Student Visa",
    ageLimit: "Ingen gräns",
    duration: "6 mån - 4 år",
    cost: "¥500,000-1,500,000/år",
    description: "Unik blandning av tradition och teknologi. Många stipendier tillgängliga för internationella studenter.",
    highlights: ["MEXT-stipendier", "Teknologi", "Unik kultur"],
    cities: ["Tokyo", "Kyoto", "Osaka", "Fukuoka", "Sapporo"],
    applyUrl: "https://www.studyinjapan.go.jp/en/",
  },
];

const languageSchools = [
  {
    language: "Engelska",
    flag: "🇬🇧",
    countries: ["Malta", "Irland", "Australien", "Kanada"],
    duration: "2-52 veckor",
    cost: "€200-500/vecka",
    url: "https://www.languagecourse.net/",
  },
  {
    language: "Spanska",
    flag: "🇪🇸",
    countries: ["Spanien", "Costa Rica", "Colombia", "Argentina"],
    duration: "1-24 veckor",
    cost: "€150-400/vecka",
    url: "https://www.donquijote.org/",
  },
  {
    language: "Franska",
    flag: "🇫🇷",
    countries: ["Frankrike", "Schweiz", "Kanada", "Marocko"],
    duration: "1-24 veckor",
    cost: "€200-500/vecka",
    url: "https://www.alliancefr.org/en",
  },
  {
    language: "Tyska",
    flag: "🇩🇪",
    countries: ["Tyskland", "Österrike", "Schweiz"],
    duration: "2-24 veckor",
    cost: "€180-400/vecka",
    url: "https://www.goethe.de/en/",
  },
  {
    language: "Japanska",
    flag: "🇯🇵",
    countries: ["Japan"],
    duration: "2-52 veckor",
    cost: "€200-450/vecka",
    url: "https://gogonihon.com/en/",
  },
  {
    language: "Italienska",
    flag: "🇮🇹",
    countries: ["Italien"],
    duration: "1-24 veckor",
    cost: "€150-350/vecka",
    url: "https://www.studyitalian.it/",
  },
];

const faqItems = [
  {
    question: "Kan jag få CSN för att studera utomlands?",
    answer: "Ja, CSN erbjuder både studiemedel och extra lån för utlandsstudier. Du kan få bidrag och lån för studier i de flesta länder om utbildningen motsvarar svensk högskolenivå. Ansök senast 2-3 månader innan terminsstart. Kontrollera att din utbildning är CSN-berättigad på csn.se."
  },
  {
    question: "Behöver jag kunna språket i värdlandet?",
    answer: "Det beror på programmet. Många universitet erbjuder kurser på engelska, särskilt på masternivå. För språkskolor börjar du på din nivå. Vissa länder (som Frankrike och Tyskland) kräver språktest för program på lokalspråket. Engelskspråkiga program kräver ofta IELTS eller TOEFL."
  },
  {
    question: "Hur ansöker jag till ett utländskt universitet?",
    answer: "Processen varierar: i Storbritannien ansöker du via UCAS, i USA direkt till varje universitet (Common App), och inom EU ofta direkt till universitetet. Börja minst 6-12 månader innan. Du behöver vanligtvis betyg, personligt brev, CV och ibland rekommendationsbrev och språktest."
  },
  {
    question: "Finns det stipendier för svenska studenter?",
    answer: "Ja! Svenska Institutet erbjuder stipendier för studier i specifika länder. Erasmus+ ger bidrag inom Europa. Många universitet har egna stipendier. Kolla även Rotary, stiftelser via Stipendier.se och landspecifika program som Fulbright (USA), DAAD (Tyskland) och MEXT (Japan)."
  },
  {
    question: "Kan jag arbeta under studierna?",
    answer: "Inom EU har du full arbetsrätt. I USA tillåter F-1 visum 20 timmar/vecka på campus. Australien tillåter 48 timmar per 14 dagar. Storbritannien tillåter 20 timmar/vecka under terminen. Kontrollera alltid ditt visums villkor för att inte riskera det."
  },
  {
    question: "Vad kostar det att studera utomlands?",
    answer: "Kostnaderna varierar enormt. Tyskland och Frankrike har nästan gratis offentliga universitet. Nederländerna kostar ca €2,200/år för EU-studenter. USA och Storbritannien är dyrast med $20,000-50,000/år. Lägg till levnadskostnader: €800-2,000/månad beroende på stad."
  },
  {
    question: "Hur lång tid varar en språkkurs?",
    answer: "Språkkurser är flexibla - från 2 veckors intensivkurser till ett helt års studier. Vanligast är 4-12 veckor. De flesta skolor har start varje måndag. Intensivkurser ger snabbast resultat med 20-30 lektioner per vecka. Du kan ofta kombinera med praktik eller volontärarbete."
  },
  {
    question: "Är utländska examina giltiga i Sverige?",
    answer: "Examina från EU/EES-länder erkänns generellt i Sverige. För examina utanför EU kan du ansöka om bedömning hos Universitets- och högskolerådet (UHR). Professionella examina (läkare, lärare) kräver ofta komplettering. Kontrollera innan du börjar att din planerade examen erkänns."
  },
];

const StuderaUtomlands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute top-10 right-10 text-8xl opacity-10 select-none hidden sm:block">🎓</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none hidden sm:block">📚</div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-6">
                📖 Utbildning & språk
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Studera utomlands
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light leading-relaxed">
                Bredda dina horisonter med studier i ett nytt land.
              </p>
              <p className="text-lg text-white/70 mb-10 max-w-xl">
                Universitetsstudier, språkkurser eller utbytesprogram – ta steget och bygg ett internationellt nätverk.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <BookOpen className="w-4 h-4" />
                  <span>Universitet & språkskolor</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Clock className="w-4 h-4" />
                  <span>2 veckor – 4 år</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <DollarSign className="w-4 h-4" />
                  <span>CSN-berättigat</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Languages className="w-4 h-4" />
                  <span>6+ språk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                8 studiedestinationer
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Vart vill du studera?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Från Ivy League till gratis tyska universitet – hitta din drömutbildning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {studyDestinations.map((dest) => (
                <div
                  key={dest.country}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl leading-none">{dest.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl font-bold text-foreground">{dest.country}</h3>
                        <p className="text-xs text-muted-foreground truncate">{dest.programType}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{dest.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs font-medium bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-1 rounded-full">{h}</span>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Populära städer</div>
                      <div className="flex flex-wrap gap-1">
                        {dest.cities.slice(0, 3).map((city) => (
                          <span key={city} className="text-xs bg-muted/70 px-2 py-0.5 rounded-full">{city}</span>
                        ))}
                        {dest.cities.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{dest.cities.length - 3}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 text-center text-xs mb-5 py-3 bg-muted/30 rounded-xl">
                      <div>
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Längd</div>
                        <div className="font-semibold text-foreground">{dest.duration}</div>
                      </div>
                      <div className="border-l border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Kostnad</div>
                        <div className="font-semibold text-foreground text-[11px]">{dest.cost}</div>
                      </div>
                    </div>

                    <a href={dest.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <span>Läs mer</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Schools */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                🗣️ Språkkurser
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Lär dig ett nytt språk
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Bo och studera i landet – det snabbaste sättet att lära sig ett språk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {languageSchools.map((school) => (
                <a
                  key={school.language}
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{school.flag}</span>
                    <h3 className="font-display text-lg font-bold text-foreground">{school.language}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {school.countries.map((c) => (
                      <span key={c} className="text-xs bg-muted/70 px-2 py-0.5 rounded-full">{c}</span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1.5">
                    <div>📅 {school.duration}</div>
                    <div>💰 {school.cost}</div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Hitta kurser <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  ❓ Vanliga frågor
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-3">
                  Allt om utlandsstudier
                </h2>
                <p className="text-muted-foreground">
                  CSN, ansökan, stipendier och mer – vi svarar på dina frågor.
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

export default StuderaUtomlands;
