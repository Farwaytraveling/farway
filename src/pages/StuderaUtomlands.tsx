import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Clock, DollarSign, BookOpen, Languages, ArrowRight, GraduationCap, Globe2, Users, MapPin, FileText, Home, Train, PoundSterling, CalendarDays } from "lucide-react";
import heroImg from "@/assets/hero-studera.jpg";
import { CityContextBanner } from "@/components/CityContextBanner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const swedishUniversities = [
  {
    name: "Lunds universitet",
    shortName: "LU",
    rank: "#1 i Sverige för utbyten",
    students: "~30 000 studenter",
    exchangeCount: "600+ partneruniversitet i 70+ länder",
    description: "Lund är Sveriges mest internationella universitet med flest utbytesavtal. Stark inom alla fakulteter – från juridik till teknik.",
    opportunities: [
      "Erasmus+ till hela Europa (300+ avtal)",
      "Bilaterala avtal med Berkeley, NUS Singapore, University of Tokyo",
      "Sommarkurser i Kina, Japan och Sydkorea",
      "Double degree-program inom ekonomi och ingenjörsvetenskap",
      "Minor Field Studies (MFS) – fältstudier i utvecklingsländer",
    ],
    topDestinations: ["UC Berkeley", "NUS Singapore", "Sciences Po", "University of Melbourne", "HKU"],
    fundingTip: "CSN + Erasmus-stipendium (€350-500/mån) + Lunds egna resestipendier upp till 25 000 kr.",
    applyUrl: "https://www.lunduniversity.lu.se/study-abroad",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    name: "Uppsala universitet",
    shortName: "UU",
    rank: "Nordens äldsta universitet",
    students: "~50 000 studenter",
    exchangeCount: "400+ partneruniversitet i 50+ länder",
    description: "Uppsala har starka avtal i Asien och Nordamerika. Särskilt välutvecklat inom medicin, naturvetenskap och humaniora.",
    opportunities: [
      "Erasmus+ inom hela EU/EES",
      "Avtal med Ivy League: Brown, Cornell, Dartmouth",
      "Asienprogram med Kyoto, Seoul National, Peking University",
      "MFS-stipendier för uppsats utomlands",
      "Linnaeus-Palme för utbyten med utvecklingsländer",
    ],
    topDestinations: ["Brown University", "Kyoto University", "ANU Australien", "Sciences Po", "ETH Zürich"],
    fundingTip: "CSN + Erasmus-bidrag + Uppsalas resestipendium (10 000-30 000 kr beroende på destination).",
    applyUrl: "https://www.uu.se/en/education/exchange",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    name: "Stockholms universitet",
    shortName: "SU",
    rank: "Störst i huvudstaden",
    students: "~33 000 studenter",
    exchangeCount: "300+ partneruniversitet i 50+ länder",
    description: "SU har stort fokus på samhällsvetenskap, juridik och humaniora. Många utbyten i USA, Latinamerika och Asien.",
    opportunities: [
      "Erasmus+ till alla EU-länder",
      "Nordplus-utbyte inom Norden",
      "Bilaterala avtal med UCLA, University of Toronto, UBC",
      "Latinamerika-program (UNAM, USP São Paulo, UC Chile)",
      "Forskarutbildning utomlands via SU:s nätverk",
    ],
    topDestinations: ["UCLA", "University of Toronto", "Sciences Po", "UNAM Mexiko", "Hong Kong U"],
    fundingTip: "CSN + Erasmus + SU:s resestipendier för uppsatsarbete utomlands.",
    applyUrl: "https://www.su.se/english/education/study-abroad",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    name: "KTH Royal Institute of Technology",
    shortName: "KTH",
    rank: "Sveriges främsta tekniska högskola",
    students: "~18 000 studenter",
    exchangeCount: "250+ partneruniversitet i 40+ länder",
    description: "KTH har de starkaste tekniska utbytena i Sverige. Double degree med MIT, ETH och Tokyo Tech – guld värda för en ingenjörskarriär.",
    opportunities: [
      "Double Degree med MIT, Georgia Tech, Tsinghua, KAIST",
      "Erasmus Mundus-program (helt finansierade master)",
      "CLUSTER – europeiska tekniska universitets-alliansen",
      "Sommarforskning vid Caltech, Stanford, ETH",
      "Praktik utomlands genom IAESTE",
    ],
    topDestinations: ["MIT", "ETH Zürich", "Tokyo Tech", "Tsinghua", "TU Delft"],
    fundingTip: "CSN + Erasmus + KTH Opportunities Fund (upp till 50 000 kr för utbyten utanför EU).",
    applyUrl: "https://www.kth.se/en/studies/exchange",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    name: "Handelshögskolan i Stockholm",
    shortName: "SSE",
    rank: "Topp-50 globalt inom ekonomi",
    students: "~2 000 studenter",
    exchangeCount: "60+ elituniversitet i 30+ länder",
    description: "SSE samarbetar endast med världens bästa handelshögskolor. Nästan alla studenter åker på utbyte – ofta till Wharton, HEC eller LSE.",
    opportunities: [
      "Utbyte med Wharton, HEC Paris, LSE, Bocconi",
      "CEMS Master in Management – 30 elituniversitet globalt",
      "Double degree med HEC, ESADE, NUS Singapore",
      "Praktik via SSE Career Services hos McKinsey, BCG, Goldman",
      "Studieresor till Silicon Valley, Hong Kong, Tokyo",
    ],
    topDestinations: ["Wharton (UPenn)", "HEC Paris", "LSE", "Bocconi", "NUS Singapore"],
    fundingTip: "CSN + SSE:s resestipendier + alumni-finansierade scholarships för utbytesstudenter.",
    applyUrl: "https://www.hhs.se/en/education/exchange-studies/",
    color: "from-purple-500/20 to-purple-600/5",
  },
];

const studyDestinations = [
  {
    country: "Storbritannien",
    flag: "🇬🇧",
    programType: "Student Visa",
    ageLimit: "Ingen gräns",
    duration: "1-3 år",
    cost: "£10,000-30,000/år",
    description: "London har några av världens mest prestigefyllda universitet – UCL, Imperial College, King's College. En internationell studentstad utan motstycke.",
    highlights: ["Världsklass-uni", "1 års master", "Engelska"],
    cities: ["London", "Oxford", "Cambridge"],
    applyUrl: "https://www.ucas.com/",
  },
  {
    country: "Frankrike",
    flag: "🇫🇷",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "1-4 år",
    cost: "€170-770/år (offentliga)",
    description: "Paris – Sorbonne, Sciences Po och hundratals andra lärosäten. Studera i världsklass till otroligt låga avgifter med rik kultur runt varje hörn.",
    highlights: ["Mycket låga avgifter", "Franska", "Sorbonne"],
    cities: ["Paris", "Lyon", "Toulouse"],
    applyUrl: "https://www.campusfrance.org/en",
  },
  {
    country: "Spanien",
    flag: "🇪🇸",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "3 mån - 4 år",
    cost: "€1,000-5,000/år (offentliga)",
    description: "Barcelona kombinerar Universitat de Barcelona och Pompeu Fabra med Gaudís arkitektur, strandliv och fantastisk mat. Perfekt för språk och kultur.",
    highlights: ["Låga avgifter", "Spanska", "Strandliv"],
    cities: ["Barcelona", "Madrid", "Valencia"],
    applyUrl: "https://www.studying-in-spain.com/",
  },
  {
    country: "Italien",
    flag: "🇮🇹",
    programType: "Studentvisum (EU: inget krävs)",
    ageLimit: "Ingen gräns",
    duration: "1-5 år",
    cost: "€900-4,000/år (offentliga)",
    description: "Milano är Italiens designhuvudstad med Bocconi, Politecnico och NABA. Kombinera världsledande mode-, ekonomi- och arkitekturstudier med italiensk livsstil.",
    highlights: ["Bocconi & Politecnico", "Mode & design", "Italienska"],
    cities: ["Milano", "Rom", "Florens"],
    applyUrl: "https://www.universitaly.it/",
  },
];

const languageSchools = [
  {
    language: "Engelska",
    flag: "🇬🇧",
    countries: ["Malta", "Irland", "Australien", "Kanada", "USA"],
    duration: "2–52 veckor",
    cost: "€200–500/vecka",
    bestFor: "Snabbast väg till flytande engelska – välj Malta för budget eller Irland för EU-arbetsrätt.",
    providers: [
      { name: "EF Education First", url: "https://www.ef.se/sprakresor/" },
      { name: "Kaplan International", url: "https://www.kaplaninternational.com/" },
      { name: "EC English", url: "https://www.ecenglish.com/" },
    ],
  },
  {
    language: "Spanska",
    flag: "🇪🇸",
    countries: ["Spanien", "Costa Rica", "Colombia", "Argentina", "Mexiko"],
    duration: "1–24 veckor",
    cost: "€150–400/vecka",
    bestFor: "Latinamerika är billigast och bäst för uttal. Spanien har flest kurser och DELE-certifikat.",
    providers: [
      { name: "don Quijote", url: "https://www.donquijote.org/" },
      { name: "Enforex", url: "https://www.enforex.com/" },
      { name: "ESL Sprakresor", url: "https://www.esl.se/sv/sprakresor/spanska" },
    ],
  },
  {
    language: "Franska",
    flag: "🇫🇷",
    countries: ["Frankrike", "Schweiz", "Kanada", "Marocko", "Belgien"],
    duration: "1–24 veckor",
    cost: "€200–500/vecka",
    bestFor: "Nice och Montpellier är billigare än Paris. DELF/DALF-certifikat öppnar dörrar i hela frankofonin.",
    providers: [
      { name: "Alliance Française", url: "https://www.alliancefr.org/en" },
      { name: "EF Frankrike", url: "https://www.ef.se/sprakresor/franska/" },
      { name: "Accent Français", url: "https://www.accentfrancais.com/" },
    ],
  },
  {
    language: "Tyska",
    flag: "🇩🇪",
    countries: ["Tyskland", "Österrike", "Schweiz"],
    duration: "2–24 veckor",
    cost: "€180–400/vecka",
    bestFor: "Goethe-Institut är guldstandard om du vill plugga vidare på tyskt universitet (kräver C1/C2).",
    providers: [
      { name: "Goethe-Institut", url: "https://www.goethe.de/en/" },
      { name: "DID Deutsch-Institut", url: "https://www.did.de/en/" },
      { name: "Kilroy språkresor", url: "https://www.kilroy.se/sprakresor" },
    ],
  },
  {
    language: "Japanska",
    flag: "🇯🇵",
    countries: ["Japan"],
    duration: "2–52 veckor",
    cost: "€200–450/vecka",
    bestFor: "För 6+ månader behöver du studentvisum – då får du även deltidsarbeta 28 timmar/vecka.",
    providers: [
      { name: "Go! Go! Nihon", url: "https://gogonihon.com/en/" },
      { name: "GenkiJACS", url: "https://genkijacs.com/" },
      { name: "ISI Language School", url: "https://www.isi-global.com/en/" },
    ],
  },
  {
    language: "Italienska",
    flag: "🇮🇹",
    countries: ["Italien"],
    duration: "1–24 veckor",
    cost: "€150–350/vecka",
    bestFor: "Florens och Siena har mest svenska studenter. Kombinera gärna med konst- eller matlagningskurs.",
    providers: [
      { name: "Scuola Leonardo da Vinci", url: "https://www.scuolaleonardo.com/" },
      { name: "Dante Alighieri", url: "https://ladante.it/en/" },
      { name: "EF Italien", url: "https://www.ef.se/sprakresor/italienska/" },
    ],
  },
  {
    language: "Portugisiska",
    flag: "🇵🇹",
    countries: ["Portugal", "Brasilien"],
    duration: "2–24 veckor",
    cost: "€150–380/vecka",
    bestFor: "Lissabon är ett av Europas billigaste alternativ. Brasilien för den som vill kombinera språk + surf.",
    providers: [
      { name: "CIAL Lissabon", url: "https://www.cial.pt/en/" },
      { name: "Fast Forward Brasilien", url: "https://www.fastforward.com.br/en/" },
    ],
  },
  {
    language: "Mandarin",
    flag: "🇨🇳",
    countries: ["Kina", "Taiwan"],
    duration: "4–48 veckor",
    cost: "€180–400/vecka",
    bestFor: "Taiwan är friare och har traditionella tecken. Confucius Institute erbjuder ofta stipendier.",
    providers: [
      { name: "LTL Mandarin School", url: "https://ltl-school.com/" },
      { name: "Mandarin House", url: "https://www.mandarinhouse.com/" },
    ],
  },
];

const languageProviders = [
  {
    name: "EF Education First",
    description: "Svenskt företag med 50+ destinationer. Allt-inkluderat-paket med boende, transfer och aktiviteter – tryggt val för förstagångsresenärer.",
    url: "https://www.ef.se/sprakresor/",
    tag: "Mest populär hos svenskar",
  },
  {
    name: "Kilroy",
    description: "Specialiserade på unga resenärer (18–30). Personlig rådgivning på svenska och flexibla bokningar – bra för längre kurser.",
    url: "https://www.kilroy.se/sprakresor",
    tag: "Personlig rådgivning",
  },
  {
    name: "ESL Språkresor",
    description: "Europas största jämförelsesajt för språkresor. Hitta och boka kurser hos 350+ skolor till samma pris som direkt – med svensk support.",
    url: "https://www.esl.se/",
    tag: "Jämför skolor",
  },
  {
    name: "Languagecourse.net",
    description: "Oberoende jämförelseplattform med 30 000+ recensioner. Lägsta pris-garanti och ofta billigare än att boka direkt hos skolan.",
    url: "https://www.languagecourse.net/",
    tag: "Bästa pris",
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
    answer: "Inom EU har du full arbetsrätt. I USA tillåter F-1-visum 20 timmar/vecka på campus under terminen och heltid på lov. Australien tillåter 48 timmar per 14 dagar under terminen och obegränsat på lov. Storbritannien tillåter 20 timmar/vecka under terminen för fulltidsstudenter. Kontrollera alltid ditt visums villkor – brott mot dem kan leda till att visumet dras in."
  },
  {
    question: "Vad kostar det att studera utomlands?",
    answer: "Kostnaderna varierar enormt. Tyskland har inga terminsavgifter på offentliga universitet (endast en semesteravgift på ca €150–350/termin). Frankrike har låga avgifter (~€175/år för kandidat, €250/år för master på offentliga universitet). Nederländerna kostar ca €2 500/år för EU-studenter. USA och Storbritannien är dyrast med $20 000–60 000/år. Lägg till levnadskostnader: €800–2 200/månad beroende på stad."
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
      <SEO
        title="Studera utomlands – Erasmus, utbyte & språkkurser | Farway"
        description="Komplett guide för svenska studenter: Erasmus+, utbytesstudier, språkkurser och CSN utomlands. Universitet, ansökan, finansiering och de bästa destinationerna."
        canonical="https://farway.lovable.app/studera-utomlands"
      />
      <Header />
      <CityContextBanner programLabel="Studera utomlands" />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-6">
                📖 Utbildning & språk
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Studera utomlands
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light leading-relaxed">
                Studera i London, Paris, Barcelona eller Milano.
              </p>
              <p className="text-lg text-white/70 mb-10 max-w-xl">
                Europas mest populära studentstäder – universitetsstudier, språkkurser eller utbytesprogram.
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
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">4 studiedestinationer</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Europas bästa studentstäder
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                London, Paris, Barcelona och Milano – fyra världsstäder med universitet i toppklass.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {studyDestinations.map((dest) => (
                <a
                  key={dest.country}
                  href={dest.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl leading-none">{dest.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{dest.country}</h3>
                        <p className="text-xs text-muted-foreground truncate">{dest.programType}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{dest.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs font-medium bg-primary/8 text-primary border border-primary/15 px-2.5 py-0.5 rounded-full">{h}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {dest.cities.slice(0, 3).map((city) => (
                        <span key={city} className="text-xs bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full">{city}</span>
                      ))}
                      {dest.cities.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{dest.cities.length - 3}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-px text-center text-xs py-3 bg-muted/40 rounded-lg mb-4">
                      <div>
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Längd</div>
                        <div className="font-semibold text-foreground">{dest.duration}</div>
                      </div>
                      <div className="border-l border-border/60">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Kostnad</div>
                        <div className="font-semibold text-foreground text-[11px]">{dest.cost}</div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                      Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* London Deep Dive */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">🇬🇧 Studera i London</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  London – världens studentstad nr 1
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Rankad som världens bästa studentstad av QS sex år i rad. 40+ universitet, 400 000+ studenter och en av planetens mest internationella miljöer.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
                {[
                  { icon: GraduationCap, label: "Universitet", value: "40+" },
                  { icon: Users, label: "Studenter", value: "400 000+" },
                  { icon: Globe2, label: "Internationella", value: "≈ 30 %" },
                  { icon: CalendarDays, label: "Master tar", value: "1 år" },
                ].map((s) => (
                  <div key={s.label} className="bg-card border border-border/60 rounded-xl p-4 text-center">
                    <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-display text-xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Top universities */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" /> Topp-universiteten
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  {
                    name: "Imperial College London",
                    rank: "QS #2 i världen",
                    focus: "Teknik, naturvetenskap, medicin & ekonomi",
                    url: "https://www.imperial.ac.uk/study/",
                  },
                  {
                    name: "UCL – University College London",
                    rank: "QS topp 10",
                    focus: "Brett utbud: arkitektur, AI, juridik, medicin",
                    url: "https://www.ucl.ac.uk/prospective-students/",
                  },
                  {
                    name: "LSE – London School of Economics",
                    rank: "Topp 5 i världen inom samhällsvetenskap",
                    focus: "Ekonomi, statsvetenskap, internationella relationer",
                    url: "https://www.lse.ac.uk/study-at-lse",
                  },
                  {
                    name: "King's College London",
                    rank: "QS topp 40",
                    focus: "Medicin, juridik, humaniora, war studies",
                    url: "https://www.kcl.ac.uk/study",
                  },
                  {
                    name: "Queen Mary University of London",
                    rank: "Russell Group",
                    focus: "Bra mix till lägre antagningskrav – East London",
                    url: "https://www.qmul.ac.uk/undergraduate/",
                  },
                  {
                    name: "Central Saint Martins (UAL)",
                    rank: "Världens främsta konst- & designskola",
                    focus: "Mode, grafisk design, scenkonst",
                    url: "https://www.arts.ac.uk/colleges/central-saint-martins",
                  },
                ].map((u) => (
                  <a
                    key={u.name}
                    href={u.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card border border-border/60 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{u.name}</h4>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                    <div className="text-xs font-medium text-primary mb-2">{u.rank}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{u.focus}</p>
                  </a>
                ))}
              </div>

              {/* Costs */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <PoundSterling className="w-6 h-6 text-primary" /> Vad kostar det?
              </h3>
              <div className="bg-card border border-border/60 rounded-2xl overflow-hidden mb-12">
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
                  <div className="p-6">
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Terminsavgifter (per år)</div>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex justify-between"><span className="text-muted-foreground">Bachelor</span><span className="font-semibold text-foreground">£18 000–35 000</span></li>
                      <li className="flex justify-between"><span className="text-muted-foreground">Master (1 år)</span><span className="font-semibold text-foreground">£20 000–40 000</span></li>
                      <li className="flex justify-between"><span className="text-muted-foreground">LSE / Imperial / UCL</span><span className="font-semibold text-foreground">£28 000–45 000</span></li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Levnadskostnader (per månad)</div>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex justify-between"><span className="text-muted-foreground">Studentboende</span><span className="font-semibold text-foreground">£900–1 600</span></li>
                      <li className="flex justify-between"><span className="text-muted-foreground">Mat & vardag</span><span className="font-semibold text-foreground">£300–450</span></li>
                      <li className="flex justify-between"><span className="text-muted-foreground">Tube (18+ Student)</span><span className="font-semibold text-foreground">£100–160</span></li>
                      <li className="flex justify-between"><span className="text-muted-foreground">UKVI minimum</span><span className="font-semibold text-foreground">£1 483/mån</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/5 border-t border-primary/10 px-6 py-4 text-sm text-foreground/80">
                  💡 <strong>CSN täcker det mesta:</strong> Maxbidrag + lån för studier i London ≈ <strong>14 700 kr/mån</strong> + extra lån för terminsavgifter. Räkna med att toppa upp 2 000–4 000 kr/mån för London-livsstil.
                </div>
              </div>

              {/* Visa & application */}
              <div className="grid md:grid-cols-2 gap-5 mb-12">
                <div className="bg-card border border-border/60 rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" /> Student Visa (post-Brexit)
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/85">
                    <li>• Visumavgift: <strong>£524</strong></li>
                    <li>• Immigration Health Surcharge (IHS): <strong>£776/år</strong> – ger full NHS-vård</li>
                    <li>• CAS från ditt universitet krävs (skickas efter antagning)</li>
                    <li>• Bevis på medel: ca <strong>£13 347</strong> för 9 mån i London</li>
                    <li>• Får jobba <strong>20 timmar/vecka</strong> under termin, heltid på lov</li>
                    <li>• <strong>Graduate Route:</strong> 2 år arbetstillstånd efter examen</li>
                  </ul>
                  <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary font-medium mt-4 hover:underline">
                    Ansök på gov.uk <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
                <div className="bg-card border border-border/60 rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-primary" /> Så ansöker du via UCAS
                  </h3>
                  <ol className="space-y-2 text-sm text-foreground/85 list-decimal list-inside">
                    <li>Skapa konto på <strong>UCAS</strong> (september året innan)</li>
                    <li>Välj upp till <strong>5 program</strong> (bachelor)</li>
                    <li>Skriv <strong>Personal Statement</strong> (4 000 tecken)</li>
                    <li>Skicka in IELTS/TOEFL eller Cambridge English (oftast IELTS 6.5+)</li>
                    <li>Deadline: <strong>31 januari</strong> (Oxbridge & medicin: 16 oktober)</li>
                    <li>Master: ansök <strong>direkt till universitetet</strong>, ofta rullande</li>
                  </ol>
                  <a href="https://www.ucas.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary font-medium mt-4 hover:underline">
                    Till UCAS <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Neighborhoods */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Home className="w-6 h-6 text-primary" /> Var bor studenterna?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { area: "Camden & King's Cross", vibe: "Nära UCL & SOAS, livlig musikscen, marknader." },
                  { area: "Shoreditch & Hackney", vibe: "Hipster East London, billigare, bra för QMUL & UAL." },
                  { area: "South Kensington", vibe: "Kring Imperial – museer, tryggt, dyrare." },
                  { area: "Brixton & Clapham", vibe: "Sociala studentområden, bra pubar, billigare hyror." },
                  { area: "Stratford", vibe: "Modernt, bra för QMUL, snabb tube till centrum." },
                  { area: "Bloomsbury", vibe: "Akademiska hjärtat – UCL, Birkbeck, British Museum runt hörnet." },
                ].map((n) => (
                  <div key={n.area} className="bg-card border border-border/60 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold text-foreground text-sm">{n.area}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{n.vibe}</p>
                  </div>
                ))}
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Train className="w-5 h-5 text-primary" /> Praktiska länkar för London
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                  {[
                    { label: "UCAS – ansök till bachelor", url: "https://www.ucas.com/" },
                    { label: "UK Student Visa", url: "https://www.gov.uk/student-visa" },
                    { label: "CSN – studier i Storbritannien", url: "https://www.csn.se/bidrag-och-lan/utlandsstudier-med-studiemedel.html" },
                    { label: "SpareRoom – hyra rum", url: "https://www.spareroom.co.uk/" },
                    { label: "Unite Students – studentboende", url: "https://www.unitestudents.com/" },
                    { label: "TfL – student-Oyster", url: "https://tfl.gov.uk/fares/free-and-discounted-travel" },
                    { label: "Chevening Scholarships (master)", url: "https://www.chevening.org/" },
                    { label: "British Council – studera i UK", url: "https://study-uk.britishcouncil.org/" },
                  ].map((l) => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors group">
                      <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Swedish Universities - Exchange opportunities */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">🇸🇪 Via ditt svenska universitet</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Sveriges 5 bästa universitet för utbyte
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Det enklaste – och billigaste – sättet att studera utomlands är via ditt svenska universitet. Här är de 5 lärosäten med flest och bästa utbytesavtal.
              </p>
            </div>

            <Tabs defaultValue={swedishUniversities[0].shortName} className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 h-auto gap-2 bg-transparent mb-8 p-0">
                {swedishUniversities.map((uni) => (
                  <TabsTrigger
                    key={uni.shortName}
                    value={uni.shortName}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border/60 rounded-xl py-3 px-4 font-semibold text-sm h-auto flex-col gap-0.5"
                  >
                    <span className="text-base">{uni.shortName}</span>
                    <span className="text-[10px] font-normal opacity-70 hidden sm:block">{uni.name.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {swedishUniversities.map((uni) => (
                <TabsContent key={uni.shortName} value={uni.shortName} className="mt-0">
                  <div className={`bg-gradient-to-br ${uni.color} rounded-3xl border border-border/60 p-6 sm:p-10 shadow-sm`}>
                    <div className="mb-8 pb-6 border-b border-border/40">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{uni.rank}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">{uni.name}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">{uni.description}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <div className="bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/40">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          <Users className="w-3.5 h-3.5" /> Studenter
                        </div>
                        <div className="font-semibold text-foreground">{uni.students}</div>
                      </div>
                      <div className="bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/40">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          <Globe2 className="w-3.5 h-3.5" /> Utbytesavtal
                        </div>
                        <div className="font-semibold text-foreground">{uni.exchangeCount}</div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary">✈️</span> Möjligheter du har via {uni.shortName}
                      </h4>
                      <ul className="space-y-2.5">
                        {uni.opportunities.map((opp) => (
                          <li key={opp} className="flex items-start gap-3 text-foreground/90">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="leading-relaxed">{opp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary">🌍</span> Mest populära destinationer
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uni.topDestinations.map((dest) => (
                          <span key={dest} className="text-sm font-medium bg-background/80 text-foreground border border-border/60 px-3 py-1.5 rounded-full">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-6">
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Så finansierar du det</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{uni.fundingTip}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={uni.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-xl transition-colors group"
                    >
                      Läs mer om {uni.shortName}:s utbyten
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              💡 <strong>Tips:</strong> Ansök 6–12 månader innan utbytestermin. CSN täcker både studieavgift och uppehälle utomlands – du betalar inget extra.
            </p>
          </div>
        </section>

        {/* Language Schools */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">🗣️ Språkkurser</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Lär dig ett nytt språk
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                Bo och studera i landet – det snabbaste sättet att lära sig ett språk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {languageSchools.map((school) => (
                <div
                  key={school.language}
                  className="group bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{school.flag}</span>
                    <h3 className="font-semibold text-lg text-foreground">{school.language}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {school.countries.map((c) => (
                      <span key={c} className="text-xs bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full">{c}</span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1.5 mb-3">
                    <div>📅 {school.duration}</div>
                    <div>💰 {school.cost}</div>
                  </div>
                  <p className="text-sm text-foreground/80 italic mb-4 leading-relaxed">
                    💡 {school.bestFor}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Boka kurs hos:</p>
                    <div className="flex flex-col gap-1.5">
                      {school.providers.map((p) => (
                        <a
                          key={p.name}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1 group/link"
                        >
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                          {p.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Language providers / booking platforms */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">🎒 Var bokar du?</p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Svenska & internationella bokningssidor
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Jämför skolor, läs recensioner och boka allt på ett ställe – ofta till samma pris som direkt.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {languageProviders.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">{p.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      Besök sajten <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                💡 <strong>CSN-tips:</strong> Språkkurser på minst 13 veckor i CSN-godkänt land berättigar till studiemedel. Kolla på <a href="https://www.csn.se/bidrag-och-lan/utlandsstudier-med-studiemedel.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">csn.se</a> innan du bokar.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">❓ Vanliga frågor</p>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Allt om utlandsstudier
                </h2>
                <p className="text-muted-foreground">
                  CSN, ansökan, stipendier och mer – vi svarar på dina frågor.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 rounded-xl px-5 bg-card data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all">
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
