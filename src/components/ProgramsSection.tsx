import { Briefcase, Heart, GraduationCap, Users, Snowflake, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    icon: Briefcase,
    title: "Working Holiday",
    description: "Jobba och res i upp till 12 månader",
    emoji: "🧳",
    gradient: "from-orange-500 to-amber-500",
    link: "/working-holiday",
  },
  {
    icon: Heart,
    title: "Au Pair",
    description: "Bo hos en värdfamilj och ta hand om barn",
    emoji: "👨‍👩‍👧",
    gradient: "from-rose-500 to-pink-500",
    link: "/au-pair",
  },
  {
    icon: GraduationCap,
    title: "Studera utomlands",
    description: "Språkkurser eller universitetsstudier",
    emoji: "📚",
    gradient: "from-emerald-500 to-teal-500",
    link: "/studera-utomlands",
  },
  {
    icon: Users,
    title: "Volontärarbete",
    description: "Gör skillnad medan du reser",
    emoji: "🌍",
    gradient: "from-violet-500 to-purple-500",
    link: "/volontararbete",
  },
  {
    icon: Snowflake,
    title: "Skidsäsong",
    description: "Jobba på skidorter världen över",
    emoji: "⛷️",
    gradient: "from-sky-400 to-indigo-500",
    link: "/ski-season",
  },
  {
    icon: Globe,
    title: "Praktik utomlands",
    description: "Få internationell arbetslivserfarenhet",
    emoji: "💼",
    gradient: "from-sky-500 to-blue-500",
    link: "/praktik-utomlands",
  },
];

export const ProgramsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Utforska möjligheter</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Välj ditt äventyr
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Sex unika sätt att upptäcka världen — vilket passar dig?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group cursor-pointer"
              onClick={() => navigate(program.link)}
            >
              <div className="relative bg-card rounded-2xl border border-border/60 p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
