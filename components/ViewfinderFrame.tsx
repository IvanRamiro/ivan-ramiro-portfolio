import type { ReactNode } from "react";

const CORNERS = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

export default function ViewfinderFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-5">
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute size-6 border-accent/70 ${position}`}
        />
      ))}
      {children}
    </div>
  );
}