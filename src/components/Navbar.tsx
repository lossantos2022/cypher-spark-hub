import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.solutions", href: "/solutions" },
  { key: "nav.ai", href: "/ia" },
  { key: "nav.portfolio", href: "/realisations" },
  { key: "nav.about", href: "/a-propos" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cypher Global" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm px-3 py-2 rounded-lg transition-colors font-body ${
                location.pathname === link.href
                  ? "text-primary bg-primary/5 font-medium"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
          <Button size="sm" className="ml-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 shadow-sm" asChild>
            <Link to="/ia">{t("nav.cta")}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-4 shadow-elevated">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block py-3 transition-colors font-body text-sm border-b border-border/50 ${
                location.pathname === link.href
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="py-3">
            <LanguageSwitcher />
          </div>
          <Button size="sm" className="mt-2 w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground" asChild>
            <Link to="/ia" onClick={() => setIsOpen(false)}>{t("nav.cta")}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
