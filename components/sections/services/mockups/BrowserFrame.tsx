import type { ReactNode } from "react";
import WindowDots from "@/components/ui/WindowDots";
import { cn } from "@/lib/css";

type BrowserFrameProps = {
  address: string;
  children: ReactNode;
  className?: string;
};

/** A desktop browser window with a fake address bar. */
export default function BrowserFrame({ address, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/15 bg-background/80 shadow-2xl shadow-black/40",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        <WindowDots size="sm" />
        <span className="ml-2 flex-1 truncate rounded-md bg-background/60 px-3 py-1 font-mono text-[10px] text-muted">
          {address}
        </span>
      </div>
      {children}
    </div>
  );
}