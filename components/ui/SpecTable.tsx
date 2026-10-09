import { cn } from "@/lib/css";

export type SpecRow = {
  label: string;
  value: string;
};

const COLUMNS = {
  1: "grid-cols-1",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

type SpecTableProps = {
  rows: SpecRow[];
  columns?: keyof typeof COLUMNS;
  className?: string;
};

export default function SpecTable({ rows, columns = 1, className }: SpecTableProps) {
  return (
    <dl className={cn("grid gap-x-8 gap-y-5", COLUMNS[columns], className)}>
      {rows.map(({ label, value }) => (
        <div key={label} className="border-t border-line pt-3">
          <dt className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint">
            {label}
          </dt>
          <dd className="mt-2 font-mono text-data text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
