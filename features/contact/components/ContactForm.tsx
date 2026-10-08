"use client";

import { useActionState } from "react";
import Magnetic from "@/components/motion/Magnetic";
import { buttonClasses } from "@/components/ui/Button";
import { sendInquiry } from "../actions";
import { INITIAL_CONTACT_FORM_STATE } from "../form-state";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "../schema";
import FormField from "./FormField";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Magnetic>
      <button
        type="submit"
        disabled={isPending}
        className={buttonClasses("glow", "group relative overflow-hidden disabled:opacity-50")}
      >
        <span className="relative">{isPending ? "Sending..." : "Send inquiry"}</span>
        {/* Light sweep across the button on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[400%]"
        />
      </button>
    </Magnetic>
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendInquiry, INITIAL_CONTACT_FORM_STATE);

  return (
    <form action={formAction} className="space-y-4">
      {/* Honeypot: invisible to humans, bots tend to fill it in */}
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
      <FormField
        name="message"
        label="What do you need built?"
        placeholder="Tell me about your project..."
        maxLength={CONTACT_LIMITS.message}
        defaultValue={state.values?.message}
        multiline
      />

      <SubmitButton isPending={isPending} />

      {state.message && (
        <p
          role={state.ok ? "status" : "alert"}
          className={state.ok ? "text-emerald-400" : "text-red-400"}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
