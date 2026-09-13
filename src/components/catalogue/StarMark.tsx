import { cn } from "@/lib/utils";

const UNIT =
  "M 0 -41 C 7 -50 24 -68 22.5 -83 C 20.5 -92 9 -95.5 0 -95.5 C -9 -95.5 -20.5 -92 -22.5 -83 C -24 -68 -7 -50 0 -41 Z";

export function StarMark({
  className,
  double = true,
}: {
  className?: string;
  double?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("text-accent", className)}
      fill="none"
      aria-hidden
    >
      <g transform="translate(100 100)" stroke="currentColor" strokeLinejoin="round">
        {Array.from({ length: 10 }, (_, i) => (
          <path
            key={i}
            d={UNIT}
            transform={`rotate(${i * 36})`}
            strokeWidth="1.15"
          />
        ))}
        {double
          ? Array.from({ length: 10 }, (_, i) => (
              <path
                key={`i-${i}`}
                d={UNIT}
                transform={`rotate(${i * 36}) scale(0.78)`}
                strokeWidth="0.9"
                opacity="0.55"
              />
            ))
          : null}
      </g>
    </svg>
  );
}
