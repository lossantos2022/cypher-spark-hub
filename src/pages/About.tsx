import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Shield, Lightbulb, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useLanguage();

  const history = [
    { year: t("about.history.y1"), desc: t("about.history.y1d") },
    { year: t("about.history.y2"), desc: t("about.history.y2d") },
    { year: t("about.history.y3"), desc: t("about.history.y3d") },
    { year: t("about.history.y4"), desc: t("about.history.y4d") },
  ];

  const values = [
    { icon: Heart, title: t("about.values.v1"), desc: t("about.values.v1d") },
    { icon: Shield, title: t("about.values.v2"), desc: t("about.values.v2d") },
    { icon: Lightbulb, title: t("about.values.v3"), desc: t("about.values.v3d") },
    { icon: Users, title: t("about.values.v4"), desc: t("about.values.v4d") },
  ];

  const stats = [
    { value: "150+", label: t("about.stats.clients") },
    { value: "500+", label: t("about.stats.projects") },
    { value: "12+", label: t("about.stats.years") },
    { value: "25+", label: t("about.stats.experts") },
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
                {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("about.intro")}</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-surface border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-sm text-muted-foreground font-body">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("about.history.title1")} <span className="text-gradient">{t("about.history.title2")}</span>
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
              {history.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className={`flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="font-display text-2xl font-bold text-primary">{h.year}</span>
                    <p className="text-muted-foreground font-body mt-2">{h.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shrink-0 mt-2" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("about.values.title1")} <span className="text-gradient">{t("about.values.title2")}</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    <v.icon size={26} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
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

export default About;
