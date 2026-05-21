// Recommended cities per destination, used by the budget calculator.
// Where a destination page exists, cities mirror those. For others (no dedicated page yet),
// curated picks for Swedish travellers.

export interface RecommendedCity {
  name: string;
  blurb: string;
}

export const recommendedCities: Record<string, RecommendedCity[]> = {
  australien: [
    { name: "Sydney", blurb: "Storstad, ikoniska stränder, jobb inom restaurang & kontor." },
    { name: "Melbourne", blurb: "Kulturhuvudstad med bra hospitality- och kreativa jobb." },
    { name: "Gold Coast", blurb: "Surf, sol och turismjobb året runt." },
    { name: "Cairns", blurb: "Porten till Great Barrier Reef – dykning & farm work." },
  ],
  "nya-zeeland": [
    { name: "Auckland", blurb: "Största staden – mest jobb och svensk community." },
    { name: "Queenstown", blurb: "Äventyrshuvudstaden – skidsäsong & adrenalin." },
    { name: "Wellington", blurb: "Kreativ huvudstad med fartfyllt kaféliv." },
    { name: "Christchurch", blurb: "Lugnare bas för Sydöns natur och vingårdar." },
  ],
  thailand: [
    { name: "Bangkok", blurb: "Hektisk metropol – billig mat, marknader, nightlife." },
    { name: "Chiang Mai", blurb: "Lugnt nordligt nav – populärt bland digitala nomader." },
    { name: "Koh Tao", blurb: "Dykarparadis med några av världens billigaste PADI-kurser." },
    { name: "Krabi / Koh Lanta", blurb: "Långstrandsparadis i söder – idealt för längre vistelser." },
  ],
  vietnam: [
    { name: "Hanoi", blurb: "Charmig huvudstad i norr med rik historia." },
    { name: "Ho Chi Minh-staden", blurb: "Pulserande söder – nightlife och jobbmöjligheter." },
    { name: "Da Nang & Hoi An", blurb: "Strand + lyktstadens charm – populärt nomadnav." },
    { name: "Halong Bay", blurb: "Kryssningsdestination med spektakulär kustnatur." },
  ],
  indonesien: [
    { name: "Canggu (Bali)", blurb: "Surf, smoothiebowls och digitala nomader." },
    { name: "Ubud (Bali)", blurb: "Yoga, ris­terrasser och retreats." },
    { name: "Gili Islands", blurb: "Bilfria öar med snorkling och fest." },
    { name: "Lombok", blurb: "Lugnare alternativ till Bali, fantastiska stränder." },
  ],
  filippinerna: [
    { name: "Palawan (El Nido & Coron)", blurb: "Kalkstensklippor och kristallklart vatten." },
    { name: "Cebu & Bohol", blurb: "Valhajar, vattenfall och chocolate hills." },
    { name: "Siargao", blurb: "Filippinernas surfhuvudstad – Cloud 9." },
    { name: "Manila", blurb: "Hubb för flyganslutningar och stadsupplevelser." },
  ],
  kambodja: [
    { name: "Siem Reap", blurb: "Bas för Angkor Wat och tempelutforskning." },
    { name: "Phnom Penh", blurb: "Huvudstaden med viktig historia och kafékultur." },
    { name: "Sihanoukville & Koh Rong", blurb: "Strand- och öliv vid Siamviken." },
    { name: "Battambang", blurb: "Lugn koloniala stad med konstscen och bambutåg." },
  ],
  laos: [
    { name: "Luang Prabang", blurb: "UNESCO-stad med tempel och mekong-lugn." },
    { name: "Vang Vieng", blurb: "Tubing, lagunhopping och äventyrsbas." },
    { name: "Vientiane", blurb: "Lugn huvudstad – avslappnad start på resan." },
    { name: "4000 Islands", blurb: "Hängmattelivet vid Mekongs deltaöar." },
  ],
  malaysia: [
    { name: "Kuala Lumpur", blurb: "Modern metropol med Petronas Towers och street food." },
    { name: "Penang (George Town)", blurb: "Mat-mecka med kolonial charm och street art." },
    { name: "Langkawi", blurb: "Tax-free öparadis i Andamansjön." },
    { name: "Borneo (Kota Kinabalu)", blurb: "Djungel, orangutanger och vulkaner." },
  ],
  myanmar: [
    { name: "Yangon", blurb: "Storstad med koloniala byggnader och Shwedagon-pagoden." },
    { name: "Bagan", blurb: "Tusentals tempel på en slätt – ballongtur i soluppgång." },
    { name: "Inle Lake", blurb: "Flytande byar och unika fiskemetoder." },
    { name: "Mandalay", blurb: "Kulturellt centrum i centrala Myanmar." },
  ],
  usa: [
    { name: "New York", blurb: "Storstadens mecka – kreativa branscher och nightlife." },
    { name: "Los Angeles", blurb: "Soliga LA – film, surf och hälsa." },
    { name: "San Francisco", blurb: "Tech-hubb vid bukten – dyrt men ikoniskt." },
    { name: "Miami", blurb: "Latin-amerikanska vibbar, stränder och party." },
  ],
  kanada: [
    { name: "Vancouver", blurb: "Berg möter hav – populärt för WHV och skidsäsong." },
    { name: "Toronto", blurb: "Kanadas största stad – mest jobb." },
    { name: "Montreal", blurb: "Fransktalande kulturmetropol med billigare hyror." },
    { name: "Whistler / Banff", blurb: "Skidresorts med säsongsjobb och spektakulär natur." },
  ],
  argentina: [
    { name: "Buenos Aires", blurb: "Tango, biff och europeisk arkitektur." },
    { name: "Mendoza", blurb: "Vinregion vid Andernas fot." },
    { name: "Bariloche", blurb: "Patagoniens 'lilla Schweiz' – sjöar och skidåkning." },
    { name: "El Calafate / Ushuaia", blurb: "Glaciärer och världens sydligaste stad." },
  ],
  chile: [
    { name: "Santiago", blurb: "Huvudstaden mellan Anderna och Stilla havet." },
    { name: "Valparaíso", blurb: "Hamnstad med konstnärlig själ och färgglada hus." },
    { name: "San Pedro de Atacama", blurb: "Bas för världens torraste öken och saltöken." },
    { name: "Patagonien (Puerto Natales)", blurb: "Trekkingmecka – Torres del Paine." },
  ],
  peru: [
    { name: "Cusco", blurb: "Inkahuvudstaden – startpunkt för Machu Picchu." },
    { name: "Lima", blurb: "Gastronomisk huvudstad vid Stilla havet." },
    { name: "Arequipa", blurb: "Vit stad vid vulkaner – Colca Canyon." },
    { name: "Huacachina", blurb: "Sandboarding och oasdyner." },
  ],
  brasilien: [
    { name: "Rio de Janeiro", blurb: "Copacabana, Kristusstatyn och samba." },
    { name: "São Paulo", blurb: "Latinamerikas största stad – kultur och jobb." },
    { name: "Florianópolis", blurb: "Surfö i söder – populärt bland nordeuropéer." },
    { name: "Salvador & Bahia", blurb: "Afro-brasiliansk kultur och stränder." },
  ],
  colombia: [
    { name: "Medellín", blurb: "Vårens stad – nomader, salsa, perfekt klimat." },
    { name: "Cartagena", blurb: "Karibisk koloniala pärla med stränder." },
    { name: "Bogotá", blurb: "Höghöjdshuvudstad med kafékultur." },
    { name: "Santa Marta / Tayrona", blurb: "Bas för Tayrona nationalpark och Lost City-trek." },
  ],
  alperna: [
    { name: "Chamonix (FR)", blurb: "Mont Blanc-bas – för proffs och äventyrare." },
    { name: "Val Thorens (FR)", blurb: "Europas högsta skidort – garanterad snö." },
    { name: "St. Anton (AT)", blurb: "Legendarisk afterski och brant terräng." },
    { name: "Verbier (CH)", blurb: "Off-piste-mecka och internationell publik." },
    { name: "Zermatt (CH)", blurb: "Matterhorn-utsikt och bilfri by." },
  ],
  spanien: [
    { name: "Barcelona", blurb: "Strand + storstad – Gaudí och tapas." },
    { name: "Madrid", blurb: "Huvudstaden med tapas, museer och nattliv." },
    { name: "Málaga / Costa del Sol", blurb: "Sol året runt – populärt bland svenskar." },
    { name: "Valencia", blurb: "Paella-staden med strand och futuristisk arkitektur." },
  ],
  storbritannien: [
    { name: "London", blurb: "Världsmetropol – jobb i alla branscher." },
    { name: "Edinburgh", blurb: "Skottlands huvudstad med festivaler och historia." },
    { name: "Manchester", blurb: "Musik, fotboll och billigare än London." },
    { name: "Brighton", blurb: "Kreativ kuststad nära London." },
  ],
  japan: [
    { name: "Tokyo", blurb: "Hypermodern metropol – allt och lite till." },
    { name: "Kyoto", blurb: "Tempel, geishadistrikt och traditionell kultur." },
    { name: "Osaka", blurb: "Mat-mecka med folklig charm." },
    { name: "Niseko (Hokkaido)", blurb: "Världsklassig powder – populär skidresort." },
  ],
  frankrike: [
    { name: "Paris", blurb: "Konst, mode och kaféliv i världens romantiska huvudstad." },
    { name: "Lyon", blurb: "Gastronomihuvudstaden med rik historia." },
    { name: "Nice / Riviera", blurb: "Medelhavskust, sol och azurblått vatten." },
    { name: "Bordeaux", blurb: "Vinregion med elegant arkitektur." },
  ],
  italien: [
    { name: "Rom", blurb: "Antik historia, pasta och dolce vita." },
    { name: "Milano", blurb: "Mode-, design- och affärsmetropolen." },
    { name: "Florens", blurb: "Renässansens vagga och toskansk charm." },
    { name: "Neapel / Amalfikusten", blurb: "Pizza, kust och vulkanlandskap." },
  ],
  portugal: [
    { name: "Lissabon", blurb: "Färgglada kvarter, fado och billigare än mycket av Europa." },
    { name: "Porto", blurb: "Portvin, broar och avslappnad atmosfär." },
    { name: "Algarve (Lagos)", blurb: "Klippkust, stränder och surf." },
    { name: "Madeira", blurb: "Grönskande ö med vandring och naturpooler." },
  ],
  chamonix: [
    { name: "Chamonix Centre", blurb: "Klassisk alpby vid Mont Blanc." },
    { name: "Argentière", blurb: "Lugnare alternativ närmare Grands Montets." },
    { name: "Les Houches", blurb: "Familjevänligt med billigare boende." },
  ],
  paris: [
    { name: "Paris Centre (1–4)", blurb: "Louvren, Marais och Seine inom räckhåll." },
    { name: "Montmartre (18e)", blurb: "Konstnärsvibe och Sacré-Cœur." },
    { name: "Le Marais (3–4e)", blurb: "Hippt kvarter med kaféer och nattliv." },
    { name: "Belleville / Canal St-Martin", blurb: "Mångkulturellt och prisvärdare." },
  ],
};
