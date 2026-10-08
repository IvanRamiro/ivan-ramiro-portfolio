"use server";

import type { ContactFormState } from "./form-state";
import { emailInquiry } from "./inquiry-mailer";
import { saveInquiry } from "./inquiry-repository";
import { CONTACT_MESSAGES } from "./messages";
import { getClientHash, isRateLimited } from "./rate-limit";
import { CONTACT_FIELDS, contactSchema, HONEYPOT_FIELD, type ContactValues } from "./schema";

function readField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function readContactValues(formData: FormData): ContactValues {
  return Object.fromEntries(
    CONTACT_FIELDS.map((field) => [field, readField(formData, field)])
  ) as ContactValues;
}

/** Logs and reports failure instead of throwing, so one failing side channel never loses the inquiry. */
async function trySaveInquiry(values: ContactValues, ipHash: string | null): Promise<boolean> {
  try {
    await saveInquiry(values, ipHash);
    return true;
  } catch (error) {
    console.error("Failed to save inquiry:", error);
    return false;
  }
}

export async function sendInquiry(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Bots fill hidden fields. Pretend it worked and do nothing.
  if (readField(formData, HONEYPOT_FIELD)) {
    return { ok: true, message: CONTACT_MESSAGES.success };
  }

  const values = readContactValues(formData);

  const validation = contactSchema.safeParse(values);
  if (!validation.success) {
    return { ok: false, message: validation.error.issues[0].message, values };
  }

  const ipHash = await getClientHash();
  if (ipHash && (await isRateLimited(ipHash))) {
    return { ok: false, message: CONTACT_MESSAGES.rateLimited, values };
  }

  // Save and email at the same time; the visitor only sees an error if both fail
  const [saved, emailed] = await Promise.all([
    trySaveInquiry(validation.data, ipHash),
    emailInquiry(validation.data),
  ]);

  if (!saved && !emailed) {
    return { ok: false, message: CONTACT_MESSAGES.genericError, values };
  }

  return { ok: true, message: CONTACT_MESSAGES.success };
}
