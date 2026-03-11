import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 18%), hsl(180 35% 15%))"
    }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{
        background: "radial-gradient(circle, hsl(220 72% 40% / 0.4), transparent 70%)"
      }} />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-10" style={{
        background: "radial-gradient(circle, hsl(180 45% 40% / 0.5), transparent 70%)"
      }} />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground mb-6 shadow-glow">
            <Bot size={32} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
            {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
          </h2>
          <p className="text-navy-foreground/60 font-body text-lg mb-8">{t("cta.desc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="shadow-glow" asChild>
              <Link to="/ia">{t("cta.btn")}</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/225XXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} className="mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
