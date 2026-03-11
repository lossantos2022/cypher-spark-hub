import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Phone, Cloud, Monitor, Camera, Home, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import aiImg from "@/assets/ai-illustration.jpg";
import networkImg from "@/assets/network-infrastructure.jpg";
import securityImg from "@/assets/security-center.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";

const SolutionsSection = () => {
  const { t } = useLanguage();
  const solutions = [
    { icon: Brain, title: t("sol.s1"), desc: t("sol.s1d"), href: "/ia", image: aiImg },
    { icon: Phone, title: t("sol.s2"), desc: t("sol.s2d"), href: "/solutions", image: networkImg },
    { icon: Cloud, title: t("sol.s3"), desc: t("sol.s3d"), href: "/solutions", image: securityImg },
    { icon: Monitor, title: t("sol.s4"), desc: t("sol.s4d"), href: "/solutions", image: networkImg },
    { icon: Camera, title: t("sol.s5"), desc: t("sol.s5d"), href: "/solutions", image: securityImg },
    { icon: Home, title: t("sol.s6"), desc: t("sol.s6d"), href: "/solutions", image: smartHomeImg },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium font-body mb-4">
            {t("sol.subtitle")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("sol.title1")} <span className="text-gradient">{t("sol.title2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={sol.href} className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative h-44 overflow-hidden">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground shadow-sm">
                    <sol.icon size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{sol.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body group-hover:gap-2 transition-all">
                    {t("sol.more")} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
