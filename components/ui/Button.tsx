import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/css";

const VARIANTS = {
  primary: "bg-copper text-copper-ink hover:bg-copper-strong",
  secondary: "border border-line-strong text-ink hover:border-copper hover:text-copper",
  ghost: "text-copper hover:text-copper-strong",
} as const;

const SIZES = {
  md: "h-11 text-sm",
  lg: "h-12 text-base",
} as const;

const PADDING = {
  md: "px-5",
  lg: "px-6",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

const BASE_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,background-color,color,border-color] duration-(--dur-press) ease-out active:scale-[0.97] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50";

export function buttonClasses(
  variant: ButtonVariant,
  className?: string,
  size: ButtonSize = "md"
): string {
  const padding = variant === "ghost" ? undefined : PADDING[size];
  return cn(BASE_CLASS, SIZES[size], padding, VARIANTS[variant], className);
}

type SharedProps = { variant?: ButtonVariant; size?: ButtonSize; className?: string };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = buttonClasses(variant, className, size);

  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
