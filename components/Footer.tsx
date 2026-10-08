import { socials } from "@/data/socials";
import { cssVar } from "@/lib/css";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js.
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-6">
            {socials.map(({ label, href, Icon, color, linkProps }) => (
              <li key={label}>
                <a
                  href={href}
                  {...linkProps}
                  style={cssVar("--brand", color)}
                  className="group flex items-center gap-2 transition hover:text-[var(--brand)]"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-lg transition group-hover:scale-110"
                  />
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