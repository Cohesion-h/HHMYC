import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileDown,
  Grid2x2,
  Maximize,
  Minimize,
} from "lucide-react";
import { PROJECT } from "@/lib/catalogue-data";
import { LangToggle, UI, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { StarMark } from "./StarMark";
import { SLIDES, renderSlide } from "./slides";

const LAST = SLIDES.length - 1;

function indexFromHash(): number {
  if (typeof window === "undefined") return 0;
  const id = window.location.hash.replace(/^#/, "");
  const i = SLIDES.findIndex((s) => s.id === id);
  return i >= 0 ? i : 0;
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [overview, setOverview] = useState(false);
  const [fs, setFs] = useState(false);
  const [exportMode, setExportMode] = useState(false);
  const { isAr, t, toggle } = useLocale();
  const touchX = useRef<number | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => setIndex(indexFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  useEffect(() => {
    const on = new URLSearchParams(window.location.search).has("export");
    setExportMode(on);
    document.documentElement.classList.toggle("pdf-export", on);
    return () => document.documentElement.classList.remove("pdf-export");
  }, []);

  const go = useCallback((next: number, direction?: "next" | "prev") => {
    const clamped = Math.max(0, Math.min(LAST, next));
    setDir(direction ?? (clamped >= index ? "next" : "prev"));
    setIndex(clamped);
    setOverview(false);
    const id = SLIDES[clamped].id;
    window.history.pushState(null, "", `#${id}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(index + (isAr && e.key === "ArrowRight" ? -1 : 1), isAr && e.key === "ArrowRight" ? "prev" : "next");
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index + (isAr && e.key === "ArrowLeft" ? 1 : -1), isAr && e.key === "ArrowLeft" ? "next" : "prev");
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0, "prev");
      } else if (e.key === "End") {
        e.preventDefault();
        go(LAST, "next");
      } else if (e.key === "Escape") {
        setOverview((v) => !v);
      } else if (e.key.toLowerCase() === "g") {
        setOverview((v) => !v);
      } else if (e.key.toLowerCase() === "f") {
        toggleFs();
      } else if (e.key.toLowerCase() === "l") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, isAr, toggle]);

  const toggleFs = () => {
    const el = frameRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().then(() => setFs(true)).catch(() => undefined);
    } else {
      document.exitFullscreen?.().then(() => setFs(false)).catch(() => undefined);
    }
  };

  useEffect(() => {
    const onFs = () => setFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const x = e.changedTouches[0]?.clientX;
    if (touchX.current == null || x == null) return;
    const dx = x - touchX.current;
    if (isAr) {
      if (dx < -56) go(index - 1, "prev");
      if (dx > 56) go(index + 1, "next");
    } else {
      if (dx < -56) go(index + 1, "next");
      if (dx > 56) go(index - 1, "prev");
    }
    touchX.current = null;
  };

  const slide = SLIDES[index];
  const progress = ((index + 1) / SLIDES.length) * 100;

  return (
    <div
      ref={frameRef}
      className="relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-bg text-fg"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <header className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-30 items-start justify-between px-4 py-3 sm:px-6",
        exportMode ? "hidden" : "flex",
      )}>
        <div className="pointer-events-auto flex items-center gap-3">
          <StarMark className="h-8 w-8 text-accent" double={false} />
          <div className="hidden sm:block">
            <p className="font-latin font-display text-caption tracking-[0.22em] text-fg">{PROJECT.code}</p>
            <p className={cn("text-micro text-dim", isAr ? "font-arabic tracking-normal" : "tracking-[0.18em] uppercase")}>
              {t(UI.catalogue.en, UI.catalogue.ar)}
            </p>
          </div>
        </div>
        <div className="pointer-events-auto flex items-center gap-1">
          <LangToggle />
          <a
            href="/HHMYC-Design-Catalogue.pdf"
            download="HHMYC-Design-Catalogue.pdf"
            className="inline-flex size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg"
            aria-label={t(UI.download.en, UI.download.ar)}
          >
            <FileDown className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOverview((v) => !v)}
            className="inline-flex size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg"
            aria-label={t(UI.overview.en, UI.overview.ar)}
          >
            <Grid2x2 className="size-4" />
          </button>
          <button
            type="button"
            onClick={toggleFs}
            className="hidden size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg sm:inline-flex"
            aria-label={fs ? t(UI.exitFs.en, UI.exitFs.ar) : t(UI.fullscreen.en, UI.fullscreen.ar)}
          >
            {fs ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          </button>
        </div>
      </header>

      <div className="relative min-h-0 flex-1">
        <div
          key={slide.id}
          className="slide-pane absolute inset-0"
          data-dir={dir}
          data-slide-id={slide.id}
        >
          {renderSlide(slide.id, (id) => {
            const i = SLIDES.findIndex((s) => s.id === id);
            if (i >= 0) go(i);
          })}
        </div>
      </div>

      <nav className={cn(
        "relative z-30 border-t border-line bg-bg/90 px-3 py-2 sm:px-6",
        exportMode && "hidden",
      )}>
        <div className="absolute inset-x-0 top-0 h-px bg-line">
          <div className="h-px bg-accent transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1, "prev")}
            disabled={index === 0}
            className="inline-flex size-11 items-center justify-center text-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:text-dim"
            aria-label={t(UI.prev.en, UI.prev.ar)}
          >
            <ChevronLeft className="size-5 rtl:rotate-180" />
          </button>
          <p className="min-w-0 flex-1 truncate text-caption">
            <span className="tabular text-accent">{slide.num}</span>
            <span className="mx-2 text-dim">/</span>
            <span className={cn("text-fg", isAr && "font-arabic")}>{t(slide.title, slide.titleAr)}</span>
            <span
              className={cn("ms-2 hidden text-dim md:inline", isAr ? "font-sans" : "font-arabic")}
              dir={isAr ? "ltr" : "rtl"}
              lang={isAr ? "en" : "ar"}
            >
              {isAr ? slide.title : slide.titleAr}
            </span>
          </p>
          <p className="shrink-0 font-sans text-micro tabular tracking-widest text-dim">
            {String(index + 1).padStart(2, "0")} — {String(SLIDES.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => go(index + 1, "next")}
            disabled={index === LAST}
            className="inline-flex size-11 items-center justify-center text-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:text-dim"
            aria-label={t(UI.next.en, UI.next.ar)}
          >
            <ChevronRight className="size-5 rtl:rotate-180" />
          </button>
        </div>
      </nav>

      {overview ? (
        <div className="absolute inset-0 z-40 overflow-y-auto bg-bg/95 p-5 sm:p-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className={cn("text-kicker text-accent", isAr ? "font-arabic tracking-normal" : "tracking-[0.28em] uppercase")}>
                {t(UI.overview.en, UI.overview.ar)}
              </p>
              <h2 className={cn("mt-2 text-title text-fg", isAr ? "font-arabic" : "font-display")}>
                {t(UI.allPlates.en, UI.allPlates.ar)}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOverview(false)}
              className={cn("h-11 px-3 text-caption text-muted hover:text-fg", isAr && "font-arabic")}
            >
              {t(UI.close.en, UI.close.ar)}
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {SLIDES.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "flex h-full min-h-28 w-full flex-col items-start border p-4 text-start transition-colors duration-150",
                    i === index
                      ? "border-accent bg-surface"
                      : "border-line bg-bg-elevated hover:border-line-strong",
                  )}
                >
                  <span className="font-latin font-display text-caption tabular text-accent">{s.num}</span>
                  <span className={cn("mt-2 text-body text-fg", isAr && "font-arabic")}>{t(s.title, s.titleAr)}</span>
                  <span
                    className={cn("mt-1 text-caption text-dim", isAr ? "font-sans" : "font-arabic")}
                    dir={isAr ? "ltr" : "rtl"}
                    lang={isAr ? "en" : "ar"}
                  >
                    {isAr ? s.title : s.titleAr}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
