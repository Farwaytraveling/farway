import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, Clock, DollarSign, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <section className="relative py-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-white/80 font-medium">Program</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Working Holiday
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Jobba och res i upp till 12 månader i ett annat land. Perfekt för dig som vill uppleva världen samtidigt som du tjänar pengar.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <User className="w-4 h-4" />
                  <span>18-35 år</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-4 h-4" />
                  <span>12-24 månader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Gratis - ~$500</span>
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
                Länder med Working Holiday-avtal
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sverige har Working Holiday-avtal med följande länder. Klicka på ett land för att ansöka om visum.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workingHolidayCountries.map((country) => (
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
                      <p className="text-sm text-muted-foreground">{country.visaType}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {country.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4 py-3 bg-muted/50 rounded-lg">
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
                      <div className="font-medium text-foreground">{country.cost}</div>
                    </div>
                  </div>

                  <a href={country.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                      <span>Ansök om visum</span>
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
                Vad är Working Holiday?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Working Holiday är ett speciellt visum som tillåter unga vuxna att resa och arbeta i ett annat land under en längre period, vanligtvis 12 månader. Det är ett utmärkt sätt att finansiera sin resa, få internationell arbetslivserfarenhet och uppleva en ny kultur på djupet.
                </p>
                <p>
                  Sverige har Working Holiday-avtal med ett antal länder runt om i världen. Varje land har sina egna regler kring ålder, kostnad och hur länge du får stanna. De flesta kräver att du är mellan 18-30 år, men vissa länder som Kanada och Argentina tillåter sökande upp till 35 år.
                </p>
                <p>
                  Ansökningsprocessen varierar mellan länder. Vissa, som Japan och Chile, erbjuder gratis visum medan andra som Australien har en ansökningsavgift. Oavsett vilket land du väljer är Working Holiday ett äventyr som ger minnen för livet.
                </p>
              </div>
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

export default WorkingHoliday;
