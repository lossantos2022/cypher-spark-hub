import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import teamImg from "@/assets/team-meeting.jpg";

const PresentationSection = () => {
  const { t } = useLanguage();
  const points = [t("pres.p1"), t("pres.p2"), t("pres.p3"), t("pres.p4")];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("pres.title1")} <span className="text-gradient">{t("pres.title2")}</span> {t("pres.title3")}
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">{t("pres.desc")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-blue-teal">
                  <CheckCircle size={20} className="text-secondary shrink-0" />
                  <span className="font-body text-foreground text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <img src={teamImg} alt="Team Cypher Global" className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                <span className="font-display text-2xl font-bold text-primary-foreground">12+</span>
              </div>
              <div className="absolute -top-3 -left-3 px-4 py-2 rounded-lg bg-card shadow-card border border-border">
                <span className="font-display text-sm font-semibold text-foreground">🇨🇮 Abidjan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
