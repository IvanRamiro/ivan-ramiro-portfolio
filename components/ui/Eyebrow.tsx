import type { ReactNode } from "react";
import { cn } from "@/lib/css";

const TONES = {
  default: { label: "text-ink-muted", index: "text-copper" },
  inverse: { label: "text-copper-muted", index: "text-copper-ink" },
} as const;

type EyebrowProps = {
  index?: string;
  tone?: keyof typeof TONES;
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({ index, tone = "default", children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-start gap-3 font-mono text-label uppercase tracking-[0.12em]",
        TONES[tone].label,
        className
      )}
    >
      {index && (
        <span className={cn("shrink-0 whitespace-nowrap tabular-nums", TONES[tone].index)}>
          [ {index} ]
        </span>
      )}
      <span>{children}</span>
    </p>
  );
}
