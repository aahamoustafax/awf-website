import "server-only";

export type Email = { to: string; replyTo: string; subject: string; text: string };

/**
 * How email leaves the site, chosen by environment variables:
 * - "resend": sent through the Resend API (needs RESEND_API_KEY).
 * - "log":    printed to the server log. The default in development and in e2e tests.
 * - "none":   production without a key. Sending fails, so the form tells visitors to email us
 *             directly instead of silently losing their message.
 */
function transport(): "resend" | "log" | "none" {
  const explicit = process.env.EMAIL_TRANSPORT;
  if (explicit === "resend" || explicit === "log") return explicit;
  if (process.env.RESEND_API_KEY) return "resend";
  return process.env.NODE_ENV === "production" ? "none" : "log";
}

/** Sends an email. Resolves to true when delivered (or logged), false on failure. */
export async function sendEmail(email: Email): Promise<boolean> {
  const mode = transport();

  if (mode === "log") {
    console.info("[email:log]", JSON.stringify(email, null, 2));
    return true;
  }
  if (mode === "none") {
    console.error("[email] No RESEND_API_KEY configured; message not sent.");
    return false;
  }

  try {
    // Plain fetch to the Resend REST API: no SDK dependency needed.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "AWF website <onboarding@resend.dev>",
        to: [email.to],
        reply_to: email.replyTo,
        subject: email.subject,
        text: email.text,
      }),
    });
    if (!response.ok) console.error("[email] Resend error", response.status, await response.text());
    return response.ok;
  } catch (error) {
    console.error("[email] Request failed", error);
    return false;
  }
}
