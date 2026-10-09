"use client";

import { useActionState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/css";
import { sendInquiry } from "../actions";
import { INITIAL_CONTACT_FORM_STATE } from "../form-state";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "../schema";
import FormField from "./FormField";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendInquiry, INITIAL_CONTACT_FORM_STATE);

  return (
    <form action={formAction} className="space-y-5">
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-px w-px opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          name="name"
          label="Name"
          placeholder="Your name"
          maxLength={CONTACT_LIMITS.name}
          defaultValue={state.values?.name}
          autoComplete="name"
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          maxLength={CONTACT_LIMITS.email}
          defaultValue={state.values?.email}
          autoComplete="email"
        />
      </div>
      <FormField
        name="message"
        label="What do you need built?"
        placeholder="Tell me about your project..."
        maxLength={CONTACT_LIMITS.message}
        defaultValue={state.values?.message}
        multiline
      />

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending}>
          {isPending ? "Sending…" : "Send inquiry"}
        </Button>

        {state.message && (
          <p
            key={state.message}
            role={state.ok ? "status" : "alert"}
            className={cn("status-message text-sm", state.ok ? "text-ok" : "text-error")}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
