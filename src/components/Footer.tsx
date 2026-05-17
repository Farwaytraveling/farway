import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import farwayLogo from "@/assets/farway-logo.png";

const footerLinks = {
  program: [
    { label: "Working Holiday", href: "/working-holiday" },
    { label: "Au Pair", href: "/au-pair" },
    { label: "Skidsäsong", href: "/ski-season" },
    { label: "Studera utomlands", href: "/studera-utomlands" },
    { label: "Budgeträknaren", href: "/budget" },
  ],
  regions: [
    { label: "Alperna", href: "/alperna" },
    { label: "Sydostasien", href: "/sydostasien" },
    { label: "Sydamerika", href: "/sydamerika" },
    { label: "Karta över världen", href: "/karta" },
  ],
  destinations: [
    { label: "Australien", href: "/destination/australien" },
    { label: "Frankrike", href: "/destination/frankrike" },
    { label: "Storbritannien", href: "/destination/storbritannien" },
    { label: "Spanien", href: "/destination/spanien" },
    { label: "Thailand", href: "/destination/thailand" },
    { label: "Italien", href: "/destination/italien" },
    { label: "Portugal", href: "/destination/portugal" },
    { label: "USA", href: "/destination/usa" },
    { label: "Nya Zeeland", href: "/destination/nya-zeeland" },
    { label: "Vietnam", href: "/destination/vietnam" },
    { label: "Indonesien", href: "/destination/indonesien" },
    { label: "Kambodja", href: "/destination/kambodja" },
    { label: "Filippinerna", href: "/destination/filippinerna" },
    { label: "Myanmar", href: "/destination/myanmar" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4 group" aria-label="Farway – startsida">
              <img
                src={farwayLogo}
                alt="Farway – din väg ut i världen"
                className="h-12 w-auto object-contain"
                width={192}
                height={48}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Sveriges samlade guide för dig som vill jobba, studera eller resa utomlands. Helt gratis, utan inloggning.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/farwaytraveling/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Farway på Instagram"
                className="w-9 h-9 rounded-lg bg-card border border-border/60 hover:border-primary/30 hover:text-primary flex items-center justify-center transition-all text-muted-foreground"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:farwaytravelling@gmail.com"
                aria-label="Mejla Farway"
                className="w-9 h-9 rounded-lg bg-card border border-border/60 hover:border-primary/30 hover:text-primary flex items-center justify-center transition-all text-muted-foreground"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Program</h4>
            <ul className="space-y-2.5">
              {footerLinks.program.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regioner */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Regioner</h4>
            <ul className="space-y-2.5">
              {footerLinks.regions.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinationer & Kontakt */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Destinationer</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.destinations.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:farwaytravelling@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  Kontakta oss
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Farway. All information på sidan är vägledande och kan ändras – kontrollera alltid hos officiella myndigheter innan du reser.
          </p>
          <p className="text-xs text-muted-foreground">
            Gjord med ❤️ i Sverige
          </p>
        </div>
      </div>
    </footer>
  );
};
