import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  /** Set the width here (for example "w-40"); the height follows the phone's shape */
  className?: string;
};

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[2rem] border-[3px] border-white/20 bg-background p-1.5 shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="relative size-full overflow-hidden rounded-[1.5rem] bg-card">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-3.5 w-1/3 -translate-x-1/2 rounded-full bg-black"
        />
        {children}
      </div>
    </div>
  );
}