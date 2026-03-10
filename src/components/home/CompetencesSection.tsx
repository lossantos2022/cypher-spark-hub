import { motion } from "framer-motion";
import { Monitor, Network, Phone, Brain, Globe, Shield, Cloud, Boxes, Home, Package } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CompetencesSection = () => {
  const { t } = useLanguage();
  const competences = [
    { icon: Monitor, label: t("comp.c1"), desc: t("comp.c1d") },
    { icon: Network, label: t("comp.c2"), desc: t("comp.c2d") },
    { icon: Phone, label: t("comp.c3"), desc: t("comp.c3d") },
    { icon: Brain, label: t("comp.c4"), desc: t("comp.c4d") },
    { icon: Globe, label: t("comp.c5"), desc: t("comp.c5d") },
    { icon: Shield, label: t("comp.c6"), desc: t("comp.c6d") },
    { icon: Cloud, label: t("comp.c7"), desc: t("comp.c7d") },
    { icon: Boxes, label: t("comp.c8"), desc: t("comp.c8d") },
    { icon: Home, label: t("comp.c9"), desc: t("comp.c9d") },
    { icon: Package, label: t("comp.c10"), desc: t("comp.c10d") },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("comp.title1")} <span className="text-gradient">{t("comp.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">{t("comp.subtitle")}</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {competences.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border rounded-lg p-5 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300">
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
