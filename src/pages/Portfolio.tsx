import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Network, Phone, Camera, Cloud, Code, Brain, Wrench, Monitor, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import networkImg from "@/assets/network-infrastructure.jpg";
import securityImg from "@/assets/security-center.jpg";
import aiImg from "@/assets/ai-illustration.jpg";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    { icon: Camera, title: t("portfolio.p1.title"), client: t("portfolio.p1.client"), desc: t("portfolio.p1.desc"), tag: t("portfolio.tag.erp"), image: securityImg },
    { icon: Network, title: t("portfolio.p2.title"), client: t("portfolio.p2.client"), desc: t("portfolio.p2.desc"), tag: t("portfolio.tag.infra"), image: networkImg },
    { icon: Code, title: t("portfolio.p3.title"), client: t("portfolio.p3.client"), desc: t("portfolio.p3.desc"), tag: t("portfolio.tag.erp"), image: aiImg },
    { icon: Wrench, title: t("portfolio.p4.title"), client: t("portfolio.p4.client"), desc: t("portfolio.p4.desc"), tag: t("portfolio.tag.cloud"), image: networkImg },
    { icon: Monitor, title: t("portfolio.p5.title"), client: t("portfolio.p5.client"), desc: t("portfolio.p5.desc"), tag: t("portfolio.tag.cloud"), image: aiImg },
    { icon: Network, title: t("portfolio.p6.title"), client: t("portfolio.p6.client"), desc: t("portfolio.p6.desc"), tag: t("portfolio.tag.network"), image: networkImg },
    { icon: Shield, title: t("portfolio.p7.title"), client: t("portfolio.p7.client"), desc: t("portfolio.p7.desc"), tag: t("portfolio.tag.infra"), image: securityImg },
    { icon: Phone, title: t("portfolio.p8.title"), client: t("portfolio.p8.client"), desc: t("portfolio.p8.desc"), tag: t("portfolio.tag.security"), image: securityImg },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-28 pb-20 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 18%), hsl(180 35% 15%))"
        }}>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
                {t("portfolio.title1")} <span className="text-gradient">{t("portfolio.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium font-body rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-xs text-secondary font-body font-medium mb-3">{p.client}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{
          background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 18%), hsl(180 35% 15%))"
        }}>
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground mb-6">
                {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
              </h2>
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <Link to="/contact">{t("solpage.cta")}</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
