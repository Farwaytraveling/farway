import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, Clock, DollarSign, User, ExternalLink, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-working-holiday.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Vad är ett Working Holiday-visum?",
    answer: "Ett Working Holiday-visum är ett speciellt visum som tillåter unga vuxna att resa och arbeta i ett annat land under en längre period, vanligtvis 12 månader. Det skiljer sig från ett vanligt turistvisum genom att du har rätt att ta anställning och tjäna pengar för att finansiera din resa."
  },
  {
    question: "Vilka krav måste jag uppfylla?",
    answer: "Kraven varierar mellan länder, men generellt måste du vara mellan 18-30 år (vissa länder upp till 35), ha ett giltigt svenskt pass, kunna visa att du har tillräckligt med pengar för att försörja dig initialt (ofta runt 5,000 AUD/NZD/CAD), ha en returbiljett eller pengar för en, samt ha en giltig reseförsäkring."
  },
  {
    question: "Hur lång tid tar ansökningsprocessen?",
    answer: "Handläggningstiden varierar kraftigt. Australien kan ge svar inom några dagar till veckor, medan Kanadas IEC-program har en årlig lotterirunda. Japan och andra asiatiska länder tar ofta 2-4 veckor. Ansök alltid i god tid - minst 2-3 månader innan planerad avresa."
  },
  {
    question: "Kan jag förlänga mitt visum?",
    answer: "Det beror på landet. Australien erbjuder möjlighet att förlänga upp till 3 år om du utför specificerat arbete (t.ex. farmarbete) under din första visumperiod. Nya Zeeland har liknande regler. De flesta andra länder erbjuder inte förlängning av Working Holiday-visum."
  },
  {
    question: "Vilka typer av jobb kan jag få?",
    answer: "De vanligaste jobben inkluderar restaurang- och bararbete, hotell och turism, farmarbete (särskilt i Australien/Nya Zeeland), säsongsarbete på skidorter, au pair, och kontorsjobb om du har relevant erfarenhet. Vissa länder har begränsningar för hur länge du får jobba hos samma arbetsgivare."
  },
  {
    question: "Hur mycket pengar behöver jag ha sparat?",
    answer: "De flesta länder kräver att du kan visa cirka 5,000 AUD/NZD/CAD i sparade medel. Utöver detta rekommenderas att ha extra buffert för oförutsedda utgifter, första månadens hyra och levnadskostnader tills du hittar jobb - räkna med minst 20,000-30,000 SEK extra."
  },
  {
    question: "Behöver jag reseförsäkring?",
    answer: "Ja, reseförsäkring är obligatoriskt för de flesta Working Holiday-visum och starkt rekommenderat för alla. Försäkringen bör täcka sjukvård, olyckor, hemtransport och helst även stöld och förlorat bagage. Jämför olika försäkringsbolag - priser och villkor varierar."
  },
  {
    question: "Kan jag ansöka om jag redan är i landet?",
    answer: "Generellt måste du ansöka om Working Holiday-visum från ditt hemland (Sverige) och vara utanför destinationslandet när visumet beviljas. Du kan inte konvertera ett turistvisum till Working Holiday-visum på plats. Planera därför i förväg."
  },
];

const workingHolidayCountries = [
  {
    country: "Australien",
    flag: "🇦🇺",
    visaType: "Working Holiday (subclass 417)",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$510 AUD",
    description: "Det klassiska valet för svenskar. Jobba på caféer, farms eller i storstäder som Sydney och Melbourne.",
    highlights: ["Förlängningsbart upp till 3 år", "Farm work", "Surfing & Outback"],
    applyUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$280 NZD",
    description: "Perfekt för naturälskare. Kombinera arbete med äventyr i ett av världens vackraste länder.",
    highlights: ["Extremsporter", "Filmlandskap", "Vingårdsarbete"],
    applyUrl: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/sweden-working-holiday-visa",
  },
  {
    country: "Kanada",
    flag: "🇨🇦",
    visaType: "International Experience Canada (IEC)",
    ageLimit: "18-35 år",
    duration: "12-24 månader",
    cost: "~$250 CAD",
    description: "Jobba i storstäder eller på skidorter. Kanadas IEC-program är populärt men begränsat i antal.",
    highlights: ["Skidsäsong", "Storstäder", "Lotterisystem"],
    applyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "Gratis",
    description: "Upplev japansk kultur på djupet. Jobba på hostels, språkskolor eller inom tech.",
    highlights: ["Gratis visum", "Unik kultur", "Tech & tradition"],
    applyUrl: "https://www.se.emb-japan.go.jp/",
  },
  {
    country: "Sydkorea",
    flag: "🇰🇷",
    visaType: "Working Holiday Visa (H-1)",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$50 USD",
    description: "För K-pop och tech-entusiaster. Seoul erbjuder ett spännande stadsliv med unika jobbmöjligheter.",
    highlights: ["K-culture", "Tech-industri", "Låg kostnad"],
    applyUrl: "https://overseas.mofa.go.kr/se-sv/",
  },
  {
    country: "Taiwan",
    flag: "🇹🇼",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "Gratis",
    description: "Gratis visum och vänligt folk. Perfekt för den som vill uppleva kinesisk kultur i en demokratisk miljö.",
    highlights: ["Gratis visum", "Låg levnadskostnad", "Naturskönt"],
    applyUrl: "https://www.roc-taiwan.org/se/",
  },
  {
    country: "Hongkong",
    flag: "🇭🇰",
    visaType: "Working Holiday Scheme",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$230 HKD",
    description: "Internationell storstad med unika möjligheter inom finans och handel.",
    highlights: ["Finans-hub", "Internationellt", "Stadsliv"],
    applyUrl: "https://www.immd.gov.hk/eng/services/visas/working_holiday_scheme.html",
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
    visaType: "Working Holiday Visa",
    ageLimit: "18-35 år",
    duration: "12 månader",
    cost: "Varierar",
    description: "Sydamerikas pärla för äventyrare. Tango, biffstek och Patagoniens vildmark väntar.",
    highlights: ["Spanska", "Tango", "Patagonien"],
    applyUrl: "https://cancilleria.gob.ar/",
  },
  {
    country: "Chile",
    flag: "🇨🇱",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "Gratis",
    description: "Från Atacamaöknen till Patagoniens glaciärer. Chile erbjuder otrolig geografisk mångfald.",
    highlights: ["Gratis visum", "Vinregioner", "Äventyr"],
    applyUrl: "https://chile.gob.cl/suecia/",
  },
  {
    country: "Uruguay",
    flag: "🇺🇾",
    visaType: "Working Holiday Visa",
    ageLimit: "18-35 år",
    duration: "12 månader",
    cost: "Varierar",
    description: "Sydamerikas dolda pärla. Lugnt tempo, vackra stränder och avslappnad kultur.",
    highlights: ["Avslappnat", "Stränder", "Montevideo"],
    applyUrl: "https://www.gub.uy/",
  },
];

const WorkingHoliday = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
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
                Från Australiens stränder till Tokyos gator – finansiera ditt äventyr genom att jobba längs vägen.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: User, text: "18–35 år" },
                  { icon: Clock, text: "12–24 månader" },
                  { icon: DollarSign, text: "Gratis – ~$500" },
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
                10 länder med avtal
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Vart vill du åka?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Sverige har Working Holiday-avtal med dessa länder. Välj ditt äventyr.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {workingHolidayCountries.map((country) => (
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
                        <p className="text-xs text-muted-foreground truncate">{country.visaType}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {country.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs font-medium bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-1 text-center text-xs mb-5 py-3 bg-muted/40 rounded-xl">
                      <div className="px-2">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Ålder</div>
                        <div className="font-semibold text-foreground">{country.ageLimit}</div>
                      </div>
                      <div className="px-2 border-x border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Längd</div>
                        <div className="font-semibold text-foreground">{country.duration}</div>
                      </div>
                      <div className="px-2">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Kostnad</div>
                        <div className="font-semibold text-foreground">{country.cost}</div>
                      </div>
                    </div>

                    <a href={country.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                        <span>Ansök om visum</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
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
                Vad är Working Holiday?
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Working Holiday är ett speciellt visum som tillåter unga vuxna att resa och arbeta i ett annat land under en längre period, vanligtvis 12 månader. Det är ett utmärkt sätt att finansiera sin resa, få internationell arbetslivserfarenhet och uppleva en ny kultur på djupet.
                </p>
                <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
                  <p className="text-foreground font-medium mb-2">💡 Visste du att...</p>
                  <p className="text-muted-foreground">
                    Sverige har Working Holiday-avtal med ett antal länder runt om i världen. De flesta kräver att du är mellan 18–30 år, men Kanada och Argentina tillåter sökande upp till 35 år.
                  </p>
                </div>
                <p>
                  Ansökningsprocessen varierar mellan länder. Vissa, som Japan och Chile, erbjuder gratis visum medan andra som Australien har en ansökningsavgift. Oavsett vilket land du väljer är Working Holiday ett äventyr som ger minnen för livet.
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