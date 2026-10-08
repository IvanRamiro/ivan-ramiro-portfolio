import type { CSSProperties } from "react";

type ClassValue = string | false | null | undefined;

/** Joins class names, skipping falsy values. Use for conditional Tailwind classes. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Builds an inline style that sets a single CSS custom property, e.g. `cssVar("--brand", "#fff")`. */
export function cssVar(name: `--${string}`, value: string): CSSProperties {
  return { [name]: value } as CSSProperties;
}
