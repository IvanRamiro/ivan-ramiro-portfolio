const TONES = {
  muted: "bg-white/15",
  strong: "bg-white/30",
  accent: "bg-accent",
} as const;

type SkeletonProps = {
  tone?: keyof typeof TONES;
  className?: string;
};

export default function Skeleton({ tone = "muted", className = "" }: SkeletonProps) {
  return <span className={`block rounded-full ${TONES[tone]} ${className}`} />;
}