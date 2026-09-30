const NAME = "Ivan Ramiro";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/IvanRamiro", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/john-ivan-ramiro-782181312",
    external: true,
  },
  { label: "Email", href: "mailto:ivanramiro0127@gmail.com", external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {NAME}. Built with Next.js.
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-6">
            {socialLinks.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition hover:text-accent"
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
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