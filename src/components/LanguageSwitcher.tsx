import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Globe } from "lucide-react";

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe size={14} className="text-navy-foreground/50" />
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 text-xs rounded-md transition-all font-body ${
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-foreground/80 hover:text-foreground hover:bg-primary/10 bg-muted/50"
          }`}
          title={l.label}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
