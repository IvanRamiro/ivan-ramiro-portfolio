import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const INPUT_CLASS =
  "mt-2 w-full rounded-chip border border-line bg-surface-2 px-4 py-3 text-ink outline-none transition-[border-color,background-color] duration-(--dur-fast) placeholder:text-ink-faint hover:border-line-strong focus:border-copper focus:bg-surface-1 focus-visible:outline-none";

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

export default function FormField(props: FormFieldProps) {
  const { name, label, maxLength, placeholder, defaultValue } = props;
  const shared = { id: name, name, required: true, maxLength, placeholder, defaultValue };

  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-label uppercase tracking-[0.12em] text-ink-muted"
      >
        {label}
      </label>
      {props.multiline ? (
        <textarea {...shared} rows={props.rows ?? 6} className={INPUT_CLASS} />
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
