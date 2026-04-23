export type ResortLink = { name: string; url: string };

export type ResortDetail = {
  name: string;
  country: string;
  flag: string;
  vibe: string;
  description: string;
  bestFor: string[];
  // Snabbfakta
  season: string;
  altitude: string;
  skiArea: string;
  liftPassPrice: string;
  nearestAirport: string;
  jobs: { type: string; salary: string; tip: string }[];
  housing: { tip: string; priceRange: string };
  facebookGroups: ResortLink[];
  jobLinks: ResortLink[];
  // Praktiska & officiella länkar
  officialLinks: ResortLink[];
  travelLinks: ResortLink[];
  swedishTip: string;
  checklist: string[];
};

export const resortDetails: Record<string, ResortDetail> = {
  "St. Anton": {
    name: "St. Anton",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Party & Powder",
    description:
      "St. Anton är legendariskt för sin après-ski och brutala skidåkning. Här festas det hårt på MooserWirt och Krazy Kanguruh, och pisterna är några av Europas mest utmanande.",
    bestFor: ["Festsugna säsongare", "Avancerade skidåkare", "Svensk gemenskap"],
    season: "Början dec – slutet apr",
    altitude: "1 304 – 2 811 m",
    skiArea: "305 km pist (Ski Arlberg)",
    liftPassPrice: "€71/dag · ca €820/säsong",
    nearestAirport: "Innsbruck (1h 30 min) · Zürich (2h 30 min)",
    jobs: [
      { type: "Bartender / serveringspersonal", salary: "€1 400–1 800/mån + dricks", tip: "Sök på MooserWirt, Krazy Kanguruh och Heustadl – stora dricksintäkter." },
      { type: "Liftvärd", salary: "€1 500–1 700/mån", tip: "Arlberg Bergbahnen anställer många – ansök från september." },
      { type: "Hotell & restaurang", salary: "€1 200–1 600/mån + boende", tip: "Många hotell erbjuder helpension – sparat boende = sparade pengar." },
    ],
    housing: { tip: "Boende ingår nästan alltid via arbetsgivaren. Privat hyra är extremt dyrt och nästan omöjligt under säsong.", priceRange: "€500–900/mån privat (ovanligt)" },
    facebookGroups: [
      { name: "St. Anton Seasonaires", url: "https://www.facebook.com/groups/stantonseasonaires/" },
      { name: "St. Anton Accommodation & Jobs", url: "https://www.facebook.com/groups/stantonaccommodation/" },
      { name: "Svenskar i Österrike", url: "https://www.facebook.com/groups/svenskariosterrike/" },
    ],
    jobLinks: [
      { name: "Arlberg Bergbahnen jobb", url: "https://www.skiarlberg.at/de/Service/Jobs" },
      { name: "Saisonpro – säsongsjobb Österrike", url: "https://saisonpro.at/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.stantonamarlberg.com/" },
      { name: "Pistkarta Ski Arlberg", url: "https://www.skiarlberg.at/en/Ski-Arlberg/Mountain/Slope-and-lift-information" },
      { name: "Snö- & väderrapport", url: "https://www.skiarlberg.at/en/Ski-Arlberg/Mountain/Snow-and-weather-report" },
      { name: "Liftkort online", url: "https://shop.skiarlberg.at/" },
    ],
    travelLinks: [
      { name: "Tåg ÖBB (Innsbruck → St. Anton)", url: "https://www.oebb.at/en/" },
      { name: "Flygbuss Arlberg Express", url: "https://www.arlbergexpress.com/" },
    ],
    swedishTip: "Det finns ALLTID svenskar i St. Anton. Gå till Underground-baren första veckan – där samlas svenskarna.",
    checklist: [
      "EU-pass eller ID-kort",
      "Europeiskt sjukförsäkringskort (EHIC)",
      "Anmäl utvandring till Skatteverket om >12 mån",
      "A1-intyg om du är utstationerad",
      "Tysk CV (Lebenslauf) ökar chanserna",
    ],
  },
  "Ischgl": {
    name: "Ischgl",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Exklusivt & livligt",
    description:
      "Ischgl kallas 'Ibiza i Alperna' – kända DJ-konserter, lyxig shopping och ett enormt skidområde sammanlänkat med schweiziska Samnaun.",
    bestFor: ["Premiumservice-erfarna", "Tysktalande", "Festtempo"],
    season: "Slutet nov – början maj",
    altitude: "1 377 – 2 872 m",
    skiArea: "239 km pist (Silvretta Arena)",
    liftPassPrice: "€68/dag · ca €790/säsong",
    nearestAirport: "Innsbruck (1h 45 min) · Zürich (2h 30 min)",
    jobs: [
      { type: "Restaurang & exklusiva barer", salary: "€1 400–2 000/mån + dricks", tip: "Tyska är nästan ett krav – men engelska räcker på vissa ställen." },
      { type: "Butik (sport / mode)", salary: "€1 300–1 700/mån", tip: "Intersport och Bründl anställer säsongspersonal." },
    ],
    housing: { tip: "Personalboende via arbetsgivaren är standard. Privat boende i Ischgl är bland de dyraste i Tyrolen.", priceRange: "€600–1 100/mån privat" },
    facebookGroups: [
      { name: "Ischgl Jobs & Accommodation", url: "https://www.facebook.com/groups/ischgljobs/" },
      { name: "Svenskar i Österrike", url: "https://www.facebook.com/groups/svenskariosterrike/" },
    ],
    jobLinks: [
      { name: "Silvretta Seilbahn jobb", url: "https://www.silvretta.at/de/jobs" },
      { name: "Ischgl.com karriär", url: "https://www.ischgl.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.ischgl.com/en" },
      { name: "Pistkarta Silvretta Arena", url: "https://www.ischgl.com/en/More/Ski-area/Slopes-Lifts" },
      { name: "Snö- & liftöppning", url: "https://www.ischgl.com/en/Service/Live/snow-info" },
      { name: "Liftkort online", url: "https://shop.silvretta.at/" },
    ],
    travelLinks: [
      { name: "Tåg ÖBB → Landeck-Zams", url: "https://www.oebb.at/en/" },
      { name: "Postbus Landeck → Ischgl", url: "https://www.postbus.at/en" },
    ],
    swedishTip: "Färre svenskar än i St. Anton – men de som är där brukar samlas på Trofana Alm.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort (sjukförsäkring)",
      "Tyskakunskaper – minst grundläggande",
      "Snyggt portfölj-foto till hotell/butik-CV",
      "Anmäl utvandring vid >12 mån",
    ],
  },
  "Kitzbühel": {
    name: "Kitzbühel",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Klassiskt & elegant",
    description:
      "Världsberömt tack vare Hahnenkamm-loppet. Mysig medeltida stadskärna, glamour och äldre, mer kräsen klientel.",
    bestFor: ["Hotell- & servicebakgrund", "Tyskkunniga", "Lugnare nöjesliv"],
    season: "Slutet okt – början maj",
    altitude: "800 – 2 000 m",
    skiArea: "230 km pist (KitzSki)",
    liftPassPrice: "€72/dag · ca €820/säsong",
    nearestAirport: "Salzburg (1h 30 min) · Innsbruck (1h 30 min) · München (1h 45 min)",
    jobs: [
      { type: "Lyxhotell (4–5 stjärnor)", salary: "€1 500–2 200/mån + dricks", tip: "A-Rosa, Tennerhof och Schloss Lebenberg är prestigeplatser." },
      { type: "Skidskola (med cert)", salary: "€2 000–4 000/mån", tip: "Kräver Anwärter eller Landeslehrer-certifikat." },
    ],
    housing: { tip: "Personalboende via hotellen. Lokal hyra extremt hög p.g.a. förmögna delårsboende.", priceRange: "€700–1 200/mån privat" },
    facebookGroups: [
      { name: "Kitzbühel Jobs", url: "https://www.facebook.com/groups/kitzbueheljobs/" },
      { name: "Svenskar i Österrike", url: "https://www.facebook.com/groups/svenskariosterrike/" },
    ],
    jobLinks: [
      { name: "Kitzbühel Tourismus karriär", url: "https://www.kitzbuehel.com/" },
      { name: "Bergbahn Kitzbühel jobb", url: "https://www.bergbahn-kitzbuehel.at/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.kitzbuehel.com/en" },
      { name: "Pistkarta KitzSki", url: "https://www.kitzski.at/en/winter/skiing-area/slopes-and-lifts.html" },
      { name: "Snörapport", url: "https://www.kitzski.at/en/winter/skiing-area/snow-report.html" },
      { name: "Liftkort online", url: "https://shop.kitzski.at/" },
    ],
    travelLinks: [
      { name: "Tåg ÖBB → Kitzbühel Hbf", url: "https://www.oebb.at/en/" },
      { name: "Flygbuss Four Seasons Travel", url: "https://www.tirol-taxi.at/" },
    ],
    swedishTip: "Kitz är dyrt – välj jobb där boende OCH mat ingår, annars äter staden upp lönen.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Skidlärar-cert om du söker som instruktör",
      "Tysk CV + personligt brev",
      "Sparkapital för deposition om privat boende",
    ],
  },
  "Sölden": {
    name: "Sölden",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Glaciär & James Bond",
    description:
      "Hög höjd, två glaciärer och säsong från oktober till maj. Känd från James Bond-filmen Spectre och har vuxit till en av Tyrolens festigaste orter.",
    bestFor: ["Lång säsong", "Snösäkert", "Energisk publik"],
    season: "Mitten sep – början maj (glaciär)",
    altitude: "1 368 – 3 340 m",
    skiArea: "144 km pist + 2 glaciärer",
    liftPassPrice: "€71/dag · ca €830/säsong",
    nearestAirport: "Innsbruck (1h 15 min) · München (3h)",
    jobs: [
      { type: "Liftpersonal & uthyrning", salary: "€1 400–1 800/mån", tip: "Bergbahnen Sölden anställer hundratals varje säsong – ansök i augusti." },
      { type: "Bar / restaurang", salary: "€1 300–1 700/mån + dricks", tip: "Katapult och Fire & Ice är legendariska partysställen." },
    ],
    housing: { tip: "Boende via arbetsgivare är nästan obligatoriskt – ingen får tag på lägenhet privat under säsong.", priceRange: "€500–900/mån privat" },
    facebookGroups: [
      { name: "Sölden Saisonarbeiter", url: "https://www.facebook.com/groups/soeldenjobs/" },
      { name: "Svenskar i Österrike", url: "https://www.facebook.com/groups/svenskariosterrike/" },
    ],
    jobLinks: [
      { name: "Bergbahnen Sölden jobb", url: "https://www.soelden.com/jobs" },
      { name: "Sölden karriär", url: "https://www.soelden.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.soelden.com/en" },
      { name: "Pistkarta Sölden", url: "https://www.soelden.com/en/winter/skiing-area/slopes-and-lifts" },
      { name: "Snö- & glaciärrapport", url: "https://www.soelden.com/en/service/snow-and-weather" },
      { name: "Liftkort online", url: "https://shop.soelden.com/" },
    ],
    travelLinks: [
      { name: "Tåg ÖBB → Ötztal Bahnhof", url: "https://www.oebb.at/en/" },
      { name: "Postbus Ötztal → Sölden", url: "https://www.postbus.at/en" },
    ],
    swedishTip: "Säsongen startar redan i oktober på glaciären – perfekt om du vill komma igång tidigt.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Ansök i augusti för bästa jobben",
      "Höghöjdsanpassade kläder (3 340 m!)",
      "Solglasögon med UV400 – glaciärsol är brutal",
    ],
  },
  "Mayrhofen": {
    name: "Mayrhofen",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Ungdomligt & festigt",
    description:
      "Stor brittisk närvaro, prisvärt jämfört med övriga Alperna och hem för Snowbombing-festivalen. Avslappnad stämning och hög svensk täthet.",
    bestFor: ["Förstagångare", "Engelsktalande", "Trångt budget"],
    season: "Början dec – mitten apr",
    altitude: "630 – 2 500 m",
    skiArea: "142 km pist (Mayrhofner Bergbahnen)",
    liftPassPrice: "€65/dag · ca €730/säsong",
    nearestAirport: "Innsbruck (1h) · Salzburg (2h) · München (2h)",
    jobs: [
      { type: "Hostel / chalet-personal", salary: "€1 100–1 500/mån + boende", tip: "TUI och Crystal Ski rekryterar brittiska & svenska säsongare." },
      { type: "Bar / klubb", salary: "€1 200–1 600/mån + dricks", tip: "Ice Bar och Scotland Yard är stora arbetsgivare." },
    ],
    housing: { tip: "Boende via chalet-bolag (TUI/Crystal) är vanligast och oftast gratis.", priceRange: "€400–700/mån privat" },
    facebookGroups: [
      { name: "Mayrhofen Seasonaires", url: "https://www.facebook.com/groups/mayrhofenseasonaires/" },
      { name: "Svenskar i Alperna", url: "https://www.facebook.com/groups/svenskarialperna/" },
    ],
    jobLinks: [
      { name: "TUI Ski jobb", url: "https://www.tuijobsuk.co.uk/ski" },
      { name: "Mayrhofner Bergbahnen", url: "https://www.mayrhofner-bergbahnen.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.mayrhofen.at/en" },
      { name: "Pistkarta Mayrhofen", url: "https://www.mayrhofner-bergbahnen.com/en/skiing-area/slopes-and-lifts" },
      { name: "Snörapport", url: "https://www.mayrhofen.at/en/snow-report" },
      { name: "Snowbombing-festival", url: "https://www.snowbombing.com/" },
    ],
    travelLinks: [
      { name: "Tåg ÖBB → Jenbach", url: "https://www.oebb.at/en/" },
      { name: "Zillertalbahn (Jenbach → Mayrhofen)", url: "https://www.zillertalbahn.at/" },
    ],
    swedishTip: "Lättast orten att få jobb på utan språkkunskaper – engelska räcker överallt.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Ansök hos TUI/Crystal Ski tidig höst",
      "Engelsk CV räcker",
      "Snowbombing-biljett om du vill festa i april",
    ],
  },
  "Zermatt": {
    name: "Zermatt",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Ikoniskt & bilfritt",
    description:
      "Matterhorn i bakgrunden, bilfri by och året-runt-skidåkning på glaciären. Lyx, kvalitet och de högsta lönerna i Alperna.",
    bestFor: ["Servicestjärnor", "Långa säsonger", "Höga sparmål"],
    season: "Året runt (huvudsäsong nov – apr)",
    altitude: "1 620 – 3 883 m",
    skiArea: "360 km pist (Matterhorn Ski Paradise)",
    liftPassPrice: "CHF 92/dag · ca CHF 1 250/säsong",
    nearestAirport: "Genève (4h med tåg) · Zürich (4h)",
    jobs: [
      { type: "Hotellpersonal", salary: "CHF 3 800–4 500/mån", tip: "Mont Cervin Palace och The Omnia är toppadresserna." },
      { type: "Restaurang & bar", salary: "CHF 3 500–4 500/mån + dricks", tip: "Hennu Stall och Papperla Pub har starkast après-ski." },
    ],
    housing: { tip: "Boende via arbetsgivare är ett MÅSTE – privat hyra i Zermatt är osannolikt och kostar ofta CHF 1 500+/mån.", priceRange: "CHF 1 200–2 000/mån privat" },
    facebookGroups: [
      { name: "Zermatt Jobs & Housing", url: "https://www.facebook.com/groups/zermatthousing/" },
      { name: "Svenskar i Schweiz", url: "https://www.facebook.com/groups/svenskariSchweiz/" },
    ],
    jobLinks: [
      { name: "Zermatt.ch jobb", url: "https://www.zermatt.ch/jobs" },
      { name: "hotelcareer.ch", url: "https://www.hotelcareer.ch/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.zermatt.ch/en" },
      { name: "Pistkarta Matterhorn Paradise", url: "https://matterhornparadise.ch/en/Ski-area/Slopes-Lifts" },
      { name: "Snö- & väderrapport", url: "https://matterhornparadise.ch/en/Ski-area/Snow-Weather" },
      { name: "Liftkort online", url: "https://shop.matterhornparadise.ch/" },
    ],
    travelLinks: [
      { name: "SBB tåg (Zürich/Genève → Zermatt)", url: "https://www.sbb.ch/en" },
      { name: "Matterhorn Gotthard Bahn", url: "https://www.matterhorngotthardbahn.ch/" },
      { name: "Visum & arbetstillstånd Schweiz", url: "https://www.sem.admin.ch/sem/en/home.html" },
    ],
    swedishTip: "Schweiz kräver L-tillstånd – arbetsgivaren ordnar det. Räkna med 25–30 % skatt men ändå topplön.",
    checklist: [
      "EU-pass eller ID-kort",
      "L-tillstånd (ordnas av arbetsgivaren)",
      "Privat sjukförsäkring (obligatoriskt i Schweiz inom 90 dagar)",
      "Schweiziskt bankkonto (PostFinance enklast)",
      "AHV-nummer (registreras av arbetsgivaren)",
    ],
  },
  "Verbier": {
    name: "Verbier",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Off-piste & high-end",
    description:
      "Mecka för off-piste och freeride. Stor brittisk chalet-scen, exklusiv klientel och otrolig backcountry-åkning.",
    bestFor: ["Chalet-jobb", "Engelska som modersmål-nivå", "Skidproffs"],
    season: "Mitten nov – slutet apr",
    altitude: "1 500 – 3 330 m",
    skiArea: "410 km pist (4 Vallées)",
    liftPassPrice: "CHF 89/dag · ca CHF 1 180/säsong",
    nearestAirport: "Genève (2h med tåg+buss) · Sion (1h)",
    jobs: [
      { type: "Chalet host / kock", salary: "CHF 1 500–2 500/mån + boende + lift", tip: "Bramble Ski, Ski Verbier Exclusive och VIP Ski är stora arbetsgivare." },
      { type: "Restaurang", salary: "CHF 3 500–4 500/mån", tip: "Farinet och Pub Mont Fort är klassikerna." },
    ],
    housing: { tip: "Chalet-jobb = boende ingår alltid. Annars är Verbier ett av världens dyraste boendeställen.", priceRange: "CHF 1 500–2 500/mån privat" },
    facebookGroups: [
      { name: "Verbier Job Board", url: "https://www.facebook.com/groups/verbierjobs/" },
      { name: "Verbier Accommodation", url: "https://www.facebook.com/groups/verbieraccommodation/" },
    ],
    jobLinks: [
      { name: "Verbier.ch jobb", url: "https://www.verbier.ch/jobs/" },
      { name: "Natives.co.uk – chalet jobs", url: "https://www.natives.co.uk/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.verbier.ch/en/" },
      { name: "Pistkarta 4 Vallées", url: "https://www.verbier4vallees.ch/en/the-resort/maps" },
      { name: "Snö- & väderrapport", url: "https://www.verbier.ch/en/snow-report/" },
      { name: "Liftkort Téléverbier", url: "https://shop.verbier4vallees.ch/" },
    ],
    travelLinks: [
      { name: "SBB tåg → Le Châble", url: "https://www.sbb.ch/en" },
      { name: "Visum & arbetstillstånd Schweiz", url: "https://www.sem.admin.ch/sem/en/home.html" },
    ],
    swedishTip: "Chalet-jobb ger lägre kontantlön men allt ingår – du går oftast hem med mer sparat än hotellpersonalen.",
    checklist: [
      "EU-pass eller ID-kort",
      "L-tillstånd (ordnas av arbetsgivaren)",
      "Privat sjukförsäkring inom 90 dagar",
      "Food-hygiene-cert om du söker som chalet-kock",
      "Engelska på flytande nivå",
    ],
  },
  "St. Moritz": {
    name: "St. Moritz",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Lyx & jet-set",
    description:
      "Ursprunget till alpin vinterturism. 5-stjärniga hotell, polo på snö och en klientel där rum kostar CHF 5 000/natt.",
    bestFor: ["Erfaren hospitality", "Flera språk", "Nätverkare"],
    season: "Slutet nov – mitten apr",
    altitude: "1 822 – 3 303 m",
    skiArea: "163 km pist (Engadin St. Moritz)",
    liftPassPrice: "CHF 86/dag · ca CHF 1 100/säsong",
    nearestAirport: "Zürich (3h 30 min med tåg) · Milano-Malpensa (3h)",
    jobs: [
      { type: "5-stjärnigt hotell", salary: "CHF 4 000–5 500/mån + dricks", tip: "Badrutt's Palace, Kulm och Suvretta House är de stora." },
      { type: "F&B-personal", salary: "CHF 3 800–5 000/mån", tip: "Tyska + engelska minimum, italienska eller franska är ett stort plus." },
    ],
    housing: { tip: "Personalboende via hotellet är standard – kvaliteten varierar enormt. Fråga ALLTID om eget rum eller delat.", priceRange: "CHF 1 500–2 500/mån privat" },
    facebookGroups: [
      { name: "St. Moritz Jobs", url: "https://www.facebook.com/groups/stmoritzjobs/" },
      { name: "Svenskar i Schweiz", url: "https://www.facebook.com/groups/svenskariSchweiz/" },
    ],
    jobLinks: [
      { name: "Badrutt's Palace karriär", url: "https://www.badruttspalace.com/career" },
      { name: "hotelcareer.ch", url: "https://www.hotelcareer.ch/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.stmoritz.com/en/" },
      { name: "Pistkarta Engadin", url: "https://www.engadin.ch/en/winter/skiing-area/" },
      { name: "Snö- & väderrapport", url: "https://www.engadin.ch/en/winter/snow-and-weather/" },
      { name: "Liftkort online", url: "https://shop.mountains.ch/" },
    ],
    travelLinks: [
      { name: "Glacier/Bernina Express (SBB)", url: "https://www.sbb.ch/en" },
      { name: "Visum & arbetstillstånd Schweiz", url: "https://www.sem.admin.ch/sem/en/home.html" },
    ],
    swedishTip: "Mest formell ort i Alperna – packa skjorta och ordentliga skor till intervjuer.",
    checklist: [
      "EU-pass eller ID-kort",
      "L-tillstånd (ordnas av arbetsgivaren)",
      "Hospitality-CV med foto",
      "Minst 2 språk (tyska + engelska)",
      "Formella intervjukläder",
    ],
  },
  "Davos": {
    name: "Davos",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Stort & sportigt",
    description:
      "Europas högst belägna stad, hem för World Economic Forum. Enorm skiddomän, Parsenn och Jakobshorn, samt mer 'riktig stad' än traditionell skidby.",
    bestFor: ["Stadskänsla", "Längre säsong", "Sport-events"],
    season: "Slutet nov – mitten apr",
    altitude: "1 560 – 2 844 m",
    skiArea: "300 km pist (Davos Klosters)",
    liftPassPrice: "CHF 79/dag · ca CHF 980/säsong",
    nearestAirport: "Zürich (2h 30 min med tåg)",
    jobs: [
      { type: "Lift & skidskola", salary: "CHF 3 500–4 500/mån", tip: "Davos Klosters Bergbahnen är största arbetsgivaren." },
      { type: "Hotell & restaurang", salary: "CHF 3 500–4 500/mån", tip: "Många hotell stannar öppna året runt – chans till längre kontrakt." },
    ],
    housing: { tip: "Lättare att hitta privat boende än i Verbier/Zermatt eftersom Davos är en stad.", priceRange: "CHF 900–1 600/mån privat" },
    facebookGroups: [
      { name: "Davos Jobs & Wohnen", url: "https://www.facebook.com/groups/davosjobs/" },
      { name: "Svenskar i Schweiz", url: "https://www.facebook.com/groups/svenskariSchweiz/" },
    ],
    jobLinks: [
      { name: "Davos Klosters Bergbahnen jobb", url: "https://www.davosklostersmountains.ch/" },
      { name: "jobs.ch – Davos", url: "https://www.jobs.ch/de/stellenangebote/?location=Davos" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.davos.ch/en" },
      { name: "Pistkarta Davos Klosters", url: "https://www.davos.ch/en/skiing-snowboarding/slopes-lifts/" },
      { name: "Snö- & väderrapport", url: "https://www.davos.ch/en/skiing-snowboarding/snow-report/" },
      { name: "Liftkort online", url: "https://shop.davosklostersmountains.ch/" },
    ],
    travelLinks: [
      { name: "Rhätische Bahn (RhB) → Davos", url: "https://www.rhb.ch/en" },
      { name: "Visum & arbetstillstånd Schweiz", url: "https://www.sem.admin.ch/sem/en/home.html" },
    ],
    swedishTip: "Sambandet med World Economic Forum (januari) ger extrajobb med riktigt bra timlön.",
    checklist: [
      "EU-pass eller ID-kort",
      "L-tillstånd (ordnas av arbetsgivaren)",
      "Privat sjukförsäkring inom 90 dagar",
      "Sök WEF-extrajobb i okt/nov",
      "Tyska underlättar (Schweizertyska kommer med tiden)",
    ],
  },
  "Laax": {
    name: "Laax",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Freestyle & snowboard",
    description:
      "Europas största snowparker, Burton-shopens hemmaort och en ung, kreativ scen. Mer hipp än traditionell skidort.",
    bestFor: ["Snowboardare", "Park-rats", "Kreativa branscher"],
    season: "Mitten okt – mitten apr",
    altitude: "1 100 – 3 018 m",
    skiArea: "224 km pist (Flims/Laax/Falera)",
    liftPassPrice: "CHF 86/dag · ca CHF 1 050/säsong",
    nearestAirport: "Zürich (1h 45 min med bil) · 2h 30 min tåg",
    jobs: [
      { type: "Park / event / shop", salary: "CHF 3 500–4 500/mån", tip: "Weisse Arena Group är holistisk arbetsgivare – jobb, boende, lift." },
      { type: "Hotellpersonal", salary: "CHF 3 500–4 500/mån", tip: "Rocksresort och Riders Hotel är moderna och anställer ofta unga." },
    ],
    housing: { tip: "Weisse Arena Group erbjuder personalboende i hela Flims/Laax-området.", priceRange: "CHF 800–1 400/mån privat" },
    facebookGroups: [
      { name: "Laax Seasonaires", url: "https://www.facebook.com/groups/laaxseasonaires/" },
      { name: "Svenskar i Schweiz", url: "https://www.facebook.com/groups/svenskariSchweiz/" },
    ],
    jobLinks: [
      { name: "Weisse Arena karriär", url: "https://www.laax.com/jobs/" },
      { name: "Riders Hotel jobb", url: "https://www.ridershotel.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.laax.com/en/" },
      { name: "Pistkarta & snowparks", url: "https://www.laax.com/en/winter/slopes-lifts/" },
      { name: "Snö- & parkrapport", url: "https://www.laax.com/en/winter/snow-weather/" },
      { name: "Liftkort online", url: "https://shop.laax.com/" },
    ],
    travelLinks: [
      { name: "SBB tåg → Chur", url: "https://www.sbb.ch/en" },
      { name: "PostBus Chur → Laax", url: "https://www.postauto.ch/en" },
    ],
    swedishTip: "Bäst snowboard-community i Alperna. Många pro-åkare bor här på vintrarna.",
    checklist: [
      "EU-pass eller ID-kort",
      "L-tillstånd (ordnas av arbetsgivaren)",
      "Privat sjukförsäkring inom 90 dagar",
      "Skicka portfolio om du söker park/film/event",
      "Tysk grundnivå räcker",
    ],
  },
  "Val d'Isère": {
    name: "Val d'Isère",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Legendariskt & högt",
    description:
      "Sammanlänkat med Tignes till 'Espace Killy'. Hög höjd, snösäker säsong och stor brittisk närvaro – över 50 % av säsongspersonalen är britter.",
    bestFor: ["Engelsktalande", "Nattliv", "Lång säsong (nov–maj)"],
    season: "Slutet nov – början maj",
    altitude: "1 550 – 3 456 m",
    skiArea: "300 km pist (Espace Killy)",
    liftPassPrice: "€69/dag · ca €1 080/säsong",
    nearestAirport: "Genève (3h) · Lyon (3h) · Chambéry (2h 30 min)",
    jobs: [
      { type: "Chalet host / kock", salary: "€650–1 200/mån + boende + lift + mat", tip: "Skiworld, Crystal, VIP Ski och Le Ski är största arbetsgivarna." },
      { type: "Bar / klubb", salary: "€1 200–1 800/mån + dricks", tip: "Dick's Tea Bar och Cocorico är de klassiska festställena." },
    ],
    housing: { tip: "Chalet-paket inkluderar allt. Privat boende existerar nästan inte under säsong.", priceRange: "€700–1 200/mån privat" },
    facebookGroups: [
      { name: "Val d'Isère & Tignes Accommodation", url: "https://www.facebook.com/groups/valdisereaccommodation/" },
      { name: "Val d'Isère Seasonaires", url: "https://www.facebook.com/groups/valdisereseasonaires/" },
    ],
    jobLinks: [
      { name: "Natives.co.uk – Val d'Isère", url: "https://www.natives.co.uk/" },
      { name: "Seasonworkers.com", url: "https://www.seasonworkers.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.valdisere.com/en/" },
      { name: "Pistkarta Espace Killy", url: "https://www.valdisere.com/en/skiing/the-ski-area/" },
      { name: "Snö- & väderrapport", url: "https://www.valdisere.com/en/snow-report/" },
      { name: "Liftkort online", url: "https://www.skipass-valdisere.com/en/" },
    ],
    travelLinks: [
      { name: "SNCF tåg → Bourg-Saint-Maurice", url: "https://www.sncf-connect.com/en-en/" },
      { name: "Altibus (flygplats → Val)", url: "https://www.altibus.com/" },
      { name: "Eurostar Snow Train", url: "https://www.eurostar.com/" },
    ],
    swedishTip: "Engelska räcker överallt – men lite franska gör att du blir vän med lokalbefolkningen.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Numéro de sécurité sociale (ordnas av arbetsgivaren)",
      "Franskt bankkonto rekommenderas (Boursorama enklast)",
      "Engelsk CV duger för chalet-jobb",
    ],
  },
  "Chamonix": {
    name: "Chamonix",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Extrem & autentisk",
    description:
      "Mont Blancs fot, mecka för alpinister och extremåkare. Riktig stad med hela året-runt-energi, inte bara skidturism.",
    bestFor: ["Alpinister", "Engelsktalande", "Stadsfeeling"],
    season: "Mitten dec – början maj",
    altitude: "1 035 – 3 842 m (Aiguille du Midi)",
    skiArea: "170 km pist (5 olika områden)",
    liftPassPrice: "€72/dag · ca €1 100/säsong (Mont Blanc Unlimited)",
    nearestAirport: "Genève (1h 15 min) · Lyon (3h)",
    jobs: [
      { type: "Bar / restaurang", salary: "€1 200–1 700/mån + dricks", tip: "Chambre Neuf, Elevation 1904 och MBC är klassikerna." },
      { type: "Bergguide / instruktör", salary: "€2 500–5 000/mån", tip: "Kräver UIAGM- eller BASI-certifikat – inget för nybörjare." },
    ],
    housing: { tip: "Lättare att hitta privat boende än i 'rena' skidorter. Chamonix-dalen har många byar att välja på.", priceRange: "€600–1 100/mån privat" },
    facebookGroups: [
      { name: "Chamonix Accommodation & Housing", url: "https://www.facebook.com/groups/chamonixaccommodation/" },
      { name: "Svenskar i Chamonix", url: "https://www.facebook.com/groups/svenskarichamonix/" },
    ],
    jobLinks: [
      { name: "Chamonix.com jobb", url: "https://www.chamonix.com/" },
      { name: "Pôle emploi", url: "https://www.francetravail.fr/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.chamonix.com/en" },
      { name: "Pistkarta & 5 områden", url: "https://www.chamonix.com/winter/ski-areas-mont-blanc" },
      { name: "Snö- & lavinrapport", url: "https://www.chamonix.com/snow-weather-avalanche-report" },
      { name: "Liftkort Compagnie du Mont-Blanc", url: "https://www.montblancnaturalresort.com/en/" },
    ],
    travelLinks: [
      { name: "SNCF tåg → St-Gervais → Chamonix", url: "https://www.sncf-connect.com/en-en/" },
      { name: "Mont Blanc Express tåg", url: "https://www.montblancexpress.com/" },
      { name: "Mountain Drop-offs (transfer)", url: "https://www.mountaindropoffs.com/" },
    ],
    swedishTip: "Stark svensk community – ses ofta på MBC (Micro Brasserie de Chamonix) på torsdagar.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Numéro de sécurité sociale via arbetsgivare",
      "Lavinutrustning om du går off-piste (sond, spade, sändare)",
      "UIAGM/BASI-cert för instruktörsjobb",
    ],
  },
  "Courchevel": {
    name: "Courchevel",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Lyx & Trois Vallées",
    description:
      "Del av världens största sammanlänkade skidområde (Les Trois Vallées). Courchevel 1850 är ren lyx – ryska oligarker och 5-stjärniga palats.",
    bestFor: ["Lyxhospitality", "Flera språk", "Sparkraftig säsong"],
    season: "Början dec – mitten apr",
    altitude: "1 260 – 3 230 m",
    skiArea: "600 km pist (Les 3 Vallées)",
    liftPassPrice: "€84/dag · ca €1 200/säsong (3 Vallées)",
    nearestAirport: "Chambéry (2h) · Lyon (2h 30 min) · Genève (3h)",
    jobs: [
      { type: "5-stjärnigt palats", salary: "€1 800–2 800/mån + dricks", tip: "Cheval Blanc, Les Airelles och K2 Palace är prestigeplatser." },
      { type: "Chalet host i toppsegment", salary: "€1 200–2 000/mån + allt ingår", tip: "Kollektion-bolag som Bramble Ski och Firefly Collection." },
    ],
    housing: { tip: "Personalboende via arbetsgivare – privat hyra praktiskt taget omöjligt i 1850.", priceRange: "€800–1 500/mån privat" },
    facebookGroups: [
      { name: "Courchevel Seasonaires", url: "https://www.facebook.com/groups/courchevelseasonaires/" },
      { name: "Trois Vallées Jobs", url: "https://www.facebook.com/groups/troisvalleesjobs/" },
    ],
    jobLinks: [
      { name: "Courchevel Tourisme jobb", url: "https://www.courchevel.com/" },
      { name: "Natives.co.uk", url: "https://www.natives.co.uk/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.courchevel.com/en/" },
      { name: "Pistkarta Les 3 Vallées", url: "https://www.les3vallees.com/en/winter/ski/ski-area-map" },
      { name: "Snö- & väderrapport", url: "https://www.courchevel.com/en/snow-report.html" },
      { name: "Liftkort online (3 Vallées)", url: "https://shop.s3v.com/" },
    ],
    travelLinks: [
      { name: "SNCF tåg → Moûtiers", url: "https://www.sncf-connect.com/en-en/" },
      { name: "Altibus Moûtiers → Courchevel", url: "https://www.altibus.com/" },
      { name: "Courchevel Altiport (flyg)", url: "https://www.courchevel.com/en/getting-there.html" },
    ],
    swedishTip: "Bo i Courchevel 1650 (Moriond) – billigare, mer life och bara 10 min till 1850 med lift.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Numéro de sécurité sociale via arbetsgivare",
      "Hospitality-CV på engelska + franska",
      "Flera språk gör enorm skillnad i lön",
    ],
  },
  "Méribel": {
    name: "Méribel",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Brittiskt & charmigt",
    description:
      "Hjärtat av Trois Vallées och Storbritanniens mest älskade skidort. Trähus, brittiska pubar och en avslappnad chalet-kultur.",
    bestFor: ["Förstagångare", "Brittisk gemenskap", "Stort skidområde"],
    season: "Början dec – mitten apr",
    altitude: "1 100 – 3 230 m",
    skiArea: "600 km pist (Les 3 Vallées)",
    liftPassPrice: "€84/dag · ca €1 200/säsong (3 Vallées)",
    nearestAirport: "Chambéry (2h) · Genève (3h) · Lyon (2h 30 min)",
    jobs: [
      { type: "Chalet host / kock", salary: "€700–1 200/mån + boende + lift", tip: "Inghams, Ski Total och Meriski är de stora chalet-bolagen." },
      { type: "Bar", salary: "€1 200–1 600/mån + dricks", tip: "Ronnie's, Jack's och Rond Point är après-klassiker." },
    ],
    housing: { tip: "Chalet-paket är standard. Méribel Centre vs Mottaret – Centre har bättre nattliv.", priceRange: "€700–1 200/mån privat" },
    facebookGroups: [
      { name: "Méribel Accommodation", url: "https://www.facebook.com/groups/meribelaccommodation/" },
      { name: "Méribel Seasonaires", url: "https://www.facebook.com/groups/meribelseasonaires/" },
    ],
    jobLinks: [
      { name: "Inghams ski jobs", url: "https://www.inghams.co.uk/" },
      { name: "Natives.co.uk", url: "https://www.natives.co.uk/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.meribel.net/en/" },
      { name: "Pistkarta Les 3 Vallées", url: "https://www.les3vallees.com/en/winter/ski/ski-area-map" },
      { name: "Snö- & väderrapport", url: "https://www.meribel.net/en/snow-report/" },
      { name: "Liftkort online (3 Vallées)", url: "https://shop.s3v.com/" },
    ],
    travelLinks: [
      { name: "SNCF tåg → Moûtiers", url: "https://www.sncf-connect.com/en-en/" },
      { name: "Altibus Moûtiers → Méribel", url: "https://www.altibus.com/" },
      { name: "Eurostar Snow Train", url: "https://www.eurostar.com/" },
    ],
    swedishTip: "Den lättaste orten att starta sin första säsong på – vänlig kultur och engelska räcker överallt.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Numéro de sécurité sociale via arbetsgivare",
      "Engelsk CV räcker för chalet-bolag",
      "Bok 'Natives Survival Guide' rekommenderas",
    ],
  },
  "Les Deux Alpes": {
    name: "Les Deux Alpes",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Ungdomligt & glaciär",
    description:
      "Frankrikes näst äldsta skidort, känd för sin glaciär (året-runt-skidåkning), enorma snowpark och budgetvänliga, ungdomliga vibe.",
    bestFor: ["Snowboardare", "Förstagångare", "Budgetsäsongare"],
    season: "Slutet nov – början maj (+ sommar på glaciär)",
    altitude: "1 300 – 3 600 m",
    skiArea: "200 km pist + glaciär",
    liftPassPrice: "€61/dag · ca €860/säsong",
    nearestAirport: "Lyon (2h) · Grenoble (1h 30 min) · Genève (3h)",
    jobs: [
      { type: "Bar / restaurang", salary: "€1 100–1 600/mån + dricks", tip: "Smithy's, Avalanche och Smokey Joe's är största arbetsgivarna." },
      { type: "Skidskola / parkpersonal", salary: "€1 500–2 000/mån", tip: "Sommar-park-jobb också möjligt p.g.a. glaciären." },
    ],
    housing: { tip: "Studio-lägenheter och delade chalets vanligast. Hyrorna är lägre än i de stora orterna.", priceRange: "€500–900/mån privat" },
    facebookGroups: [
      { name: "Les Deux Alpes Seasonaires", url: "https://www.facebook.com/groups/les2alpesseasonaires/" },
      { name: "Svenskar i Frankrike", url: "https://www.facebook.com/groups/svenskarifrankrike/" },
    ],
    jobLinks: [
      { name: "Les Deux Alpes karriär", url: "https://www.les2alpes.com/" },
      { name: "Seasonworkers.com", url: "https://www.seasonworkers.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.les2alpes.com/en/" },
      { name: "Pistkarta & snowpark", url: "https://www.les2alpes.com/en/ski-area/slopes-and-lifts/" },
      { name: "Snö- & glaciärrapport", url: "https://www.les2alpes.com/en/snow-report/" },
      { name: "Liftkort online", url: "https://shop.les2alpes.com/" },
    ],
    travelLinks: [
      { name: "SNCF tåg → Grenoble", url: "https://www.sncf-connect.com/en-en/" },
      { name: "Transaltitude (Grenoble → Les 2 Alpes)", url: "https://www.transaltitude.com/" },
    ],
    swedishTip: "Kombinera med en sommarsäsong på glaciären – ovanligt sätt att jobba i Alperna året om.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Numéro de sécurité sociale via arbetsgivare",
      "Snowboard/twin-tip-utrustning",
      "Sommarjobb-kontakt redan i juni",
    ],
  },
  "Cortina d'Ampezzo": {
    name: "Cortina d'Ampezzo",
    country: "Italien",
    flag: "🇮🇹",
    vibe: "Elegant & Dolomiterna",
    description:
      "Pärlan i Dolomiterna och värd för OS 2026. Lyxig italiensk charm, världens vackraste bergsmiljö och en blandning av jet-set och autentisk bergskultur.",
    bestFor: ["Hospitality-erfarna", "Italienska/tyska språk", "Skön livsstil"],
    season: "Slutet nov – början apr",
    altitude: "1 224 – 3 244 m",
    skiArea: "120 km lokalt · 1 200 km Dolomiti Superski",
    liftPassPrice: "€75/dag · ca €890/säsong (Dolomiti Superski)",
    nearestAirport: "Venedig (2h) · Treviso (1h 45 min) · Innsbruck (2h 30 min)",
    jobs: [
      { type: "Lyxhotell & restaurang", salary: "€1 400–1 900/mån + dricks", tip: "Cristallo, Rosapetra och Miramonti är toppadresserna." },
      { type: "Skidskola / liftpersonal", salary: "€1 300–1 700/mån", tip: "Scuola Sci Cortina anställer säsong – italienska + engelska krävs." },
    ],
    housing: { tip: "Personalboende via hotellen vanligast – Cortina är en av Italiens dyraste orter privat.", priceRange: "€700–1 200/mån privat" },
    facebookGroups: [
      { name: "Cortina Jobs & Accommodation", url: "https://www.facebook.com/groups/cortinajobs/" },
      { name: "Svenskar i Italien", url: "https://www.facebook.com/groups/svenskariitalien/" },
    ],
    jobLinks: [
      { name: "Cortina Tourism karriär", url: "https://www.cortina.dolomiti.org/en" },
      { name: "Subito.it lavoro Cortina", url: "https://www.subito.it/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.cortina.dolomiti.org/en" },
      { name: "Pistkarta Dolomiti Superski", url: "https://www.dolomitisuperski.com/en/Ski-area/Slopes-Lifts" },
      { name: "Snö- & väderrapport", url: "https://www.dolomitisuperski.com/en/Service/Snow-Weather" },
      { name: "Liftkort online", url: "https://shop.dolomitisuperski.com/" },
    ],
    travelLinks: [
      { name: "Cortina Express (Venedig → Cortina)", url: "https://www.cortinaexpress.it/en" },
      { name: "Trenitalia → Calalzo di Cadore", url: "https://www.trenitalia.com/en.html" },
    ],
    swedishTip: "Italienska är ett krav i lyxhotell – men engelska räcker som liftvärd. OS 2026 = extra många säsongsjobb.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort (Tessera Sanitaria via arbetsgivaren)",
      "Codice fiscale (italienskt skatte-ID, gratis hos Agenzia delle Entrate)",
      "Italiensk CV (Curriculum Vitae Europass)",
      "Italienskt bankkonto (Hype eller Revolut funkar bra)",
    ],
  },
  "Val Gardena": {
    name: "Val Gardena",
    country: "Italien",
    flag: "🇮🇹",
    vibe: "Sydtyrolskt & familjevänligt",
    description:
      "Tre byar (Ortisei, Santa Cristina, Selva) i Dolomiterna med både italiensk, tysk och ladinsk kultur. Sellaronda-rundan är världsberömd.",
    bestFor: ["Tyskkunniga", "Familjehotell", "Skidåkare som vill ha mil av pist"],
    season: "Slutet nov – mitten apr",
    altitude: "1 236 – 2 518 m",
    skiArea: "175 km lokalt · 1 200 km Dolomiti Superski",
    liftPassPrice: "€75/dag · ca €890/säsong (Dolomiti Superski)",
    nearestAirport: "Innsbruck (2h) · Verona (3h) · Venedig (3h 30 min)",
    jobs: [
      { type: "Hotell & rifugio", salary: "€1 300–1 800/mån + boende", tip: "Många 4-stjärniga familjehotell – Tyrolen-stil med stor servicekänsla." },
      { type: "Skidskola", salary: "€1 800–3 000/mån", tip: "Sydtyrolska skidskolor anställer ofta nordbor med skidlärar-cert." },
    ],
    housing: { tip: "Personalboende standard. Selva är dyrast, Ortisei mest charm, Santa Cristina lugnast.", priceRange: "€600–1 000/mån privat" },
    facebookGroups: [
      { name: "Val Gardena Jobs", url: "https://www.facebook.com/groups/valgardenajobs/" },
      { name: "Svenskar i Italien", url: "https://www.facebook.com/groups/svenskariitalien/" },
    ],
    jobLinks: [
      { name: "Val Gardena karriär", url: "https://www.valgardena.it/en/services/jobs/" },
      { name: "Südtirol Jobs", url: "https://www.suedtirol-jobs.it/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.valgardena.it/en/" },
      { name: "Pistkarta & Sellaronda", url: "https://www.valgardena.it/en/winter/skiing/ski-area/" },
      { name: "Snö- & väderrapport", url: "https://www.valgardena.it/en/winter/snow-weather/" },
      { name: "Liftkort Dolomiti Superski", url: "https://shop.dolomitisuperski.com/" },
    ],
    travelLinks: [
      { name: "Trenitalia → Bressanone/Brixen", url: "https://www.trenitalia.com/en.html" },
      { name: "SAD-buss → Val Gardena", url: "https://www.sad.it/en" },
    ],
    swedishTip: "Sydtyrolen är tvåspråkigt (italienska + tyska) – tysk skol-CV funkar lika bra som italiensk.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Codice fiscale",
      "Tysk eller italiensk CV (helst båda)",
      "Anpassade kläder för hög luftfuktighet i dalen",
    ],
  },
  "Livigno": {
    name: "Livigno",
    country: "Italien",
    flag: "🇮🇹",
    vibe: "Skattefritt & snösäkert",
    description:
      "Italiens 'Lilla Tibet' – tullfri zon i Alperna med billig sprit, parfym och sportutrustning. Värd för OS-freestyle 2026 och en av Europas mest snösäkra orter.",
    bestFor: ["Snowboardare", "Budgetsäsongare", "Skattefri shopping"],
    season: "Slutet nov – början maj",
    altitude: "1 816 – 2 900 m",
    skiArea: "115 km pist + stor snowpark",
    liftPassPrice: "€60/dag · ca €750/säsong",
    nearestAirport: "Bergamo (4h) · Milano-Malpensa (4h 30 min) · Innsbruck (3h)",
    jobs: [
      { type: "Sport- & sprit-butik", salary: "€1 200–1 600/mån", tip: "Tullfria butiker (Bertolina, Snowsport) anställer många säsongare." },
      { type: "Bar / restaurang", salary: "€1 200–1 700/mån + dricks", tip: "Stalet, Daphne's och Mr Pink är de stora festställena." },
    ],
    housing: { tip: "Personalboende vanligt. Privat hyra OK eftersom Livigno är en längre stad (15 km).", priceRange: "€500–800/mån privat" },
    facebookGroups: [
      { name: "Livigno Jobs & Accommodation", url: "https://www.facebook.com/groups/livignojobs/" },
      { name: "Svenskar i Italien", url: "https://www.facebook.com/groups/svenskariitalien/" },
    ],
    jobLinks: [
      { name: "Livigno karriär", url: "https://www.livigno.eu/en/jobs" },
      { name: "Subito.it lavoro Livigno", url: "https://www.subito.it/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.livigno.eu/en" },
      { name: "Pistkarta & snowpark", url: "https://www.livigno.eu/en/ski/ski-areas" },
      { name: "Snö- & väderrapport", url: "https://www.livigno.eu/en/snow-report" },
      { name: "Liftkort online", url: "https://shop.livigno.eu/" },
    ],
    travelLinks: [
      { name: "Buss Bergamo → Livigno (Flixbus)", url: "https://www.flixbus.com/" },
      { name: "Eurolines / Silvestri-buss", url: "https://www.silvestriliviniobus.com/" },
    ],
    swedishTip: "Tullfria zonen = sprit och tobak ca 30 % billigare än i Sverige. Bensin är också rejält billig.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Codice fiscale",
      "OBS: tullfri kvot vid utresa (1 L sprit, 200 cigg)",
      "Snökedjor om du tar bil – obligatoriskt nov–apr",
    ],
  },
  "Courmayeur": {
    name: "Courmayeur",
    country: "Italien",
    flag: "🇮🇹",
    vibe: "Italienskt Mont Blanc",
    description:
      "Mont Blancs italienska sida – elegantare än Chamonix, fantastisk mat och snabb tunneltransport (15 min) över till franska sidan. Byn är charmig och autentisk.",
    bestFor: ["Mat- & vinälskare", "Off-piste på Vallée Blanche", "Engelsktalande"],
    season: "Början dec – mitten apr",
    altitude: "1 224 – 3 470 m",
    skiArea: "100 km pist (lokalt) + helikopter-skiing",
    liftPassPrice: "€62/dag · ca €820/säsong",
    nearestAirport: "Genève (1h 30 min) · Turin (2h) · Milano (2h 30 min)",
    jobs: [
      { type: "Restaurang & enoteca", salary: "€1 300–1 800/mån + dricks", tip: "Cadran Solaire, Pierre Alexis och Café della Posta är legendariska." },
      { type: "Hotell 4–5 stjärnor", salary: "€1 400–2 000/mån", tip: "Grand Hotel Royal e Golf och Auberge de la Maison är toppen." },
    ],
    housing: { tip: "Personalboende via hotell standard. Privat hyra finns i Dolonne och Entrèves – billigare än byn.", priceRange: "€600–1 100/mån privat" },
    facebookGroups: [
      { name: "Courmayeur Jobs", url: "https://www.facebook.com/groups/courmayeurjobs/" },
      { name: "Svenskar i Italien", url: "https://www.facebook.com/groups/svenskariitalien/" },
    ],
    jobLinks: [
      { name: "Courmayeur karriär", url: "https://www.courmayeurmontblanc.it/en" },
      { name: "Funivie Courmayeur jobb", url: "https://www.courmayeur-montblanc.com/" },
    ],
    officialLinks: [
      { name: "Officiell turistsida", url: "https://www.courmayeurmontblanc.it/en" },
      { name: "Pistkarta Skyway/Plan Chécrouit", url: "https://www.courmayeur-montblanc.com/en/ski/slopes-lifts/" },
      { name: "Snö- & väderrapport", url: "https://www.courmayeur-montblanc.com/en/snow-report/" },
      { name: "Skyway Monte Bianco (kabinbana)", url: "https://www.montebianco.com/en" },
    ],
    travelLinks: [
      { name: "Savda-buss → Courmayeur", url: "https://www.savda.it/en" },
      { name: "Mont Blanc-tunneln (till Chamonix)", url: "https://www.tunnelmb.net/" },
    ],
    swedishTip: "På Skyway uppe på 3 466 m kan du dricka espresso med utsikt över Mont Blanc – billigare än Chamonix-versionen.",
    checklist: [
      "EU-pass eller ID-kort",
      "EHIC-kort",
      "Codice fiscale",
      "Italiensk CV + lite franska för Mont Blanc-sidan",
      "Lavinutrustning för Vallée Blanche (sond, spade, sändare)",
    ],
  },
};
