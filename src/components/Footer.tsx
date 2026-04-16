import { Globe, Instagram, Facebook, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  program: [
    { label: "Working Holiday", href: "/working-holiday" },
    { label: "Skidsäsong i Alperna", href: "/ski-season" },
    { label: "Studera utomlands", href: "/studera-utomlands" },
    { label: "Au Pair", href: "/au-pair" },
  ],
  destinations: ["Australien", "Nya Zeeland", "USA", "Paris", "Alperna", "Sydostasien", "Sydamerika"],
  company: ["Om oss", "Blogg", "Integritetspolicy"],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Farway
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Sveriges ledande jämförelsetjänst för Working Holiday, Au Pair och andra utlandsprogram.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/farwaytraveling/" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "Youtube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-card border border-border/60 hover:border-primary/30 hover:text-primary flex items-center justify-center transition-all text-muted-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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

          {/* Destinationer */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Destinationer</h4>
            <ul className="space-y-2.5">
              {footerLinks.destinations.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Företag */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Kontakt</h4>
            <a
              href="mailto:farwaytravelling@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 mb-6"
            >
              <Mail className="w-4 h-4" />
              farwaytravelling@gmail.com
            </a>

            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Företag</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Farway. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs text-muted-foreground">
            Gjord med ❤️ i Sverige
          </p>
        </div>
      </div>
    </footer>
  );
};
