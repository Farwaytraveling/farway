import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Clock, DollarSign, ExternalLink, Globe, Heart, MapPin, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const volunteerDestinations = [
  {
    country: "Costa Rica",
    flag: "🇨🇷",
    focus: "Miljö & djurliv",
    duration: "2-12 veckor",
    cost: "Gratis - €300/vecka",
    description: "Skydda havssköldpaddor, regnskog och korallrev. Costa Rica är ett paradis för naturälskare och miljöengagerade.",
    highlights: ["Sköldpaddor", "Regnskog", "Stränderna"],
    projects: ["Marin biologi", "Regnskogsbevarande", "Hållbart jordbruk"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Tanzania",
    flag: "🇹🇿",
    focus: "Utbildning & hälsa",
    duration: "4-24 veckor",
    cost: "€200-500/vecka",
    description: "Undervisa i skolor, hjälp på kliniker eller delta i samhällsutvecklingsprojekt nära Kilimanjaro och Serengeti.",
    highlights: ["Undervisning", "Safari", "Kilimanjaro"],
    projects: ["Skolor", "Sjukhus", "Vattenförsörjning"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    focus: "Djurskydd & undervisning",
    duration: "2-12 veckor",
    cost: "€150-400/vecka",
    description: "Arbeta med elefantreservat, undervisa engelska i byar eller hjälp till med korallrevsrestaurering.",
    highlights: ["Elefanter", "Stränder", "Buddhismen"],
    projects: ["Elefantreservat", "Engelskundervisning", "Marin bevarande"],
    applyUrl: "https://www.volunteerworld.com/",
  },
  {
    country: "Peru",
    flag: "🇵🇪",
    focus: "Samhälle & kultur",
    duration: "2-12 veckor",
    cost: "€100-350/vecka",
    description: "Stötta lokalsamhällen i Anderna, arbeta med barn i Cusco eller delta i arkeologiska projekt nära Machu Picchu.",
    highlights: ["Machu Picchu", "Anderna", "Spanska"],
    projects: ["Barnhem", "Hälsovård", "Byggprojekt"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Nepal",
    flag: "🇳🇵",
    focus: "Katastrofhjälp & utbildning",
    duration: "2-24 veckor",
    cost: "€100-300/vecka",
    description: "Hjälp till med återuppbyggnad, undervisning i bergsbyar eller medicinsk hjälp i avlägsna områden.",
    highlights: ["Himalaya", "Trekking", "Buddhismen"],
    projects: ["Återuppbyggnad", "Undervisning", "Hälsovård"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Sydafrika",
    flag: "🇿🇦",
    focus: "Djurliv & samhälle",
    duration: "2-12 veckor",
    cost: "€200-500/vecka",
    description: "Arbeta på viltreservat med lejon och noshörningar, eller stötta samhällsprojekt i Kapstaden.",
    highlights: ["Safari", "Kapstaden", "Vinregioner"],
    projects: ["Viltreservat", "Samhällscentra", "Marin forskning"],
    applyUrl: "https://www.volunteerworld.com/",
  },
  {
    country: "Guatemala",
    flag: "🇬🇹",
    focus: "Utbildning & hälsa",
    duration: "2-12 veckor",
    cost: "€100-250/vecka",
    description: "Arbeta med mayasamhällen, undervisa och hjälp till med hälsoprojekt i en av Centralamerikas mest färgstarka länder.",
    highlights: ["Mayakultur", "Vulkaner", "Spanska"],
    projects: ["Skolor", "Sjukhus", "Kvinnors rättigheter"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Indien",
    flag: "🇮🇳",
    focus: "Utbildning & kvinnors rättigheter",
    duration: "4-24 veckor",
    cost: "€100-350/vecka",
    description: "Undervisa i skolor, stötta kvinnokooperativ eller arbeta med hälsoprojekt från Rajasthan till Kerala.",
    highlights: ["Taj Mahal", "Spiritualitet", "Matkultur"],
    projects: ["Undervisning", "Kvinnors rättigheter", "Hälsovård"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Fiji",
    flag: "🇫🇯",
    focus: "Miljö & marin biologi",
    duration: "2-12 veckor",
    cost: "€200-500/vecka",
    description: "Dyk bland korallrev, restaurera mangroveskog och stötta lokala fiskaresamhällen i Söderhavet.",
    highlights: ["Korallrev", "Dykning", "Öparadis"],
    projects: ["Marin bevarande", "Samhällsutveckling", "Undervisning"],
    applyUrl: "https://www.volunteerworld.com/",
  },
];

const platforms = [
  { name: "Workaway", url: "https://www.workaway.info/", desc: "Arbete mot kost & logi" },
  { name: "WWOOF", url: "https://wwoof.net/", desc: "Ekologiska gårdar världen över" },
  { name: "Projects Abroad", url: "https://www.projects-abroad.org/", desc: "Organiserade volontärprojekt" },
  { name: "Volunteer World", url: "https://www.volunteerworld.com/", desc: "Jämför volontärprogram" },
];

const faqItems = [
  {
    question: "Kostar det pengar att volontärarbeta?",
    answer: "Det varierar. Plattformar som Workaway och WWOOF erbjuder arbete i utbyte mot kost och logi - du betalar bara resa och en liten medlemsavgift. Organiserade program genom t.ex. Projects Abroad kostar mer (€200-500/vecka) men inkluderar boende, mat, projektledning och stöd."
  },
  {
    question: "Behöver jag speciella kvalifikationer?",
    answer: "För de flesta projekt krävs inga speciella kvalifikationer - engagemang och vilja räcker. Medicinska och undervisningsprojekt kan kräva relevant utbildning. Språkkunskaper (engelska + ev. lokalspråk) är alltid meriterande. Vissa projekt kräver att du är minst 18 år."
  },
  {
    question: "Hur hittar jag ett seriöst volontärprojekt?",
    answer: "Använd etablerade plattformar med omdömen. Undvik 'voluntourism' som gör mer skada än nytta. Fråga: Har projektet lokal förankring? Finns utbildade projektledare? Går pengarna till samhället? Kolla organisationens transparens och läs andras erfarenheter. Var skeptisk mot barnhem-turism."
  },
  {
    question: "Behöver jag visum?",
    answer: "De flesta länder tillåter volontärarbete på turistvisum om det är oavlönat och kortvarigt (under 90 dagar). Längre perioder kan kräva speciella visum. Kontrollera alltid med ambassaden. Inom EU behöver du inget visum."
  },
  {
    question: "Kan jag kombinera volontärarbete med resande?",
    answer: "Absolut! De flesta volontärer kombinerar sitt arbete med att resa runt i värdlandet. Du har ofta lediga dagar och veckoslut. Plattformar som Workaway uppmuntrar att du stannar minst 2 veckor per ställe och sedan reser vidare."
  },
  {
    question: "Är det säkert att volontärarbeta utomlands?",
    answer: "Ja, generellt sett. Välj etablerade organisationer, undersök destinationen, ha reseförsäkring och registrera dig hos UD:s reseinformation. Följ lokala rekommendationer och var medveten om din omgivning. De flesta volontärer har positiva och trygga upplevelser."
  },
  {
    question: "Hur länge bör jag stanna?",
    answer: "Minst 2 veckor rekommenderas för att göra verklig skillnad och anpassa dig. 4-8 veckor är optimalt för de flesta projekt. Längre perioder (3-6 månader) ger djupare upplevelse och större påverkan. Korta besök (under 2 veckor) kan göra mer skada än nytta."
  },
  {
    question: "Får jag CSN eller annat stöd?",
    answer: "CSN ges normalt inte för volontärarbete, men det finns stipendier. Kolla Forum Syd, Sida, och diverse stiftelser. Erasmus+ har volontärprogram för 18-30-åringar (European Solidarity Corps) med alla kostnader täckta inklusive fickpengar."
  },
];

const Volontararbete = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute top-10 right-10 text-8xl opacity-10 select-none hidden sm:block">🌍</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none hidden sm:block">🤝</div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-6">
                💜 Gör skillnad i världen
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Volontärarbete
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light leading-relaxed">
                Res med mening. Bidra till en bättre värld.
              </p>
              <p className="text-lg text-white/70 mb-10 max-w-xl">
                Skydda havssköldpaddor i Costa Rica, undervisa i Tanzania eller restaurera korallrev i Fiji.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Heart className="w-4 h-4" />
                  <span>Gör skillnad</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Clock className="w-4 h-4" />
                  <span>2 veckor – 12 månader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <MapPin className="w-4 h-4" />
                  <span>30+ länder</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white">
                  <Shield className="w-4 h-4" />
                  <span>Inga krav på erfarenhet</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                9 destinationer
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Var vill du göra skillnad?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Från tropiska stränder till bergsbyar – hitta ditt projekt.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {volunteerDestinations.map((dest) => (
                <div
                  key={dest.country}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-violet-400 to-purple-500" />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl leading-none">{dest.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl font-bold text-foreground">{dest.country}</h3>
                        <p className="text-xs text-muted-foreground">{dest.focus}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{dest.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs font-medium bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-200/60 px-2.5 py-1 rounded-full">{h}</span>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Projekttyper</div>
                      <div className="flex flex-wrap gap-1">
                        {dest.projects.map((p) => (
                          <span key={p} className="text-xs bg-muted/70 px-2 py-0.5 rounded-full">{p}</span>
                        ))}
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
                      <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <span>Hitta projekt</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-violet-500" />
                <span className="text-sm font-medium text-violet-600">Resurser</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Hitta volontärprojekt via
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.desc}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-sm font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                  ❓ Vanliga frågor
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-3">
                  Allt om volontärarbete
                </h2>
                <p className="text-muted-foreground">
                  Svar på dina frågor om att volontärarbeta utomlands.
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

export default Volontararbete;
