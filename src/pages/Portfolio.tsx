import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Network, Phone, Camera, Cloud, Code, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    { icon: Network, title: t("portfolio.p1.title"), client: t("portfolio.p1.client"), desc: t("portfolio.p1.desc"), tag: t("portfolio.tag.network") },
    { icon: Phone, title: t("portfolio.p2.title"), client: t("portfolio.p2.client"), desc: t("portfolio.p2.desc"), tag: t("portfolio.tag.telecom") },
    { icon: Camera, title: t("portfolio.p3.title"), client: t("portfolio.p3.client"), desc: t("portfolio.p3.desc"), tag: t("portfolio.tag.security") },
    { icon: Cloud, title: t("portfolio.p4.title"), client: t("portfolio.p4.client"), desc: t("portfolio.p4.desc"), tag: t("portfolio.tag.cloud") },
    { icon: Code, title: t("portfolio.p5.title"), client: t("portfolio.p5.client"), desc: t("portfolio.p5.desc"), tag: t("portfolio.tag.dev") },
    { icon: Brain, title: t("portfolio.p6.title"), client: t("portfolio.p6.client"), desc: t("portfolio.p6.desc"), tag: t("portfolio.tag.ai") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(220 72% 33% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(220 72% 33% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
          <div className="relative container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
                {t("portfolio.title1")} <span className="text-gradient">{t("portfolio.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-elevated transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/15 p-8 flex items-center justify-center min-h-[180px] border-b border-border">
                    <p.icon size={64} className="text-primary/25 group-hover:text-primary/40 transition-colors" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium font-body rounded-full mb-3">{p.tag}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-xs text-primary font-body mb-3">{p.client}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground mb-6">
                {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
              </h2>
              <Button variant="hero" size="lg" asChild>
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
