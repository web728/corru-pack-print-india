import { z } from "zod";
import { PRODUCT_CATEGORIES } from "@/config/event";

const productCategorySlugs = PRODUCT_CATEGORIES.map((c) => c.slug);

const indianPhoneRegex = /^\+91[6-9]\d{9}$/;

export const visitorSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
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
      indianPhoneRegex,
      "Please enter a valid Indian mobile number (e.g. +919876543210)",
    )
    .trim(),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must not exceed 200 characters")
    .trim(),
  designation: z
    .string()
    .min(2, "Designation must be at least 2 characters")
    .max(100, "Designation must not exceed 100 characters")
    .trim(),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must not exceed 100 characters")
    .trim(),
  state: z
    .string()
    .min(2, "State must be at least 2 characters")
    .max(100, "State must not exceed 100 characters")
    .trim(),
  visitPurpose: z.enum(
    [
      "Sourcing Machinery",
      "Market Research",
      "Networking",
      "Technology Updates",
      "Other",
    ],
    { message: "Please select a visit purpose" },
  ),
  productInterests: z
    .array(z.enum(productCategorySlugs as [string, ...string[]]))
    .min(1, "Please select at least one product category"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});

export type VisitorFormData = z.infer<typeof visitorSchema>;
