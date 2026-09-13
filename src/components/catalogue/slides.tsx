import { useState, type ReactNode } from "react";
import {
  AREAS,
  CLOCKWISE_FROM_SOUTH,
  CONCEPT,
  CONCEPT_AR,
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
import { UI, useLocale } from "@/lib/locale";
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
  const { isAr, t } = useLocale();
  return (
    <Slide className="bg-bg" flush>
      <div className="relative min-h-full flex-1">
        <img
          src="/images/hero-skyline.png"
          alt={t("HHMYC on the Kuwait waterfront at night", "المركز على الواجهة البحرية الكويتية ليلاً")}
          className="cover-photo absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />
        <div className="cover-veil absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/40" />

        <div className="relative z-10 flex min-h-full flex-col justify-between px-6 pt-16 pb-10 sm:px-12 lg:px-16 lg:pt-20 lg:pb-14">
          <div className="stagger-in max-w-xl">
            <StarMark className="h-16 w-16 sm:h-20 sm:w-20" />
            <p
              className={cn(
                "mt-6 text-body text-fg/80",
                isAr ? "font-arabic" : "font-arabic",
              )}
              dir="rtl"
              lang="ar"
            >
              {PROJECT.nameAr}
            </p>
            {!isAr ? (
              <p className="mt-2 max-w-lg text-caption leading-relaxed text-dim">{PROJECT.nameEn}</p>
            ) : (
              <p className="mt-2 max-w-lg font-sans text-caption leading-relaxed text-dim">
                {PROJECT.nameEn}
              </p>
            )}
            <h1 className="mt-5 font-latin font-display text-hero font-medium tracking-[0.18em] text-fg">
              {PROJECT.code}
            </h1>
            <p
              className={cn(
                "mt-2 text-kicker text-accent",
                isAr ? "font-arabic tracking-normal" : "font-sans tracking-[0.42em] uppercase",
              )}
            >
              {t(UI.register.en, UI.register.ar)}
            </p>
            <Rule className="mt-6 w-24" />
            <p className="mt-5 text-caption tracking-[0.22em] text-muted uppercase">
              {PROJECT.rev}  ·  {t(PROJECT.date, PROJECT.dateAr)}
            </p>
          </div>

          <div className="max-w-lg stagger-in">
            <p
              className={cn(
                "text-lede text-accent-2",
                isAr ? "font-arabic tracking-normal" : "font-display tracking-[0.12em] uppercase",
              )}
            >
              {t(PROJECT.taglineEn, PROJECT.taglineAr)}
            </p>
            {!isAr ? <Arabic className="mt-2">{PROJECT.taglineAr}</Arabic> : (
              <p className="mt-2 font-sans text-caption tracking-wide text-dim">{PROJECT.taglineEn}</p>
            )}
            <p className={cn("mt-6 text-micro text-dim", isAr ? "font-arabic tracking-normal" : "tracking-[0.18em] uppercase")}>
              {t(UI.status.en, UI.status.ar)}: {t(PROJECT.status, PROJECT.statusAr)}
            </p>
            <p className={cn("mt-1 max-w-sm text-micro leading-relaxed text-dim", isAr && "font-arabic")}>
              {t(PROJECT.stage, PROJECT.stageAr)}
            </p>
            <p className={cn("mt-6 hidden text-caption text-muted sm:block", isAr && "font-arabic")}>
              {t(UI.continueHint.en, UI.continueHint.ar)}
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ContentsSlide({ onJump }: { onJump: (id: string) => void }) {
  const { isAr, t } = useLocale();
  const chapters = SLIDES.filter((s) => s.id !== "cover" && s.id !== "contents");
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead
        index="00"
        title="Contents"
        arabic="المحتويات"
        kicker="Register index"
        kickerAr="فهرس السجل"
      />
      <ol className="mt-8 grid gap-0 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
        {chapters.map((s) => (
          <li key={s.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => onJump(s.id)}
              className="flex w-full items-baseline gap-4 py-2.5 text-start transition-colors duration-150 hover:text-accent-2"
            >
              <span className="w-8 shrink-0 font-latin font-display text-caption tabular text-accent">
                {s.num}
              </span>
              <span className="min-w-0 flex-1">
                <span className={cn("block text-body text-fg", isAr ? "font-arabic" : "font-sans")}>
                  {t(s.title, s.titleAr)}
                </span>
                <span
                  className={cn("mt-0.5 block text-caption text-dim", isAr ? "font-sans" : "font-arabic")}
                  dir={isAr ? "ltr" : "rtl"}
                  lang={isAr ? "en" : "ar"}
                >
                  {isAr ? s.title : s.titleAr}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <p className={cn("mt-8 max-w-2xl text-caption leading-relaxed text-dim", isAr && "font-arabic")}>
        {t(PROJECT.note, PROJECT.noteAr)}
      </p>
    </Slide>
  );
}

function VisionSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-16 lg:pb-8">
      <div>
        <ChapterHead
          index="01"
          title="A pledge and a promise"
          arabic={PROJECT.taglineAr}
          kicker="Mandate"
          kickerAr="العهد"
        />
        <p className={cn("mt-8 max-w-xl text-lede leading-relaxed text-fg/90", isAr && "font-arabic")}>
          {t(CONCEPT, CONCEPT_AR)}
        </p>
        <p className={cn("mt-6 max-w-xl text-body leading-relaxed text-muted", isAr && "font-arabic")}>
          {t(
            `${PROJECT.nameEn}. A coastal ring of ten identical units around an unbuilt oasis — architecture as national emblem, not a landmark object.`,
            `${PROJECT.nameAr}. حلقة ساحلية من عشر وحدات متطابقة حول واحة غير مبنية — العمارة شعاراً وطنياً لا معلماً منفرداً.`,
          )}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Metric value="10" label={t("Identical units", "وحدات متطابقة")} />
          <Metric value="36°" label={t("Rotational increment", "الزيادة الدورانية")} />
          <Metric value="46,000" unit="m²" label={t("Total GFA", "المساحة الإجمالية")} />
          <Metric value="Ø 68" unit="m" label={t("Open oasis", "الواحة المفتوحة")} />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 lg:mt-4">
        <div className="relative min-h-56 flex-1 overflow-hidden border border-line">
          <img
            src="/images/oasis.png"
            alt={t("Aerial of the ten-unit ring and central oasis", "منظور جوي للحلقة ذات العشر وحدات والواحة")}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {PILLARS.map((p) => (
            <li key={p.id} className="bg-bg px-4 py-4">
              <p className={cn("text-body text-fg", isAr && "font-arabic")}>{t(p.en, p.ar)}</p>
              <p
                className={cn("mt-1 text-caption text-dim", isAr ? "font-sans" : "font-arabic")}
                dir={isAr ? "ltr" : "rtl"}
                lang={isAr ? "en" : "ar"}
              >
                {isAr ? p.en : p.ar}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
}

function GeometrySlide() {
  const { t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead
          index="02"
          title="Governing geometry"
          arabic="الهندسة الحاكمة"
          kicker="Parametric control package"
          kickerAr="حزمة التحكم البارامتري"
        />
        <p className="mt-6 max-w-md text-body leading-relaxed text-muted">
          {t(GEOMETRY.unitForm, GEOMETRY.unitFormAr)}
        </p>
        <div className="mt-6">
          <SpecRow label={t("Identical units / increment", "وحدات متطابقة / الزيادة")} value={`${GEOMETRY.units} / ${GEOMETRY.increment}`} />
          <SpecRow label={t("Unit outline", "محيط الوحدة")} value={t(GEOMETRY.outline, GEOMETRY.outlineAr)} />
          <SpecRow label={t("Unit plan L × W", "مخطط الوحدة ط × ع")} value={GEOMETRY.unitLxW} />
          <SpecRow label={t("Floor area / floors", "مساحة الطابق / الطوابق")} value={t(GEOMETRY.floorArea, GEOMETRY.floorAreaAr)} />
          <SpecRow label={t("Finished floor levels", "مناسيب الأرضيات")} value={GEOMETRY.ffl} />
          <SpecRow label={t("Roof datum / apex", "منسوب السقف / القمة")} value={`${GEOMETRY.roofDatum} / ${GEOMETRY.roofApex}`} />
          <SpecRow label={t("Inner tip / oasis", "الرأس الداخلي / الواحة")} value={`${GEOMETRY.innerTip} / ${GEOMETRY.oasis}`} />
          <SpecRow label={t("Outer crown / ring", "التاج الخارجي / الحلقة")} value={`${GEOMETRY.outerCrown} / ${GEOMETRY.ring}`} />
          <SpecRow label={t("Roof gridshell", "شبكة السقف")} value={t(GEOMETRY.roofShell, GEOMETRY.roofShellAr)} />
          <SpecRow label={t("Diagrid cell", "خلية الشبكة المائلة")} value={GEOMETRY.diagrid} />
          <SpecRow label={t("Connectors", "الروابط")} value={`${t(GEOMETRY.connectors, GEOMETRY.connectorsAr)} · ${t(GEOMETRY.connectorArea, GEOMETRY.connectorAreaAr)}`} />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:mt-2">
        <div className="relative flex-1 overflow-hidden border border-line bg-bg-elevated">
          <img
            src="/images/ring-aerial.jpg"
            alt={t("Axonometric of the ten-unit ring", "منظور محوري للحلقة ذات العشر وحدات")}
            className="h-full min-h-64 w-full object-contain"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Metric value="159.52" unit="m" label={t("Ring diameter", "قطر الحلقة")} />
          <Metric value="20.40" unit="m" label={t("Roof apex", "قمة السقف")} />
          <Metric value="45.76" unit="m" label={t("Unit length", "طول الوحدة")} />
        </div>
      </div>
    </Slide>
  );
}

function FormLogicSlide() {
  const { isAr, t } = useLocale();
  const steps = [
    { en: "Create a ring of radius R", ar: "إنشاء حلقة بنصف قطر R" },
    { en: "Divide into N equal segments", ar: "التقسيم إلى N قطاعاً متساوياً" },
    { en: "Place modules tangentially", ar: "وضع الوحدات مماسّة للحلقة" },
    { en: "Connect with smooth bridges", ar: "الربط بجسور سلسة" },
    { en: "Apply thickness T and set height Z", ar: "تطبيق السماكة T وتعيين الارتفاع Z" },
    { en: "Ensure interstitial opening C", ar: "ضمان الفتحة البينية C" },
  ];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-16">
      <div>
        <ChapterHead index="03" title="Form generation" arabic="منطق التوليد" kicker="Algorithm" kickerAr="الخوارزمية" />
        <ol className="mt-8 space-y-0">
          {steps.map((s, i) => (
            <li key={s.en} className="flex gap-4 border-b border-line py-3.5">
              <span className="font-latin font-display text-caption tabular text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("text-body text-fg", isAr && "font-arabic")}>{t(s.en, s.ar)}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <SpecRow label="N" value="10" />
          <SpecRow label="R, Z, T, C" value={t("Governed variables", "متغيرات حاكمة")} />
          <SpecRow label={t("Levels", "المستويات")} value={t("Three — identical height", "ثلاثة — ارتفاع واحد")} />
          <SpecRow label={t("Style", "الأسلوب")} value={t(GEOMETRY.style, GEOMETRY.styleAr)} />
        </div>
      </div>
      <div className="mt-8 lg:mt-4">
        <div className="border border-line bg-bg-elevated p-3 sm:p-5">
          <img
            src="/images/geometry.jpeg"
            alt={t("Parametric geometry control package", "حزمة التحكم الهندسي البارامتري")}
            className="h-auto w-full object-contain"
          />
        </div>
        <p className={cn("mt-3 text-caption text-dim", isAr && "font-arabic")}>
          {t(
            "Repeating ring module · not a graded silhouette · not a central dome",
            "وحدة حلقية متكررة · ليست سيماء متدرجة · ليست قبّة مركزية",
          )}
        </p>
      </div>
    </Slide>
  );
}

function AreasSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead index="04" title="Areas & site" arabic="المساحات والموقع" kicker="Gross floor area" kickerAr="المساحة الإجمالية" />
        <p className="mt-6 font-display text-title tabular text-fg">
          {GFA_TOTAL}
          <span className={cn("ms-2 font-sans text-caption tracking-widest text-muted", isAr ? "font-arabic tracking-normal" : "uppercase")}>
            {t("Total GFA", "المساحة الإجمالية")}
          </span>
        </p>
        <div className="mt-6">
          {AREAS.map((a) => (
            <div key={a.item} className="border-b border-line py-3">
              <div className="flex items-baseline justify-between gap-4">
                <p className={cn("text-body text-fg", isAr && "font-arabic")}>{t(a.item, a.itemAr)}</p>
                <p className="shrink-0 font-medium tabular text-accent-2">{a.value}</p>
              </div>
              {"detail" in a && "detailAr" in a ? (
                <p className={cn("mt-1 text-caption text-dim", isAr && "font-arabic")}>
                  {t(a.detail, a.detailAr)}
                </p>
              ) : null}
            </div>
          ))}
          <div className="mt-3 flex items-baseline justify-between border-t border-accent/30 pt-3">
            <p className={cn("text-kicker text-muted", isAr ? "font-arabic tracking-normal" : "tracking-[0.18em] uppercase")}>
              {t("Total shared", "المشترك الإجمالي")}
            </p>
            <p className="font-display text-lede tabular text-fg">{GFA_SHARED}</p>
          </div>
        </div>
        <ul className="mt-8 space-y-2">
          {PRINCIPLES.map((p) => (
            <li key={p.en} className={cn("flex gap-3 text-caption text-muted", isAr && "font-arabic")}>
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {t(p.en, p.ar)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 lg:mt-2">
        <div className="relative min-h-72 overflow-hidden border border-line lg:h-[calc(100%-2rem)]">
          <img
            src="/images/oasis.png"
            alt={t("Overall site plan — ring, oasis, and shared facilities", "المخطط العام — الحلقة والواحة والمرافق المشتركة")}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 start-0 end-0 bg-linear-to-t from-bg to-transparent p-4">
            <p className={cn("text-micro text-accent", isAr ? "font-arabic tracking-normal" : "tracking-[0.2em] uppercase")}>
              {t("Overall site plan", "المخطط العام")}
            </p>
            <p className={cn("mt-1 text-caption text-fg", isAr && "font-arabic")}>
              {t(
                "Hall, services and walkways sit outside the ring. Oasis remains open.",
                "القاعة والخدمات والممرات خارج الحلقة. الواحة تبقى مفتوحة.",
              )}
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ProgramSlide() {
  const [active, setActive] = useState<number>(1);
  const { isAr, t } = useLocale();
  const unit = UNITS[active - 1];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:px-14">
      <div>
        <ChapterHead index="05" title="Functional program" arabic="البرنامج الوظيفي" kicker="Clockwise from south" kickerAr="باتجاه عقارب الساعة من الجنوب" />
        <p className={cn("mt-6 text-body leading-relaxed text-muted", isAr && "font-arabic")}>
          {t(
            `Sequence from the south entry: ${CLOCKWISE_FROM_SOUTH.join(" → ")}. Select a unit on the ring.`,
            `التسلسل من المدخل الجنوبي: ${CLOCKWISE_FROM_SOUTH.join(" ← ")}. اختر وحدة على الحلقة.`,
          )}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {PROGRAM_STATS.map((s) => (
            <Metric
              key={s.label}
              value={"valueAr" in s ? t(s.value, s.valueAr) : s.value}
              label={t(s.label, s.labelAr)}
            />
          ))}
        </div>
        <div className="mt-8 border border-line bg-surface p-5">
          <Kicker>
            {t("Unit", "الوحدة")} {String(unit.n).padStart(2, "0")}
          </Kicker>
          <h3 className={cn("mt-2 text-title text-fg", isAr ? "font-arabic" : "font-display")}>
            {t(unit.name, unit.nameAr)}
          </h3>
          <p className={cn("mt-2 text-body text-muted", isAr && "font-arabic")}>{t(unit.brief, unit.briefAr)}</p>
          {unit.n === 10 ? (
            <p className={cn("mt-3 text-caption text-warn", isAr && "font-arabic")}>
              {t(
                "Immersive theatre remains a decision: small 12–14 m dome in a double-height volume of unit 10, or a distributed digital experience. No 20–25 m dome.",
                "المسرح الغامر قرار معلّق: قبّة صغيرة 12–14 م في فراغ مزدوج الارتفاع بالوحدة 10، أو تجربة رقمية موزّعة. لا قبّة 20–25 م.",
              )}
            </p>
          ) : null}
          {unit.n === 8 ? (
            <p className={cn("mt-3 text-caption text-muted", isAr && "font-arabic")}>
              {t(
                "Local double height by omitting part of the level-1 slab. All unit outlines remain identical.",
                "ارتفاع مزدوج محلي بحذف جزء من بلاطة المستوى الأول. تبقى محيطات الوحدات متطابقة.",
              )}
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
                  "inline-flex size-11 items-center justify-center font-latin font-display text-caption tabular transition-colors duration-150",
                  active === u.n
                    ? "bg-accent text-bg"
                    : "border border-line text-muted hover:border-accent hover:text-fg",
                )}
                aria-label={t(u.name, u.nameAr)}
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
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead
        index="06"
        title="Structure & fabrication"
        arabic="الهيكل والتصنيع"
        kicker="Design basis"
        kickerAr="أساس التصميم"
      />
      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
        {STRUCTURE.map((s) => (
          <article key={s.title} className="bg-bg p-5 sm:p-6">
            <h3 className={cn("font-sans text-body font-medium text-fg", isAr && "font-arabic")}>
              {t(s.title, s.titleAr)}
            </h3>
            <p className={cn("mt-2 text-caption leading-relaxed text-muted", isAr && "font-arabic")}>
              {t(s.body, s.bodyAr)}
            </p>
          </article>
        ))}
      </div>
      <p className={cn("mt-8 max-w-3xl text-caption leading-relaxed text-dim", isAr && "font-arabic")}>
        {t(
          "Shipping: all kits in 40-foot containers; connections disassembled; marine delivery. One master kit × 10 — prototype unit 01 complete before serial.",
          "الشحن: جميع الأطقم في حاويات 40 قدماً؛ تفكيك الوصلات؛ تسليم بحري. طقم رئيسي واحد × 10 — تكتمل الوحدة النموذجية 01 قبل الإنتاج المتسلسل.",
        )}
      </p>
    </Slide>
  );
}

function EnergySlide() {
  const { isAr, t } = useLocale();
  const icons = [SunMedium, CircuitBoard, Waves, Droplets, Shield, Leaf];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead index="07" title="Energy, cooling, data" arabic="الطاقة والتبريد والبيانات" kicker="Performance envelope" kickerAr="غلاف الأداء" />
        <div className="mt-8 space-y-5">
          <div className="flex gap-3 text-muted">
            <SunMedium className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className={cn("text-caption leading-relaxed", isAr && "font-arabic")}>
              {t(
                "BIPV integrated roofs with high-efficiency photovoltaic glass — dark navy, not decorative.",
                "أسقف BIPV مدمجة بزجاج كهروضوئي عالي الكفاءة — كحلي داكن، ليست زخرفية.",
              )}
            </p>
          </div>
          <div className="flex gap-3 text-muted">
            <Waves className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className={cn("text-caption leading-relaxed", isAr && "font-arabic")}>
              {t(
                "Direct seawater intake from the open sea beyond the breakwater. The lagoon is a microclimate, not a cooling source.",
                "سحب مباشر لمياه البحر من البحر المفتوح خلف حاجر الأمواج. البحيرة مناخ محلي وليست مصدر تبريد.",
              )}
            </p>
          </div>
          <div className="flex gap-3 text-muted">
            <Shield className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className={cn("text-caption leading-relaxed", isAr && "font-arabic")}>
              {t(
                "Sovereign data infrastructure above flood datum. Specification-based, vendor-neutral in security scope.",
                "بنية بيانات سيادية فوق منسوب الفيضان. قائمة على المواصفة، محايدة المورّد في النطاق الأمني.",
              )}
            </p>
          </div>
        </div>
        <div className="relative mt-8 min-h-48 overflow-hidden border border-line">
          <img
            src="/images/ring-aerial.jpg"
            alt={t("BIPV roof shells on the ten-unit ring", "قشور سقف BIPV على الحلقة ذات العشر وحدات")}
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
              <p className={cn("mt-3 text-kicker text-muted", isAr ? "font-arabic tracking-normal" : "tracking-[0.16em] uppercase")}>
                {t(e.title, e.titleAr)}
              </p>
              <p className="mt-1 font-display text-lede tabular text-fg">
                {"valueAr" in e ? t(e.value, e.valueAr) : e.value}
              </p>
              <p className={cn("mt-2 text-caption leading-relaxed text-muted", isAr && "font-arabic")}>
                {t(e.body, e.bodyAr)}
              </p>
            </article>
          );
        })}
      </div>
    </Slide>
  );
}

function SpecsSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead
        index="08"
        title="Technical specifications"
        arabic="المواصفات التقنية والمكوّنات"
        kicker="Color-coded zones · Panel Rev 1.1"
        kickerAr="نطاقات مرمّزة لونياً · اللوحة تنقيح 1.1"
      />
      <p className={cn("mt-5 max-w-2xl text-caption leading-relaxed text-muted", isAr && "font-arabic")}>
        {t(
          "Each colour marks a construction / systems zone. Materials and grades below are the Rev 1.1 basis. Where this panel and the Register would conflict, the Register prevails.",
          "كل لون يحدّد نطاقاً إنشائياً أو أنظمة. المواد والرتب أدناه أساس التنقيح 1.1. عند التعارض يسود السجل.",
        )}
      </p>
      <ul className="mt-6 grid gap-x-10 lg:grid-cols-2">
        {ZONES.map((z) => (
          <li key={z.name} className="flex gap-4 border-b border-line py-2.5">
            <span
              className="mt-1 h-3 w-3 shrink-0 rounded-xs"
              style={{ background: z.color }}
              aria-hidden
            />
            <div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-6">
              <p className={cn("text-body text-fg", isAr && "font-arabic")}>{t(z.name, z.nameAr)}</p>
              <p className={cn("mt-1 text-caption leading-relaxed text-muted md:mt-0", isAr && "font-arabic")}>
                {t(z.spec, z.specAr)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  );
}

function VendorsSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-10 lg:px-14">
      <ChapterHead
        index="09"
        title="Vendor & package matrix"
        arabic="مصفوفة المورّدين والحزم"
        kicker="Named suppliers in non-sensitive scope only"
        kickerAr="مورّدون مسمّون في النطاق غير الحساس فقط"
      />
      <p className={cn("mt-4 max-w-3xl text-caption leading-relaxed text-muted", isAr && "font-arabic")}>
        {t(
          "In sovereign, security, network, and data-center scopes, selection is specification-based and vendor-neutral, decided at the formal RFQ stage.",
          "في نطاقات السيادة والأمن والشبكات ومركز البيانات، الاختيار قائم على المواصفة ومحايد للمورّد، ويُحسم في مرحلة طلب العروض الرسمية.",
        )}
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-caption">
          <thead>
            <tr className={cn("border-b border-line text-start text-micro text-dim", isAr ? "font-arabic tracking-normal" : "tracking-[0.16em] uppercase")}>
              <th className="py-2 pe-3 font-medium">{t("Scope", "النطاق")}</th>
              <th className="py-2 pe-3 font-medium">{t("Named / benchmark", "المسمّى / المرجع")}</th>
              <th className="py-2 pe-3 font-medium">{t("Status", "الحالة")}</th>
              <th className="py-2 pe-3 font-medium">{t("Package owner", "مالك الحزمة")}</th>
              <th className="py-2 font-medium">{t("Notes", "ملاحظات")}</th>
            </tr>
          </thead>
          <tbody>
            {VENDORS.map((v) => (
              <tr key={v.scope} className="border-b border-line/80 align-top">
                <td className={cn("py-2.5 pe-3 text-fg", isAr && "font-arabic")}>{t(v.scope, v.scopeAr)}</td>
                <td className="py-2.5 pe-3 text-muted">{v.named}</td>
                <td className="py-2.5 pe-3">
                  <StatusChip status={v.status} />
                </td>
                <td className={cn("py-2.5 pe-3 text-muted", isAr && "font-arabic")}>{t(v.owner, v.ownerAr)}</td>
                <td className={cn("py-2.5 text-dim", isAr && "font-arabic")}>{t(v.notes, v.notesAr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn("mt-4 text-micro text-dim", isAr ? "font-arabic tracking-normal" : "tracking-wide")}>
        {t(
          "OK confirmed · INFO to be tendered · OPEN specification released / RFQ pending · REJ excluded / not compliant",
          "OK مؤكد · INFO يُطرح للمناقصة · OPEN مواصفة صادرة / طلب عروض معلّق · REJ مستبعد / غير مطابق",
        )}
      </p>
    </Slide>
  );
}

function PerformanceSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-14">
      <div>
        <ChapterHead
          index="10"
          title="Performance indicators"
          arabic="المؤشرات الأدائية"
          kicker="Real values only"
          kickerAr="قيم حقيقية فقط"
        />
        <p className={cn("mt-4 text-caption text-muted", isAr && "font-arabic")}>
          {t(
            "Ranges where the input is uncertain. Any single number given without range or basis has been removed.",
            "نطاقات حيث المدخل غير مؤكد. أُزيل أي رقم منفرد بلا نطاق أو أساس.",
          )}
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[540px] text-caption">
            <thead>
              <tr className={cn("border-b border-line text-start text-micro text-dim", isAr ? "font-arabic tracking-normal" : "tracking-[0.16em] uppercase")}>
                <th className="py-2 pe-3 font-medium">{t("Metric", "المؤشر")}</th>
                <th className="py-2 pe-3 font-medium">{t("Value", "القيمة")}</th>
                <th className="py-2 font-medium">{t("Basis", "الأساس")}</th>
              </tr>
            </thead>
            <tbody>
              {PERFORMANCE.map((p) => (
                <tr key={p.metric} className="border-b border-line/80 align-top">
                  <td className={cn("py-2 pe-3 text-fg", isAr && "font-arabic")}>{t(p.metric, p.metricAr)}</td>
                  <td className="py-2 pe-3 font-medium tabular text-accent-2">
                    {"valueAr" in p ? t(p.value, p.valueAr) : p.value}
                  </td>
                  <td className={cn("py-2 text-dim", isAr && "font-arabic")}>{t(p.basis, p.basisAr)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <aside className="mt-8 lg:mt-16">
        <Kicker>{t("Prohibited claims", "ادعاءات محظورة")}</Kicker>
        <ul className="mt-4 space-y-3">
          {PROHIBITED_CLAIMS.map((c) => (
            <li key={c.en} className={cn("border-s-2 border-rej/70 ps-3 text-caption leading-relaxed text-muted", isAr && "font-arabic")}>
              {t(c.en, c.ar)}
            </li>
          ))}
        </ul>
        <p className={cn("mt-6 text-caption leading-relaxed text-dim", isAr && "font-arabic")}>
          {t(
            "All values are concept-design indicators only and subject to change. Detailed engineering, simulation, and certification will refine final figures.",
            "جميع القيم مؤشرات تصميم مفاهيمي فقط وقابلة للتغيير. الهندسة التفصيلية والمحاكاة والاعتماد ستضبط الأرقام النهائية.",
          )}
        </p>
      </aside>
    </Slide>
  );
}

function StandardsSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:px-16">
      <ChapterHead index="11" title="Applicable standards" arabic="المعايير المنطبقة" kicker="Mandatory and reference" kickerAr="إلزامي ومرجعي" />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <Kicker>{t("A. Kuwait — mandatory", "أ. الكويت — إلزامي")}</Kicker>
          <ul className="mt-4">
            {STANDARDS_KW.map((s) => (
              <li key={s.ref} className="border-b border-line py-3">
                <p className={cn("text-body text-fg", isAr && "font-arabic")}>{t(s.ref, s.refAr)}</p>
                <p className={cn("mt-1 text-caption text-muted", isAr && "font-arabic")}>{t(s.apply, s.applyAr)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Kicker>{t("B. International — design references", "ب. دولي — مراجع تصميم")}</Kicker>
          <ul className="mt-4">
            {STANDARDS_INT.map((s) => (
              <li key={s.ref} className="flex justify-between gap-4 border-b border-line py-2.5">
                <span className="text-caption text-fg">{s.ref}</span>
                <span className={cn("max-w-[16rem] text-end text-caption text-dim", isAr && "font-arabic")}>
                  {t(s.apply, s.applyAr)}
                </span>
              </li>
            ))}
          </ul>
          <Kicker className="mt-8">{t("C. Explicitly not applicable", "ج. غير منطبق صراحة")}</Kicker>
          <ul className="mt-4">
            {STANDARDS_NA.map((s) => (
              <li key={s.ref} className="border-b border-line py-3">
                <p className={cn("text-body text-fg", isAr && "font-arabic")}>
                  {t(s.ref, "refAr" in s ? s.refAr : s.ref)}
                </p>
                <p className={cn("mt-1 text-caption text-muted", isAr && "font-arabic")}>{t(s.apply, s.applyAr)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}

function ConstraintsSlide() {
  const { isAr, t } = useLocale();
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
      <div>
        <ChapterHead
          index="12"
          title="Explicitly rejected"
          arabic="مرفوض صراحة"
          kicker="Do not appear in any drawing or spec"
          kickerAr="لا يظهر في أي رسم أو مواصفة"
        />
        <ul className="mt-8">
          {REJECTED.map((r, i) => (
            <li key={r.en} className="flex gap-4 border-b border-line py-3.5">
              <span className="font-latin font-display text-caption tabular text-rej">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("text-body text-fg", isAr && "font-arabic")}>{t(r.en, r.ar)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 lg:mt-16">
        <Kicker>{t("Ornament", "الزخرفة")}</Kicker>
        <p className={cn("mt-4 text-lede leading-relaxed text-fg/90", isAr && "font-arabic")}>
          {t(
            "Islamic ten-point star geometry. Discreet gold accents in interior finishes only.",
            "هندسة النجمة الإسلامية العشارية. لمسات ذهبية متكتّمة في التشطيبات الداخلية فقط.",
          )}
        </p>
        <p className={cn("mt-6 text-body leading-relaxed text-muted", isAr && "font-arabic")}>
          {t(
            "The ring is the emblem. There is no central dome, no service arc around the oasis, and no fourth floor. All ten units share one height, one kit, one outline.",
            "الحلقة هي الشعار. لا قبّة مركزية، ولا قوس خدمات حول الواحة، ولا طابق رابع. الوحدات العشر تشترك في ارتفاع واحد وطقم واحد ومحيط واحد.",
          )}
        </p>
        <div className="mt-10 flex justify-center">
          <StarMark className="h-40 w-40 text-accent/80" />
        </div>
      </div>
    </Slide>
  );
}

function DocumentSlide() {
  const { isAr, t } = useLocale();
  const rows = [
    {
      label: t("Document", "الوثيقة"),
      value: t(
        "HHMYC Design Basis Register · Technical Specifications Panel",
        "سجل أساس التصميم HHMYC · لوحة المواصفات التقنية",
      ),
    },
    { label: t("Revision", "التنقيح"), value: `${PROJECT.rev}  ·  ${PROJECT.panelRev}` },
    { label: t("Date", "التاريخ"), value: t(PROJECT.date, PROJECT.dateAr) },
    {
      label: t("Governing basis", "الأساس الحاكم"),
      value: t("HHMC Design Basis Register — this register prevails", "سجل أساس التصميم HHMC — هذا السجل يسود"),
    },
    { label: t("Status", "الحالة"), value: t("Concept design — not for construction", "تصميم مفاهيمي — ليس للتنفيذ") },
    { label: t("Confidentiality", "السرية"), value: t("Confidential — for evaluation only", "سري — للتقييم فقط") },
    { label: t("Prepared by", "أعدّه"), value: t(PROJECT.preparedBy, PROJECT.preparedByAr) },
    { label: t("Role", "الصفة"), value: t(PROJECT.roles, PROJECT.rolesAr) },
    { label: t("Issuer", "الجهة المصدرة"), value: `${t(PROJECT.firm, PROJECT.firmAr)} · ${t(PROJECT.jurisdiction, PROJECT.jurisdictionAr)}` },
    { label: t("Copyright", "حقوق النشر"), value: `${t(PROJECT.firm, PROJECT.firmAr)} — ${t(PROJECT.rights, PROJECT.rightsAr)}` },
  ];
  return (
    <Slide className="px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-16">
      <div>
        <ChapterHead
          index="13"
          title="Document control"
          arabic="ضبط الوثيقة"
          kicker="Colophon"
          kickerAr="بيانات الإصدار"
        />
        <p className={cn("mt-6 max-w-xl text-body leading-relaxed text-muted", isAr && "font-arabic")}>
          {t(
            "This catalogue is subordinate to the Design Basis Register. In case of any conflict, the Register prevails and this catalogue is updated — not the reverse.",
            "هذا الكتالوج تابع لسجل أساس التصميم. عند أي تعارض يسود السجل ويُحدَّث الكتالوج — لا العكس.",
          )}
        </p>
        <div className="mt-8">
          {rows.map((r) => (
            <SpecRow key={r.label} label={r.label} value={r.value} />
          ))}
        </div>
      </div>
      <aside className="mt-10 border border-line bg-surface p-6 sm:p-8 lg:mt-16">
        <Kicker>{t("Issued by", "صادر عن")}</Kicker>
        <p className={cn("mt-4 text-title text-fg", isAr ? "font-arabic" : "font-display")}>
          {t(PROJECT.preparedBy, PROJECT.preparedByAr)}
        </p>
        <p className={cn("mt-2 text-body text-muted", isAr && "font-arabic")}>
          {t(PROJECT.roles, PROJECT.rolesAr)}
        </p>
        <Rule className="mt-6" />
        <p className={cn("mt-6 text-lede text-fg", isAr && "font-arabic")}>{t(PROJECT.firm, PROJECT.firmAr)}</p>
        <p className={cn("mt-1 text-caption text-dim", isAr ? "font-arabic tracking-normal" : "tracking-[0.16em] uppercase")}>
          {t(PROJECT.rights, PROJECT.rightsAr)} · {t(PROJECT.jurisdiction, PROJECT.jurisdictionAr)}
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
  const { isAr, t } = useLocale();
  return (
    <Slide className="relative bg-bg" flush>
      <img
        src="/images/hero-skyline.png"
        alt=""
        className="cover-photo absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-40"
      />
      <div className="cover-veil absolute inset-0" />
      <div className="relative z-10 flex min-h-full flex-col justify-between px-6 pt-20 pb-12 sm:px-12 lg:px-16">
        <div className="stagger-in max-w-2xl">
          <StarMark className="h-16 w-16" />
          <p className="mt-6 font-arabic text-body text-fg/80" dir="rtl" lang="ar">
            {PROJECT.nameAr}
          </p>
          <p className="mt-2 max-w-lg font-sans text-caption leading-relaxed text-muted">{PROJECT.nameEn}</p>
          <h2 className="mt-8 font-latin font-display text-hero font-medium tracking-[0.14em] text-fg">
            {PROJECT.code}
          </h2>
          <p className={cn("mt-2 text-kicker text-accent", isAr ? "font-arabic tracking-normal" : "tracking-[0.38em] uppercase")}>
            {t(UI.register.en, UI.register.ar)}
          </p>
          <Rule className="mt-6 w-24" />
          <p className={cn("mt-6 text-lede text-accent-2", isAr ? "font-arabic tracking-normal" : "font-display tracking-[0.1em] uppercase")}>
            {t(PROJECT.taglineEn, PROJECT.taglineAr)}
          </p>
        </div>
        <div className="grid gap-8 border-t border-line pt-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { en: "Governing register", ar: "السجل الحاكم", i: Building2 },
              { en: "Parametric certainty", ar: "يقين بارامتري", i: CircuitBoard },
              { en: "Integrated design", ar: "تصميم متكامل", i: Users },
              { en: "National sovereignty", ar: "السيادة الوطنية", i: Shield },
            ].map((x) => (
              <div key={x.en}>
                <x.i className="size-4 text-accent" />
                <p className={cn("mt-3 text-caption tracking-wide text-fg", isAr && "font-arabic tracking-normal")}>
                  {t(x.en, x.ar)}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className={cn("text-lede text-fg", isAr ? "font-arabic" : "font-display")}>
              {t(PROJECT.preparedBy, PROJECT.preparedByAr)}
            </p>
            <p className={cn("mt-1 text-caption text-muted", isAr && "font-arabic")}>
              {t(PROJECT.roles, PROJECT.rolesAr)}
            </p>
            <p className={cn("mt-3 text-caption text-accent-2", isAr && "font-arabic")}>
              {t(PROJECT.firm, PROJECT.firmAr)} · {t(PROJECT.rights, PROJECT.rightsAr)} · {t(PROJECT.jurisdiction, PROJECT.jurisdictionAr)}
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
        <div className={cn("text-micro leading-relaxed text-dim", isAr && "font-arabic")}>
          <p>
            {PROJECT.rev} · {t(PROJECT.date, PROJECT.dateAr)} · {t(PROJECT.confidential, PROJECT.confidentialAr)}
          </p>
          <p className="mt-1">{t(PROJECT.note, PROJECT.noteAr)}</p>
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
