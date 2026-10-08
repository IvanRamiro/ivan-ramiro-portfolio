export const MAIN_CONTENT_ID = "main-content";

/** Hidden until focused, so keyboard and screen-reader users can jump past the header. */
export default function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only z-[70] rounded-lg bg-accent px-4 py-2 font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
