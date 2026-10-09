export const MAIN_CONTENT_ID = "main-content";

/** Hidden until focused, so keyboard and screen-reader users can jump past the header. */
export default function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only z-[70] rounded-full bg-copper px-4 py-2 font-semibold text-copper-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Skip to content
    </a>
  );
}
