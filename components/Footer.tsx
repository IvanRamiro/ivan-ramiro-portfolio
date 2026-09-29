export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Ivan Ramiro. Built with Next.js.</p>
        <div className="flex gap-6">
          <a href="https://github.com/IvanRamiro" target="_blank" rel="noreferrer" className="transition hover:text-accent">GitHub</a>
          <a href="https://linkedin.com/in/john-ivan-ramiro-782181312" target="_blank" rel="noreferrer" className="transition hover:text-accent">LinkedIn</a>
          <a href="mailto:ivanramiro0127@gmail.com" className="transition hover:text-accent">Email</a>
        </div>
      </div>
    </footer>
  );
}