import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aiImg from "@/assets/ai-illustration.jpg";
import networkImg from "@/assets/network-infrastructure.jpg";
import securityImg from "@/assets/security-center.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const blogImages = [aiImg, securityImg, networkImg, smartHomeImg, teamImg, heroImg];

const Blog = () => {
  const { t } = useLanguage();

  const articles = [
    { titleKey: "blog.a1.title", excerptKey: "blog.a1.excerpt", dateKey: "blog.a1.date", catKey: "blog.a1.cat" },
    { titleKey: "blog.a2.title", excerptKey: "blog.a2.excerpt", dateKey: "blog.a2.date", catKey: "blog.a2.cat" },
    { titleKey: "blog.a3.title", excerptKey: "blog.a3.excerpt", dateKey: "blog.a3.date", catKey: "blog.a3.cat" },
    { titleKey: "blog.a4.title", excerptKey: "blog.a4.excerpt", dateKey: "blog.a4.date", catKey: "blog.a4.cat" },
    { titleKey: "blog.a5.title", excerptKey: "blog.a5.excerpt", dateKey: "blog.a5.date", catKey: "blog.a5.cat" },
    { titleKey: "blog.a6.title", excerptKey: "blog.a6.excerpt", dateKey: "blog.a6.date", catKey: "blog.a6.cat" },
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
                {t("blog.title1")} <span className="text-gradient">{t("blog.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("blog.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((a, i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img src={blogImages[i]} alt={t(a.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium font-body rounded-full">{t(a.catKey)}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                        <Calendar size={12} /> {t(a.dateKey)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{t(a.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{t(a.excerptKey)}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body group-hover:gap-2 transition-all">
                      {t("blog.readmore")} <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
