import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const INPUT_CLASS =
  "mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none backdrop-blur transition placeholder:text-muted/60 hover:border-white/20 focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30";

type SharedProps = {
  name: string;
  label: string;
  maxLength: number;
  placeholder: string;
  defaultValue?: string;
};

type InputFieldProps = SharedProps & {
  multiline?: false;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
};

type TextareaFieldProps = SharedProps & {
  multiline: true;
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
};

export type FormFieldProps = InputFieldProps | TextareaFieldProps;

/** A labelled, required input or textarea. The `name` doubles as the element id. */
export default function FormField(props: FormFieldProps) {
  const { name, label, maxLength, placeholder, defaultValue } = props;
  const shared = { id: name, name, required: true, maxLength, placeholder, defaultValue };

  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {props.multiline ? (
        <textarea {...shared} rows={props.rows ?? 5} className={INPUT_CLASS} />
      ) : (
        <input
          {...shared}
          type={props.type ?? "text"}
          autoComplete={props.autoComplete}
          className={INPUT_CLASS}
        />
      )}
    </div>
  );
}
