"use client";

import { type FieldError, type FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  error?: FieldError;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}

export function FormField({ label, name, error, required, children, hint }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text-primary mb-1.5">
        {label}
        {required && <span className="text-red ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1 text-xs text-text-muted">{hint}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-error" id={`${name}-error`} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ hasError, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full h-11 px-4 rounded-[var(--radius-md)] border text-sm text-text-primary bg-surface-elevated transition-colors",
        "placeholder:text-text-muted",
        "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        hasError
          ? "border-error focus:ring-error/30 focus:border-error"
          : "border-border hover:border-border-hover",
        className
      )}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export function Textarea({ hasError, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full px-4 py-3 rounded-[var(--radius-md)] border text-sm text-text-primary bg-surface-elevated transition-colors resize-y min-h-[100px]",
        "placeholder:text-text-muted",
        "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        hasError
          ? "border-error focus:ring-error/30 focus:border-error"
          : "border-border hover:border-border-hover",
        className
      )}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({ hasError, options, placeholder, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full h-11 px-4 rounded-[var(--radius-md)] border text-sm text-text-primary bg-surface-elevated transition-colors appearance-none",
        "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        hasError
          ? "border-error focus:ring-error/30 focus:border-error"
          : "border-border hover:border-border-hover",
        className
      )}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

interface CheckboxFieldProps {
  label: string | React.ReactNode;
  name: string;
  error?: FieldError;
  required?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export function CheckboxField({ label, name, error, required, checked, onChange, onBlur }: CheckboxFieldProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className={cn(
            "mt-0.5 h-4 w-4 rounded border text-accent shrink-0",
            "focus:ring-2 focus:ring-accent/30",
            error ? "border-error" : "border-border"
          )}
          aria-describedby={error ? `${name}-error` : undefined}
          aria-required={required}
        />
        <span className="text-sm text-text-secondary leading-snug">
          {label}
          {required && <span className="text-red ml-0.5" aria-hidden="true">*</span>}
        </span>
      </label>
      {error && (
        <p className="mt-1 text-xs text-error ml-7" id={`${name}-error`} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

interface MultiCheckboxProps {
  label: string;
  name: string;
  error?: FieldError;
  required?: boolean;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (values: string[]) => void;
}

export function MultiCheckbox({ label, name, error, required, options, value, onChange }: MultiCheckboxProps) {
  const toggle = (optValue: string) => {
    if (value.includes(optValue)) {
      onChange(value.filter((v) => v !== optValue));
    } else {
      onChange([...value, optValue]);
    }
  };

  return (
    <fieldset>
      <legend className="block text-sm font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-red ml-0.5" aria-hidden="true">*</span>}
      </legend>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-surface-secondary transition-colors">
            <input
              type="checkbox"
              checked={value.includes(opt.value)}
              onChange={() => toggle(opt.value)}
              className="h-4 w-4 rounded border-border text-accent focus:ring-2 focus:ring-accent/30 shrink-0"
            />
            <span className="text-sm text-text-secondary">{opt.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-xs text-error" id={`${name}-error`} role="alert">
          {error.message}
        </p>
      )}
    </fieldset>
  );
}

interface FormStatusProps {
  type: "success" | "error";
  title: string;
  message: string;
  referenceNumber?: string;
}

export function FormStatus({ type, title, message, referenceNumber }: FormStatusProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 border",
        type === "success"
          ? "bg-success-bg border-success/20"
          : "bg-error-bg border-error/20"
      )}
      role="status"
      aria-live="polite"
    >
      <h3 className={cn(
        "font-semibold text-lg",
        type === "success" ? "text-success" : "text-error"
      )}>
        {title}
      </h3>
      <p className="text-sm text-text-secondary mt-1">{message}</p>
      {referenceNumber && (
        <p className="text-sm mt-3">
          <span className="text-text-muted">Reference Number: </span>
          <strong className="text-text-primary font-mono">{referenceNumber}</strong>
        </p>
      )}
    </div>
  );
}

interface FormErrorSummaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}

export function FormErrorSummary({ errors }: FormErrorSummaryProps) {
  const errorEntries = Object.entries(errors).filter(
    ([key, err]) => key !== "root" && err && typeof err === "object" && "message" in err,
  );
  if (errorEntries.length === 0) return null;

  return (
    <div
      className="bg-error-bg border border-error/20 rounded-xl p-4"
      role="alert"
      aria-live="assertive"
    >
      <p className="text-sm font-medium text-error">
        Please fix {errorEntries.length} {errorEntries.length === 1 ? "error" : "errors"} below:
      </p>
      <ul className="mt-2 space-y-1">
        {errorEntries.map(([field, err]) => (
          <li key={field} className="text-xs text-error/80">
            <a href={`#${field}`} className="underline hover:no-underline">
              {(err as FieldError)?.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
