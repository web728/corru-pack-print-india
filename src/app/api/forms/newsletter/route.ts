import { newsletterSchema, type NewsletterFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<NewsletterFormData>({
  formType: "NWS",
  zodSchema: newsletterSchema,
  fieldSchema: {
    email: { type: "email" },
    consent: { type: "boolean" },
  },
  collection: "newsletter_subscribers",
  emailField: "email",
  nameFields: [],
  sheetName: "Newsletter",
  buildSheetRow: (ref, d) => [ref, d.email, new Date().toISOString()],
  buildAdminFields: (d) => ({
    Email: d.email,
  }),
  buildConfirmationDetails: () => ({}),
});
