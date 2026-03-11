import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", need: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
    setFormData({ name: "", company: "", email: "", phone: "", need: "" });
  };

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
                {t("contact.title1")} <span className="text-gradient">{t("contact.title2")}</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-body text-foreground mb-1.5 block">{t("contact.form.name")} *</label>
                        <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                      </div>
                      <div>
                        <label className="text-sm font-body text-foreground mb-1.5 block">{t("contact.form.company")}</label>
                        <Input value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-body text-foreground mb-1.5 block">{t("contact.form.email")} *</label>
                        <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                      </div>
                      <div>
                        <label className="text-sm font-body text-foreground mb-1.5 block">{t("contact.form.phone")}</label>
                        <Input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-body text-foreground mb-1.5 block">{t("contact.form.need")} *</label>
                      <Textarea value={formData.need} onChange={e => setFormData({ ...formData, need: e.target.value })} required
                        placeholder={t("contact.form.needPlaceholder")} rows={5} className="resize-none" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 shadow-glow" size="lg">
                      <Send size={18} className="mr-2" /> {t("contact.form.submit")}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">{t("contact.info.title")}</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shrink-0 shadow-sm">
                        <MapPin size={20} />
                      </div>
                      <p className="font-body text-foreground text-sm whitespace-pre-line">{t("contact.info.address")}</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shrink-0 shadow-sm">
                        <Phone size={20} />
                      </div>
                      <p className="font-body text-foreground text-sm">+225 XX XX XX XX</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shrink-0 shadow-sm">
                        <Mail size={20} />
                      </div>
                      <p className="font-body text-foreground text-sm">contact@cypherglobal.ci</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shrink-0 shadow-sm">
                        <Clock size={20} />
                      </div>
                      <p className="font-body text-foreground text-sm">{t("contact.info.hours")}</p>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <a href="https://wa.me/225XXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-5 bg-card border border-border rounded-xl hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-logo-green/10 flex items-center justify-center">
                      <MessageCircle size={22} className="text-logo-green" />
                    </div>
                    <span className="text-xs font-body text-foreground font-medium">{t("contact.whatsapp")}</span>
                  </a>
                  <a href="tel:+225XXXXXXXX"
                    className="flex flex-col items-center gap-2 p-5 bg-card border border-border rounded-xl hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <PhoneCall size={22} className="text-primary" />
                    </div>
                    <span className="text-xs font-body text-foreground font-medium">{t("contact.call")}</span>
                  </a>
                  <a href="mailto:contact@cypherglobal.ci"
                    className="flex flex-col items-center gap-2 p-5 bg-card border border-border rounded-xl hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-logo-orange/10 flex items-center justify-center">
                      <Mail size={22} className="text-logo-orange" />
                    </div>
                    <span className="text-xs font-body text-foreground font-medium">{t("contact.email")}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
