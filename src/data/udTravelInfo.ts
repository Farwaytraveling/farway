// UD (Utrikesdepartementet) reseinformation per land
// Källa: https://www.regeringen.se/uds-reseinformation/

export type UDRiskLevel = "låg" | "medel" | "hög" | "avrådan";

export type UDInfo = {
  country: string;
  riskLevel: UDRiskLevel;
  summary: string;
  advice: string[];
  embassy?: {
    name: string;
    location: string;
    phone?: string;
    url: string;
  };
  links: {
    label: string;
    url: string;
    official?: boolean;
  }[];
};

// Direktlänkar till UD:s reseinformation per land
export const udTravelInfo: Record<string, UDInfo> = {
  australien: {
    country: "Australien",
    riskLevel: "låg",
    summary: "Australien anses vara ett säkert land med låg brottslighet. Var uppmärksam på naturrisker som bushbränder, översvämningar och farlig fauna (ormar, hajar, kvallar).",
    advice: [
      "Respektera havets faror – simma alltid mellan flaggorna på bevakade stränder.",
      "Följ varningar om bushbränder och cykloner under sommarhalvåret (nov–apr).",
      "Använd solskydd – UV-strålningen är extremt hög.",
      "Registrera dig på Svensklistan om du stannar längre tid."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Canberra",
      phone: "+61 2 6270 2700",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/australien-canberra/"
    },
    links: [
      { label: "UD:s reseinformation Australien", url: "https://www.swedenabroad.se/sv/reseinformation/australien/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true },
      { label: "Smart Traveller (australiensisk motsv.)", url: "https://www.smartraveller.gov.au/", official: true }
    ]
  },
  thailand: {
    country: "Thailand",
    riskLevel: "medel",
    summary: "Thailand är generellt säkert för turister men UD avråder från icke nödvändiga resor till de södra provinserna Yala, Pattani, Narathiwat och Songkhla pga oroligheter.",
    advice: [
      "Var försiktig i trafiken – moped/scooter är vanligaste skadorsaken bland resenärer.",
      "Akta dig för dryckesbedrägerier och drogning på barer i turistområden.",
      "Respektera kungafamiljen – majestätsförolämpning är ett allvarligt brott (lèse-majesté).",
      "Undvik politiska demonstrationer.",
      "Var uppmärksam på tsunamivarningar längs Andamankusten."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Bangkok",
      phone: "+66 2 263 7211",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/thailand-bangkok/"
    },
    links: [
      { label: "UD:s reseinformation Thailand", url: "https://www.swedenabroad.se/sv/reseinformation/thailand/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  vietnam: {
    country: "Vietnam",
    riskLevel: "låg",
    summary: "Vietnam är ett säkert resmål med låg brottslighet mot turister. Trafiken i storstäderna är dock kaotisk och ficktjuvar förekommer i turistområden.",
    advice: [
      "Var extremt försiktig som fotgängare – korsa gator långsamt och bestämt.",
      "Hyr endast moped om du har erfarenhet och internationellt körkort.",
      "Akta värdesaker mot ficktjuvar i Hanoi och Ho Chi Minh City.",
      "Respektera lokala regler – det är förbjudet att kritisera staten offentligt."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Hanoi",
      phone: "+84 24 3726 0400",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/vietnam-hanoi/"
    },
    links: [
      { label: "UD:s reseinformation Vietnam", url: "https://www.swedenabroad.se/sv/reseinformation/vietnam/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  indonesien: {
    country: "Indonesien",
    riskLevel: "medel",
    summary: "Bali och övriga turistområden är säkra, men UD avråder från resor till delar av Papua och Västpapua. Var uppmärksam på naturrisker (vulkaner, jordbävningar, tsunamier).",
    advice: [
      "Hyr scooter med försiktighet – flest skador bland svenska resenärer.",
      "Stränga drogregler – dödsstraff för innehav är verkställt mot utlänningar.",
      "Respektera lokala seder, särskilt vid tempelbesök (sarong krävs).",
      "Följ vulkanvarningar (Mount Agung, Merapi)."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Jakarta",
      phone: "+62 21 2553 5900",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/indonesien-jakarta/"
    },
    links: [
      { label: "UD:s reseinformation Indonesien", url: "https://www.swedenabroad.se/sv/reseinformation/indonesien/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  kambodja: {
    country: "Kambodja",
    riskLevel: "medel",
    summary: "Kambodja är generellt säkert i turistområden men brottslighet förekommer i Phnom Penh och Sihanoukville. Var uppmärksam på minfält i avlägsna områden nära gränsen till Thailand.",
    advice: [
      "Akta värdesaker mot väskryckare på moped i städerna.",
      "Stanna på upptrampade stigar – risk för icke-detonerade minor i landsbygdsområden.",
      "Använd endast taxi/tuk-tuk från officiella appar (Grab/PassApp).",
      "Var försiktig med streetfood under regnsäsongen."
    ],
    embassy: {
      name: "Sveriges ambassad (sidoackrediterad från Bangkok)",
      location: "Bangkok",
      phone: "+66 2 263 7211",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/thailand-bangkok/"
    },
    links: [
      { label: "UD:s reseinformation Kambodja", url: "https://www.swedenabroad.se/sv/reseinformation/kambodja/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  filippinerna: {
    country: "Filippinerna",
    riskLevel: "medel",
    summary: "UD avråder från icke nödvändiga resor till delar av Mindanao och Sulu-arkipelagen. Övriga öar är generellt säkra för turister men brottslighet förekommer.",
    advice: [
      "Undvik resor till västra och centrala Mindanao samt Sulu pga terroristhot.",
      "Var uppmärksam på tyfoner under juni–december.",
      "Akta dig för bedrägerier i Manila (ATM-skimming, falska taxiförare).",
      "Använd Grab istället för vanlig taxi."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Manila",
      phone: "+63 2 8857 6900",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/filippinerna-manila/"
    },
    links: [
      { label: "UD:s reseinformation Filippinerna", url: "https://www.swedenabroad.se/sv/reseinformation/filippinerna/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  myanmar: {
    country: "Myanmar (Burma)",
    riskLevel: "avrådan",
    summary: "UD avråder från alla resor till Myanmar pga den politiska situationen efter militärkuppen 2021, väpnad konflikt i flera regioner och risk för godtyckliga gripanden.",
    advice: [
      "UD avråder från alla resor – kontakta UD innan du planerar resa.",
      "Begränsad konsulär hjälp tillgänglig.",
      "Strömavbrott och brist på kontanter är vanligt.",
      "Telekommunikationer kan vara avstängda i delar av landet."
    ],
    embassy: {
      name: "Sveriges ambassad (sidoackrediterad från Bangkok)",
      location: "Bangkok",
      phone: "+66 2 263 7211",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/thailand-bangkok/"
    },
    links: [
      { label: "UD:s reseinformation Myanmar", url: "https://www.swedenabroad.se/sv/reseinformation/myanmar/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  frankrike: {
    country: "Frankrike",
    riskLevel: "låg",
    summary: "Frankrike är ett säkert resmål men terrorhotnivån är förhöjd. Var uppmärksam på ficktjuvar i Paris och andra storstäder samt vid turistattraktioner.",
    advice: [
      "Var uppmärksam i tunnelbanan, vid Eiffeltornet och Champs-Élysées – ficktjuvar är mycket aktiva.",
      "Följ myndigheternas anvisningar vid demonstrationer (vanligt i Paris).",
      "Förvara pass och värdesaker säkert – håll en kopia separat.",
      "Var beredd på säkerhetskontroller vid större evenemang."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Paris",
      phone: "+33 1 44 18 88 00",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/frankrike-paris/"
    },
    links: [
      { label: "UD:s reseinformation Frankrike", url: "https://www.swedenabroad.se/sv/reseinformation/frankrike/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  chamonix: {
    country: "Frankrike (Chamonix)",
    riskLevel: "låg",
    summary: "Chamonix och franska Alperna är säkra resmål. De största riskerna är väderrelaterade – laviner, kyla och höghöjdssjuka i högalpin terräng.",
    advice: [
      "Kontrollera lavinprognos dagligen vintertid (meteofrance.com).",
      "Off-piste-åkning kräver lokal guide och säkerhetsutrustning.",
      "Höghöjdssjuka kan drabba även unga – stig långsamt.",
      "Räddningsnummer i bergen: 112 eller PGHM Chamonix +33 4 50 53 16 89."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Paris",
      phone: "+33 1 44 18 88 00",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/frankrike-paris/"
    },
    links: [
      { label: "UD:s reseinformation Frankrike", url: "https://www.swedenabroad.se/sv/reseinformation/frankrike/", official: true },
      { label: "Lavinprognos (Météo-France)", url: "https://meteofrance.com/meteo-montagne", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  paris: {
    country: "Frankrike (Paris)",
    riskLevel: "låg",
    summary: "Paris är säkert men ficktjuvar är mycket aktiva vid turistattraktioner och i tunnelbanan. Terrorhotnivån är förhöjd.",
    advice: [
      "Akta värdesaker vid Eiffeltornet, Louvren, Montmartre och i metron (linje 1, 4, RER B).",
      "Undvik utkanten av staden nattetid (vissa banlieues).",
      "Var beredd på säkerhetsväskinspektion vid museer och varuhus.",
      "Använd officiella taxi (G7) eller Uber/Bolt – undvik svarttaxi."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Paris",
      phone: "+33 1 44 18 88 00",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/frankrike-paris/"
    },
    links: [
      { label: "UD:s reseinformation Frankrike", url: "https://www.swedenabroad.se/sv/reseinformation/frankrike/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  storbritannien: {
    country: "Storbritannien",
    riskLevel: "låg",
    summary: "Storbritannien är ett säkert resmål med god rättssäkerhet. Terrorhotnivån är förhöjd och ficktjuvar förekommer i centrala London.",
    advice: [
      "Var uppmärksam i Londons tunnelbana och vid turistattraktioner.",
      "Trafiken går på vänster sida – titta åt höger först.",
      "Ring 999 för akuta nödsituationer (eller 112).",
      "Förbered EHIC/EU-kort räcker inte längre – ta privat reseförsäkring."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "London",
      phone: "+44 20 7917 6400",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/storbritannien-london/"
    },
    links: [
      { label: "UD:s reseinformation Storbritannien", url: "https://www.swedenabroad.se/sv/reseinformation/storbritannien/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  usa: {
    country: "USA",
    riskLevel: "låg",
    summary: "USA är generellt säkert men brottslighet och skjutvapenvåld förekommer, särskilt i vissa storstäder. Naturkatastrofer (orkaner, tornados, skogsbränder) är vanliga.",
    advice: [
      "Kontrollera lokal säkerhetssituation per stad och stadsdel.",
      "ESTA krävs för inresa – ansök i god tid (minst 72 timmar innan).",
      "Sjukvård är extremt dyr – reseförsäkring är ett MÅSTE.",
      "Följ varningar för orkaner (jun–nov) och skogsbränder (sommarhalvåret)."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Washington D.C.",
      phone: "+1 202 467 2600",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/usa-washington/"
    },
    links: [
      { label: "UD:s reseinformation USA", url: "https://www.swedenabroad.se/sv/reseinformation/usa/", official: true },
      { label: "ESTA-ansökan (officiell)", url: "https://esta.cbp.dhs.gov/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  italien: {
    country: "Italien",
    riskLevel: "låg",
    summary: "Italien är ett säkert resmål. Ficktjuvar och bedrägerier är dock vanliga vid turistattraktioner i Rom, Florens, Venedig och Neapel.",
    advice: [
      "Akta värdesaker vid Colosseum, Vatikanen, Spanska trappan och på tåg/metro.",
      "Var försiktig i Neapel – organiserad brottslighet förekommer.",
      "Använd endast vita officiella taxi med taxameter.",
      "Följ varningar för jordbävningar och vulkanutbrott (Etna, Vesuvius)."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Rom",
      phone: "+39 06 441 941",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/italien-rom/"
    },
    links: [
      { label: "UD:s reseinformation Italien", url: "https://www.swedenabroad.se/sv/reseinformation/italien/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  },
  spanien: {
    country: "Spanien",
    riskLevel: "låg",
    summary: "Spanien är ett säkert resmål. Ficktjuvar är mycket aktiva i Barcelona och Madrid, särskilt på Las Ramblas och i tunnelbanan.",
    advice: [
      "Akta värdesaker på Las Ramblas, vid Sagrada Familia och i Barcelonas metro.",
      "Förvara aldrig värdesaker synligt i hyrbil.",
      "Var uppmärksam på 'distraktionsbedrägerier' vid bankomater.",
      "Följ värme- och brandvarningar under sommaren."
    ],
    embassy: {
      name: "Sveriges ambassad",
      location: "Madrid",
      phone: "+34 91 702 2000",
      url: "https://www.swedenabroad.se/sv/utlandsmyndigheter/spanien-madrid/"
    },
    links: [
      { label: "UD:s reseinformation Spanien", url: "https://www.swedenabroad.se/sv/reseinformation/spanien/", official: true },
      { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true }
    ]
  }
};

export const defaultUDInfo: UDInfo = {
  country: "Allmän reseinformation",
  riskLevel: "låg",
  summary: "Kolla alltid UD:s aktuella reseinformation för det specifika landet innan avresa. Registrera dig på Svensklistan om du reser till ett riskområde eller stannar längre tid.",
  advice: [
    "Läs UD:s reseinformation för landet i god tid före avresan.",
    "Registrera din resa på Svensklistan – då kan UD nå dig vid kris.",
    "Ta en heltäckande reseförsäkring – sjukvård utomlands kan vara dyr.",
    "Spara konsulära nödnummer: UD jourtjänst +46 8 405 50 05 (dygnet runt)."
  ],
  links: [
    { label: "UD:s reseinformation (alla länder)", url: "https://www.swedenabroad.se/sv/reseinformation/", official: true },
    { label: "Svensklistan – registrera resa", url: "https://www.swedenabroad.se/sv/svensklistan/", official: true },
    { label: "UD jourtjänst", url: "tel:+4684055005", official: true }
  ]
};
