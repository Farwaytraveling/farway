import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Clock, DollarSign, User, ExternalLink, Sparkles, ArrowRight, Briefcase, Calendar, MapPin, FileCheck, Wallet, CheckCircle2, AlertCircle, FileText, CalendarClock, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-working-holiday.jpg";
import { CityContextBanner } from "@/components/CityContextBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Vad är ett Working Holiday-visum?",
    answer: "Ett Working Holiday-visum (WHV) är ett tidsbegränsat visum som tillåter unga vuxna att resa och arbeta i ett annat land, oftast i 12 månader. Till skillnad från ett turistvisum får du laglig rätt att ta anställning och tjäna pengar för att finansiera din vistelse.",
  },
  {
    question: "Vilka grundkrav måste jag uppfylla?",
    answer: "Du behöver vara svensk medborgare, ha ett pass som är giltigt under hela vistelsen, vara inom åldersramen (18–30 år för de flesta länder, upp till 35 för Kanada), kunna visa sparmedel motsvarande ca 5 000 AUD/NZD/CAD (~35 000–50 000 SEK), ha returbiljett eller pengar för en, samt en heltäckande reseförsäkring.",
  },
  {
    question: "Hur lång tid tar ansökan?",
    answer: "Australien: oftast några dagar till 4 veckor online. Nya Zeeland: vanligtvis under 4 veckor. Kanada (IEC): pool-system med dragningar – räkna med 8–12 veckor från intresseanmälan till godkänt visum. Japan: 1–4 veckor via ambassaden i Stockholm, begränsad kvot. Ansök alltid 2–4 månader före planerad avresa.",
  },
  {
    question: "Kan jag förlänga visumet?",
    answer: "Australien: kan förlängas till 2:a och 3:e året om du utför specificerat arbete (farm, fiske, byggnation i regional Australien). Nya Zeeland: kan förlängas med 3 månader om du gjort 3 månaders säsongsarbete inom trädgård/vinodling. Kanada IEC: kan göras två gånger totalt. Japan: kan inte förlängas.",
  },
  {
    question: "Hur mycket pengar behöver jag spara?",
    answer: "Utöver de officiella sparkraven (~5 000 AUD/NZD/CAD) rekommenderas en buffert på 20 000–40 000 SEK för flygbiljett, första månadens hyra, försäkring och levnadskostnader tills första lönen. Många budgeterar 60 000–80 000 SEK totalt vid avresa.",
  },
  {
    question: "Behöver jag reseförsäkring?",
    answer: "Ja. För Nya Zeeland och Japan är det krav. För Australien och Kanada är det starkt rekommenderat och i praktiken nödvändigt. Försäkringen ska täcka hela vistelsen, inklusive sjukvård, olyckor, hemtransport och gärna stöld. Vanlig hemförsäkring räcker oftast bara 45 dagar.",
  },
  {
    question: "Kan jag jobba hur länge som helst hos samma arbetsgivare?",
    answer: "Nej. Australien: max 6 månader per arbetsgivare (kan ibland förlängas vid godkännande). Nya Zeeland: ingen tidsgräns per arbetsgivare. Kanada: ingen tidsgräns. Japan: får inte arbeta inom vissa branscher (barer, klubbar, vissa nöjesverksamheter).",
  },
  {
    question: "Vilka skatter betalar jag?",
    answer: "Du betalar skatt i landet du arbetar. Australien: ~15 % på inkomst upp till 45 000 AUD som WHV-innehavare. Nya Zeeland: progressiv skatt från 10,5 %. Kanada: federal + provinsiell skatt, ofta 15–25 %. Japan: ~5–10 % beroende på inkomst. Ansök om Tax File Number (eller motsvarande) direkt när du landar.",
  },
];

const workingHolidayCountries = [
  {
    country: "Australien",
    flag: "🇦🇺",
    tagline: "Det klassiska valet – sol, jobb och oändliga möjligheter",
    visaType: "Working Holiday Visa (subclass 417)",
    ageLimit: "18–30 år",
    duration: "12 månader (förlängningsbart till 3 år)",
    cost: "~670 AUD",
    processingTime: "Dagar–4 veckor",
    savingsRequired: "5 000 AUD",
    avgWage: "25–35 AUD/timme",
    bestSeason: "Året runt – sept–nov för start i Sydney/Melbourne",
    quota: "Ingen kvot för svenskar",
    description:
      "Australien är överlägset mest populärt bland svenska Working Holiday-resenärer. Stark ekonomi, hög minimilön, fungerande engelska överallt och ett brett utbud av jobb gör det till det självklara förstavalet. Som svensk får du ansöka från Sverige eller på plats, och visumet kan förlängas i upp till tre år om du utför specificerat regionalt arbete.",
    popularJobs: ["Hospitality (café/bar/restaurang)", "Farm work & fruit picking", "Bygg & hantverk", "Försäljning & detaljhandel", "Au pair & barnpassning"],
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Cairns"],
    pros: ["Hög minimilön (~24 AUD/h)", "Förlängningsbart till 3 år", "Stort svenskt community"],
    cons: ["Dyrt boende i storstäder", "Långt och dyrt flyg", "Stark sol – skydd krävs"],
    steps: [
      "Skapa ImmiAccount på immi.homeaffairs.gov.au",
      "Ladda upp pass, biometri och bevis på sparmedel",
      "Betala ansökningsavgift (~670 AUD)",
      "Vänta på beslut (oftast 1–4 veckor)",
      "Boka flyg – du har 12 mån på dig att resa in",
      "Sök Tax File Number (TFN) direkt vid ankomst",
    ],
    officialUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
    embassyUrl: "https://www.swedenabroad.se/canberra",
    destinationSlug: "australien",
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    tagline: "Äventyrarens paradis – natur, vingårdar och skidsäsong",
    visaType: "Working Holiday Visa (Sweden)",
    ageLimit: "18–30 år",
    duration: "12 månader (förlängningsbart med 3 mån)",
    cost: "~420 NZD",
    processingTime: "Under 4 veckor",
    savingsRequired: "4 200 NZD",
    avgWage: "23–30 NZD/timme",
    bestSeason: "Okt–dec (sommarsäsong) eller maj–jun (skidsäsong)",
    quota: "Ingen kvot för svenskar",
    description:
      "Nya Zeeland är drömmen för dig som vill kombinera arbete med extremsporter och natur i världsklass. Från vingårdsarbete i Marlborough till skidsäsong i Queenstown och bartending i Wellington – landet är litet, säkert och lätt att resa runt i. Visumet kan förlängas i 3 månader om du arbetat säsongsvis inom trädgård eller vinodling.",
    popularJobs: ["Vingårds- & fruktplockning", "Skidsäsong (Queenstown/Wanaka)", "Hospitality", "Backpacker hostels", "Turism & guide"],
    popularCities: ["Queenstown", "Auckland", "Wellington", "Christchurch", "Wanaka"],
    pros: ["Spektakulär natur", "Säkert och engelsktalande", "Lätt att komma in på arbetsmarknaden"],
    cons: ["Lägre löner än Australien", "Avlägset – dyrt att resa hem", "Begränsat med storstadsjobb"],
    steps: [
      "Skapa RealMe-konto på immigration.govt.nz",
      "Fyll i online-ansökan + ladda upp pass",
      "Betala visumavgift + IVL (turistskatt)",
      "Genomgå hälsodeklaration",
      "Visum godkänns oftast inom 4 veckor",
      "Ansök om IRD-nummer vid ankomst",
    ],
    officialUrl: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/sweden-working-holiday-visa",
    embassyUrl: "https://www.swedenabroad.se/wellington",
    destinationSlug: "nya-zeeland",
  },
  {
    country: "Kanada",
    flag: "🇨🇦",
    tagline: "Norra halvklotets favorit – storstad, skidor och vildmark",
    visaType: "International Experience Canada (IEC) – Working Holiday",
    ageLimit: "18–35 år",
    duration: "12 månader (vissa kan förlängas till 24)",
    cost: "~272 CAD (avgifter + biometri)",
    processingTime: "8–12 veckor från pool till visum",
    savingsRequired: "2 500 CAD",
    avgWage: "17–25 CAD/timme",
    bestSeason: "Pool öppnar i januari – sök tidigt på säsongen",
    quota: "Begränsad årlig kvot – pool-system med dragningar",
    description:
      "Kanada är unikt för att åldersgränsen sträcker sig upp till 35 år, vilket gör programmet attraktivt för något äldre sökande. IEC fungerar som en pool: du skapar en profil, väntar på att bli inbjuden, och har sedan 20 dagar på dig att ansöka. Skidsäsong i Whistler eller Banff är extremt populärt – men även Toronto, Montréal och Vancouver lockar för stadsliv och tech-jobb.",
    popularJobs: ["Skidresort-personal (Whistler/Banff)", "Hospitality i storstäder", "Bygg & hantverk", "Retail & service", "Sommarcamp & turism"],
    popularCities: ["Vancouver", "Toronto", "Montréal", "Whistler", "Banff"],
    pros: ["Åldersgräns upp till 35", "Världsklass skidsäsong", "Lågt sparkrav (2 500 CAD)"],
    cons: ["Pool-system kan vara osäkert", "Kall vinter – kläder är dyra", "Tar längre tid att få visum"],
    steps: [
      "Skapa GCKey-konto på canada.ca/iec",
      "Fyll i intresseanmälan (kommer in i pool)",
      "Vänta på Invitation to Apply (ITA)",
      "Ansök inom 20 dagar – ladda upp dokument",
      "Lämna biometri på ambassaden",
      "Få Port of Entry letter – visa upp vid ankomst",
    ],
    officialUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html",
    embassyUrl: "https://www.swedenabroad.se/ottawa",
    destinationSlug: "kanada",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    tagline: "Kulturupplevelse på djupet – gratis visum och unik vardag",
    visaType: "Working Holiday Visa (Japan)",
    ageLimit: "18–30 år",
    duration: "12 månader",
    cost: "Gratis",
    processingTime: "1–4 veckor via ambassaden i Stockholm",
    savingsRequired: "Motsvarande 250 000 JPY (~17 000 SEK)",
    avgWage: "1 000–1 300 JPY/timme",
    bestSeason: "Mar–maj (körsbärsblom) eller sep–nov (höstlöv)",
    quota: "Begränsad årlig kvot – sök tidigt",
    description:
      "Japan är det mest unika WHV-landet för svenskar – gratis visum, djupgående kulturupplevelse och en chans att lära sig japanska på riktigt. Tokyo och Osaka erbjuder jobb inom turism, engelskundervisning, hostels och restaurang. Notera att du inte får jobba inom barer, klubbar eller nöjesindustri. Visumet kan inte förlängas, men det är en av de starkaste meriterna på ett CV.",
    popularJobs: ["Engelsklärare (privatlektioner/eikaiwa)", "Hostel- & hotellpersonal", "Skidresort (Niseko, Hakuba)", "Restaurang & café", "Modell & event"],
    popularCities: ["Tokyo", "Osaka", "Kyoto", "Niseko", "Fukuoka"],
    pros: ["Gratis visum", "Unik kulturmerit", "Säkert – nästan obefintlig brottslighet"],
    cons: ["Språkbarriären är verklig", "Får inte jobba i barer/klubbar", "Kan inte förlängas"],
    steps: [
      "Boka tid på japanska ambassaden i Stockholm",
      "Skriv en plan för vistelsen (krav!)",
      "Ta med pass, foto, kontoutdrag, returbiljett",
      "Lämna ansökan personligen",
      "Hämta visum efter 1–4 veckor",
      "Registrera dig på kommunkontoret vid ankomst",
    ],
    officialUrl: "https://www.se.emb-japan.go.jp/itpr_sv/visa_working_holiday.html",
    embassyUrl: "https://www.swedenabroad.se/tokyo",
    destinationSlug: "japan",
  },
];

const WorkingHoliday = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Working Holiday-visum 2026 – Australien, Nya Zeeland, Kanada & Japan | Farway"
        description="Komplett svensk guide till Working Holiday-visum i Australien, Nya Zeeland, Kanada och Japan. Krav, kostnader, löner, jobb, ansökningssteg och officiella länkar."
        canonical="https://farway.lovable.app/working-holiday"
      />
      <Header />
      <CityContextBanner programLabel="Working Holiday" />
      <main>
        {/* Hero */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
                🧳 Det mest populära programmet
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Working Holiday
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed">
                Jobba, res och lev i ett nytt land i upp till 12 månader.
              </p>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
                Den svenska guiden till de fyra största destinationerna: Australien, Nya Zeeland, Kanada och Japan.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: User, text: "18–35 år" },
                  { icon: Clock, text: "12–24 månader" },
                  { icon: DollarSign, text: "Gratis – ~670 AUD" },
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

        {/* Quick comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Jämför på 30 sekunder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
                De fyra destinationerna – sida vid sida
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold">Land</th>
                    <th className="text-left p-4 font-semibold">Ålder</th>
                    <th className="text-left p-4 font-semibold">Längd</th>
                    <th className="text-left p-4 font-semibold">Kostnad</th>
                    <th className="text-left p-4 font-semibold">Sparkrav</th>
                    <th className="text-left p-4 font-semibold">Timlön (snitt)</th>
                  </tr>
                </thead>
                <tbody>
                  {workingHolidayCountries.map((c) => (
                    <tr key={c.country} className="border-t border-border/60 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">
                        <span className="mr-2">{c.flag}</span>
                        {c.country}
                      </td>
                      <td className="p-4 text-muted-foreground">{c.ageLimit}</td>
                      <td className="p-4 text-muted-foreground">{c.duration}</td>
                      <td className="p-4 text-muted-foreground">{c.cost}</td>
                      <td className="p-4 text-muted-foreground">{c.savingsRequired}</td>
                      <td className="p-4 text-muted-foreground">{c.avgWage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Countries – detailed */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Fullständiga guider
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Välj din destination
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Allt du behöver för att fatta beslut, ansöka och packa väskan.
              </p>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {workingHolidayCountries.map((c) => (
                <article
                  key={c.country}
                  id={c.destinationSlug}
                  className="bg-card rounded-3xl border border-border/60 shadow-sm overflow-hidden scroll-mt-24"
                >
                  <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-primary/40" />
                  <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 pb-6 border-b border-border/60">
                      <span className="text-5xl leading-none">{c.flag}</span>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{c.country}</h3>
                        <p className="text-primary font-medium mt-1">{c.tagline}</p>
                        <p className="text-xs text-muted-foreground mt-1">{c.visaType}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {[
                        { icon: User, label: "Ålder", value: c.ageLimit },
                        { icon: Clock, label: "Längd", value: c.duration },
                        { icon: DollarSign, label: "Visumavgift", value: c.cost },
                        { icon: Wallet, label: "Sparkrav", value: c.savingsRequired },
                        { icon: Briefcase, label: "Timlön", value: c.avgWage },
                        { icon: Calendar, label: "Bäst säsong", value: c.bestSeason },
                        { icon: FileCheck, label: "Handläggning", value: c.processingTime },
                        { icon: AlertCircle, label: "Kvot", value: c.quota },
                      ].map((s) => (
                        <div key={s.label} className="bg-muted/40 rounded-xl p-3 border border-border/40">
                          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider mb-1">
                            <s.icon className="w-3 h-3" />
                            {s.label}
                          </div>
                          <div className="font-semibold text-foreground text-sm">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-8">{c.description}</p>

                    {/* Jobs + Cities */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          Populära jobb
                        </h4>
                        <ul className="space-y-2">
                          {c.popularJobs.map((job) => (
                            <li key={job} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{job}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          Populära städer
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {c.popularCities.map((city) => (
                            <span key={city} className="text-sm font-medium bg-primary/5 text-primary border border-primary/15 px-3 py-1.5 rounded-full">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pros / Cons */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-primary/[0.04] border border-primary/15 rounded-xl p-5">
                        <h4 className="font-display font-semibold text-foreground mb-3">Fördelar</h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {c.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <span className="text-primary mt-0.5">+</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/40 border border-border/60 rounded-xl p-5">
                        <h4 className="font-display font-semibold text-foreground mb-3">Att tänka på</h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {c.cons.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <span className="text-muted-foreground mt-0.5">−</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-8">
                      <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-primary" />
                        Så ansöker du – steg för steg
                      </h4>
                      <ol className="space-y-3">
                        {c.steps.map((step, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border/60">
                      <Button asChild className="flex-1">
                        <a href={c.officialUrl} target="_blank" rel="noopener noreferrer">
                          Officiell ansökan
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <a href={`/destination/${c.destinationSlug}`}>
                          Läs mer om {c.country}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="flex-1">
                        <a href={c.embassyUrl} target="_blank" rel="noopener noreferrer">
                          Svenska ambassaden
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
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
                Innan du ansöker
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Working Holiday är ett av de bästa sätten att uppleva ett nytt land på riktigt. Du får tid att jobba, resa, lära dig språket och bygga ett internationellt nätverk – allt inom ramen för ett legitimt visum.
                </p>
                <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
                  <p className="text-foreground font-medium mb-2">💡 Farways rekommendation</p>
                  <p className="text-muted-foreground">
                    Är du osäker – välj <strong>Australien</strong>. Högst lön, lättast att hitta jobb, störst svenskt community och möjlighet att förlänga i upp till 3 år. Vill du ha äventyr utöver det vanliga är <strong>Nya Zeeland</strong> svaret. Är du över 30 är <strong>Kanada</strong> det enda alternativet. Och söker du en unik kulturupplevelse på CV:t – välj <strong>Japan</strong>.
                  </p>
                </div>
                <p>
                  Oavsett vilket land du väljer: <strong>ansök i god tid</strong>, <strong>köp heltäckande reseförsäkring</strong> och <strong>spara en buffert</strong> utöver det officiella sparkravet. Då slipper du stress både före och under resan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ❓ Vanliga frågor
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-3">
                  Allt du behöver veta
                </h2>
                <p className="text-muted-foreground">
                  Svar på de vanligaste frågorna om Working Holiday-visum.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 rounded-xl px-5 bg-card data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5 hover:text-primary transition-colors">
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

export default WorkingHoliday;
