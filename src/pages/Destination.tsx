import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Sun, Briefcase, Building2, DollarSign, Home, TrendingUp, Star, Coffee, Wifi, Shield, ExternalLink, FileCheck, Plane, Syringe, AlertTriangle } from "lucide-react";
import { vaccinationData, defaultVaccinationInfo } from "@/data/vaccinations";
import { udTravelInfo, defaultUDInfo } from "@/data/udTravelInfo";
import lyonImage from "@/assets/lyon.jpg";
import bordeauxImage from "@/assets/bordeaux.jpg";
import aixImage from "@/assets/aix-en-provence.jpg";

type CityLink = {
  name: string;
  url: string;
  type: "facebook" | "jobb" | "boende";
};

type CityInfo = {
  name: string;
  image: string;
  description: string;
  swedes: string;
  popularFor: string[];
  avgRent: string;
  cityLinks?: CityLink[];
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
      { icon: Calendar, label: "Visum giltighetstid", value: "12 månader (förlängbart till 36)" },
      { icon: DollarSign, label: "Visumavgift", value: "~670 AUD" },
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
      { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop", description: "Australiens största stad med ikoniska operahuset, fantastiska stränder som Bondi och ett pulserande nattliv.", swedes: "~3 500 svenskar", popularFor: ["Restaurangjobb", "Kontorsarbete", "Surfing"], avgRent: "~12 000 kr/mån", cityLinks: [
          { name: "Svenskar i Sydney (Facebook)", url: "https://www.facebook.com/groups/svenskarisydney", type: "facebook" },
          { name: "Svenska i Australien – Sydney", url: "https://www.facebook.com/groups/svenskaiAustralien", type: "facebook" },
          { name: "Jobs in Sydney (Facebook)", url: "https://www.facebook.com/groups/jobsinsydney", type: "jobb" },
          { name: "Backpacker Jobs Sydney", url: "https://www.facebook.com/groups/backpackerjobssydney", type: "jobb" },
          { name: "Seek – Sydney", url: "https://www.seek.com.au/jobs/in-Sydney", type: "jobb" },
          { name: "Flatmates – Sydney", url: "https://flatmates.com.au/sydney", type: "boende" },
          { name: "Gumtree – Sydney boende", url: "https://www.gumtree.com.au/s-flatshare-houseshare/sydney/c18294l3003435", type: "boende" },
        ], detailedInfo: { neighborhoods: ["Bondi Beach – Populärt bland backpackers och surfare", "Manly – Avslappnad strandförort med färja till city", "Surry Hills – Hippt område med caféer och barer", "Newtown – Alternativt och prisvärt"], tips: ["Skaffa Opal Card för kollektivtrafiken", "RSA-certifikat krävs för att jobba på bar", "Bondi till Coogee-promenaden är ett måste", "Gå med i svenska Facebook-grupper för jobb"], safety: "Mycket säkert – var uppmärksam vid stränderna (strömmar)", internet: "Snabbt och pålitligt, WiFi på de flesta caféer", costOfLiving: "Hög – räkna med 15 000–20 000 kr/mån totalt", nightlife: "Fantastiskt – Kings Cross, Darling Harbour, The Rocks", transport: "Bra kollektivtrafik med bussar, tåg och färjor" } },
      { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop", description: "Kulturhuvudstaden med fantastisk matscen, street art och sportkultur.", swedes: "~2 500 svenskar", popularFor: ["Hospitality", "Barista-jobb", "Kreativa jobb"], avgRent: "~10 000 kr/mån", cityLinks: [
          { name: "Svenskar i Melbourne (Facebook)", url: "https://www.facebook.com/groups/svenskarimelbourne", type: "facebook" },
          { name: "Scandinavians in Melbourne", url: "https://www.facebook.com/groups/scandinaviansinmelbourne", type: "facebook" },
          { name: "Jobs in Melbourne (Facebook)", url: "https://www.facebook.com/groups/jobsinmelbourne", type: "jobb" },
          { name: "Backpacker Jobs Melbourne", url: "https://www.facebook.com/groups/backpackerjobsmelbourne", type: "jobb" },
          { name: "Seek – Melbourne", url: "https://www.seek.com.au/jobs/in-Melbourne", type: "jobb" },
          { name: "Flatmates – Melbourne", url: "https://flatmates.com.au/melbourne", type: "boende" },
          { name: "Gumtree – Melbourne boende", url: "https://www.gumtree.com.au/s-flatshare-houseshare/melbourne/c18294l3001317", type: "boende" },
        ], detailedInfo: { neighborhoods: ["Fitzroy – Street art och hippa barer", "St Kilda – Strandliv och nöjen", "Brunswick – Alternativt med bra matscen", "CBD – Centralt med många jobbmöjligheter"], tips: ["Melbourne har 'fyra årstider på en dag' – klä dig i lager", "Kafékulturen är enorm – bra för baristajobb", "Myki-kort för kollektivtrafiken", "Gratis spårvagn i CBD-zonen"], safety: "Mycket säkert", internet: "Utmärkt – gratis WiFi i CBD", costOfLiving: "Medel-hög – 13 000–18 000 kr/mån", nightlife: "Världskänt – gömda barer och livemusik", transport: "Utmärkt med spårvagnar, tåg och bussar" } },
      { name: "Gold Coast", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop", description: "Surfarnas paradis med milslånga sandstränder och soligt väder året runt.", swedes: "~1 500 svenskar", popularFor: ["Surfing", "Turismbranschen", "Fitness-jobb"], avgRent: "~8 500 kr/mån", cityLinks: [
          { name: "Svenskar på Gold Coast (Facebook)", url: "https://www.facebook.com/groups/svenskarpagoldcoast", type: "facebook" },
          { name: "Scandinavians Gold Coast", url: "https://www.facebook.com/groups/scandinaviansgoldcoast", type: "facebook" },
          { name: "Jobs Gold Coast (Facebook)", url: "https://www.facebook.com/groups/jobsgoldcoast", type: "jobb" },
          { name: "Seek – Gold Coast", url: "https://www.seek.com.au/jobs/in-Gold-Coast", type: "jobb" },
          { name: "Flatmates – Gold Coast", url: "https://flatmates.com.au/gold-coast", type: "boende" },
          { name: "Gumtree – Gold Coast boende", url: "https://www.gumtree.com.au/s-flatshare-houseshare/gold-coast/c18294l3001327", type: "boende" },
        ], detailedInfo: { neighborhoods: ["Surfers Paradise – Centrum med nattliv", "Burleigh Heads – Avslappnat med bra surfing", "Coolangatta – Lugnt och mysigt", "Broadbeach – Mitt emellan fest och lugn"], tips: ["Lär dig surfa – det är gratis!", "Jobb finns inom turism och restaurang", "Go Card för kollektivtrafiken"], safety: "Säkert – bada alltid mellan flaggorna", internet: "Bra – de flesta hostels har WiFi", costOfLiving: "Medel – 10 000–14 000 kr/mån", nightlife: "Surfers Paradise har allt", transport: "Bussar och light rail längs kusten" } },
      { name: "Cairns", image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&h=400&fit=crop", description: "Porten till Great Barrier Reef och tropisk regnskog.", swedes: "~800 svenskar", popularFor: ["Dykning", "Turismjobb", "Farm work"], avgRent: "~7 000 kr/mån", cityLinks: [
          { name: "Svenskar i Cairns (Facebook)", url: "https://www.facebook.com/groups/svenskaricairns", type: "facebook" },
          { name: "Backpackers Cairns (Facebook)", url: "https://www.facebook.com/groups/backpackerscairns", type: "facebook" },
          { name: "Jobs in Cairns (Facebook)", url: "https://www.facebook.com/groups/jobsincairns", type: "jobb" },
          { name: "Seek – Cairns", url: "https://www.seek.com.au/jobs/in-Cairns", type: "jobb" },
          { name: "Flatmates – Cairns", url: "https://flatmates.com.au/cairns", type: "boende" },
          { name: "Gumtree – Cairns boende", url: "https://www.gumtree.com.au/s-flatshare-houseshare/cairns/c18294l3001306", type: "boende" },
        ], detailedInfo: { neighborhoods: ["Cairns City – Kompakt centrum", "Northern Beaches – Palm Cove", "Kuranda – Regnskogsstad", "Port Douglas – Lyxig kuststad"], tips: ["Dykcertifiering tar 3–4 dagar", "Farm work i Atherton Tablelands", "Var beredd på fuktigt tropiskt klimat"], safety: "Säkert – var medveten om krokodiler och maneter", internet: "Okej – kan vara långsamt utanför staden", costOfLiving: "Låg-medel – 8 000–12 000 kr/mån", nightlife: "Mindre men livligt", transport: "Begränsad – bil eller cykel rekommenderas" } },
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
      { icon: DollarSign, label: "Minimilön (SMIC)", value: "~€1 802/mån brutto" },
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
      { name: "Lyon", image: lyonImage, description: "Gastronomiska huvudstaden med billigare levnadskostnader än Paris.", swedes: "~1 200 svenskar", popularFor: ["Gastronomi-praktik", "Språkstudier", "Au Pair"], avgRent: "~7 000 kr/mån" },
      { name: "Bordeaux", image: bordeauxImage, description: "Vinregionens huvudstad med vacker arkitektur och studentliv.", swedes: "~800 svenskar", popularFor: ["Vinbranschen", "Språkstudier", "Au Pair"], avgRent: "~7 500 kr/mån" },
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
      { label: "Visumavgift", value: "£319 + IHS" },
    ],
    bestTime: "Året runt",
    currency: "Brittiskt pund (GBP)",
    language: "Engelska",
    communityStats: { total: "~100 000 svenskar bosatta", swedish: "~3 000 unga/år", ageRange: "20–30 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "Visum giltighetstid", value: "2 år" },
      { icon: DollarSign, label: "Avgift + IHS", value: "£319 + £776/år" },
      { icon: Briefcase, label: "Sparkapital", value: "£2 530 krävs" },
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
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Frankrike & Alperna", url: "https://www.kilroy.se/destinationer/frankrike", official: false },
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
    communityStats: { total: "~30 000 svenskar i Frankrike", swedish: "~1 500 svenskar/år", ageRange: "19–27 år vanligast" },
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
      {
        category: "Boka via partner", icon: Plane,
        links: [
          { name: "Kilroy – Frankrike", url: "https://www.kilroy.se/destinationer/frankrike", official: false },
          { name: "EF – Språkkurser i Paris", url: "https://www.ef.se/ils/destinations/frankrike/paris/", official: false },
        ],
      },
    ],
    cities: [
      { name: "Paris (Centrala)", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop", description: "Hjärtat av Paris med Eiffeltornet och Louvren.", swedes: "~15 000 svenskar", popularFor: ["Au Pair", "Språkkurser", "Modepraktik"], avgRent: "~10 000 kr/mån" },
      { name: "Bordeaux", image: bordeauxImage, description: "Vinregionens huvudstad.", swedes: "~800 svenskar", popularFor: ["Vinbranschen", "Språkstudier", "Au Pair"], avgRent: "~7 500 kr/mån" },
      { name: "Lyon", image: lyonImage, description: "Gastronomiska huvudstaden.", swedes: "~1 200 svenskar", popularFor: ["Gastronomi-praktik", "Språkstudier", "Au Pair"], avgRent: "~7 000 kr/mån" },
    ],
  },

  vietnam: {
    name: "Vietnam",
    flag: "🇻🇳",
    heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=600&fit=crop",
    description: "Vietnam bjuder på en otrolig blandning av historia, dramatisk natur och världens bästa gatumat. Populärt att köra motorcykel från Hanoi i norr till Ho Chi Minh-staden i söder.",
    highlights: ["Billigt – under 4 000 kr/månad räcker långt", "Episk motorcykel-resa nord till syd", "Undervisa engelska med bra lön", "Otrolig matkultur"],
    programs: [
      { title: "Undervisa engelska", description: "TEFL-jobb med bra lön i Hanoi och HCMC.", icon: Briefcase },
      { title: "Backpacking", description: "Klassisk rutt från norr till söder.", icon: Globe },
      { title: "Digital Nomad", description: "Snabbt internet och billigt boende i Da Nang.", icon: Wifi },
    ],
    facts: [
      { label: "Visum", value: "E-Visa 90 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~4 000 kr" },
    ],
    bestTime: "November – April (torrsäsong)",
    currency: "Vietnamesisk dong (VND)",
    language: "Vietnamesiska",
    communityStats: { total: "~500 svenskar bosatta", swedish: "~2 000 besökare/år", ageRange: "20–30 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "E-Visa", value: "90 dagar" },
      { icon: DollarSign, label: "Budget/dag", value: "~150–300 kr" },
      { icon: Briefcase, label: "TEFL-lön", value: "~15 000–25 000 kr/mån" },
      { icon: Plane, label: "Flygtid", value: "~12 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Vietnam E-Visa (officiell)", url: "https://evisa.xuatnhapcanh.gov.vn", official: true },
          { name: "Svenska ambassaden i Hanoi", url: "https://www.swedenabroad.se/hanoi", official: true },
        ],
      },
      {
        category: "Jobba & Volontär", icon: Briefcase,
        links: [
          { name: "ESL Cafe – Lärartjänster", url: "https://www.eslcafe.com/jobs/vietnam", official: false },
          { name: "Workaway Vietnam", url: "https://www.workaway.info/en/country/vietnam", official: false },
          { name: "Vietnam Teaching Jobs", url: "https://vietnamteachingjobs.com", official: false },
        ],
      },
      {
        category: "Boende & Resa", icon: MapPin,
        links: [
          { name: "Agoda – Vietnam", url: "https://www.agoda.com/country/vietnam.html", official: false },
          { name: "12Go – Bussar & tåg", url: "https://12go.asia/en/vietnam", official: false },
          { name: "Hostelworld Vietnam", url: "https://www.hostelworld.com/hostels/Vietnam", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Svenskar i Vietnam (Facebook)", url: "https://www.facebook.com/groups/svenskarivietnam", official: false },
          { name: "Expats in Vietnam", url: "https://www.facebook.com/groups/expatsinvietnam", official: false },
          { name: "r/VietNam (Reddit)", url: "https://www.reddit.com/r/VietNam", official: false },
        ],
      },
    ],
    cities: [
      { name: "Hanoi", image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600&h=400&fit=crop", description: "Den charmiga huvudstaden i norr med gamla kvarter och bästa pho.", swedes: "~200 svenskar", popularFor: ["Undervisa engelska", "Kultur", "Mat"], avgRent: "~3 500 kr/mån", detailedInfo: { neighborhoods: ["Old Quarter – Hjärtat med 36 gator", "Tay Ho – Expat-favorit vid sjön", "Ba Dinh – Politiskt centrum", "Hoan Kiem – Centralt och turistvänligt"], tips: ["Korsa gatan långsamt och stadigt – stanna inte", "Egg coffee är ett måste-prova", "Grab-app för taxi och mat", "Kvällspromenad runt Hoan Kiem-sjön"], safety: "Säkert – var uppmärksam på väskryckare på moped", internet: "Snabbt och billigt fiber", costOfLiving: "Låg – 4 000–7 000 kr/mån", nightlife: "Beer Street, Ta Hien – billig öl och liv", transport: "Grab, taxi, hyr moped (med försiktighet)" } },
      { name: "Ho Chi Minh-staden", image: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=600&h=400&fit=crop", description: "Pulserande affärscentrum i söder, tidigare Saigon.", swedes: "~250 svenskar", popularFor: ["Engelsklärare", "Praktik", "Digital Nomad"], avgRent: "~4 500 kr/mån" },
      { name: "Da Nang & Hoi An", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop", description: "Strandstäder med bra balans mellan stadsliv och natur – nomad-favorit.", swedes: "~150 svenskar", popularFor: ["Digital Nomad", "Surf", "Volontär"], avgRent: "~3 500 kr/mån" },
    ],
  },

  indonesien: {
    name: "Indonesien / Bali",
    flag: "🇮🇩",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop",
    description: "Bali har blivit en av världens mest populära platser för digitala nomader, surfare och yogaälskare. Utanför Bali väntar 17 000 öar att utforska – från Komodo till Sumatra.",
    highlights: ["Världens hetaste digital nomad-hub", "Surfing och yoga i världsklass", "Fantastisk dykning i Komodo & Raja Ampat", "Billig massage, mat och boende"],
    programs: [
      { title: "Digital Nomad", description: "Coworking och visumlösningar i Canggu och Ubud.", icon: Wifi },
      { title: "Yogalärarutbildning", description: "200h YTT i Ubud – världens yoga-mecka.", icon: Globe },
      { title: "Surfresor", description: "Lär dig surfa i Kuta, Canggu eller Uluwatu.", icon: Sun },
    ],
    facts: [
      { label: "Visum", value: "Visa on Arrival 30 dagar (förlängbart)" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~6 000 kr" },
    ],
    bestTime: "April – Oktober (torrsäsong)",
    currency: "Indonesisk rupiah (IDR)",
    language: "Indonesiska (engelska vanligt på Bali)",
    communityStats: { total: "~3 000 svenskar bosatta", swedish: "~10 000 besökare/år", ageRange: "22–35 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "VoA", value: "30 dagar (förlängbart till 60)" },
      { icon: DollarSign, label: "Budget/dag", value: "~250–500 kr" },
      { icon: Briefcase, label: "Coworking/mån", value: "~1 500–2 500 kr" },
      { icon: Plane, label: "Flygtid", value: "~15 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Indonesia E-Visa (officiell)", url: "https://evisa.imigrasi.go.id", official: true },
          { name: "Svenska ambassaden i Jakarta", url: "https://www.swedenabroad.se/jakarta", official: true },
          { name: "B211A – Social/turistvisum 60d", url: "https://www.imigrasi.go.id", official: true },
        ],
      },
      {
        category: "Coworking & Jobb", icon: Briefcase,
        links: [
          { name: "Dojo Bali (Canggu)", url: "https://www.dojobali.org", official: false },
          { name: "Outpost Coworking", url: "https://www.outpost-asia.com", official: false },
          { name: "Workaway Indonesien", url: "https://www.workaway.info/en/country/indonesia", official: false },
        ],
      },
      {
        category: "Boende & Resa", icon: MapPin,
        links: [
          { name: "Airbnb Bali", url: "https://www.airbnb.com/s/Bali", official: false },
          { name: "Facebook – Bali Housing", url: "https://www.facebook.com/groups/balihousing", official: false },
          { name: "Hostelworld Bali", url: "https://www.hostelworld.com/hostels/Bali", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Svenskar på Bali (Facebook)", url: "https://www.facebook.com/groups/svenskarpabali", official: false },
          { name: "Canggu Community", url: "https://www.facebook.com/groups/cangguconnections", official: false },
          { name: "r/bali (Reddit)", url: "https://www.reddit.com/r/bali", official: false },
        ],
      },
    ],
    cities: [
      { name: "Canggu", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop", description: "Digital nomad-mecka med surf, smoothie bowls och coworking.", swedes: "~600 svenskar", popularFor: ["Digital Nomad", "Surf", "Yoga"], avgRent: "~6 000 kr/mån", detailedInfo: { neighborhoods: ["Echo Beach – Surfare och nomader", "Berawa – Familjevänligt och hippt", "Pererenan – Lugnare alternativ", "Batu Bolong – Centrum med caféer"], tips: ["Hyr scooter (~600 kr/mån) – bilkö är ett helvete", "Köp lokalt SIM-kort (Telkomsel) direkt", "Drick aldrig kranvatten", "Respektera ceremonier – stäng av musik"], safety: "Säkert – var uppmärksam i trafik och vid stölder", internet: "Mycket bra – 100+ Mbps på de flesta caféer", costOfLiving: "Medel – 8 000–15 000 kr/mån", nightlife: "Old Man's, La Brisa, Finns Beach Club", transport: "Scooter eller Gojek/Grab" } },
      { name: "Ubud", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&h=400&fit=crop", description: "Yoga, andlighet och risfält – det kulturella hjärtat av Bali.", swedes: "~400 svenskar", popularFor: ["Yoga", "Healing", "Volontär"], avgRent: "~5 000 kr/mån" },
      { name: "Gili Islands", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop", description: "Tre paradiska öar – inga bilar, bara cyklar och hästkärror.", swedes: "~150 svenskar", popularFor: ["Dykning", "Snorkling", "Strandliv"], avgRent: "~4 500 kr/mån" },
    ],
  },

  kambodja: {
    name: "Kambodja",
    flag: "🇰🇭",
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=600&fit=crop",
    description: "Kambodja lockar med Angkor Wat, vänliga människor och meningsfulla volontärmöjligheter. Ett av Sydostasiens billigaste länder och perfekt för att göra skillnad.",
    highlights: ["Världens största tempelkomplex – Angkor Wat", "Otroligt prisvärt", "Många volontärprojekt", "Genuint gästvänlig kultur"],
    programs: [
      { title: "Volontärarbete", description: "Undervisning och samhällsprojekt.", icon: Users },
      { title: "Backpacking", description: "Tempel, stränder och kustlinje.", icon: Globe },
      { title: "Undervisa engelska", description: "TEFL-jobb i Phnom Penh och Siem Reap.", icon: Briefcase },
    ],
    facts: [
      { label: "Visum", value: "Visa on Arrival 30 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~3 500 kr" },
    ],
    bestTime: "November – Mars (sval torrsäsong)",
    currency: "Riel (KHR) – USD används överallt",
    language: "Khmer (engelska i städer)",
    communityStats: { total: "~150 svenskar bosatta", swedish: "~1 500 besökare/år", ageRange: "20–28 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "VoA", value: "30 dagar (~$30)" },
      { icon: DollarSign, label: "Budget/dag", value: "~120–250 kr" },
      { icon: Briefcase, label: "TEFL-lön", value: "~10 000–15 000 kr/mån" },
      { icon: Plane, label: "Flygtid", value: "~13 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Cambodia E-Visa (officiell)", url: "https://www.evisa.gov.kh", official: true },
          { name: "Svenska ambassaden (Bangkok ackrediterad)", url: "https://www.swedenabroad.se/bangkok", official: true },
        ],
      },
      {
        category: "Volontär & Jobb", icon: Briefcase,
        links: [
          { name: "Volunteer World – Kambodja", url: "https://www.volunteerworld.com/en/volunteer-abroad/cambodia", official: false },
          { name: "Workaway Kambodja", url: "https://www.workaway.info/en/country/cambodia", official: false },
          { name: "CamHR – Lokala jobb", url: "https://www.camhr.com", official: false },
        ],
      },
      {
        category: "Boende & Resa", icon: MapPin,
        links: [
          { name: "Agoda – Kambodja", url: "https://www.agoda.com/country/cambodia.html", official: false },
          { name: "12Go Asia – Kambodja", url: "https://12go.asia/en/cambodia", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Svenskar i Kambodja (Facebook)", url: "https://www.facebook.com/groups/svenskarikambodja", official: false },
          { name: "Expats in Cambodia", url: "https://www.facebook.com/groups/expatsincambodia", official: false },
        ],
      },
    ],
    cities: [
      { name: "Siem Reap", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop", description: "Porten till Angkor Wat – livligt med Pub Street och nattmarknader.", swedes: "~50 svenskar", popularFor: ["Volontär", "Tempel", "Backpacking"], avgRent: "~2 500 kr/mån" },
      { name: "Phnom Penh", image: "https://images.unsplash.com/photo-1571406384350-3c4137e8b6f5?w=600&h=400&fit=crop", description: "Huvudstaden med rik historia och växande nomad-scen.", swedes: "~80 svenskar", popularFor: ["Undervisa", "NGO-arbete", "Praktik"], avgRent: "~3 500 kr/mån" },
      { name: "Sihanoukville & Koh Rong", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop", description: "Kustlinje med paradisöar – perfekt för en strandpaus.", swedes: "~30 svenskar", popularFor: ["Strandjobb", "Dykning", "Hostel-arbete"], avgRent: "~3 000 kr/mån" },
    ],
  },

  filippinerna: {
    name: "Filippinerna",
    flag: "🇵🇭",
    heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cddc85?w=1200&h=600&fit=crop",
    description: "Med över 7 000 öar erbjuder Filippinerna några av världens bästa dykplatser, vita stränder och en otroligt gästvänlig kultur. Engelska talas överallt vilket gör det enkelt att arbeta och resa.",
    highlights: ["7 641 öar att utforska", "Världens bästa dykning – Tubbataha & Coron", "Engelska talas överallt", "Vänligaste folket i Asien"],
    programs: [
      { title: "Dykcertifiering", description: "PADI-kurser i Coron, Moalboal och Malapascua.", icon: Sun },
      { title: "Surfing", description: "Världsklass i Siargao – 'Cloud 9'.", icon: Globe },
      { title: "Volontärarbete", description: "Samhällsprojekt på avlägsna öar.", icon: Users },
    ],
    facts: [
      { label: "Visum", value: "Visumfritt 30 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~4 500 kr" },
    ],
    bestTime: "December – Maj (torrsäsong)",
    currency: "Filippinsk peso (PHP)",
    language: "Filipino & engelska",
    communityStats: { total: "~400 svenskar bosatta", swedish: "~2 000 besökare/år", ageRange: "22–32 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "Visumfritt", value: "30 dagar (förlängbart)" },
      { icon: DollarSign, label: "Budget/dag", value: "~200–350 kr" },
      { icon: Briefcase, label: "PADI Open Water", value: "~3 500 kr" },
      { icon: Plane, label: "Flygtid", value: "~16 timmar" },
    ],
    resources: [
      {
        category: "Visum & Myndigheter", icon: FileCheck,
        links: [
          { name: "Bureau of Immigration", url: "https://immigration.gov.ph", official: true },
          { name: "Svenska ambassaden i Manila", url: "https://www.swedenabroad.se/manila", official: true },
        ],
      },
      {
        category: "Dyk & Volontär", icon: Briefcase,
        links: [
          { name: "PADI Filippinerna", url: "https://www.padi.com/dive-shops/philippines", official: true },
          { name: "Workaway Filippinerna", url: "https://www.workaway.info/en/country/philippines", official: false },
          { name: "Volunteer World – Filippinerna", url: "https://www.volunteerworld.com/en/volunteer-abroad/philippines", official: false },
        ],
      },
      {
        category: "Boende & Resa", icon: MapPin,
        links: [
          { name: "Agoda – Filippinerna", url: "https://www.agoda.com/country/philippines.html", official: false },
          { name: "12Go – Färjor & flyg", url: "https://12go.asia/en/philippines", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Svenskar i Filippinerna (Facebook)", url: "https://www.facebook.com/groups/svenskarifilippinerna", official: false },
          { name: "Expats in the Philippines", url: "https://www.facebook.com/groups/expatsinthephilippines", official: false },
        ],
      },
    ],
    cities: [
      { name: "Palawan (El Nido & Coron)", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cddc85?w=600&h=400&fit=crop", description: "Världens vackraste ö enligt flera resemagasin – kalkstenklippor och lagoner.", swedes: "~80 svenskar", popularFor: ["Island hopping", "Dykning", "Backpacking"], avgRent: "~4 000 kr/mån" },
      { name: "Cebu & Bohol", image: "https://images.unsplash.com/photo-1572367988531-9eaae306dad6?w=600&h=400&fit=crop", description: "Centrala öar med valhajar i Oslob och chocolate hills på Bohol.", swedes: "~120 svenskar", popularFor: ["Dykning", "Volontär", "Engelska skolor"], avgRent: "~3 500 kr/mån" },
      { name: "Siargao", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop", description: "Surfhuvudstaden – avslappnat ö-vibe och växande nomad-scen.", swedes: "~60 svenskar", popularFor: ["Surf", "Digital Nomad", "Strandliv"], avgRent: "~4 500 kr/mån" },
    ],
  },

  myanmar: {
    name: "Myanmar",
    flag: "🇲🇲",
    heroImage: "https://images.unsplash.com/photo-1546412414-e1885e51149b?w=1200&h=600&fit=crop",
    description: "Myanmar är Sydostasiens mest outforskade destination med gyllene tempel, Bagans drömskog av pagoder och en unik kultur. OBS: Kontrollera UD:s reseråd – politiskt instabilt sedan 2021.",
    highlights: ["Bagans 2 000+ pagoder", "Genuin och oturistad kultur", "Inle Lake och flytande byar", "Mycket prisvärt"],
    programs: [
      { title: "Backpacking", description: "Klassisk runda Yangon – Bagan – Inle – Mandalay.", icon: Globe },
      { title: "Volontärarbete", description: "Undervisning i lokala samhällen.", icon: Users },
      { title: "Kulturresor", description: "Tempel, kloster och buddhistiska festivaler.", icon: Sun },
    ],
    facts: [
      { label: "Visum", value: "E-Visa 28 dagar" },
      { label: "Åldersgräns", value: "18+ år" },
      { label: "Budget/månad", value: "~3 000 kr" },
    ],
    bestTime: "November – Februari (sval torrsäsong)",
    currency: "Kyat (MMK) – USD ofta accepterat",
    language: "Burmesiska",
    communityStats: { total: "~50 svenskar bosatta", swedish: "~300 besökare/år", ageRange: "25–35 år vanligast" },
    quickFacts: [
      { icon: Calendar, label: "E-Visa", value: "28 dagar (~$50)" },
      { icon: DollarSign, label: "Budget/dag", value: "~100–200 kr" },
      { icon: Shield, label: "Säkerhet", value: "Kolla UD:s reseråd" },
      { icon: Plane, label: "Flygtid", value: "~14 timmar" },
    ],
    resources: [
      {
        category: "Visum & Säkerhet", icon: FileCheck,
        links: [
          { name: "Myanmar E-Visa (officiell)", url: "https://evisa.moip.gov.mm", official: true },
          { name: "UD:s reseinformation Myanmar", url: "https://www.swedenabroad.se/sv/utlandsresor/myanmar/", official: true },
          { name: "Svenska ambassaden (Bangkok ackrediterad)", url: "https://www.swedenabroad.se/bangkok", official: true },
        ],
      },
      {
        category: "Resa & Boende", icon: MapPin,
        links: [
          { name: "Agoda – Myanmar", url: "https://www.agoda.com/country/myanmar.html", official: false },
          { name: "12Go – Bussar Myanmar", url: "https://12go.asia/en/myanmar", official: false },
        ],
      },
      {
        category: "Communities", icon: Users,
        links: [
          { name: "Backpackers in Myanmar (Facebook)", url: "https://www.facebook.com/groups/backpackersinmyanmar", official: false },
          { name: "r/myanmar (Reddit)", url: "https://www.reddit.com/r/myanmar", official: false },
        ],
      },
    ],
    cities: [
      { name: "Yangon", image: "https://images.unsplash.com/photo-1546412414-e1885e51149b?w=600&h=400&fit=crop", description: "Tidigare huvudstad med koloniala byggnader och Shwedagon-pagoden.", swedes: "~30 svenskar", popularFor: ["Kultur", "Volontär", "Praktik"], avgRent: "~3 500 kr/mån" },
      { name: "Bagan", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&h=400&fit=crop", description: "Slätten med över 2 000 tempel – soluppgång i luftballong är ikoniskt.", swedes: "~10 svenskar", popularFor: ["Tempel", "Foto", "Backpacking"], avgRent: "~2 500 kr/mån" },
      { name: "Inle Lake & Mandalay", image: "https://images.unsplash.com/photo-1601824373985-3aa44a5e0bcc?w=600&h=400&fit=crop", description: "Inle med flytande byar och Mandalay som kulturellt centrum.", swedes: "~10 svenskar", popularFor: ["Kultur", "Trekking", "Backpacking"], avgRent: "~2 500 kr/mån" },
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
      <SEO
        title={`${dest.name} – guide för svenska ungdomar | Farway`}
        description={`${dest.name}: visum, jobb, boende, städer och praktiska tips för dig som vill jobba, plugga eller resa till ${dest.name}. Faktagranskat och gratis.`}
        canonical={`https://farway.lovable.app/destination/${slug}`}
        ogImage={dest.heroImage}
      />
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

            {/* Vaccinationer & Hälsa */}
            {(() => {
              const vacc = (slug && vaccinationData[slug]) || defaultVaccinationInfo;
              const riskColors = {
                låg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
                medel: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
                hög: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
              } as const;
              return (
                <div className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    <Syringe className="w-6 h-6 inline-block mr-2 text-primary" />
                    Vaccinationer & hälsa
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Allmän information – boka tid på en vaccinationscentral 6–8 veckor före avresa för personlig rådgivning.
                  </p>

                  <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/60">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${riskColors[vacc.riskLevel]}`}>
                        Risknivå: {vacc.riskLevel.toUpperCase()}
                      </span>
                      <span className="text-sm text-muted-foreground flex-1 min-w-[200px]">{vacc.summary}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                          <Syringe className="w-4 h-4 text-primary" /> Rekommenderade vaccin
                        </h3>
                        <ul className="space-y-2">
                          {vacc.recommended.map((v) => (
                            <li key={v} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">✓</span>
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {vacc.considerOnRisk.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-warning" /> Överväg vid risk
                          </h3>
                          <ul className="space-y-2">
                            {vacc.considerOnRisk.map((v) => (
                              <li key={v} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-warning mt-0.5">!</span>
                                <span>{v}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-1 flex items-center gap-2">
                        🦟 Malaria
                      </h4>
                      <p className="text-sm text-muted-foreground">{vacc.malaria}</p>
                    </div>

                    {vacc.notes && vacc.notes.length > 0 && (
                      <div className="mt-4 p-4 rounded-xl bg-warning/5 border border-warning/20">
                        <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning" /> Bra att veta
                        </h4>
                        <ul className="space-y-1.5">
                          {vacc.notes.map((n) => (
                            <li key={n} className="text-sm text-muted-foreground">• {n}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-3">Officiella källor & boka vaccin</h4>
                      <div className="flex flex-wrap gap-2">
                        {vacc.resources.map((r) => (
                          <a
                            key={r.url}
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                          >
                            {r.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Säkerhet & UD-reseråd */}
            {(() => {
              const ud = (slug && udTravelInfo[slug]) || defaultUDInfo;
              const udRiskColors: Record<string, string> = {
                "låg": "bg-success/10 text-success border-success/20",
                "medel": "bg-warning/10 text-warning-foreground border-warning/20",
                "hög": "bg-danger/10 text-danger border-danger/20",
                "avrådan": "bg-danger/15 text-danger border-danger/30",
              };
              const udRiskLabel: Record<string, string> = {
                "låg": "LÅG RISK",
                "medel": "MEDELRISK",
                "hög": "HÖG RISK",
                "avrådan": "UD AVRÅDER",
              };
              return (
                <div className="rounded-3xl border border-border bg-card p-8 mb-16 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    <Shield className="w-6 h-6 inline-block mr-2 text-primary" />
                    Säkerhet & UD-reseråd
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Information från Utrikesdepartementet (UD). Kontrollera alltid aktuell reseinformation före avresa.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${udRiskColors[ud.riskLevel]}`}>
                        {udRiskLabel[ud.riskLevel]}
                      </span>
                      <span className="text-sm text-muted-foreground flex-1 min-w-[200px]">{ud.summary}</span>
                    </div>

                    <div className="bg-muted/40 rounded-2xl p-5">
                      <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" /> Viktiga säkerhetsråd
                      </h4>
                      <ul className="space-y-2">
                        {ud.advice.map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {ud.embassy && (
                      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
                        <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" /> Sveriges ambassad
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><span className="font-medium text-foreground">{ud.embassy.name}</span> – {ud.embassy.location}</p>
                          {ud.embassy.phone && (
                            <p>Tel: <a href={`tel:${ud.embassy.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{ud.embassy.phone}</a></p>
                          )}
                          <a
                            href={ud.embassy.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline mt-1"
                          >
                            Besök ambassadens sida <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="border-t border-border pt-5">
                      <h4 className="font-semibold text-foreground text-sm mb-3">Officiella länkar</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ud.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-2 p-3 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-muted/40 transition-colors group"
                          >
                            <span className="text-sm text-foreground flex items-center gap-2">
                              {l.official && <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                              {l.label}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground bg-warning/5 border border-warning/20 rounded-xl p-3">
                      <strong className="text-foreground">UD jourtjänst (24/7):</strong>{" "}
                      <a href="tel:+4684055005" className="text-primary hover:underline">+46 8 405 50 05</a> – vid akut nöd utomlands.
                    </div>
                  </div>
                </div>
              );
            })()}

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

                    {selectedCity.cityLinks && selectedCity.cityLinks.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary" /> Länkar för {selectedCity.name}
                        </h4>
                        {(() => {
                          const fbLinks = selectedCity.cityLinks!.filter(l => l.type === "facebook");
                          const jobLinks = selectedCity.cityLinks!.filter(l => l.type === "jobb");
                          const housingLinks = selectedCity.cityLinks!.filter(l => l.type === "boende");
                          return (
                            <div className="space-y-4">
                              {fbLinks.length > 0 && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">🇸🇪 Svenska Facebook-grupper</p>
                                  <div className="space-y-1.5">
                                    {fbLinks.map(link => (
                                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 hover:bg-primary/5 transition-colors group text-sm">
                                        <span className="text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {jobLinks.length > 0 && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">💼 Jobbsidor</p>
                                  <div className="space-y-1.5">
                                    {jobLinks.map(link => (
                                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 hover:bg-primary/5 transition-colors group text-sm">
                                        <span className="text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {housingLinks.length > 0 && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">🏠 Boende</p>
                                  <div className="space-y-1.5">
                                    {housingLinks.map(link => (
                                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 hover:bg-primary/5 transition-colors group text-sm">
                                        <span className="text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    )}

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
