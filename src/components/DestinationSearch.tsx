import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, X, ExternalLink, FileCheck, Briefcase, Users, Plane, Globe, GraduationCap, Heart, Mountain, Sun, Tent, Music, Utensils, Camera, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Activity = {
  name: string;
  icon: string;
  description: string;
};

type Resource = {
  name: string;
  url: string;
  official: boolean;
};

type Destination = {
  name: string;
  flag: string;
  region: string;
  visaInfo: string;
  activities: string[];
  slug?: string;
  resources?: {
    visa?: Resource[];
    jobs?: Resource[];
    community?: Resource[];
  };
};

const allActivities: Record<string, { label: string; emoji: string }> = {
  "working-holiday": { label: "Working Holiday", emoji: "💼" },
  "au-pair": { label: "Au Pair", emoji: "👶" },
  "studera": { label: "Studera", emoji: "🎓" },
  "skidsasong": { label: "Skidsäsong", emoji: "⛷️" },
};

const destinations: Destination[] = [
  // Populära destinationer (de 7 som visas på startsidan)
  { name: "Australien", flag: "🇦🇺", region: "Oceanien", visaInfo: "Working Holiday Visa (417), 18-30 år", slug: "australien", activities: ["working-holiday"],
    resources: { visa: [{ name: "Working Holiday Visa (417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", official: true }], jobs: [{ name: "Seek", url: "https://www.seek.com.au", official: false }, { name: "Harvest Trail", url: "https://jobsearch.gov.au/harvest", official: true }], community: [{ name: "Svenska i Australien (FB)", url: "https://www.facebook.com/groups/svenskaiAustralien", official: false }] } },
  { name: "Nya Zeeland", flag: "🇳🇿", region: "Oceanien", visaInfo: "Working Holiday Visa, 18-30 år", slug: "nya-zeeland", activities: ["working-holiday"],
    resources: { visa: [{ name: "Immigration NZ - WHV", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/sweden-working-holiday-visa", official: true }], jobs: [{ name: "Seek NZ", url: "https://www.seek.co.nz", official: false }], community: [{ name: "Svenska i Nya Zeeland (FB)", url: "https://www.facebook.com/groups/svenskarinyazeeland", official: false }] } },
  { name: "USA", flag: "🇺🇸", region: "Nordamerika", visaInfo: "J-1 Visum, 18-28 år", slug: "usa", activities: ["au-pair", "studera"],
    resources: { visa: [{ name: "J-1 Visa Info", url: "https://j1visa.state.gov/", official: true }], jobs: [{ name: "Cultural Care Au Pair", url: "https://www.culturalcare.se", official: false }], community: [{ name: "Au Pair i USA (FB)", url: "https://www.facebook.com/groups/aupairiusa", official: false }] } },
  { name: "Paris", flag: "🗼", region: "Europa", visaInfo: "EU-medborgare, fritt", slug: "paris", activities: ["au-pair", "studera"] },
  { name: "Alperna", flag: "🏔️", region: "Europa", visaInfo: "Flera länder, oftast fritt inom EU", slug: "_alperna", activities: ["skidsasong"] },
  { name: "Sydostasien", flag: "🌴", region: "Asien", visaInfo: "Varierar per land", slug: "_sydostasien", activities: [] },
  { name: "Sydamerika", flag: "🌎", region: "Sydamerika", visaInfo: "Varierar per land", slug: "_sydamerika", activities: [] },

  // Working Holiday-länder
  { name: "Kanada", flag: "🇨🇦", region: "Nordamerika", visaInfo: "Working Holiday (IEC), 18-35 år", activities: ["working-holiday"],
    resources: { visa: [{ name: "IEC Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html", official: true }] } },
  { name: "Japan", flag: "🇯🇵", region: "Asien", visaInfo: "Working Holiday, 18-30 år", activities: ["working-holiday"],
    resources: { visa: [{ name: "Japanska ambassaden", url: "https://www.se.emb-japan.go.jp/", official: true }], jobs: [{ name: "GaijinPot Jobs", url: "https://jobs.gaijinpot.com/", official: false }] } },

  // Skidsäsong i Alperna
  { name: "Österrike", flag: "🇦🇹", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["skidsasong"],
    resources: { jobs: [{ name: "Seasonaires Österrike", url: "https://www.seasonaires.com/ski-jobs/austria/", official: false }, { name: "AMS Österrike", url: "https://www.ams.at/", official: true }] } },
  { name: "Schweiz", flag: "🇨🇭", region: "Europa", visaInfo: "EU-medborgare kan jobba fritt", activities: ["skidsasong"],
    resources: { jobs: [{ name: "Seasonaires Schweiz", url: "https://www.seasonaires.com/ski-jobs/switzerland/", official: false }] } },
  { name: "Frankrike", flag: "🇫🇷", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["skidsasong", "au-pair", "studera"] },

  // Studera & Au Pair-städer
  { name: "Storbritannien", flag: "🇬🇧", region: "Europa", visaInfo: "Youth Mobility Scheme, 18-30 år", activities: ["au-pair", "studera"] },
  { name: "Spanien", flag: "🇪🇸", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["au-pair", "studera"] },
];

// Populära städer/platser som alternativa söktermer
const cityAliases: Record<string, string> = {
  "sydney": "Australien", "melbourne": "Australien", "gold coast": "Australien", "cairns": "Australien", "brisbane": "Australien", "perth": "Australien",
  "auckland": "Nya Zeeland", "queenstown": "Nya Zeeland", "wellington": "Nya Zeeland",
  "new york": "USA", "los angeles": "USA", "miami": "USA", "san francisco": "USA", "hawaii": "USA", "boston": "USA", "chicago": "USA", "seattle": "USA",
  "toronto": "Kanada", "vancouver": "Kanada", "montreal": "Kanada", "banff": "Kanada", "whistler": "Kanada",
  "paris": "Frankrike", "lyon": "Frankrike", "bordeaux": "Frankrike", "marseille": "Frankrike", "nice": "Frankrike", "chamonix": "Frankrike", "val d'isère": "Frankrike",
  "barcelona": "Spanien", "madrid": "Spanien", "sevilla": "Spanien", "valencia": "Spanien", "málaga": "Spanien", "ibiza": "Spanien",
  "rom": "Italien", "milano": "Italien", "florens": "Italien", "neapel": "Italien", "venedig": "Italien",
  "lissabon": "Portugal", "porto": "Portugal", "algarve": "Portugal",
  "berlin": "Tyskland", "münchen": "Tyskland", "hamburg": "Tyskland",
  "wien": "Österrike", "innsbruck": "Österrike", "st. anton": "Österrike", "ischgl": "Österrike",
  "zürich": "Schweiz", "zermatt": "Schweiz", "verbier": "Schweiz",
  "aten": "Grekland", "santorini": "Grekland", "kreta": "Grekland", "mykonos": "Grekland",
  "dubrovnik": "Kroatien", "split": "Kroatien", "zagreb": "Kroatien",
  "dublin": "Irland", "galway": "Irland",
  "london": "Storbritannien", "edinburgh": "Storbritannien", "manchester": "Storbritannien",
  "amsterdam": "Nederländerna", "rotterdam": "Nederländerna",
  "bangkok": "Thailand", "chiang mai": "Thailand", "phuket": "Thailand", "koh samui": "Thailand", "koh phangan": "Thailand", "krabi": "Thailand",
  "tokyo": "Japan", "kyoto": "Japan", "osaka": "Japan",
  "seoul": "Sydkorea", "busan": "Sydkorea",
  "hanoi": "Vietnam", "ho chi minh": "Vietnam", "da nang": "Vietnam",
  "jakarta": "Indonesien", "yogyakarta": "Indonesien", "lombok": "Indonesien",
  "ubud": "Bali", "canggu": "Bali", "seminyak": "Bali", "uluwatu": "Bali",
  "manila": "Filippinerna", "cebu": "Filippinerna", "el nido": "Filippinerna", "siargao": "Filippinerna",
  "siem reap": "Kambodja", "phnom penh": "Kambodja",
  "kathmandu": "Nepal", "pokhara": "Nepal",
  "mumbai": "Indien", "delhi": "Indien", "goa": "Indien", "rishikesh": "Indien",
  "shanghai": "Kina", "peking": "Kina", "beijing": "Kina",
  "taipei": "Taiwan",
  "kuala lumpur": "Malaysia", "penang": "Malaysia", "langkawi": "Malaysia",
  "buenos aires": "Argentina", "mendoza": "Argentina", "patagonien": "Argentina",
  "rio de janeiro": "Brasilien", "são paulo": "Brasilien", "florianópolis": "Brasilien",
  "bogotá": "Colombia", "medellín": "Colombia", "cartagena": "Colombia",
  "lima": "Peru", "cusco": "Peru", "machu picchu": "Peru",
  "santiago": "Chile", "valparaíso": "Chile",
  "quito": "Ecuador", "galápagos": "Ecuador",
  "cancún": "Mexiko", "playa del carmen": "Mexiko", "tulum": "Mexiko", "mexico city": "Mexiko", "oaxaca": "Mexiko", "puerto vallarta": "Mexiko",
  "san josé": "Costa Rica", "tamarindo": "Costa Rica", "santa teresa": "Costa Rica",
  "kapstaden": "Sydafrika", "johannesburg": "Sydafrika", "durban": "Sydafrika",
  "kilimanjaro": "Tanzania", "serengeti": "Tanzania", "dar es salaam": "Tanzania",
  "nairobi": "Kenya", "mombasa": "Kenya",
  "marrakech": "Marocko", "essaouira": "Marocko", "fez": "Marocko",
  "kairo": "Egypten", "hurghada": "Egypten", "sharm el sheikh": "Egypten",
  "dubai": "Förenade Arabemiraten", "abu dhabi": "Förenade Arabemiraten",
  "tel aviv": "Israel", "jerusalem": "Israel",
  "istanbul": "Turkiet", "antalya": "Turkiet", "bodrum": "Turkiet", "kappadokien": "Turkiet",
  "tbilisi": "Georgien", "batumi": "Georgien",
  "prag": "Tjeckien",
  "budapest": "Ungern",
  "krakow": "Polen", "warszawa": "Polen",
  "bukarest": "Rumänien",
  "tallinn": "Estland",
  "reykjavik": "Island",
  "valletta": "Malta",
  "tirana": "Albanien",
  "kingston": "Jamaica",
};

export const DestinationSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeActivityFilter, setActiveActivityFilter] = useState<string | null>(null);
  const [matchedCity, setMatchedCity] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase().trim();

    // Check city aliases
    const cityMatch = Object.entries(cityAliases).find(([city]) => city.includes(q) || q.includes(city));

    let results = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(q) ||
        dest.region.toLowerCase().includes(q) ||
        dest.activities.some(a => allActivities[a]?.label.toLowerCase().includes(q))
    );

    // Add city alias matches
    if (cityMatch) {
      const countryName = cityMatch[1];
      const country = destinations.find(d => d.name === countryName);
      if (country && !results.find(r => r.name === country.name)) {
        results.unshift(country);
      }
    }

    // Also filter by activity if active
    if (activeActivityFilter) {
      results = results.filter(d => d.activities.includes(activeActivityFilter));
    }

    return results.slice(0, 12);
  }, [query, activeActivityFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (destination: Destination, city?: string) => {
    if (destination.slug) {
      // Navigate to the destination page
      if (destination.slug.startsWith("_")) {
        // Region pages (alperna, sydostasien, sydamerika)
        navigate(`/${destination.slug.slice(1)}`);
      } else {
        navigate(`/destination/${destination.slug}`);
      }
      return;
    }
    // Fallback for destinations without a dedicated page
    setSelectedDestination(destination);
    setQuery(city ? `${city}, ${destination.name}` : destination.name);
    setMatchedCity(city || null);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelectedDestination(null);
    setQuery("");
    setMatchedCity(null);
    setActiveActivityFilter(null);
    inputRef.current?.focus();
  };

  // Find which city was searched
  const getCityForResult = (dest: Destination, q: string): string | undefined => {
    const qLower = q.toLowerCase().trim();
    const match = Object.entries(cityAliases).find(
      ([city, country]) => country === dest.name && (city.includes(qLower) || qLower.includes(city))
    );
    return match ? match[0].charAt(0).toUpperCase() + match[0].slice(1) : undefined;
  };

  return (
    <div className="w-full relative z-20">
      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-card rounded-lg shadow-medium border border-border p-1.5">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-md bg-background">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
                setSelectedDestination(null);
                setMatchedCity(null);
              }}
              onFocus={() => { if (query) setIsOpen(true); }}
              placeholder="Sök land, stad eller aktivitet... (t.ex. Bali, surfing, Paris)"
              className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
            {query && (
              <button onClick={clearSelection} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
            <Button variant="default" size="default" className="hidden sm:flex">
              <Search className="w-4 h-4" />
              Sök
            </Button>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && query.length > 0 && !selectedDestination && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-medium border border-border overflow-hidden z-50 max-h-[400px] overflow-y-auto"
          >
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest) => {
                const city = getCityForResult(dest, query);
                return (
                  <button
                    key={dest.name}
                    onClick={() => handleSelect(dest, city)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-secondary transition-colors text-left"
                  >
                    <span className="text-2xl">{dest.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">
                        {city ? `${city}, ${dest.name}` : dest.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {dest.region} • {dest.activities.slice(0, 4).map(a => allActivities[a]?.label).join(" • ")}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{dest.visaInfo.split(",")[0]}</span>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-muted-foreground text-sm">
                <p>Ingen destination hittades för "{query}"</p>
                <p className="text-xs mt-1">Prova att söka på ett land, stad eller aktivitet</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {selectedDestination && (
        <div className="mt-10 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <span className="text-5xl mb-3 block">{selectedDestination.flag}</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {matchedCity ? `${matchedCity}, ${selectedDestination.name}` : selectedDestination.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {selectedDestination.region} • {selectedDestination.visaInfo}
              </p>
            </div>

            {/* Activities */}
            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground text-sm mb-3 text-center">
                Vad kan du göra {matchedCity ? `i ${matchedCity}` : `i ${selectedDestination.name}`}?
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedDestination.activities.map((actId) => {
                  const act = allActivities[actId];
                  if (!act) return null;
                  return (
                    <span
                      key={actId}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                    >
                      <span>{act.emoji}</span>
                      {act.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-card rounded-lg p-4 border border-border text-center">
                <FileCheck className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Visum</p>
                <p className="font-medium text-foreground text-sm">{selectedDestination.visaInfo}</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border text-center">
                <Globe className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Region</p>
                <p className="font-medium text-foreground text-sm">{selectedDestination.region}</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border text-center">
                <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Aktiviteter</p>
                <p className="font-medium text-foreground text-sm">{selectedDestination.activities.length} möjligheter</p>
              </div>
            </div>

            {/* Resources */}
            {selectedDestination.resources && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedDestination.resources.visa && selectedDestination.resources.visa.length > 0 && (
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-semibold text-foreground text-sm">Visum & Myndigheter</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedDestination.resources.visa.map((r) => (
                        <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                          <span className="text-sm text-foreground">{r.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {selectedDestination.resources.jobs && selectedDestination.resources.jobs.length > 0 && (
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-semibold text-foreground text-sm">Hitta jobb</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedDestination.resources.jobs.map((r) => (
                        <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                          <span className="text-sm text-foreground">{r.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {selectedDestination.resources.community && selectedDestination.resources.community.length > 0 && (
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-semibold text-foreground text-sm">Community</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedDestination.resources.community.map((r) => (
                        <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                          <span className="text-sm text-foreground">{r.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm mb-3">Behöver du hjälp med planering?</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="default">
                  <a href="https://www.kilroy.se" target="_blank" rel="noopener noreferrer">Boka via Kilroy</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.ef.se" target="_blank" rel="noopener noreferrer">Språkresa med EF</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activity filter chips + popular destinations when no search */}
      {!selectedDestination && !query && (
        <div className="mt-6 space-y-4">
          {/* Activity filter */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-3">Filtrera på aktivitet</p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(allActivities).slice(0, 10).map(([id, act]) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveActivityFilter(activeActivityFilter === id ? null : id);
                    setQuery(act.label);
                    setIsOpen(true);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all border ${
                    activeActivityFilter === id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary hover:bg-secondary/80 text-foreground border-border"
                  }`}
                >
                  <span>{act.emoji}</span>
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* Popular destinations */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-3">Populära destinationer</p>
            <div className="flex flex-wrap justify-center gap-2">
              {destinations.slice(0, 7).map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => handleSelect(dest)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm border border-border"
                >
                  <span>{dest.flag}</span>
                  <span className="text-foreground">{dest.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
