"use client";

import { useActionState } from "react";
import { sendInquiry, type FormState } from "@/app/action";
import { HONEYPOT_FIELD, LIMITS } from "@/lib/contact";
import Magnetic from "./Magnetic";

const initialState: FormState = { ok: false, message: "" };

const inputStyles =
  "mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none backdrop-blur transition placeholder:text-muted/60 hover:border-white/20 focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30";

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  maxLength: number;
  defaultValue?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  name,
  label,
  placeholder,
  maxLength,
  defaultValue,
  type = "text",
  autoComplete,
  multiline = false,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required
          maxLength={maxLength}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={inputStyles}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          maxLength={maxLength}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={inputStyles}
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendInquiry, initialState);

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

      <Field
        name="name"
        label="Name"
        placeholder="Your name"
        maxLength={LIMITS.name}
        defaultValue={state.values?.name}
        autoComplete="name"
      />
      <Field
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        maxLength={LIMITS.email}
        defaultValue={state.values?.email}
        autoComplete="email"
      />
      <Field
        name="message"
        label="What do you need built?"
        placeholder="Tell me about your project..."
        maxLength={LIMITS.message}
        defaultValue={state.values?.message}
        multiline
      />

      <Magnetic>
        <button
          type="submit"
          disabled={isPending}
          className="group relative overflow-hidden rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:shadow-[0_0_28px_rgb(56_189_248/0.5)] disabled:opacity-50"
        >
          <span className="relative">{isPending ? "Sending..." : "Send inquiry"}</span>
          {/* Light sweep across the button on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[400%]"
          />
        </button>
      </Magnetic>

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