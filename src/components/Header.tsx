import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Farway
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Program
          </a>
          <a href="#destinations" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Destinationer
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Så fungerar det
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Omdömen
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:flex text-sm">
            Logga in
          </Button>
          <Button variant="default" size="default" className="hidden sm:flex">
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
