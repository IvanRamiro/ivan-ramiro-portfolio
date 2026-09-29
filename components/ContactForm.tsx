"use client";

import { useActionState } from "react";
import { sendInquiry, type FormState } from "@/app/action";

const initialState: FormState = { ok: false, message: "" };

const field =
  "mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {/* Honeypot: hidden from humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" required placeholder="Your name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={field} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">What do you need built?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project..."
          className={field}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send inquiry"}
      </button>

      {state.message && (
        <p className={state.ok ? "text-emerald-400" : "text-red-400"} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}