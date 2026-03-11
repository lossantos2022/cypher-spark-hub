import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cypher Global" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(hsl(220 72% 33% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(220 72% 33% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-body text-navy-foreground/80">{t("hero.badge")}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-6">
            {t("hero.title1")}{" "}<span className="text-gradient">{t("hero.title2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-foreground/60 font-body max-w-2xl mx-auto mb-10 leading-relaxed">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link to="/solutions">{t("hero.btn1")}</Link></Button>
            <Button variant="heroOutline" size="lg" asChild><Link to="/ia">{t("hero.btn2")}</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
