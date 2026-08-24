import { z } from "zod";

const phoneRegex = /^\+\d{1,4}\d{6,14}$/;

export const sponsorSchema = z.object({
  companyName: z
    .string()
    .min(1, "Company name is required")
    .max(200, "Company name must not exceed 200 characters")
    .trim(),
  contactPerson: z
    .string()
    .min(1, "Contact person name is required")
    .max(100, "Contact person name must not exceed 100 characters")
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
  interestArea: z.enum(
    [
      "Title Sponsor",
      "Platinum Sponsor",
      "Gold Sponsor",
      "Advertising",
      "Branding",
      "Custom Package",
    ],
    { message: "Please select an area of interest" },
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

export type SponsorFormData = z.infer<typeof sponsorSchema>;
