import { cn } from "@/lib/css";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  label,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Eyebrow index={index}>{label}</Eyebrow>
      <h2 className="mt-5 text-h2 font-semibold">{title}</h2>
      {subtitle && <p className="mt-5 max-w-[60ch] text-lede text-ink-muted">{subtitle}</p>}
    </div>
  );
}
