import { cn } from "@/lib/css";

const DOT_COLORS = ["bg-red-500/80", "bg-yellow-500/80", "bg-green-500/80"];

const SIZES = {
  sm: "size-2",
  md: "size-3",
} as const;

type WindowDotsProps = {
  size?: keyof typeof SIZES;
};

/** The three macOS-style traffic lights used on every window and browser mock-up. */
export default function WindowDots({ size = "md" }: WindowDotsProps) {
  return (
    <>
      {DOT_COLORS.map((color) => (
        <span key={color} aria-hidden="true" className={cn("rounded-full", SIZES[size], color)} />
      ))}
    </>
  );
}
