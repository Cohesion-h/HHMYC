import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, c as Leaf, d as CircuitBoard, f as ChevronRight, i as SunMedium, l as Grid2x2, m as Building2, n as Users, o as Minimize, p as ChevronLeft, s as Maximize, t as Waves, u as Droplets } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVZFlgkc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROJECT = {
	code: "HHMYC",
	altCode: "HHMC",
	nameEn: "Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah Center for Youth and National Sovereign Integration",
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
	preparedFor: "Eng. Hamad Fahad Al-Otaibi, Cohesion Holding, Kuwait",
	note: "Every project document shall cite this register and shall not restate a value that differs from it."
};
var PILLARS = [
	{
		id: "sovereign",
		en: "National Sovereign Integration",
		ar: "التكامل السيادي الوطني"
	},
	{
		id: "youth",
		en: "Youth Empowerment & Capacity Building",
		ar: "تمكين الشباب وتطوير القدرات"
	},
	{
		id: "innovation",
		en: "Innovation & Advanced Technologies",
		ar: "الابتكار والتقنيات المتقدمة"
	},
	{
		id: "sustain",
		en: "Sustainability & Social Responsibility",
		ar: "الاستدامة والمسؤولية المجتمعية"
	}
];
var GEOMETRY = {
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
	riseToSpan: "0.18"
};
var AREAS = [
	{
		item: "Ten Units (10 × 3,150 m²)",
		value: "31,500 m²",
		group: "ring"
	},
	{
		item: "Connectors (30 × 40 m²)",
		value: "1,200 m²",
		group: "shared"
	},
	{
		item: "Hall and Administration Pavilion",
		detail: "800-seat hall, lobbies, admin, hospitality, prayer, clinic, visitor services",
		value: "5,500 m²",
		group: "shared"
	},
	{
		item: "Services and Utilities Building",
		detail: "Data center, SOC, NOC, BMS, UPS, cooling, substation, generators, batteries, water, security, logistics",
		value: "5,200 m²",
		group: "shared"
	},
	{
		item: "Shaded Walkways and Arcades",
		value: "2,600 m²",
		group: "shared"
	}
];
var GFA_TOTAL = "46,000 m²";
var GFA_SHARED = "14,500 m²";
var PRINCIPLES = [
	"Central oasis: open, unbuilt, not counted in GFA",
	"No structure or bridge across the oasis",
	"No basement below sea level",
	"Service trenches only",
	"All service and utility buildings located outside the ring",
	"Raised service platforms above flood datum"
];
var UNITS = [
	{
		n: 1,
		name: "Reception & Orientation",
		brief: "Arrival, wayfinding, visitor services"
	},
	{
		n: 2,
		name: "Education & Training",
		brief: "Classrooms, labs, capacity building"
	},
	{
		n: 3,
		name: "Media & Production",
		brief: "Studios, broadcast, content suites"
	},
	{
		n: 4,
		name: "Sports & Wellness",
		brief: "Training, recovery, youth sport"
	},
	{
		n: 5,
		name: "Event Hall",
		brief: "Assembly, ceremony, national events"
	},
	{
		n: 6,
		name: "Exhibition & Gallery",
		brief: "National identity, rotating shows"
	},
	{
		n: 7,
		name: "Administration",
		brief: "Centre operations and protocol"
	},
	{
		n: 8,
		name: "Studio",
		brief: "Local double height by omitting part of L1 slab"
	},
	{
		n: 9,
		name: "Innovation Lab",
		brief: "R&D, prototyping, sovereign tech"
	},
	{
		n: 10,
		name: "Immersive Theatre",
		brief: "Decision pending — no 20–25 m dome"
	}
];
/** Clockwise from south entry, as the Register. */
var CLOCKWISE_FROM_SOUTH = [
	10,
	8,
	9,
	4,
	5,
	3,
	2,
	1,
	7,
	6
];
var PROGRAM_STATS = [
	{
		label: "Units",
		value: "10"
	},
	{
		label: "Concurrent capacity in units",
		value: "3,470"
	},
	{
		label: "Site peak capacity",
		value: "5,000 – 5,500"
	},
	{
		label: "Studio height (Unit 8)",
		value: "Local double height"
	}
];
var STRUCTURE = [
	{
		title: "Primary structure",
		body: "Coated carbon steel A992 / Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m."
	},
	{
		title: "Roof gridshell",
		body: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit."
	},
	{
		title: "BIPV glazing",
		body: "Laminated 8 + PV + 8 mm (max ~20 mm total); dark navy solar surface."
	},
	{
		title: "Facade envelope",
		body: "GFRC panels + double or triple insulating laminated glass with anti-glare coating."
	},
	{
		title: "Exposed marine steel",
		body: "Stainless SS 316L for handrails, external stairs, spray-zone details only — not the primary frame."
	},
	{
		title: "Foundations",
		body: "Piled raft or pad-and-strip, to be determined by geotechnical investigation. No pile length or count is adopted."
	},
	{
		title: "Repetition",
		body: "One master kit × 10. Prototype unit 01 complete before serial production. All kits in 40-foot containers."
	},
	{
		title: "Steel tonnage (benchmark)",
		body: "2,600 – 3,700 t. Benchmark only; manufacturer ROM governs."
	}
];
var ENERGY = [
	{
		title: "BIPV roofs",
		value: "1.2 – 1.5 MWp",
		body: "~9,000 m² across ten double-curved shells at 130–160 W/m². Optional façade PV up to +0.5 MWp."
	},
	{
		title: "Coverage claim",
		value: "20 – 35%",
		body: "Share of consumption, to be modelled. Never state 60–80%."
	},
	{
		title: "Seawater cooling",
		value: "Open sea",
		body: "Intake from the open sea beyond the breakwater, below the thermocline. Titanium plate exchangers. The lagoon is not the intake."
	},
	{
		title: "Water",
		value: "MEW network",
		body: "Municipal supply plus grey-water reuse. No desalination line. Zero-Discharge phrasing is prohibited."
	},
	{
		title: "Data center",
		value: "Tier IV or III",
		body: "Design target per OPR — never “certified” before certification. Above flood datum, in the services building. Vendor-neutral at RFQ."
	},
	{
		title: "Sustainability",
		value: "LEED + MEW R-6",
		body: "LEED target with Kuwait MEW R-6 mandatory. Open oasis and lagoon as passive microclimate."
	}
];
var ZONES = [
	{
		color: "var(--color-zone-steel)",
		name: "Primary structural frame",
		spec: "Coated carbon steel A992 or Q355 equivalent; composite deck floors; braced cores; radial axes R0–R7 at 6 m"
	},
	{
		color: "var(--color-zone-roof)",
		name: "Roof gridshell",
		spec: "CHS members with cast or laser-cut nodes on a ring beam at +13.6 m; ground-assembled, single lift per unit"
	},
	{
		color: "var(--color-zone-bipv)",
		name: "BIPV roof glazing",
		spec: "Laminated 8 + PV + 8 mm (max ~20 mm); dark navy solar surface"
	},
	{
		color: "var(--color-zone-marine)",
		name: "Exposed marine steel",
		spec: "SS 316L for handrails, external stairs, spray-zone details only (not primary frame)"
	},
	{
		color: "var(--color-zone-facade)",
		name: "Façade envelope",
		spec: "GFRC panels + double or triple insulating laminated glass with anti-glare coating"
	},
	{
		color: "var(--color-zone-cool)",
		name: "Cooling",
		spec: "District cooling; seawater intake from the open sea beyond the breakwater; titanium plate heat exchangers"
	},
	{
		color: "var(--color-zone-data)",
		name: "Sovereign digital infrastructure",
		spec: "Data center design target Tier IV or III; SOC, NOC, BMS; vendor-neutral selection at RFQ"
	},
	{
		color: "var(--color-zone-util)",
		name: "Utilities",
		spec: "HDPE / GRP for water and drainage; standard cable trays; duplex fittings only at seawater heat-exchanger connections"
	},
	{
		color: "var(--color-zone-found)",
		name: "Foundations",
		spec: "Piled raft or pad-and-strip to be determined by geotechnical investigation; no pile length or count adopted"
	},
	{
		color: "var(--color-zone-sust)",
		name: "Sustainability",
		spec: "LEED target + Kuwait MEW R-6 mandatory; grey-water reuse; open oasis and lagoon as passive microclimate"
	},
	{
		color: "var(--color-zone-orn)",
		name: "Ornamental details",
		spec: "Islamic ten-point star geometry; discreet gold accents in interior finishes only"
	}
];
var REJECTED = [
	"SS 316L as primary structural frame",
	"Al-Li 2195 aerospace alloy for the roof frame",
	"50 mm glass panels",
	"Duplex SS 2205 for all piping (over-spec)",
	"Central dome, central core, or service arc around the oasis",
	"Fourth floor, graded unit heights, oculi",
	"B1 annular basement or any structure below sea level"
];
var PROHIBITED_CLAIMS = [
	"Structural efficiency multiplier “4×” vs baseline",
	"“20% material saving” without an FEA reference",
	"“Fatigue safety factor 8”",
	"“60–80% energy coverage” or “3.0–3.5 MW” output",
	"“Tier IV certified” before actual certification",
	"“Zero-Discharge” as a compliance claim",
	"Any pile length or count before geotechnical investigation"
];
var VENDORS = [
	{
		scope: "Primary structural steel",
		named: "Baosteel (BSN, PRC)",
		status: "OK",
		owner: "Main Works Contractor",
		notes: "High-strength steel, mill certs, traceability."
	},
	{
		scope: "Roof gridshell + diagrid",
		named: "Zhejiang Southeast Space Frame (PRC)",
		status: "OK",
		owner: "Main Works Contractor",
		notes: "Parametric fabrication, hot-dip galvanizing."
	},
	{
		scope: "Third-source quality benchmark",
		named: "Hyundai Steel (KOR)",
		status: "OK",
		owner: "Main Works Contractor",
		notes: "Benchmark and alternate supply assurance."
	},
	{
		scope: "Façade GFRC panels",
		named: "Tender · Rieder, Fibrobeton",
		status: "INFO",
		owner: "Façade Subcontractor",
		notes: "GFRC panels with anchorage system."
	},
	{
		scope: "Insulating and laminated glass",
		named: "Tender · Guardian, AGC, Saint-Gobain",
		status: "INFO",
		owner: "Façade Subcontractor",
		notes: "IGU with low-E, laminated safety glass."
	},
	{
		scope: "BIPV roof panels",
		named: "Tender · Onyx Solar, LONGi BIPV, ML System",
		status: "INFO",
		owner: "MEP / Renewable Contractor",
		notes: "Integrated PV with waterproofing system."
	},
	{
		scope: "District cooling equipment",
		named: "Tender · titanium exchangers per E-Section",
		status: "INFO",
		owner: "MEP Contractor",
		notes: "Chillers, titanium heat exchangers, pumps."
	},
	{
		scope: "Data center Tier IV / III (target)",
		named: "Vendor-neutral specification",
		status: "OPEN",
		owner: "Data Center Contractor",
		notes: "Uptime Institute aligned. Named only at RFQ."
	},
	{
		scope: "Networking (LAN / WAN / backbone)",
		named: "Vendor-neutral. Huawei / Nokia sovereign scope: excluded",
		status: "REJ",
		owner: "ICT / Network Contractor",
		notes: "Sovereign-compliant equipment and software."
	},
	{
		scope: "SOC / cybersecurity",
		named: "Vendor-neutral. Kaspersky: excluded (US-sanctioned)",
		status: "REJ",
		owner: "Cybersecurity Contractor",
		notes: "24/7 SOC, SIEM, threat intelligence."
	},
	{
		scope: "Fire protection",
		named: "Tender · Honeywell, Tyco, Siemens",
		status: "INFO",
		owner: "Fire Protection Contractor",
		notes: "Sprinklers, gas suppression, FM-Approved."
	},
	{
		scope: "Elevators",
		named: "Tender · KONE, Mitsubishi, Schindler",
		status: "INFO",
		owner: "Lift Contractor",
		notes: "High-speed lifts, destination control."
	},
	{
		scope: "AV, display walls, interactive",
		named: "Tender · Samsung, LG, Barco, disguise",
		status: "INFO",
		owner: "AV / Media Contractor",
		notes: "LED walls, projection, interactive systems."
	},
	{
		scope: "Water treatment",
		named: "Tender · Veolia, SUEZ, ACWA",
		status: "INFO",
		owner: "Water Treatment Contractor",
		notes: "RO, UF, UV, grey-water reuse systems."
	},
	{
		scope: "Marine works (reclaimed islet, quay)",
		named: "Kuwait / GCC tender — not in Chinese steel scope",
		status: "INFO",
		owner: "Marine Contractor",
		notes: "Reclamation, breakwater, dredging."
	}
];
var PERFORMANCE = [
	{
		metric: "BIPV roof area (10 units)",
		value: "~9,000 m²",
		basis: "Ten low double-curved shells, 38 × 28 m each"
	},
	{
		metric: "Projected BIPV peak capacity",
		value: "1.2 – 1.5 MWp",
		basis: "At 130–160 W/m² panel efficiency"
	},
	{
		metric: "Optional façade PV",
		value: "up to +0.5 MWp",
		basis: "Vertical BIPV on selected façades"
	},
	{
		metric: "Coverage of consumption",
		value: "20 – 35%",
		basis: "To be modelled post energy simulation"
	},
	{
		metric: "Steel tonnage benchmark",
		value: "2,600 – 3,700 t",
		basis: "Benchmark only. Manufacturer ROM governs"
	},
	{
		metric: "Roof shell rise-to-span",
		value: "0.18",
		basis: "6.8 m rise on 38 m span — not a pointed dome"
	},
	{
		metric: "Building ring diameter",
		value: "159.520 m",
		basis: "10 identical units at 36°"
	},
	{
		metric: "Central open oasis",
		value: "Ø 68 m",
		basis: "No structure, no bridges, no service arc"
	},
	{
		metric: "Data center design target",
		value: "Tier IV or III",
		basis: "Design target, not certified before certification"
	},
	{
		metric: "Cooling intake",
		value: "Open sea, below thermocline",
		basis: "Not from the lagoon; titanium plate exchangers"
	},
	{
		metric: "Water source",
		value: "MEW network",
		basis: "No desalination. Grey-water reuse."
	},
	{
		metric: "Concurrent capacity in units",
		value: "~3,470 persons",
		basis: "Per functional program"
	},
	{
		metric: "Site peak capacity",
		value: "~5,000 – 5,500",
		basis: "Subject to evacuation modelling"
	},
	{
		metric: "CapEx",
		value: "Range per phase",
		basis: "Open item H-6 in the Design Basis Register"
	}
];
var STANDARDS_KW = [
	{
		ref: "Kuwait Building Code (KBC) — as amended",
		apply: "Mandatory for all construction and architectural works"
	},
	{
		ref: "Kuwait Fire Force (KFF) Life Safety Code",
		apply: "Mandatory — fire, smoke and evacuation"
	},
	{
		ref: "MEW / R-6 (2014) Energy Conservation Code",
		apply: "Mandatory — energy efficiency"
	},
	{
		ref: "Kuwait Environment Public Authority (KEPA) — EIA",
		apply: "Mandatory — environmental assessment before construction"
	},
	{
		ref: "Kuwait Municipality coastal-strip regulations",
		apply: "Mandatory — coastal height restriction; sovereign-project classification"
	},
	{
		ref: "Public Tenders Law — Law 49/2016",
		apply: "Mandatory upon government tender"
	}
];
var STANDARDS_INT = [
	{
		ref: "ISO 9001 / 14001 / 45001",
		apply: "Quality, environment and safety"
	},
	{
		ref: "ISO 3834-2:2021",
		apply: "Welding quality"
	},
	{
		ref: "AISC 360",
		apply: "Steel design — reference"
	},
	{
		ref: "AWS D1.1",
		apply: "Welding of steel structures"
	},
	{
		ref: "Eurocode 3 (EN 1993)",
		apply: "Steel design — alternative reference"
	},
	{
		ref: "GB 50017",
		apply: "Chinese steel structure code — fabrication"
	},
	{
		ref: "ASHRAE 90.1 / 62.1",
		apply: "HVAC, energy efficiency and IAQ"
	},
	{
		ref: "NFPA 13, 72, 92",
		apply: "Fire — design reference unless it conflicts with KFF"
	},
	{
		ref: "Uptime Institute Tier III / IV",
		apply: "Data center resilience — design target"
	},
	{
		ref: "LEED v4 BD+C",
		apply: "Sustainability — target certification"
	}
];
var STANDARDS_NA = [{
	ref: "Estidama Pearl Rating System (Abu Dhabi)",
	apply: "Not applicable in Kuwait — replaced by LEED + MEW R-6"
}, {
	ref: "Aerospace alloy standards for architectural frame",
	apply: "Al-Li 2195 rejected as a roof material"
}];
var CONCEPT = "A ring of ten identical modules, inspired by the Kuwaiti emblem, united in symmetry to symbolise youth, unity, and vision. Each module opens toward the inner courtyard, creating a seamless flow between culture, learning, and innovation.";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var UNIT = "M 0 -41 C 7 -50 24 -68 22.5 -83 C 20.5 -92 9 -95.5 0 -95.5 C -9 -95.5 -20.5 -92 -22.5 -83 C -24 -68 -7 -50 0 -41 Z";
function StarMark({ className, double = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 200 200",
		className: cn("text-accent", className),
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: "translate(100 100)",
			stroke: "currentColor",
			strokeLinejoin: "round",
			children: [Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: UNIT,
				transform: `rotate(${i * 36})`,
				strokeWidth: "1.15"
			}, i)), double ? Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: UNIT,
				transform: `rotate(${i * 36}) scale(0.78)`,
				strokeWidth: "0.9",
				opacity: "0.55"
			}, `i-${i}`)) : null]
		})
	});
}
function unitPath(i) {
	const ang = (90 + i * 36) * Math.PI / 180;
	const cx = 200;
	const cy = 200;
	const tipR = 78;
	const outerR = 168;
	const half = 34;
	const aPerp = ang + Math.PI / 2;
	const tx = cx + tipR * Math.cos(ang);
	const ty = cy + tipR * Math.sin(ang);
	const ox = cx + outerR * Math.cos(ang);
	const oy = cy + outerR * Math.sin(ang);
	const lx = ox + half * Math.cos(aPerp);
	const ly = oy + half * Math.sin(aPerp);
	const rx = ox - half * Math.cos(aPerp);
	const ry = oy - half * Math.sin(aPerp);
	const mx = cx + 174 * Math.cos(ang);
	const my = cy + 174 * Math.sin(ang);
	return `M ${tx.toFixed(1)} ${ty.toFixed(1)}
    C ${((tx + lx) / 2).toFixed(1)} ${((ty + ly) / 2).toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}
    C ${rx.toFixed(1)} ${ry.toFixed(1)} ${((tx + rx) / 2).toFixed(1)} ${((ty + ry) / 2).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)} Z`;
}
function labelPoint(i) {
	const ang = (90 + i * 36) * Math.PI / 180;
	return {
		x: 200 + 188 * Math.cos(ang),
		y: 200 + 188 * Math.sin(ang)
	};
}
function RingPlan({ active = null, onSelect, showLabels = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 400",
		className: cn("h-full w-full", className),
		role: onSelect ? "group" : "img",
		"aria-label": "Ten-unit ring plan",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "200",
				r: "196",
				fill: "none",
				stroke: "currentColor",
				className: "text-line",
				strokeWidth: "0.6",
				strokeDasharray: "3 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "200",
				r: "70",
				fill: "none",
				stroke: "currentColor",
				className: "text-accent/40",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "196",
				textAnchor: "middle",
				className: "fill-muted",
				fontSize: "8",
				fontFamily: "Outfit, sans-serif",
				children: "OASIS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "208",
				textAnchor: "middle",
				className: "fill-accent",
				fontSize: "9",
				fontFamily: "Outfit, sans-serif",
				children: "Ø 68.000 m"
			}),
			CLOCKWISE_FROM_SOUTH.map((n, i) => {
				const isOn = active === n;
				const d = unitPath(i);
				const lp = labelPoint(i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d,
						className: cn("stroke-accent/70 transition-[fill,stroke,opacity] duration-200", isOn ? "fill-accent/25 stroke-accent-2" : "fill-surface-2/80", onSelect && "cursor-pointer hover:fill-accent/15"),
						strokeWidth: isOn ? 1.6 : 1,
						onClick: () => onSelect?.(n)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: 200 + 122 * Math.cos((90 + i * 36) * Math.PI / 180),
						y: 200 + 122 * Math.sin((90 + i * 36) * Math.PI / 180),
						textAnchor: "middle",
						dominantBaseline: "middle",
						className: cn("fill-fg", onSelect && "cursor-pointer"),
						fontSize: "11",
						fontFamily: "Cinzel, serif",
						onClick: () => onSelect?.(n),
						children: n
					}),
					showLabels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: lp.x,
						y: lp.y,
						textAnchor: "middle",
						dominantBaseline: "middle",
						className: cn(isOn ? "fill-accent-2" : "fill-muted"),
						fontSize: "6.5",
						fontFamily: "Outfit, sans-serif",
						children: UNITS[n - 1].name.split(" & ")[0]
					}) : null
				] }, n);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "378",
				textAnchor: "middle",
				className: "fill-dim",
				fontSize: "7",
				fontFamily: "Outfit, sans-serif",
				children: "SOUTH ENTRY · Ø 159.520 m"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "200,248 196,238 204,238",
				className: "fill-accent/70"
			})
		]
	});
}
function Slide({ children, className, flush = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative flex h-full min-h-0 w-full flex-col overflow-y-auto overflow-x-hidden", className),
		children: [flush ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-12 shrink-0 sm:h-14",
			"aria-hidden": true
		}), children]
	});
}
function Kicker({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-sans text-kicker font-medium tracking-[0.28em] text-accent uppercase", className),
		children
	});
}
function Arabic({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		dir: "rtl",
		lang: "ar",
		className: cn("font-arabic text-caption text-muted", className),
		children
	});
}
function Rule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-px w-14 hairline", className) });
}
function Metric({ value, label, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 border-t border-line pt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-title tabular tracking-tight text-fg",
			children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ms-1 text-caption font-sans text-muted",
				children: unit
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-caption tracking-wide text-muted",
			children: label
		})]
	});
}
function SpecRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[1fr_auto] gap-4 border-b border-line/80 py-2.5 text-caption last:border-b-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:text-body",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-end font-medium tabular text-fg md:text-start",
			children: value
		})]
	});
}
function ChapterHead({ index, title, arabic, kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "stagger-in min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [index, kicker ? `  ·  ${kicker}` : null] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-display font-medium tracking-tight text-fg",
				children: title
			}),
			arabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arabic, {
				className: "mt-2 text-body text-muted",
				children: arabic
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-5" })
		]
	});
}
function StatusChip({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex min-h-6 items-center rounded-xs px-2 font-sans text-micro font-semibold tracking-[0.14em]", {
			OK: "bg-ok/15 text-ok",
			INFO: "bg-accent/10 text-accent-2",
			OPEN: "bg-open/15 text-open",
			REJ: "bg-rej/15 text-rej"
		}[status]),
		children: status
	});
}
function CoverSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		className: "bg-bg",
		flush: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-full flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-skyline.png",
					alt: "HHMYC on the Kuwait waterfront at night",
					className: "absolute inset-0 h-full w-full object-cover object-[72%_center]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-bg via-bg/80 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex min-h-full flex-col justify-between px-6 pt-16 pb-10 sm:px-12 lg:px-16 lg:pt-20 lg:pb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarMark, { className: "h-16 w-16 sm:h-20 sm:w-20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arabic, {
								className: "mt-6 text-body text-fg/80",
								children: PROJECT.nameAr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-display text-hero font-medium tracking-[0.18em] text-fg",
								children: PROJECT.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-kicker tracking-[0.42em] text-accent uppercase",
								children: "Design Basis Register"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-6 w-24" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-caption tracking-[0.22em] text-muted uppercase",
								children: [
									PROJECT.rev,
									"  ·  ",
									PROJECT.date
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg stagger-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lede tracking-[0.12em] text-accent-2 uppercase",
								children: PROJECT.taglineEn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arabic, {
								className: "mt-2",
								children: PROJECT.taglineAr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-micro tracking-[0.18em] text-dim uppercase",
								children: ["Status: ", PROJECT.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-sm text-micro leading-relaxed text-dim",
								children: PROJECT.stage
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 hidden text-caption text-muted sm:block",
								children: [
									"Press ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg",
										children: "→"
									}),
									" or swipe to continue"
								]
							})
						]
					})]
				})
			]
		})
	});
}
function ContentsSlide({ onJump }) {
	const chapters = SLIDES.filter((s) => s.id !== "cover" && s.id !== "contents");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "00",
				title: "Contents",
				arabic: "المحتويات",
				kicker: "Register index"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid gap-0 sm:grid-cols-2 sm:gap-x-12",
				children: chapters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onJump(s.id),
						className: "flex w-full items-baseline gap-4 py-3.5 text-start transition-colors duration-150 hover:text-accent-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 shrink-0 font-display text-caption tabular text-accent",
							children: s.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-sans text-body text-fg",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "rtl",
								lang: "ar",
								className: "mt-0.5 block font-arabic text-caption text-dim",
								children: s.titleAr
							})]
						})]
					})
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-caption leading-relaxed text-dim",
				children: PROJECT.note
			})
		]
	});
}
function VisionSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-16 lg:pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "01",
				title: "A pledge and a promise",
				arabic: PROJECT.taglineAr,
				kicker: "Mandate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-xl text-lede leading-relaxed text-fg/90",
				children: CONCEPT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-xl text-body leading-relaxed text-muted",
				children: [PROJECT.nameEn, ". A coastal ring of ten identical units around an unbuilt oasis — architecture as national emblem, not a landmark object."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-2 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "10",
						label: "Identical units"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "36°",
						label: "Rotational increment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "46,000",
						unit: "m²",
						label: "Total GFA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "Ø 68",
						unit: "m",
						label: "Open oasis"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-col gap-4 lg:mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-56 flex-1 overflow-hidden border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/oasis.png",
					alt: "Aerial of the ten-unit ring and central oasis",
					className: "h-full w-full object-cover object-center"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-px bg-line sm:grid-cols-2",
				children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-bg px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body text-fg",
						children: p.en
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arabic, {
						className: "mt-1",
						children: p.ar
					})]
				}, p.id))
			})]
		})]
	});
}
function GeometrySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "02",
				title: "Governing geometry",
				arabic: "الهندسة الحاكمة",
				kicker: "Parametric control package"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md text-body leading-relaxed text-muted",
				children: GEOMETRY.unitForm
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Identical units / increment",
						value: `${GEOMETRY.units} / ${GEOMETRY.increment}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Unit outline",
						value: GEOMETRY.outline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Unit plan L × W",
						value: GEOMETRY.unitLxW
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Floor area / floors",
						value: GEOMETRY.floorArea
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Finished floor levels",
						value: GEOMETRY.ffl
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Roof datum / apex",
						value: `${GEOMETRY.roofDatum} / ${GEOMETRY.roofApex}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Inner tip / oasis",
						value: `${GEOMETRY.innerTip} / ${GEOMETRY.oasis}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Outer crown / ring",
						value: `${GEOMETRY.outerCrown} / ${GEOMETRY.ring}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Roof gridshell",
						value: GEOMETRY.roofShell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Diagrid cell",
						value: GEOMETRY.diagrid
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Connectors",
						value: `${GEOMETRY.connectors} · ${GEOMETRY.connectorArea}`
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-col gap-4 lg:mt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex-1 overflow-hidden border border-line bg-bg-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/ring-aerial.jpg",
					alt: "Axonometric of the ten-unit ring",
					className: "h-full min-h-64 w-full object-contain"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "159.52",
						unit: "m",
						label: "Ring diameter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "20.40",
						unit: "m",
						label: "Roof apex"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						value: "45.76",
						unit: "m",
						label: "Unit length"
					})
				]
			})]
		})]
	});
}
function FormLogicSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "03",
				title: "Form generation",
				arabic: "منطق التوليد",
				kicker: "Algorithm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-0",
				children: [
					"Create a ring of radius R",
					"Divide into N equal segments",
					"Place modules tangentially",
					"Connect with smooth bridges",
					"Apply thickness T and set height Z",
					"Ensure interstitial opening C"
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-b border-line py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-caption tabular text-accent",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-body text-fg",
						children: s
					})]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "N",
						value: "10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "R, Z, T, C",
						value: "Governed variables"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Levels",
						value: "Three — identical height"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecRow, {
						label: "Style",
						value: GEOMETRY.style
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 lg:mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-line bg-bg-elevated p-3 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/geometry.jpeg",
					alt: "Parametric geometry control package",
					className: "h-auto w-full object-contain"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-caption text-dim",
				children: "Repeating ring module · not a graded silhouette · not a central dome"
			})]
		})]
	});
}
function AreasSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "04",
				title: "Areas & site",
				arabic: "المساحات والموقع",
				kicker: "Gross floor area"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-display text-title tabular text-fg",
				children: [GFA_TOTAL, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ms-2 font-sans text-caption tracking-widest text-muted uppercase",
					children: "Total GFA"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-line py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body text-fg",
							children: a.item
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "shrink-0 font-medium tabular text-accent-2",
							children: a.value
						})]
					}), "detail" in a && a.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-caption text-dim",
						children: a.detail
					}) : null]
				}, a.item)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-baseline justify-between border-t border-accent/30 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker tracking-[0.18em] text-muted uppercase",
						children: "Total shared"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lede tabular text-fg",
						children: GFA_SHARED
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-2",
				children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-caption text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" }), p]
				}, p))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 lg:mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-72 overflow-hidden border border-line lg:h-[calc(100%-2rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/oasis.png",
					alt: "Overall site plan — ring, oasis, and shared facilities",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 start-0 end-0 bg-linear-to-t from-bg to-transparent p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-micro tracking-[0.2em] text-accent uppercase",
						children: "Overall site plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-caption text-fg",
						children: "Hall, services and walkways sit outside the ring. Oasis remains open."
					})]
				})]
			})
		})]
	});
}
function ProgramSlide() {
	const [active, setActive] = (0, import_react.useState)(1);
	const unit = UNITS[active - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "05",
				title: "Functional program",
				arabic: "البرنامج الوظيفي",
				kicker: "Clockwise from south"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-body leading-relaxed text-muted",
				children: [
					"Sequence from the south entry: ",
					CLOCKWISE_FROM_SOUTH.join(" → "),
					". Select a unit on the ring."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-4",
				children: PROGRAM_STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					value: s.value,
					label: s.label
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: ["Unit ", String(unit.n).padStart(2, "0")] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-title text-fg",
						children: unit.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-body text-muted",
						children: unit.brief
					}),
					unit.n === 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-caption text-warn",
						children: "Immersive theatre remains a decision: small 12–14 m dome in a double-height volume of unit 10, or a distributed digital experience. No 20–25 m dome."
					}) : null,
					unit.n === 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-caption text-muted",
						children: "Local double height by omitting part of the level-1 slab. All unit outlines remain identical."
					}) : null
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-col items-center justify-center lg:mt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingPlan, {
					active,
					onSelect: setActive,
					showLabels: false
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap justify-center gap-1.5",
					children: UNITS.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(u.n),
						className: cn("inline-flex size-11 items-center justify-center font-display text-caption tabular transition-colors duration-150", active === u.n ? "bg-accent text-bg" : "border border-line text-muted hover:border-accent hover:text-fg"),
						"aria-label": u.name,
						children: u.n
					}, u.n))
				})]
			})
		})]
	});
}
function StructureSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "06",
				title: "Structure & fabrication",
				arabic: "الهيكل والتصنيع",
				kicker: "Design basis"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-px bg-line sm:grid-cols-2",
				children: STRUCTURE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-bg p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-body font-medium text-fg",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-caption leading-relaxed text-muted",
						children: s.body
					})]
				}, s.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-3xl text-caption leading-relaxed text-dim",
				children: "Shipping: all kits in 40-foot containers; connections disassembled; marine delivery. One master kit × 10 — prototype unit 01 complete before serial."
			})
		]
	});
}
function EnergySlide() {
	const icons = [
		SunMedium,
		CircuitBoard,
		Waves,
		Droplets,
		Shield,
		Leaf
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "07",
				title: "Energy, cooling, data",
				arabic: "الطاقة والتبريد والبيانات",
				kicker: "Performance envelope"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption leading-relaxed",
							children: "BIPV integrated roofs with high-efficiency photovoltaic glass — dark navy, not decorative."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption leading-relaxed",
							children: "Direct seawater intake from the open sea beyond the breakwater. The lagoon is a microclimate, not a cooling source."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption leading-relaxed",
							children: "Sovereign data infrastructure above flood datum. Specification-based, vendor-neutral in security scope."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-8 min-h-48 overflow-hidden border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/ring-aerial.jpg",
					alt: "BIPV roof shells on the ten-unit ring",
					className: "h-full w-full object-cover"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-2 lg:mt-2",
			children: ENERGY.map((e, i) => {
				const Icon = icons[i] ?? Building2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-kicker tracking-[0.16em] text-muted uppercase",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lede tabular text-fg",
							children: e.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-caption leading-relaxed text-muted",
							children: e.body
						})
					]
				}, e.title);
			})
		})]
	});
}
function SpecsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "08",
				title: "Technical specifications",
				arabic: "المواصفات التقنية والمكوّنات",
				kicker: "Color-coded zones · Panel Rev 1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-caption leading-relaxed text-muted",
				children: "Each colour marks a construction / systems zone. Materials and grades below are the Rev 1.1 basis. Where this panel and the Register would conflict, the Register prevails."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-line",
				children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 h-3 w-3 shrink-0 rounded-xs",
						style: { background: z.color },
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body text-fg",
							children: z.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-caption leading-relaxed text-muted md:mt-0",
							children: z.spec
						})]
					})]
				}, z.name))
			})
		]
	});
}
function VendorsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-10 lg:px-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "09",
				title: "Vendor & package matrix",
				arabic: "مصفوفة المورّدين والحزم",
				kicker: "Named suppliers in non-sensitive scope only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-caption leading-relaxed text-muted",
				children: "In sovereign, security, network, and data-center scopes, selection is specification-based and vendor-neutral, decided at the formal RFQ stage."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] border-collapse text-caption",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-start text-micro tracking-[0.16em] text-dim uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Scope"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Named / benchmark"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Package owner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Notes"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: VENDORS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line/80 align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pe-3 text-fg",
								children: v.scope
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pe-3 text-muted",
								children: v.named
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pe-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { status: v.status })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pe-3 text-muted",
								children: v.owner
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 text-dim",
								children: v.notes
							})
						]
					}, v.scope)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-micro tracking-wide text-dim",
				children: "OK confirmed · INFO to be tendered · OPEN specification released / RFQ pending · REJ excluded / not compliant"
			})
		]
	});
}
function PerformanceSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
				index: "10",
				title: "Performance indicators",
				arabic: "المؤشرات الأدائية",
				kicker: "Real values only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-caption text-muted",
				children: "Ranges where the input is uncertain. Any single number given without range or basis has been removed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[540px] text-caption",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-start text-micro tracking-[0.16em] text-dim uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Metric"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pe-3 font-medium",
								children: "Value"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Basis"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PERFORMANCE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line/80 align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pe-3 text-fg",
								children: p.metric
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pe-3 font-medium tabular text-accent-2",
								children: p.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-dim",
								children: p.basis
							})
						]
					}, p.metric)) })]
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mt-8 lg:mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Prohibited claims" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: PROHIBITED_CLAIMS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-s-2 border-rej/70 ps-3 text-caption leading-relaxed text-muted",
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-caption leading-relaxed text-dim",
					children: "All values are concept-design indicators only and subject to change. Detailed engineering, simulation, and certification will refine final figures."
				})
			]
		})]
	});
}
function StandardsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
			index: "11",
			title: "Applicable standards",
			arabic: "المعايير المنطبقة",
			kicker: "Mandatory and reference"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "A. Kuwait — mandatory" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4",
				children: STANDARDS_KW.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-b border-line py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body text-fg",
						children: s.ref
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-caption text-muted",
						children: s.apply
					})]
				}, s.ref))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "B. International — design references" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4",
					children: STANDARDS_INT.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4 border-b border-line py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-caption text-fg",
							children: s.ref
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-[16rem] text-end text-caption text-dim",
							children: s.apply
						})]
					}, s.ref))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					className: "mt-8",
					children: "C. Explicitly not applicable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4",
					children: STANDARDS_NA.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body text-fg",
							children: s.ref
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-caption text-muted",
							children: s.apply
						})]
					}, s.ref))
				})
			] })]
		})]
	});
}
function ConstraintsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "px-6 pb-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, {
			index: "12",
			title: "Explicitly rejected",
			arabic: "مرفوض صراحة",
			kicker: "Do not appear in any drawing or spec"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8",
			children: REJECTED.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4 border-b border-line py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-caption tabular text-rej",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-body text-fg",
					children: r
				})]
			}, r))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 lg:mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Ornament" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lede leading-relaxed text-fg/90",
					children: "Islamic ten-point star geometry. Discreet gold accents in interior finishes only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-body leading-relaxed text-muted",
					children: "The ring is the emblem. There is no central dome, no service arc around the oasis, and no fourth floor. All ten units share one height, one kit, one outline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarMark, { className: "h-40 w-40 text-accent/80" })
				})
			]
		})]
	});
}
function CloseSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		className: "relative bg-bg",
		flush: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-skyline.png",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-bg via-bg/85 to-bg/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-full flex-col justify-between px-6 pt-20 pb-12 sm:px-12 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarMark, { className: "h-16 w-16" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arabic, {
								className: "mt-6 text-body",
								children: PROJECT.nameAr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-lg text-caption leading-relaxed text-muted",
								children: PROJECT.nameEn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 font-display text-hero font-medium tracking-[0.14em] text-fg",
								children: PROJECT.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-kicker tracking-[0.38em] text-accent uppercase",
								children: "Design Basis Register"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-6 w-24" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-lede tracking-[0.1em] text-accent-2 uppercase",
								children: PROJECT.taglineEn
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-4",
						children: [
							{
								t: "Governing register",
								i: Building2
							},
							{
								t: "Parametric certainty",
								i: CircuitBoard
							},
							{
								t: "Integrated design",
								i: Users
							},
							{
								t: "National sovereignty",
								i: Shield
							}
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-line pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.i, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-caption tracking-wide text-fg",
								children: x.t
							})]
						}, x.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-micro leading-relaxed text-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								PROJECT.rev,
								"  ·  ",
								PROJECT.date,
								"  ·  ",
								PROJECT.confidential
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["Prepared for ", PROJECT.preparedFor]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: PROJECT.note
							})
						]
					})
				]
			})
		]
	});
}
var SLIDES = [
	{
		id: "cover",
		num: "00",
		title: "Cover",
		titleAr: "الغلاف",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverSlide, {})
	},
	{
		id: "contents",
		num: "00",
		title: "Contents",
		titleAr: "المحتويات",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentsSlide, { onJump: () => void 0 })
	},
	{
		id: "vision",
		num: "01",
		title: "Mandate",
		titleAr: "العهد",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionSlide, {})
	},
	{
		id: "geometry",
		num: "02",
		title: "Governing geometry",
		titleAr: "الهندسة الحاكمة",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeometrySlide, {})
	},
	{
		id: "form",
		num: "03",
		title: "Form generation",
		titleAr: "منطق التوليد",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLogicSlide, {})
	},
	{
		id: "areas",
		num: "04",
		title: "Areas & site",
		titleAr: "المساحات والموقع",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreasSlide, {})
	},
	{
		id: "program",
		num: "05",
		title: "Functional program",
		titleAr: "البرنامج الوظيفي",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramSlide, {})
	},
	{
		id: "structure",
		num: "06",
		title: "Structure & fabrication",
		titleAr: "الهيكل والتصنيع",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructureSlide, {})
	},
	{
		id: "energy",
		num: "07",
		title: "Energy, cooling, data",
		titleAr: "الطاقة والتبريد والبيانات",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergySlide, {})
	},
	{
		id: "specs",
		num: "08",
		title: "Technical specifications",
		titleAr: "المواصفات التقنية",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecsSlide, {})
	},
	{
		id: "vendors",
		num: "09",
		title: "Vendor matrix",
		titleAr: "مصفوفة المورّدين",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorsSlide, {})
	},
	{
		id: "performance",
		num: "10",
		title: "Performance indicators",
		titleAr: "المؤشرات الأدائية",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformanceSlide, {})
	},
	{
		id: "standards",
		num: "11",
		title: "Applicable standards",
		titleAr: "المعايير المنطبقة",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandardsSlide, {})
	},
	{
		id: "constraints",
		num: "12",
		title: "Rejected items",
		titleAr: "مرفوض صراحة",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstraintsSlide, {})
	},
	{
		id: "close",
		num: "13",
		title: "Close",
		titleAr: "الختام",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseSlide, {})
	}
];
function renderSlide(id, onJump) {
	if (id === "contents") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentsSlide, { onJump });
	const found = SLIDES.find((s) => s.id === id);
	return found ? found.render() : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverSlide, {});
}
var LAST = SLIDES.length - 1;
function indexFromHash() {
	if (typeof window === "undefined") return 0;
	const id = window.location.hash.replace(/^#/, "");
	const i = SLIDES.findIndex((s) => s.id === id);
	return i >= 0 ? i : 0;
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [dir, setDir] = (0, import_react.useState)("next");
	const [overview, setOverview] = (0, import_react.useState)(false);
	const [fs, setFs] = (0, import_react.useState)(false);
	const touchX = (0, import_react.useRef)(null);
	const frameRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const sync = () => setIndex(indexFromHash());
		sync();
		window.addEventListener("hashchange", sync);
		window.addEventListener("popstate", sync);
		return () => {
			window.removeEventListener("hashchange", sync);
			window.removeEventListener("popstate", sync);
		};
	}, []);
	const go = (0, import_react.useCallback)((next, direction) => {
		const clamped = Math.max(0, Math.min(LAST, next));
		setDir(direction ?? (clamped >= index ? "next" : "prev"));
		setIndex(clamped);
		setOverview(false);
		const id = SLIDES[clamped].id;
		window.history.pushState(null, "", `#${id}`);
	}, [index]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
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
			} else if (e.key === "Escape") setOverview((v) => !v);
			else if (e.key.toLowerCase() === "g") setOverview((v) => !v);
			else if (e.key.toLowerCase() === "f") toggleFs();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go, index]);
	const toggleFs = () => {
		const el = frameRef.current;
		if (!el) return;
		if (!document.fullscreenElement) el.requestFullscreen?.().then(() => setFs(true)).catch(() => void 0);
		else document.exitFullscreen?.().then(() => setFs(false)).catch(() => void 0);
	};
	(0, import_react.useEffect)(() => {
		const onFs = () => setFs(Boolean(document.fullscreenElement));
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	const onTouchStart = (e) => {
		touchX.current = e.changedTouches[0]?.clientX ?? null;
	};
	const onTouchEnd = (e) => {
		const x = e.changedTouches[0]?.clientX;
		if (touchX.current == null || x == null) return;
		const dx = x - touchX.current;
		if (dx < -56) go(index + 1, "next");
		if (dx > 56) go(index - 1, "prev");
		touchX.current = null;
	};
	const slide = SLIDES[index];
	const progress = (index + 1) / SLIDES.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: frameRef,
		className: "relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-bg text-fg",
		onTouchStart,
		onTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarMark, {
						className: "h-8 w-8 text-accent",
						double: false
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-caption tracking-[0.22em] text-fg",
							children: PROJECT.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-micro tracking-[0.18em] text-dim uppercase",
							children: "Design Catalogue"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOverview((v) => !v),
						className: "inline-flex size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg",
						"aria-label": "Overview",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggleFs,
						className: "hidden size-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg sm:inline-flex",
						"aria-label": fs ? "Exit fullscreen" : "Fullscreen",
						children: fs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "slide-pane absolute inset-0",
					"data-dir": dir,
					children: renderSlide(slide.id, (id) => {
						const i = SLIDES.findIndex((s) => s.id === id);
						if (i >= 0) go(i);
					})
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-30 border-t border-line bg-bg/90 px-3 py-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 top-0 h-px bg-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px bg-accent transition-[width] duration-300",
						style: { width: `${progress}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(index - 1, "prev"),
							disabled: index === 0,
							className: "inline-flex size-11 items-center justify-center text-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:text-dim",
							"aria-label": "Previous slide",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "min-w-0 flex-1 truncate text-caption",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular text-accent",
									children: slide.num
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-dim",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: slide.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									dir: "rtl",
									lang: "ar",
									className: "ms-2 hidden font-arabic text-dim md:inline",
									children: slide.titleAr
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "shrink-0 font-sans text-micro tabular tracking-widest text-dim",
							children: [
								String(index + 1).padStart(2, "0"),
								" — ",
								String(SLIDES.length).padStart(2, "0")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(index + 1, "next"),
							disabled: index === LAST,
							className: "inline-flex size-11 items-center justify-center text-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:text-dim",
							"aria-label": "Next slide",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			}),
			overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-40 overflow-y-auto bg-bg/95 p-5 sm:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker tracking-[0.28em] text-accent uppercase",
						children: "Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-title text-fg",
						children: "All plates"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOverview(false),
						className: "h-11 px-3 text-caption text-muted hover:text-fg",
						children: "Close"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
					children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(i),
						className: cn("flex h-full min-h-28 w-full flex-col items-start border p-4 text-start transition-colors duration-150", i === index ? "border-accent bg-surface" : "border-line bg-bg-elevated hover:border-line-strong"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-caption tabular text-accent",
								children: s.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 text-body text-fg",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "rtl",
								lang: "ar",
								className: "mt-1 font-arabic text-caption text-dim",
								children: s.titleAr
							})
						]
					}) }, s.id))
				})]
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
