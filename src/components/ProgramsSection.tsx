import { Briefcase, Heart, GraduationCap, Users, TreePine, Globe } from "lucide-react";

const programs = [
  {
    icon: Briefcase,
    title: "Working Holiday",
    description: "Jobba och res i upp till 12 månader. Perfekt för dig som vill uppleva vardagslivet i ett annat land.",
    countries: "Australien, Nya Zeeland, Kanada m.fl.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Au Pair",
    description: "Bo hos en värdfamilj och ta hand om barn. Ett unikt sätt att uppleva en ny kultur på nära håll.",
    countries: "USA, Europa, Australien",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: GraduationCap,
    title: "Studera utomlands",
    description: "Språkkurser eller universitetsstudier. Utveckla dig själv och ditt CV samtidigt.",
    countries: "Hela världen",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Users,
    title: "Volontärarbete",
    description: "Gör skillnad medan du reser. Hjälp till i projekt som engagerar dig.",
    countries: "Afrika, Asien, Sydamerika",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: TreePine,
    title: "Farm & Ranch",
    description: "Arbeta på gårdar och rancher. Upplev naturen och lär dig nya färdigheter.",
    countries: "Australien, Nya Zeeland, Kanada",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Globe,
    title: "Praktik utomlands",
    description: "Få internationell arbetslivserfarenhet inom ditt yrkesområde.",
    countries: "Europa, USA, Asien",
    color: "bg-sky-500/10 text-sky-600",
  },
];

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Utforska olika program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oavsett om du vill jobba, studera eller göra volontärarbete – vi har samlat alla alternativ på ett ställe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              <p className="text-sm text-primary font-medium">
                {program.countries}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
