import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Phone, Cloud, Monitor, Camera, Home, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SolutionsSection = () => {
  const { t } = useLanguage();
  const solutions = [
    { icon: Brain, title: t("sol.s1"), desc: t("sol.s1d"), href: "/ia" },
    { icon: Phone, title: t("sol.s2"), desc: t("sol.s2d"), href: "/solutions" },
    { icon: Cloud, title: t("sol.s3"), desc: t("sol.s3d"), href: "/solutions" },
    { icon: Monitor, title: t("sol.s4"), desc: t("sol.s4d"), href: "/solutions" },
    { icon: Camera, title: t("sol.s5"), desc: t("sol.s5d"), href: "/solutions" },
    { icon: Home, title: t("sol.s6"), desc: t("sol.s6d"), href: "/solutions" },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("sol.title1")} <span className="text-gradient">{t("sol.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">{t("sol.subtitle")}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={sol.href} className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <sol.icon size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{sol.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{sol.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body group-hover:gap-2 transition-all">
                  {t("sol.more")} <ArrowRight size={14} />
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
