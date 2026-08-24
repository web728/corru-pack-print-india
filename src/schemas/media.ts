import { z } from "zod";

const phoneRegex = /^\+\d{1,4}\d{6,14}$/;

export const mediaSchema = z.object({
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
  phone: z
    .string()
    .regex(
      phoneRegex,
      "Please enter a valid phone number with country code (e.g. +919876543210)",
    )
    .trim(),
  organization: z
    .string()
    .min(1, "Publication or outlet name is required")
    .max(200, "Organization name must not exceed 200 characters")
    .trim(),
  mediaType: z.enum(["Print", "Digital", "Broadcast", "Freelance"], {
    message: "Please select a media type",
  }),
  designation: z
    .string()
    .min(1, "Designation is required")
    .max(100, "Designation must not exceed 100 characters")
    .trim(),
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

export type MediaFormData = z.infer<typeof mediaSchema>;
