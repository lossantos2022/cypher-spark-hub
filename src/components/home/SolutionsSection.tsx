import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Phone, Cloud, Monitor, Camera, Home, ArrowRight } from "lucide-react";

const solutions = [
  { icon: Brain, title: "Agent IA entreprise", desc: "Assistant intelligent pour qualifier vos prospects et automatiser vos tâches.", href: "/ia" },
  { icon: Phone, title: "Téléphonie IP", desc: "Solutions de communication unifiée : VOIP, standard automatique, mobilité.", href: "/solutions" },
  { icon: Cloud, title: "Sauvegarde cloud", desc: "Protection de vos données avec PRA/PCA et sauvegarde automatisée.", href: "/solutions" },
  { icon: Monitor, title: "Infogérance informatique", desc: "Gestion complète de votre parc informatique et supervision 24/7.", href: "/solutions" },
  { icon: Camera, title: "Vidéosurveillance", desc: "Systèmes de surveillance intelligents pour sécuriser vos locaux.", href: "/solutions" },
  { icon: Home, title: "Domotique", desc: "Maison et bureau connectés : contrôle d'accès, automatisation, confort.", href: "/solutions" },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions <span className="text-gradient">principales</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Des solutions technologiques complètes pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={sol.href}
                className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <sol.icon size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{sol.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{sol.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
