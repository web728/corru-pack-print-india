import { z } from "zod";
import { PRODUCT_CATEGORIES } from "@/config/event";

export const visitorSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Ab koi +91 ya strict regex check nahi hai. Completely optional.
  phone: z.string().trim().optional().or(z.literal("")),

  company: z.string().trim().optional().or(z.literal("")),

  designation: z.string().trim().optional().or(z.literal("")),

  city: z.string().trim().optional().or(z.literal("")),

  state: z.string().trim().optional().or(z.literal("")),

  visitPurpose: z
    .enum([
      "Sourcing Machinery",
      "Market Research",
      "Networking",
      "Technology Updates",
      "Other",
    ])
    .optional()
    .or(z.literal("")),

  // Checkbox array selection optional kar di hai
  productInterests: z
    .array(z.string())
    .optional(),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type VisitorFormData = z.infer<typeof visitorSchema>;