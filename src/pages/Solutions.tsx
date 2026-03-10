import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Network, Phone, Shield, Brain, Code, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: Monitor, titleKey: "solpage.maintenance.title", descKey: "solpage.maintenance.desc", features: ["solpage.maintenance.f1", "solpage.maintenance.f2", "solpage.maintenance.f3", "solpage.maintenance.f4"], color: "from-primary to-electric" },
    { icon: Network, titleKey: "solpage.network.title", descKey: "solpage.network.desc", features: ["solpage.network.f1", "solpage.network.f2", "solpage.network.f3", "solpage.network.f4"], color: "from-primary to-electric" },
    { icon: Phone, titleKey: "solpage.telecom.title", descKey: "solpage.telecom.desc", features: ["solpage.telecom.f1", "solpage.telecom.f2", "solpage.telecom.f3", "solpage.telecom.f4"], color: "from-primary to-electric" },
    { icon: Shield, titleKey: "solpage.backup.title", descKey: "solpage.backup.desc", features: ["solpage.backup.f1", "solpage.backup.f2", "solpage.backup.f3", "solpage.backup.f4"], color: "from-primary to-electric" },
    { icon: Brain, titleKey: "solpage.ai.title", descKey: "solpage.ai.desc", features: ["solpage.ai.f1", "solpage.ai.f2", "solpage.ai.f3", "solpage.ai.f4"], color: "from-primary to-electric" },
    { icon: Code, titleKey: "solpage.dev.title", descKey: "solpage.dev.desc", features: ["solpage.dev.f1", "solpage.dev.f2", "solpage.dev.f3", "solpage.dev.f4"], color: "from-primary to-electric" },
    { icon: Home, titleKey: "solpage.domotique.title", descKey: "solpage.domotique.desc", features: ["solpage.domotique.f1", "solpage.domotique.f2", "solpage.domotique.f3", "solpage.domotique.f4"], color: "from-primary to-electric" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(217 91% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
          <div className="relative container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
                {t("solpage.title1")} <span className="text-gradient">{t("solpage.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("solpage.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        {/* Solutions list */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                      <section.icon size={32} />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{t(section.titleKey)}</h2>
                    <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">{t(section.descKey)}</p>
                    <ul className="space-y-3">
                      {section.features.map((fKey, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle size={18} className="text-primary shrink-0" />
                          <span className="font-body text-foreground text-sm">{t(fKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-10 flex items-center justify-center min-h-[280px] border border-primary/10`}>
                    <section.icon size={120} className="text-primary/20" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground mb-6">
                {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">{t("solpage.cta")}</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/ia">{t("nav.cta")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
