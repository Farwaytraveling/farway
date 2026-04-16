import { Briefcase, Heart, GraduationCap, Snowflake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const filters = [
  { icon: Briefcase, label: "Working Holiday", href: "/working-holiday" },
  { icon: Snowflake, label: "Skidsäsong", href: "/ski-season" },
  { icon: GraduationCap, label: "Studera utomlands", href: "/studera-utomlands" },
  { icon: Heart, label: "Au Pair", href: "/au-pair" },
];

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Welcome hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>Farway</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
            Hitta din väg<br />
            <span className="italic text-primary">ut i världen.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed font-bold" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
            Utforska program, destinationer och möjligheter för dig som vill jobba, studera eller uppleva något nytt utomlands.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-border/40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-hide">
            <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-primary border-b-2 border-primary shrink-0 transition-all">
              <span className="text-xs font-medium whitespace-nowrap">Alla program</span>
            </button>
            {filters.map((f) => (
              <button
                key={f.label}
                onClick={() => navigate(f.href)}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 shrink-0 transition-all"
              >
                <f.icon className="w-5 h-5" />
                <span className="text-xs font-medium whitespace-nowrap">{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
