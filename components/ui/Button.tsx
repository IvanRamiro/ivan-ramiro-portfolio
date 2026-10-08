import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/css";

const VARIANTS = {
  /** Solid accent, fades slightly on hover */
  primary: "bg-accent px-6 py-3 font-semibold text-background hover:opacity-90",
  /** Solid accent that lights up on hover; for the main call to action of a section */
  glow: "bg-accent px-6 py-3 font-semibold text-background hover:shadow-[0_0_28px_rgb(56_189_248/0.5)]",
  /** Thin border that turns accent on hover */
  secondary: "border border-border px-6 py-3 hover:border-accent hover:text-accent",
  /** Accent outline that fills in on hover; used for the "Hire me" pill */
  outline: "border border-accent/60 px-4 py-2 text-accent hover:bg-accent hover:text-background",
  /** Frosted pill for low-emphasis actions */
  glass:
    "border border-white/15 bg-white/5 px-5 py-2 text-sm text-foreground backdrop-blur hover:border-accent hover:text-accent",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

/**
 * The classes alone, for elements that must stay a `next/link` or carry extra markup.
 * Display is left to the caller (`block`, `inline-block`) so flex and inline contexts both work.
 */
export function buttonClasses(variant: ButtonVariant, className?: string): string {
  return cn("rounded-lg transition", VARIANTS[variant], className);
}

type SharedProps = { variant?: ButtonVariant; className?: string };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * Renders an `<a>` when given `href`, otherwise a `<button>`.
 * Plain anchors are used on purpose: these point at same-page sections and
 * downloads, which `next/link` would try to handle as client navigations.
 */
export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = buttonClasses(variant, className);

  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
