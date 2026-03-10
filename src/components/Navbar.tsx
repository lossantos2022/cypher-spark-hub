import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold text-navy-foreground tracking-tight">
          <span className="text-gradient">CYPHER</span>{" "}
          <span className="text-navy-foreground">GLOBAL</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors font-body"
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button variant="hero" size="sm" asChild>
            <Link to="/ia">{t("nav.cta")}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-primary/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-3 text-navy-foreground/70 hover:text-navy-foreground transition-colors font-body text-sm border-b border-primary/5"
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="py-3">
            <LanguageSwitcher />
          </div>
          <Button variant="hero" size="sm" className="mt-2 w-full" asChild>
            <Link to="/ia" onClick={() => setIsOpen(false)}>{t("nav.cta")}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
