import { createHash } from "crypto";
import { headers } from "next/headers";
import { isProduction, optionalEnv } from "@/lib/env";
import { countRecentInquiries } from "./inquiry-repository";

const MAX_INQUIRIES_PER_WINDOW = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

async function getClientIp(): Promise<string | null> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded ?? headerList.get("x-real-ip");

  // Local dev has no proxy headers; pretend to be one visitor so the limit can be tested
  if (!ip && !isProduction) return "127.0.0.1";
  return ip ?? null;
}

/**
 * A salted hash of the visitor's IP: enough to recognise repeat senders
 * without ever storing the address itself. `null` disables rate limiting.
 */
export async function getClientHash(): Promise<string | null> {
  const salt = optionalEnv("IP_HASH_SALT");
  if (!salt) {
    console.error("Missing IP_HASH_SALT environment variable. Rate limiting is off.");
    return null;
  }

  const ip = await getClientIp();
  if (!ip) return null;

  return createHash("sha256").update(`${salt}${ip}`).digest("hex");
}

/** Fails open: a database error must not block a real visitor from writing. */
export async function isRateLimited(ipHash: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - WINDOW_MS);
    return (await countRecentInquiries(ipHash, since)) >= MAX_INQUIRIES_PER_WINDOW;
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return false;
  }
}
