import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DestinationSearch } from "./DestinationSearch";
import farwayLogo from "@/assets/farway-logo.png";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Farway – startsida">
          <img
            src={farwayLogo}
            alt="Farway"
            className="h-10 w-auto object-contain"
            width={160}
            height={40}
          />
        </Link>

        {/* Center search — hidden on mobile, shown on sm+ */}
        <div className="hidden sm:flex flex-1 max-w-lg mx-auto">
          <DestinationSearch variant="header" />
        </div>

        {/* Right nav */}
        <nav className="hidden md:flex items-center gap-1 shrink-0">
          {[
            { href: "/working-holiday", label: "Working Holiday" },
            { href: "/ski-season", label: "Skidsäsong" },
            { href: "/studera-utomlands", label: "Studera" },
            { href: "/au-pair", label: "Au Pair" },
            { href: "/budget", label: "Budget" },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile search */}
      <div className="sm:hidden border-t border-border/30 px-4 py-2">
        <DestinationSearch variant="header" />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {[
              { href: "/working-holiday", label: "Working Holiday" },
              { href: "/ski-season", label: "Skidsäsong" },
              { href: "/studera-utomlands", label: "Studera utomlands" },
              { href: "/au-pair", label: "Au Pair" },
              { href: "/budget", label: "Budgeträknaren" },
              { href: "/karta", label: "Världskarta" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-muted/60 transition-all text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
