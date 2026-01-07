import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href={lang === "it" ? "/" : "/en"} className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            ShellyFurs
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#chi-siamo"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.aboutUs}
          </a>
          <a
            href="#servizi"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galleria"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#orari"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contatti"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild>
            <a href="tel:+41919227525">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <a
              href="#chi-siamo"
              className="block text-sm text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#servizi"
              className="block text-sm text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#galleria"
              className="block text-sm text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#orari"
              className="block text-sm text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contatti"
              className="block text-sm text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <div className="pt-2 border-t">
              <Link
                to={otherLangPath}
                className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary py-2"
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
              <Button asChild className="w-full mt-2">
                <a href="tel:+41919227525">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
