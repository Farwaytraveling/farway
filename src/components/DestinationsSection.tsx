import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { country: "Australien", slug: "australien", flag: "🇦🇺", programs: 45, popular: "Working Holiday, Farm Work", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop", isRegion: false },
  { country: "Frankrike", slug: "frankrike", flag: "🇫🇷", programs: 38, popular: "Skidsäsong, Au Pair", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop", isRegion: false },
  { country: "Storbritannien", slug: "storbritannien", flag: "🇬🇧", programs: 35, popular: "Studera, Praktik", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop", isRegion: false },
  { country: "USA", slug: "usa", flag: "🇺🇸", programs: 52, popular: "Au Pair, Summer Camp", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop", isRegion: false },
  { country: "Nya Zeeland", slug: "nya-zeeland", flag: "🇳🇿", programs: 32, popular: "Working Holiday, Äventyr", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop", isRegion: false },
  
  { country: "Alperna", slug: "alperna", flag: "🏔️", programs: 30, popular: "Skidsäsong, Äventyr", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop", isRegion: true },
  { country: "Sydostasien", slug: "sydostasien", flag: "🌴", programs: 40, popular: "Backpacking, Volontär", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop", isRegion: true },
  { country: "Sydamerika", slug: "sydamerika", flag: "🌎", programs: 35, popular: "Volontär, Äventyr", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop", isRegion: true },
];

export const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Utforska världen</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Populära destinationer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Upptäck de mest populära länderna bland svenska resenärer.
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto rounded-xl">
            Alla destinationer
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              to={dest.isRegion ? `/${dest.slug}` : `/destination/${dest.slug}`}
              key={dest.country}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border/60 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                {dest.programs} program
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dest.flag}</span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {dest.country}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dest.popular.split(", ").map((tag) => (
                    <span key={tag} className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
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