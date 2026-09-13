export const PROJECT = {
  code: "HHMYC",
  altCode: "HHMC",
  nameEn:
    "Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah Center for Youth and National Sovereign Integration",
  nameAr: "مركز الشيخ مشعل الأحمد الجابر الصباح للشباب والتكامل السيادي الوطني",
  taglineEn: "A Pledge and a Promise… for the Future of Kuwait",
  taglineAr: "عهد ووعد… لكويت المستقبل",
  register: "Design Basis Register",
  registerAr: "سجل أساس التصميم",
  rev: "Rev 1.0",
  panelRev: "Panel Rev 1.1",
  date: "September 2026",
  dateAr: "سبتمبر 2026",
  status: "Governing Register",
  statusAr: "السجل الحاكم",
  stage: "Concept stage — all values subject to survey and geotechnical investigation",
  stageAr: "مرحلة المفهوم — جميع القيم خاضعة للمسح والدراسة الجيوتقنية",
  confidential: "Cohesion Holding — Confidential — Concept design, not for construction",
  confidentialAr: "كوهيجن هولدينغ — سري — تصميم مفاهيمي، ليس للتنفيذ",
  preparedBy: "Eng. Hamad Alotaibi",
  preparedByAr: "م. حمد العتيبي",
  preparedFor: "Eng. Hamad Alotaibi, Cohesion Holding, Kuwait",
  roles: "Strategic Advisor · Founder · Sovereign Systems Engineer",
  rolesAr: "مستشار استراتيجي · مؤسس · مهندس نظم سيادية",
  firm: "Cohesion Holding",
  firmAr: "كوهيجن هولدينغ",
  rights: "All rights reserved 2026",
  rightsAr: "جميع الحقوق محفوظة 2026",
  jurisdiction: "Kuwait",
  jurisdictionAr: "الكويت",
  email: "cohesionkw@gmail.com",
  mobile: "+965 51179990",
  mobileHref: "tel:+96551179990",
  note: "Every project document shall cite this register and shall not restate a value that differs from it.",
  noteAr: "يلتزم كل مستند في المشروع بهذا السجل ولا يعيد ذكر قيمة تختلف عنه.",
} as const;

export const PILLARS = [
  {
    id: "sovereign",
    en: "National Sovereign Integration",
    ar: "التكامل السيادي الوطني",
  },
  {
    id: "youth",
    en: "Youth Empowerment & Capacity Building",
    ar: "تمكين الشباب وتطوير القدرات",
  },
  {
    id: "innovation",
    en: "Innovation & Advanced Technologies",
    ar: "الابتكار والتقنيات المتقدمة",
  },
  {
    id: "sustain",
    en: "Sustainability & Social Responsibility",
    ar: "الاستدامة والمسؤولية المجتمعية",
  },
] as const;

export const GEOMETRY = {
  units: 10,
  increment: "36°",
  outline: "Degree-8 Bézier B₀–Bₙ, mirrored about U = 0",
  outlineAr: "منحنى بيزييه من الدرجة الثامنة B₀–Bₙ، متناظر حول U = 0",
  unitLxW: "45.760 × 32.261 m",
  unitL: 45.76,
  unitW: 32.261,
  floorArea: "1,050 m² × 3 levels",
  floorAreaAr: "1,050 م² × 3 مستويات",
  ffl: "0.000 / +4.800 / +9.200",
  roofDatum: "+13.600 m",
  roofApex: "+20.400 m",
  roofShell: "38.0 × 28.0 m, rise 6.800 m",
  roofShellAr: "38.0 × 28.0 م، ارتفاع 6.800 م",
  diagrid: "2.4 – 3.0 m",
  minRadii: "4.525 / 6.085 / 7.181 m  (≥ 4.5 m)",
  innerTip: "34.000 m",
  oasis: "Ø 68.000 m",
  outerCrown: "79.760 m",
  ring: "Ø 159.520 m",
  connectors: "10 per level × 3 levels",
  connectorsAr: "10 لكل مستوى × 3 مستويات",
  connectorBand: "V = 17–23 m",
  clearGap: "6.11–6.74 m",
  connectorWidth: "6.5 m",
  connectorArea: "40 m² each",
  connectorAreaAr: "40 م² لكل رابط",
  links: "30 necks, 40 m² each",
  unitForm: "Symmetric soft-edged geometric form. Not a teardrop, not a petal.",
  unitFormAr: "شكل هندسي متناظر ذو حواف ليّنة. ليس دمعة ولا بتلة.",
  style: "Modern, high-end, high-contrast — black, dark gray, silver.",
  styleAr: "حديث، راقٍ، عالي التباين — أسود ورمادي داكن وفضي.",
  heightNoBase: "40.8 m",
  heightWithBase: "48.8 m",
  riseToSpan: "0.18",
} as const;

export const AREAS = [
  {
    item: "Ten Units (10 × 3,150 m²)",
    itemAr: "العشر وحدات (10 × 3,150 م²)",
    value: "31,500 m²",
    group: "ring",
  },
  {
    item: "Connectors (30 × 40 m²)",
    itemAr: "الروابط (30 × 40 م²)",
    value: "1,200 m²",
    group: "shared",
  },
  {
    item: "Hall and Administration Pavilion",
    itemAr: "جناح القاعة والإدارة",
    detail: "800-seat hall, lobbies, admin, hospitality, prayer, clinic, visitor services",
    detailAr: "قاعة 800 مقعد، بهوات، إدارة، ضيافة، مصلى، عيادة، خدمات الزوار",
    value: "5,500 m²",
    group: "shared",
  },
  {
    item: "Services and Utilities Building",
    itemAr: "مبنى الخدمات والمرافق",
    detail: "Data center, SOC, NOC, BMS, UPS, cooling, substation, generators, batteries, water, security, logistics",
    detailAr: "مركز بيانات، SOC، NOC، BMS، UPS، تبريد، محطة فرعية، مولدات، بطاريات، مياه، أمن، إمداد",
    value: "5,200 m²",
    group: "shared",
  },
  {
    item: "Shaded Walkways and Arcades",
    itemAr: "الممرات والأروقة المظللة",
    value: "2,600 m²",
    group: "shared",
  },
] as const;

export const GFA_TOTAL = "46,000 m²";
export const GFA_SHARED = "14,500 m²";

export const PRINCIPLES = [
  {
    en: "Central oasis: open, unbuilt, not counted in GFA",
    ar: "الواحة المركزية: مفتوحة، غير مبنية، لا تُحتسب في المساحة الإجمالية",
  },
  {
    en: "No structure or bridge across the oasis",
    ar: "لا منشأة ولا جسر عبر الواحة",
  },
  {
    en: "No basement below sea level",
    ar: "لا قبو تحت مستوى سطح البحر",
  },
  {
    en: "Service trenches only",
    ar: "خنادق خدمات فقط",
  },
  {
    en: "All service and utility buildings located outside the ring",
    ar: "جميع مباني الخدمات والمرافق خارج الحلقة",
  },
  {
    en: "Raised service platforms above flood datum",
    ar: "منصات خدمات مرتفعة فوق منسوب الفيضان",
  },
] as const;

export const UNITS = [
  {
    n: 1,
    name: "Reception & Orientation",
    nameAr: "الاستقبال والتوجيه",
    brief: "Arrival, wayfinding, visitor services",
    briefAr: "الوصول، الإرشاد، خدمات الزوار",
  },
  {
    n: 2,
    name: "Education & Training",
    nameAr: "التعليم والتدريب",
    brief: "Classrooms, labs, capacity building",
    briefAr: "قاعات، مختبرات، بناء القدرات",
  },
  {
    n: 3,
    name: "Media & Production",
    nameAr: "الإعلام والإنتاج",
    brief: "Studios, broadcast, content suites",
    briefAr: "استوديوهات، بث، أجنحة محتوى",
  },
  {
    n: 4,
    name: "Sports & Wellness",
    nameAr: "الرياضة والعافية",
    brief: "Training, recovery, youth sport",
    briefAr: "تدريب، استشفاء، رياضة الشباب",
  },
  {
    n: 5,
    name: "Event Hall",
    nameAr: "قاعة الفعاليات",
    brief: "Assembly, ceremony, national events",
    briefAr: "تجمّع، مراسم، مناسبات وطنية",
  },
  {
    n: 6,
    name: "Exhibition & Gallery",
    nameAr: "المعرض والصالة",
    brief: "National identity, rotating shows",
    briefAr: "الهوية الوطنية، معارض متناوبة",
  },
  {
    n: 7,
    name: "Administration",
    nameAr: "الإدارة",
    brief: "Centre operations and protocol",
    briefAr: "تشغيل المركز والمراسم",
  },
  {
    n: 8,
    name: "Studio",
    nameAr: "الاستوديو",
    brief: "Local double height by omitting part of L1 slab",
    briefAr: "ارتفاع مزدوج محلي بحذف جزء من بلاطة المستوى الأول",
  },
  {
    n: 9,
    name: "Innovation Lab",
    nameAr: "مختبر الابتكار",
    brief: "R&D, prototyping, sovereign tech",
    briefAr: "بحث وتطوير، نماذج أولية، تقنيات سيادية",
  },
  {
    n: 10,
    name: "Immersive Theatre",
    nameAr: "المسرح الغامر",
    brief: "Decision pending — no 20–25 m dome",
    briefAr: "قرار معلّق — لا قبّة بارتفاع 20–25 م",
  },
] as const;

/** Clockwise from south entry, as the Register. */
export const CLOCKWISE_FROM_SOUTH = [10, 8, 9, 4, 5, 3, 2, 1, 7, 6] as const;

export const PROGRAM_STATS = [
  { label: "Units", labelAr: "الوحدات", value: "10" },
  { label: "Concurrent capacity in units", labelAr: "السعة المتزامنة داخل الوحدات", value: "3,470" },
  { label: "Site peak capacity", labelAr: "الذروة في الموقع", value: "5,000 – 5,500" },
  { label: "Studio height (Unit 8)", labelAr: "ارتفاع الاستوديو (وحدة 8)", value: "Local double height", valueAr: "ارتفاع مزدوج محلي" },
] as const;

export const STRUCTURE = [
  {
    title: "Primary structure",
    titleAr: "الهيكل الرئيسي",
    body: "Coated carbon steel A992 / Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m.",
    bodyAr: "فولاذ كربوني مطلي A992 / مكافئ Q355؛ أرضيات مركّبة؛ نوى مُسنَّدة؛ محاور شعاعية R0–R7 كل 6 م.",
  },
  {
    title: "Roof gridshell",
    titleAr: "شبكة السقف القشرية",
    body: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit.",
    bodyAr: "عناصر أنبوبية مع عقد مصبوبة أو مقطوعة بالليزر على عارضة حلقية عند +13.6 م؛ تجميع أرضي ورفع واحد لكل وحدة.",
  },
  {
    title: "BIPV glazing",
    titleAr: "زجاج BIPV",
    body: "Laminated 8 + PV + 8 mm (max ~20 mm total); dark navy solar surface.",
    bodyAr: "طبقي 8 + كهروضوئي + 8 مم (حد أقصى ~20 مم)؛ سطح شمسي كحلي داكن.",
  },
  {
    title: "Facade envelope",
    titleAr: "غلاف الواجهة",
    body: "GFRC panels + double or triple insulating laminated glass with anti-glare coating.",
    bodyAr: "ألواح GFRC + زجاج عازل طبقي مزدوج أو ثلاثي بطلاء مضاد للوهج.",
  },
  {
    title: "Exposed marine steel",
    titleAr: "فولاذ بحري مكشوف",
    body: "Stainless SS 316L for handrails, external stairs, spray-zone details only — not the primary frame.",
    bodyAr: "ستانلس SS 316L للدرابزين والسلالم الخارجية وتفاصيل منطقة الرذاذ فقط — ليس الهيكل الرئيسي.",
  },
  {
    title: "Foundations",
    titleAr: "الأساسات",
    body: "Piled raft or pad-and-strip, to be determined by geotechnical investigation. No pile length or count is adopted.",
    bodyAr: "لبشة خوازيق أو قواعد وشرائط، تُحدَّد بالدراسة الجيوتقنية. لا يُعتمد طول أو عدد للخوازيق.",
  },
  {
    title: "Repetition",
    titleAr: "التكرار",
    body: "One master kit × 10. Prototype unit 01 complete before serial production. All kits in 40-foot containers.",
    bodyAr: "طقم رئيسي واحد × 10. تكتمل الوحدة النموذجية 01 قبل الإنتاج المتسلسل. جميع الأطقم في حاويات 40 قدماً.",
  },
  {
    title: "Steel tonnage (benchmark)",
    titleAr: "حمولة الفولاذ (مرجع)",
    body: "2,600 – 3,700 t. Benchmark only; manufacturer ROM governs.",
    bodyAr: "2,600 – 3,700 طن. مرجع فقط؛ تقدير الشركة المصنّعة هو الحاكم.",
  },
] as const;

export const ENERGY = [
  {
    title: "BIPV roofs",
    titleAr: "أسقف BIPV",
    value: "1.2 – 1.5 MWp",
    body: "~9,000 m² across ten double-curved shells at 130–160 W/m². Optional façade PV up to +0.5 MWp.",
    bodyAr: "~9,000 م² عبر عشر قشور مزدوجة الانحناء عند 130–160 واط/م². كهروضوئي واجهات اختياري حتى +0.5 ميغاواط ذروة.",
  },
  {
    title: "Coverage claim",
    titleAr: "نسبة التغطية",
    value: "20 – 35%",
    body: "Share of consumption, to be modelled. Never state 60–80%.",
    bodyAr: "حصة الاستهلاك، تُنمذَج لاحقاً. يُمنع ذكر 60–80٪.",
  },
  {
    title: "Seawater cooling",
    titleAr: "تبريد بمياه البحر",
    value: "Open sea",
    valueAr: "البحر المفتوح",
    body: "Intake from the open sea beyond the breakwater, below the thermocline. Titanium plate exchangers. The lagoon is not the intake.",
    bodyAr: "سحب من البحر المفتوح خلف حاجر الأمواج، تحت طبقة الانحدار الحراري. مبادلات تيتانيوم صفائحية. البحيرة ليست مصدر السحب.",
  },
  {
    title: "Water",
    titleAr: "المياه",
    value: "MEW network",
    valueAr: "شبكة الوزارة",
    body: "Municipal supply plus grey-water reuse. No desalination line. Zero-Discharge phrasing is prohibited.",
    bodyAr: "إمداد بلدي مع إعادة استخدام المياه الرمادية. لا خط تحلية. يُحظر تعبير «صفر تصريف».",
  },
  {
    title: "Data center",
    titleAr: "مركز البيانات",
    value: "Tier IV or III",
    body: "Design target per OPR — never “certified” before certification. Above flood datum, in the services building. Vendor-neutral at RFQ.",
    bodyAr: "هدف تصميمي وفق متطلبات المالك — لا يُقال «معتمد» قبل الاعتماد. فوق منسوب الفيضان، في مبنى الخدمات. محايد المورّد عند طلب العروض.",
  },
  {
    title: "Sustainability",
    titleAr: "الاستدامة",
    value: "LEED + MEW R-6",
    body: "LEED target with Kuwait MEW R-6 mandatory. Open oasis and lagoon as passive microclimate.",
    bodyAr: "هدف LEED مع كود MEW R-6 الكويتي الإلزامي. الواحة والبحيرة مناخ محلي سلبي.",
  },
] as const;

export const ZONES = [
  {
    color: "var(--color-zone-steel)",
    name: "Primary structural frame",
    nameAr: "الهيكل الإنشائي الرئيسي",
    spec: "Coated carbon steel A992 or Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m",
    specAr: "فولاذ كربوني مطلي A992 أو مكافئ Q355؛ أرضيات مركّبة؛ نوى مُسنَّدة؛ محاور شعاعية R0–R7 كل 6 م",
  },
  {
    color: "var(--color-zone-roof)",
    name: "Roof gridshell",
    nameAr: "شبكة السقف القشرية",
    spec: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit",
    specAr: "عناصر أنبوبية مع عقد مصبوبة أو مقطوعة بالليزر على عارضة حلقية عند +13.6 م؛ تجميع أرضي ورفع واحد لكل وحدة",
  },
  {
    color: "var(--color-zone-bipv)",
    name: "BIPV roof glazing",
    nameAr: "زجاج سقف BIPV",
    spec: "Laminated 8 + PV + 8 mm (max ~20 mm); dark navy solar surface",
    specAr: "طبقي 8 + كهروضوئي + 8 مم (حد أقصى ~20 مم)؛ سطح شمسي كحلي داكن",
  },
  {
    color: "var(--color-zone-marine)",
    name: "Exposed marine steel",
    nameAr: "فولاذ بحري مكشوف",
    spec: "SS 316L for handrails, external stairs, spray-zone details only (not primary frame)",
    specAr: "SS 316L للدرابزين والسلالم الخارجية وتفاصيل منطقة الرذاذ فقط (ليس الهيكل الرئيسي)",
  },
  {
    color: "var(--color-zone-facade)",
    name: "Façade envelope",
    nameAr: "غلاف الواجهة",
    spec: "GFRC panels + double or triple insulating laminated glass with anti-glare coating",
    specAr: "ألواح GFRC + زجاج عازل طبقي مزدوج أو ثلاثي بطلاء مضاد للوهج",
  },
  {
    color: "var(--color-zone-cool)",
    name: "Cooling",
    nameAr: "التبريد",
    spec: "District cooling; seawater intake from the open sea beyond the breakwater; titanium plate heat exchangers",
    specAr: "تبريد منطقة؛ سحب مياه بحر من البحر المفتوح خلف الحاجر؛ مبادلات تيتانيوم صفائحية",
  },
  {
    color: "var(--color-zone-data)",
    name: "Sovereign digital infrastructure",
    nameAr: "البنية الرقمية السيادية",
    spec: "Data center design target Tier IV or III; SOC, NOC, BMS; vendor-neutral selection at RFQ",
    specAr: "هدف مركز بيانات Tier IV أو III؛ SOC وNOC وBMS؛ اختيار محايد للمورّد عند طلب العروض",
  },
  {
    color: "var(--color-zone-util)",
    name: "Utilities",
    nameAr: "المرافق",
    spec: "HDPE / GRP for water and drainage; standard cable trays; duplex fittings only at seawater heat-exchanger connections",
    specAr: "HDPE / GRP للمياه والصرف؛ حوامل كابلات قياسية؛ وصلات دوبلكس عند ربط مبادلات مياه البحر فقط",
  },
  {
    color: "var(--color-zone-found)",
    name: "Foundations",
    nameAr: "الأساسات",
    spec: "Piled raft or pad-and-strip to be determined by geotechnical investigation; no pile length or count adopted",
    specAr: "لبشة خوازيق أو قواعد وشرائط تُحدَّد بالدراسة الجيوتقنية؛ لا يُعتمد طول أو عدد للخوازيق",
  },
  {
    color: "var(--color-zone-sust)",
    name: "Sustainability",
    nameAr: "الاستدامة",
    spec: "LEED target + Kuwait MEW R-6 mandatory; grey-water reuse; open oasis and lagoon as passive microclimate",
    specAr: "هدف LEED + كود MEW R-6 الكويتي الإلزامي؛ إعادة استخدام المياه الرمادية؛ الواحة والبحيرة مناخ محلي سلبي",
  },
  {
    color: "var(--color-zone-orn)",
    name: "Ornamental details",
    nameAr: "التفاصيل الزخرفية",
    spec: "Islamic ten-point star geometry; discreet gold accents in interior finishes only",
    specAr: "هندسة النجمة الإسلامية العشارية؛ لمسات ذهبية متكتّمة في التشطيبات الداخلية فقط",
  },
] as const;

export const REJECTED = [
  { en: "SS 316L as primary structural frame", ar: "SS 316L هيكلاً إنشائياً رئيسياً" },
  { en: "Al-Li 2195 aerospace alloy for the roof frame", ar: "سبيكة فضاء Al-Li 2195 لإطار السقف" },
  { en: "50 mm glass panels", ar: "ألواح زجاج بسمك 50 مم" },
  { en: "Duplex SS 2205 for all piping (over-spec)", ar: "دوبلكس SS 2205 لكل الأنابيب (مبالغة في المواصفة)" },
  { en: "Central dome, central core, or service arc around the oasis", ar: "قبّة مركزية أو نواة مركزية أو قوس خدمات حول الواحة" },
  { en: "Fourth floor, graded unit heights, oculi", ar: "طابق رابع أو ارتفاعات متدرجة أو فتحات عينية" },
  { en: "B1 annular basement or any structure below sea level", ar: "قبو حلقي B1 أو أي منشأة تحت سطح البحر" },
] as const;

export const PROHIBITED_CLAIMS = [
  { en: "Structural efficiency multiplier “4×” vs baseline", ar: "مضاعف كفاءة إنشائية «4×» مقابل الأساس" },
  { en: "“20% material saving” without an FEA reference", ar: "«توفير 20٪ في المواد» دون مرجع تحليل عناصر منتهية" },
  { en: "“Fatigue safety factor 8”", ar: "«عامل أمان الكلال 8»" },
  { en: "“60–80% energy coverage” or “3.0–3.5 MW” output", ar: "«تغطية طاقة 60–80٪» أو إنتاج «3.0–3.5 ميغاواط»" },
  { en: "“Tier IV certified” before actual certification", ar: "«معتمد Tier IV» قبل الاعتماد الفعلي" },
  { en: "“Zero-Discharge” as a compliance claim", ar: "«صفر تصريف» بوصفه ادعاء امتثال" },
  { en: "Any pile length or count before geotechnical investigation", ar: "أي طول أو عدد خوازيق قبل الدراسة الجيوتقنية" },
] as const;

export type VendorStatus = "OK" | "INFO" | "OPEN" | "REJ";

export const VENDORS: {
  scope: string;
  scopeAr: string;
  named: string;
  status: VendorStatus;
  owner: string;
  ownerAr: string;
  notes: string;
  notesAr: string;
}[] = [
  {
    scope: "Primary structural steel",
    scopeAr: "فولاذ الهيكل الرئيسي",
    named: "Baosteel (BSN, PRC)",
    status: "OK",
    owner: "Main Works Contractor",
    ownerAr: "مقاول الأعمال الرئيسية",
    notes: "High-strength steel, mill certs, traceability.",
    notesAr: "فولاذ عالي المقاومة، شهادات مصنع، تتبّع.",
  },
  {
    scope: "Roof gridshell + diagrid",
    scopeAr: "شبكة السقف والشبكة المائلة",
    named: "Zhejiang Southeast Space Frame (PRC)",
    status: "OK",
    owner: "Main Works Contractor",
    ownerAr: "مقاول الأعمال الرئيسية",
    notes: "Parametric fabrication, hot-dip galvanizing.",
    notesAr: "تصنيع بارامتري، جلفنة بالغمس الساخن.",
  },
  {
    scope: "Third-source quality benchmark",
    scopeAr: "مرجع جودة من مصدر ثالث",
    named: "Hyundai Steel (KOR)",
    status: "OK",
    owner: "Main Works Contractor",
    ownerAr: "مقاول الأعمال الرئيسية",
    notes: "Benchmark and alternate supply assurance.",
    notesAr: "مرجع وضمان إمداد بديل.",
  },
  {
    scope: "Façade GFRC panels",
    scopeAr: "ألواح واجهة GFRC",
    named: "Tender · Rieder, Fibrobeton",
    status: "INFO",
    owner: "Façade Subcontractor",
    ownerAr: "مقاول الواجهات من الباطن",
    notes: "GFRC panels with anchorage system.",
    notesAr: "ألواح GFRC مع نظام تثبيت.",
  },
  {
    scope: "Insulating and laminated glass",
    scopeAr: "زجاج عازل وطبقي",
    named: "Tender · Guardian, AGC, Saint-Gobain",
    status: "INFO",
    owner: "Façade Subcontractor",
    ownerAr: "مقاول الواجهات من الباطن",
    notes: "IGU with low-E, laminated safety glass.",
    notesAr: "وحدات عازلة low-E وزجاج أمان طبقي.",
  },
  {
    scope: "BIPV roof panels",
    scopeAr: "ألواح سقف BIPV",
    named: "Tender · Onyx Solar, LONGi BIPV, ML System",
    status: "INFO",
    owner: "MEP / Renewable Contractor",
    ownerAr: "مقاول الكهروميكانيك / الطاقة المتجددة",
    notes: "Integrated PV with waterproofing system.",
    notesAr: "كهروضوئي مدمج مع نظام عزل مائي.",
  },
  {
    scope: "District cooling equipment",
    scopeAr: "معدات تبريد المنطقة",
    named: "Tender · titanium exchangers per E-Section",
    status: "INFO",
    owner: "MEP Contractor",
    ownerAr: "مقاول الكهروميكانيك",
    notes: "Chillers, titanium heat exchangers, pumps.",
    notesAr: "مبردات، مبادلات تيتانيوم، مضخات.",
  },
  {
    scope: "Data center Tier IV / III (target)",
    scopeAr: "مركز بيانات Tier IV / III (هدف)",
    named: "Vendor-neutral specification",
    status: "OPEN",
    owner: "Data Center Contractor",
    ownerAr: "مقاول مركز البيانات",
    notes: "Uptime Institute aligned. Named only at RFQ.",
    notesAr: "متوافق مع معهد Uptime. التسمية عند طلب العروض فقط.",
  },
  {
    scope: "Networking (LAN / WAN / backbone)",
    scopeAr: "الشبكات (LAN / WAN / العمود الفقري)",
    named: "Vendor-neutral. Huawei / Nokia sovereign scope: excluded",
    status: "REJ",
    owner: "ICT / Network Contractor",
    ownerAr: "مقاول تقنية المعلومات والشبكات",
    notes: "Sovereign-compliant equipment and software.",
    notesAr: "معدات وبرمجيات متوافقة سيادياً.",
  },
  {
    scope: "SOC / cybersecurity",
    scopeAr: "مركز العمليات الأمنية / الأمن السيبراني",
    named: "Vendor-neutral. Kaspersky: excluded (US-sanctioned)",
    status: "REJ",
    owner: "Cybersecurity Contractor",
    ownerAr: "مقاول الأمن السيبراني",
    notes: "24/7 SOC, SIEM, threat intelligence.",
    notesAr: "مركز عمليات أمنية على مدار الساعة، SIEM، استخبارات تهديد.",
  },
  {
    scope: "Fire protection",
    scopeAr: "الحماية من الحريق",
    named: "Tender · Honeywell, Tyco, Siemens",
    status: "INFO",
    owner: "Fire Protection Contractor",
    ownerAr: "مقاول الحماية من الحريق",
    notes: "Sprinklers, gas suppression, FM-Approved.",
    notesAr: "مرشات، إخماد غازي، معتمد FM.",
  },
  {
    scope: "Elevators",
    scopeAr: "المصاعد",
    named: "Tender · KONE, Mitsubishi, Schindler",
    status: "INFO",
    owner: "Lift Contractor",
    ownerAr: "مقاول المصاعد",
    notes: "High-speed lifts, destination control.",
    notesAr: "مصاعد عالية السرعة، تحكم بالوجهة.",
  },
  {
    scope: "AV, display walls, interactive",
    scopeAr: "صوتيات ومرئيات وجدران عرض",
    named: "Tender · Samsung, LG, Barco, disguise",
    status: "INFO",
    owner: "AV / Media Contractor",
    ownerAr: "مقاول الصوتيات والإعلام",
    notes: "LED walls, projection, interactive systems.",
    notesAr: "جدران LED، إسقاط، أنظمة تفاعلية.",
  },
  {
    scope: "Water treatment",
    scopeAr: "معالجة المياه",
    named: "Tender · Veolia, SUEZ, ACWA",
    status: "INFO",
    owner: "Water Treatment Contractor",
    ownerAr: "مقاول معالجة المياه",
    notes: "RO, UF, UV, grey-water reuse systems.",
    notesAr: "تناضح عكسي، ترشيح فائق، أشعة فوق بنفسجية، إعادة استخدام المياه الرمادية.",
  },
  {
    scope: "Marine works (reclaimed islet, quay)",
    scopeAr: "الأعمال البحرية (جزيرة مستصلحة، رصيف)",
    named: "Kuwait / GCC tender — not in Chinese steel scope",
    status: "INFO",
    owner: "Marine Contractor",
    ownerAr: "مقاول بحري",
    notes: "Reclamation, breakwater, dredging.",
    notesAr: "ردم، حاجر أمواج، تجريف.",
  },
];

export const PERFORMANCE = [
  { metric: "BIPV roof area (10 units)", metricAr: "مساحة سقف BIPV (10 وحدات)", value: "~9,000 m²", basis: "Ten low double-curved shells, 38 × 28 m each", basisAr: "عشر قشور منخفضة مزدوجة الانحناء، 38 × 28 م لكل منها" },
  { metric: "Projected BIPV peak capacity", metricAr: "القدرة الذروية المتوقعة لـ BIPV", value: "1.2 – 1.5 MWp", basis: "At 130–160 W/m² panel efficiency", basisAr: "عند كفاءة ألواح 130–160 واط/م²" },
  { metric: "Optional façade PV", metricAr: "كهروضوئي واجهات اختياري", value: "up to +0.5 MWp", basis: "Vertical BIPV on selected façades", basisAr: "BIPV عمودي على واجهات مختارة" },
  { metric: "Coverage of consumption", metricAr: "تغطية الاستهلاك", value: "20 – 35%", basis: "To be modelled post energy simulation", basisAr: "تُنمذَج بعد محاكاة الطاقة" },
  { metric: "Steel tonnage benchmark", metricAr: "مرجع حمولة الفولاذ", value: "2,600 – 3,700 t", basis: "Benchmark only. Manufacturer ROM governs", basisAr: "مرجع فقط. تقدير المصنّع هو الحاكم" },
  { metric: "Roof shell rise-to-span", metricAr: "نسبة ارتفاع قشرة السقف إلى البحر", value: "0.18", basis: "6.8 m rise on 38 m span — not a pointed dome", basisAr: "ارتفاع 6.8 م على بحر 38 م — ليست قبّة مدببة" },
  { metric: "Building ring diameter", metricAr: "قطر حلقة المبنى", value: "159.520 m", basis: "10 identical units at 36°", basisAr: "10 وحدات متطابقة بزاوية 36°" },
  { metric: "Central open oasis", metricAr: "الواحة المركزية المفتوحة", value: "Ø 68 m", basis: "No structure, no bridges, no service arc", basisAr: "لا منشأة ولا جسور ولا قوس خدمات" },
  { metric: "Data center design target", metricAr: "هدف تصميم مركز البيانات", value: "Tier IV or III", basis: "Design target, not certified before certification", basisAr: "هدف تصميمي، ليس معتمداً قبل الاعتماد" },
  { metric: "Cooling intake", metricAr: "سحب التبريد", value: "Open sea, below thermocline", valueAr: "البحر المفتوح، تحت الانحدار الحراري", basis: "Not from the lagoon; titanium plate exchangers", basisAr: "ليس من البحيرة؛ مبادلات تيتانيوم صفائحية" },
  { metric: "Water source", metricAr: "مصدر المياه", value: "MEW network", valueAr: "شبكة الوزارة", basis: "No desalination. Grey-water reuse.", basisAr: "لا تحلية. إعادة استخدام المياه الرمادية." },
  { metric: "Concurrent capacity in units", metricAr: "السعة المتزامنة داخل الوحدات", value: "~3,470 persons", valueAr: "~3,470 شخصاً", basis: "Per functional program", basisAr: "وفق البرنامج الوظيفي" },
  { metric: "Site peak capacity", metricAr: "ذروة سعة الموقع", value: "~5,000 – 5,500", basis: "Subject to evacuation modelling", basisAr: "خاضع لنمذجة الإخلاء" },
  { metric: "CapEx", metricAr: "النفقات الرأسمالية", value: "Range per phase", valueAr: "نطاق لكل مرحلة", basis: "Open item H-6 in the Design Basis Register", basisAr: "بند مفتوح H-6 في سجل أساس التصميم" },
] as const;

export const STANDARDS_KW = [
  { ref: "Kuwait Building Code (KBC) — as amended", refAr: "كود البناء الكويتي (KBC) — وتعديلاته", apply: "Mandatory for all construction and architectural works", applyAr: "إلزامي لجميع أعمال البناء والعمارة" },
  { ref: "Kuwait Fire Force (KFF) Life Safety Code", refAr: "كود السلامة من قوة الإطفاء الكويتية", apply: "Mandatory — fire, smoke and evacuation", applyAr: "إلزامي — حريق ودخان وإخلاء" },
  { ref: "MEW / R-6 (2014) Energy Conservation Code", refAr: "كود ترشيد الطاقة MEW / R-6 (2014)", apply: "Mandatory — energy efficiency", applyAr: "إلزامي — كفاءة الطاقة" },
  { ref: "Kuwait Environment Public Authority (KEPA) — EIA", refAr: "الهيئة العامة للبيئة — تقييم الأثر البيئي", apply: "Mandatory — environmental assessment before construction", applyAr: "إلزامي — تقييم بيئي قبل الإنشاء" },
  { ref: "Kuwait Municipality coastal-strip regulations", refAr: "اشتراطات البلدية للشريط الساحلي", apply: "Mandatory — coastal height restriction; sovereign-project classification", applyAr: "إلزامي — قيد الارتفاع الساحلي؛ تصنيف مشروع سيادي" },
  { ref: "Public Tenders Law — Law 49/2016", refAr: "قانون المناقصات العامة — القانون 49/2016", apply: "Mandatory upon government tender", applyAr: "إلزامي عند الطرح الحكومي" },
] as const;

export const STANDARDS_INT = [
  { ref: "ISO 9001 / 14001 / 45001", apply: "Quality, environment and safety", applyAr: "الجودة والبيئة والسلامة" },
  { ref: "ISO 3834-2:2021", apply: "Welding quality", applyAr: "جودة اللحام" },
  { ref: "AISC 360", apply: "Steel design — reference", applyAr: "تصميم الفولاذ — مرجع" },
  { ref: "AWS D1.1", apply: "Welding of steel structures", applyAr: "لحام المنشآت الفولاذية" },
  { ref: "Eurocode 3 (EN 1993)", apply: "Steel design — alternative reference", applyAr: "تصميم الفولاذ — مرجع بديل" },
  { ref: "GB 50017", apply: "Chinese steel structure code — fabrication", applyAr: "كود الفولاذ الصيني — التصنيع" },
  { ref: "ASHRAE 90.1 / 62.1", apply: "HVAC, energy efficiency and IAQ", applyAr: "تكييف وكفاءة طاقة وجودة هواء داخلي" },
  { ref: "NFPA 13, 72, 92", apply: "Fire — design reference unless it conflicts with KFF", applyAr: "حريق — مرجع تصميمي ما لم يتعارض مع قوة الإطفاء" },
  { ref: "Uptime Institute Tier III / IV", apply: "Data center resilience — design target", applyAr: "صمود مركز البيانات — هدف تصميمي" },
  { ref: "LEED v4 BD+C", apply: "Sustainability — target certification", applyAr: "الاستدامة — اعتماد مستهدف" },
] as const;

export const STANDARDS_NA = [
  { ref: "Estidama Pearl Rating System (Abu Dhabi)", apply: "Not applicable in Kuwait — replaced by LEED + MEW R-6", applyAr: "غير منطبق في الكويت — يُستبدل بـ LEED + MEW R-6" },
  { ref: "Aerospace alloy standards for architectural frame", refAr: "معايير سبائك الفضاء للإطار المعماري", apply: "Al-Li 2195 rejected as a roof material", applyAr: "Al-Li 2195 مرفوض كمادة سقف" },
] as const;

export const CONCEPT =
  "A ring of ten identical modules, inspired by the Kuwaiti emblem, united in symmetry to symbolise youth, unity, and vision. Each module opens toward the inner courtyard, creating a seamless flow between culture, learning, and innovation.";

export const CONCEPT_AR =
  "حلقة من عشر وحدات متطابقة، مستوحاة من شعار دولة الكويت، تتحد في التناظر رمزاً للشباب والوحدة والرؤية. تفتح كل وحدة نحو الفناء الداخلي، فتشكّل تدفقاً متصلاً بين الثقافة والتعلّم والابتكار.";
