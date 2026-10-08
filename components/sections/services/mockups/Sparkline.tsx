const LINE = "M0 44 C18 40 28 20 48 28 S78 46 98 30 S138 6 158 16 S188 10 200 6";

/** A line chart that draws itself, with a soft fill underneath. */
export default function Sparkline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" className={className}>
      <path d={`${LINE} V60 H0 Z`} className="fill-accent/15" />
      <path
        d={LINE}
        pathLength={1}
        strokeDasharray={1}
        strokeWidth={2}
        strokeLinecap="round"
        className="animate-draw stroke-accent"
      />
    </svg>
  );
}