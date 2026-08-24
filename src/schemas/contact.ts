import { z } from "zod";

export const contactSchema = z.object({
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
  enquiryType: z.enum(
    ["General", "Exhibitor", "Visitor", "Sponsorship", "Media", "Other"],
    { message: "Please select an enquiry type" },
  ),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters")
    .trim(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
