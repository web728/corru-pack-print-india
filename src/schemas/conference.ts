import { z } from "zod";

export const conferenceSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name must not exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z.string().trim().optional().or(z.literal("")),
  company: z
    .string()
    .max(200, "Company name must not exceed 200 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  interest: z.enum(
    [
      "Attending Sessions",
      "Speaking Opportunity",
      "Sponsoring Sessions",
      "General Enquiry",
    ],
    { message: "Please select your area of interest" },
  ),
  message: z
    .string()
    .max(1000, "Message must not exceed 1000 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type ConferenceFormData = z.infer<typeof conferenceSchema>;
