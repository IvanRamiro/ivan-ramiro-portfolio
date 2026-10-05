import { z } from "zod";

export const HONEYPOT_FIELD = "bot_trap";

export const LIMITS = {
  name: 100,
  email: 254,
  message: 3000,
} as const;

export const SUCCESS_MESSAGE = "Thanks! I'll get back to you soon.";

const REQUIRED = "Please fill in all fields.";
const TOO_LONG = "One of your entries is too long.";

export const contactSchema = z.object({
  name: z.string().min(1, REQUIRED).max(LIMITS.name, TOO_LONG),
  email: z.email("Please enter a valid email address.").max(LIMITS.email, TOO_LONG),
  message: z.string().min(1, REQUIRED).max(LIMITS.message, TOO_LONG),
});

export type ContactValues = z.infer<typeof contactSchema>;