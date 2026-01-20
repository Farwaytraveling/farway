import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    country: "Australien",
    flag: "🇦🇺",
    programs: 45,
    popular: "Working Holiday, Farm Work",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
  },
  {
    country: "Nya Zeeland",
    flag: "🇳🇿",
    programs: 32,
    popular: "Working Holiday, Äventyr",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop",
  },
  {
    country: "Kanada",
    flag: "🇨🇦",
    programs: 38,
    popular: "Working Holiday, Skidort",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    programs: 52,
    popular: "Au Pair, Summer Camp",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    programs: 28,
    popular: "Volontär, Språkkurs",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop",
  },
  {
    country: "Spanien",
    flag: "🇪🇸",
    programs: 35,
    popular: "Språkkurs, Au Pair",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=400&fit=crop",
  },
  {
    country: "Österrike",
    flag: "🇦🇹",
    programs: 42,
    popular: "Skidsäsong, Alperna",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop",
  },
  {
    country: "Schweiz",
    flag: "🇨🇭",
    programs: 38,
    popular: "Skidsäsong, Hotell",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
  },
  {
    country: "Italien (Alperna)",
    flag: "🇮🇹",
    programs: 35,
    popular: "Skidsäsong, Dolomterna",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&h=400&fit=crop",
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    programs: 22,
    popular: "Skidsäsong, Grandvalira",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop",
  },
];

export const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Populära destinationer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Upptäck de mest populära länderna bland svenska resenärer.
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            Alla destinationer
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.country}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 ring-1 ring-border/10 hover:ring-primary/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                {dest.programs} program
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dest.flag}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {dest.country}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dest.popular.split(", ").map((tag) => (
                    <span key={tag} className="bg-foreground/10 text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
