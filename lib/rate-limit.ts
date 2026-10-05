import { createHash } from "crypto";
import { and, count, eq, gt } from "drizzle-orm";
import { headers } from "next/headers";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";

const MAX_INQUIRIES = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

async function getClientIp(): Promise<string | null> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded ?? headerList.get("x-real-ip");

  if (!ip && process.env.NODE_ENV !== "production") return "127.0.0.1";
  return ip ?? null;
}

export async function getClientHash(): Promise<string | null> {
  const salt = process.env.IP_HASH_SALT;
  if (!salt) {
    console.error("Missing IP_HASH_SALT environment variable. Rate limiting is off.");
    return null;
  }

  const ip = await getClientIp();
  if (!ip) return null;

  return createHash("sha256").update(`${salt}${ip}`).digest("hex");
}

export async function isRateLimited(ipHash: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - WINDOW_MS);
    const [{ total }] = await getDb()
      .select({ total: count() })
      .from(inquiries)
      .where(and(eq(inquiries.ipHash, ipHash), gt(inquiries.createdAt, since)));

    return total >= MAX_INQUIRIES;
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return false;
  }
}