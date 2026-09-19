import { z } from "zod";

export const brochureSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Ab koi +91 ya strict length check nahi hai. Completely optional.
  phone: z.string().trim().optional().or(z.literal("")),

  company: z.string().trim().optional().or(z.literal("")),

  role: z
    .enum(["Manufacturer", "Buyer", "Distributor", "Consultant", "Media", "Other"])
    .optional()
    .or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type BrochureFormData = z.infer<typeof brochureSchema>;