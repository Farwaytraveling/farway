import { useState, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin, Plane, Globe, ExternalLink } from "lucide-react";
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
  slug?: string;
  icon: string; // characteristic emoji for the place
  activities: { label: string; emoji: string }[];
};

const destinations: MapDestination[] = [
  // Oceanien
  { name: "Australien", flag: "🇦🇺", icon: "🦘", coordinates: [133.7751, -25.2744], region: "Oceanien", visaInfo: "Working Holiday Visa (417), 18-30 år", slug: "australien", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Surfing", emoji: "🏄" }, { label: "Farm Work", emoji: "🌾" }, { label: "Backpacking", emoji: "🎒" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Nya Zeeland", flag: "🇳🇿", icon: "🐑", coordinates: [174.886, -40.9006], region: "Oceanien", visaInfo: "Working Holiday Visa, 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Vandring", emoji: "🥾" }, { label: "Backpacking", emoji: "🎒" }, { label: "Farm Work", emoji: "🌾" }] },
  { name: "Fiji", flag: "🇫🇯", icon: "🐠", coordinates: [179.4144, -17.7134], region: "Oceanien", visaInfo: "Turistvisum vid ankomst, 4 mån", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Volontär", emoji: "🤝" }, { label: "Surfing", emoji: "🏄" }] },

  // Nordamerika
  { name: "USA", flag: "🇺🇸", icon: "🗽", coordinates: [-95.7129, 37.0902], region: "Nordamerika", visaInfo: "J-1 Visum, 18-28 år", slug: "usa", activities: [{ label: "Au Pair", emoji: "👶" }, { label: "Studera", emoji: "🎓" }, { label: "Praktik", emoji: "💻" }, { label: "Sommarsäsong", emoji: "☀️" }] },
  { name: "Kanada", flag: "🇨🇦", icon: "🍁", coordinates: [-106.3468, 56.1304], region: "Nordamerika", visaInfo: "IEC, 18-35 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }] },
  { name: "Mexiko", flag: "🇲🇽", icon: "🌮", coordinates: [-102.5528, 23.6345], region: "Nordamerika", visaInfo: "Turistvisum 180 dagar", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Surfing", emoji: "🏄" }, { label: "Språkresa", emoji: "📚" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Costa Rica", flag: "🇨🇷", icon: "🦜", coordinates: [-83.7534, 9.7489], region: "Centralamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Yoga", emoji: "🧘" }, { label: "Volontär", emoji: "🤝" }] },

  // Sydamerika
  { name: "Argentina", flag: "🇦🇷", icon: "🥩", coordinates: [-63.6167, -38.4161], region: "Sydamerika", visaInfo: "Working Holiday tillgängligt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Språkresa", emoji: "📚" }, { label: "Vandring", emoji: "🥾" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Brasilien", flag: "🇧🇷", icon: "🎶", coordinates: [-51.9253, -14.235], region: "Sydamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Backpacking", emoji: "🎒" }, { label: "Musik", emoji: "🎵" }] },
  { name: "Colombia", flag: "🇨🇴", icon: "☕", coordinates: [-74.2973, 4.5709], region: "Sydamerika", visaInfo: "Turistvisum 90 dagar", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Språkresa", emoji: "📚" }, { label: "Surfing", emoji: "🏄" }] },
  { name: "Peru", flag: "🇵🇪", icon: "🏔️", coordinates: [-75.0152, -9.19], region: "Sydamerika", visaInfo: "Turistvisum 183 dagar", activities: [{ label: "Vandring", emoji: "🥾" }, { label: "Volontär", emoji: "🤝" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Chile", flag: "🇨🇱", icon: "🏔️", coordinates: [-71.543, -35.6751], region: "Sydamerika", visaInfo: "Working Holiday tillgängligt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }] },

  // Europa
  { name: "Frankrike", flag: "🇫🇷", icon: "🥐", coordinates: [2.2137, 46.2276], region: "Europa", visaInfo: "EU-medborgare, fritt", slug: "paris", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Au Pair", emoji: "👶" }, { label: "Språkresa", emoji: "📚" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Spanien", flag: "🇪🇸", icon: "💃", coordinates: [-3.7492, 40.4637], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Språkresa", emoji: "📚" }, { label: "Au Pair", emoji: "👶" }, { label: "Surfing", emoji: "🏄" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Italien", flag: "🇮🇹", icon: "🍕", coordinates: [12.5674, 41.8719], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Kultur", emoji: "🏛️" }, { label: "Mat", emoji: "🍽️" }, { label: "Au Pair", emoji: "👶" }] },
  { name: "Portugal", flag: "🇵🇹", icon: "🌊", coordinates: [-8.2245, 39.3999], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Digital Nomad", emoji: "🌐" }, { label: "Surfing", emoji: "🏄" }, { label: "Sommarsäsong", emoji: "☀️" }] },
  { name: "Tyskland", flag: "🇩🇪", icon: "🍺", coordinates: [10.4515, 51.1657], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Studera", emoji: "🎓" }, { label: "Praktik", emoji: "💻" }, { label: "Au Pair", emoji: "👶" }] },
  { name: "Österrike", flag: "🇦🇹", icon: "⛷️", coordinates: [14.5501, 47.5162], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Skidsäsong", emoji: "⛷️" }, { label: "Vandring", emoji: "🥾" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Grekland", flag: "🇬🇷", icon: "🏛️", coordinates: [21.8243, 39.0742], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Sommarsäsong", emoji: "☀️" }, { label: "Dykning", emoji: "🤿" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Kroatien", flag: "🇭🇷", icon: "⛵", coordinates: [15.982, 45.1], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Sommarsäsong", emoji: "☀️" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Storbritannien", flag: "🇬🇧", icon: "👑", coordinates: [-3.436, 55.3781], region: "Europa", visaInfo: "Visum krävs efter Brexit", activities: [{ label: "Studera", emoji: "🎓" }, { label: "Au Pair", emoji: "👶" }, { label: "Språkresa", emoji: "📚" }] },
  { name: "Irland", flag: "🇮🇪", icon: "🍀", coordinates: [-8.2439, 53.4129], region: "Europa", visaInfo: "EU-medborgare, fritt", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Studera", emoji: "🎓" }, { label: "Kultur", emoji: "🏛️" }] },

  // Asien
  { name: "Thailand", flag: "🇹🇭", icon: "🐘", coordinates: [100.9925, 15.8700], region: "Asien", visaInfo: "Tourist Visa 60-90 dagar", slug: "thailand", activities: [{ label: "Backpacking", emoji: "🎒" }, { label: "Dykning", emoji: "🤿" }, { label: "Yoga", emoji: "🧘" }, { label: "Digital Nomad", emoji: "🌐" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Japan", flag: "🇯🇵", icon: "🗻", coordinates: [138.2529, 36.2048], region: "Asien", visaInfo: "Working Holiday, 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Kultur", emoji: "🏛️" }, { label: "Skidsäsong", emoji: "⛷️" }] },
  { name: "Sydkorea", flag: "🇰🇷", icon: "🍜", coordinates: [127.7669, 35.9078], region: "Asien", visaInfo: "Working Holiday (H-1), 18-30 år", activities: [{ label: "Working Holiday", emoji: "💼" }, { label: "Studera", emoji: "🎓" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Vietnam", flag: "🇻🇳", icon: "🍜", coordinates: [108.2772, 14.0583], region: "Asien", visaInfo: "E-Visa 90 dagar", activities: [{ label: "Backpacking", emoji: "🎒" }, { label: "Digital Nomad", emoji: "🌐" }, { label: "Mat", emoji: "🍽️" }] },
  { name: "Indonesien", flag: "🇮🇩", icon: "🏄", coordinates: [113.9213, -0.7893], region: "Asien", visaInfo: "Visa on Arrival 30 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Dykning", emoji: "🤿" }, { label: "Yoga", emoji: "🧘" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Filippinerna", flag: "🇵🇭", icon: "🐠", coordinates: [121.774, 12.8797], region: "Asien", visaInfo: "Visumfritt 30 dagar", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Surfing", emoji: "🏄" }, { label: "Backpacking", emoji: "🎒" }] },
  { name: "Nepal", flag: "🇳🇵", icon: "🏔️", coordinates: [84.124, 28.3949], region: "Asien", visaInfo: "Visa on Arrival 90 dagar", activities: [{ label: "Vandring", emoji: "🥾" }, { label: "Yoga", emoji: "🧘" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Indien", flag: "🇮🇳", icon: "🕌", coordinates: [78.9629, 20.5937], region: "Asien", visaInfo: "E-Visa 60 dagar", activities: [{ label: "Yoga", emoji: "🧘" }, { label: "Backpacking", emoji: "🎒" }, { label: "Volontär", emoji: "🤝" }, { label: "Kultur", emoji: "🏛️" }] },
  { name: "Sri Lanka", flag: "🇱🇰", icon: "🌊", coordinates: [80.7718, 7.8731], region: "Asien", visaInfo: "ETA 30 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Yoga", emoji: "🧘" }, { label: "Backpacking", emoji: "🎒" }] },

  // Afrika
  { name: "Sydafrika", flag: "🇿🇦", icon: "🦁", coordinates: [22.9375, -30.5595], region: "Afrika", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Surfing", emoji: "🏄" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Tanzania", flag: "🇹🇿", icon: "🦒", coordinates: [34.8888, -6.369], region: "Afrika", visaInfo: "Visa on Arrival", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Vandring", emoji: "🥾" }, { label: "Dykning", emoji: "🤿" }] },
  { name: "Kenya", flag: "🇰🇪", icon: "🐘", coordinates: [37.9062, -0.0236], region: "Afrika", visaInfo: "E-Visa", activities: [{ label: "Safari", emoji: "🦁" }, { label: "Volontär", emoji: "🤝" }] },
  { name: "Marocko", flag: "🇲🇦", icon: "🐪", coordinates: [-7.0926, 31.7917], region: "Afrika", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Surfing", emoji: "🏄" }, { label: "Kultur", emoji: "🏛️" }, { label: "Yoga", emoji: "🧘" }] },
  { name: "Egypten", flag: "🇪🇬", icon: "🏺", coordinates: [30.8025, 26.8206], region: "Afrika", visaInfo: "Visa on Arrival", activities: [{ label: "Dykning", emoji: "🤿" }, { label: "Kultur", emoji: "🏛️" }, { label: "Backpacking", emoji: "🎒" }] },

  // Mellanöstern
  { name: "Förenade Arabemiraten", flag: "🇦🇪", icon: "🏙️", coordinates: [53.8478, 23.4241], region: "Mellanöstern", visaInfo: "Visumfritt 90 dagar", activities: [{ label: "Praktik", emoji: "💻" }, { label: "Digital Nomad", emoji: "🌐" }] },
  { name: "Jordanien", flag: "🇯🇴", icon: "🏜️", coordinates: [36.2384, 30.5852], region: "Mellanöstern", visaInfo: "Visa on Arrival", activities: [{ label: "Kultur", emoji: "🏛️" }, { label: "Vandring", emoji: "🥾" }, { label: "Dykning", emoji: "🤿" }] },
];

const MemoGeographies = memo(() => (
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
            hover: { outline: "none", fill: "hsl(var(--accent))" },
            pressed: { outline: "none" },
          }}
          tabIndex={-1}
        />
      ))
    }
  </Geographies>
));
MemoGeographies.displayName = "MemoGeographies";

export const WorldMapSection = () => {
  const [selected, setSelected] = useState<MapDestination | null>(null);
  const navigate = useNavigate();

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

        <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg" style={{ background: "linear-gradient(to bottom, hsl(var(--accent) / 0.3), hsl(var(--muted) / 0.5))" }}>
          {/* Ocean decorations */}
          <div className="absolute bottom-8 left-8 text-2xl opacity-30 pointer-events-none select-none">🐋</div>
          <div className="absolute bottom-12 right-24 text-xl opacity-25 pointer-events-none select-none">🐟</div>
          <div className="absolute bottom-6 left-1/3 text-lg opacity-20 pointer-events-none select-none">🌊</div>
          <div className="absolute top-16 left-16 text-lg opacity-20 pointer-events-none select-none">🌊</div>
          <div className="absolute bottom-16 right-12 text-lg opacity-20 pointer-events-none select-none">🐠</div>
          <div className="absolute top-8 right-8 text-xl opacity-25 pointer-events-none select-none">✈️</div>
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
              <MemoGeographies />

              {destinations.map((dest) => (
                <Marker
                  key={dest.name}
                  coordinates={dest.coordinates}
                  onClick={() => handleMarkerClick(dest)}
                  style={{ cursor: "pointer" }}
                >
                  <g transform="translate(-12, -12)">
                    <text fontSize={14} textAnchor="middle" x={12} y={14} style={{ pointerEvents: "none" }}>
                      {dest.flag}
                    </text>
                    <text fontSize={9} textAnchor="middle" x={12} y={26} style={{ pointerEvents: "none" }}>
                      {dest.icon}
                    </text>
                    {/* Invisible hit area */}
                    <rect x={0} y={0} width={24} height={28} fill="transparent" />
                  </g>
                  <title>{dest.flag} {dest.name} {dest.icon}</title>
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

              {selected.slug && (
                <Button
                  className="w-full mt-2"
                  onClick={() => {
                    setSelected(null);
                    navigate(`/destination/${selected.slug}`);
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Läs mer om {selected.name}
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
