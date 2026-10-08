export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** One-off check for use inside effects and GSAP callbacks (browser only). */
export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
