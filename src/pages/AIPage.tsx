import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Users, CheckCircle, Bot, MessageSquare, Globe, Zap, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aiImg from "@/assets/ai-illustration.jpg";

const AIPage = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: AlertTriangle, title: t("aipage.problem.p1"), desc: t("aipage.problem.p1d") },
    { icon: Clock, title: t("aipage.problem.p2"), desc: t("aipage.problem.p2d") },
    { icon: Users, title: t("aipage.problem.p3"), desc: t("aipage.problem.p3d") },
  ];

  const features = [t("aipage.solution.f1"), t("aipage.solution.f2"), t("aipage.solution.f3"), t("aipage.solution.f4")];

  const channels = [
    { icon: Globe, label: t("aipage.channels.web"), color: "from-primary to-secondary", link: "#chatbot" },
    { icon: MessageCircle, label: t("aipage.channels.whatsapp"), color: "from-logo-green to-secondary", link: "https://wa.me/2250749504013" },
    { icon: Bot, label: t("aipage.channels.telegram"), color: "from-primary to-electric", link: "https://t.me/CypherGlobalBot" },
    { icon: Zap, label: t("aipage.channels.api"), color: "from-logo-orange to-logo-red", link: "/contact" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 18%), hsl(180 35% 15%))"
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10" style={{
            background: "radial-gradient(circle, hsl(220 72% 40% / 0.6), transparent 70%)"
          }} />
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                  <Bot size={16} className="text-primary" />
                  <span className="text-sm font-body text-navy-foreground/80">{t("aipage.badge")}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground leading-tight mb-6">
                  {t("aipage.title1")}<span className="text-gradient">{t("aipage.title2")}</span>
                </h1>
                <p className="text-lg text-navy-foreground/70 font-body max-w-xl mb-8">{t("aipage.subtitle")}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg" className="shadow-glow" asChild>
                    <a href="#chatbot">{t("aipage.cta")}</a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="https://wa.me/2250749504013" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={18} className="mr-2" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <img src={aiImg} alt="AI Agent" className="rounded-2xl shadow-elevated w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-logo-red/10 text-logo-red text-sm font-medium font-body mb-4">
                ⚠️ {t("aipage.problem.title1")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {t("aipage.problem.title1")} <span className="text-gradient-accent">{t("aipage.problem.title2")}</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {problems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-card transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-logo-red/10 text-logo-red mb-4">
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
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("aipage.solution.title1")} <span className="text-gradient">{t("aipage.solution.title2")}</span>
                </h2>
                <p className="text-muted-foreground font-body text-base mb-8 leading-relaxed">{t("aipage.solution.desc")}</p>
                <ul className="space-y-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-blue-teal">
                      <CheckCircle size={20} className="text-secondary shrink-0" />
                      <span className="font-body text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Bot size={40} className="text-primary-foreground" />
                  </div>
                  <p className="text-primary font-display font-bold text-xl mb-1">Cypher AI Agent</p>
                  <p className="text-muted-foreground font-body text-sm mb-6">24/7 • Multi-channel • Smart</p>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-surface text-left">
                      <p className="text-xs text-muted-foreground font-body mb-1">Client</p>
                      <p className="text-sm text-foreground font-body">Bonjour, j'aimerais un devis pour la téléphonie IP</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 text-left border border-primary/10">
                      <p className="text-xs text-primary font-body mb-1">Cypher AI</p>
                      <p className="text-sm text-foreground font-body">Bien sûr ! Combien de postes avez-vous besoin ? Je peux vous préparer une offre personnalisée 📞</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("aipage.channels.title1")} <span className="text-gradient">{t("aipage.channels.title2")}</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">{t("aipage.channels.desc")}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {channels.map((ch, i) => (
                <motion.a
                  key={i}
                  href={ch.link}
                  target={ch.link.startsWith("http") ? "_blank" : undefined}
                  rel={ch.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${ch.color} text-primary-foreground mb-4 shadow-sm`}>
                    <ch.icon size={28} />
                  </div>
                  <p className="font-display text-sm font-semibold text-foreground">{ch.label}</p>
                  {ch.link.startsWith("http") && (
                    <ExternalLink size={12} className="mx-auto mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot test section */}
        <section id="chatbot" className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                🤖 Testez l'Agent IA
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                Discutez avec notre agent intelligent et découvrez comment il peut transformer votre entreprise.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-elevated overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center gap-3">
                <Bot size={24} />
                <div>
                  <p className="font-display font-semibold text-sm">Cypher AI Assistant</p>
                  <p className="text-xs opacity-80">En ligne • Réponse instantanée</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-logo-green animate-pulse" />
              </div>
              <div className="p-6 min-h-[300px] flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <MessageSquare size={28} className="text-primary" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground mb-2">Agent IA bientôt disponible</p>
                <p className="text-sm text-muted-foreground font-body mb-6 max-w-sm">
                  Notre chatbot intelligent sera intégré ici prochainement. En attendant, contactez-nous directement.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href="https://wa.me/2250749504013" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} className="mr-2" /> WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://t.me/CypherGlobalBot" target="_blank" rel="noopener noreferrer">
                      <Bot size={16} className="mr-2" /> Telegram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">
                      <ExternalLink size={16} className="mr-2" /> Contact
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{
          background: "linear-gradient(135deg, hsl(220 35% 12%), hsl(220 30% 18%), hsl(180 35% 15%))"
        }}>
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground mb-6">
                {t("cta.title1")}<span className="text-gradient">{t("cta.title2")}</span>
              </h2>
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
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
