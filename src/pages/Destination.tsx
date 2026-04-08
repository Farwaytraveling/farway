import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Sun, Briefcase, Building2, DollarSign, Home, TrendingUp, Star, Coffee, Wifi, Shield } from "lucide-react";

type CityInfo = {
  name: string;
  image: string;
  description: string;
  swedes: string;
  popularFor: string[];
  avgRent: string;
  detailedInfo?: {
    neighborhoods: string[];
    tips: string[];
    safety: string;
    internet: string;
    costOfLiving: string;
    nightlife: string;
    transport: string;
  };
};

const destinationData: Record<string, {
  name: string;
  flag: string;
  heroImage: string;
  description: string;
  highlights: string[];
  programs: { title: string; description: string; icon: React.ElementType }[];
  facts: { label: string; value: string }[];
  bestTime: string;
  currency: string;
  language: string;
  communityStats: { total: string; swedish: string; ageRange: string };
  cities: CityInfo[];
}> = {
  australien: {
    name: "Australien",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=600&fit=crop",
    description: "Australien är drömmen för många svenska ungdomar. Med sitt Working Holiday-visum, fantastiska natur och avslappnade livsstil är det perfekt för dig som vill kombinera arbete och äventyr.",
    highlights: ["Working Holiday-visum upp till 3 år", "Fantastiska stränder och natur", "Höga löner och bra arbetsmarknad", "Perfekt för surfing och äventyr"],
    programs: [
      { title: "Working Holiday", description: "Arbeta och res runt i upp till 3 år med WHV.", icon: Briefcase },
      { title: "Farm Work", description: "Jobba på gårdar och förläng ditt visum.", icon: Sun },
      { title: "Au Pair", description: "Bo hos en värdfamilj och ta hand om barn.", icon: Users },
    ],
    facts: [
      { label: "Visumlängd", value: "1–3 år" },
      { label: "Åldersgräns", value: "18–35 år" },
      { label: "Minsta sparkapital", value: "~35 000 kr" },
    ],
    bestTime: "Oktober – Mars (sommar)",
    currency: "Australiensisk dollar (AUD)",
    language: "Engelska",
    communityStats: { total: "~11 000 svenskar bosatta", swedish: "~4 000 med WHV/år", ageRange: "18–30 år vanligast" },
    cities: [
      { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop", description: "Australiens största stad med ikoniska operahuset, fantastiska stränder som Bondi och ett pulserande nattliv. Stor svensk community.", swedes: "~3 500 svenskar", popularFor: ["Restaurangjobb", "Kontorsarbete", "Surfing"], avgRent: "~12 000 kr/mån", detailedInfo: { neighborhoods: ["Bondi Beach – Populärt bland backpackers och surfare", "Manly – Avslappnad strandförort med färja till city", "Surry Hills – Hippt område med caféer och barer", "Newtown – Alternativt och prisvärt"], tips: ["Skaffa Opal Card för kollektivtrafiken", "RSA-certifikat krävs för att jobba på bar", "Bondi till Coogee-promenaden är ett måste", "Gå med i svenska Facebook-grupper för jobb"], safety: "Mycket säkert – var uppmärksam vid stränderna (strömmar)", internet: "Snabbt och pålitligt, WiFi på de flesta caféer", costOfLiving: "Hög – räkna med 15 000–20 000 kr/mån totalt", nightlife: "Fantastiskt – Kings Cross, Darling Harbour, The Rocks", transport: "Bra kollektivtrafik med bussar, tåg och färjor" } },
      { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop", description: "Kulturhuvudstaden med fantastisk matscen, street art och sportkultur. Känt för sitt hipster-liv och coffee culture.", swedes: "~2 500 svenskar", popularFor: ["Hospitality", "Barista-jobb", "Kreativa jobb"], avgRent: "~10 000 kr/mån", detailedInfo: { neighborhoods: ["Fitzroy – Street art och hippa barer", "St Kilda – Strandliv och nöjen", "Brunswick – Alternativt med bra matscen", "CBD – Centralt med många jobbmöjligheter"], tips: ["Melbourne har 'fyra årstider på en dag' – klä dig i lager", "Kafékulturen är enorm – bra för baristajobb", "Myki-kort för kollektivtrafiken", "Gratis spårvagn i CBD-zonen"], safety: "Mycket säkert – undvik Parker Street sent på kvällen", internet: "Utmärkt – gratis WiFi i CBD", costOfLiving: "Medel-hög – 13 000–18 000 kr/mån", nightlife: "Världskänt – gömda barer och livemusik", transport: "Utmärkt med spårvagnar, tåg och bussar" } },
      { name: "Gold Coast", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop", description: "Surfarnas paradis med milslånga sandstränder och soligt väder året runt. Perfekt för dig som vill kombinera jobb med strandliv.", swedes: "~1 500 svenskar", popularFor: ["Surfing", "Turismbranschen", "Fitness-jobb"], avgRent: "~8 500 kr/mån", detailedInfo: { neighborhoods: ["Surfers Paradise – Centrum med nattliv och shopping", "Burleigh Heads – Avslappnat med bra surfing", "Coolangatta – Gränsen till NSW, lugnt och mysigt", "Broadbeach – Mitt emellan fest och lugn"], tips: ["Lär dig surfa – det är gratis!", "Jobb finns inom turism och restaurang", "Go Card för kollektivtrafiken", "Regnsäsongen är januari–mars"], safety: "Säkert – bada alltid mellan flaggorna", internet: "Bra – de flesta hostels har WiFi", costOfLiving: "Medel – 10 000–14 000 kr/mån", nightlife: "Surfers Paradise har allt – klubbar, barer, livescener", transport: "Bussar och light rail längs kusten" } },
      { name: "Cairns", image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&h=400&fit=crop", description: "Porten till Great Barrier Reef och tropisk regnskog. Populärt bland backpackers som vill uppleva unik natur.", swedes: "~800 svenskar", popularFor: ["Dykning", "Turismjobb", "Farm work i närheten"], avgRent: "~7 000 kr/mån", detailedInfo: { neighborhoods: ["Cairns City – Kompakt centrum vid havet", "Northern Beaches – Palm Cove och Trinity Beach", "Kuranda – Regnskogsstad i bergen", "Port Douglas – Lyxigare kuststad norrut"], tips: ["Dykcertifiering tar 3–4 dagar", "Farm work finns i Atherton Tablelands", "Var beredd på fuktigt tropiskt klimat", "Besök Daintree Rainforest"], safety: "Säkert – var medveten om krokodiler och maneter", internet: "Okej – kan vara långsamt utanför staden", costOfLiving: "Låg-medel – 8 000–12 000 kr/mån", nightlife: "Mindre men livligt – Cairns Esplanade har barer", transport: "Begränsad – bil eller cykel rekommenderas" } },
    ],
  },
  "nya-zeeland": {
    name: "Nya Zeeland",
    flag: "🇳🇿",
    heroImage: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&h=600&fit=crop",
    description: "Nya Zeeland erbjuder en unik blandning av hisnande natur, äventyrssporter och en välkomnande kultur. Perfekt för dig som älskar utomhusliv och vill uppleva världens vackraste landskap.",
    highlights: ["Working Holiday-visum i 12 månader", "Världens äventyrshuvudstad Queenstown", "Otrolig natur och vandringsleder", "Vänligt och avslappnat folk"],
    programs: [
      { title: "Working Holiday", description: "Arbeta och res i 12 månader.", icon: Briefcase },
      { title: "Äventyrsprogram", description: "Bungy, skydiving och mycket mer.", icon: Sun },
      { title: "Farmarbete", description: "Jobba på vingårdar och fruktgårdar.", icon: Users },
    ],
    facts: [
      { label: "Visumlängd", value: "12 månader" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "Minsta sparkapital", value: "~30 000 kr" },
    ],
    bestTime: "November – April (sommar)",
    currency: "Nyzeeländsk dollar (NZD)",
    language: "Engelska",
    communityStats: { total: "~3 000 svenskar bosatta", swedish: "~1 200 med WHV/år", ageRange: "20–28 år vanligast" },
    cities: [
      { name: "Auckland", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=400&fit=crop", description: "Nya Zeelands största stad med en mix av stadskultur och natur. Bra jobbmöjligheter och utgångspunkt för att utforska Nordön.", swedes: "~1 200 svenskar", popularFor: ["Kontorsjobb", "Hospitality", "Startpunkt för resor"], avgRent: "~9 000 kr/mån" },
      { name: "Queenstown", image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa07?w=600&h=400&fit=crop", description: "Äventyrshuvudstaden med bungy, skidåkning och otrolig natur. Extremt populär bland säsongsarbetare.", swedes: "~600 svenskar", popularFor: ["Skidsäsong", "Äventyrsjobb", "Hospitality"], avgRent: "~10 000 kr/mån" },
      { name: "Wellington", image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa07?w=600&h=400&fit=crop", description: "Huvudstaden med kreativ kultur, fantastisk matscen och filmhistoria (Weta Workshop). Kompakt och gåbar.", swedes: "~500 svenskar", popularFor: ["Kreativa jobb", "Kaféer & restauranger", "Filmproduktion"], avgRent: "~8 500 kr/mån" },
    ],
  },
  chamonix: {
    name: "Chamonix",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&h=600&fit=crop",
    description: "Chamonix vid foten av Mont Blanc är drömmen för alla skid- och snowboardälskare. Jobba en säsong i Alperna och njut av världsklass-skidåkning, afterski och en internationell gemenskap.",
    highlights: ["Skidåkning i världsklass", "Fantastisk afterski-kultur", "Internationell gemenskap", "Möjlighet att utforska Alperna"],
    programs: [
      { title: "Skidsäsong", description: "Arbeta på skidort under vintersäsongen.", icon: Briefcase },
      { title: "Hotell & Restaurang", description: "Jobb inom hospitality-branschen.", icon: Users },
      { title: "Skidlärare", description: "Certifiera dig och lär ut skidåkning.", icon: Sun },
    ],
    facts: [
      { label: "Säsong", value: "December – April" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "December – April (skidsäsong)",
    currency: "Euro (EUR)",
    language: "Franska",
    communityStats: { total: "~30 000 svenskar i Frankrike totalt", swedish: "~300 svenskar i Alperna/säsong", ageRange: "19–28 år vanligast" },
    cities: [
      { name: "Chamonix-Mont-Blanc", image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop", description: "Själva hjärtat med tillgång till Mont Blanc-massivet, fantastisk offpist och legendarisk afterski. Många barer och restauranger söker personal.", swedes: "~120 svenskar/säsong", popularFor: ["Skidlärare", "Bar & restaurang", "Hotellpersonal"], avgRent: "~7 000 kr/mån (delat boende)" },
      { name: "Morzine / Avoriaz", image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=600&h=400&fit=crop", description: "Del av det enorma Portes du Soleil-området med 650 km pist. Mysig by-känsla och mycket brittisk community.", swedes: "~60 svenskar/säsong", popularFor: ["Chalet-jobb", "Skiduthyrning", "Transfer-chaufför"], avgRent: "~6 000 kr/mån (delat)" },
      { name: "Val d'Isère", image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=600&h=400&fit=crop", description: "En av Europas mest exklusiva skidorter med hög afterski-nivå. Bra löner och internationell atmosfär.", swedes: "~90 svenskar/säsong", popularFor: ["Lyxhotell", "Skidlärare", "Bartender"], avgRent: "~8 000 kr/mån (delat)" },
    ],
  },
  usa: {
    name: "USA",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop",
    description: "USA erbjuder otroliga möjligheter för svenska ungdomar. Från au pair-program till summer camps – upplev den amerikanska drömmen och skapa minnen för livet.",
    highlights: ["Au Pair-program med värd familj", "Summer Camp-upplevelser", "Kulturellt utbyte", "Möjlighet att resa runt i hela landet"],
    programs: [
      { title: "Au Pair", description: "Bo hos en amerikansk familj i 12–24 månader.", icon: Users },
      { title: "Summer Camp", description: "Jobba som campledare under sommaren.", icon: Sun },
      { title: "Praktik", description: "Gör praktik inom ditt yrkesområde.", icon: Briefcase },
    ],
    facts: [
      { label: "Au Pair-längd", value: "12–24 månader" },
      { label: "Åldersgräns", value: "18–26 år" },
      { label: "Visum", value: "J-1 visum" },
    ],
    bestTime: "Året runt",
    currency: "US Dollar (USD)",
    language: "Engelska",
    communityStats: { total: "~150 000 svenskar bosatta i USA", swedish: "~800 au pairs/år", ageRange: "18–26 år vanligast" },
    cities: [
      { name: "New York", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop", description: "Världens mest ikoniska stad med oändliga möjligheter. Många au pair-familjer i Manhattans förorter som Westchester och Connecticut.", swedes: "~25 000 svenskar i området", popularFor: ["Au Pair", "Praktik", "Studier"], avgRent: "~15 000 kr/mån" },
      { name: "Los Angeles", image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop", description: "Solen, stränderna och Hollywood. Populärt område för au pairs och praktikanter inom kreativa branscher.", swedes: "~15 000 svenskar i området", popularFor: ["Au Pair", "Filmindustrin", "Sportindustrin"], avgRent: "~13 000 kr/mån" },
      { name: "San Francisco", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop", description: "Tech-huvudstaden med Golden Gate Bridge och en progressiv kultur. Bra för praktik inom tech och startup.", swedes: "~8 000 svenskar i området", popularFor: ["Tech-praktik", "Au Pair", "Startup-kultur"], avgRent: "~16 000 kr/mån" },
      { name: "Miami", image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=600&h=400&fit=crop", description: "Tropiskt klimat, vibrerande nattliv och latinamerikansk kultur. Populärt för au pairs som vill ha strandliv.", swedes: "~5 000 svenskar i området", popularFor: ["Au Pair", "Hospitality", "Strandliv"], avgRent: "~11 000 kr/mån" },
    ],
  },
  thailand: {
    name: "Thailand",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    description: "Thailand är perfekt för dig som vill volontärarbeta, lära dig ett nytt språk eller helt enkelt uppleva en fantastisk kultur. Med sin otroliga mat, vänliga människor och paradisiska stränder är det ett oförglömligt äventyr.",
    highlights: ["Volontärprogram med djur och samhällen", "Otrolig matkultur", "Paradisiska stränder och öar", "Prisvänligt boende och mat"],
    programs: [
      { title: "Volontärarbete", description: "Hjälp lokalsamhällen och djurprojekt.", icon: Users },
      { title: "Språkkurs", description: "Lär dig thailändska eller förbättra din engelska.", icon: Globe },
      { title: "Dykutbildning", description: "Bli certifierad dykare i kristallklart vatten.", icon: Sun },
    ],
    facts: [
      { label: "Visum", value: "Turistvisum 60 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~8 000 kr" },
    ],
    bestTime: "November – Mars (torrsäsong)",
    currency: "Thailändsk baht (THB)",
    language: "Thailändska",
    communityStats: { total: "~20 000 svenskar bosatta", swedish: "~5 000 besökare/år", ageRange: "18–25 år vanligast" },
    cities: [
      { name: "Bangkok", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop", description: "Den pulserande huvudstaden med tempel, streetfood och otroligt nattliv. Bra utgångspunkt och massor av volontärmöjligheter.", swedes: "~8 000 svenskar", popularFor: ["Volontärarbete", "Språkkurser", "Undervisning"], avgRent: "~4 000 kr/mån" },
      { name: "Chiang Mai", image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&h=400&fit=crop", description: "Kulturella huvudstaden i norr med tempel, marknader och närhet till djungeln. Extremt populärt bland digitala nomader och volontärer.", swedes: "~3 000 svenskar", popularFor: ["Elefant-sanctuary", "Undervisning", "Digital nomad-liv"], avgRent: "~3 500 kr/mån" },
      { name: "Koh Tao", image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&h=400&fit=crop", description: "Världens mest populära plats för dykutbildning. Liten ö med kristallklart vatten och avslappnad stämning.", swedes: "~1 500 svenskar", popularFor: ["Dykcertifiering", "Strandjobb", "Yoga & wellness"], avgRent: "~3 000 kr/mån" },
    ],
  },
  paris: {
    name: "Paris",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    description: "Paris, ljusets stad, erbjuder en unik möjlighet att uppleva fransk kultur på nära håll. Arbeta som au pair, studera franska eller gör praktik i en av världens mest ikoniska städer.",
    highlights: ["Au Pair hos franska familjer", "Studera franska på plats", "Praktik inom mode, konst och gastronomi", "Upplev världens kulturhuvudstad"],
    programs: [
      { title: "Au Pair", description: "Bo hos en fransk familj och lär dig språket.", icon: Users },
      { title: "Språkkurs", description: "Intensiva franskakurser i Paris.", icon: Globe },
      { title: "Praktik", description: "Praktisera inom mode, mat eller konst.", icon: Briefcase },
    ],
    facts: [
      { label: "Au Pair-längd", value: "6–12 månader" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "Året runt",
    currency: "Euro (EUR)",
    language: "Franska",
    communityStats: { total: "~30 000 svenskar bosatta i Frankrike", swedish: "~500 svenskar/år (au pair & studier)", ageRange: "19–27 år vanligast" },
    cities: [
      { name: "Paris (Centrala)", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop", description: "Hjärtat av Paris med Eiffeltornet, Louvren och Seine. Många au pair-familjer bor i de västra arrondissementen (16:e, 15:e).", swedes: "~15 000 svenskar", popularFor: ["Au Pair", "Språkkurser", "Modepraktik"], avgRent: "~10 000 kr/mån" },
      { name: "Bordeaux", image: "https://images.unsplash.com/photo-1565368228429-b9a0248b8b30?w=600&h=400&fit=crop", description: "Vinregionens huvudstad vid Garonne-floden. Vacker arkitektur, fantastisk mat och vin, och ett växande studentliv. Mer avslappnat tempo än Paris.", swedes: "~800 svenskar", popularFor: ["Vinbranschen", "Språkstudier", "Au Pair"], avgRent: "~7 500 kr/mån" },
      { name: "Lyon", image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&h=400&fit=crop", description: "Frankrikes gastronomiska huvudstad. Mindre och billigare än Paris men med samma charm. Bra för matintresserade.", swedes: "~1 200 svenskar", popularFor: ["Gastronomi-praktik", "Språkstudier", "Au Pair"], avgRent: "~7 000 kr/mån" },
    ],
  },
};

const Destination = () => {
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? destinationData[slug] : null;

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Destinationen hittades inte</h1>
            <Link to="/">
              <Button variant="outline" className="rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till startsidan
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Tillbaka
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{dest.flag}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{dest.name}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl">
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{dest.description}</p>

            {/* Community Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{dest.communityStats.total}</p>
                <p className="text-xs text-muted-foreground mt-1">Totalt antal resenärer</p>
              </div>
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                <span className="text-2xl block mb-1">🇸🇪</span>
                <p className="text-xl font-bold text-foreground">{dest.communityStats.swedish}</p>
                <p className="text-xs text-muted-foreground mt-1">Svenska resenärer</p>
              </div>
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{dest.communityStats.ageRange}</p>
                <p className="text-xs text-muted-foreground mt-1">Åldersgrupp</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {dest.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <Sun className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{h}</span>
                </div>
              ))}
            </div>

            {/* Cities */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              <Building2 className="w-6 h-6 inline-block mr-2 text-primary" />
              Populära städer i {dest.name}
            </h2>
            <p className="text-muted-foreground mb-8 text-sm">Upptäck var andra svenskar bor och jobbar</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {dest.cities.map((city) => (
                <div
                  key={city.name}
                  onClick={() => setSelectedCity(city)}
                  className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] group"
                >
                  <div className="relative overflow-hidden">
                    <img src={city.image} alt={city.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80 px-4 py-2 rounded-full text-sm">Visa mer info</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{city.name}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{city.swedes}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{city.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {city.popularFor.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border/50">
                      <MapPin className="w-3.5 h-3.5" />
                      Genomsnittlig hyra: {city.avgRent}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* City Detail Dialog */}
            <Dialog open={!!selectedCity} onOpenChange={(open) => !open && setSelectedCity(null)}>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                {selectedCity && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        {selectedCity.name}
                      </DialogTitle>
                    </DialogHeader>

                    <img src={selectedCity.image} alt={selectedCity.name} className="w-full h-48 object-cover rounded-xl mt-2" />

                    <p className="text-muted-foreground leading-relaxed mt-4">{selectedCity.description}</p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <Users className="w-4 h-4 text-primary mb-1" />
                        <p className="text-sm font-semibold text-foreground">{selectedCity.swedes}</p>
                        <p className="text-xs text-muted-foreground">Svenska resenärer</p>
                      </div>
                      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <Home className="w-4 h-4 text-primary mb-1" />
                        <p className="text-sm font-semibold text-foreground">{selectedCity.avgRent}</p>
                        <p className="text-xs text-muted-foreground">Genomsnittlig hyra</p>
                      </div>
                      {selectedCity.detailedInfo && (
                        <>
                          <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                            <DollarSign className="w-4 h-4 text-primary mb-1" />
                            <p className="text-sm font-semibold text-foreground">{selectedCity.detailedInfo.costOfLiving}</p>
                            <p className="text-xs text-muted-foreground">Levnadskostnad</p>
                          </div>
                          <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                            <Shield className="w-4 h-4 text-primary mb-1" />
                            <p className="text-sm font-semibold text-foreground">{selectedCity.detailedInfo.safety}</p>
                            <p className="text-xs text-muted-foreground">Säkerhet</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Popular for */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" /> Populärt för
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCity.popularFor.map((tag) => (
                          <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {selectedCity.detailedInfo && (
                      <>
                        {/* Neighborhoods */}
                        <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" /> Populära stadsdelar
                          </h4>
                          <div className="space-y-2">
                            {selectedCity.detailedInfo.neighborhoods.map((n) => (
                              <div key={n} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                {n}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical info */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl border border-border">
                            <div className="flex items-center gap-2 mb-1">
                              <Wifi className="w-4 h-4 text-primary" />
                              <span className="text-xs font-semibold text-foreground">Internet</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{selectedCity.detailedInfo.internet}</p>
                          </div>
                          <div className="p-3 rounded-xl border border-border">
                            <div className="flex items-center gap-2 mb-1">
                              <Coffee className="w-4 h-4 text-primary" />
                              <span className="text-xs font-semibold text-foreground">Nattliv</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{selectedCity.detailedInfo.nightlife}</p>
                          </div>
                          <div className="p-3 rounded-xl border border-border sm:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span className="text-xs font-semibold text-foreground">Transport</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{selectedCity.detailedInfo.transport}</p>
                          </div>
                        </div>

                        {/* Tips */}
                        <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" /> Tips från andra svenskar
                          </h4>
                          <div className="space-y-2">
                            {selectedCity.detailedInfo.tips.map((tip) => (
                              <div key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-0.5">💡</span>
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </DialogContent>
            </Dialog>

            {/* Programs */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Program i {dest.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {dest.programs.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <p.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Snabbfakta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {dest.facts.map((f) => (
                <div key={f.label} className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{f.label}</p>
                  <p className="font-semibold text-foreground">{f.value}</p>
                </div>
              ))}
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Bästa tid</p>
                <p className="font-semibold text-foreground">{dest.bestTime}</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Valuta</p>
                <p className="font-semibold text-foreground">{dest.currency}</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Språk</p>
                <p className="font-semibold text-foreground">{dest.language}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Redo att åka till {dest.name}?</h3>
              <p className="text-muted-foreground mb-6">Kontakta oss för att få hjälp med planering och bokning.</p>
              <Button size="lg" className="rounded-xl">
                Kontakta oss
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Destination;
