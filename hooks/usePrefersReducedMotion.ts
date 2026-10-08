import { useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/lib/motion";

function subscribe(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

// Assume motion is allowed on the server; the client corrects this before any animation runs
function getServerSnapshot() {
  return false;
}

/** Reactive version of the OS "reduce motion" setting, for components that drive animation from React state. */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
