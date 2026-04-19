import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Briefcase, Home, Users, ExternalLink, Lightbulb, MapPin } from "lucide-react";
import type { ResortDetail } from "@/data/skiResortDetails";

type Props = {
  resort: ResortDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ResortDetailDialog = ({ resort, open, onOpenChange }: Props) => {
  if (!resort) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <span className="text-4xl">{resort.flag}</span>
            <div className="flex-1 text-left">
              <DialogTitle className="font-display text-2xl text-foreground">
                {resort.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {resort.country} · <span className="text-primary font-medium">{resort.vibe}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          <p className="text-muted-foreground leading-relaxed">{resort.description}</p>

          {/* Best for */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Passar dig som
            </p>
            <div className="flex flex-wrap gap-2">
              {resort.bestFor.map((b) => (
                <span key={b} className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Jobb & lön</h3>
            </div>
            <div className="space-y-3">
              {resort.jobs.map((job) => (
                <div key={job.type} className="bg-muted/40 rounded-xl p-4 border border-border/40">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-foreground text-sm">{job.type}</p>
                    <span className="text-xs font-medium text-primary whitespace-nowrap">{job.salary}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">💡 {job.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Housing */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Boende</h3>
            </div>
            <div className="bg-muted/40 rounded-xl p-4 border border-border/40">
              <p className="text-sm text-muted-foreground leading-relaxed">{resort.housing.tip}</p>
              <p className="text-xs text-primary font-medium mt-2">Privat hyra: {resort.housing.priceRange}</p>
            </div>
          </section>

          {/* Job links */}
          <section>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Hitta jobb
            </p>
            <div className="space-y-2">
              {resort.jobLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </section>

          {/* Facebook groups */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Facebook-grupper</h3>
            </div>
            <div className="space-y-2">
              {resort.facebookGroups.map((g) => (
                <a
                  key={g.name}
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">{g.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </section>

          {/* Swedish tip */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Svensk insidertipp</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{resort.swedishTip}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
