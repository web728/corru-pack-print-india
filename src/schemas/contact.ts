import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Phone check optional
  phone: z.string().trim().optional().or(z.literal("")),

  // Enquiry type drop-down ko optional bana diya hai
  enquiryType: z
    .enum(["General", "Exhibitor", "Visitor", "Sponsorship", "Media", "Other"])
    .optional()
    .or(z.literal("")),

  // Subject par se min(5) aur max(200) ki restriction hata di hai
  subject: z.string().trim().optional().or(z.literal("")),

  // Message par se min(10) restriction hata di hai
  message: z.string().trim().optional().or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;