import { z } from "zod";

/** Hidden form field that only bots fill in. */
export const HONEYPOT_FIELD = "bot_trap";

/** Shared by the form (`maxLength`), the validation, and the database columns. */
export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  message: 3000,
} as const;

const REQUIRED = "Please fill in all fields.";
const TOO_LONG = "One of your entries is too long.";

export const contactSchema = z.object({
  name: z.string().min(1, REQUIRED).max(CONTACT_LIMITS.name, TOO_LONG),
  email: z.email("Please enter a valid email address.").max(CONTACT_LIMITS.email, TOO_LONG),
  message: z.string().min(1, REQUIRED).max(CONTACT_LIMITS.message, TOO_LONG),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const CONTACT_FIELDS = Object.keys(contactSchema.shape) as (keyof ContactValues)[];
