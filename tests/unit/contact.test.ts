import { describe, expect, it } from "vitest";

import { createRateLimiter } from "@/lib/rateLimit";
import { contactSchema } from "@/lib/validation/contact";

const valid = {
  name: "Amina Rahimi",
  email: "amina@example.org",
  phone: "",
  topic: "enroll",
  message: "I'd like to enroll my daughter in the weekend classes.",
};

describe("contactSchema", () => {
  it("accepts a complete message and drops an empty phone", () => {
    const result = contactSchema.safeParse(valid);
    expect(result.success).toBe(true);
    expect(result.success && result.data.phone).toBeUndefined();
  });

  it("returns dictionary keys as error messages", () => {
    const result = contactSchema.safeParse({ ...valid, email: "not-an-email", message: "hi" });
    expect(result.success).toBe(false);
    const messages = result.success ? [] : result.error.issues.map((issue) => issue.message);
    expect(messages).toEqual(expect.arrayContaining(["emailInvalid", "messageTooShort"]));
  });

  it("rejects unknown topics and odd phone characters", () => {
    expect(contactSchema.safeParse({ ...valid, topic: "spam" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, phone: "call me!" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, phone: "+1 (365) 323-6555" }).success).toBe(true);
  });

  it("trims whitespace", () => {
    const result = contactSchema.safeParse({ ...valid, name: "  Amina  " });
    expect(result.success && result.data.name).toBe("Amina");
  });
});

describe("createRateLimiter", () => {
  it("allows up to the limit within the window, then blocks", () => {
    const isAllowed = createRateLimiter({ limit: 2, windowMs: 1000 });
    expect(isAllowed("ip", 0)).toBe(true);
    expect(isAllowed("ip", 10)).toBe(true);
    expect(isAllowed("ip", 20)).toBe(false);
  });

  it("frees up again once old hits leave the window, and tracks keys separately", () => {
    const isAllowed = createRateLimiter({ limit: 1, windowMs: 1000 });
    expect(isAllowed("a", 0)).toBe(true);
    expect(isAllowed("b", 0)).toBe(true);
    expect(isAllowed("a", 500)).toBe(false);
    expect(isAllowed("a", 1500)).toBe(true);
  });
});
