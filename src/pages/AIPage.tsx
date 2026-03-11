import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Users, CheckCircle, Bot, MessageSquare, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIPage = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: AlertTriangle, title: t("aipage.problem.p1"), desc: t("aipage.problem.p1d") },
    { icon: Clock, title: t("aipage.problem.p2"), desc: t("aipage.problem.p2d") },
    { icon: Users, title: t("aipage.problem.p3"), desc: t("aipage.problem.p3d") },
  ];

  const features = [t("aipage.solution.f1"), t("aipage.solution.f2"), t("aipage.solution.f3"), t("aipage.solution.f4")];

  const channels = [
    { icon: Globe, label: t("aipage.channels.web") },
    { icon: MessageSquare, label: t("aipage.channels.whatsapp") },
    { icon: Bot, label: t("aipage.channels.telegram") },
    { icon: Zap, label: t("aipage.channels.api") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10" style={{
            background: "radial-gradient(circle, hsl(220 72% 33% / 0.6), transparent 70%)"
          }} />
          <div className="relative container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                <Bot size={16} className="text-primary" />
                <span className="text-sm font-body text-navy-foreground/80">{t("aipage.badge")}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground leading-tight mb-6">
                {t("aipage.title1")}<span className="text-gradient">{t("aipage.title2")}</span>
              </h1>
              <p className="text-lg text-navy-foreground/60 font-body max-w-2xl mx-auto mb-10">{t("aipage.subtitle")}</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">{t("aipage.cta")}</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("aipage.problem.title1")} <span className="text-gradient">{t("aipage.problem.title2")}</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {problems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-destructive/10 text-destructive mb-4">
                    <p.icon size={26} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("aipage.solution.title1")} <span className="text-gradient">{t("aipage.solution.title2")}</span>
                </h2>
                <p className="text-muted-foreground font-body text-base mb-8 leading-relaxed">{t("aipage.solution.desc")}</p>
                <ul className="space-y-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0" />
                      <span className="font-body text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-12 flex items-center justify-center border border-primary/10 min-h-[350px]">
                <div className="text-center">
                  <Bot size={80} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-primary font-display font-semibold text-lg">Cypher AI Agent</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">24/7 • Multi-channel • Smart</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("aipage.channels.title1")} <span className="text-gradient">{t("aipage.channels.title2")}</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">{t("aipage.channels.desc")}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {channels.map((ch, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    <ch.icon size={28} />
                  </div>
                  <p className="font-display text-sm font-semibold text-foreground">{ch.label}</p>
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
                <Link to="/contact">{t("aipage.cta")}</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPage;
