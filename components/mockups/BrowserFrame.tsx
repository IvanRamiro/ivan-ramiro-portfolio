import type { ReactNode } from "react";

const WINDOW_DOTS = ["bg-red-500/80", "bg-yellow-500/80", "bg-green-500/80"];

type BrowserFrameProps = {
  address: string;
  children: ReactNode;
  className?: string;
};

export default function BrowserFrame({ address, children, className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/15 bg-background/80 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        {WINDOW_DOTS.map((color) => (
          <span key={color} className={`size-2 rounded-full ${color}`} />
        ))}
        <span className="ml-2 flex-1 truncate rounded-md bg-background/60 px-3 py-1 font-mono text-[10px] text-muted">
          {address}
        </span>
      </div>
      {children}
    </div>
  );
}