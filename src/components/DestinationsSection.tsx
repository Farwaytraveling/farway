import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { country: "Australien", slug: "australien", flag: "🇦🇺", popular: "Working Holiday", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=900&h=700&fit=crop", isRegion: false },
  { country: "USA", slug: "usa", flag: "🇺🇸", popular: "Au Pair & Studier", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=700&h=520&fit=crop", isRegion: false },
  { country: "Nya Zeeland", slug: "nya-zeeland", flag: "🇳🇿", popular: "Working Holiday", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=700&h=520&fit=crop", isRegion: false },
  { country: "Alperna", slug: "alperna", flag: "🏔️", popular: "Skidsäsong", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&h=520&fit=crop", isRegion: true },
  { country: "Paris", slug: "paris", flag: "🗼", popular: "Au Pair & Studier", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=700&h=520&fit=crop", isRegion: false },
  { country: "Sydostasien", slug: "sydostasien", flag: "🌴", popular: "Backpacking", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=700&h=520&fit=crop", isRegion: true },
  { country: "Sydamerika", slug: "sydamerika", flag: "🌎", popular: "Äventyr", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=700&h=520&fit=crop", isRegion: true },
];

export const DestinationsSection = () => {
  const [featured, ...rest] = destinations;

  return (
    <section id="destinations" className="bg-accent/20 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Utvalda destinationer</p>
            <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Populära destinationer
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              En mer kurerad känsla — mindre katalog, mer väl valda spår att börja med.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <Link
            to={featured.isRegion ? `/${featured.slug}` : `/destination/${featured.slug}`}
            className="group relative overflow-hidden border border-border/60 bg-card lg:col-span-7"
          >
            <div className="absolute left-5 top-5 z-10 bg-background/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              Mest efterfrågad
            </div>
            <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
              <img src={featured.image} alt={featured.country} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/80">{featured.popular}</p>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="mb-2 block text-4xl">{featured.flag}</span>
                  <h3 className="font-display text-3xl font-light text-primary-foreground sm:text-4xl">{featured.country}</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5">
            {rest.map((dest) => (
              <Link
                to={dest.isRegion ? `/${dest.slug}` : `/destination/${dest.slug}`}
                key={dest.country}
                className="group overflow-hidden border border-border/60 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={dest.image} alt={dest.country} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="border-t border-border/60 p-5">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{dest.popular}</p>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-light text-foreground">{dest.country}</h3>
                    <span className="text-2xl">{dest.flag}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
