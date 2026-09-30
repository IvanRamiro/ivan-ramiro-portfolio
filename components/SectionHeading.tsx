type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <p className="font-mono text-sm text-accent">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}