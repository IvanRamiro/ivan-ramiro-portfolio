// app/action.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  ok: boolean;
  message: string;
};

export async function sendInquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "");

  // Bots fill hidden fields; pretend success and do nothing
  if (honeypot) return { ok: true, message: "Thanks! I'll get back to you soon." };

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length > 3000) {
    return { ok: false, message: "Message is too long." };
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true, message: "Thanks! I'll get back to you soon." };
}