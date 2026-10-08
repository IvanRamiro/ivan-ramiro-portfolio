import { cn } from "@/lib/css";

const TONES = {
  muted: "bg-white/15",
  strong: "bg-white/30",
  accent: "bg-accent",
} as const;

type SkeletonProps = {
  tone?: keyof typeof TONES;
  className?: string;
};

/** A grey pill standing in for text or an icon inside the mock-ups. */
export default function Skeleton({ tone = "muted", className }: SkeletonProps) {
  return <span className={cn("block rounded-full", TONES[tone], className)} />;
}