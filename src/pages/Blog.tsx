import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(217 91% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
          <div className="relative container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
                {t("blog.title1")} <span className="text-gradient">{t("blog.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("blog.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((a, i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/15 min-h-[160px] flex items-center justify-center border-b border-border">
                    <Tag size={48} className="text-primary/20 group-hover:text-primary/40 transition-colors" />
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
