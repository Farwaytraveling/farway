import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import alpernaAfterski from "@/assets/alperna-afterski.jpg";

const destinations = [
  { country: "Australien", slug: "australien", flag: "🇦🇺", tags: ["Working Holiday"], image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop", isRegion: false },
  { country: "USA", slug: "usa", flag: "🇺🇸", tags: ["Au Pair", "Studier"], image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop", isRegion: false },
  { country: "Nya Zeeland", slug: "nya-zeeland", flag: "🇳🇿", tags: ["Working Holiday"], image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop", isRegion: false },
  { country: "Alperna", slug: "alperna", flag: "🏔️", tags: ["Skidsäsong"], image: alpernaAfterski, isRegion: true },
  { country: "Storstäder i Europa", slug: "karta", flag: "🇪🇺", tags: ["Barcelona", "London", "Paris"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop", isRegion: true, customPath: "/karta" },
  { country: "Sydostasien", slug: "sydostasien", flag: "🌴", tags: ["Backpacking"], image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop", isRegion: true },
  { country: "Sydamerika", slug: "sydamerika", flag: "🌎", tags: ["Äventyr"], image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop", isRegion: true },
];

export const DestinationsSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Card grid — ednia style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((dest) => (
            <Link
              to={dest.customPath ?? (dest.isRegion ? `/${dest.slug}` : `/destination/${dest.slug}`)}
              key={dest.country}
              className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:shadow-medium transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {dest.country}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
