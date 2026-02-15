import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GraduationCap, Clock, DollarSign, User, ExternalLink, Globe, BookOpen, Languages } from "lucide-react";
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
        <section className="relative py-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="text-white/80 font-medium">Program</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Studera utomlands
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Universitetsstudier, språkkurser eller utbytesprogram – ta steget och studera i ett annat land. 
                Bredda dina horisonter och bygg ett internationellt nätverk.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Universitet & språkskolor</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-4 h-4" />
                  <span>2 veckor - 4 år</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <DollarSign className="w-4 h-4" />
                  <span>CSN-berättigat</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Languages className="w-4 h-4" />
                  <span>6+ språk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Populära studiedestinationer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Utforska de bästa länderna för universitetsstudier och hitta det program som passar dig.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {studyDestinations.map((dest) => (
                <div
                  key={dest.country}
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{dest.flag}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {dest.country}
                      </h3>
                      <p className="text-sm text-muted-foreground">{dest.programType}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{dest.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((h) => (
                      <span key={h} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-1">Populära städer</div>
                    <div className="flex flex-wrap gap-1">
                      {dest.cities.slice(0, 3).map((city) => (
                        <span key={city} className="text-xs bg-muted px-2 py-0.5 rounded">{city}</span>
                      ))}
                      {dest.cities.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{dest.cities.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs mb-4 py-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="text-muted-foreground">Längd</div>
                      <div className="font-medium text-foreground">{dest.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Kostnad</div>
                      <div className="font-medium text-foreground text-[10px]">{dest.cost}</div>
                    </div>
                  </div>

                  <a href={dest.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors">
                      <span>Läs mer</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Schools */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Språkkurser utomlands
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lär dig ett nytt språk genom att bo och studera i landet. Flexibla kurslängder från 2 veckor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languageSchools.map((school) => (
                <a
                  key={school.language}
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{school.flag}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground">{school.language}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {school.countries.map((c) => (
                      <span key={c} className="text-xs bg-muted px-2 py-0.5 rounded">{c}</span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>📅 {school.duration}</div>
                    <div>💰 {school.cost}</div>
                  </div>
                  <div className="mt-3 flex items-center text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Hitta kurser <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Vanliga frågor
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
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
