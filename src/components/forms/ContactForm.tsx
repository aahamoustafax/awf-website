"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";

import { sendContactMessage, type ContactState } from "@/actions/contact";
import { Button } from "@/components/ui";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { contactTopics, type ContactField } from "@/lib/validation/contact";

type ContactFormProps = {
  labels: Dictionary["form"];
  /** Shown when sending fails, so visitors can still reach us. */
  fallbackEmail: string;
};

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-foreground " +
  "placeholder:text-muted aria-[invalid=true]:border-alert aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-alert";

/**
 * Contact form. Works as a normal HTML form; with JavaScript it shows inline errors, keeps what
 * was typed, and confirms success without a page reload. Validation runs on the server.
 */
export function ContactForm({ labels, fallbackEmail }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  // "Send another message" hides this particular success result and shows a fresh form.
  const [dismissed, setDismissed] = useState<ContactState | null>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? state.values : {};

  // Record when the form appeared (spam check), and again after "send another".
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, [state.status, dismissed]);

  // Move focus to the result so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success" && dismissed !== state) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border-l-4 border-cta bg-surface-muted p-8"
      >
        <p className="font-display text-display-sm font-semibold text-primary">
          {labels.successTitle}
        </p>
        <p className="mt-2 text-lg">{labels.successBody}</p>
        <button
          type="button"
          onClick={() => setDismissed(state)}
          className="mt-6 font-semibold text-accent underline-offset-4 hover:underline"
        >
          {labels.sendAnother}
        </button>
      </div>
    );
  }

  const hasFieldErrors = Object.keys(errors).length > 0;
  const formError = state.status === "error" ? state.formError : undefined;

  const field = (name: ContactField) => ({
    id: `contact-${name}`,
    name,
    defaultValue: values[name] ?? "",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <form action={formAction} noValidate className="space-y-6">
      {(hasFieldErrors || formError) && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border-l-4 border-alert bg-surface p-4"
        >
          {formError === "sendFailed" ? (
            <p>
              {labels.errors.sendFailed}{" "}
              <a href={`mailto:${fallbackEmail}`} className="font-semibold text-accent underline">
                {fallbackEmail}
              </a>
              .
            </p>
          ) : (
            <p>{formError ? labels.errors[formError] : labels.errorSummary}</p>
          )}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={labels.name}
          required={labels.required}
          htmlFor="contact-name"
          error={errors.name && labels.errors[errors.name as keyof typeof labels.errors]}
          errorId="contact-name-error"
        >
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            required
            className={inputClass}
          />
        </Field>
        <Field
          label={labels.email}
          required={labels.required}
          htmlFor="contact-email"
          error={errors.email && labels.errors[errors.email as keyof typeof labels.errors]}
          errorId="contact-email-error"
        >
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </Field>
        <Field
          label={labels.phone}
          htmlFor="contact-phone"
          error={errors.phone && labels.errors[errors.phone as keyof typeof labels.errors]}
          errorId="contact-phone-error"
        >
          <input {...field("phone")} type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field
          label={labels.topic}
          required={labels.required}
          htmlFor="contact-topic"
          error={errors.topic && labels.errors[errors.topic as keyof typeof labels.errors]}
          errorId="contact-topic-error"
        >
          <select {...field("topic")} required className={inputClass}>
            <option value="">{labels.topicPlaceholder}</option>
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {labels.topics[topic]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label={labels.message}
        required={labels.required}
        htmlFor="contact-message"
        error={errors.message && labels.errors[errors.message as keyof typeof labels.errors]}
        errorId="contact-message-error"
      >
        <textarea {...field("message")} rows={6} required className={cn(inputClass, "resize-y")} />
      </Field>

      {/* Spam traps: a field humans never see, and when the form appeared. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">{labels.honeypot}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" />

      <Button type="submit" variant="cta" size="lg" disabled={pending} aria-disabled={pending}>
        {pending ? labels.sending : labels.submit}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  /** Text of the "required" marker; omit for optional fields. */
  required?: string;
  error?: string;
  errorId: string;
  children: ReactNode;
};

function Field({ label, htmlFor, required, error, errorId, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-semibold text-primary">
        {label}
        {required && (
          <span className="text-alert">
            {" "}
            *<span className="sr-only"> ({required})</span>
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-2 text-sm font-medium text-alert">
          {error}
        </p>
      )}
    </div>
  );
}
