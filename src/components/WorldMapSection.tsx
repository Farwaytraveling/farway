import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { X, MapPin, Plane, Globe, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type MapDestination = {
  name: string;
  flag: string;
  coordinates: [number, number];
  region: string;
  visaInfo: string;
  slug?: string; // links to /destination/:slug
  activities: { label: string; emoji: string }[];
};

const destinations: MapDestination[] = [
  // Oceanien
  { name: "Australien", flag: "🇦🇺", coordinates: [133.7751, -25.2744], region: "Oceanien", visaInfo: "Working Holiday Visa (417), 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Surfing", emoji: "🏄" }, { label: "Farm Work", emoji: "🌾" }, { label: "Backpacking", emoji: "🎒" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Nya Zeeland", flag: "🇳🇿", coordinates: [174.886, -40.9006], region: "Oceanien", visaInfo: "Working Holiday Visa, 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Vandring", emoji: "🥾" }, { label: "Backpacking", emoji: "🎒" }, { label: "Farm Work", emoji: "🌾" }] },
  { name: "Fiji", flag: "🇫🇯", coordinates: [179.4144, -17.7134], region: "Oceanien", visaInfo: "Turistvisum vid ankomst, 4 mån", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Volontär", emoji: "🤝" }, { label: "Surfing", emoji: "🏄" }] },

  // Nordamerika
  { name: "USA", flag: "🇺🇸", coordinates: [-95.7129, 37.0902], region: "Nordamerika", visaInfo: "J-1 Visum, 18-28 år", activities: [{ label: "Au Pair", emoji: "👶" }, { label: "Studera", emoji: "🎓" }, { label: "Praktik", emoji: "💻" }, { label: "Sommarsäsong", emoji: "☀️" }] },
  { name: "Kanada", flag: "🇨🇦", coordinates: [-106.3468, 56.1304], region: "Nordamerika", visaInfo: "IEC, 18-35 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }] },
  { name: "Mexiko", flag: "🇲🇽", coordinates: [-102.5528, 23.6345], region: "Nordamerika", visaInfo: "Turistvisum 180 dagar", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Surfing", emoji: "🏄" }, { label: "Språkresa", emoji: "📚" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Costa Rica", flag: "🇨🇷", coordinates: [-83.7534, 9.7489], region: "Centralamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Yoga", emoji: "🧘" }, { label: "Volontär", emoji: "🤝" }] },

  // Sydamerika
  { name: "Argentina", flag: "🇦🇷", coordinates: [-63.6167, -38.4161], region: "Sydamerika", visaInfo: "Working Holiday tillgängligt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Språkresa", emoji: "📚" }, { label: "Vandring", emoji: "🥾" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Brasilien", flag: "🇧🇷", coordinates: [-51.9253, -14.235], region: "Sydamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Backpacking", emoji: "🎒" }, { label: "Musik", emoji: "🎵" }] },
  { name: "Colombia", flag: "🇨🇴", coordinates: [-74.2973, 4.5709], region: "Sydamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Språkresa", emoji: "📚" }, { label: "Surfing", emoji: "🏄" }] },
  { name: "Peru", flag: "🇵🇪", coordinates: [-75.0152, -9.19], region: "Sydamerika", visaInfo: "Turistvisum 183 dagar", activities: [{ label: "Vandring", emoji: "🥾" }, { label: "Volontär", emoji: "🤝" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Chile", flag: "🇨🇱", coordinates: [-71.543, -35.6751], region: "Sydamerika", visaInfo: "Working Holiday tillgängligt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }] },

  // Europa
  { name: "Frankrike", flag: "🇫🇷", coordinates: [2.2137, 46.2276], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Au Pair", emoji: "👶" }, { label: "Språkresa", emoji: "📚" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Spanien", flag: "🇪🇸", coordinates: [-3.7492, 40.4637], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Språkresa", emoji: "📚" }, { label: "Au Pair", emoji: "👶" }, { label: "Surfing", emoji: "🏄" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Italien", flag: "🇮🇹", coordinates: [12.5674, 41.8719], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Kultur", emoji: "🏛️" }, { label: "Mat", emoji: "🍽️" }, { label: "Au Pair", emoji: "👶" }] },
  { name: "Portugal", flag: "🇵🇹", coordinates: [-8.2245, 39.3999], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Surfing", emoji: "🏄" }, { label: "Sommarsäsong", emoji: "☀️" }] },
  { name: "Tyskland", flag: "🇩🇪", coordinates: [10.4515, 51.1657], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Studera", emoji: "🎓" }, { label: "Praktik", emoji: "💻" }, { label: "Au Pair", emoji: "👶" }] },
  { name: "Österrike", flag: "🇦🇹", coordinates: [14.5501, 47.5162], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Grekland", flag: "🇬🇷", coordinates: [21.8243, 39.0742], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Sommarsäsong", emoji: "☀️" }, { label: "Dykning", emoji: "🤿" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Kroatien", flag: "🇭🇷", coordinates: [15.982, 45.1], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Sommarsäsong", emoji: "☀️" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Storbritannien", flag: "🇬🇧", coordinates: [-3.436, 55.3781], region: "Europa", visaInfo: "Visum krävs efter Brexit", activities: [{ label: "Studera", emoji: "🎓" }, { label: "Au Pair", emoji: "👶" }, { label: "Språkresa", emoji: "📚" }] },
  { name: "Irland", flag: "🇮🇪", coordinates: [-8.2439, 53.4129], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Studera", emoji: "🎓" }, { label: "Kultur", emoji: "🏛️" }] },

  // Asien
  { name: "Thailand", flag: "🇹🇭", coordinates: [100.9925, 15.8700], region: "Asien", visaInfo: "Tourist Visa 60-90 dagar", activities: [{ label: "Backpacking", emoji: "🎒" }, { label: "Dykning", emoji: "🤿" }, { label: "Yoga", emoji: "🧘" }, { label: "Digital Nomad", emoji: "🌐" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Japan", flag: "🇯🇵", coordinates: [138.2529, 36.2048], region: "Asien", visaInfo: "Working Holiday, 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Kultur", emoji: "🏛️" }, { label: "Skidsäsong", emoji: "⛷️" }] },
  { name: "Sydkorea", flag: "🇰🇷", coordinates: [127.7669, 35.9078], region: "Asien", visaInfo: "Working Holiday (H-1), 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Studera", emoji: "🎓" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Vietnam", flag: "🇻🇳", coordinates: [108.2772, 14.0583], region: "Asien", visaInfo: "E-Visa 90 dagar", activities: [{ label: "Backpacking", emoji: "🎒" }, { label: "Digital Nomad", emoji: "🌐" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Indonesien", flag: "🇮🇩", coordinates: [113.9213, -0.7893], region: "Asien", visaInfo: "Visa on Arrival 30 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Dykning", emoji: "🤿" }, { label: "Yoga", emoji: "🧘" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Filippinerna", flag: "🇵🇭", coordinates: [121.774, 12.8797], region: "Asien", visaInfo: "Visumfritt 30 dagar", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Surfing", emoji: "🏄" }, { label: "Backpacking", emoji: "🎒" }] },
  { name: "Nepal", flag: "🇳🇵", coordinates: [84.124, 28.3949], region: "Asien", visaInfo: "Visa on Arrival 90 dagar", activities: [{ label: "Vandring", emoji: "🥾" }, { label: "Yoga", emoji: "🧘" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Indien", flag: "🇮🇳", coordinates: [78.9629, 20.5937], region: "Asien", visaInfo: "E-Visa 60 dagar", activities: [{ label: "Yoga", emoji: "🧘" }, { label: "Backpacking", emoji: "🎒" }, { label: "Volontär", emoji: "🤝" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Sri Lanka", flag: "🇱🇰", coordinates: [80.7718, 7.8731], region: "Asien", visaInfo: "ETA 30 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Yoga", emoji: "🧘" }, { label: "Backpacking", emoji: "🎒" }] },

  // Afrika
  { name: "Sydafrika", flag: "🇿🇦", coordinates: [22.9375, -30.5595], region: "Afrika", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Surfing", emoji: "🏄" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Tanzania", flag: "🇹🇿", coordinates: [34.8888, -6.369], region: "Afrika", visaInfo: "Visa on Arrival", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Vandring", emoji: "🥾" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Kenya", flag: "🇰🇪", coordinates: [37.9062, -0.0236], region: "Afrika", visaInfo: "E-Visa", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Marocko", flag: "🇲🇦", coordinates: [-7.0926, 31.7917], region: "Afrika", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Kultur", emoji: "🏛️" }, { label: "Yoga", emoji: "🧘" }] },
  { name: "Egypten", flag: "🇪🇬", coordinates: [30.8025, 26.8206], region: "Afrika", visaInfo: "Visa on Arrival", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Kultur", emoji: "🏛️" }, { label: "Backpacking", emoji: "🎒" }] },

  // Mellanöstern
  { name: "Förenade Arabemiraten", flag: "🇦🇪", coordinates: [53.8478, 23.4241], region: "Mellanöstern", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Praktik", emoji: "💻" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Jordanien", flag: "🇯🇴", coordinates: [36.2384, 30.5852], region: "Mellanöstern", visaInfo: "Visa on Arrival", activities: [{ label: "Kultur", emoji: "🏛️" }, { label: "Vandring", emoji: "🥾" }, { label: "Dykning", emoji: "🤿" }] },
];

export const WorldMapSection = () => {
  const [selected, setSelected] = useState<MapDestination | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const handleMarkerClick = useCallback((dest: MapDestination) => {
    setSelected(dest);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium border border-primary/15">
            <Globe className="w-4 h-4" />
            <span>Utforska världen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Klicka på kartan för att utforska
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Zooma, panorera och klicka på en destination för att se vad du kan göra där
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [10, 20] }}
            style={{ width: "100%", height: "auto" }}
            height={480}
          >
            <ZoomableGroup
              minZoom={1}
              maxZoom={8}
              translateExtent={[[-200, -200], [1200, 700]]}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "hsl(var(--accent))", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {destinations.map((dest) => (
                <Marker
                  key={dest.name}
                  coordinates={dest.coordinates}
                  onClick={() => handleMarkerClick(dest)}
                  onMouseEnter={() => setHoveredName(dest.name)}
                  onMouseLeave={() => setHoveredName(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={4}
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth={1.5}
                    className="transition-all duration-200"
                    style={{
                      transform: hoveredName === dest.name ? "scale(1.6)" : "scale(1)",
                      transformOrigin: "center",
                    }}
                  />
                  {hoveredName === dest.name && (
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: "system-ui",
                        fontSize: 10,
                        fill: "hsl(var(--foreground))",
                        fontWeight: 600,
                        pointerEvents: "none",
                      }}
                    >
                      {dest.flag} {dest.name}
                    </text>
                  )}
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Zoom hint */}
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
            Scrolla för att zooma · Dra för att panorera
          </div>
        </div>
      </div>

      {/* Destination dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <span className="text-3xl">{selected?.flag}</span>
              {selected?.name}
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {selected.region}
              </div>

              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
                  <Plane className="w-4 h-4 text-primary" />
                  Visuminformation
                </div>
                <p className="text-sm text-muted-foreground">{selected.visaInfo}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Vad kan man göra?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.activities.map((act) => (
                    <Badge
                      key={act.label}
                      variant="secondary"
                      className="text-sm py-1.5 px-3"
                    >
                      <span className="mr-1.5">{act.emoji}</span>
                      {act.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
