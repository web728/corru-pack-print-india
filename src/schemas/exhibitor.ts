import { z } from "zod";
import { PRODUCT_CATEGORIES } from "@/config/event";

const productCategorySlugs = PRODUCT_CATEGORIES.map((c) => c.slug);

const phoneRegex = /^\+\d{1,4}\d{6,14}$/;

export const exhibitorSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must not exceed 200 characters")
    .trim(),
  contactPerson: z
    .string()
    .min(2, "Contact person name must be at least 2 characters")
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
  website: z
    .string()
    .url("Please enter a valid URL (e.g. https://example.com)")
    .trim()
    .optional()
    .or(z.literal("")),
  city: z.string().min(1, "City is required").trim(),
  state: z.string().min(1, "State is required").trim(),
  country: z.string().min(1, "Country is required").trim(),
  productCategories: z
    .array(z.enum(productCategorySlugs as [string, ...string[]]))
    .min(1, "Please select at least one product category"),
  stallPreference: z.enum(
    ["Standard", "Premium", "Custom", "Undecided"],
    { message: "Please select a stall preference" },
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

export type ExhibitorFormData = z.infer<typeof exhibitorSchema>;
