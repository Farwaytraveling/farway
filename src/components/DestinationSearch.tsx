import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ExternalLink, FileCheck, Briefcase, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { name: "Kanada", flag: "🇨🇦", region: "Nordamerika", visaInfo: "Working Holiday (IEC), 18-35 år", activities: ["working-holiday"],
    resources: { visa: [{ name: "IEC Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html", official: true }] } },
  { name: "Japan", flag: "🇯🇵", region: "Asien", visaInfo: "Working Holiday, 18-30 år", activities: ["working-holiday"],
    resources: { visa: [{ name: "Japanska ambassaden", url: "https://www.se.emb-japan.go.jp/", official: true }], jobs: [{ name: "GaijinPot Jobs", url: "https://jobs.gaijinpot.com/", official: false }] } },
  { name: "Österrike", flag: "🇦🇹", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["skidsasong"],
    resources: { jobs: [{ name: "Seasonaires Österrike", url: "https://www.seasonaires.com/ski-jobs/austria/", official: false }, { name: "AMS Österrike", url: "https://www.ams.at/", official: true }] } },
  { name: "Schweiz", flag: "🇨🇭", region: "Europa", visaInfo: "EU-medborgare kan jobba fritt", activities: ["skidsasong"],
    resources: { jobs: [{ name: "Seasonaires Schweiz", url: "https://www.seasonaires.com/ski-jobs/switzerland/", official: false }] } },
  { name: "Frankrike", flag: "🇫🇷", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["skidsasong", "au-pair", "studera"] },
  { name: "Storbritannien", flag: "🇬🇧", region: "Europa", visaInfo: "Youth Mobility Scheme, 18-30 år", activities: ["au-pair", "studera"] },
  { name: "Spanien", flag: "🇪🇸", region: "Europa", visaInfo: "EU-medborgare, fritt", activities: ["au-pair", "studera"] },
];

const cityAliases: Record<string, string> = {
  "sydney": "Australien", "melbourne": "Australien", "gold coast": "Australien", "cairns": "Australien", "brisbane": "Australien", "perth": "Australien",
  "auckland": "Nya Zeeland", "queenstown": "Nya Zeeland", "wellington": "Nya Zeeland",
  "new york": "USA", "los angeles": "USA", "miami": "USA", "san francisco": "USA",
  "toronto": "Kanada", "vancouver": "Kanada", "montreal": "Kanada",
  "paris": "Frankrike", "lyon": "Frankrike", "chamonix": "Frankrike",
  "barcelona": "Spanien", "madrid": "Spanien",
  "london": "Storbritannien", "edinburgh": "Storbritannien",
  "wien": "Österrike", "innsbruck": "Österrike", "st. anton": "Österrike",
  "zürich": "Schweiz", "zermatt": "Schweiz", "verbier": "Schweiz",
  "tokyo": "Japan", "kyoto": "Japan", "osaka": "Japan",
  "bangkok": "Thailand", "bali": "Indonesien", "rio de janeiro": "Brasilien",
  "buenos aires": "Argentina", "lima": "Peru", "bogotá": "Colombia",
};

interface DestinationSearchProps {
  variant?: "header" | "full";
}

export const DestinationSearch = ({ variant = "full" }: DestinationSearchProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase().trim();

    const cityMatch = Object.entries(cityAliases).find(([city]) => city.includes(q) || q.includes(city));

    let results = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(q) ||
        dest.region.toLowerCase().includes(q) ||
        dest.activities.some(a => allActivities[a]?.label.toLowerCase().includes(q))
    );

    if (cityMatch) {
      const countryName = cityMatch[1];
      const country = destinations.find(d => d.name === countryName);
      if (country && !results.find(r => r.name === country.name)) {
        results.unshift(country);
      }
    }

    return results.slice(0, 8);
  }, [query]);

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

  const handleSelect = (destination: Destination) => {
    if (destination.slug) {
      if (destination.slug.startsWith("_")) {
        navigate(`/${destination.slug.slice(1)}`);
      } else {
        navigate(`/destination/${destination.slug}`);
      }
    }
    setQuery("");
    setIsOpen(false);
  };

  const getCityForResult = (dest: Destination, q: string): string | undefined => {
    const qLower = q.toLowerCase().trim();
    const match = Object.entries(cityAliases).find(
      ([city, country]) => country === dest.name && (city.includes(qLower) || qLower.includes(city))
    );
    return match ? match[0].charAt(0).toUpperCase() + match[0].slice(1) : undefined;
  };

  const isHeader = variant === "header";

  return (
    <div className="w-full relative">
      <div className={`flex items-center gap-2 ${isHeader ? "bg-muted/60 rounded-full px-3 py-1.5" : "bg-card rounded-xl border border-border px-4 py-3"}`}>
        <Search className={`${isHeader ? "w-4 h-4" : "w-5 h-5"} text-muted-foreground shrink-0`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => { if (query) setIsOpen(true); }}
          placeholder={isHeader ? "Sök destination..." : "Sök land, stad eller aktivitet..."}
          className={`w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground ${isHeader ? "text-sm" : "text-base"}`}
        />
        {query && (
          <button onClick={() => { setQuery(""); setIsOpen(false); }} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && query.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-[100] max-h-[360px] overflow-y-auto"
        >
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest) => {
              const city = getCityForResult(dest, query);
              return (
                <button
                  key={dest.name}
                  onClick={() => handleSelect(dest)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors text-left"
                >
                  <span className="text-xl">{dest.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">
                      {city ? `${city}, ${dest.name}` : dest.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {dest.region} · {dest.activities.slice(0, 3).map(a => allActivities[a]?.label).filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-4 text-center text-muted-foreground text-sm">
              Ingen destination hittades för "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
