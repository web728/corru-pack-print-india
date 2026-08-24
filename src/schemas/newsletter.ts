import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
