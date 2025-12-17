import { useState, useRef, useEffect } from "react";
import { Search, MapPin, X, ExternalLink, FileCheck, Briefcase, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

type Resource = {
  name: string;
  url: string;
  official: boolean;
};

type Destination = {
  country: string;
  flag: string;
  code: string;
  visaType: string;
  ageLimit: string;
  duration: string;
  cost: string;
  popular: string[];
  resources: {
    visa: Resource[];
    jobs: Resource[];
    community: Resource[];
  };
};

const destinations: Destination[] = [
  {
    country: "Australien",
    flag: "🇦🇺",
    code: "AU",
    visaType: "Working Holiday (subclass 417)",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$510 AUD",
    popular: ["Working Holiday", "Farm Work", "Backpacking"],
    resources: {
      visa: [
        { name: "Working Holiday Visa (417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", official: true },
        { name: "Tax File Number (TFN)", url: "https://www.ato.gov.au/individuals/tax-file-number/", official: true },
      ],
      jobs: [
        { name: "Seek", url: "https://www.seek.com.au", official: false },
        { name: "Harvest Trail - Farm Jobs", url: "https://jobsearch.gov.au/harvest", official: true },
        { name: "Backpacker Job Board", url: "https://www.backpackerjobboard.com.au", official: false },
      ],
      community: [
        { name: "Svenska i Australien (FB)", url: "https://www.facebook.com/groups/svenskaiAustralien", official: false },
        { name: "Kilroy Australien", url: "https://www.kilroy.se/australien", official: false },
      ],
    },
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    code: "NZ",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$280 NZD",
    popular: ["Working Holiday", "Äventyr", "Natur"],
    resources: {
      visa: [
        { name: "Immigration NZ - WHV", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/sweden-working-holiday-visa", official: true },
        { name: "IRD Number", url: "https://www.ird.govt.nz/", official: true },
      ],
      jobs: [
        { name: "Seek NZ", url: "https://www.seek.co.nz", official: false },
        { name: "Trade Me Jobs", url: "https://www.trademe.co.nz/jobs", official: false },
      ],
      community: [
        { name: "Svenska i Nya Zeeland (FB)", url: "https://www.facebook.com/groups/svenskarinyazeeland", official: false },
      ],
    },
  },
  {
    country: "Kanada",
    flag: "🇨🇦",
    code: "CA",
    visaType: "International Experience Canada (IEC)",
    ageLimit: "18-35 år",
    duration: "12-24 månader",
    cost: "~$250 CAD",
    popular: ["Working Holiday", "Skidorter", "Storstäder"],
    resources: {
      visa: [
        { name: "IEC Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html", official: true },
        { name: "Social Insurance Number", url: "https://www.canada.ca/en/employment-social-development/services/sin.html", official: true },
      ],
      jobs: [
        { name: "Indeed Canada", url: "https://ca.indeed.com", official: false },
        { name: "Job Bank", url: "https://www.jobbank.gc.ca", official: true },
      ],
      community: [
        { name: "Svenskar i Kanada (FB)", url: "https://www.facebook.com/groups/svenskarikanada", official: false },
        { name: "Kilroy Kanada", url: "https://www.kilroy.se/kanada", official: false },
      ],
    },
  },
  {
    country: "USA",
    flag: "🇺🇸",
    code: "US",
    visaType: "J-1 Visum (Au Pair, Summer Work)",
    ageLimit: "18-28 år",
    duration: "12-24 månader",
    cost: "Varierar per program",
    popular: ["Au Pair", "Summer Camp", "Praktik"],
    resources: {
      visa: [
        { name: "J-1 Visa Info", url: "https://j1visa.state.gov/", official: true },
        { name: "USCIS", url: "https://www.uscis.gov/", official: true },
      ],
      jobs: [
        { name: "Cultural Care Au Pair", url: "https://www.culturalcare.se", official: false },
        { name: "Camp America", url: "https://www.campamerica.co.uk", official: false },
      ],
      community: [
        { name: "Au Pair i USA (FB)", url: "https://www.facebook.com/groups/aupairiusa", official: false },
        { name: "EF USA", url: "https://www.ef.se/pg/sprakresa-usa/", official: false },
      ],
    },
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    code: "JP",
    visaType: "Working Holiday Visa",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "Gratis",
    popular: ["Kultur", "Språk", "Tech"],
    resources: {
      visa: [
        { name: "Japanska ambassaden", url: "https://www.se.emb-japan.go.jp/", official: true },
        { name: "Immigration Japan", url: "https://www.isa.go.jp/en/", official: true },
      ],
      jobs: [
        { name: "GaijinPot Jobs", url: "https://jobs.gaijinpot.com/", official: false },
        { name: "Indeed Japan", url: "https://jp.indeed.com/", official: false },
      ],
      community: [
        { name: "Svenskar i Japan (FB)", url: "https://www.facebook.com/groups/svenskarijapan", official: false },
      ],
    },
  },
  {
    country: "Sydkorea",
    flag: "🇰🇷",
    code: "KR",
    visaType: "Working Holiday Visa (H-1)",
    ageLimit: "18-30 år",
    duration: "12 månader",
    cost: "~$50 USD",
    popular: ["K-culture", "Tech", "Språk"],
    resources: {
      visa: [
        { name: "Korea Immigration", url: "https://www.immigration.go.kr/", official: true },
        { name: "Koreanska ambassaden", url: "https://overseas.mofa.go.kr/se-sv/", official: true },
      ],
      jobs: [
        { name: "Work in Korea", url: "https://www.workinkorea.go.kr/", official: true },
        { name: "Seoul Craigslist", url: "https://seoul.craigslist.org/", official: false },
      ],
      community: [
        { name: "Svenskar i Korea (FB)", url: "https://www.facebook.com/groups/svenskarikorea", official: false },
      ],
    },
  },
];

export const DestinationSearch = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.country.toLowerCase().includes(query.toLowerCase()) ||
      dest.code.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setQuery(destination.country);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelectedDestination(null);
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-card rounded-2xl shadow-glow border border-border/50 p-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
                setSelectedDestination(null);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Sök destination... (t.ex. Australien, Kanada, Japan)"
              className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
            />
            {query && (
              <button onClick={clearSelection} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            )}
            <Button variant="hero" size="lg" className="hidden sm:flex">
              <Search className="w-5 h-5" />
              Sök
            </Button>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && query.length > 0 && !selectedDestination && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-glow border border-border/50 overflow-hidden z-50"
          >
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest) => (
                <button
                  key={dest.code}
                  onClick={() => handleSelect(dest)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="text-3xl">{dest.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground">{dest.country}</p>
                    <p className="text-sm text-muted-foreground">{dest.popular.join(" • ")}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                Ingen destination hittades. Prova ett annat sökord.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {selectedDestination && (
        <div className="mt-12 animate-fade-up">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">{selectedDestination.flag}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {selectedDestination.country}
              </h2>
              <p className="text-muted-foreground">
                Allt du behöver veta för att åka till {selectedDestination.country}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: FileCheck, label: "Visumtyp", value: selectedDestination.visaType },
                { icon: Plane, label: "Ålder", value: selectedDestination.ageLimit },
                { icon: Briefcase, label: "Giltighetstid", value: selectedDestination.duration },
                { icon: Users, label: "Kostnad", value: selectedDestination.cost },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50"
                >
                  <fact.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                  <p className="font-medium text-foreground text-sm">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Visa & Official */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Visum & Myndigheter</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.visa.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Jobs */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-foreground">Hitta jobb</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.jobs.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Community & Partners</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.community.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Vill du ha hjälp med planering? Våra partners kan hjälpa dig.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero">
                  <a href="https://www.kilroy.se" target="_blank" rel="noopener noreferrer">
                    Boka via Kilroy
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.ef.se" target="_blank" rel="noopener noreferrer">
                    Språkresa med EF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popular destinations when no search */}
      {!selectedDestination && !query && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">Populära destinationer</p>
          <div className="flex flex-wrap justify-center gap-2">
            {destinations.slice(0, 6).map((dest) => (
              <button
                key={dest.code}
                onClick={() => handleSelect(dest)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm"
              >
                <span>{dest.flag}</span>
                <span className="text-foreground">{dest.country}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
