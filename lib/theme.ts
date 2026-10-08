/**
 * Colour values for code that cannot read CSS custom properties: the generated
 * Open Graph images and inline brand tints set from JavaScript.
 *
 * These mirror the `@theme` tokens in `app/globals.css`. Change both together.
 */
/** Appends an alpha channel to a 6-digit hex colour, e.g. `withAlpha("#38bdf8", 0.25)`. */
export function withAlpha(hexColor: string, alpha: number): string {
  const channel = Math.round(Math.min(Math.max(alpha, 0), 1) * 255);
  return `${hexColor}${channel.toString(16).padStart(2, "0")}`;
}

export const COLORS = {
  background: "#0b0f19",
  foreground: "#e6e9f0",
  muted: "#94a3b8",
  card: "#111827",
  accent: "#38bdf8",
  accentSecondary: "#a78bfa",
} as const;
