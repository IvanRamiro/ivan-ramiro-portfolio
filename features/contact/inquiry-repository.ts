import { and, count, eq, gt } from "drizzle-orm";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";
import type { ContactValues } from "./schema";

export async function saveInquiry(values: ContactValues, ipHash: string | null): Promise<void> {
  await getDb().insert(inquiries).values({ ...values, ipHash });
}

export async function countRecentInquiries(ipHash: string, since: Date): Promise<number> {
  const [{ total }] = await getDb()
    .select({ total: count() })
    .from(inquiries)
    .where(and(eq(inquiries.ipHash, ipHash), gt(inquiries.createdAt, since)));

  return total;
}
