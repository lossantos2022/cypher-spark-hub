import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 16%), hsl(180 35% 13%))"
    }} className="text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Cypher Global" className="h-12 w-auto mb-4" />
            <p className="text-navy-foreground/60 text-sm leading-relaxed font-body">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gradient">{t("footer.solutions")}</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60 font-body">
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">{t("footer.infra")}</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">{t("footer.telecom")}</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">{t("footer.security")}</Link></li>
              <li><Link to="/ia" className="hover:text-navy-foreground transition-colors">{t("footer.ai")}</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">{t("footer.domotique")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gradient">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60 font-body">
              <li><Link to="/a-propos" className="hover:text-navy-foreground transition-colors">{t("footer.about")}</Link></li>
              <li><Link to="/realisations" className="hover:text-navy-foreground transition-colors">{t("footer.portfolio")}</Link></li>
              <li><Link to="/blog" className="hover:text-navy-foreground transition-colors">{t("footer.blog")}</Link></li>
              <li><Link to="/contact" className="hover:text-navy-foreground transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gradient">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/60 font-body">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-secondary shrink-0" />
                <span>Abidjan, Marcory Résidentiel<br />Immeuble NSIA, 2e étage</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary shrink-0" />
                <span>+225 27 21 38 80 06</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary shrink-0" />
                <span>contact@cypherglobal.ci</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-navy-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-foreground/40 font-body">
            © {new Date().getFullYear()} Cypher Global. {t("footer.rights")}
          </p>
          <p className="text-xs text-navy-foreground/40 font-body">{t("footer.since")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
