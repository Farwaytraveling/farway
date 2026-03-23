import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, Clock, DollarSign, ExternalLink, Briefcase, Building, Award, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const internshipDestinations = [
  { country: "USA", flag: "🇺🇸", programType: "J-1 Intern/Trainee Visa", ageLimit: "18-35 år", duration: "1-18 månader", cost: "$1,000-2,000 (programavgift)", salary: "Ofta oavlönad eller $500-2,000/mån", description: "Världens största ekonomi och hem för Silicon Valley, Wall Street och Hollywood. Oändliga möjligheter inom alla branscher.", highlights: ["Silicon Valley", "Fortune 500", "Nätverkande"], sectors: ["Tech", "Finans", "Media", "Startup"], applyUrl: "https://j1visa.state.gov/programs/intern" },
  { country: "Storbritannien", flag: "🇬🇧", programType: "Youth Mobility / Tier 5", ageLimit: "18-30 år", duration: "3-12 månader", cost: "£298 (visum)", salary: "£0-2,000/mån", description: "London är ett globalt nav för finans, mode och kreativa industrier. Perfekt för att bygga en internationell karriär.", highlights: ["London", "Finans", "Kreativa industrier"], sectors: ["Finans", "Mode", "Juridik", "Media"], applyUrl: "https://www.gov.uk/youth-mobility" },
  { country: "Tyskland", flag: "🇩🇪", programType: "EU: inget visum krävs", ageLimit: "Ingen gräns", duration: "1-12 månader", cost: "Inget visum behövs", salary: "€520-2,000/mån", description: "Europas starkaste ekonomi med ledande företag inom fordon, ingenjörskonst och tillverkning. Minimilön gäller för praktikanter.", highlights: ["Ingenjörskonst", "Bilindustri", "Minimilön"], sectors: ["Ingenjör", "Fordon", "Kemi", "IT"], applyUrl: "https://www.daad.de/en/" },
  { country: "Spanien", flag: "🇪🇸", programType: "EU: inget visum krävs", ageLimit: "Ingen gräns", duration: "1-12 månader", cost: "Inget visum behövs", salary: "€300-800/mån (ofta oavlönad)", description: "Populärt för praktik inom turism, marknadsföring och NGO:er. Kombinera karriärutveckling med medelhavets livsstil.", highlights: ["Turism", "Startups", "Spanska"], sectors: ["Turism", "Marketing", "NGO", "Eventbransch"], applyUrl: "https://www.erasmusintern.org/" },
  { country: "Singapore", flag: "🇸🇬", programType: "Training Employment Pass", ageLimit: "Ingen gräns", duration: "1-6 månader", cost: "SGD 225", salary: "SGD 1,000-3,000/mån", description: "Asiens affärscentrum med global finans, tech och handel. Perfekt språngbräda för karriär i Asien.", highlights: ["Finans", "Tech-hub", "Asien-gateway"], sectors: ["Finans", "Tech", "Handel", "Logistik"], applyUrl: "https://www.mom.gov.sg/passes-and-permits" },
  { country: "Australien", flag: "🇦🇺", programType: "Working Holiday (subclass 417)", ageLimit: "18-30 år", duration: "1-12 månader", cost: "$510 AUD", salary: "AUD 2,000-4,000/mån", description: "Kombinera praktik med Working Holiday-visum. Starkt fokus på gruvdrift, jordbruk, turism och kreativa branscher.", highlights: ["Working Holiday", "Livskvalitet", "Höga löner"], sectors: ["Gruvdrift", "Turism", "IT", "Hälsa"], applyUrl: "https://immi.homeaffairs.gov.au/" },
  { country: "Frankrike", flag: "🇫🇷", programType: "EU: inget visum krävs", ageLimit: "Ingen gräns", duration: "1-12 månader", cost: "Inget visum behövs", salary: "€600-1,200/mån (gratification)", description: "Mode, gastronomi, lyxvarumärken och diplomati. Frankrike kräver lagstadgad ersättning för praktik över 2 månader.", highlights: ["Modeindustri", "Lyx", "Lagstadgad lön"], sectors: ["Mode", "Gastronomi", "Diplomati", "Konst"], applyUrl: "https://www.campusfrance.org/en" },
  { country: "Japan", flag: "🇯🇵", programType: "Designated Activities Visa", ageLimit: "Ingen gräns", duration: "1-12 månader", cost: "¥3,000 (visum)", salary: "¥100,000-200,000/mån", description: "Teknikjätten i öst. Praktik i Japan ger unik insikt i japansk affärskultur och avancerad teknologi.", highlights: ["Teknologi", "Affärskultur", "Innovation"], sectors: ["Tech", "Robotik", "Fordon", "Gaming"], applyUrl: "https://www.mofa.go.jp/" },
];

const platforms = [
  { name: "Erasmus Intern", url: "https://www.erasmusintern.org/", desc: "EU-finansierade praktikplatser" },
  { name: "AIESEC", url: "https://aiesec.org/", desc: "Internationella praktik- och volontärprogram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/jobs/internship-jobs/", desc: "Sök praktik globalt" },
  { name: "IAESTE", url: "https://iaeste.org/", desc: "Teknisk praktik för studenter" },
];

const faqItems = [
  { question: "Kan jag få CSN under praktik utomlands?", answer: "Om praktiken ingår i din utbildning (t.ex. VFU eller examensarbete) kan du få CSN. Fristående praktik ger vanligtvis inte CSN. Erasmus+ erbjuder stipendier för praktik i Europa. Kontrollera med din högskola om praktiken kan tillgodoräknas i din examen." },
  { question: "Får man lön som praktikant utomlands?", answer: "Det varierar stort. Frankrike kräver lagstadgad ersättning för praktik över 2 månader. Tyskland har minimilön. USA:s praktik är ofta oavlönad men ger värdefullt J-1-visum. I Asien och Storbritannien varierar det. Förhandla alltid villkoren innan du accepterar." },
  { question: "Behöver jag visum för praktik?", answer: "Inom EU behöver du inget visum. För USA krävs J-1 Intern/Trainee visa. Storbritannien kräver Youth Mobility Scheme. Singapore kräver Training Employment Pass. Japan kräver Designated Activities Visa. Ansök alltid i god tid." },
  { question: "Hur hittar jag praktikplats utomlands?", answer: "Använd plattformar som AIESEC, IAESTE (teknik), Erasmus Intern (EU), och LinkedIn. Kontakta företag direkt med ett bra CV och personligt brev. Fråga din högskola om partneruniversitet och utbytesavtal." },
  { question: "Kan praktiken tillgodoräknas i min utbildning?", answer: "Ofta ja, om praktiken är relevant för din utbildning. Kontrollera med din programansvarig innan du åker. Många högskolor kräver ett praktikavtal (learning agreement) och en handledare på plats." },
  { question: "Hur lång bör praktiken vara?", answer: "Minst 2-3 månader rekommenderas för att få ut maximalt. 6 månader ger dig tid att verkligen lära dig och bidra. Kortare praktik (1 månad) ger begränsad erfarenhet men kan vara bra som inledning." },
  { question: "Behöver jag kunna landets språk?", answer: "Engelska räcker oftast i internationella företag, men lokalspråkskunskaper är en stor fördel. I Frankrike, Tyskland och Spanien förväntas ofta grundläggande kunskaper." },
  { question: "Vad bör jag tänka på vid avlönad vs oavlönad praktik?", answer: "Avlönad praktik ger ekonomisk trygghet men kan vara mer kompetitiv. Oavlönad praktik vid prestigefyllda organisationer kan vara värt det för CV:t. Se till att du har budget för levnadskostnader." },
];

const PraktikUtomlands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="absolute top-10 right-10 text-8xl opacity-[0.06] select-none hidden sm:block">💼</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-[0.06] select-none hidden sm:block">🌐</div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
                🚀 Karriärlyft utomlands
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Praktik utomlands
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed">
                Få internationell arbetslivserfarenhet som sticker ut.
              </p>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
                Från Silicon Valley till Tokyos tech-scen – bygg ditt globala nätverk och ge din karriär en flygande start.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { icon: Briefcase, text: "Alla branscher" },
                  { icon: Clock, text: "1–18 månader" },
                  { icon: Award, text: "CV-meritering" },
                  { icon: TrendingUp, text: "Karriärlyft" },
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
                8 praktikmarknader
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Vart vill du praktisera?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Från Europas startups till Asiens tech-hubbar – hitta din drömplats.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {internshipDestinations.map((dest) => (
                <div key={dest.country} className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl leading-none">{dest.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-foreground">{dest.country}</h3>
                        <p className="text-xs text-muted-foreground truncate">{dest.programType}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{dest.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs font-medium bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Branscher</div>
                      <div className="flex flex-wrap gap-1">
                        {dest.sectors.map((s) => (
                          <span key={s} className="text-xs bg-muted/70 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-center text-xs mb-5 py-3 bg-muted/40 rounded-xl">
                      <div>
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Längd</div>
                        <div className="font-semibold text-foreground">{dest.duration}</div>
                      </div>
                      <div className="border-l border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Lön</div>
                        <div className="font-semibold text-foreground text-[11px]">{dest.salary}</div>
                      </div>
                    </div>
                    <a href={dest.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                        <span>Hitta praktik</span>
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
                Hitta praktikplatser via
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {platforms.map((p) => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
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
                  Allt om utlandspraktik
                </h2>
                <p className="text-muted-foreground">CSN, visum, lön och karriärnytta – vi har svaren.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 rounded-xl px-5 bg-card data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5 hover:text-primary transition-colors">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.answer}</AccordionContent>
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

export default PraktikUtomlands;