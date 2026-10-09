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

function readPublicSiteUrl(): string {
  const configured = optionalEnv("NEXT_PUBLIC_SITE_URL");
  if (configured) return configured.replace(/\/$/, "");

  const vercelProductionHost = optionalEnv("VERCEL_PROJECT_PRODUCTION_URL");
  if (vercelProductionHost) return `https://${vercelProductionHost}`;

  if (isProduction && process.env.VERCEL_ENV === "production") {
    throw new Error(
      "Set NEXT_PUBLIC_SITE_URL (or expose Vercel system environment variables) for production deployments."
    );
  }
  return "http://localhost:3000";
}

/** Public URL of the deployed site, without a trailing slash. */
export const PUBLIC_SITE_URL = readPublicSiteUrl();
