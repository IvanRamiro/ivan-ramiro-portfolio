import { CONTAINER_CLASS } from "@/components/ui/Section";
import { socials } from "@/data/socials";
import { cn } from "@/lib/css";
import { EXTERNAL_LINK_PROPS, SITE } from "@/lib/site";
import FooterYear from "./FooterYear";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className={cn(
          CONTAINER_CLASS,
          "flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 font-mono text-label normal-case tracking-normal text-ink-muted"
        )}
      >
        <p>
          © <FooterYear /> {SITE.name} · Built with Next.js
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-6">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && EXTERNAL_LINK_PROPS)}
                  className="flex items-center gap-2 transition-colors duration-(--dur-fast) hover:text-copper"
                >
                  <Icon aria-hidden="true" className="text-base" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
