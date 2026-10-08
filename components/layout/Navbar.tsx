"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { hireMeLink, navLinks } from "@/data/navigation";
import { cn } from "@/lib/css";
import { SITE } from "@/lib/site";

const MOBILE_MENU_ID = "mobile-menu";

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

function Brand({ onClick }: { onClick: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="font-mono text-lg font-bold">
      <span className="text-accent">{"<"}</span>
      {SITE.name}
      <span className="text-accent">{" />"}</span>
    </Link>
  );
}

type NavListProps = {
  /** Mobile links are stacked and close the menu when followed */
  layout: "desktop" | "mobile";
  onNavigate: () => void;
};

function NavList({ layout, onNavigate }: NavListProps) {
  const isMobile = layout === "mobile";

  return (
    <ul
      id={isMobile ? MOBILE_MENU_ID : undefined}
      className={
        isMobile
          ? "space-y-1 border-t border-border px-6 py-4 md:hidden"
          : "hidden items-center gap-8 text-sm md:flex"
      }
    >
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={isMobile ? onNavigate : undefined}
            className={cn(
              "text-muted transition hover:text-foreground",
              isMobile && "block rounded-md px-2 py-2"
            )}
          >
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={hireMeLink.href}
          onClick={isMobile ? onNavigate : undefined}
          className={buttonClasses("outline", isMobile ? "mt-2 block text-center" : undefined)}
        >
          {hireMeLink.label}
        </Link>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Let keyboard users close the menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav
        aria-label="Main"
        className={cn(CONTAINER_CLASS, "flex items-center justify-between py-4")}
      >
        <Brand onClick={closeMenu} />

        <NavList layout="desktop" onNavigate={closeMenu} />

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="-mr-2 p-2 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </nav>

      {isMenuOpen && <NavList layout="mobile" onNavigate={closeMenu} />}
    </header>
  );
}
