import { z } from "zod";

export const conferenceSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Phone check simple rakha hai - completely optional
  phone: z.string().trim().optional().or(z.literal("")),

  company: z.string().trim().optional().or(z.literal("")),

  // Interest select karna optional kar diya hai
  interest: z
    .enum([
      "Attending Sessions",
      "Speaking Opportunity",
      "Sponsoring Sessions",
      "General Enquiry",
    ])
    .optional()
    .or(z.literal("")),

  message: z.string().trim().optional().or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type ConferenceFormData = z.infer<typeof conferenceSchema>;