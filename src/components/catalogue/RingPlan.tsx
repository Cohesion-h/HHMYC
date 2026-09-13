import { CLOCKWISE_FROM_SOUTH, UNITS } from "@/lib/catalogue-data";
import { cn } from "@/lib/utils";

type Props = {
  active?: number | null;
  onSelect?: (n: number) => void;
  showLabels?: boolean;
  className?: string;
};

function unitPath(i: number) {
  const ang = ((90 + i * 36) * Math.PI) / 180;
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
  const mx = cx + (outerR + 6) * Math.cos(ang);
  const my = cy + (outerR + 6) * Math.sin(ang);
  return `M ${tx.toFixed(1)} ${ty.toFixed(1)}
    C ${((tx + lx) / 2).toFixed(1)} ${((ty + ly) / 2).toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}
    C ${rx.toFixed(1)} ${ry.toFixed(1)} ${((tx + rx) / 2).toFixed(1)} ${((ty + ry) / 2).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)} Z`;
}

function labelPoint(i: number) {
  const ang = ((90 + i * 36) * Math.PI) / 180;
  return {
    x: 200 + 188 * Math.cos(ang),
    y: 200 + 188 * Math.sin(ang),
  };
}

export function RingPlan({ active = null, onSelect, showLabels = true, className }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      role={onSelect ? "group" : "img"}
      aria-label="Ten-unit ring plan"
    >
      <circle
        cx="200"
        cy="200"
        r="196"
        fill="none"
        stroke="currentColor"
        className="text-line"
        strokeWidth="0.6"
        strokeDasharray="3 4"
      />
      <circle
        cx="200"
        cy="200"
        r="70"
        fill="none"
        stroke="currentColor"
        className="text-accent/40"
        strokeWidth="0.8"
      />
      <text
        x="200"
        y="196"
        textAnchor="middle"
        className="fill-muted"
        fontSize="8"
        fontFamily="Outfit, sans-serif"
      >
        OASIS
      </text>
      <text
        x="200"
        y="208"
        textAnchor="middle"
        className="fill-accent"
        fontSize="9"
        fontFamily="Outfit, sans-serif"
      >
        Ø 68.000 m
      </text>

      {CLOCKWISE_FROM_SOUTH.map((n, i) => {
        const isOn = active === n;
        const d = unitPath(i);
        const lp = labelPoint(i);
        return (
          <g key={n}>
            <path
              d={d}
              className={cn(
                "stroke-accent/70 transition-[fill,stroke,opacity] duration-200",
                isOn ? "fill-accent/25 stroke-accent-2" : "fill-surface-2/80",
                onSelect && "cursor-pointer hover:fill-accent/15",
              )}
              strokeWidth={isOn ? 1.6 : 1}
              onClick={() => onSelect?.(n)}
            />
            <text
              x={200 + 122 * Math.cos(((90 + i * 36) * Math.PI) / 180)}
              y={200 + 122 * Math.sin(((90 + i * 36) * Math.PI) / 180)}
              textAnchor="middle"
              dominantBaseline="middle"
              className={cn("fill-fg", onSelect && "cursor-pointer")}
              fontSize="11"
              fontFamily="Cinzel, serif"
              onClick={() => onSelect?.(n)}
            >
              {n}
            </text>
            {showLabels ? (
              <text
                x={lp.x}
                y={lp.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={cn(isOn ? "fill-accent-2" : "fill-muted")}
                fontSize="6.5"
                fontFamily="Outfit, sans-serif"
              >
                {UNITS[n - 1].name.split(" & ")[0]}
              </text>
            ) : null}
          </g>
        );
      })}

      <text
        x="200"
        y="378"
        textAnchor="middle"
        className="fill-dim"
        fontSize="7"
        fontFamily="Outfit, sans-serif"
      >
        SOUTH ENTRY · Ø 159.520 m
      </text>
      <polygon points="200,248 196,238 204,238" className="fill-accent/70" />
    </svg>
  );
}
