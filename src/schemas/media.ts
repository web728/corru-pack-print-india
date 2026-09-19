import { z } from "zod";

export const mediaSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  // Phone check simple - completely optional, no +91 or regex checks
  phone: z.string().trim().optional().or(z.literal("")),

  // Organization ko optional bana diya hai
  organization: z.string().trim().optional().or(z.literal("")),

  // Dropdown select karna optional kar diya hai
  mediaType: z
    .enum(["Print", "Digital", "Broadcast", "Freelance"])
    .optional()
    .or(z.literal("")),

  // Designation optional
  designation: z.string().trim().optional().or(z.literal("")),

  message: z.string().trim().optional().or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type MediaFormData = z.infer<typeof mediaSchema>;