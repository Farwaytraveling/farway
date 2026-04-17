// Vaccinationsinfo per destination.
// Källor: 1177.se Vaccinationsguiden, Folkhälsomyndigheten, WHO.
// Detta är allmän information – kontrollera alltid med vaccinationscentral
// (t.ex. Vaccindirekt, Citydoktorn eller din vårdcentral) inför resa.

export type VaccinationLevel = "låg" | "medel" | "hög";

export type VaccinationInfo = {
  riskLevel: VaccinationLevel;
  summary: string;
  recommended: string[];        // Rekommenderade vaccin för längre vistelse
  considerOnRisk: string[];     // Överväg vid specifika aktiviteter/områden
  malaria: string;              // Malariarisk + ev. profylax
  notes?: string[];             // Extra noteringar (t.ex. denguefeber, japansk encefalit)
  resources: { name: string; url: string }[];
};

const sharedSweRefs = [
  { name: "1177 Vaccinationsguiden", url: "https://www.1177.se/sjukdomar--besvar/infektioner/vaccinationer/" },
  { name: "UD Reseinformation", url: "https://www.regeringen.se/uds-reseinformation/" },
];

export const vaccinationData: Record<string, VaccinationInfo> = {
  // === EUROPA / VÄSTLIGA LÄNDER ===
  australien: {
    riskLevel: "låg",
    summary: "Inga särskilda vaccin krävs för inresa från Sverige. Se till att grundskyddet är uppdaterat.",
    recommended: ["Difteri/Stelkramp/Kikhosta (DTP)", "Mässling/Påssjuka/Röda hund (MPR)", "Hepatit A & B (vid längre vistelse)"],
    considerOnRisk: ["Japansk encefalit (vid lång vistelse i norra Australien/Torres Strait)", "Rabies (vid djurkontakt/avlägsna områden)"],
    malaria: "Ingen malariarisk.",
    notes: ["Se upp för hudcancer – använd hög solskyddsfaktor.", "Ross River-virus och dengue förekommer i tropiska Queensland."],
    resources: [
      ...sharedSweRefs,
      { name: "Smartraveller (AU officiellt)", url: "https://www.smartraveller.gov.au/" },
    ],
  },

  frankrike: {
    riskLevel: "låg",
    summary: "Inga särskilda resevaccin behövs. Kontrollera att ditt grundskydd är uppdaterat.",
    recommended: ["DTP (uppdaterat)", "MPR", "Hepatit A & B (vid längre vistelse/au pair)"],
    considerOnRisk: ["TBE (vid mycket vistelse i skog/natur i östra Frankrike)"],
    malaria: "Ingen malariarisk.",
    resources: [
      ...sharedSweRefs,
      { name: "Santé Publique France", url: "https://www.santepubliquefrance.fr/" },
    ],
  },

  italien: {
    riskLevel: "låg",
    summary: "Inga särskilda resevaccin krävs. Grundskyddet räcker för de flesta.",
    recommended: ["DTP", "MPR", "Hepatit A (vid längre vistelse)"],
    considerOnRisk: ["TBE (vissa norra regioner)", "Hepatit B (vid längre vistelse)"],
    malaria: "Ingen malariarisk.",
    resources: sharedSweRefs,
  },

  spanien: {
    riskLevel: "låg",
    summary: "Inga särskilda vaccin behövs. Standardvaccinationer rekommenderas.",
    recommended: ["DTP", "MPR", "Hepatit A & B (vid längre vistelse)"],
    considerOnRisk: ["Rabies (vid djurkontakt)"],
    malaria: "Ingen malariarisk.",
    resources: sharedSweRefs,
  },

  storbritannien: {
    riskLevel: "låg",
    summary: "Inga särskilda resevaccin krävs. Se till att grundskyddet är uppdaterat.",
    recommended: ["DTP", "MPR"],
    considerOnRisk: ["Hepatit B (vid längre vistelse/vårdarbete)"],
    malaria: "Ingen malariarisk.",
    resources: [
      ...sharedSweRefs,
      { name: "NHS Travel Health", url: "https://www.nhs.uk/live-well/travel-health/" },
    ],
  },

  usa: {
    riskLevel: "låg",
    summary: "Inga särskilda resevaccin krävs, men sjukvård är dyr – reseförsäkring är ett MÅSTE.",
    recommended: ["DTP", "MPR", "Hepatit A & B (vid längre vistelse)", "Influensa (säsong)"],
    considerOnRisk: ["Rabies (vid djurkontakt/utomhusarbete)", "Fästingburna sjukdomar (nordöstra USA)"],
    malaria: "Ingen malariarisk.",
    notes: ["Westnilvirus förekommer – använd myggmedel sommartid.", "COVID-vaccin rekommenderas fortfarande."],
    resources: [
      ...sharedSweRefs,
      { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel" },
    ],
  },

  // === ALPER (samma som FR) ===
  chamonix: {
    riskLevel: "låg",
    summary: "Som övriga Frankrike – inga särskilda resevaccin behövs.",
    recommended: ["DTP", "MPR"],
    considerOnRisk: ["TBE (om mycket vistelse i barrskog under sommar)"],
    malaria: "Ingen malariarisk.",
    resources: sharedSweRefs,
  },

  paris: {
    riskLevel: "låg",
    summary: "Inga särskilda resevaccin behövs för storstadsvistelse.",
    recommended: ["DTP", "MPR", "Hepatit A & B (vid längre vistelse/au pair)"],
    considerOnRisk: [],
    malaria: "Ingen malariarisk.",
    resources: sharedSweRefs,
  },

  // === SYDOSTASIEN ===
  thailand: {
    riskLevel: "medel",
    summary: "Flera vaccin rekommenderas, särskilt vid längre vistelse eller resor utanför turiststråken.",
    recommended: ["Hepatit A", "Hepatit B", "DTP (uppdaterat)", "MPR", "Tyfoid (vid längre vistelse/landsbygd)"],
    considerOnRisk: ["Japansk encefalit (lång vistelse på landsbygd, regnsäsong)", "Rabies (vid djurkontakt – tänk på street dogs!)", "Kolera (vid sämre hygienförhållanden)"],
    malaria: "Mycket låg risk i centrala Thailand. Viss risk i gränsområden mot Myanmar/Kambodja/Laos – malariaprofylax kan rekommenderas där.",
    notes: ["Denguefeber är vanligt – använd myggmedel dygnet runt.", "Zika förekommer.", "Drick endast flask-/kokat vatten."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Thailand", url: "https://www.vaccindirekt.se/resevaccin/thailand/" },
    ],
  },

  vietnam: {
    riskLevel: "medel",
    summary: "Flera vaccin rekommenderas. Risk för mat- och vattenburna sjukdomar.",
    recommended: ["Hepatit A", "Hepatit B", "DTP", "MPR", "Tyfoid"],
    considerOnRisk: ["Japansk encefalit (landsbygd, risodlingar)", "Rabies", "Kolera"],
    malaria: "Risk i avlägsna landsbygdsområden, särskilt centrala högländerna och gränstrakter. Ingen risk i Hanoi, HCMC, Halong Bay.",
    notes: ["Denguefeber vanligt i städer.", "Drick aldrig kranvatten."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Vietnam", url: "https://www.vaccindirekt.se/resevaccin/vietnam/" },
    ],
  },

  indonesien: {
    riskLevel: "medel",
    summary: "Flera vaccin rekommenderas. Bali är generellt säkrare än avlägsna öar.",
    recommended: ["Hepatit A", "Hepatit B", "DTP", "MPR", "Tyfoid"],
    considerOnRisk: ["Japansk encefalit (landsbygd, lång vistelse)", "Rabies (Bali har rabies bland hundar/apor!)", "Gula febern (krävs ENDAST om du kommer från riskland)"],
    malaria: "Ingen malaria på Bali eller Java. Risk på Lombok, Sumatra, Borneo, Papua – profylax kan behövas.",
    notes: ["Bali Belly (turistdiarré) är extremt vanligt – var noga med vatten/is/sallad.", "Denguefeber förekommer på Bali.", "Apor i tempel kan bita – undvik kontakt."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Indonesien/Bali", url: "https://www.vaccindirekt.se/resevaccin/indonesien/" },
    ],
  },

  kambodja: {
    riskLevel: "hög",
    summary: "Flera vaccin starkt rekommenderas. Sjukvården är begränsad utanför Phnom Penh.",
    recommended: ["Hepatit A", "Hepatit B", "DTP", "MPR", "Tyfoid"],
    considerOnRisk: ["Japansk encefalit (landsbygd, lång vistelse)", "Rabies", "Kolera"],
    malaria: "Risk på landsbygden, särskilt skogsområden och gränsen mot Thailand. Ingen risk i Phnom Penh och vid Tonlé Sap. Profylax rekommenderas vid landsbygdsresor.",
    notes: ["Multiresistent malaria förekommer – konsultera läkare för rätt profylax.", "Denguefeber året runt."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Kambodja", url: "https://www.vaccindirekt.se/resevaccin/kambodja/" },
    ],
  },

  filippinerna: {
    riskLevel: "medel",
    summary: "Flera vaccin rekommenderas. Sjukvården varierar kraftigt mellan öar.",
    recommended: ["Hepatit A", "Hepatit B", "DTP", "MPR", "Tyfoid"],
    considerOnRisk: ["Japansk encefalit (lång vistelse landsbygd)", "Rabies (vanligt bland hundar)", "Polio (booster rekommenderas)"],
    malaria: "Risk i avlägsna landsbygdsområden under 600 m, särskilt Palawan och Mindanao. Ingen risk i Manila, Cebu eller större städer.",
    notes: ["Denguefeber året runt – stor risk.", "Var försiktig med havsdjur (sjöborrar, blåringade bläckfisk).", "UD avråder från delar av Mindanao."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Filippinerna", url: "https://www.vaccindirekt.se/resevaccin/filippinerna/" },
    ],
  },

  myanmar: {
    riskLevel: "hög",
    summary: "Flera vaccin starkt rekommenderas. Sjukvården är mycket begränsad – reseförsäkring med evakuering är ett måste.",
    recommended: ["Hepatit A", "Hepatit B", "DTP", "MPR", "Tyfoid", "Polio (booster)"],
    considerOnRisk: ["Japansk encefalit", "Rabies", "Kolera"],
    malaria: "Risk på landsbygden under 1000 m, särskilt skog och gränsområden. Ingen risk i Yangon och Mandalay centrum. Profylax rekommenderas.",
    notes: ["UD avråder för närvarande från resor till Myanmar p.g.a. säkerhetsläget – kontrollera aktuell info.", "Denguefeber vanligt."],
    resources: [
      ...sharedSweRefs,
      { name: "Vaccindirekt – Myanmar", url: "https://www.vaccindirekt.se/resevaccin/myanmar/" },
    ],
  },
};

// Fallback för destinationer utan specifik info
export const defaultVaccinationInfo: VaccinationInfo = {
  riskLevel: "låg",
  summary: "Kontrollera aktuella vaccinationsrekommendationer för din destination hos en vaccinationscentral i god tid före resa (helst 6–8 veckor innan).",
  recommended: ["Se till att DTP och MPR är uppdaterat", "Hepatit A & B vid längre vistelse"],
  considerOnRisk: [],
  malaria: "Konsultera läkare för aktuell malariarisk.",
  resources: sharedSweRefs,
};
