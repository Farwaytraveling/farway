import { Briefcase, Heart, GraduationCap, Users, Snowflake, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    icon: Briefcase,
    title: "Working Holiday",
    description: "Jobba och res i upp till 12 månader",
    gradient: "from-orange-500 to-amber-500",
    link: "/working-holiday",
  },
  {
    icon: Heart,
    title: "Au Pair",
    description: "Bo hos en värdfamilj och ta hand om barn",
    gradient: "from-rose-500 to-pink-500",
    link: "/au-pair",
  },
  {
    icon: GraduationCap,
    title: "Studera utomlands",
    description: "Språkkurser eller universitetsstudier",
    gradient: "from-emerald-500 to-teal-500",
    link: null,
  },
  {
    icon: Users,
    title: "Volontärarbete",
    description: "Gör skillnad medan du reser",
    gradient: "from-violet-500 to-purple-500",
    link: null,
  },
  {
    icon: Snowflake,
    title: "Skidsäsong",
    description: "Jobba på skidorter världen över",
    gradient: "from-sky-400 to-indigo-500",
    link: null,
  },
  {
    icon: Globe,
    title: "Praktik utomlands",
    description: "Få internationell arbetslivserfarenhet",
    gradient: "from-sky-500 to-blue-500",
    link: null,
  },
];

export const ProgramsSection = () => {
  const navigate = useNavigate();

  const handleProgramClick = (link: string | null) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <section id="programs" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Välj ditt program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hitta det äventyr som passar dig bäst.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group cursor-pointer"
              onClick={() => handleProgramClick(program.link)}
            >
              <div className={`relative bg-gradient-to-br ${program.gradient} rounded-2xl p-6 h-full flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-1">
                  {program.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
