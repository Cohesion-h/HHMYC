import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type Lang = "en" | "ar";

const STORAGE_KEY = "hhyc-lang";

type LocaleValue = {
  lang: Lang;
  isAr: boolean;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (en: string, ar: string) => string;
};

const LocaleContext = createContext<LocaleValue | null>(null);

function readLang(): Lang {
  if (typeof window === "undefined") return "en";
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "ar" || q === "en") return q;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ar" || stored === "en") return stored;
  return "en";
}

function applyLang(lang: Lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  root.classList.toggle("lang-ar", lang === "ar");
  window.localStorage.setItem(STORAGE_KEY, lang);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const initial = readLang();
    setLangState(initial);
    applyLang(initial);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyLang(next);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const value = useMemo<LocaleValue>(
    () => ({
      lang,
      isAr: lang === "ar",
      setLang,
      toggle,
      t: (en, ar) => (lang === "ar" ? ar : en),
    }),
    [lang, setLang, toggle],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    return {
      lang: "en",
      isAr: false,
      setLang: () => undefined,
      toggle: () => undefined,
      t: (en) => en,
    };
  }
  return ctx;
}

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLocale();
  return (
    <div
      className={cn("inline-flex h-11 items-stretch border border-line", className)}
      role="group"
      aria-label={t("Language", "اللغة")}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "min-w-10 px-2.5 font-sans text-caption tracking-[0.18em] transition-colors duration-150",
          lang === "en" ? "bg-accent text-bg" : "text-muted hover:text-fg",
        )}
        aria-pressed={lang === "en"}
        aria-label="English"
      >
        E
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "min-w-10 px-2.5 font-arabic text-caption transition-colors duration-150",
          lang === "ar" ? "bg-accent text-bg" : "text-muted hover:text-fg",
        )}
        aria-pressed={lang === "ar"}
        aria-label="العربية"
      >
        A
      </button>
    </div>
  );
}

export const UI = {
  catalogue: { en: "Design Catalogue", ar: "كتالوج التصميم" },
  register: { en: "Design Basis Register", ar: "سجل أساس التصميم" },
  overview: { en: "Overview", ar: "نظرة عامة" },
  allPlates: { en: "All plates", ar: "جميع اللوحات" },
  close: { en: "Close", ar: "إغلاق" },
  download: { en: "Download PDF catalogue", ar: "تنزيل الكتالوج PDF" },
  next: { en: "Next slide", ar: "اللوحة التالية" },
  prev: { en: "Previous slide", ar: "اللوحة السابقة" },
  fullscreen: { en: "Fullscreen", ar: "ملء الشاشة" },
  exitFs: { en: "Exit fullscreen", ar: "إنهاء ملء الشاشة" },
  continueHint: { en: "Press → or swipe to continue", ar: "اضغط ← أو اسحب للمتابعة" },
  status: { en: "Status", ar: "الحالة" },
  oasis: { en: "OASIS", ar: "الواحة" },
  southEntry: { en: "SOUTH ENTRY", ar: "المدخل الجنوبي" },
} as const;
