import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">ShellyFurs</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/shellyfurs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#chi-siamo"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galleria"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#orari"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41919227525"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  +41 91 922 7525
                </a>
              </li>
              <li>
                <a
                  href="mailto:shellyfurs@gmail.com"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  shellyfurs@gmail.com
                </a>
              </li>
              <li className="text-white/70">
                Via Serafino Balestra 7<br />
                6900 Lugano
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-serif text-lg mb-4">Lingua / Language</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className={`${lang === "it" ? "text-accent font-bold" : "text-white/70"}`}>
                  Italiano
                </span>
              </div>
              <div>
                <Link
                  to="/en"
                  className={`${lang === "en" ? "text-accent font-bold" : "text-white/70 hover:text-accent transition-colors"}`}
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>
            &copy; {currentYear} ShellyFurs SA. {t.footer.copyright}
          </p>
          <p>Crafted with care • Lugano, Ticino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
