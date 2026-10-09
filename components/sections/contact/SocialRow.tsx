import type { SocialLink } from "@/data/socials";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";

export default function SocialRow({ label, handle, href, Icon, external }: SocialLink) {
  return (
    <a
      href={href}
      {...(external && EXTERNAL_LINK_PROPS)}
      className="group flex items-center gap-4 border-t border-copper-ink/15 py-4 transition-colors duration-(--dur-fast) hover:text-copper-ink"
    >
      <Icon aria-hidden="true" className="text-xl" />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block truncate font-mono text-data text-copper-muted">{handle}</span>
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-(--dur-fast) ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
