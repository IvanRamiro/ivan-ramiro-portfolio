import type { ReactNode } from "react";
import { cn } from "@/lib/css";

/** Horizontal page container shared by the header, footer, and every section. */
export const CONTAINER_CLASS = "mx-auto max-w-6xl px-6";

type SectionProps = {
  /** Anchor target for the navigation (`/#about`, ...) */
  id: string;
  children: ReactNode;
  className?: string;
};

/** A full-width home page section. `scroll-mt-20` keeps anchors clear of the sticky header. */
export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn(CONTAINER_CLASS, "scroll-mt-20 py-24", className)}>
      {children}
    </section>
  );
}
