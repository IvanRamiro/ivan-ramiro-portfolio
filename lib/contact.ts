// lib/contact.ts

export const HONEYPOT_FIELD = "bot_trap";

export const LIMITS = {
  name: 100,
  email: 254,
  message: 3000,
} as const;

export const SUCCESS_MESSAGE = "Thanks! I'll get back to you soon.";