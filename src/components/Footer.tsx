import { Globe, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Utland<span className="text-primary">Guide</span>
              </span>
            </Link>
            <p className="text-background/60 mb-6">
              Sveriges ledande jämförelsetjänst för Working Holiday, Au Pair och andra utlandsprogram.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-display font-semibold mb-4">Program</h4>
            <ul className="space-y-3">
              {["Working Holiday", "Au Pair", "Volontärarbete", "Studera utomlands", "Praktik", "Farm & Ranch"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinationer */}
          <div>
            <h4 className="font-display font-semibold mb-4">Destinationer</h4>
            <ul className="space-y-3">
              {["Australien", "Nya Zeeland", "Kanada", "USA", "Thailand", "Spanien"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hej@utlandguide.se" className="text-background/60 hover:text-background transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hej@utlandguide.se
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-display font-semibold mb-4">Företag</h4>
              <ul className="space-y-3">
                {["Om oss", "Karriär", "Blogg", "Integritetspolicy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-background/60 hover:text-background transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          <p>© {new Date().getFullYear()} UtlandGuide. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};
