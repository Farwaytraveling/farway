import { Button } from "@/components/ui/button";
import { Plane, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Utland<span className="text-primary">Guide</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Program
          </a>
          <a href="#destinations" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Destinationer
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Så fungerar det
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Omdömen
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:flex">
            Logga in
          </Button>
          <Button variant="hero" size="default" className="hidden sm:flex">
            <Plane className="w-4 h-4" />
            Kom igång
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
