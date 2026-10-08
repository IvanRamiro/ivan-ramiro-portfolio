import GlassCard from "@/components/ui/GlassCard";
import type { SocialLink } from "@/data/socials";
import { cssVar } from "@/lib/css";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";

/** A full-width glass link showing the network, the handle, and an arrow that nudges on hover. */
export default function SocialCard({ label, handle, href, Icon, color, external }: SocialLink) {
  return (
    <GlassCard>
      <a
        href={href}
        {...(external && EXTERNAL_LINK_PROPS)}
        style={cssVar("--brand", color)}
        className="flex items-center gap-4 p-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background/70 text-xl text-[var(--brand)] transition duration-300 group-hover:scale-110">
          <Icon aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold">{label}</span>
          <span className="block truncate font-mono text-xs text-muted">{handle}</span>
        </span>
        <span
          aria-hidden="true"
          className="text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </a>
    </GlassCard>
  );
}
