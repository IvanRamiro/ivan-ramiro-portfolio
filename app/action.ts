"use server";

import { Resend } from "resend";
import { HONEYPOT_FIELD, LIMITS, SUCCESS_MESSAGE } from "@/lib/contact";

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

export type FormState = {
  ok: boolean;
  message: string;
  values?: FormValues; // sent back on errors so the form can refill itself
};

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function readField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function validate({ name, email, message }: FormValues): string | null {
  if (!name || !email || !message) return "Please fill in all fields.";
  if (!EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return "One of your entries is too long.";
  }
  return null;
}

export async function sendInquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Bots fill hidden fields. Pretend it worked and do nothing.
  if (readField(formData, HONEYPOT_FIELD)) {
    return { ok: true, message: SUCCESS_MESSAGE };
  }

  const values: FormValues = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  };

  const validationError = validate(values);
  if (validationError) {
    return { ok: false, message: validationError, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;

  if (!apiKey || !recipient) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
    return { ok: false, message: "Something went wrong. Please try again.", values };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: recipient,
      replyTo: values.email,
      subject: `New inquiry from ${values.name.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${values.name} (${values.email})\n\n${values.message}`,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Failed to send inquiry:", error);
    return { ok: false, message: "Something went wrong. Please try again.", values };
  }

  return { ok: true, message: SUCCESS_MESSAGE };
}