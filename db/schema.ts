import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
// Relative on purpose: drizzle-kit loads this file outside Next and does not know the "@/" alias
import { CONTACT_LIMITS } from "../features/contact/schema";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: CONTACT_LIMITS.name }).notNull(),
  email: varchar("email", { length: CONTACT_LIMITS.email }).notNull(),
  message: text("message").notNull(),
  /** Salted SHA-256 of the sender's IP (64 hex chars); never the address itself */
  ipHash: varchar("ip_hash", { length: 64 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
