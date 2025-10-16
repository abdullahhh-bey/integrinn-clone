import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "AI Expertise", href: "#ai" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center h-16">
          {/* Logo - left */}
          <div className="flex items-center">
            <a href="#" className="text-lg font-bold text-foreground flex items-center gap-3">
              {/* small logo mark */}
              <span className="w-8 h-8 rounded-full bg-gradient-primary inline-block" />
              <span>Integrinn</span>
            </a>
          </div>

          {/* Centered nav links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right CTAs */}
          <div className="ml-auto hidden md:flex items-center gap-3">
            <Button className="bg-transparent border border-primary text-primary hover:bg-primary/5 px-4 py-2 rounded-md font-medium">
              Estimate with AI
            </Button>
            <Button className="bg-gradient-primary text-white px-4 py-2 rounded-md font-medium shadow-glow">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300 font-semibold w-full">
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
