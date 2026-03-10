import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cabinet d'urbanisme",
    role: "Abidjan",
    quote: "Cypher Global a transformé notre infrastructure IT et nous a permis de gagner en efficacité grâce à leur solution de téléphonie IP.",
  },
  {
    name: "Institut Français",
    role: "Côte d'Ivoire",
    quote: "Un partenaire fiable pour la gestion de notre parc informatique et la sécurisation de nos données sensibles.",
  },
  {
    name: "Cabinet de notaire",
    role: "Abidjan",
    quote: "L'intégration de l'agent IA a révolutionné notre gestion des rendez-vous et la qualification de nos prospects.",
  },
  {
    name: "Entreprise industrielle",
    role: "Zone industrielle Yopougon",
    quote: "Déploiement réseau multi-sites impeccable. Une équipe réactive et professionnelle.",
  },
];

const TestimonialsSection = () => {
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
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote size={24} className="text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground font-body text-sm leading-relaxed mb-4 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
