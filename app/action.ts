"use server";

import { Resend } from "resend";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";
import {
  contactSchema,
  HONEYPOT_FIELD,
  SUCCESS_MESSAGE,
  type ContactValues,
} from "@/lib/contact";
import { getClientHash, isRateLimited } from "@/lib/rate-limit";

export type FormState = {
  ok: boolean;
  message: string;
  values?: ContactValues;
};

const GENERIC_ERROR = "Something went wrong. Please try again.";
const RATE_LIMIT_ERROR = "You've sent several messages recently. Please try again later.";

function readField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

async function saveInquiry(values: ContactValues, ipHash: string | null): Promise<boolean> {
  try {
    await getDb().insert(inquiries).values({ ...values, ipHash });
    return true;
  } catch (error) {
    console.error("Failed to save inquiry:", error);
    return false;
  }
}

async function emailInquiry(values: ContactValues): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;

  if (!apiKey || !recipient) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
    return false;
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
    return true;
  } catch (error) {
    console.error("Failed to email inquiry:", error);
    return false;
  }
}

export async function sendInquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Bots fill hidden fields. Pretend it worked and do nothing.
  if (readField(formData, HONEYPOT_FIELD)) {
    return { ok: true, message: SUCCESS_MESSAGE };
  }

  const values: ContactValues = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  };

  const validation = contactSchema.safeParse(values);
  if (!validation.success) {
    return { ok: false, message: validation.error.issues[0].message, values };
  }

  const ipHash = await getClientHash();
  if (ipHash && (await isRateLimited(ipHash))) {
    return { ok: false, message: RATE_LIMIT_ERROR, values };
  }

  const [saved, emailed] = await Promise.all([
    saveInquiry(validation.data, ipHash),
    emailInquiry(validation.data),
  ]);

  if (!saved && !emailed) {
    return { ok: false, message: GENERIC_ERROR, values };
  }

  return { ok: true, message: SUCCESS_MESSAGE };
}