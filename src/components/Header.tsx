import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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
            { href: "#programs", label: "Program" },
            { href: "#destinations", label: "Destinationer" },
            { href: "#how-it-works", label: "Så fungerar det" },
            { href: "#testimonials", label: "Omdömen" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:flex text-sm font-medium">
            Logga in
          </Button>
          <Button variant="default" size="default" className="hidden sm:flex rounded-xl shadow-sm">
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
              { href: "#programs", label: "Program" },
              { href: "#destinations", label: "Destinationer" },
              { href: "#how-it-works", label: "Så fungerar det" },
              { href: "#testimonials", label: "Omdömen" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-muted/60 transition-all text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
              <Button variant="outline" className="flex-1">Logga in</Button>
              <Button variant="default" className="flex-1">Kom igång</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
