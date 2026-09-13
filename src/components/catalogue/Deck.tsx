import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Maximize,
  Minimize,
} from "lucide-react";
import { PROJECT } from "@/lib/catalogue-data";
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
        go(index + 1, "next");
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1, "prev");
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

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
    if (dx < -56) go(index + 1, "next");
    if (dx > 56) go(index - 1, "prev");
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
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 py-3 sm:px-6">
        <div className="pointer-events-auto flex items-center gap-3">
          <StarMark className="h-8 w-8 text-accent" double={false} />
          <div className="hidden sm:block">
            <p className="font-display text-caption tracking-[0.22em] text-fg">{PROJECT.code}</p>
            <p className="text-micro tracking-[0.18em] text-dim uppercase">Design Catalogue</p>
          </div>
        </div>
        <div className="pointer-events-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setOverview((v) => !v)}
            className="inline-flex size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg"
            aria-label="Overview"
          >
            <Grid2x2 className="size-4" />
          </button>
          <button
            type="button"
            onClick={toggleFs}
            className="hidden size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg sm:inline-flex"
            aria-label={fs ? "Exit fullscreen" : "Fullscreen"}
          >
            {fs ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          </button>
        </div>
      </header>

      <div className="relative min-h-0 flex-1">
        <div key={slide.id} className="slide-pane absolute inset-0" data-dir={dir}>
          {renderSlide(slide.id, (id) => {
            const i = SLIDES.findIndex((s) => s.id === id);
            if (i >= 0) go(i);
          })}
        </div>
      </div>

      <nav className="relative z-30 border-t border-line bg-bg/90 px-3 py-2 sm:px-6">
        <div className="absolute inset-x-0 top-0 h-px bg-line">
          <div className="h-px bg-accent transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1, "prev")}
            disabled={index === 0}
            className="inline-flex size-11 items-center justify-center text-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:text-dim"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          <p className="min-w-0 flex-1 truncate text-caption">
            <span className="tabular text-accent">{slide.num}</span>
            <span className="mx-2 text-dim">/</span>
            <span className="text-fg">{slide.title}</span>
            <span dir="rtl" lang="ar" className="ms-2 hidden font-arabic text-dim md:inline">
              {slide.titleAr}
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
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </nav>

      {overview ? (
        <div className="absolute inset-0 z-40 overflow-y-auto bg-bg/95 p-5 sm:p-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-kicker tracking-[0.28em] text-accent uppercase">Overview</p>
              <h2 className="mt-2 font-display text-title text-fg">All plates</h2>
            </div>
            <button
              type="button"
              onClick={() => setOverview(false)}
              className="h-11 px-3 text-caption text-muted hover:text-fg"
            >
              Close
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
                  <span className="font-display text-caption tabular text-accent">{s.num}</span>
                  <span className="mt-2 text-body text-fg">{s.title}</span>
                  <span dir="rtl" lang="ar" className="mt-1 font-arabic text-caption text-dim">
                    {s.titleAr}
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
