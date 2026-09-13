import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Slide({
  children,
  className,
  flush = false,
}: {
  children: ReactNode;
  className?: string;
  flush?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col overflow-y-auto overflow-x-hidden",
        className,
      )}
    >
      {flush ? null : <div className="h-12 shrink-0 sm:h-14" aria-hidden />}
      {children}
    </section>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-sans text-kicker font-medium tracking-[0.28em] text-accent uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Arabic({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p dir="rtl" lang="ar" className={cn("font-arabic text-caption text-muted", className)}>
      {children}
    </p>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-14 hairline", className)} />;
}

export function Metric({
  value,
  label,
  unit,
}: {
  value: string;
  label: string;
  unit?: string;
}) {
  return (
    <div className="min-w-0 border-t border-line pt-3">
      <p className="font-display text-title tabular tracking-tight text-fg">
        {value}
        {unit ? <span className="ms-1 text-caption font-sans text-muted">{unit}</span> : null}
      </p>
      <p className="mt-1 text-caption tracking-wide text-muted">{label}</p>
    </div>
  );
}

export function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line/80 py-2.5 text-caption last:border-b-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:text-body">
      <span className="text-muted">{label}</span>
      <span className="text-end font-medium tabular text-fg md:text-start">{value}</span>
    </div>
  );
}

export function ChapterHead({
  index,
  title,
  arabic,
  kicker,
}: {
  index: string;
  title: string;
  arabic?: string;
  kicker?: string;
}) {
  return (
    <header className="stagger-in min-w-0">
      <Kicker>
        {index}
        {kicker ? `  ·  ${kicker}` : null}
      </Kicker>
      <h2 className="mt-3 font-display text-display font-medium tracking-tight text-fg">{title}</h2>
      {arabic ? <Arabic className="mt-2 text-body text-muted">{arabic}</Arabic> : null}
      <Rule className="mt-5" />
    </header>
  );
}

export function StatusChip({
  status,
}: {
  status: "OK" | "INFO" | "OPEN" | "REJ";
}) {
  const map = {
    OK: "bg-ok/15 text-ok",
    INFO: "bg-accent/10 text-accent-2",
    OPEN: "bg-open/15 text-open",
    REJ: "bg-rej/15 text-rej",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-xs px-2 font-sans text-micro font-semibold tracking-[0.14em]",
        map[status],
      )}
    >
      {status}
    </span>
  );
}
