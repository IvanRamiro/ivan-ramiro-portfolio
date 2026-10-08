import type { CSSProperties } from "react";

export function cssVar(name: `--${string}`, value: string): CSSProperties {
  return { [name]: value } as CSSProperties;
}