import { z } from "zod";

/** Why someone is getting in touch. Keys are stable; labels live in the dictionary. */
export const contactTopics = ["donate", "volunteer", "partner", "other"] as const;
export type ContactTopic = (typeof contactTopics)[number];

/**
 * Contact form rules, shared by the server action (authoritative) and tests.
 * Error messages are dictionary keys under `form.errors`, so they can be translated.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "nameRequired").max(100, "nameTooLong"),
  email: z.email("emailInvalid").trim().max(200, "emailInvalid"),
  phone: z
    .string()
    .trim()
    .max(30, "phoneInvalid")
    .regex(/^[+()\d\s.-]*$/, "phoneInvalid")
    .optional()
    .transform((value) => value || undefined),
  topic: z.enum(contactTopics, "topicRequired"),
  message: z.string().trim().min(10, "messageTooShort").max(5000, "messageTooLong"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
