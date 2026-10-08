/** Everything the visitor can read after submitting the form. */
export const CONTACT_MESSAGES = {
  success: "Thanks! I'll get back to you soon.",
  genericError: "Something went wrong. Please try again.",
  rateLimited: "You've sent several messages recently. Please try again later.",
} as const;
