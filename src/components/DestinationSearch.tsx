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
    country: "Thailand",
    flag: "🇹🇭",
    code: "TH",
    visaType: "Tourist Visa / Education Visa",
    ageLimit: "18+ år",
    duration: "60-90 dagar (förlängningsbar)",
    cost: "~$40 USD",
    popular: ["Backpacking", "Volontär", "Dykning"],
    resources: {
      visa: [
        { name: "Thai E-Visa", url: "https://www.thaievisa.go.th/", official: true },
        { name: "Thai ambassaden Stockholm", url: "https://stockholm.thaiembassy.org/", official: true },
      ],
      jobs: [
        { name: "Workaway Thailand", url: "https://www.workaway.info/en/hostlist/asia/th", official: false },
        { name: "PADI Divemaster", url: "https://www.padi.com/", official: false },
      ],
      community: [
        { name: "Svenskar i Thailand (FB)", url: "https://www.facebook.com/groups/svenskarithailand", official: false },
        { name: "Kilroy Thailand", url: "https://www.kilroy.se/thailand", official: false },
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
    country: "Frankrike",
    flag: "🇫🇷",
    code: "FR",
    visaType: "EU-medborgare (fritt)",
    ageLimit: "Alla åldrar",
    duration: "Obegränsad",
    cost: "Gratis",
    popular: ["Språkresa", "Au Pair", "Säsongsarbete"],
    resources: {
      visa: [
        { name: "EU-rätt att arbeta", url: "https://europa.eu/youreurope/citizens/work/work-abroad/index_sv.htm", official: true },
        { name: "Franska ambassaden", url: "https://se.ambafrance.org/", official: true },
      ],
      jobs: [
        { name: "Pôle Emploi", url: "https://www.pole-emploi.fr/", official: true },
        { name: "Indeed France", url: "https://www.indeed.fr/", official: false },
      ],
      community: [
        { name: "Svenskar i Frankrike (FB)", url: "https://www.facebook.com/groups/svenskarifrankrike", official: false },
        { name: "EF Frankrike", url: "https://www.ef.se/pg/sprakresa-frankrike/", official: false },
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
  {
    country: "Vietnam",
    flag: "🇻🇳",
    code: "VN",
    visaType: "E-Visa / Business Visa",
    ageLimit: "18+ år",
    duration: "90 dagar (förlängningsbar)",
    cost: "~$25-50 USD",
    popular: ["Digital Nomad", "Engelskundervisning", "Volontär"],
    resources: {
      visa: [
        { name: "Vietnam E-Visa Portal", url: "https://evisa.xuatnhapcanh.gov.vn/", official: true },
        { name: "Vietnamesiska ambassaden", url: "https://vietnamembassy.se/", official: true },
      ],
      jobs: [
        { name: "VietnamWorks", url: "https://www.vietnamworks.com/", official: false },
        { name: "Teach Away Vietnam", url: "https://www.teachaway.com/teach-vietnam", official: false },
      ],
      community: [
        { name: "Svenskar i Vietnam (FB)", url: "https://www.facebook.com/groups/svenskarivietnam", official: false },
        { name: "Digital Nomads Vietnam", url: "https://www.facebook.com/groups/digitalnomadsvietnam", official: false },
      ],
    },
  },
  {
    country: "Österrike",
    flag: "🇦🇹",
    code: "AT",
    visaType: "EU-medborgare (fritt)",
    ageLimit: "Alla åldrar",
    duration: "Obegränsad",
    cost: "Gratis",
    popular: ["Skidsäsong", "Alperna", "Säsongsarbete"],
    resources: {
      visa: [
        { name: "EU-rätt att arbeta", url: "https://europa.eu/youreurope/citizens/work/work-abroad/index_sv.htm", official: true },
        { name: "Österrikiska ambassaden", url: "https://www.bmeia.gv.at/sv/ambassad/stockholm/", official: true },
      ],
      jobs: [
        { name: "Seasonaires", url: "https://www.seasonaires.com/ski-jobs/austria/", official: false },
        { name: "AMS Österrike", url: "https://www.ams.at/", official: true },
        { name: "Natives - Ski Jobs", url: "https://www.natives.co.uk/", official: false },
      ],
      community: [
        { name: "Svenskar i Österrike (FB)", url: "https://www.facebook.com/groups/svenskarioesterrike", official: false },
        { name: "Säsongsarbete Alperna (FB)", url: "https://www.facebook.com/groups/sasongsarbetealperna", official: false },
      ],
    },
  },
  {
    country: "Schweiz",
    flag: "🇨🇭",
    code: "CH",
    visaType: "Uppehållstillstånd krävs",
    ageLimit: "18+ år",
    duration: "Säsongsbaserat",
    cost: "Varierar",
    popular: ["Skidsäsong", "Alperna", "Hotell & Restaurang"],
    resources: {
      visa: [
        { name: "Swiss Permit Info", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt.html", official: true },
        { name: "Schweiziska ambassaden", url: "https://www.eda.admin.ch/countries/sweden/sv/home.html", official: true },
      ],
      jobs: [
        { name: "Jobs.ch", url: "https://www.jobs.ch/", official: false },
        { name: "Seasonaires Schweiz", url: "https://www.seasonaires.com/ski-jobs/switzerland/", official: false },
        { name: "Hotelleriejobs", url: "https://www.hotelleriejobs.ch/", official: false },
      ],
      community: [
        { name: "Svenskar i Schweiz (FB)", url: "https://www.facebook.com/groups/svenskarischweiz", official: false },
        { name: "Säsongsarbete Alperna (FB)", url: "https://www.facebook.com/groups/sasongsarbetealperna", official: false },
      ],
    },
  },
  {
    country: "Italien (Alperna)",
    flag: "🇮🇹",
    code: "IT",
    visaType: "EU-medborgare (fritt)",
    ageLimit: "Alla åldrar",
    duration: "Obegränsad",
    cost: "Gratis",
    popular: ["Skidsäsong", "Dolomterna", "Säsongsarbete"],
    resources: {
      visa: [
        { name: "EU-rätt att arbeta", url: "https://europa.eu/youreurope/citizens/work/work-abroad/index_sv.htm", official: true },
        { name: "Italienska ambassaden", url: "https://ambstoccolma.esteri.it/", official: true },
      ],
      jobs: [
        { name: "Seasonaires Italien", url: "https://www.seasonaires.com/ski-jobs/italy/", official: false },
        { name: "Indeed Italia", url: "https://it.indeed.com/", official: false },
        { name: "Ski Staff", url: "https://www.skistaff.co.uk/", official: false },
      ],
      community: [
        { name: "Svenskar i Italien (FB)", url: "https://www.facebook.com/groups/svenskaritalien", official: false },
        { name: "Säsongsarbete Alperna (FB)", url: "https://www.facebook.com/groups/sasongsarbetealperna", official: false },
      ],
    },
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    code: "AD",
    visaType: "Arbetstillstånd krävs",
    ageLimit: "18+ år",
    duration: "Säsongsbaserat",
    cost: "Varierar",
    popular: ["Skidsäsong", "Grandvalira", "Skattefritt"],
    resources: {
      visa: [
        { name: "Andorra Immigration", url: "https://www.immigracio.ad/", official: true },
        { name: "Spanska ambassaden (närmaste)", url: "https://www.exteriores.gob.es/Embajadas/estocolmo/", official: true },
      ],
      jobs: [
        { name: "Grandvalira Careers", url: "https://www.grandvalira.com/en/work-with-us", official: true },
        { name: "Seasonaires Andorra", url: "https://www.seasonaires.com/ski-jobs/andorra/", official: false },
        { name: "Treball Andorra", url: "https://www.treball.ad/", official: true },
      ],
      community: [
        { name: "Season Workers Andorra (FB)", url: "https://www.facebook.com/groups/seasonworkersandorra", official: false },
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
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Sök destination... (t.ex. Australien, Kanada)"
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
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-medium border border-border overflow-hidden z-50"
          >
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest) => (
                <button
                  key={dest.code}
                  onClick={() => handleSelect(dest)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-secondary transition-colors text-left"
                >
                  <span className="text-2xl">{dest.flag}</span>
                  <div>
                    <p className="font-medium text-foreground">{dest.country}</p>
                    <p className="text-xs text-muted-foreground">{dest.popular.join(" • ")}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground text-sm">
                Ingen destination hittades.
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
                {selectedDestination.country}
              </h2>
              <p className="text-muted-foreground text-sm">
                Resurser och information för {selectedDestination.country}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: FileCheck, label: "Visumtyp", value: selectedDestination.visaType },
                { icon: Plane, label: "Ålder", value: selectedDestination.ageLimit },
                { icon: Briefcase, label: "Giltighetstid", value: selectedDestination.duration },
                { icon: Users, label: "Kostnad", value: selectedDestination.cost },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="bg-card rounded-lg p-3 border border-border"
                >
                  <fact.icon className="w-4 h-4 text-primary mb-1.5" />
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                  <p className="font-medium text-foreground text-sm">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Visa & Official */}
              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm">Visum & Myndigheter</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.visa.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
                    >
                      <span className="text-sm text-foreground">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Jobs */}
              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-foreground text-sm">Hitta jobb</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.jobs.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
                    >
                      <span className="text-sm text-foreground">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm">Community & Partners</h3>
                </div>
                <div className="space-y-2">
                  {selectedDestination.resources.community.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
                    >
                      <span className="text-sm text-foreground">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm mb-3">
                Behöver du hjälp med planering?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="default">
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
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground mb-3">Populära destinationer</p>
          <div className="flex flex-wrap justify-center gap-2">
            {destinations.slice(0, 5).map((dest) => (
              <button
                key={dest.code}
                onClick={() => handleSelect(dest)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
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
