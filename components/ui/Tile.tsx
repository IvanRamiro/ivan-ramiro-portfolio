import type { ReactNode } from "react";
import { cn } from "@/lib/css";

const TONES = {
  surface: "border-line bg-surface-1 hover:border-line-strong",
  ground: "border-line bg-ground",
} as const;

type TileProps = {
  as?: "div" | "article" | "li" | "section";
  tone?: keyof typeof TONES;
  children: ReactNode;
  className?: string;
};

export default function Tile({ as: Tag = "div", tone = "surface", children, className }: TileProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-tile border transition-colors duration-(--dur-fast)",
        TONES[tone],
        className
      )}
    >
      {children}
    </Tag>
  );
}
