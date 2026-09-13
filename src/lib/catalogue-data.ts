export const PROJECT = {
  code: "HHMYC",
  altCode: "HHMC",
  nameEn:
    "Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah Center for Youth and National Sovereign Integration",
  nameAr: "مركز الشيخ مشعل الأحمد الجابر الصباح للشباب والتكامل السيادي الوطني",
  taglineEn: "A Pledge and a Promise… for the Future of Kuwait",
  taglineAr: "عهد ووعد… لكويت المستقبل",
  register: "Design Basis Register",
  rev: "Rev 1.0",
  panelRev: "Panel Rev 1.1",
  date: "September 2026",
  status: "Governing Register",
  stage: "Concept stage — all values subject to survey and geotechnical investigation",
  confidential: "Cohesion Holding — Confidential — Concept design, not for construction",
  preparedBy: "Eng. Hamad Alotaibi",
  preparedFor: "Eng. Hamad Alotaibi, Cohesion Holding, Kuwait",
  roles: "Strategic Advisor · Founder · Sovereign Systems Engineer",
  firm: "Cohesion Holding",
  rights: "All rights reserved 2026",
  jurisdiction: "Kuwait",
  email: "cohesionkw@gmail.com",
  mobile: "+965 51179990",
  mobileHref: "tel:+96551179990",
  note: "Every project document shall cite this register and shall not restate a value that differs from it.",
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
  unitLxW: "45.760 × 32.261 m",
  unitL: 45.76,
  unitW: 32.261,
  floorArea: "1,050 m² × 3 levels",
  ffl: "0.000 / +4.800 / +9.200",
  roofDatum: "+13.600 m",
  roofApex: "+20.400 m",
  roofShell: "38.0 × 28.0 m, rise 6.800 m",
  diagrid: "2.4 – 3.0 m",
  minRadii: "4.525 / 6.085 / 7.181 m  (≥ 4.5 m)",
  innerTip: "34.000 m",
  oasis: "Ø 68.000 m",
  outerCrown: "79.760 m",
  ring: "Ø 159.520 m",
  connectors: "10 per level × 3 levels",
  connectorBand: "V = 17–23 m",
  clearGap: "6.11–6.74 m",
  connectorWidth: "6.5 m",
  connectorArea: "40 m² each",
  links: "30 necks, 40 m² each",
  unitForm: "Symmetric soft-edged geometric form. Not a teardrop, not a petal.",
  style: "Modern, high-end, high-contrast — black, dark gray, silver.",
  heightNoBase: "40.8 m",
  heightWithBase: "48.8 m",
  riseToSpan: "0.18",
} as const;

export const AREAS = [
  { item: "Ten Units (10 × 3,150 m²)", value: "31,500 m²", group: "ring" },
  { item: "Connectors (30 × 40 m²)", value: "1,200 m²", group: "shared" },
  {
    item: "Hall and Administration Pavilion",
    detail: "800-seat hall, lobbies, admin, hospitality, prayer, clinic, visitor services",
    value: "5,500 m²",
    group: "shared",
  },
  {
    item: "Services and Utilities Building",
    detail: "Data center, SOC, NOC, BMS, UPS, cooling, substation, generators, batteries, water, security, logistics",
    value: "5,200 m²",
    group: "shared",
  },
  { item: "Shaded Walkways and Arcades", value: "2,600 m²", group: "shared" },
] as const;

export const GFA_TOTAL = "46,000 m²";
export const GFA_SHARED = "14,500 m²";

export const PRINCIPLES = [
  "Central oasis: open, unbuilt, not counted in GFA",
  "No structure or bridge across the oasis",
  "No basement below sea level",
  "Service trenches only",
  "All service and utility buildings located outside the ring",
  "Raised service platforms above flood datum",
] as const;

export const UNITS = [
  { n: 1, name: "Reception & Orientation", brief: "Arrival, wayfinding, visitor services" },
  { n: 2, name: "Education & Training", brief: "Classrooms, labs, capacity building" },
  { n: 3, name: "Media & Production", brief: "Studios, broadcast, content suites" },
  { n: 4, name: "Sports & Wellness", brief: "Training, recovery, youth sport" },
  { n: 5, name: "Event Hall", brief: "Assembly, ceremony, national events" },
  { n: 6, name: "Exhibition & Gallery", brief: "National identity, rotating shows" },
  { n: 7, name: "Administration", brief: "Centre operations and protocol" },
  { n: 8, name: "Studio", brief: "Local double height by omitting part of L1 slab" },
  { n: 9, name: "Innovation Lab", brief: "R&D, prototyping, sovereign tech" },
  { n: 10, name: "Immersive Theatre", brief: "Decision pending — no 20–25 m dome" },
] as const;

/** Clockwise from south entry, as the Register. */
export const CLOCKWISE_FROM_SOUTH = [10, 8, 9, 4, 5, 3, 2, 1, 7, 6] as const;

export const PROGRAM_STATS = [
  { label: "Units", value: "10" },
  { label: "Concurrent capacity in units", value: "3,470" },
  { label: "Site peak capacity", value: "5,000 – 5,500" },
  { label: "Studio height (Unit 8)", value: "Local double height" },
] as const;

export const STRUCTURE = [
  {
    title: "Primary structure",
    body: "Coated carbon steel A992 / Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m.",
  },
  {
    title: "Roof gridshell",
    body: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit.",
  },
  {
    title: "BIPV glazing",
    body: "Laminated 8 + PV + 8 mm (max ~20 mm total); dark navy solar surface.",
  },
  {
    title: "Facade envelope",
    body: "GFRC panels + double or triple insulating laminated glass with anti-glare coating.",
  },
  {
    title: "Exposed marine steel",
    body: "Stainless SS 316L for handrails, external stairs, spray-zone details only — not the primary frame.",
  },
  {
    title: "Foundations",
    body: "Piled raft or pad-and-strip, to be determined by geotechnical investigation. No pile length or count is adopted.",
  },
  {
    title: "Repetition",
    body: "One master kit × 10. Prototype unit 01 complete before serial production. All kits in 40-foot containers.",
  },
  {
    title: "Steel tonnage (benchmark)",
    body: "2,600 – 3,700 t. Benchmark only; manufacturer ROM governs.",
  },
] as const;

export const ENERGY = [
  {
    title: "BIPV roofs",
    value: "1.2 – 1.5 MWp",
    body: "~9,000 m² across ten double-curved shells at 130–160 W/m². Optional façade PV up to +0.5 MWp.",
  },
  {
    title: "Coverage claim",
    value: "20 – 35%",
    body: "Share of consumption, to be modelled. Never state 60–80%.",
  },
  {
    title: "Seawater cooling",
    value: "Open sea",
    body: "Intake from the open sea beyond the breakwater, below the thermocline. Titanium plate exchangers. The lagoon is not the intake.",
  },
  {
    title: "Water",
    value: "MEW network",
    body: "Municipal supply plus grey-water reuse. No desalination line. Zero-Discharge phrasing is prohibited.",
  },
  {
    title: "Data center",
    value: "Tier IV or III",
    body: "Design target per OPR — never “certified” before certification. Above flood datum, in the services building. Vendor-neutral at RFQ.",
  },
  {
    title: "Sustainability",
    value: "LEED + MEW R-6",
    body: "LEED target with Kuwait MEW R-6 mandatory. Open oasis and lagoon as passive microclimate.",
  },
] as const;

export const ZONES = [
  {
    color: "var(--color-zone-steel)",
    name: "Primary structural frame",
    spec: "Coated carbon steel A992 or Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m",
  },
  {
    color: "var(--color-zone-roof)",
    name: "Roof gridshell",
    spec: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit",
  },
  {
    color: "var(--color-zone-bipv)",
    name: "BIPV roof glazing",
    spec: "Laminated 8 + PV + 8 mm (max ~20 mm); dark navy solar surface",
  },
  {
    color: "var(--color-zone-marine)",
    name: "Exposed marine steel",
    spec: "SS 316L for handrails, external stairs, spray-zone details only (not primary frame)",
  },
  {
    color: "var(--color-zone-facade)",
    name: "Façade envelope",
    spec: "GFRC panels + double or triple insulating laminated glass with anti-glare coating",
  },
  {
    color: "var(--color-zone-cool)",
    name: "Cooling",
    spec: "District cooling; seawater intake from the open sea beyond the breakwater; titanium plate heat exchangers",
  },
  {
    color: "var(--color-zone-data)",
    name: "Sovereign digital infrastructure",
    spec: "Data center design target Tier IV or III; SOC, NOC, BMS; vendor-neutral selection at RFQ",
  },
  {
    color: "var(--color-zone-util)",
    name: "Utilities",
    spec: "HDPE / GRP for water and drainage; standard cable trays; duplex fittings only at seawater heat-exchanger connections",
  },
  {
    color: "var(--color-zone-found)",
    name: "Foundations",
    spec: "Piled raft or pad-and-strip to be determined by geotechnical investigation; no pile length or count adopted",
  },
  {
    color: "var(--color-zone-sust)",
    name: "Sustainability",
    spec: "LEED target + Kuwait MEW R-6 mandatory; grey-water reuse; open oasis and lagoon as passive microclimate",
  },
  {
    color: "var(--color-zone-orn)",
    name: "Ornamental details",
    spec: "Islamic ten-point star geometry; discreet gold accents in interior finishes only",
  },
] as const;

export const REJECTED = [
  "SS 316L as primary structural frame",
  "Al-Li 2195 aerospace alloy for the roof frame",
  "50 mm glass panels",
  "Duplex SS 2205 for all piping (over-spec)",
  "Central dome, central core, or service arc around the oasis",
  "Fourth floor, graded unit heights, oculi",
  "B1 annular basement or any structure below sea level",
] as const;

export const PROHIBITED_CLAIMS = [
  "Structural efficiency multiplier “4×” vs baseline",
  "“20% material saving” without an FEA reference",
  "“Fatigue safety factor 8”",
  "“60–80% energy coverage” or “3.0–3.5 MW” output",
  "“Tier IV certified” before actual certification",
  "“Zero-Discharge” as a compliance claim",
  "Any pile length or count before geotechnical investigation",
] as const;

export type VendorStatus = "OK" | "INFO" | "OPEN" | "REJ";

export const VENDORS: {
  scope: string;
  named: string;
  status: VendorStatus;
  owner: string;
  notes: string;
}[] = [
  {
    scope: "Primary structural steel",
    named: "Baosteel (BSN, PRC)",
    status: "OK",
    owner: "Main Works Contractor",
    notes: "High-strength steel, mill certs, traceability.",
  },
  {
    scope: "Roof gridshell + diagrid",
    named: "Zhejiang Southeast Space Frame (PRC)",
    status: "OK",
    owner: "Main Works Contractor",
    notes: "Parametric fabrication, hot-dip galvanizing.",
  },
  {
    scope: "Third-source quality benchmark",
    named: "Hyundai Steel (KOR)",
    status: "OK",
    owner: "Main Works Contractor",
    notes: "Benchmark and alternate supply assurance.",
  },
  {
    scope: "Façade GFRC panels",
    named: "Tender · Rieder, Fibrobeton",
    status: "INFO",
    owner: "Façade Subcontractor",
    notes: "GFRC panels with anchorage system.",
  },
  {
    scope: "Insulating and laminated glass",
    named: "Tender · Guardian, AGC, Saint-Gobain",
    status: "INFO",
    owner: "Façade Subcontractor",
    notes: "IGU with low-E, laminated safety glass.",
  },
  {
    scope: "BIPV roof panels",
    named: "Tender · Onyx Solar, LONGi BIPV, ML System",
    status: "INFO",
    owner: "MEP / Renewable Contractor",
    notes: "Integrated PV with waterproofing system.",
  },
  {
    scope: "District cooling equipment",
    named: "Tender · titanium exchangers per E-Section",
    status: "INFO",
    owner: "MEP Contractor",
    notes: "Chillers, titanium heat exchangers, pumps.",
  },
  {
    scope: "Data center Tier IV / III (target)",
    named: "Vendor-neutral specification",
    status: "OPEN",
    owner: "Data Center Contractor",
    notes: "Uptime Institute aligned. Named only at RFQ.",
  },
  {
    scope: "Networking (LAN / WAN / backbone)",
    named: "Vendor-neutral. Huawei / Nokia sovereign scope: excluded",
    status: "REJ",
    owner: "ICT / Network Contractor",
    notes: "Sovereign-compliant equipment and software.",
  },
  {
    scope: "SOC / cybersecurity",
    named: "Vendor-neutral. Kaspersky: excluded (US-sanctioned)",
    status: "REJ",
    owner: "Cybersecurity Contractor",
    notes: "24/7 SOC, SIEM, threat intelligence.",
  },
  {
    scope: "Fire protection",
    named: "Tender · Honeywell, Tyco, Siemens",
    status: "INFO",
    owner: "Fire Protection Contractor",
    notes: "Sprinklers, gas suppression, FM-Approved.",
  },
  {
    scope: "Elevators",
    named: "Tender · KONE, Mitsubishi, Schindler",
    status: "INFO",
    owner: "Lift Contractor",
    notes: "High-speed lifts, destination control.",
  },
  {
    scope: "AV, display walls, interactive",
    named: "Tender · Samsung, LG, Barco, disguise",
    status: "INFO",
    owner: "AV / Media Contractor",
    notes: "LED walls, projection, interactive systems.",
  },
  {
    scope: "Water treatment",
    named: "Tender · Veolia, SUEZ, ACWA",
    status: "INFO",
    owner: "Water Treatment Contractor",
    notes: "RO, UF, UV, grey-water reuse systems.",
  },
  {
    scope: "Marine works (reclaimed islet, quay)",
    named: "Kuwait / GCC tender — not in Chinese steel scope",
    status: "INFO",
    owner: "Marine Contractor",
    notes: "Reclamation, breakwater, dredging.",
  },
];

export const PERFORMANCE = [
  { metric: "BIPV roof area (10 units)", value: "~9,000 m²", basis: "Ten low double-curved shells, 38 × 28 m each" },
  { metric: "Projected BIPV peak capacity", value: "1.2 – 1.5 MWp", basis: "At 130–160 W/m² panel efficiency" },
  { metric: "Optional façade PV", value: "up to +0.5 MWp", basis: "Vertical BIPV on selected façades" },
  { metric: "Coverage of consumption", value: "20 – 35%", basis: "To be modelled post energy simulation" },
  { metric: "Steel tonnage benchmark", value: "2,600 – 3,700 t", basis: "Benchmark only. Manufacturer ROM governs" },
  { metric: "Roof shell rise-to-span", value: "0.18", basis: "6.8 m rise on 38 m span — not a pointed dome" },
  { metric: "Building ring diameter", value: "159.520 m", basis: "10 identical units at 36°" },
  { metric: "Central open oasis", value: "Ø 68 m", basis: "No structure, no bridges, no service arc" },
  { metric: "Data center design target", value: "Tier IV or III", basis: "Design target, not certified before certification" },
  { metric: "Cooling intake", value: "Open sea, below thermocline", basis: "Not from the lagoon; titanium plate exchangers" },
  { metric: "Water source", value: "MEW network", basis: "No desalination. Grey-water reuse." },
  { metric: "Concurrent capacity in units", value: "~3,470 persons", basis: "Per functional program" },
  { metric: "Site peak capacity", value: "~5,000 – 5,500", basis: "Subject to evacuation modelling" },
  { metric: "CapEx", value: "Range per phase", basis: "Open item H-6 in the Design Basis Register" },
] as const;

export const STANDARDS_KW = [
  { ref: "Kuwait Building Code (KBC) — as amended", apply: "Mandatory for all construction and architectural works" },
  { ref: "Kuwait Fire Force (KFF) Life Safety Code", apply: "Mandatory — fire, smoke and evacuation" },
  { ref: "MEW / R-6 (2014) Energy Conservation Code", apply: "Mandatory — energy efficiency" },
  { ref: "Kuwait Environment Public Authority (KEPA) — EIA", apply: "Mandatory — environmental assessment before construction" },
  { ref: "Kuwait Municipality coastal-strip regulations", apply: "Mandatory — coastal height restriction; sovereign-project classification" },
  { ref: "Public Tenders Law — Law 49/2016", apply: "Mandatory upon government tender" },
] as const;

export const STANDARDS_INT = [
  { ref: "ISO 9001 / 14001 / 45001", apply: "Quality, environment and safety" },
  { ref: "ISO 3834-2:2021", apply: "Welding quality" },
  { ref: "AISC 360", apply: "Steel design — reference" },
  { ref: "AWS D1.1", apply: "Welding of steel structures" },
  { ref: "Eurocode 3 (EN 1993)", apply: "Steel design — alternative reference" },
  { ref: "GB 50017", apply: "Chinese steel structure code — fabrication" },
  { ref: "ASHRAE 90.1 / 62.1", apply: "HVAC, energy efficiency and IAQ" },
  { ref: "NFPA 13, 72, 92", apply: "Fire — design reference unless it conflicts with KFF" },
  { ref: "Uptime Institute Tier III / IV", apply: "Data center resilience — design target" },
  { ref: "LEED v4 BD+C", apply: "Sustainability — target certification" },
] as const;

export const STANDARDS_NA = [
  { ref: "Estidama Pearl Rating System (Abu Dhabi)", apply: "Not applicable in Kuwait — replaced by LEED + MEW R-6" },
  { ref: "Aerospace alloy standards for architectural frame", apply: "Al-Li 2195 rejected as a roof material" },
] as const;

export const CONCEPT =
  "A ring of ten identical modules, inspired by the Kuwaiti emblem, united in symmetry to symbolise youth, unity, and vision. Each module opens toward the inner courtyard, creating a seamless flow between culture, learning, and innovation.";
