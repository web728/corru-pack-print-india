import { z } from "zod";
import { PRODUCT_CATEGORIES } from "@/config/event";

const productCategorySlugs = PRODUCT_CATEGORIES.map((c) => c.slug);

export const exhibitorSchema = z.object({
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

  // Country code wala strict regex (+91...) aur required check hata diya hai
  phone: z.string().trim().optional().or(z.literal("")),

  // URL format validation hata diya hai taaki bina "https://" ke bhi simple text accept ho sake
  website: z.string().trim().optional().or(z.literal("")),

  city: z.string().trim().optional().or(z.literal("")),
  state: z.string().trim().optional().or(z.literal("")),
  country: z.string().trim().optional().or(z.literal("")),

  // Product categories ko empty array pass hone diya hai taaki blocking error na aaye
  productCategories: z
    .array(z.string())
    .optional(),

  // Stall preference choice ko optional kar diya hai
  stallPreference: z
    .enum(["Standard", "Premium", "Custom", "Undecided"])
    .optional()
    .or(z.literal("")),

  message: z.string().trim().optional().or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type ExhibitorFormData = z.infer<typeof exhibitorSchema>;