import { cn } from "@/lib/css";

const SURFACES = {
  surface: "border-line bg-surface-1",
  raised: "border-line bg-surface-2",
} as const;

const SIZES = {
  sm: "px-2 py-1",
  md: "px-3 py-1.5",
} as const;

type TagListProps = {
  items: string[];
  surface?: keyof typeof SURFACES;
  size?: keyof typeof SIZES;
  tagClassName?: string;
  className?: string;
};

export default function TagList({
  items,
  surface = "raised",
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
            "rounded-chip border font-mono text-label normal-case tracking-normal text-ink-muted",
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
