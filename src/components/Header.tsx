import { Button } from "@/components/ui/button";
import { Globe, Menu, X, Plane, GraduationCap, Heart, Snowflake, Baby } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const programOptions = [
  { icon: Plane, label: "Working Holiday", description: "Australien, NZ, Kanada & Japan", href: "/working-holiday" },
  { icon: Snowflake, label: "Skidsäsong", description: "Jobba i Alperna", href: "/ski-season" },
  { icon: GraduationCap, label: "Studera Utomlands", description: "London, Paris & Barcelona", href: "/studera-utomlands" },
  { icon: Baby, label: "Au Pair", description: "Bo hos en europeisk familj", href: "/au-pair" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleProgramClick = (href: string) => {
    setDialogOpen(false);
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              Farway
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#programs", label: "Program", isRoute: false },
              { href: "#destinations", label: "Destinationer", isRoute: false },
              { href: "/karta", label: "Världskarta", isRoute: true },
            ].map((item) =>
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="default"
              className="hidden sm:flex rounded-xl shadow-sm"
              onClick={() => setDialogOpen(true)}
            >
              Kom igång
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {[
                { href: "#programs", label: "Program", isRoute: false },
                { href: "#destinations", label: "Destinationer", isRoute: false },
                { href: "/karta", label: "Världskarta", isRoute: true },
              ].map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
                  >
                    {item.label}
                  </a>
                )
              )}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
                <Button variant="default" className="flex-1" onClick={() => setDialogOpen(true)}>
                  Kom igång
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Kom igång Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Vad vill du göra?</DialogTitle>
            <DialogDescription>Välj det som passar dig bäst så hjälper vi dig vidare.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 mt-2">
            {programOptions.map((option) => (
              <button
                key={option.href}
                onClick={() => handleProgramClick(option.href)}
                className="flex items-center gap-4 p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/60 hover:border-primary/30 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">{option.label}</div>
                  <div className="text-xs text-muted-foreground">{option.description}</div>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
