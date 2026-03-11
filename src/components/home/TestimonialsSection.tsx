import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    { name: t("test.t1n"), role: t("test.t1r"), quote: t("test.t1q") },
    { name: t("test.t2n"), role: t("test.t2r"), quote: t("test.t2q") },
    { name: t("test.t3n"), role: t("test.t3r"), quote: t("test.t3q") },
    { name: t("test.t4n"), role: t("test.t4r"), quote: t("test.t4q") },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-logo-orange/10 text-logo-orange text-sm font-medium font-body mb-4">
            ⭐ Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("test.title1")} <span className="text-gradient">{t("test.title2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative hover:shadow-card transition-all duration-300">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-logo-orange text-logo-orange" />
                ))}
              </div>
              <Quote size={24} className="text-primary/15 absolute top-4 right-4" />
              <p className="text-foreground font-body text-sm leading-relaxed mb-4 italic">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
