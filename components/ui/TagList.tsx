import { cn } from "@/lib/css";

const SURFACES = {
  /** Translucent, for tags sitting on glass cards */
  glass: "border-white/10 bg-background/60",
  /** Opaque, for tags on the page background */
  solid: "border-border bg-card",
} as const;

const SIZES = {
  sm: "px-2 py-1",
  md: "px-3 py-1",
} as const;

type TagListProps = {
  items: string[];
  surface?: keyof typeof SURFACES;
  size?: keyof typeof SIZES;
  /** Extra classes for each tag, e.g. a hover effect */
  tagClassName?: string;
  className?: string;
};

/** A row of small monospace labels, used for tech stacks and skills. */
export default function TagList({
  items,
  surface = "glass",
  size = "md",
  tagClassName,
  className,
}: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "rounded-md border font-mono text-xs text-muted",
            SURFACES[surface],
            SIZES[size],
            tagClassName
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
