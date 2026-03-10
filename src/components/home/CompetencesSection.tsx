import { motion } from "framer-motion";
import {
  Monitor, Network, Phone, Brain, Globe, Shield,
  Cloud, Boxes, Home, Package,
} from "lucide-react";

const competences = [
  { icon: Monitor, label: "Maintenance informatique", desc: "Infogérance et supervision" },
  { icon: Network, label: "Infrastructure réseau", desc: "Architecture & déploiement" },
  { icon: Phone, label: "Télécom", desc: "Téléphonie IP & VOIP" },
  { icon: Brain, label: "Intelligence artificielle", desc: "Agents IA & automatisation" },
  { icon: Globe, label: "Développement web", desc: "Sites, apps & CRM" },
  { icon: Shield, label: "Sécurité informatique", desc: "Protection & cybersécurité" },
  { icon: Cloud, label: "Sauvegarde cloud", desc: "PRA/PCA & backup" },
  { icon: Boxes, label: "Logiciels & ERP", desc: "Solutions métiers" },
  { icon: Home, label: "Domotique", desc: "Maison connectée" },
  { icon: Package, label: "Fourniture matériel", desc: "Équipements IT" },
];

const CompetencesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos pôles de <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            10 domaines d'expertise pour répondre à tous vos besoins technologiques
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {competences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group bg-card border border-border rounded-lg p-5 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;
