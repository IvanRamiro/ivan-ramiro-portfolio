import { technologies, type Technology } from "@/data/technologies";
import { cssVar } from "@/lib/css";

// Two copies make the loop seamless: the animation slides by exactly one copy (50%).
const COPIES = [0, 1];

function TechItem({ name, Icon, color }: Technology) {
  return (
    <li
      style={cssVar("--brand", color)}
      className="group flex items-center gap-2 whitespace-nowrap pr-12"
    >
      <Icon
        style={{ color }}
        className="text-2xl transition duration-300 group-hover:scale-125 group-hover:[filter:drop-shadow(0_0_6px_var(--brand))_drop-shadow(0_0_14px_var(--brand))]"
      />
      <span className="font-mono text-sm text-muted transition group-hover:text-foreground">
        {name}
      </span>
    </li>
  );
}

/** Infinite horizontal strip of technology logos. Pauses on hover (see `.marquee` in globals.css). */
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="marquee overflow-hidden border-y border-border bg-card/40 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="animate-marquee flex w-max">
        {COPIES.map((copy) => (
          <ul
            key={copy}
            className="flex"
            // The second copy exists only for the loop, so screen readers skip it
            aria-hidden={copy === 1}
          >
            {technologies.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
