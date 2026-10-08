import type { ContactValues } from "./schema";

/** Returned by the server action and read by the form via `useActionState`. */
export type ContactFormState = {
  ok: boolean;
  message: string;
  /** What the visitor typed, echoed back so a failed submission doesn't clear the form */
  values?: ContactValues;
};

export const INITIAL_CONTACT_FORM_STATE: ContactFormState = { ok: false, message: "" };
