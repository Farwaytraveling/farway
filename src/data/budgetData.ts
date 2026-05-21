// Daily cost estimates in SEK per person, based on typical backpacker → mid-range averages.
// Sources: Numbeo, Budget Your Trip, EF, Kilroy (2024–2025 data).

export type CostStyle = "budget" | "medel" | "komfort";

export interface CountryCost {
  name: string;
  // Per-day costs in SEK
  accommodation: Record<CostStyle, number>;
  food: Record<CostStyle, number>;
  transport: Record<CostStyle, number>;
  activities: Record<CostStyle, number>;
  // One-time
  flight: number; // round-trip from Sweden
  visa: number;
  insuranceMonthly: number;
}

export const countryBudgets: Record<string, CountryCost> = {
  australien: {
    name: "Australien",
    accommodation: { budget: 320, medel: 650, komfort: 1300 },
    food: { budget: 180, medel: 380, komfort: 650 },
    transport: { budget: 70, medel: 140, komfort: 280 },
    activities: { budget: 90, medel: 220, komfort: 450 },
    flight: 10500,
    visa: 4800,
    insuranceMonthly: 550,
  },
  "nya-zeeland": {
    name: "Nya Zeeland",
    accommodation: { budget: 280, medel: 600, komfort: 1200 },
    food: { budget: 160, medel: 350, komfort: 600 },
    transport: { budget: 70, medel: 140, komfort: 280 },
    activities: { budget: 100, medel: 250, komfort: 500 },
    flight: 11000,
    visa: 2600,
    insuranceMonthly: 550,
  },
  thailand: {
    name: "Thailand",
    accommodation: { budget: 120, medel: 320, komfort: 750 },
    food: { budget: 60, medel: 160, komfort: 380 },
    transport: { budget: 40, medel: 100, komfort: 200 },
    activities: { budget: 60, medel: 150, komfort: 380 },
    flight: 7500,
    visa: 0,
    insuranceMonthly: 400,
  },
  vietnam: {
    name: "Vietnam",
    accommodation: { budget: 100, medel: 280, komfort: 650 },
    food: { budget: 50, medel: 140, komfort: 320 },
    transport: { budget: 40, medel: 80, komfort: 180 },
    activities: { budget: 50, medel: 130, komfort: 350 },
    flight: 7500,
    visa: 250,
    insuranceMonthly: 400,
  },
  indonesien: {
    name: "Indonesien (Bali)",
    accommodation: { budget: 120, medel: 320, komfort: 800 },
    food: { budget: 60, medel: 160, komfort: 380 },
    transport: { budget: 50, medel: 110, komfort: 220 },
    activities: { budget: 80, medel: 180, komfort: 420 },
    flight: 8000,
    visa: 300,
    insuranceMonthly: 400,
  },
  filippinerna: {
    name: "Filippinerna",
    accommodation: { budget: 130, medel: 320, komfort: 750 },
    food: { budget: 70, medel: 180, komfort: 380 },
    transport: { budget: 50, medel: 110, komfort: 220 },
    activities: { budget: 80, medel: 180, komfort: 400 },
    flight: 8500,
    visa: 0,
    insuranceMonthly: 400,
  },
  kambodja: {
    name: "Kambodja",
    accommodation: { budget: 100, medel: 280, komfort: 650 },
    food: { budget: 50, medel: 140, komfort: 320 },
    transport: { budget: 40, medel: 80, komfort: 180 },
    activities: { budget: 60, medel: 150, komfort: 350 },
    flight: 8000,
    visa: 300,
    insuranceMonthly: 400,
  },
  laos: {
    name: "Laos",
    accommodation: { budget: 100, medel: 260, komfort: 600 },
    food: { budget: 50, medel: 130, komfort: 300 },
    transport: { budget: 40, medel: 90, komfort: 180 },
    activities: { budget: 60, medel: 140, komfort: 320 },
    flight: 8500,
    visa: 350,
    insuranceMonthly: 400,
  },
  malaysia: {
    name: "Malaysia",
    accommodation: { budget: 150, medel: 380, komfort: 850 },
    food: { budget: 70, medel: 180, komfort: 380 },
    transport: { budget: 50, medel: 110, komfort: 220 },
    activities: { budget: 70, medel: 160, komfort: 380 },
    flight: 7500,
    visa: 0,
    insuranceMonthly: 400,
  },
  myanmar: {
    name: "Myanmar",
    accommodation: { budget: 130, medel: 320, komfort: 700 },
    food: { budget: 60, medel: 160, komfort: 350 },
    transport: { budget: 50, medel: 110, komfort: 220 },
    activities: { budget: 60, medel: 150, komfort: 350 },
    flight: 8500,
    visa: 400,
    insuranceMonthly: 450,
  },
  usa: {
    name: "USA",
    accommodation: { budget: 420, medel: 950, komfort: 1900 },
    food: { budget: 200, medel: 450, komfort: 850 },
    transport: { budget: 80, medel: 180, komfort: 380 },
    activities: { budget: 120, medel: 300, komfort: 600 },
    flight: 6500,
    visa: 250,
    insuranceMonthly: 650,
  },
  kanada: {
    name: "Kanada",
    accommodation: { budget: 350, medel: 780, komfort: 1550 },
    food: { budget: 180, medel: 400, komfort: 750 },
    transport: { budget: 70, medel: 160, komfort: 330 },
    activities: { budget: 100, medel: 240, komfort: 500 },
    flight: 6500,
    visa: 1500,
    insuranceMonthly: 600,
  },
  argentina: {
    name: "Argentina",
    accommodation: { budget: 170, medel: 420, komfort: 900 },
    food: { budget: 100, medel: 220, komfort: 450 },
    transport: { budget: 60, medel: 130, komfort: 260 },
    activities: { budget: 80, medel: 180, komfort: 400 },
    flight: 9500,
    visa: 0,
    insuranceMonthly: 500,
  },
  chile: {
    name: "Chile",
    accommodation: { budget: 200, medel: 450, komfort: 950 },
    food: { budget: 110, medel: 250, komfort: 500 },
    transport: { budget: 70, medel: 140, komfort: 280 },
    activities: { budget: 90, medel: 200, komfort: 420 },
    flight: 10000,
    visa: 0,
    insuranceMonthly: 500,
  },
  peru: {
    name: "Peru",
    accommodation: { budget: 150, medel: 380, komfort: 800 },
    food: { budget: 80, medel: 200, komfort: 400 },
    transport: { budget: 55, medel: 110, komfort: 220 },
    activities: { budget: 90, medel: 220, komfort: 480 },
    flight: 9500,
    visa: 0,
    insuranceMonthly: 500,
  },
  brasilien: {
    name: "Brasilien",
    accommodation: { budget: 180, medel: 420, komfort: 900 },
    food: { budget: 100, medel: 240, komfort: 480 },
    transport: { budget: 65, medel: 140, komfort: 270 },
    activities: { budget: 85, medel: 200, komfort: 420 },
    flight: 9000,
    visa: 0,
    insuranceMonthly: 500,
  },
  colombia: {
    name: "Colombia",
    accommodation: { budget: 150, medel: 380, komfort: 800 },
    food: { budget: 80, medel: 200, komfort: 400 },
    transport: { budget: 55, medel: 120, komfort: 240 },
    activities: { budget: 80, medel: 190, komfort: 400 },
    flight: 9000,
    visa: 0,
    insuranceMonthly: 500,
  },
  alperna: {
    name: "Alperna (Österrike/Frankrike)",
    accommodation: { budget: 350, medel: 800, komfort: 1600 },
    food: { budget: 180, medel: 400, komfort: 750 },
    transport: { budget: 70, medel: 160, komfort: 320 },
    activities: { budget: 220, medel: 450, komfort: 900 }, // liftkort drar upp
    flight: 2200,
    visa: 0,
    insuranceMonthly: 380,
  },
  spanien: {
    name: "Spanien",
    accommodation: { budget: 220, medel: 500, komfort: 1100 },
    food: { budget: 120, medel: 280, komfort: 550 },
    transport: { budget: 50, medel: 110, komfort: 220 },
    activities: { budget: 80, medel: 180, komfort: 400 },
    flight: 1800,
    visa: 0,
    insuranceMonthly: 380,
  },
  storbritannien: {
    name: "Storbritannien",
    accommodation: { budget: 380, medel: 850, komfort: 1700 },
    food: { budget: 180, medel: 420, komfort: 800 },
    transport: { budget: 80, medel: 180, komfort: 380 },
    activities: { budget: 120, medel: 260, komfort: 550 },
    flight: 1800,
    visa: 15000, // YMS £319 + IHS £776/år
    insuranceMonthly: 400,
  },
  japan: {
    name: "Japan",
    accommodation: { budget: 300, medel: 700, komfort: 1500 },
    food: { budget: 150, medel: 320, komfort: 650 },
    transport: { budget: 100, medel: 200, komfort: 400 },
    activities: { budget: 100, medel: 240, komfort: 500 },
    flight: 8500,
    visa: 0,
    insuranceMonthly: 500,
  },
};

// Activity keywords → cost adjustments (multiplier on activities + extra fixed costs)
export interface ActivityProfile {
  keywords: string[];
  label: string;
  activityMultiplier: number;
  fixedExtra: number; // SEK one-time (e.g. course fee, lift pass, dive cert)
  note: string;
}

export const activityProfiles: ActivityProfile[] = [
  {
    keywords: ["ski", "skid", "snowboard", "afterski", "after-ski", "alperna", "lift"],
    label: "Skidsäsong",
    activityMultiplier: 1.4,
    fixedExtra: 6000, // säsongskort
    note: "Säsongskort/liftkort är största posten – budgeterat ~6 000 kr extra.",
  },
  {
    keywords: ["working holiday", "jobba", "arbeta", "work"],
    label: "Working Holiday",
    activityMultiplier: 0.7,
    fixedExtra: 0,
    note: "Du tjänar pengar på plats – budgeten täcker uppstart (2–3 mån).",
  },
  {
    keywords: ["au pair", "barnvakt"],
    label: "Au Pair",
    activityMultiplier: 0.3,
    fixedExtra: 2000,
    note: "Värdfamilj betalar boende + mat. Du behöver mest fickpengar.",
  },
  {
    keywords: ["studera", "studier", "university", "universitet", "exchange", "utbyte", "kurs"],
    label: "Studera utomlands",
    activityMultiplier: 0.8,
    fixedExtra: 0,
    note: "CSN täcker normalt grundkostnader. Budget visar levnadsomkostnader.",
  },
  {
    keywords: ["volont", "volunteer"],
    label: "Volontär",
    activityMultiplier: 0.5,
    fixedExtra: 3500,
    note: "Många volontärprogram inkluderar boende & mat – men programavgift tillkommer.",
  },
  {
    keywords: ["dyk", "diving", "divemaster", "padi"],
    label: "Dykning",
    activityMultiplier: 1.3,
    fixedExtra: 12000,
    note: "PADI-kurser och Divemaster kan kosta 10 000–25 000 kr.",
  },
  {
    keywords: ["surf", "surfing"],
    label: "Surf",
    activityMultiplier: 1.2,
    fixedExtra: 3000,
    note: "Surflektioner och brädhyra ca 3 000 kr extra.",
  },
  {
    keywords: ["yoga", "retreat", "meditation"],
    label: "Yoga/Retreat",
    activityMultiplier: 1.1,
    fixedExtra: 8000,
    note: "Retreats kostar typiskt 5 000–15 000 kr för 1–2 veckor.",
  },
  {
    keywords: ["backpack", "ryggs", "interrail", "resa runt", "rundresa"],
    label: "Backpacking",
    activityMultiplier: 1.0,
    fixedExtra: 0,
    note: "Standardbudget för backpacker-livsstil.",
  },
  {
    keywords: ["språkkurs", "language", "spraakkurs", "språk"],
    label: "Språkkurs",
    activityMultiplier: 0.9,
    fixedExtra: 15000,
    note: "Språkskolor kostar typiskt 10 000–25 000 kr för 4–8 veckor.",
  },
];

export function detectActivity(text: string): ActivityProfile {
  const lower = text.toLowerCase();
  for (const profile of activityProfiles) {
    if (profile.keywords.some((kw) => lower.includes(kw))) {
      return profile;
    }
  }
  return {
    keywords: [],
    label: "Allmän resa",
    activityMultiplier: 1.0,
    fixedExtra: 0,
    note: "Allmän reseuppskattning baserat på destination.",
  };
}

export function findCountry(query: string): { slug: string; data: CountryCost } | null {
  const lower = query.toLowerCase().trim();
  if (!lower) return null;
  // Direct slug match
  if (countryBudgets[lower]) return { slug: lower, data: countryBudgets[lower] };
  // Name match
  for (const [slug, data] of Object.entries(countryBudgets)) {
    if (data.name.toLowerCase().includes(lower) || lower.includes(slug)) {
      return { slug, data };
    }
  }
  // Common aliases
  const aliases: Record<string, string> = {
    bali: "indonesien",
    "new zealand": "nya-zeeland",
    nz: "nya-zeeland",
    aussie: "australien",
    england: "storbritannien",
    uk: "storbritannien",
    usa: "usa",
    "united states": "usa",
    amerika: "usa",
    schweiz: "alperna",
    österrike: "alperna",
    osterrike: "alperna",
    frankrike: "alperna",
  };
  for (const [alias, slug] of Object.entries(aliases)) {
    if (lower.includes(alias)) return { slug, data: countryBudgets[slug] };
  }
  return null;
}

// ===== Working Holiday wage estimates =====
// Hourly minimum/typical wage in SEK (after currency conversion, 2024–2025).
// Sources: Fair Work Australia, employment.govt.nz, gov.uk minimum wage,
// Canada.ca provincial minimums, MHLW Japan.
export interface WHWage {
  country: string;
  minHourly: number; // legal minimum in SEK
  typicalHourly: number; // realistic average for backpacker jobs (hospo/farm/retail)
  typicalHoursPerWeek: number;
  taxRate: number; // approx effective tax for non-residents
  popularJobs: string[];
  sourceUrl: string;
  sourceLabel: string;
  notes: string;
}

export const whWages: Record<string, WHWage> = {
  australien: {
    country: "Australien",
    minHourly: 165, // AUD 24.10/h × ~6.85
    typicalHourly: 200, // AUD 28–32 hospo/farm
    typicalHoursPerWeek: 38,
    taxRate: 0.15, // 15 % WH-skatt upp till AUD 45k
    popularJobs: ["Café/bar", "Frukt-/grönsaksplockning", "Bygg/labour", "Au pair", "Skidort"],
    sourceUrl: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
    sourceLabel: "Fair Work Australia",
    notes: "Minimilön 24,10 AUD/h (juli 2024). 88 dagars lantarbete krävs för andra året.",
  },
  "nya-zeeland": {
    country: "Nya Zeeland",
    minHourly: 150, // NZD 23.15/h × ~6.5
    typicalHourly: 175,
    typicalHoursPerWeek: 38,
    taxRate: 0.105, // 10,5 % upp till NZD 14k, sen 17,5 %
    popularJobs: ["Vingårdar", "Ski resorts", "Café/restaurang", "Frukt", "Hostel reception"],
    sourceUrl: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/",
    sourceLabel: "employment.govt.nz",
    notes: "Minimilön 23,15 NZD/h (april 2024). Säsongsarbete betalar ofta över min.",
  },
  kanada: {
    country: "Kanada",
    minHourly: 130, // CAD 17.30/h federal × ~7.6
    typicalHourly: 160, // CAD 20–24
    typicalHoursPerWeek: 35,
    taxRate: 0.15,
    popularJobs: ["Skidort (Whistler/Banff)", "Café/restaurang", "Detaljhandel", "Hostel"],
    sourceUrl: "https://www.canada.ca/en/employment-social-development/services/labour-standards/reports/minimum-wage.html",
    sourceLabel: "Canada.ca",
    notes: "Minimilön varierar per provins (BC: 17,40 CAD, Alberta: 15 CAD).",
  },
  storbritannien: {
    country: "Storbritannien",
    minHourly: 155, // £12.21/h (apr 2025, 21+) × ~12.7
    typicalHourly: 175,
    typicalHoursPerWeek: 37,
    taxRate: 0.20, // grundläggande skattesats över personal allowance
    popularJobs: ["Pub/bar", "Café", "Detaljhandel", "Hotell", "Hospitality London"],
    sourceUrl: "https://www.gov.uk/national-minimum-wage-rates",
    sourceLabel: "gov.uk",
    notes: "National Living Wage £12,21/h (april 2025, 21+). Tjänar över £12 570/år = skatt.",
  },
  japan: {
    country: "Japan",
    minHourly: 75, // JPY 1055/h national avg × ~0.07
    typicalHourly: 95, // JPY 1200–1400 Tokyo
    typicalHoursPerWeek: 28, // visumtak för deltid
    taxRate: 0.10,
    popularJobs: ["Ski resort", "Engelsklärare", "Café", "Hostel", "Konvenientstore"],
    sourceUrl: "https://www.mhlw.go.jp/english/policy/employ-labour/minimum-wage/",
    sourceLabel: "MHLW Japan",
    notes: "Minimilön varierar per region (Tokyo 1 163 JPY, snitt 1 055 JPY okt 2024).",
  },
};

// Detect if user input mentions working holiday
export function isWorkingHoliday(text: string): boolean {
  const lower = text.toLowerCase();
  return /working\s*holiday|jobba|arbeta|wh[\s-]?visa/.test(lower);
}
