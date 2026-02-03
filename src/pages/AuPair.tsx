import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, ArrowRight, Clock, DollarSign, User, ExternalLink, Home, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const auPairCountries = [
  {
    country: "USA",
    flag: "🇺🇸",
    programType: "J-1 Au Pair Visa",
    ageLimit: "18-26 år",
    duration: "12-24 månader",
    cost: "~$500-1000 USD (programavgift)",
    weeklyPay: "$195.75/vecka",
    description: "Det mest populära Au Pair-landet. Bo hos en amerikansk familj, ta hand om barn och upplev den amerikanska livsstilen.",
    highlights: ["Collegestudier ingår", "Resepengar", "Kulturutbyte"],
    cities: ["New York", "Los Angeles", "Miami", "Chicago", "San Francisco"],
    applyUrl: "https://j1visa.state.gov/programs/au-pair",
  },
  {
    country: "Frankrike",
    flag: "🇫🇷",
    programType: "Au Pair Visa",
    ageLimit: "18-30 år",
    duration: "6-12 månader",
    cost: "Gratis visum",
    weeklyPay: "€80-100/vecka",
    description: "Lär dig franska medan du bor i Paris eller Provence. Frankrike erbjuder ett rikt kulturliv och god mat.",
    highlights: ["Lär dig franska", "Paris", "Kultur & mat"],
    cities: ["Paris", "Lyon", "Marseille", "Nice", "Bordeaux"],
    applyUrl: "https://france-visas.gouv.fr/",
  },
  {
    country: "Tyskland",
    flag: "🇩🇪",
    programType: "Au Pair Visa",
    ageLimit: "18-26 år",
    duration: "6-12 månader",
    cost: "Gratis visum",
    weeklyPay: "€280/månad",
    description: "Populärt val för skandinaver. Tyskland erbjuder bra villkor och närhet till hemma.",
    highlights: ["Nära Sverige", "Bra villkor", "Språkkurser"],
    cities: ["Berlin", "München", "Hamburg", "Frankfurt", "Köln"],
    applyUrl: "https://www.auswaertiges-amt.de/",
  },
  {
    country: "Spanien",
    flag: "🇪🇸",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18-30 år",
    duration: "3-12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€60-80/vecka",
    description: "Sol, strand och spanska! Bo hos en familj i Barcelona eller Madrid och förbättra din spanska.",
    highlights: ["Inget visum", "Sol & strand", "Spanska"],
    cities: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga"],
    applyUrl: "https://www.aupairworld.com/en/au_pair_program/spain",
  },
  {
    country: "Italien",
    flag: "🇮🇹",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18-30 år",
    duration: "3-12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€60-80/vecka",
    description: "La dolce vita väntar! Upplev italiensk kultur, mat och livsstil medan du tar hand om bambini.",
    highlights: ["Inget visum", "Mat & kultur", "Italienska"],
    cities: ["Rom", "Milano", "Florens", "Venedig", "Neapel"],
    applyUrl: "https://www.aupairworld.com/en/au_pair_program/italy",
  },
  {
    country: "Storbritannien",
    flag: "🇬🇧",
    programType: "Youth Mobility Scheme",
    ageLimit: "18-30 år",
    duration: "Upp till 24 månader",
    cost: "~£298 GBP",
    weeklyPay: "£85-150/vecka",
    description: "Förbättra din engelska i London eller på landsbygden. Post-Brexit kräver nu Youth Mobility Visa.",
    highlights: ["Engelska", "London", "Kulturupplevelser"],
    cities: ["London", "Manchester", "Edinburgh", "Oxford", "Cambridge"],
    applyUrl: "https://www.gov.uk/youth-mobility",
  },
  {
    country: "Irland",
    flag: "🇮🇪",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18-30 år",
    duration: "3-12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€80-100/vecka",
    description: "Vänliga familjer och vacker natur. Irland är perfekt för dig som vill förbättra din engelska i Europa.",
    highlights: ["Inget visum", "Engelska", "Vänligt folk"],
    cities: ["Dublin", "Cork", "Galway", "Limerick", "Killarney"],
    applyUrl: "https://www.aupairworld.com/en/au_pair_program/ireland",
  },
  {
    country: "Australien",
    flag: "🇦🇺",
    programType: "Working Holiday (subclass 417)",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$510 AUD",
    weeklyPay: "$200-400 AUD/vecka",
    description: "Kombinera au pair-arbete med Working Holiday-visum. Populärt bland svenska backpackers.",
    highlights: ["Working Holiday", "Stränderna", "Äventyr"],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Gold Coast"],
    applyUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    programType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$280 NZD",
    weeklyPay: "$200-350 NZD/vecka",
    description: "Naturskönt och familjevänligt. Nya Zeeland är perfekt för äventyrslystna au pairs.",
    highlights: ["Natur", "Säkerhet", "Äventyr"],
    cities: ["Auckland", "Wellington", "Christchurch", "Queenstown", "Rotorua"],
    applyUrl: "https://www.immigration.govt.nz/",
  },
  {
    country: "Österrike",
    flag: "🇦🇹",
    programType: "Au Pair (inget visum krävs)",
    ageLimit: "18-28 år",
    duration: "6-12 månader",
    cost: "Inget visum behövs (EU)",
    weeklyPay: "€450/månad",
    description: "Alperna, Wien och klassisk kultur. Österrike erbjuder en unik blandning av tradition och modernitet.",
    highlights: ["Inget visum", "Alperna", "Kultur"],
    cities: ["Wien", "Salzburg", "Innsbruck", "Graz", "Linz"],
    applyUrl: "https://www.aupairworld.com/en/au_pair_program/austria",
  },
];

const AuPair = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-500 to-pink-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="w-7 h-7" />
                </div>
                <span className="text-white/80 font-medium">Program</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Au Pair
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Bo hos en värdfamilj, ta hand om barn och upplev en ny kultur på djupet. 
                Perfekt för dig som vill resa, lära dig ett nytt språk och skapa livslånga minnen.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <User className="w-4 h-4" />
                  <span>18-30 år</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-4 h-4" />
                  <span>6-24 månader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Home className="w-4 h-4" />
                  <span>Kost & logi ingår</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Baby className="w-4 h-4" />
                  <span>25-45 tim/vecka</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Populära Au Pair-länder
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Här är de mest populära länderna för svenska au pairs. Klicka på ett land för att hitta värdfamiljer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auPairCountries.map((country) => (
                <div
                  key={country.country}
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {country.country}
                      </h3>
                      <p className="text-sm text-muted-foreground">{country.programType}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {country.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-1">Populära städer</div>
                    <div className="flex flex-wrap gap-1">
                      {country.cities.slice(0, 3).map((city) => (
                        <span key={city} className="text-xs bg-muted px-2 py-0.5 rounded">
                          {city}
                        </span>
                      ))}
                      {country.cities.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{country.cities.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs mb-4 py-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="text-muted-foreground">Ålder</div>
                      <div className="font-medium text-foreground">{country.ageLimit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Längd</div>
                      <div className="font-medium text-foreground">{country.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Kostnad</div>
                      <div className="font-medium text-foreground text-[10px]">{country.cost}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Fickpengar</div>
                      <div className="font-medium text-foreground text-[10px]">{country.weeklyPay}</div>
                    </div>
                  </div>

                  <a href={country.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-colors">
                      <span>Hitta värdfamiljer</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
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
                Vad är Au Pair?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Au Pair är ett kulturutbytesprogram där du bor hos en värdfamilj och hjälper till med barnpassning i utbyte mot kost, logi och fickpengar. Det är ett fantastiskt sätt att uppleva en ny kultur, lära sig ett nytt språk och skapa livslånga vänskapsband.
                </p>
                <p>
                  Som au pair arbetar du vanligtvis 25-45 timmar per vecka med att ta hand om familjens barn. Arbetsuppgifterna kan inkludera att lämna och hämta barn från skolan, laga enkel mat, leka och hjälpa till med läxor. Du får eget rum, mat och fickpengar.
                </p>
                <p>
                  Inom EU behöver svenska medborgare inget visum för att vara au pair. För länder utanför EU, som USA, krävs ett speciellt visum. USA är det mest reglerade landet med J-1-visum som inkluderar collegestudier och garanterade villkor.
                </p>
              </div>

              {/* Popular Agencies */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
                  Hitta värdfamiljer
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="https://www.aupairworld.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">AuPairWorld</div>
                      <div className="text-xs text-muted-foreground">Världens största au pair-plattform</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                  <a 
                    href="https://www.aupair.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                      <Home className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">AuPair.com</div>
                      <div className="text-xs text-muted-foreground">Hitta familjer världen över</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuPair;
