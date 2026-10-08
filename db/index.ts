import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { requireEnv } from "@/lib/env";
import * as schema from "./schema";

/**
 * Creates a Drizzle client over Neon's HTTP driver. The driver is stateless
 * (one request per query), so a new instance per call costs nothing and
 * avoids holding a connection across serverless invocations.
 */
export function getDb() {
  return drizzle({ client: neon(requireEnv("DATABASE_URL")), schema });
}
