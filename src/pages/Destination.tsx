import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Sun, Briefcase, Building2, DollarSign, Home, TrendingUp, Star, Coffee, Wifi, Shield, ExternalLink, FileCheck, Plane } from "lucide-react";

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

type ResourceLink = {
  name: string;
  url: string;
  official: boolean;
};

type ResourceCategory = {
  category: string;
  icon: React.ElementType;
  links: ResourceLink[];
};

type QuickFact = {
  icon: React.ElementType;
  label: string;
  value: string;
};

type DestinationInfo = {
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
  resources: ResourceCategory[];
  quickFacts: QuickFact[];
};

const destinationData: Record<string, DestinationInfo> = {
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
    quickFacts: [
      { icon: Calendar, label: "Visum giltighetstid", value: "12 månader" },
      { icon: DollarSign, label: "Visumavgift", value: "~$510 AUD" },
      { icon: Briefcase, label: "Max arbete/arbetsgivare", value: "6 månader" },
      { icon: Plane, label: "Ålderskrav", value: "18–30 år" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Working Holiday Visa (subclass 417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", official: true },
          { name: "Svenska ambassaden i Canberra", url: "https://www.swedenabroad.se/canberra", official: true },
          { name: "Tax File Number (TFN)", url: "https://www.ato.gov.au/individuals/tax-file-number/", official: true },
        ],
      },
      {
        category: "Jobba i Australien", icon: Briefcase,
        links: [
          { name: "Seek – Australiens största jobbsajt", url: "https://www.seek.com.au", official: false },
          { name: "Indeed Australia", url: "https://au.indeed.com", official: false },
          { name: "Backpacker Job Board", url: "https://www.backpackerjobboard.com.au", official: false },
          { name: "Harvest Trail – Farm Jobs", url: "https://jobsearch.gov.au/harvest", official: true },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Flatmates.com.au", url: "https://flatmates.com.au", official: false },
          { name: "Gumtree Australia", url: "https://www.gumtree.com.au", official: false },
          { name: "Hostelworld", url: "https://www.hostelworld.com", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenska i Australien (Facebook)", url: "https://www.facebook.com/groups/svenskaiAustralien", official: false },
          { name: "Backpackers in Australia", url: "https://www.facebook.com/groups/backpackersinaustralia", official: false },
          { name: "r/australia (Reddit)", url: "https://www.reddit.com/r/australia", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Australien", url: "https://www.kilroy.se/destinationer/australien", official: false },
          { name: "EF – Språkkurser i Australien", url: "https://www.ef.se/ils/destinations/australien/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop", description: "Australiens största stad med ikoniska operahuset, fantastiska stränder som Bondi och ett pulserande nattliv.", swedes: "~3 500 svenskar", popularFor: ["Restaurangjobb", "Kontorsarbete", "Surfing"], avgRent: "~12 000 kr/mån", detailedInfo: { neighborhoods: ["Bondi Beach – Populärt bland backpackers och surfare", "Manly – Avslappnad strandförort med färja till city", "Surry Hills – Hippt område med caféer och barer", "Newtown – Alternativt och prisvärt"], tips: ["Skaffa Opal Card för kollektivtrafiken", "RSA-certifikat krävs för att jobba på bar", "Bondi till Coogee-promenaden är ett måste", "Gå med i svenska Facebook-grupper för jobb"], safety: "Mycket säkert – var uppmärksam vid stränderna (strömmar)", internet: "Snabbt och pålitligt, WiFi på de flesta caféer", costOfLiving: "Hög – räkna med 15 000–20 000 kr/mån totalt", nightlife: "Fantastiskt – Kings Cross, Darling Harbour, The Rocks", transport: "Bra kollektivtrafik med bussar, tåg och färjor" } },
      { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop", description: "Kulturhuvudstaden med fantastisk matscen, street art och sportkultur.", swedes: "~2 500 svenskar", popularFor: ["Hospitality", "Barista-jobb", "Kreativa jobb"], avgRent: "~10 000 kr/mån", detailedInfo: { neighborhoods: ["Fitzroy – Street art och hippa barer", "St Kilda – Strandliv och nöjen", "Brunswick – Alternativt med bra matscen", "CBD – Centralt med många jobbmöjligheter"], tips: ["Melbourne har 'fyra årstider på en dag' – klä dig i lager", "Kafékulturen är enorm – bra för baristajobb", "Myki-kort för kollektivtrafiken", "Gratis spårvagn i CBD-zonen"], safety: "Mycket säkert", internet: "Utmärkt – gratis WiFi i CBD", costOfLiving: "Medel-hög – 13 000–18 000 kr/mån", nightlife: "Världskänt – gömda barer och livemusik", transport: "Utmärkt med spårvagnar, tåg och bussar" } },
      { name: "Gold Coast", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop", description: "Surfarnas paradis med milslånga sandstränder och soligt väder året runt.", swedes: "~1 500 svenskar", popularFor: ["Surfing", "Turismbranschen", "Fitness-jobb"], avgRent: "~8 500 kr/mån", detailedInfo: { neighborhoods: ["Surfers Paradise – Centrum med nattliv", "Burleigh Heads – Avslappnat med bra surfing", "Coolangatta – Lugnt och mysigt", "Broadbeach – Mitt emellan fest och lugn"], tips: ["Lär dig surfa – det är gratis!", "Jobb finns inom turism och restaurang", "Go Card för kollektivtrafiken"], safety: "Säkert – bada alltid mellan flaggorna", internet: "Bra – de flesta hostels har WiFi", costOfLiving: "Medel – 10 000–14 000 kr/mån", nightlife: "Surfers Paradise har allt", transport: "Bussar och light rail längs kusten" } },
      { name: "Cairns", image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&h=400&fit=crop", description: "Porten till Great Barrier Reef och tropisk regnskog.", swedes: "~800 svenskar", popularFor: ["Dykning", "Turismjobb", "Farm work"], avgRent: "~7 000 kr/mån", detailedInfo: { neighborhoods: ["Cairns City – Kompakt centrum", "Northern Beaches – Palm Cove", "Kuranda – Regnskogsstad", "Port Douglas – Lyxig kuststad"], tips: ["Dykcertifiering tar 3–4 dagar", "Farm work i Atherton Tablelands", "Var beredd på fuktigt tropiskt klimat"], safety: "Säkert – var medveten om krokodiler och maneter", internet: "Okej – kan vara långsamt utanför staden", costOfLiving: "Låg-medel – 8 000–12 000 kr/mån", nightlife: "Mindre men livligt", transport: "Begränsad – bil eller cykel rekommenderas" } },
    ],
  },

  frankrike: {
    name: "Frankrike",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    description: "Frankrike lockar svenska ungdomar med allt från skidsäsonger i Alperna till au pair i Paris och språkkurser på Rivieran. Som EU-medborgare behöver du inget visum – bara packa och åka!",
    highlights: ["Inget visum krävs (EU)", "Skidsäsong i Alperna", "Au Pair i Paris och Lyon", "Fantastisk mat och kultur"],
    programs: [
      { title: "Skidsäsong", description: "Jobba på skidorter i Alperna under vintern.", icon: Sun },
      { title: "Au Pair", description: "Bo hos en fransk familj och lär dig franska.", icon: Users },
      { title: "Språkkurs", description: "Intensiva franskakurser i Paris, Nice eller Lyon.", icon: Globe },
    ],
    facts: [
      { label: "Visum", value: "Inget (EU-medborgare)" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~10 000–15 000 kr" },
    ],
    bestTime: "Året runt",
    currency: "Euro (EUR)",
    language: "Franska",
    communityStats: { total: "~30 000 svenskar bosatta", swedish: "~2 000 unga/år", ageRange: "19–28 år vanligast" },
    quickFacts: [
      { icon: FileCheck, label: "Visum", value: "Inget krävs (EU)" },
      { icon: DollarSign, label: "Minimilön", value: "~€1 767/mån brutto" },
      { icon: Briefcase, label: "Populäraste jobben", value: "Ski, Au Pair, Hotell" },
      { icon: Plane, label: "Flygtid från Sverige", value: "~2,5 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "EU-medborgares rättigheter i Frankrike", url: "https://www.service-public.fr/particuliers/vosdroits/F12439?lang=en", official: true },
          { name: "Svenska ambassaden i Paris", url: "https://www.swedenabroad.se/paris", official: true },
          { name: "Franska skatteverket – Impôts", url: "https://www.impots.gouv.fr", official: true },
        ],
      },
      {
        category: "Jobba i Frankrike", icon: Briefcase,
        links: [
          { name: "Pôle Emploi – Franska arbetsförmedlingen", url: "https://www.pole-emploi.fr", official: true },
          { name: "Season Workers – Skidortsjobb", url: "https://www.seasonworkers.com/ski-jobs/france/", official: false },
          { name: "Indeed France", url: "https://www.indeed.fr", official: false },
          { name: "Natives.co.uk – Skidsäsongsjobb", url: "https://www.natives.co.uk", official: false },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Leboncoin – Frankrikes Blocket", url: "https://www.leboncoin.fr", official: false },
          { name: "SeLoger", url: "https://www.seloger.com", official: false },
          { name: "Appartager – Dela lägenhet", url: "https://www.appartager.com", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i Frankrike (Facebook)", url: "https://www.facebook.com/groups/svenskarifranrike", official: false },
          { name: "Svenska kyrkan i Paris", url: "https://www.svenskakyrkan.se/paris", official: true },
          { name: "r/france (Reddit)", url: "https://www.reddit.com/r/france", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Frankrike", url: "https://www.kilroy.se/destinationer/frankrike", official: false },
          { name: "EF – Språkkurser i Frankrike", url: "https://www.ef.se/ils/destinations/frankrike/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop", description: "Ljusets stad med oändliga möjligheter för au pair, studier och praktik.", swedes: "~15 000 svenskar", popularFor: ["Au Pair", "Språkkurser", "Modepraktik"], avgRent: "~10 000 kr/mån", detailedInfo: { neighborhoods: ["Le Marais – Trendigt med gallerier och caféer", "Montmartre – Konstnärskvarter med charm", "16:e arr. – Populärt bland au pair-familjer", "Saint-Germain – Studentkvarter vid Seine"], tips: ["Skaffa Navigo-kort för kollektivtrafiken", "Franska är ett måste – engelska räcker inte", "Boulangerierna stänger måndagar", "Museikort ger rabatt på 60+ museer"], safety: "Generellt säkert – var uppmärksam på ficktjuvar i turistområden", internet: "Utmärkt – WiFi överallt", costOfLiving: "Hög – 12 000–18 000 kr/mån", nightlife: "Fantastiskt – Oberkampf, Bastille, Pigalle", transport: "Världsklass – metro, buss, RER" } },
      { name: "Lyon", image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&h=400&fit=crop", description: "Gastronomiska huvudstaden med billigare levnadskostnader än Paris.", swedes: "~1 200 svenskar", popularFor: ["Gastronomi-praktik", "Språkstudier", "Au Pair"], avgRent: "~7 000 kr/mån" },
      { name: "Bordeaux", image: "https://images.unsplash.com/photo-1565368228429-b9a0248b8b30?w=600&h=400&fit=crop", description: "Vinregionens huvudstad med vacker arkitektur och studentliv.", swedes: "~800 svenskar", popularFor: ["Vinbranschen", "Språkstudier", "Au Pair"], avgRent: "~7 500 kr/mån" },
      { name: "Chamonix", image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop", description: "Skiddestination vid Mont Blanc – epicentrum för säsongsarbete.", swedes: "~300 svenskar/säsong", popularFor: ["Skidlärare", "Bar & restaurang", "Hotellpersonal"], avgRent: "~7 000 kr/mån" },
    ],
  },

  storbritannien: {
    name: "Storbritannien",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop",
    description: "Storbritannien är en av de mest populära destinationerna för unga svenskar. London lockar med karriärmöjligheter, och sedan Brexit behövs Youth Mobility Visa – men det är värt det!",
    highlights: ["Youth Mobility Visa (2 år)", "Enorma jobbmöjligheter i London", "Engelska på hög nivå", "Kulturellt mecca"],
    programs: [
      { title: "Youth Mobility Visa", description: "Arbeta och bo i UK i upp till 2 år.", icon: Briefcase },
      { title: "Studera", description: "Världens bästa universitet – Oxford, Cambridge, LSE.", icon: Globe },
      { title: "Praktik", description: "Praktik inom finans, media och tech.", icon: TrendingUp },
    ],
    facts: [
      { label: "Visumlängd", value: "2 år (YMS)" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "Visumavgift", value: "~£298" },
    ],
    bestTime: "Året runt",
    currency: "Brittiskt pund (GBP)",
    language: "Engelska",
    communityStats: { total: "~100 000 svenskar bosatta", swedish: "~3 000 unga/år", ageRange: "20–30 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "Visum giltighetstid", value: "2 år" },
      { icon: DollarSign, label: "Visumavgift", value: "~£298" },
      { icon: Briefcase, label: "National Insurance Number", value: "Krävs för jobb" },
      { icon: Plane, label: "Ålderskrav", value: "18–30 år" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Youth Mobility Scheme (T5)", url: "https://www.gov.uk/youth-mobility", official: true },
          { name: "Svenska ambassaden i London", url: "https://www.swedenabroad.se/london", official: true },
          { name: "National Insurance Number", url: "https://www.gov.uk/apply-national-insurance-number", official: true },
          { name: "NHS – Sjukvård i UK", url: "https://www.nhs.uk", official: true },
        ],
      },
      {
        category: "Jobba i Storbritannien", icon: Briefcase,
        links: [
          { name: "Indeed UK", url: "https://www.indeed.co.uk", official: false },
          { name: "Reed.co.uk", url: "https://www.reed.co.uk", official: false },
          { name: "Totaljobs", url: "https://www.totaljobs.com", official: false },
          { name: "LinkedIn Jobs UK", url: "https://www.linkedin.com/jobs", official: false },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "SpareRoom – Dela lägenhet", url: "https://www.spareroom.co.uk", official: false },
          { name: "Rightmove", url: "https://www.rightmove.co.uk", official: false },
          { name: "Zoopla", url: "https://www.zoopla.co.uk", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i London (Facebook)", url: "https://www.facebook.com/groups/svenskarilondon", official: false },
          { name: "Svenska kyrkan i London", url: "https://www.svenskakyrkan.se/london", official: true },
          { name: "r/london (Reddit)", url: "https://www.reddit.com/r/london", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Storbritannien", url: "https://www.kilroy.se/destinationer/storbritannien", official: false },
          { name: "EF – Språkkurser i England", url: "https://www.ef.se/ils/destinations/england/", official: false },
        ],
      },
    ],
    cities: [
      { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop", description: "Världens mest internationella stad med oändliga möjligheter inom alla branscher.", swedes: "~50 000 svenskar", popularFor: ["Finans & bank", "Hospitality", "Tech & startup"], avgRent: "~12 000 kr/mån", detailedInfo: { neighborhoods: ["Shoreditch – Tech och hipsterkultur", "Clapham – Populärt bland skandinaver", "Camden – Alternativt med marknader", "Canary Wharf – Finansdistrikt"], tips: ["Oyster Card eller kontaktlöst för tunnelbanan", "Skaffa UK-bankkonto med Monzo eller Revolut", "Pub-kultur är viktig för nätverkande", "Zonerna avgör hyran – zon 2-3 bäst värdee"], safety: "Generellt säkert – var uppmärksam sent på kvällen", internet: "Utmärkt", costOfLiving: "Mycket hög – 15 000–22 000 kr/mån", nightlife: "Världsklass – Soho, Shoreditch, Brixton", transport: "Bäst i Europa – tube, bussar, Overground" } },
      { name: "Edinburgh", image: "https://images.unsplash.com/photo-1506377585622-bedcbb5f7f0c?w=600&h=400&fit=crop", description: "Skottlands vackra huvudstad med festivaler, historia och fantastisk natur.", swedes: "~3 000 svenskar", popularFor: ["Festival-jobb", "Studier", "Hospitality"], avgRent: "~9 000 kr/mån" },
      { name: "Manchester", image: "https://images.unsplash.com/photo-1515586838455-8f8045940928?w=600&h=400&fit=crop", description: "Nordens kulturhuvudstad med musik, fotboll och en växande tech-scen.", swedes: "~2 000 svenskar", popularFor: ["Media & musik", "Tech", "Studier"], avgRent: "~8 000 kr/mån" },
    ],
  },

  "nya-zeeland": {
    name: "Nya Zeeland",
    flag: "🇳🇿",
    heroImage: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&h=600&fit=crop",
    description: "Nya Zeeland erbjuder en unik blandning av hisnande natur, äventyrssporter och en välkomnande kultur. Perfekt för dig som älskar utomhusliv.",
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
    quickFacts: [
      { icon: Calendar, label: "Visum giltighetstid", value: "12 månader" },
      { icon: DollarSign, label: "Visumavgift", value: "~$455 NZD" },
      { icon: Briefcase, label: "Max arbete/arbetsgivare", value: "Obegränsat" },
      { icon: Plane, label: "Ålderskrav", value: "18–30 år" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Working Holiday Visa NZ", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/sweden-working-holiday-visa", official: true },
          { name: "Svenska ambassaden (Canberra)", url: "https://www.swedenabroad.se/canberra", official: true },
          { name: "IRD Number (skattenummer)", url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers", official: true },
        ],
      },
      {
        category: "Jobba i Nya Zeeland", icon: Briefcase,
        links: [
          { name: "Seek NZ", url: "https://www.seek.co.nz", official: false },
          { name: "Trade Me Jobs", url: "https://www.trademe.co.nz/a/jobs", official: false },
          { name: "Backpacker Board NZ", url: "https://www.backpackerboard.co.nz", official: false },
          { name: "Pick NZ – Fruktplockning", url: "https://www.picknz.co.nz", official: true },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Trade Me Property", url: "https://www.trademe.co.nz/a/property", official: false },
          { name: "Flatmates NZ", url: "https://www.nzflatmates.co.nz", official: false },
          { name: "Hostelworld NZ", url: "https://www.hostelworld.com/hostels/New-Zealand", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i Nya Zeeland (Facebook)", url: "https://www.facebook.com/groups/svenskarinyazeeland", official: false },
          { name: "r/newzealand (Reddit)", url: "https://www.reddit.com/r/newzealand", official: false },
          { name: "NZ Backpackers (Facebook)", url: "https://www.facebook.com/groups/nzbackpackers", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Nya Zeeland", url: "https://www.kilroy.se/destinationer/nya-zeeland", official: false },
          { name: "EF – Språkkurser i Nya Zeeland", url: "https://www.ef.se/ils/destinations/nya-zeeland/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Auckland", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=400&fit=crop", description: "Nya Zeelands största stad med en mix av stadskultur och natur.", swedes: "~1 200 svenskar", popularFor: ["Kontorsjobb", "Hospitality", "Startpunkt för resor"], avgRent: "~9 000 kr/mån", detailedInfo: { neighborhoods: ["Ponsonby – Trendigt med barer och restauranger", "CBD – Centralt med jobbmöjligheter", "Devonport – Charmig förort vid havet", "Mt Eden – Utsikt och studentliv"], tips: ["AT HOP-kort för kollektivtrafiken", "Jobb finns inom hospitality och bygg", "Vädret kan vara ostabilt – ta med regnjacka", "Stor svensk community i Ponsonby-området"], safety: "Mycket säkert", internet: "Bra – fibernät utbrett", costOfLiving: "Medel-hög – 11 000–16 000 kr/mån", nightlife: "Bra – Ponsonby, Britomart, K'Road", transport: "Bussar och tåg, men bil kan behövas" } },
      { name: "Queenstown", image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa07?w=600&h=400&fit=crop", description: "Äventyrshuvudstaden med bungy, skidåkning och otrolig natur.", swedes: "~600 svenskar", popularFor: ["Skidsäsong", "Äventyrsjobb", "Hospitality"], avgRent: "~10 000 kr/mån" },
      { name: "Wellington", image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&h=400&fit=crop", description: "Huvudstaden med kreativ kultur och fantastisk matscen.", swedes: "~500 svenskar", popularFor: ["Kreativa jobb", "Kaféer", "Filmproduktion"], avgRent: "~8 500 kr/mån" },
    ],
  },

  usa: {
    name: "USA",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop",
    description: "USA erbjuder otroliga möjligheter för svenska ungdomar. Från au pair-program till summer camps – upplev den amerikanska drömmen.",
    highlights: ["Au Pair-program med värdfamilj", "Summer Camp-upplevelser", "Kulturellt utbyte", "Möjlighet att resa runt i hela landet"],
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
    communityStats: { total: "~150 000 svenskar bosatta", swedish: "~800 au pairs/år", ageRange: "18–26 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "Au Pair-tid", value: "12–24 månader" },
      { icon: DollarSign, label: "Fickpengar/vecka", value: "$195,75" },
      { icon: Briefcase, label: "Visum", value: "J-1 Exchange" },
      { icon: Plane, label: "Ålderskrav", value: "18–26 år" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "J-1 Visa Info (State Dept)", url: "https://j1visa.state.gov", official: true },
          { name: "Svenska ambassaden i Washington", url: "https://www.swedenabroad.se/washington", official: true },
          { name: "Social Security Number", url: "https://www.ssa.gov/ssnumber/", official: true },
        ],
      },
      {
        category: "Au Pair & Camp", icon: Briefcase,
        links: [
          { name: "Cultural Care Au Pair", url: "https://www.culturalcare.com", official: false },
          { name: "Au Pair in America", url: "https://www.aupairinamerica.com", official: false },
          { name: "Camp America", url: "https://www.campamerica.co.uk", official: false },
          { name: "InterExchange", url: "https://www.interexchange.org", official: false },
        ],
      },
      {
        category: "Boende & Jobb", icon: MapPin,
        links: [
          { name: "Craigslist", url: "https://www.craigslist.org", official: false },
          { name: "Apartments.com", url: "https://www.apartments.com", official: false },
          { name: "Indeed USA", url: "https://www.indeed.com", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "SWEA – Svenska Women's Educational Assn", url: "https://www.swea.org", official: false },
          { name: "Svenskar i USA (Facebook)", url: "https://www.facebook.com/groups/svenskariusa", official: false },
          { name: "r/IWantOut (Reddit)", url: "https://www.reddit.com/r/IWantOut", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – USA", url: "https://www.kilroy.se/destinationer/usa", official: false },
          { name: "EF – Språkkurser i USA", url: "https://www.ef.se/ils/destinations/usa/", official: false },
        ],
      },
    ],
    cities: [
      { name: "New York", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop", description: "Världens mest ikoniska stad med oändliga möjligheter.", swedes: "~25 000 svenskar", popularFor: ["Au Pair", "Praktik", "Studier"], avgRent: "~15 000 kr/mån", detailedInfo: { neighborhoods: ["Manhattan – Allt händer här", "Brooklyn – Kreativt och trendigt", "Westchester – Populärt för au pairs", "Hoboken, NJ – Billigare med skyline-vy"], tips: ["MetroCard/OMNY för subway", "Au pair-familjer bor ofta i förorterna", "Tipping-kultur: 18-20% på restauranger", "Gå med i Scandinavian House-events"], safety: "Säkert i turistområden – var uppmärksam i subway sent", internet: "Utmärkt", costOfLiving: "Extremt hög – 18 000–25 000 kr/mån", nightlife: "Oändligt – East Village, Williamsburg, LES", transport: "Subway 24/7 – bäst i USA" } },
      { name: "Los Angeles", image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop", description: "Sol, stränder och Hollywood – populärt för au pairs.", swedes: "~15 000 svenskar", popularFor: ["Au Pair", "Filmindustrin", "Fitness"], avgRent: "~13 000 kr/mån" },
      { name: "San Francisco", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop", description: "Tech-huvudstaden med startup-kultur och progressiv stämning.", swedes: "~8 000 svenskar", popularFor: ["Tech-praktik", "Au Pair", "Startup-kultur"], avgRent: "~16 000 kr/mån" },
      { name: "Miami", image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=600&h=400&fit=crop", description: "Tropiskt klimat och latinamerikansk energi.", swedes: "~5 000 svenskar", popularFor: ["Au Pair", "Hospitality", "Strandliv"], avgRent: "~11 000 kr/mån" },
    ],
  },

  italien: {
    name: "Italien",
    flag: "🇮🇹",
    heroImage: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&h=600&fit=crop",
    description: "Italien lockar med dolce vita, fantastisk mat och en avslappnad livsstil. Som EU-medborgare kan du fritt jobba och bo i landet – perfekt för dig som älskar sol, kultur och pasta.",
    highlights: ["Inget visum krävs (EU)", "Otrolig mat och vinkultur", "Riktig dolce vita-livsstil", "Historiska städer och stränder"],
    programs: [
      { title: "Au Pair", description: "Bo hos en italiensk familj och lär dig språket.", icon: Users },
      { title: "Hotell & Restaurang", description: "Säsongsjobb vid kusten och i städerna.", icon: Briefcase },
      { title: "Språkkurs", description: "Lär dig italienska i Florens eller Rom.", icon: Globe },
    ],
    facts: [
      { label: "Visum", value: "Inget (EU-medborgare)" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~8 000–12 000 kr" },
    ],
    bestTime: "April – Oktober",
    currency: "Euro (EUR)",
    language: "Italienska",
    communityStats: { total: "~5 000 svenskar bosatta", swedish: "~1 500 unga/år", ageRange: "19–28 år vanligast" },
    quickFacts: [
      { icon: FileCheck, label: "Visum", value: "Inget krävs (EU)" },
      { icon: DollarSign, label: "Levnadskostnad", value: "Medel – billigare i söder" },
      { icon: Briefcase, label: "Populäraste jobben", value: "Turism, Au Pair, Hotell" },
      { icon: Plane, label: "Flygtid från Sverige", value: "~2,5 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "EU-rättigheter i Italien", url: "https://www.esteri.it/en/", official: true },
          { name: "Svenska ambassaden i Rom", url: "https://www.swedenabroad.se/rom", official: true },
          { name: "Codice Fiscale (skattenummer)", url: "https://www.agenziaentrate.gov.it", official: true },
        ],
      },
      {
        category: "Jobba i Italien", icon: Briefcase,
        links: [
          { name: "Indeed Italia", url: "https://it.indeed.com", official: false },
          { name: "InfoJobs Italia", url: "https://www.infojobs.it", official: false },
          { name: "Season Workers – Italien", url: "https://www.seasonworkers.com/italy/", official: false },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Immobiliare.it", url: "https://www.immobiliare.it", official: false },
          { name: "Idealista", url: "https://www.idealista.it", official: false },
          { name: "Subito.it – Italiens Blocket", url: "https://www.subito.it", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i Italien (Facebook)", url: "https://www.facebook.com/groups/svenskariitalien", official: false },
          { name: "Expats in Italy", url: "https://www.facebook.com/groups/expatsinitaly", official: false },
          { name: "r/italy (Reddit)", url: "https://www.reddit.com/r/italy", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Italien", url: "https://www.kilroy.se/destinationer/italien", official: false },
          { name: "EF – Språkkurser i Italien", url: "https://www.ef.se/ils/destinations/italien/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Rom", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop", description: "Den eviga staden med antik historia, fantastisk mat och oändlig charm.", swedes: "~2 000 svenskar", popularFor: ["Au Pair", "Studier", "Turismjobb"], avgRent: "~7 000 kr/mån", detailedInfo: { neighborhoods: ["Trastevere – Mysigt med kvällsliv", "Monti – Hippt och centralt", "Testaccio – Autentiskt med matkultur", "Prati – Lugnt nära Vatikanen"], tips: ["Skaffa ATAC-kort för kollektivtrafiken", "Italienska krävs för de flesta jobb", "Undvik turistfällor nära Colosseum", "Lunchmenyer (pranzo) är billiga"], safety: "Generellt säkert – ficktjuvar vid turistattraktioner", internet: "Bra i centrala delar", costOfLiving: "Medel – 9 000–13 000 kr/mån", nightlife: "Fantastiskt – Trastevere, Testaccio, San Lorenzo", transport: "Metro, bussar och spårvagnar" } },
      { name: "Milano", image: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=600&h=400&fit=crop", description: "Modehuvudstaden med internationell affärsvärld och design.", swedes: "~1 500 svenskar", popularFor: ["Mode-praktik", "Design", "Finans"], avgRent: "~9 000 kr/mån" },
      { name: "Florens", image: "https://images.unsplash.com/photo-1543429776-2782fc8e4132?w=600&h=400&fit=crop", description: "Renässansstaden med konst, vin och toskansk charm.", swedes: "~800 svenskar", popularFor: ["Konststudier", "Språkkurser", "Vinturism"], avgRent: "~7 500 kr/mån" },
    ],
  },

  spanien: {
    name: "Spanien",
    flag: "🇪🇸",
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=600&fit=crop",
    description: "Spanien erbjuder sol, tapas och en avslappnad livsstil. Populärt bland svenska ungdomar för språkkurser, au pair och säsongsjobb vid kusten.",
    highlights: ["Inget visum krävs (EU)", "Fantastiskt klimat året runt", "Billigt att leva", "Vibrerande nattliv och kultur"],
    programs: [
      { title: "Språkkurs", description: "Lär dig spanska i Barcelona, Madrid eller Málaga.", icon: Globe },
      { title: "Au Pair", description: "Bo hos en spansk familj.", icon: Users },
      { title: "Säsongsjobb", description: "Jobba vid kusten under sommarsäsongen.", icon: Sun },
    ],
    facts: [
      { label: "Visum", value: "Inget (EU-medborgare)" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~7 000–11 000 kr" },
    ],
    bestTime: "Mars – November",
    currency: "Euro (EUR)",
    language: "Spanska",
    communityStats: { total: "~25 000 svenskar bosatta", swedish: "~2 000 unga/år", ageRange: "18–28 år vanligast" },
    quickFacts: [
      { icon: FileCheck, label: "Visum", value: "Inget krävs (EU)" },
      { icon: DollarSign, label: "Levnadskostnad", value: "Låg-medel" },
      { icon: Briefcase, label: "NIE-nummer", value: "Krävs för jobb" },
      { icon: Plane, label: "Flygtid från Sverige", value: "~3 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "NIE-nummer ansökan", url: "https://www.policia.es/documentacion/nie.html", official: true },
          { name: "Svenska ambassaden i Madrid", url: "https://www.swedenabroad.se/madrid", official: true },
          { name: "Spanska skatteverket – Hacienda", url: "https://sede.agenciatributaria.gob.es", official: true },
        ],
      },
      {
        category: "Jobba i Spanien", icon: Briefcase,
        links: [
          { name: "InfoJobs – Spaniens största jobbsajt", url: "https://www.infojobs.net", official: false },
          { name: "Indeed España", url: "https://www.indeed.es", official: false },
          { name: "Turijobs – Turismjobb", url: "https://www.turijobs.com", official: false },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Idealista – Spaniens bostadssajt", url: "https://www.idealista.com", official: false },
          { name: "Fotocasa", url: "https://www.fotocasa.es", official: false },
          { name: "Badi – Dela lägenhet", url: "https://badi.com", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i Spanien (Facebook)", url: "https://www.facebook.com/groups/svenskarispanien", official: false },
          { name: "Svenska kyrkan i Spanien", url: "https://www.svenskakyrkan.se/costadelsol", official: true },
          { name: "r/spain (Reddit)", url: "https://www.reddit.com/r/spain", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Spanien", url: "https://www.kilroy.se/destinationer/spanien", official: false },
          { name: "EF – Språkkurser i Spanien", url: "https://www.ef.se/ils/destinations/spanien/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop", description: "Gaudís stad med stränder, nattliv och en otrolig matscen.", swedes: "~8 000 svenskar", popularFor: ["Språkkurser", "Hospitality", "Tech & startup"], avgRent: "~8 000 kr/mån", detailedInfo: { neighborhoods: ["El Born – Trendigt med barer och gallerier", "Gràcia – Lokalt och bohemiskt", "Barceloneta – Strandliv", "Eixample – Elegant med Gaudí-arkitektur"], tips: ["T-Casual kort för metro (10 resor)", "Spanska OCH katalanska talas", "Undvik Las Ramblas-restauranger – turistfällor", "Lägenhetsjakt är tuff – börja tidigt"], safety: "Generellt säkert – ficktjuvar i turistzoner", internet: "Utmärkt", costOfLiving: "Medel – 9 000–14 000 kr/mån", nightlife: "Fantastiskt – börjar inte förrän midnatt!", transport: "Utmärkt metro och buss" } },
      { name: "Madrid", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop", description: "Spaniens pulserade huvudstad med konst, fotboll och tapas.", swedes: "~4 000 svenskar", popularFor: ["Språkkurser", "Au Pair", "Studier"], avgRent: "~7 000 kr/mån" },
      { name: "Málaga", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&h=400&fit=crop", description: "Costa del Sol-pärlan med sol 320 dagar om året.", swedes: "~6 000 svenskar", popularFor: ["Turismjobb", "Språkkurser", "Pensionärscommunity"], avgRent: "~5 500 kr/mån" },
    ],
  },

  thailand: {
    name: "Thailand",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    description: "Thailand är perfekt för dig som vill volontärarbeta, dyka eller helt enkelt uppleva en fantastisk kultur till budgetpris.",
    highlights: ["Volontärprogram med djur och samhällen", "Otrolig matkultur", "Paradisiska stränder och öar", "Prisvänligt boende och mat"],
    programs: [
      { title: "Volontärarbete", description: "Hjälp lokalsamhällen och djurprojekt.", icon: Users },
      { title: "Dykcertifiering", description: "Bli PADI-certifierad i Koh Tao.", icon: Sun },
      { title: "Yogalärarutbildning", description: "200h YTT på Koh Phangan eller Chiang Mai.", icon: Globe },
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
    quickFacts: [
      { icon: Calendar, label: "Turistvisum", value: "60 dagar" },
      { icon: DollarSign, label: "Budget/dag", value: "~250–400 kr" },
      { icon: Briefcase, label: "PADI Open Water", value: "~3 000 kr" },
      { icon: Plane, label: "Flygtid", value: "~10 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Thai e-Visa ansökan", url: "https://www.thaievisa.go.th", official: true },
          { name: "Svenska ambassaden i Bangkok", url: "https://www.swedenabroad.se/bangkok", official: true },
          { name: "Thailand Immigration Bureau", url: "https://www.immigration.go.th", official: true },
        ],
      },
      {
        category: "Volontär & Dyk", icon: Briefcase,
        links: [
          { name: "Workaway – Volontärjobb", url: "https://www.workaway.info", official: false },
          { name: "WWOOF Thailand", url: "https://wwoof.net/host/search?country=TH", official: false },
          { name: "PADI – Hitta dykcenter", url: "https://www.padi.com/dive-shops", official: true },
          { name: "Volunteer World", url: "https://www.volunteerworld.com/en/volunteer-abroad/thailand", official: false },
        ],
      },
      {
        category: "Boende & Resa", icon: MapPin,
        links: [
          { name: "Agoda – Hotell i Asien", url: "https://www.agoda.com", official: false },
          { name: "Hostelworld Thailand", url: "https://www.hostelworld.com/hostels/Thailand", official: false },
          { name: "12Go – Boka transport", url: "https://12go.asia/en/thailand", official: false },
        ],
      },
      {
        category: "Communities & Tips", icon: Users,
        links: [
          { name: "Svenskar i Thailand (Facebook)", url: "https://www.facebook.com/groups/svenskarithailand", official: false },
          { name: "Thaivisa Forum", url: "https://forum.thaivisa.com", official: false },
          { name: "r/ThailandTourism (Reddit)", url: "https://www.reddit.com/r/ThailandTourism", official: false },
        ],
      },
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Thailand", url: "https://www.kilroy.se/destinationer/thailand", official: false },
        ],
      },
    ],
    cities: [
      { name: "Bangkok", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop", description: "Pulserande huvudstad med tempel, streetfood och nattliv.", swedes: "~8 000 svenskar", popularFor: ["Volontärarbete", "Språkkurser", "Undervisning"], avgRent: "~4 000 kr/mån", detailedInfo: { neighborhoods: ["Khao San Road – Backpacker-mekka", "Sukhumvit – Modernt med bra nattliv", "Silom – Affärsdistrikt", "Thonglor – Hippt och trendrikt"], tips: ["BTS Skytrain och MRT för att undvika trafik", "Streetfood är billigt och gott – ät där lokalbefolkningen äter", "Förhandla alltid priset i tuk-tuk", "Visa respekt vid tempel – täck axlar och knän"], safety: "Generellt säkert – var uppmärksam på bedrägerier", internet: "Bra – WiFi på de flesta caféer", costOfLiving: "Låg – 5 000–8 000 kr/mån", nightlife: "Legendariskt – RCA, Thonglor, Khao San", transport: "BTS, MRT, båt och tuk-tuk" } },
      { name: "Chiang Mai", image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&h=400&fit=crop", description: "Kulturella huvudstaden i norr – populärt bland digitala nomader.", swedes: "~3 000 svenskar", popularFor: ["Elefant-sanctuary", "Undervisning", "Digital nomad"], avgRent: "~3 500 kr/mån" },
      { name: "Koh Tao", image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&h=400&fit=crop", description: "Världens mest populära plats för dykcertifiering.", swedes: "~1 500 svenskar", popularFor: ["Dykcertifiering", "Strandjobb", "Yoga"], avgRent: "~3 000 kr/mån" },
    ],
  },

  chamonix: {
    name: "Chamonix",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&h=600&fit=crop",
    description: "Chamonix vid foten av Mont Blanc är drömmen för alla skidälskare.",
    highlights: ["Skidåkning i världsklass", "Fantastisk afterski", "Internationell gemenskap", "Utforska Alperna"],
    programs: [
      { title: "Skidsäsong", description: "Arbeta på skidort under vintersäsongen.", icon: Briefcase },
      { title: "Hotell & Restaurang", description: "Jobb inom hospitality.", icon: Users },
      { title: "Skidlärare", description: "Certifiera dig och lär ut skidåkning.", icon: Sun },
    ],
    facts: [
      { label: "Säsong", value: "December – April" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "December – April",
    currency: "Euro (EUR)",
    language: "Franska",
    communityStats: { total: "~30 000 svenskar i Frankrike", swedish: "~300 i Alperna/säsong", ageRange: "19–28 år vanligast" },
    quickFacts: [
      { icon: FileCheck, label: "Visum", value: "Inget krävs (EU)" },
      { icon: DollarSign, label: "Lön/månad", value: "~€1 500–2 000" },
      { icon: Briefcase, label: "Säsonglängd", value: "Dec–Apr" },
      { icon: Plane, label: "Närmaste flygplats", value: "Genève (1h)" },
    ],
    resources: [
      {
        category: "Jobb & Säsong", icon: Briefcase,
        links: [
          { name: "Season Workers – Skidortsjobb", url: "https://www.seasonworkers.com", official: false },
          { name: "Natives.co.uk – Ski Season Jobs", url: "https://www.natives.co.uk", official: false },
          { name: "Pôle Emploi Chamonix", url: "https://www.pole-emploi.fr", official: true },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Leboncoin – Chamonix", url: "https://www.leboncoin.fr", official: false },
          { name: "Season Workers Housing", url: "https://www.seasonworkers.com/accommodation/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Chamonix-Mont-Blanc", image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop", description: "Hjärtat vid Mont Blanc-massivet.", swedes: "~120 svenskar/säsong", popularFor: ["Skidlärare", "Bar & restaurang", "Hotellpersonal"], avgRent: "~7 000 kr/mån" },
      { name: "Morzine / Avoriaz", image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=600&h=400&fit=crop", description: "Portes du Soleil med 650 km pist.", swedes: "~60 svenskar/säsong", popularFor: ["Chalet-jobb", "Skiduthyrning", "Transfer-chaufför"], avgRent: "~6 000 kr/mån" },
      { name: "Val d'Isère", image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=600&h=400&fit=crop", description: "Exklusiv skidort med hög afterski-nivå.", swedes: "~90 svenskar/säsong", popularFor: ["Lyxhotell", "Skidlärare", "Bartender"], avgRent: "~8 000 kr/mån" },
    ],
  },

  paris: {
    name: "Paris",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    description: "Ljusets stad – perfekt för au pair, studier och praktik.",
    highlights: ["Au Pair hos franska familjer", "Studera franska på plats", "Praktik inom mode och gastronomi", "Världens kulturhuvudstad"],
    programs: [
      { title: "Au Pair", description: "Bo hos en fransk familj.", icon: Users },
      { title: "Språkkurs", description: "Intensiva franskakurser.", icon: Globe },
      { title: "Praktik", description: "Praktik inom mode, mat eller konst.", icon: Briefcase },
    ],
    facts: [
      { label: "Au Pair-längd", value: "6–12 månader" },
      { label: "Åldersgräns", value: "18–30 år" },
      { label: "EU-medborgare", value: "Inget visum krävs" },
    ],
    bestTime: "Året runt",
    currency: "Euro (EUR)",
    language: "Franska",
    communityStats: { total: "~30 000 svenskar i Frankrike", swedish: "~500 svenskar/år", ageRange: "19–27 år vanligast" },
    quickFacts: [
      { icon: FileCheck, label: "Visum", value: "Inget krävs (EU)" },
      { icon: DollarSign, label: "Au Pair fickpengar", value: "~€300/mån" },
      { icon: Briefcase, label: "Populäraste jobben", value: "Au Pair, Mode, Gastronomi" },
      { icon: Plane, label: "Flygtid", value: "~2,5 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Svenska ambassaden i Paris", url: "https://www.swedenabroad.se/paris", official: true },
          { name: "CAF – Bostadsbidrag", url: "https://www.caf.fr", official: true },
        ],
      },
      {
        category: "Au Pair & Jobb", icon: Briefcase,
        links: [
          { name: "AuPairWorld", url: "https://www.aupairworld.com", official: false },
          { name: "Indeed France", url: "https://www.indeed.fr", official: false },
        ],
      },
      {
        category: "Boende", icon: MapPin,
        links: [
          { name: "Leboncoin", url: "https://www.leboncoin.fr", official: false },
          { name: "PAP.fr – Direkt från ägare", url: "https://www.pap.fr", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Svenskar i Paris (Facebook)", url: "https://www.facebook.com/groups/svenskariparis", official: false },
          { name: "Svenska kyrkan i Paris", url: "https://www.svenskakyrkan.se/paris", official: true },
        ],
      },
    ],
    cities: [
      { name: "Paris (Centrala)", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop", description: "Hjärtat av Paris med Eiffeltornet och Louvren.", swedes: "~15 000 svenskar", popularFor: ["Au Pair", "Språkkurser", "Modepraktik"], avgRent: "~10 000 kr/mån" },
      { name: "Bordeaux", image: "https://images.unsplash.com/photo-1565368228429-b9a0248b8b30?w=600&h=400&fit=crop", description: "Vinregionens huvudstad.", swedes: "~800 svenskar", popularFor: ["Vinbranschen", "Språkstudier", "Au Pair"], avgRent: "~7 500 kr/mån" },
      { name: "Lyon", image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&h=400&fit=crop", description: "Gastronomiska huvudstaden.", swedes: "~1 200 svenskar", popularFor: ["Gastronomi-praktik", "Språkstudier", "Au Pair"], avgRent: "~7 000 kr/mån" },
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

            {/* Quick Facts Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {dest.quickFacts.map((fact) => (
                <div key={fact.label} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/60 text-center hover:shadow-md hover:border-primary/20 transition-all">
                  <fact.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
                  <p className="font-display font-semibold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>

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

            {/* Resource Cards — like AustraliaSection */}
            {dest.resources.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  <FileCheck className="w-6 h-6 inline-block mr-2 text-primary" />
                  Resurser & Länkar
                </h2>
                <p className="text-muted-foreground mb-8 text-sm">Alla viktiga länkar samlade på ett ställe</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {dest.resources.map((category) => (
                    <div key={category.category} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/60 hover:shadow-md hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{category.category}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.links.map((link) => (
                          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-muted/40 hover:bg-primary/5 transition-colors group">
                            <div className="flex items-center gap-2">
                              <span className="text-foreground group-hover:text-primary transition-colors text-sm">{link.name}</span>
                              {link.official && (
                                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">Officiell</span>
                              )}
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

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
