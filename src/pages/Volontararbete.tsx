import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Clock, ExternalLink, Globe, Heart, MapPin, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const volunteerDestinations = [
  {
    country: "Costa Rica", flag: "🇨🇷", focus: "Miljö & djurliv", duration: "2-12 veckor", cost: "Gratis - €300/vecka",
    description: "Skydda havssköldpaddor, regnskog och korallrev. Costa Rica är ett paradis för naturälskare och miljöengagerade.",
    highlights: ["Sköldpaddor", "Regnskog", "Stränderna"],
    projects: ["Marin biologi", "Regnskogsbevarande", "Hållbart jordbruk"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Tanzania", flag: "🇹🇿", focus: "Utbildning & hälsa", duration: "4-24 veckor", cost: "€200-500/vecka",
    description: "Undervisa i skolor, hjälp på kliniker eller delta i samhällsutvecklingsprojekt nära Kilimanjaro och Serengeti.",
    highlights: ["Undervisning", "Safari", "Kilimanjaro"],
    projects: ["Skolor", "Sjukhus", "Vattenförsörjning"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Thailand", flag: "🇹🇭", focus: "Djurskydd & undervisning", duration: "2-12 veckor", cost: "€150-400/vecka",
    description: "Arbeta med elefantreservat, undervisa engelska i byar eller hjälp till med korallrevsrestaurering.",
    highlights: ["Elefanter", "Stränder", "Buddhismen"],
    projects: ["Elefantreservat", "Engelskundervisning", "Marin bevarande"],
    applyUrl: "https://www.volunteerworld.com/",
  },
  {
    country: "Peru", flag: "🇵🇪", focus: "Samhälle & kultur", duration: "2-12 veckor", cost: "€100-350/vecka",
    description: "Stötta lokalsamhällen i Anderna, arbeta med barn i Cusco eller delta i arkeologiska projekt nära Machu Picchu.",
    highlights: ["Machu Picchu", "Anderna", "Spanska"],
    projects: ["Barnhem", "Hälsovård", "Byggprojekt"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Nepal", flag: "🇳🇵", focus: "Katastrofhjälp & utbildning", duration: "2-24 veckor", cost: "€100-300/vecka",
    description: "Hjälp till med återuppbyggnad, undervisning i bergsbyar eller medicinsk hjälp i avlägsna områden.",
    highlights: ["Himalaya", "Trekking", "Buddhismen"],
    projects: ["Återuppbyggnad", "Undervisning", "Hälsovård"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Sydafrika", flag: "🇿🇦", focus: "Djurliv & samhälle", duration: "2-12 veckor", cost: "€200-500/vecka",
    description: "Arbeta på viltreservat med lejon och noshörningar, eller stötta samhällsprojekt i Kapstaden.",
    highlights: ["Safari", "Kapstaden", "Vinregioner"],
    projects: ["Viltreservat", "Samhällscentra", "Marin forskning"],
    applyUrl: "https://www.volunteerworld.com/",
  },
  {
    country: "Guatemala", flag: "🇬🇹", focus: "Utbildning & hälsa", duration: "2-12 veckor", cost: "€100-250/vecka",
    description: "Arbeta med mayasamhällen, undervisa och hjälp till med hälsoprojekt i en av Centralamerikas mest färgstarka länder.",
    highlights: ["Mayakultur", "Vulkaner", "Spanska"],
    projects: ["Skolor", "Sjukhus", "Kvinnors rättigheter"],
    applyUrl: "https://www.workaway.info/",
  },
  {
    country: "Indien", flag: "🇮🇳", focus: "Utbildning & kvinnors rättigheter", duration: "4-24 veckor", cost: "€100-350/vecka",
    description: "Undervisa i skolor, stötta kvinnokooperativ eller arbeta med hälsoprojekt från Rajasthan till Kerala.",
    highlights: ["Taj Mahal", "Spiritualitet", "Matkultur"],
    projects: ["Undervisning", "Kvinnors rättigheter", "Hälsovård"],
    applyUrl: "https://www.projects-abroad.org/",
  },
  {
    country: "Fiji", flag: "🇫🇯", focus: "Miljö & marin biologi", duration: "2-12 veckor", cost: "€200-500/vecka",
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
  { question: "Kostar det pengar att volontärarbeta?", answer: "Det varierar. Plattformar som Workaway och WWOOF erbjuder arbete i utbyte mot kost och logi - du betalar bara resa och en liten medlemsavgift. Organiserade program genom t.ex. Projects Abroad kostar mer (€200-500/vecka) men inkluderar boende, mat, projektledning och stöd." },
  { question: "Behöver jag speciella kvalifikationer?", answer: "För de flesta projekt krävs inga speciella kvalifikationer - engagemang och vilja räcker. Medicinska och undervisningsprojekt kan kräva relevant utbildning. Språkkunskaper (engelska + ev. lokalspråk) är alltid meriterande. Vissa projekt kräver att du är minst 18 år." },
  { question: "Hur hittar jag ett seriöst volontärprojekt?", answer: "Använd etablerade plattformar med omdömen. Undvik 'voluntourism' som gör mer skada än nytta. Fråga: Har projektet lokal förankring? Finns utbildade projektledare? Går pengarna till samhället? Kolla organisationens transparens och läs andras erfarenheter." },
  { question: "Behöver jag visum?", answer: "De flesta länder tillåter volontärarbete på turistvisum om det är oavlönat och kortvarigt (under 90 dagar). Längre perioder kan kräva speciella visum. Kontrollera alltid med ambassaden. Inom EU behöver du inget visum." },
  { question: "Kan jag kombinera volontärarbete med resande?", answer: "Absolut! De flesta volontärer kombinerar sitt arbete med att resa runt i värdlandet. Du har ofta lediga dagar och veckoslut. Plattformar som Workaway uppmuntrar att du stannar minst 2 veckor per ställe och sedan reser vidare." },
  { question: "Är det säkert att volontärarbeta utomlands?", answer: "Ja, generellt sett. Välj etablerade organisationer, undersök destinationen, ha reseförsäkring och registrera dig hos UD:s reseinformation. Följ lokala rekommendationer och var medveten om din omgivning." },
  { question: "Hur länge bör jag stanna?", answer: "Minst 2 veckor rekommenderas för att göra verklig skillnad och anpassa dig. 4-8 veckor är optimalt för de flesta projekt. Längre perioder (3-6 månader) ger djupare upplevelse och större påverkan." },
  { question: "Får jag CSN eller annat stöd?", answer: "CSN ges normalt inte för volontärarbete, men det finns stipendier. Kolla Forum Syd, Sida, och diverse stiftelser. Erasmus+ har volontärprogram för 18-30-åringar (European Solidarity Corps) med alla kostnader täckta inklusive fickpengar." },
];

const Volontararbete = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="absolute top-10 right-10 text-8xl opacity-[0.06] select-none hidden sm:block">🌍</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-[0.06] select-none hidden sm:block">🤝</div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
                💜 Gör skillnad i världen
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Volontärarbete
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed">
                Res med mening. Bidra till en bättre värld.
              </p>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
                Skydda havssköldpaddor i Costa Rica, undervisa i Tanzania eller restaurera korallrev i Fiji.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: Heart, text: "Gör skillnad" },
                  { icon: Clock, text: "2 veckor – 12 månader" },
                  { icon: MapPin, text: "30+ länder" },
                  { icon: Shield, text: "Inga krav på erfarenhet" },
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
                  className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl leading-none">{dest.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-foreground">{dest.country}</h3>
                        <p className="text-xs text-muted-foreground">{dest.focus}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{dest.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs font-medium bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-full">{h}</span>
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

                    <div className="grid grid-cols-2 gap-1 text-center text-xs mb-5 py-3 bg-muted/40 rounded-xl">
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
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-primary/[0.03]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Resurser</span>
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
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
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
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
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

export default Volontararbete;