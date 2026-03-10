import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              <span className="text-gradient">CYPHER</span> GLOBAL
            </h3>
            <p className="text-navy-foreground/60 text-sm leading-relaxed font-body">
              Votre partenaire technologique pour la transformation numérique des entreprises en Afrique.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Solutions</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60 font-body">
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">Infrastructure Réseau</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">Téléphonie IP</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">Sécurité & Sauvegarde</Link></li>
              <li><Link to="/ia" className="hover:text-navy-foreground transition-colors">Intelligence Artificielle</Link></li>
              <li><Link to="/solutions" className="hover:text-navy-foreground transition-colors">Domotique</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Entreprise</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60 font-body">
              <li><Link to="/a-propos" className="hover:text-navy-foreground transition-colors">À propos</Link></li>
              <li><Link to="/realisations" className="hover:text-navy-foreground transition-colors">Réalisations</Link></li>
              <li><Link to="/blog" className="hover:text-navy-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-navy-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/60 font-body">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>Abidjan, Marcory Résidentiel<br />Immeuble NSIA, 2e étage</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+225 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>contact@cypherglobal.ci</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-foreground/40 font-body">
            © {new Date().getFullYear()} Cypher Global. Tous droits réservés.
          </p>
          <p className="text-xs text-navy-foreground/40 font-body">
            Depuis 2012 — Expertise technologique en Côte d'Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
