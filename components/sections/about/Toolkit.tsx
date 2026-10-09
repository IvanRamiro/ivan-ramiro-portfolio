import Eyebrow from "@/components/ui/Eyebrow";
import { toolkit, type ToolkitItem } from "@/data/toolkit";
import { cssVar } from "@/lib/css";

function ToolkitChip({ name, Icon, color }: ToolkitItem) {
  return (
    <li
      style={color ? cssVar("--brand", color) : undefined}
      className="group inline-flex items-center gap-2 rounded-chip border border-line bg-surface-2 px-3 py-1.5 font-mono text-label normal-case tracking-normal text-ink-muted transition-colors duration-(--dur-fast) hover:border-line-strong hover:text-ink"
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className="text-base text-ink-faint transition-colors duration-(--dur-fast) group-hover:text-(--brand)"
        />
      )}
      {name}
    </li>
  );
}

export default function Toolkit() {
  return (
    <div>
      <Eyebrow>Toolkit</Eyebrow>
      <dl className="mt-6 divide-y divide-line">
        {toolkit.map(({ title, items }) => (
          <div key={title} className="grid gap-3 py-5 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-6">
            <dt className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint md:col-span-3 md:pt-2">
              {title}
            </dt>
            <dd className="md:col-span-9">
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <ToolkitChip key={item.name} {...item} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
