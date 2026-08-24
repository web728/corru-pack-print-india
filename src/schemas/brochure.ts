import { z } from "zod";

export const brochureSchema = z.object({
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
  role: z
    .enum(
      ["Manufacturer", "Buyer", "Distributor", "Consultant", "Media", "Other"],
      { message: "Please select a role" },
    )
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type BrochureFormData = z.infer<typeof brochureSchema>;
