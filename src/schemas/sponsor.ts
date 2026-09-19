import { z } from "zod";

export const sponsorSchema = z.object({
  companyName: z
    .string()
    .min(1, "Company name is required")
    .trim(),

  contactPerson: z
    .string()
    .min(1, "Contact person name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Phone regex hata diya hai - pure optional input
  phone: z.string().trim().optional().or(z.literal("")),

  // Dropdown non-blocking hai ab
  interestArea: z
    .enum([
      "Title Sponsor",
      "Platinum Sponsor",
      "Gold Sponsor",
      "Advertising",
      "Branding",
      "Custom Package",
    ])
    .optional()
    .or(z.literal("")),

  message: z.string().trim().optional().or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type SponsorFormData = z.infer<typeof sponsorSchema>;