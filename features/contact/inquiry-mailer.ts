import { Resend } from "resend";
import { optionalEnv } from "@/lib/env";
import type { ContactValues } from "./schema";

/** Resend only allows this sender until a custom domain is verified. */
const SENDER = "Portfolio <onboarding@resend.dev>";

/** Header values must be a single line, whatever the visitor typed. */
function toHeaderSafe(text: string): string {
  return text.replace(/[\r\n]+/g, " ");
}

/**
 * Emails the inquiry to the site owner.
 * Returns `false` (after logging) instead of throwing so a mail outage never loses a saved inquiry.
 */
export async function emailInquiry(values: ContactValues): Promise<boolean> {
  const apiKey = optionalEnv("RESEND_API_KEY");
  const recipient = optionalEnv("CONTACT_EMAIL");

  if (!apiKey || !recipient) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
    return false;
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: SENDER,
      to: recipient,
      replyTo: values.email,
      subject: `New inquiry from ${toHeaderSafe(values.name)}`,
      text: `From: ${values.name} (${values.email})\n\n${values.message}`,
    });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Failed to email inquiry:", error);
    return false;
  }
}
