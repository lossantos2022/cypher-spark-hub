import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "La transformation numérique",
  "L'automatisation des processus",
  "La sécurisation des données",
  "L'optimisation des infrastructures IT",
];

const PresentationSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Une expertise <span className="text-gradient">globale</span> pour un service unique
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Cypher Global accompagne les entreprises dans leur évolution technologique, 
            leur permettant de se concentrer sur leur cœur de métier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 text-left"
              >
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="font-body text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationSection;
