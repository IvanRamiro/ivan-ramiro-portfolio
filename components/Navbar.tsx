"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BRAND = "Ivan Ramiro";
const MOBILE_MENU_ID = "mobile-menu";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // Let keyboard users close the menu with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href="/" onClick={closeMenu} className="font-mono text-lg font-bold">
          <span className="text-accent">{"<"}</span>
          {BRAND}
          <span className="text-accent">{" />"}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-muted transition hover:text-foreground">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="rounded-lg border border-accent/60 px-4 py-2 text-accent transition hover:bg-accent hover:text-background"
            >
              Hire me
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul id={MOBILE_MENU_ID} className="space-y-1 border-t border-border px-6 py-4 md:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block rounded-md px-2 py-2 text-muted transition hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-2 block rounded-lg border border-accent/60 px-4 py-2 text-center text-accent transition hover:bg-accent hover:text-background"
            >
              Hire me
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}