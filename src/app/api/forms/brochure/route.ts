import { brochureSchema, type BrochureFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<BrochureFormData>({
  formType: "BRO",
  zodSchema: brochureSchema,
  fieldSchema: {
    fullName: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    company: { type: "string" },
    role: { type: "string" },
    consent: { type: "boolean" },
  },
  collection: "brochure_requests",
  emailField: "email",
  nameFields: ["fullName"],
  sheetName: "Brochure",
  buildSheetRow: (ref, d) => [
    ref,
    d.fullName,
    d.email,
    d.phone ?? "",
    d.company ?? "",
    d.role ?? "",
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Name: d.fullName,
    Email: d.email,
    Phone: d.phone ?? "—",
    Company: d.company ?? "—",
    Role: d.role ?? "—",
  }),
  buildConfirmationDetails: (d) => ({
    Name: d.fullName,
  }),
});
