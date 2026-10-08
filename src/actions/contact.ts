"use server";

import { headers } from "next/headers";

import { sendEmail } from "@/lib/email/send";
import { createRateLimiter } from "@/lib/rateLimit";
import { contactSchema, type ContactField } from "@/lib/validation/contact";

/** Result shown by the form. Error and message values are dictionary keys under `form`. */
export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      /** Key under `form.errors` for a message above the form. */
      formError?: "rateLimited" | "sendFailed";
      /** Field name → key under `form.errors`. */
      fieldErrors?: Partial<Record<ContactField, string>>;
      /** What the visitor typed, so nothing is lost after an error. */
      values: Record<string, string>;
    };

/** Submissions faster than this after the form appeared are treated as bots. */
const MIN_FILL_TIME_MS = 2000;

// 5 messages per 10 minutes per visitor, per server instance.
const isAllowed = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = Object.fromEntries(
    ["name", "email", "phone", "topic", "message"].map((field) => [
      field,
      String(formData.get(field) ?? ""),
    ]),
  );

  // Spam traps. Bots fill the hidden "website" field and submit instantly. Pretend success so they
  // get no signal to adapt to, but send nothing.
  const startedAt = Number(formData.get("startedAt"));
  const tooFast = !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS;
  if (formData.get("website") || tooFast) {
    console.info("[contact] Dropped likely spam submission");
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField;
      fieldErrors[field] ??= issue.message;
    }
    return { status: "error", fieldErrors, values: raw };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!isAllowed(ip)) return { status: "error", formError: "rateLimited", values: raw };

  const { name, email, phone, topic, message } = parsed.data;
  const sent = await sendEmail({
    to: process.env.CONTACT_TO_EMAIL ?? "awf.kefb@gmail.com",
    replyTo: email,
    subject: `Website message (${topic}) from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone ?? "-"}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n"),
  });

  return sent ? { status: "success" } : { status: "error", formError: "sendFailed", values: raw };
}
