import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { LIMITS } from "../lib/contact";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: LIMITS.name }).notNull(),
  email: varchar("email", { length: LIMITS.email }).notNull(),
  message: text("message").notNull(),
  ipHash: varchar("ip_hash", { length: 64 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});