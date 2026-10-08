/**
 * Single place that reads environment variables, so the rest of the code never
 * touches `process.env` directly and every variable is documented here.
 *
 * Only `NEXT_PUBLIC_*` variables are safe to read in client components.
 */

export const isProduction = process.env.NODE_ENV === "production";

/** Reads an optional variable, returning `undefined` when it is unset or empty. */
export function optionalEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

/** Reads a variable that the application cannot run without. */
export function requireEnv(name: string): string {
  const value = optionalEnv(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

/** Public URL of the deployed site, without a trailing slash. */
export const PUBLIC_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
