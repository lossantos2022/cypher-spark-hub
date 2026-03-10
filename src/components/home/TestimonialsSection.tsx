import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("test.title1")} <span className="text-gradient">{t("test.title2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative">
              <Quote size={24} className="text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground font-body text-sm leading-relaxed mb-4 italic">"{item.quote}"</p>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground font-body">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
