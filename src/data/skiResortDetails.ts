export type ResortDetail = {
  name: string;
  country: string;
  flag: string;
  vibe: string;
  description: string;
  bestFor: string[];
  jobs: { type: string; salary: string; tip: string }[];
  housing: { tip: string; priceRange: string };
  facebookGroups: { name: string; url: string }[];
  jobLinks: { name: string; url: string }[];
  swedishTip: string;
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
    swedishTip: "Det finns ALLTID svenskar i St. Anton. Gå till Underground-baren första veckan – där samlas svenskarna.",
  },
  "Ischgl": {
    name: "Ischgl",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Exklusivt & livligt",
    description:
      "Ischgl kallas 'Ibiza i Alperna' – kända DJ-konserter, lyxig shopping och ett enormt skidområde sammanlänkat med schweiziska Samnaun.",
    bestFor: ["Premiumservice-erfarna", "Tysktalande", "Festtempo"],
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
    swedishTip: "Färre svenskar än i St. Anton – men de som är där brukar samlas på Trofana Alm.",
  },
  "Kitzbühel": {
    name: "Kitzbühel",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Klassiskt & elegant",
    description:
      "Världsberömt tack vare Hahnenkamm-loppet. Mysig medeltida stadskärna, glamour och äldre, mer kräsen klientel.",
    bestFor: ["Hotell- & servicebakgrund", "Tyskkunniga", "Lugnare nöjesliv"],
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
    swedishTip: "Kitz är dyrt – välj jobb där boende OCH mat ingår, annars äter staden upp lönen.",
  },
  "Sölden": {
    name: "Sölden",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Glaciär & James Bond",
    description:
      "Hög höjd, två glaciärer och säsong från oktober till maj. Känd från James Bond-filmen Spectre och har vuxit till en av Tyrolens festigaste orter.",
    bestFor: ["Lång säsong", "Snösäkert", "Energisk publik"],
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
    swedishTip: "Säsongen startar redan i oktober på glaciären – perfekt om du vill komma igång tidigt.",
  },
  "Mayrhofen": {
    name: "Mayrhofen",
    country: "Österrike",
    flag: "🇦🇹",
    vibe: "Ungdomligt & festigt",
    description:
      "Stor brittisk närvaro, prisvärt jämfört med övriga Alperna och hem för Snowbombing-festivalen. Avslappnad stämning och hög svensk täthet.",
    bestFor: ["Förstagångare", "Engelsktalande", "Trångt budget"],
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
    swedishTip: "Lättast orten att få jobb på utan språkkunskaper – engelska räcker överallt.",
  },
  "Zermatt": {
    name: "Zermatt",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Ikoniskt & bilfritt",
    description:
      "Matterhorn i bakgrunden, bilfri by och året-runt-skidåkning på glaciären. Lyx, kvalitet och de högsta lönerna i Alperna.",
    bestFor: ["Servicestjärnor", "Långa säsonger", "Höga sparmål"],
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
    swedishTip: "Schweiz kräver L-tillstånd – arbetsgivaren ordnar det. Räkna med 25–30 % skatt men ändå topplön.",
  },
  "Verbier": {
    name: "Verbier",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Off-piste & high-end",
    description:
      "Mecka för off-piste och freeride. Stor brittisk chalet-scen, exklusiv klientel och otrolig backcountry-åkning.",
    bestFor: ["Chalet-jobb", "Engelska som modersmål-nivå", "Skidproffs"],
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
    swedishTip: "Chalet-jobb ger lägre kontantlön men allt ingår – du går oftast hem med mer sparat än hotellpersonalen.",
  },
  "St. Moritz": {
    name: "St. Moritz",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Lyx & jet-set",
    description:
      "Ursprunget till alpin vinterturism. 5-stjärniga hotell, polo på snö och en klientel där rum kostar CHF 5 000/natt.",
    bestFor: ["Erfaren hospitality", "Flera språk", "Nätverkare"],
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
    swedishTip: "Mest formell ort i Alperna – packa skjorta och ordentliga skor till intervjuer.",
  },
  "Davos": {
    name: "Davos",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Stort & sportigt",
    description:
      "Europas högst belägna stad, hem för World Economic Forum. Enorm skiddomän, Parsenn och Jakobshorn, samt mer 'riktig stad' än traditionell skidby.",
    bestFor: ["Stadskänsla", "Längre säsong", "Sport-events"],
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
    swedishTip: "Sambandet med World Economic Forum (januari) ger extrajobb med riktigt bra timlön.",
  },
  "Laax": {
    name: "Laax",
    country: "Schweiz",
    flag: "🇨🇭",
    vibe: "Freestyle & snowboard",
    description:
      "Europas största snowparker, Burton-shopens hemmaort och en ung, kreativ scen. Mer hipp än traditionell skidort.",
    bestFor: ["Snowboardare", "Park-rats", "Kreativa branscher"],
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
    swedishTip: "Bäst snowboard-community i Alperna. Många pro-åkare bor här på vintrarna.",
  },
  "Val d'Isère": {
    name: "Val d'Isère",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Legendariskt & högt",
    description:
      "Sammanlänkat med Tignes till 'Espace Killy'. Hög höjd, snösäker säsong och stor brittisk närvaro – över 50 % av säsongspersonalen är britter.",
    bestFor: ["Engelsktalande", "Nattliv", "Lång säsong (nov–maj)"],
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
    swedishTip: "Engelska räcker överallt – men lite franska gör att du blir vän med lokalbefolkningen.",
  },
  "Chamonix": {
    name: "Chamonix",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Extrem & autentisk",
    description:
      "Mont Blancs fot, mecka för alpinister och extremåkare. Riktig stad med hela året-runt-energi, inte bara skidturism.",
    bestFor: ["Alpinister", "Engelsktalande", "Stadsfeeling"],
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
    swedishTip: "Stark svensk community – ses ofta på MBC (Micro Brasserie de Chamonix) på torsdagar.",
  },
  "Courchevel": {
    name: "Courchevel",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Lyx & Trois Vallées",
    description:
      "Del av världens största sammanlänkade skidområde (Les Trois Vallées). Courchevel 1850 är ren lyx – ryska oligarker och 5-stjärniga palats.",
    bestFor: ["Lyxhospitality", "Flera språk", "Sparkraftig säsong"],
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
    swedishTip: "Bo i Courchevel 1650 (Moriond) – billigare, mer life och bara 10 min till 1850 med lift.",
  },
  "Méribel": {
    name: "Méribel",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Brittiskt & charmigt",
    description:
      "Hjärtat av Trois Vallées och Storbritanniens mest älskade skidort. Trähus, brittiska pubar och en avslappnad chalet-kultur.",
    bestFor: ["Förstagångare", "Brittisk gemenskap", "Stort skidområde"],
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
    swedishTip: "Den lättaste orten att starta sin första säsong på – vänlig kultur och engelska räcker överallt.",
  },
  "Les Deux Alpes": {
    name: "Les Deux Alpes",
    country: "Frankrike",
    flag: "🇫🇷",
    vibe: "Ungdomligt & glaciär",
    description:
      "Frankrikes näst äldsta skidort, känd för sin glaciär (året-runt-skidåkning), enorma snowpark och budgetvänliga, ungdomliga vibe.",
    bestFor: ["Snowboardare", "Förstagångare", "Budgetsäsongare"],
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
    swedishTip: "Kombinera med en sommarsäsong på glaciären – ovanligt sätt att jobba i Alperna året om.",
  },
};
