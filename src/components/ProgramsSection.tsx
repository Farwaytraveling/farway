import { Briefcase, Heart, GraduationCap, Users, TreePine, Globe, ExternalLink, FileText, Users2, Building } from "lucide-react";

const programs = [
  {
    icon: Briefcase,
    title: "Working Holiday",
    description: "Jobba och res i upp till 12 månader. Perfekt för dig som vill uppleva vardagslivet i ett annat land.",
    color: "bg-primary/10 text-primary",
    resources: [
      { name: "Migrationsverket - Working Holiday", url: "https://www.migrationsverket.se", type: "official" },
      { name: "Australien WHV ansökan", url: "https://immi.homeaffairs.gov.au", type: "official" },
      { name: "Workaway", url: "https://www.workaway.info", type: "platform" },
      { name: "Facebook: Svenska i Australien", url: "https://facebook.com/groups", type: "community" },
    ],
  },
  {
    icon: Heart,
    title: "Au Pair",
    description: "Bo hos en värdfamilj och ta hand om barn. Ett unikt sätt att uppleva en ny kultur på nära håll.",
    color: "bg-accent/10 text-accent",
    resources: [
      { name: "Au Pair World", url: "https://www.aupairworld.com", type: "platform" },
      { name: "Cultural Care Au Pair", url: "https://www.culturalcare.com", type: "platform" },
      { name: "US J-1 Visum info", url: "https://j1visa.state.gov", type: "official" },
      { name: "Facebook: Au Pair Sverige", url: "https://facebook.com/groups", type: "community" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Studera utomlands",
    description: "Språkkurser eller universitetsstudier. Utveckla dig själv och ditt CV samtidigt.",
    color: "bg-emerald-500/10 text-emerald-600",
    resources: [
      { name: "CSN - Studier utomlands", url: "https://www.csn.se", type: "official" },
      { name: "Universityadmissions.se", url: "https://www.universityadmissions.se", type: "official" },
      { name: "EF Education First", url: "https://www.ef.se", type: "platform" },
      { name: "Erasmus+", url: "https://erasmus-plus.ec.europa.eu", type: "official" },
    ],
  },
  {
    icon: Users,
    title: "Volontärarbete",
    description: "Gör skillnad medan du reser. Hjälp till i projekt som engagerar dig.",
    color: "bg-violet-500/10 text-violet-600",
    resources: [
      { name: "Workaway", url: "https://www.workaway.info", type: "platform" },
      { name: "WWOOF", url: "https://wwoof.net", type: "platform" },
      { name: "Volunteer World", url: "https://www.volunteerworld.com", type: "platform" },
      { name: "Facebook: Volontär utomlands", url: "https://facebook.com/groups", type: "community" },
    ],
  },
  {
    icon: TreePine,
    title: "Farm & Ranch",
    description: "Arbeta på gårdar och rancher. Upplev naturen och lär dig nya färdigheter.",
    color: "bg-amber-500/10 text-amber-600",
    resources: [
      { name: "WWOOF", url: "https://wwoof.net", type: "platform" },
      { name: "HelpX", url: "https://www.helpx.net", type: "platform" },
      { name: "Workaway Farm", url: "https://www.workaway.info", type: "platform" },
      { name: "Facebook: Farm Work Abroad", url: "https://facebook.com/groups", type: "community" },
    ],
  },
  {
    icon: Globe,
    title: "Praktik utomlands",
    description: "Få internationell arbetslivserfarenhet inom ditt yrkesområde.",
    color: "bg-sky-500/10 text-sky-600",
    resources: [
      { name: "AIESEC", url: "https://aiesec.org", type: "platform" },
      { name: "Erasmus+ Praktik", url: "https://erasmus-plus.ec.europa.eu", type: "official" },
      { name: "LinkedIn Jobs", url: "https://linkedin.com/jobs", type: "platform" },
      { name: "Arbetsförmedlingen utland", url: "https://arbetsformedlingen.se", type: "official" },
    ],
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "official":
      return <Building className="w-3 h-3" />;
    case "platform":
      return <FileText className="w-3 h-3" />;
    case "community":
      return <Users2 className="w-3 h-3" />;
    default:
      return <ExternalLink className="w-3 h-3" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "official":
      return "Myndighet";
    case "platform":
      return "Plattform";
    case "community":
      return "Community";
    default:
      return "Länk";
  }
};

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Utforska olika program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi har samlat alla viktiga resurser, länkar till myndigheter, plattformar och communities på ett ställe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all"
            >
              <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4`}>
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {program.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Viktiga resurser
                </p>
                {program.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/link"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        {getTypeIcon(resource.type)}
                      </span>
                      <span className="text-sm text-foreground group-hover/link:text-primary transition-colors">
                        {resource.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground bg-background/50 px-2 py-0.5 rounded">
                        {getTypeLabel(resource.type)}
                      </span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
