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
    accommodation: { budget: 350, medel: 700, komfort: 1400 },
    food: { budget: 200, medel: 400, komfort: 700 },
    transport: { budget: 80, medel: 150, komfort: 300 },
    activities: { budget: 100, medel: 250, komfort: 500 },
    flight: 12000,
    visa: 5000,
    insuranceMonthly: 600,
  },
  "nya-zeeland": {
    name: "Nya Zeeland",
    accommodation: { budget: 320, medel: 650, komfort: 1300 },
    food: { budget: 180, medel: 380, komfort: 650 },
    transport: { budget: 80, medel: 150, komfort: 300 },
    activities: { budget: 120, medel: 280, komfort: 550 },
    flight: 13000,
    visa: 2800,
    insuranceMonthly: 600,
  },
  thailand: {
    name: "Thailand",
    accommodation: { budget: 150, medel: 400, komfort: 900 },
    food: { budget: 80, medel: 200, komfort: 450 },
    transport: { budget: 50, medel: 120, komfort: 250 },
    activities: { budget: 80, medel: 200, komfort: 500 },
    flight: 8500,
    visa: 0,
    insuranceMonthly: 450,
  },
  vietnam: {
    name: "Vietnam",
    accommodation: { budget: 130, medel: 350, komfort: 800 },
    food: { budget: 70, medel: 180, komfort: 400 },
    transport: { budget: 50, medel: 100, komfort: 220 },
    activities: { budget: 70, medel: 180, komfort: 450 },
    flight: 8500,
    visa: 300,
    insuranceMonthly: 450,
  },
  indonesien: {
    name: "Indonesien (Bali)",
    accommodation: { budget: 150, medel: 400, komfort: 1000 },
    food: { budget: 80, medel: 200, komfort: 450 },
    transport: { budget: 60, medel: 130, komfort: 280 },
    activities: { budget: 100, medel: 220, komfort: 500 },
    flight: 9000,
    visa: 350,
    insuranceMonthly: 450,
  },
  filippinerna: {
    name: "Filippinerna",
    accommodation: { budget: 160, medel: 400, komfort: 950 },
    food: { budget: 90, medel: 220, komfort: 450 },
    transport: { budget: 60, medel: 130, komfort: 280 },
    activities: { budget: 100, medel: 230, komfort: 500 },
    flight: 9500,
    visa: 0,
    insuranceMonthly: 450,
  },
  kambodja: {
    name: "Kambodja",
    accommodation: { budget: 130, medel: 350, komfort: 800 },
    food: { budget: 70, medel: 180, komfort: 400 },
    transport: { budget: 50, medel: 100, komfort: 220 },
    activities: { budget: 80, medel: 200, komfort: 450 },
    flight: 9000,
    visa: 350,
    insuranceMonthly: 450,
  },
  laos: {
    name: "Laos",
    accommodation: { budget: 120, medel: 320, komfort: 750 },
    food: { budget: 70, medel: 170, komfort: 380 },
    transport: { budget: 50, medel: 110, komfort: 230 },
    activities: { budget: 70, medel: 180, komfort: 400 },
    flight: 9500,
    visa: 400,
    insuranceMonthly: 450,
  },
  malaysia: {
    name: "Malaysia",
    accommodation: { budget: 180, medel: 450, komfort: 1000 },
    food: { budget: 90, medel: 220, komfort: 450 },
    transport: { budget: 60, medel: 130, komfort: 280 },
    activities: { budget: 90, medel: 200, komfort: 450 },
    flight: 8500,
    visa: 0,
    insuranceMonthly: 450,
  },
  myanmar: {
    name: "Myanmar",
    accommodation: { budget: 200, medel: 450, komfort: 950 },
    food: { budget: 100, medel: 220, komfort: 450 },
    transport: { budget: 70, medel: 150, komfort: 300 },
    activities: { budget: 80, medel: 200, komfort: 450 },
    flight: 10000,
    visa: 500,
    insuranceMonthly: 500,
  },
  usa: {
    name: "USA",
    accommodation: { budget: 500, medel: 1100, komfort: 2200 },
    food: { budget: 250, medel: 550, komfort: 1000 },
    transport: { budget: 100, medel: 220, komfort: 450 },
    activities: { budget: 150, medel: 350, komfort: 700 },
    flight: 7500,
    visa: 250,
    insuranceMonthly: 750,
  },
  kanada: {
    name: "Kanada",
    accommodation: { budget: 400, medel: 900, komfort: 1800 },
    food: { budget: 220, medel: 480, komfort: 900 },
    transport: { budget: 90, medel: 200, komfort: 400 },
    activities: { budget: 130, medel: 300, komfort: 600 },
    flight: 7500,
    visa: 1700,
    insuranceMonthly: 700,
  },
  argentina: {
    name: "Argentina",
    accommodation: { budget: 200, medel: 500, komfort: 1100 },
    food: { budget: 120, medel: 280, komfort: 550 },
    transport: { budget: 70, medel: 150, komfort: 300 },
    activities: { budget: 100, medel: 230, komfort: 500 },
    flight: 11000,
    visa: 0,
    insuranceMonthly: 550,
  },
  chile: {
    name: "Chile",
    accommodation: { budget: 250, medel: 550, komfort: 1200 },
    food: { budget: 130, medel: 300, komfort: 600 },
    transport: { budget: 80, medel: 170, komfort: 320 },
    activities: { budget: 110, medel: 250, komfort: 500 },
    flight: 11500,
    visa: 0,
    insuranceMonthly: 550,
  },
  peru: {
    name: "Peru",
    accommodation: { budget: 180, medel: 450, komfort: 1000 },
    food: { budget: 100, medel: 240, komfort: 500 },
    transport: { budget: 70, medel: 140, komfort: 280 },
    activities: { budget: 120, medel: 280, komfort: 600 },
    flight: 11000,
    visa: 0,
    insuranceMonthly: 550,
  },
  brasilien: {
    name: "Brasilien",
    accommodation: { budget: 220, medel: 500, komfort: 1100 },
    food: { budget: 130, medel: 280, komfort: 550 },
    transport: { budget: 80, medel: 170, komfort: 320 },
    activities: { budget: 110, medel: 250, komfort: 500 },
    flight: 10500,
    visa: 0,
    insuranceMonthly: 550,
  },
  colombia: {
    name: "Colombia",
    accommodation: { budget: 180, medel: 450, komfort: 1000 },
    food: { budget: 100, medel: 230, komfort: 500 },
    transport: { budget: 70, medel: 140, komfort: 280 },
    activities: { budget: 100, medel: 230, komfort: 500 },
    flight: 10000,
    visa: 0,
    insuranceMonthly: 550,
  },
  alperna: {
    name: "Alperna (Österrike/Frankrike)",
    accommodation: { budget: 400, medel: 900, komfort: 1800 },
    food: { budget: 200, medel: 450, komfort: 850 },
    transport: { budget: 80, medel: 180, komfort: 350 },
    activities: { budget: 250, medel: 500, komfort: 1000 }, // liftkort drar upp
    flight: 2500,
    visa: 0,
    insuranceMonthly: 400,
  },
  spanien: {
    name: "Spanien",
    accommodation: { budget: 280, medel: 600, komfort: 1300 },
    food: { budget: 150, medel: 350, komfort: 700 },
    transport: { budget: 60, medel: 130, komfort: 280 },
    activities: { budget: 100, medel: 230, komfort: 500 },
    flight: 2500,
    visa: 0,
    insuranceMonthly: 400,
  },
  storbritannien: {
    name: "Storbritannien",
    accommodation: { budget: 450, medel: 1000, komfort: 2000 },
    food: { budget: 220, medel: 500, komfort: 950 },
    transport: { budget: 100, medel: 220, komfort: 450 },
    activities: { budget: 150, medel: 320, komfort: 650 },
    flight: 2500,
    visa: 24000, // YMS £319 + IHS £776/år × 2 år ≈ £1 871
    insuranceMonthly: 450,
  },
  japan: {
    name: "Japan",
    accommodation: { budget: 350, medel: 800, komfort: 1700 },
    food: { budget: 180, medel: 400, komfort: 800 },
    transport: { budget: 120, medel: 250, komfort: 500 },
    activities: { budget: 130, medel: 300, komfort: 600 },
    flight: 9500,
    visa: 0,
    insuranceMonthly: 550,
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
    activityMultiplier: 1.5,
    fixedExtra: 8000, // säsongskort
    note: "Säsongskort/liftkort är största posten – budgeterat ~8 000 kr extra.",
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
    activityMultiplier: 0.4,
    fixedExtra: 3000,
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
    fixedExtra: 5000,
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
