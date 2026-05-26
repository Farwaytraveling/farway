import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Heart, Clock, DollarSign, User, Home, Baby, Sparkles, ArrowRight, Users, X, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-au-pair.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Kända, etablerade Facebook-grupper per stad. Övriga städer faller tillbaka
// till Facebooks egna gruppsökning, som alltid fungerar.
const CITY_FB_GROUPS: Record<string, string> = {
  London: "https://www.facebook.com/groups/aupairsinlondon",
  Paris: "https://www.facebook.com/groups/AuPairsInParis",
  Lyon: "https://www.facebook.com/groups/aupairlyon",
  Barcelona: "https://www.facebook.com/groups/aupairsinbarcelona",
  Madrid: "https://www.facebook.com/groups/aupairsinmadrid",
  Sydney: "https://www.facebook.com/groups/aupairsinsydney",
  Melbourne: "https://www.facebook.com/groups/aupairsinmelbourne",
  Rom: "https://www.facebook.com/groups/aupairsinrome",
  Milano: "https://www.facebook.com/groups/aupairsinmilan",
  "New York": "https://www.facebook.com/groups/aupairsnyc",
  "San Francisco": "https://www.facebook.com/groups/aupairsbayarea",
  Boston: "https://www.facebook.com/groups/aupairsboston",
  Chicago: "https://www.facebook.com/groups/aupairschicago",
  "Los Angeles": "https://www.facebook.com/groups/aupairsinla",
  Berlin: "https://www.facebook.com/groups/aupairsinberlin",
  München: "https://www.facebook.com/groups/aupairmunich",
  Hamburg: "https://www.facebook.com/groups/aupairhamburg",
};

const cityFbUrl = (city: string) =>
  CITY_FB_GROUPS[city] ??
  `https://www.facebook.com/search/groups/?q=${encodeURIComponent(`au pair ${city}`)}`;


const faqItems = [
  {
    question: "Vad gör en au pair egentligen?",
    answer: "Som au pair bor du hos en värdfamilj och hjälper till med barnpassning, vanligtvis 25-45 timmar per vecka. Arbetsuppgifterna inkluderar att lämna/hämta barn från skolan, laga enkel mat, leka, hjälpa med läxor och ibland lättare hushållsarbete kopplat till barnen. Du får eget rum, mat och fickpengar."
  },
  {
    question: "Hur hittar jag en bra värdfamilj?",
    answer: "Använd etablerade plattformar som AuPairWorld och AuPair.com. Ta alltid videointervjuer med potentiella familjer, be om referenser från tidigare au pairs, och ställ detaljerade frågor om förväntningar, arbetstider och ledighet. Lita på din magkänsla - det är viktigt att ni matchar personlighetsmässigt."
  },
  {
    question: "Behöver jag erfarenhet av barnpassning?",
    answer: "De flesta familjer och program kräver minst 200 timmars dokumenterad barnpassningserfarenhet. Detta kan vara babysitting, arbete på förskola/fritids, scoutledare, sportträning för barn eller liknande. USA:s J-1-program har striktast krav. Samla intyg och referenser i god tid."
  },
  {
    question: "Hur mycket fickpengar får jag?",
    answer: "Fickpengarna varierar stort mellan länder. I USA garanteras minst $195,75/vecka (ofta högre i praktiken – många familjer betalar $250–400). I Tyskland ca €280/månad, i Frankrike €70–100/vecka och i Spanien €60–80/vecka. Inom EU är beloppen ofta lägre men kost och logi ingår alltid – du sparar därför nästan allt du tjänar."
  },
  {
    question: "Behöver jag visum som svensk?",
    answer: "Inom EU/EES behöver du inget visum - du kan fritt arbeta som au pair i t.ex. Frankrike, Tyskland, Spanien eller Italien. För USA krävs J-1 Au Pair Visa, för Storbritannien Youth Mobility Scheme, och för Australien/Nya Zeeland Working Holiday-visum. Ansök alltid i god tid."
  },
  {
    question: "Vad händer om det inte fungerar med värdfamiljen?",
    answer: "Om det uppstår problem, kontakta först din au pair-organisation eller plattform för medling. I USA har du rätt att byta familj genom din sponsororganisation. I Europa kan du söka ny familj via plattformarna. Ha alltid en nödfond och kontaktuppgifter till svenska ambassaden."
  },
  {
    question: "Kan jag studera samtidigt som jag är au pair?",
    answer: "Ja, i de flesta länder uppmuntras au pairs att studera, särskilt språkkurser. I USA ingår collegestudier (minst 6 credits) i J-1-programmet och värdfamiljen bidrar med upp till $500. I Europa har du vanligtvis fri tid för studier och många familjer stödjer språkkurser ekonomiskt."
  },
  {
    question: "Hur gammal måste jag vara?",
    answer: "De flesta länder accepterar au pairs mellan 18-30 år. USA har striktare gräns på 18-26 år, och Österrike 18-28 år. Du måste vara ogift och utan egna barn. Vissa program kräver också att du har gymnasieexamen och grundläggande kunskaper i värdlandets språk eller engelska."
  },
];

const auPairCountries = [
  {
    country: "Storbritannien",
    flag: "🇬🇧",
    programType: "Youth Mobility Scheme",
    ageLimit: "18–30 år",
    duration: "Upp till 24 månader",
    cost: "~£319 GBP + £1 035 IHS",
    weeklyPay: "£90–170/vecka",
    description: "London är en av världens mest spännande städer. Förbättra din engelska medan du bor hos en brittisk familj och upplever allt från teatrar till pubar. Obs: inkluderar Immigration Health Surcharge.",
    highlights: ["London", "Engelska", "Kulturupplevelser"],
    cities: ["London", "Cambridge", "Oxford", "Brighton", "Bath"],
    applyUrl: "https://www.gov.uk/youth-mobility",
    facebookUrl: "https://www.facebook.com/groups/aupairsinuk",
    facebookLabel: "Au Pairs in the UK",
  },
  {
    country: "Frankrike",
    flag: "🇫🇷",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18–30 år",
    duration: "6–12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€80–100/vecka",
    description: "Lär dig franska medan du bor i Paris – världens mest romantiska stad. Fantastisk mat, kultur och ett rikt socialt liv väntar.",
    highlights: ["Paris", "Franska", "Kultur & mat"],
    cities: ["Paris", "Lyon", "Marseille", "Nice", "Bordeaux"],
    applyUrl: "https://www.aupairworld.com/en/au-pair-programs/france",
    facebookUrl: "https://www.facebook.com/groups/AuPairsInParis",
    facebookLabel: "Au Pairs in Paris",
  },
  {
    country: "Spanien",
    flag: "🇪🇸",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18–30 år",
    duration: "3–12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€70–80/vecka",
    description: "Sol, strand och spanska! Bo hos en familj i Barcelona och njut av Gaudís arkitektur, strandliv och ett fantastiskt nattliv.",
    highlights: ["Barcelona", "Spanska", "Sol & strand"],
    cities: ["Barcelona", "Madrid", "Valencia", "Sevilla", "Málaga"],
    applyUrl: "https://www.aupairworld.com/en/au-pair-programs/spain",
    facebookUrl: "https://www.facebook.com/groups/aupairsinspain",
    facebookLabel: "Au Pairs in Spain",
  },
  {
    country: "Australien",
    flag: "🇦🇺",
    programType: "Working Holiday Visa (subclass 462)",
    ageLimit: "18–30 år",
    duration: "Upp till 12 månader",
    cost: "~670 AUD",
    weeklyPay: "$250–350 AUD/vecka",
    description: "Kombinera au pair med det australiska äventyret. Upplev surfkultur, vilda djur och en avslappnad livsstil medan du bor hos en australisk familj.",
    highlights: ["Sydney", "Engelska", "Strandliv"],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Gold Coast"],
    applyUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
    facebookUrl: "https://www.facebook.com/groups/aupairsinaustralia",
    facebookLabel: "Au Pairs in Australia",
  },
  {
    country: "Italien",
    flag: "🇮🇹",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18–30 år",
    duration: "3–12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€65–90/vecka",
    description: "Lev la dolce vita! Lär dig italienska medan du bor hos en familj i Rom eller Milano – med pasta, gelato och historia runt varje hörn.",
    highlights: ["Rom", "Italienska", "Mat & historia"],
    cities: ["Rom", "Milano", "Florens", "Neapel", "Turin"],
    applyUrl: "https://www.aupairworld.com/en/au-pair-programs/italy",
    facebookUrl: "https://www.facebook.com/groups/aupairsinitaly",
    facebookLabel: "Au Pairs in Italy",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    programType: "J-1 Au Pair Visa",
    ageLimit: "18–26 år",
    duration: "12 månader (+ 6/9/12 ext.)",
    cost: "~$3 000–4 500 (program)",
    weeklyPay: "Min $195,75/vecka",
    description: "Det mest reglerade och tryggaste au pair-programmet. Kost, logi, $500 mot collegekurser och full försäkring ingår. Sponsras av godkända byråer som Cultural Care eller AuPairCare.",
    highlights: ["Reglerat program", "College-bidrag", "Travel month"],
    cities: ["New York", "San Francisco", "Boston", "Chicago", "Los Angeles"],
    applyUrl: "https://j1visa.state.gov/programs/au-pair",
    facebookUrl: "https://www.facebook.com/groups/aupairsinamerica",
    facebookLabel: "Au Pairs in America",
  },
  {
    country: "Tyskland",
    flag: "🇩🇪",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18–26 år",
    duration: "6–12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "~€280/månad + språkkursbidrag",
    description: "Tyskland har en officiell au pair-modell genom Bundesagentur für Arbeit. Familjen ska bidra med €70/mån till språkkurs och en månads betald semester ingår.",
    highlights: ["Officiellt reglerat", "Språkkursbidrag €70/mån", "Berlin & München"],
    cities: ["Berlin", "München", "Hamburg", "Köln", "Frankfurt"],
    applyUrl: "https://www.aupairworld.com/en/au-pair-programs/germany",
    facebookUrl: "https://www.facebook.com/groups/aupairsingermany",
    facebookLabel: "Au Pairs in Germany",
  },
];

const AuPair = () => {
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [citySearchQuery, setCitySearchQuery] = useState("");

  const allCities = useMemo(
    () => Array.from(new Set(auPairCountries.flatMap((c) => c.cities))).sort(),
    [],
  );

  const filteredCities = useMemo(() => {
    if (!citySearchQuery.trim()) return allCities;
    const q = citySearchQuery.toLowerCase().trim();
    return allCities.filter((city) => city.toLowerCase().includes(q));
  }, [allCities, citySearchQuery]);

  const visibleCountries = useMemo(
    () => (cityFilter ? auPairCountries.filter((c) => c.cities.includes(cityFilter)) : auPairCountries),
    [cityFilter],
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Au Pair utomlands – USA, Frankrike, Tyskland, Spanien | Farway"
        description="Bli au pair i USA, Frankrike, Tyskland, Spanien, Italien eller Storbritannien. Krav, fickpengar, visum och bästa plattformar – samlat för svenska ungdomar."
        canonical="https://farway.lovable.app/au-pair"
      />
      <Header />
      <CityContextBanner programLabel="Au Pair" />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
                💕 Kulturutbyte & familjeliv
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Au Pair
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed">
                Bo hos en värdfamilj i London, Paris eller Barcelona.
              </p>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
                Passa barn, lär dig ett nytt språk och upplev Europas mest spännande städer – med kost, logi och fickpengar.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: User, text: "18–30 år" },
                  { icon: Clock, text: "6–24 månader" },
                  { icon: Home, text: "Kost & logi ingår" },
                  { icon: Baby, text: "25–45 tim/vecka" },
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

        {/* Countries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                7 populära länder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Hitta din värdfamilj
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Från London till New York – välj din drömstad och drömfamilj.
              </p>
            </div>



            {/* City filter */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-2 mb-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Filtrera på stad</span>
              </div>

              {/* City search */}
              <div className="max-w-sm mx-auto mb-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
                  placeholder="Sök stad..."
                  className="w-full pl-9 pr-8 py-2 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                />
                {citySearchQuery && (
                  <button
                    onClick={() => setCitySearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
                <button
                  onClick={() => setCityFilter(null)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    cityFilter === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/40 text-foreground"
                  }`}
                >
                  Alla städer
                </button>
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setCityFilter(city === cityFilter ? null : city)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      cityFilter === city
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:border-primary/40 text-foreground"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
              {citySearchQuery && filteredCities.length === 1 && !cityFilter && (
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Tryck på staden för att filtrera
                </p>
              )}
              {cityFilter && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
                  <span className="text-muted-foreground">
                    Visar {visibleCountries.length} land med <span className="font-medium text-foreground">{cityFilter}</span>
                  </span>
                  <a
                    href={cityFbUrl(cityFilter)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/15 transition-colors text-xs font-medium"
                  >
                    <Users className="w-3.5 h-3.5" />
                    Facebook-grupp för au pairer i {cityFilter}
                  </a>
                  <button
                    onClick={() => setCityFilter(null)}
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs"
                  >
                    <X className="w-3 h-3" /> Rensa
                  </button>
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleCountries.map((country) => (
                <div
                  key={country.country}
                  className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl leading-none">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {country.country}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate">{country.programType}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {country.highlights.map((highlight) => (
                        <span key={highlight} className="text-xs font-medium bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Populära städer – klicka för att filtrera</div>
                      <div className="flex flex-wrap gap-1">
                        {country.cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => setCityFilter(city === cityFilter ? null : city)}
                            className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                              cityFilter === city
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted/70 hover:bg-primary/10 hover:text-primary"
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>


                    <div className="grid grid-cols-2 gap-1 text-center text-xs mb-5 py-3 bg-muted/40 rounded-xl">
                      <div>
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Ålder</div>
                        <div className="font-semibold text-foreground">{country.ageLimit}</div>
                      </div>
                      <div className="border-l border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Längd</div>
                        <div className="font-semibold text-foreground">{country.duration}</div>
                      </div>
                      <div className="col-span-2 border-t border-border mt-2 pt-2 grid grid-cols-2">
                        <div>
                          <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Kostnad</div>
                          <div className="font-semibold text-foreground text-[11px]">{country.cost}</div>
                        </div>
                        <div className="border-l border-border">
                          <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Fickpengar</div>
                          <div className="font-semibold text-foreground text-[11px]">{country.weeklyPay}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <a href={country.applyUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                          <span>Hitta värdfamiljer</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </a>
                      {cityFilter && country.cities.includes(cityFilter) ? (
                        <a href={cityFbUrl(cityFilter)} target="_blank" rel="noopener noreferrer">
                          <Button variant="default" size="sm" className="w-full text-xs bg-[#1877F2] hover:bg-[#166fe5] text-white border-[#1877F2]">
                            <Users className="w-3.5 h-3.5 mr-1.5" />
                            <span>Au Pair-grupp i {cityFilter}</span>
                          </Button>
                        </a>
                      ) : (
                        <a href={country.facebookUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-primary">
                            <Users className="w-3.5 h-3.5 mr-1.5" />
                            <span>Facebook-grupp: {country.facebookLabel}</span>
                          </Button>
                        </a>
                      )}
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
                Livet som Au Pair
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Au Pair är ett kulturutbytesprogram där du bor hos en värdfamilj och hjälper till med barnpassning i utbyte mot kost, logi och fickpengar. Det är ett fantastiskt sätt att uppleva en ny kultur, lära sig ett nytt språk och skapa livslånga vänskapsband.
                </p>
                <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
                  <p className="text-foreground font-medium mb-2">💡 Bra att veta</p>
                  <p className="text-muted-foreground">
                    Inom EU behöver svenska medborgare inget visum för att vara au pair. I USA inkluderar J-1-visumet collegestudier och garanterade villkor.
                  </p>
                </div>
                <p>
                  Det viktigaste är att hitta rätt värdfamilj. Ta dig tid att intervjua flera familjer, fråga om förväntningar och var ärlig med dina egna behov. En bra match leder ofta till livslånga vänskapsband.
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
                  Allt om Au Pair
                </h2>
                <p className="text-muted-foreground">
                  Svar på dina frågor om att vara au pair utomlands.
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

export default AuPair;