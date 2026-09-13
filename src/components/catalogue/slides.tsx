import { useState, type ReactNode } from "react";
import {
  AREAS,
  CLOCKWISE_FROM_SOUTH,
  CONCEPT,
  ENERGY,
  GEOMETRY,
  GFA_SHARED,
  GFA_TOTAL,
  PERFORMANCE,
  PILLARS,
  PRINCIPLES,
  PROGRAM_STATS,
  PROJECT,
  PROHIBITED_CLAIMS,
  REJECTED,
  STANDARDS_INT,
  STANDARDS_KW,
  STANDARDS_NA,
  STRUCTURE,
  UNITS,
  VENDORS,
  ZONES,
} from "@/lib/catalogue-data";
import { cn } from "@/lib/utils";
import { RingPlan } from "./RingPlan";
import { StarMark } from "./StarMark";
import { Arabic, ChapterHead, Kicker, Metric, Rule, Slide, SpecRow, StatusChip } from "./primitives";
import {
  Building2,
  CircuitBoard,
  Droplets,
  Leaf,
  Mail,
  Phone,
  Shield,
  SunMedium,
  Waves,
  Users,
} from "lucide-react";

export type SlideDef = {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  render: () => ReactNode;
};

function CoverSlide() {
  return (
    <Slide className="bg-bg" flush>
      <div className="relative min-h-full flex-1">
        <img
          src="/images/hero-skyline.png"
          alt="HHMYC on the Kuwait waterfront at night"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/80 to-bg/20" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/40" />

        <div className="relative z-10 flex min-h-full flex-col justify-between px-6 pt-16 pb-10 sm:px-12 lg:px-16 lg:pt-20 lg:pb-14">
          <div className="stagger-in max-w-xl">
            <StarMark className="h-16 w-16 sm:h-20 sm:w-20" />
            <Arabic className="mt-6 text-body text-fg/80">{PROJECT.nameAr}</Arabic>
            <h1 className="mt-5 font-display text-hero font-medium tracking-[0.18em] text-fg">
              {PROJECT.code}
            </h1>
            <p className="mt-2 font-sans text-kicker tracking-[0.42em] text-accent uppercase">
              Design Basis Register
            </p>
            <Rule className="mt-6 w-24" />
            <p className="mt-5 text-caption tracking-[0.22em] text-muted uppercase">
              {PROJECT.rev}  ·  {PROJECT.date}
            </p>
          </div>

          <div className="max-w-lg stagger-in">
            <p className="font-display text-lede tracking-[0.12em] text-accent-2 uppercase">
              {PROJECT.taglineEn}
            </p>
            <Arabic className="mt-2">{PROJECT.taglineAr}</Arabic>
            <p className="mt-6 text-micro tracking-[0.18em] text-dim uppercase">
              Status: {PROJECT.status}
            </p>
            <p className="mt-1 max-w-sm text-micro leading-relaxed text-dim">{PROJECT.stage}</p>
            <p className="mt-6 hidden text-caption text-muted sm:block">
              Press <span className="text-fg">→</span> or swipe to continue
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ContentsSlide({ onJump }: { onJump: (id: string) => void }) {
  const chapters = SLIDES.filter((s) => s.id !== "cover" && s.id !== "contents");
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead index="00" title="Contents" arabic="المحتويات" kicker="Register index" />
      <ol className="mt-8 grid gap-0 sm:grid-cols-2 sm:gap-x-12">
        {chapters.map((s) => (
          <li key={s.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => onJump(s.id)}
              className="flex w-full items-baseline gap-4 py-3.5 text-start transition-colors duration-150 hover:text-accent-2"
            >
              <span className="w-8 shrink-0 font-display text-caption tabular text-accent">
                {s.num}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-sans text-body text-fg">{s.title}</span>
                <span dir="rtl" lang="ar" className="mt-0.5 block font-arabic text-caption text-dim">
                  {s.titleAr}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-caption leading-relaxed text-dim">{PROJECT.note}</p>
    </Slide>
  );
}

function VisionSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-16 lg:pb-8">
      <div>
        <ChapterHead
          index="01"
          title="A pledge and a promise"
          arabic={PROJECT.taglineAr}
          kicker="Mandate"
        />
        <p className="mt-8 max-w-xl text-lede leading-relaxed text-fg/90">{CONCEPT}</p>
        <p className="mt-6 max-w-xl text-body leading-relaxed text-muted">
          {PROJECT.nameEn}. A coastal ring of ten identical units around an unbuilt oasis —
          architecture as national emblem, not a landmark object.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Metric value="10" label="Identical units" />
          <Metric value="36°" label="Rotational increment" />
          <Metric value="46,000" unit="m²" label="Total GFA" />
          <Metric value="Ø 68" unit="m" label="Open oasis" />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 lg:mt-4">
        <div className="relative min-h-56 flex-1 overflow-hidden border border-line">
          <img
            src="/images/oasis.png"
            alt="Aerial of the ten-unit ring and central oasis"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {PILLARS.map((p) => (
            <li key={p.id} className="bg-bg px-4 py-4">
              <p className="text-body text-fg">{p.en}</p>
              <Arabic className="mt-1">{p.ar}</Arabic>
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
}

function GeometrySlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead
          index="02"
          title="Governing geometry"
          arabic="الهندسة الحاكمة"
          kicker="Parametric control package"
        />
        <p className="mt-6 max-w-md text-body leading-relaxed text-muted">{GEOMETRY.unitForm}</p>
        <div className="mt-6">
          <SpecRow label="Identical units / increment" value={`${GEOMETRY.units} / ${GEOMETRY.increment}`} />
          <SpecRow label="Unit outline" value={GEOMETRY.outline} />
          <SpecRow label="Unit plan L × W" value={GEOMETRY.unitLxW} />
          <SpecRow label="Floor area / floors" value={GEOMETRY.floorArea} />
          <SpecRow label="Finished floor levels" value={GEOMETRY.ffl} />
          <SpecRow label="Roof datum / apex" value={`${GEOMETRY.roofDatum} / ${GEOMETRY.roofApex}`} />
          <SpecRow label="Inner tip / oasis" value={`${GEOMETRY.innerTip} / ${GEOMETRY.oasis}`} />
          <SpecRow label="Outer crown / ring" value={`${GEOMETRY.outerCrown} / ${GEOMETRY.ring}`} />
          <SpecRow label="Roof gridshell" value={GEOMETRY.roofShell} />
          <SpecRow label="Diagrid cell" value={GEOMETRY.diagrid} />
          <SpecRow label="Connectors" value={`${GEOMETRY.connectors} · ${GEOMETRY.connectorArea}`} />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:mt-2">
        <div className="relative flex-1 overflow-hidden border border-line bg-bg-elevated">
          <img
            src="/images/ring-aerial.jpg"
            alt="Axonometric of the ten-unit ring"
            className="h-full min-h-64 w-full object-contain"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Metric value="159.52" unit="m" label="Ring diameter" />
          <Metric value="20.40" unit="m" label="Roof apex" />
          <Metric value="45.76" unit="m" label="Unit length" />
        </div>
      </div>
    </Slide>
  );
}

function FormLogicSlide() {
  const steps = [
    "Create a ring of radius R",
    "Divide into N equal segments",
    "Place modules tangentially",
    "Connect with smooth bridges",
    "Apply thickness T and set height Z",
    "Ensure interstitial opening C",
  ];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-16">
      <div>
        <ChapterHead index="03" title="Form generation" arabic="منطق التوليد" kicker="Algorithm" />
        <ol className="mt-8 space-y-0">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4 border-b border-line py-3.5">
              <span className="font-display text-caption tabular text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-body text-fg">{s}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <SpecRow label="N" value="10" />
          <SpecRow label="R, Z, T, C" value="Governed variables" />
          <SpecRow label="Levels" value="Three — identical height" />
          <SpecRow label="Style" value={GEOMETRY.style} />
        </div>
      </div>
      <div className="mt-8 lg:mt-4">
        <div className="border border-line bg-bg-elevated p-3 sm:p-5">
          <img
            src="/images/geometry.jpeg"
            alt="Parametric geometry control package"
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="mt-3 text-caption text-dim">
          Repeating ring module · not a graded silhouette · not a central dome
        </p>
      </div>
    </Slide>
  );
}

function AreasSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead index="04" title="Areas & site" arabic="المساحات والموقع" kicker="Gross floor area" />
        <p className="mt-6 font-display text-title tabular text-fg">
          {GFA_TOTAL}
          <span className="ms-2 font-sans text-caption tracking-widest text-muted uppercase">Total GFA</span>
        </p>
        <div className="mt-6">
          {AREAS.map((a) => (
            <div key={a.item} className="border-b border-line py-3">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-body text-fg">{a.item}</p>
                <p className="shrink-0 font-medium tabular text-accent-2">{a.value}</p>
              </div>
              {"detail" in a && a.detail ? (
                <p className="mt-1 text-caption text-dim">{a.detail}</p>
              ) : null}
            </div>
          ))}
          <div className="mt-3 flex items-baseline justify-between border-t border-accent/30 pt-3">
            <p className="text-kicker tracking-[0.18em] text-muted uppercase">Total shared</p>
            <p className="font-display text-lede tabular text-fg">{GFA_SHARED}</p>
          </div>
        </div>
        <ul className="mt-8 space-y-2">
          {PRINCIPLES.map((p) => (
            <li key={p} className="flex gap-3 text-caption text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 lg:mt-2">
        <div className="relative min-h-72 overflow-hidden border border-line lg:h-[calc(100%-2rem)]">
          <img
            src="/images/oasis.png"
            alt="Overall site plan — ring, oasis, and shared facilities"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 start-0 end-0 bg-linear-to-t from-bg to-transparent p-4">
            <p className="text-micro tracking-[0.2em] text-accent uppercase">Overall site plan</p>
            <p className="mt-1 text-caption text-fg">
              Hall, services and walkways sit outside the ring. Oasis remains open.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ProgramSlide() {
  const [active, setActive] = useState<number>(1);
  const unit = UNITS[active - 1];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:px-14">
      <div>
        <ChapterHead index="05" title="Functional program" arabic="البرنامج الوظيفي" kicker="Clockwise from south" />
        <p className="mt-6 text-body leading-relaxed text-muted">
          Sequence from the south entry: {CLOCKWISE_FROM_SOUTH.join(" → ")}. Select a unit on the
          ring.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {PROGRAM_STATS.map((s) => (
            <Metric key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <div className="mt-8 border border-line bg-surface p-5">
          <Kicker>Unit {String(unit.n).padStart(2, "0")}</Kicker>
          <h3 className="mt-2 font-display text-title text-fg">{unit.name}</h3>
          <p className="mt-2 text-body text-muted">{unit.brief}</p>
          {unit.n === 10 ? (
            <p className="mt-3 text-caption text-warn">
              Immersive theatre remains a decision: small 12–14 m dome in a double-height volume of
              unit 10, or a distributed digital experience. No 20–25 m dome.
            </p>
          ) : null}
          {unit.n === 8 ? (
            <p className="mt-3 text-caption text-muted">
              Local double height by omitting part of the level-1 slab. All unit outlines remain
              identical.
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center lg:mt-0">
        <div className="w-full max-w-lg">
          <RingPlan active={active} onSelect={setActive} showLabels={false} />
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {UNITS.map((u) => (
              <button
                key={u.n}
                type="button"
                onClick={() => setActive(u.n)}
                className={cn(
                  "inline-flex size-11 items-center justify-center font-display text-caption tabular transition-colors duration-150",
                  active === u.n
                    ? "bg-accent text-bg"
                    : "border border-line text-muted hover:border-accent hover:text-fg",
                )}
                aria-label={u.name}
              >
                {u.n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function StructureSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead
        index="06"
        title="Structure & fabrication"
        arabic="الهيكل والتصنيع"
        kicker="Design basis"
      />
      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
        {STRUCTURE.map((s) => (
          <article key={s.title} className="bg-bg p-5 sm:p-6">
            <h3 className="font-sans text-body font-medium text-fg">{s.title}</h3>
            <p className="mt-2 text-caption leading-relaxed text-muted">{s.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-caption leading-relaxed text-dim">
        Shipping: all kits in 40-foot containers; connections disassembled; marine delivery. One
        master kit × 10 — prototype unit 01 complete before serial.
      </p>
    </Slide>
  );
}

function EnergySlide() {
  const icons = [SunMedium, CircuitBoard, Waves, Droplets, Shield, Leaf];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead index="07" title="Energy, cooling, data" arabic="الطاقة والتبريد والبيانات" kicker="Performance envelope" />
        <div className="mt-8 space-y-5">
          <div className="flex gap-3 text-muted">
            <SunMedium className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className="text-caption leading-relaxed">
              BIPV integrated roofs with high-efficiency photovoltaic glass — dark navy, not
              decorative.
            </p>
          </div>
          <div className="flex gap-3 text-muted">
            <Waves className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className="text-caption leading-relaxed">
              Direct seawater intake from the open sea beyond the breakwater. The lagoon is a
              microclimate, not a cooling source.
            </p>
          </div>
          <div className="flex gap-3 text-muted">
            <Shield className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className="text-caption leading-relaxed">
              Sovereign data infrastructure above flood datum. Specification-based, vendor-neutral
              in security scope.
            </p>
          </div>
        </div>
        <div className="relative mt-8 min-h-48 overflow-hidden border border-line">
          <img
            src="/images/ring-aerial.jpg"
            alt="BIPV roof shells on the ten-unit ring"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-2">
        {ENERGY.map((e, i) => {
          const Icon = icons[i] ?? Building2;
          return (
            <article key={e.title} className="border border-line bg-surface p-4">
              <Icon className="size-4 text-accent" />
              <p className="mt-3 text-kicker tracking-[0.16em] text-muted uppercase">{e.title}</p>
              <p className="mt-1 font-display text-lede tabular text-fg">{e.value}</p>
              <p className="mt-2 text-caption leading-relaxed text-muted">{e.body}</p>
            </article>
          );
        })}
      </div>
    </Slide>
  );
}

function SpecsSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead
        index="08"
        title="Technical specifications"
        arabic="المواصفات التقنية والمكوّنات"
        kicker="Color-coded zones · Panel Rev 1.1"
      />
      <p className="mt-5 max-w-2xl text-caption leading-relaxed text-muted">
        Each colour marks a construction / systems zone. Materials and grades below are the Rev 1.1
        basis. Where this panel and the Register would conflict, the Register prevails.
      </p>
      <ul className="mt-8 divide-y divide-line">
        {ZONES.map((z) => (
          <li key={z.name} className="flex gap-4 py-3">
            <span
              className="mt-1 h-3 w-3 shrink-0 rounded-xs"
              style={{ background: z.color }}
              aria-hidden
            />
            <div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-6">
              <p className="text-body text-fg">{z.name}</p>
              <p className="mt-1 text-caption leading-relaxed text-muted md:mt-0">{z.spec}</p>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  );
}

function VendorsSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-10 lg:px-14">
      <ChapterHead
        index="09"
        title="Vendor & package matrix"
        arabic="مصفوفة المورّدين والحزم"
        kicker="Named suppliers in non-sensitive scope only"
      />
      <p className="mt-4 max-w-3xl text-caption leading-relaxed text-muted">
        In sovereign, security, network, and data-center scopes, selection is specification-based
        and vendor-neutral, decided at the formal RFQ stage.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-caption">
          <thead>
            <tr className="border-b border-line text-start text-micro tracking-[0.16em] text-dim uppercase">
              <th className="py-2 pe-3 font-medium">Scope</th>
              <th className="py-2 pe-3 font-medium">Named / benchmark</th>
              <th className="py-2 pe-3 font-medium">Status</th>
              <th className="py-2 pe-3 font-medium">Package owner</th>
              <th className="py-2 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {VENDORS.map((v) => (
              <tr key={v.scope} className="border-b border-line/80 align-top">
                <td className="py-2.5 pe-3 text-fg">{v.scope}</td>
                <td className="py-2.5 pe-3 text-muted">{v.named}</td>
                <td className="py-2.5 pe-3">
                  <StatusChip status={v.status} />
                </td>
                <td className="py-2.5 pe-3 text-muted">{v.owner}</td>
                <td className="py-2.5 text-dim">{v.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-micro tracking-wide text-dim">
        OK confirmed · INFO to be tendered · OPEN specification released / RFQ pending · REJ excluded
        / not compliant
      </p>
    </Slide>
  );
}

function PerformanceSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead
          index="10"
          title="Performance indicators"
          arabic="المؤشرات الأدائية"
          kicker="Real values only"
        />
        <p className="mt-4 text-caption text-muted">
          Ranges where the input is uncertain. Any single number given without range or basis has
          been removed.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[540px] text-caption">
            <thead>
              <tr className="border-b border-line text-start text-micro tracking-[0.16em] text-dim uppercase">
                <th className="py-2 pe-3 font-medium">Metric</th>
                <th className="py-2 pe-3 font-medium">Value</th>
                <th className="py-2 font-medium">Basis</th>
              </tr>
            </thead>
            <tbody>
              {PERFORMANCE.map((p) => (
                <tr key={p.metric} className="border-b border-line/80 align-top">
                  <td className="py-2 pe-3 text-fg">{p.metric}</td>
                  <td className="py-2 pe-3 font-medium tabular text-accent-2">{p.value}</td>
                  <td className="py-2 text-dim">{p.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <aside className="mt-8 lg:mt-16">
        <Kicker>Prohibited claims</Kicker>
        <ul className="mt-4 space-y-3">
          {PROHIBITED_CLAIMS.map((c) => (
            <li key={c} className="border-s-2 border-rej/70 ps-3 text-caption leading-relaxed text-muted">
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-caption leading-relaxed text-dim">
          All values are concept-design indicators only and subject to change. Detailed engineering,
          simulation, and certification will refine final figures.
        </p>
      </aside>
    </Slide>
  );
}

function StandardsSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead index="11" title="Applicable standards" arabic="المعايير المنطبقة" kicker="Mandatory and reference" />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <Kicker>A. Kuwait — mandatory</Kicker>
          <ul className="mt-4">
            {STANDARDS_KW.map((s) => (
              <li key={s.ref} className="border-b border-line py-3">
                <p className="text-body text-fg">{s.ref}</p>
                <p className="mt-1 text-caption text-muted">{s.apply}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Kicker>B. International — design references</Kicker>
          <ul className="mt-4">
            {STANDARDS_INT.map((s) => (
              <li key={s.ref} className="flex justify-between gap-4 border-b border-line py-2.5">
                <span className="text-caption text-fg">{s.ref}</span>
                <span className="max-w-[16rem] text-end text-caption text-dim">{s.apply}</span>
              </li>
            ))}
          </ul>
          <Kicker className="mt-8">C. Explicitly not applicable</Kicker>
          <ul className="mt-4">
            {STANDARDS_NA.map((s) => (
              <li key={s.ref} className="border-b border-line py-3">
                <p className="text-body text-fg">{s.ref}</p>
                <p className="mt-1 text-caption text-muted">{s.apply}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}

function ConstraintsSlide() {
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
      <div>
        <ChapterHead
          index="12"
          title="Explicitly rejected"
          arabic="مرفوض صراحة"
          kicker="Do not appear in any drawing or spec"
        />
        <ul className="mt-8">
          {REJECTED.map((r, i) => (
            <li key={r} className="flex gap-4 border-b border-line py-3.5">
              <span className="font-display text-caption tabular text-rej">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-body text-fg">{r}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 lg:mt-16">
        <Kicker>Ornament</Kicker>
        <p className="mt-4 text-lede leading-relaxed text-fg/90">
          Islamic ten-point star geometry. Discreet gold accents in interior finishes only.
        </p>
        <p className="mt-6 text-body leading-relaxed text-muted">
          The ring is the emblem. There is no central dome, no service arc around the oasis, and no
          fourth floor. All ten units share one height, one kit, one outline.
        </p>
        <div className="mt-10 flex justify-center">
          <StarMark className="h-40 w-40 text-accent/80" />
        </div>
      </div>
    </Slide>
  );
}

function DocumentSlide() {
  const rows = [
    { label: "Document", value: "HHMYC Design Basis Register · Technical Specifications Panel" },
    { label: "Revision", value: `${PROJECT.rev}  ·  ${PROJECT.panelRev}` },
    { label: "Date", value: PROJECT.date },
    { label: "Governing basis", value: "HHMC Design Basis Register — this register prevails" },
    { label: "Status", value: "Concept design — not for construction" },
    { label: "Confidentiality", value: "Confidential — for evaluation only" },
    { label: "Prepared by", value: PROJECT.preparedBy },
    { label: "Role", value: PROJECT.roles },
    { label: "Issuer", value: `${PROJECT.firm} · ${PROJECT.jurisdiction}` },
    { label: "Copyright", value: `${PROJECT.firm} — ${PROJECT.rights}` },
  ];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-16">
      <div>
        <ChapterHead
          index="13"
          title="Document control"
          arabic="ضبط الوثيقة"
          kicker="Colophon"
        />
        <p className="mt-6 max-w-xl text-body leading-relaxed text-muted">
          This catalogue is subordinate to the Design Basis Register. In case of any conflict, the
          Register prevails and this catalogue is updated — not the reverse.
        </p>
        <div className="mt-8">
          {rows.map((r) => (
            <SpecRow key={r.label} label={r.label} value={r.value} />
          ))}
        </div>
      </div>
      <aside className="mt-10 border border-line bg-surface p-6 sm:p-8 lg:mt-16">
        <Kicker>Issued by</Kicker>
        <p className="mt-4 font-display text-title text-fg">{PROJECT.preparedBy}</p>
        <p className="mt-2 text-body text-muted">{PROJECT.roles}</p>
        <Rule className="mt-6" />
        <p className="mt-6 text-lede text-fg">{PROJECT.firm}</p>
        <p className="mt-1 text-caption tracking-[0.16em] text-dim uppercase">
          {PROJECT.rights} · {PROJECT.jurisdiction}
        </p>
        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${PROJECT.email}`}
            className="flex min-h-11 items-center gap-3 text-body text-accent-2 transition-colors duration-150 hover:text-fg"
          >
            <Mail className="size-4 shrink-0 text-accent" />
            {PROJECT.email}
          </a>
          <a
            href={PROJECT.mobileHref}
            className="flex min-h-11 items-center gap-3 text-body tabular text-accent-2 transition-colors duration-150 hover:text-fg"
          >
            <Phone className="size-4 shrink-0 text-accent" />
            {PROJECT.mobile}
          </a>
        </div>
      </aside>
    </Slide>
  );
}

function CloseSlide() {
  return (
    <Slide className="relative bg-bg" flush>
      <img
        src="/images/hero-skyline.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/85 to-bg/50" />
      <div className="relative z-10 flex min-h-full flex-col justify-between px-6 pt-20 pb-12 sm:px-12 lg:px-16">
        <div className="stagger-in max-w-2xl">
          <StarMark className="h-16 w-16" />
          <Arabic className="mt-6 text-body">{PROJECT.nameAr}</Arabic>
          <p className="mt-2 max-w-lg text-caption leading-relaxed text-muted">{PROJECT.nameEn}</p>
          <h2 className="mt-8 font-display text-hero font-medium tracking-[0.14em] text-fg">
            {PROJECT.code}
          </h2>
          <p className="mt-2 text-kicker tracking-[0.38em] text-accent uppercase">
            Design Basis Register
          </p>
          <Rule className="mt-6 w-24" />
          <p className="mt-6 font-display text-lede tracking-[0.1em] text-accent-2 uppercase">
            {PROJECT.taglineEn}
          </p>
        </div>
        <div className="grid gap-8 border-t border-line pt-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { t: "Governing register", i: Building2 },
              { t: "Parametric certainty", i: CircuitBoard },
              { t: "Integrated design", i: Users },
              { t: "National sovereignty", i: Shield },
            ].map((x) => (
              <div key={x.t}>
                <x.i className="size-4 text-accent" />
                <p className="mt-3 text-caption tracking-wide text-fg">{x.t}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-display text-lede text-fg">{PROJECT.preparedBy}</p>
            <p className="mt-1 text-caption text-muted">{PROJECT.roles}</p>
            <p className="mt-3 text-caption text-accent-2">
              {PROJECT.firm} · {PROJECT.rights} · {PROJECT.jurisdiction}
            </p>
            <div className="mt-3 flex flex-col gap-1 text-caption">
              <a href={`mailto:${PROJECT.email}`} className="text-muted transition-colors duration-150 hover:text-fg">
                {PROJECT.email}
              </a>
              <a href={PROJECT.mobileHref} className="tabular text-muted transition-colors duration-150 hover:text-fg">
                {PROJECT.mobile}
              </a>
            </div>
          </div>
        </div>
        <div className="text-micro leading-relaxed text-dim">
          <p>
            {PROJECT.rev} · {PROJECT.date} · {PROJECT.confidential}
          </p>
          <p className="mt-1">{PROJECT.note}</p>
        </div>
      </div>
    </Slide>
  );
}

export const SLIDES: SlideDef[] = [
  { id: "cover", num: "00", title: "Cover", titleAr: "الغلاف", render: () => <CoverSlide /> },
  {
    id: "contents",
    num: "00",
    title: "Contents",
    titleAr: "المحتويات",
    render: () => <ContentsSlide onJump={() => undefined} />,
  },
  { id: "vision", num: "01", title: "Mandate", titleAr: "العهد", render: () => <VisionSlide /> },
  {
    id: "geometry",
    num: "02",
    title: "Governing geometry",
    titleAr: "الهندسة الحاكمة",
    render: () => <GeometrySlide />,
  },
  {
    id: "form",
    num: "03",
    title: "Form generation",
    titleAr: "منطق التوليد",
    render: () => <FormLogicSlide />,
  },
  { id: "areas", num: "04", title: "Areas & site", titleAr: "المساحات والموقع", render: () => <AreasSlide /> },
  {
    id: "program",
    num: "05",
    title: "Functional program",
    titleAr: "البرنامج الوظيفي",
    render: () => <ProgramSlide />,
  },
  {
    id: "structure",
    num: "06",
    title: "Structure & fabrication",
    titleAr: "الهيكل والتصنيع",
    render: () => <StructureSlide />,
  },
  {
    id: "energy",
    num: "07",
    title: "Energy, cooling, data",
    titleAr: "الطاقة والتبريد والبيانات",
    render: () => <EnergySlide />,
  },
  {
    id: "specs",
    num: "08",
    title: "Technical specifications",
    titleAr: "المواصفات التقنية",
    render: () => <SpecsSlide />,
  },
  {
    id: "vendors",
    num: "09",
    title: "Vendor matrix",
    titleAr: "مصفوفة المورّدين",
    render: () => <VendorsSlide />,
  },
  {
    id: "performance",
    num: "10",
    title: "Performance indicators",
    titleAr: "المؤشرات الأدائية",
    render: () => <PerformanceSlide />,
  },
  {
    id: "standards",
    num: "11",
    title: "Applicable standards",
    titleAr: "المعايير المنطبقة",
    render: () => <StandardsSlide />,
  },
  {
    id: "constraints",
    num: "12",
    title: "Rejected items",
    titleAr: "مرفوض صراحة",
    render: () => <ConstraintsSlide />,
  },
  {
    id: "document",
    num: "13",
    title: "Document control",
    titleAr: "ضبط الوثيقة",
    render: () => <DocumentSlide />,
  },
  { id: "close", num: "14", title: "Close", titleAr: "الختام", render: () => <CloseSlide /> },
];

export function renderSlide(id: string, onJump: (id: string) => void): ReactNode {
  if (id === "contents") return <ContentsSlide onJump={onJump} />;
  const found = SLIDES.find((s) => s.id === id);
  return found ? found.render() : <CoverSlide />;
}
