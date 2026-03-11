import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{
        background: "radial-gradient(circle, hsl(220 72% 33% / 0.4), transparent 70%)"
      }} />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 animate-pulse-glow">
            <Bot size={32} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
            {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
          </h2>
          <p className="text-navy-foreground/60 font-body text-lg mb-8">{t("cta.desc")}</p>
          <Button variant="hero" size="lg" asChild><Link to="/ia">{t("cta.btn")}</Link></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
