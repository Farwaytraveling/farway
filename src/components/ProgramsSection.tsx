import { Briefcase, Heart, GraduationCap, Snowflake, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    icon: Briefcase,
    title: "Working Holiday",
    description: "Australien, NZ, Kanada & Japan",
    kicker: "01 / Jobba & res",
    link: "/working-holiday",
  },
  {
    icon: Snowflake,
    title: "Skidsäsong i Alperna",
    description: "Österrike, Schweiz & Frankrike",
    kicker: "02 / Bergsliv",
    link: "/ski-season",
  },
  {
    icon: GraduationCap,
    title: "Studera utomlands",
    description: "London, Paris & Barcelona",
    kicker: "03 / Studentliv",
    link: "/studera-utomlands",
  },
  {
    icon: Heart,
    title: "Au Pair",
    description: "Europeiska storstäder & värdfamiljer",
    kicker: "04 / Bo lokalt",
    link: "/au-pair",
  },
];

export const ProgramsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="border-b border-border/60 bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Utforska möjligheter</p>
            <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Välj ditt äventyr
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Fyra tydliga vägar ut i världen — redigerade för att kännas mer som ett magasin än en vanlig infosida.
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2">
          {programs.map((program) => (
            <button
              key={program.title}
              onClick={() => navigate(program.link)}
              className="group bg-card p-7 text-left transition-colors hover:bg-secondary/40 sm:p-8"
            >
              <div className="mb-12 flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{program.kicker}</span>
                <program.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="max-w-sm">
                <h3 className="font-display text-2xl font-light leading-snug text-foreground sm:text-3xl">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{program.description}</p>
              </div>

              <div className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                <span>Läs mer</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
