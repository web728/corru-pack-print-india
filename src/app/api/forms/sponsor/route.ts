import { sponsorSchema, type SponsorFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<SponsorFormData>({
  formType: "SPO",
  zodSchema: sponsorSchema,
  fieldSchema: {
    companyName: { type: "string" },
    contactPerson: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    interestArea: { type: "string" },
    message: { type: "string", multiline: true },
    consent: { type: "boolean" },
  },
  collection: "sponsors",
  emailField: "email",
  nameFields: ["contactPerson"],
  sheetName: "Sponsors",
  buildSheetRow: (ref, d) => [
    ref,
    d.companyName,
    d.contactPerson,
    d.email,
    d.phone,
    d.interestArea,
    d.message ?? "",
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Company: d.companyName,
    Contact: d.contactPerson,
    Email: d.email,
    Phone: d.phone,
    "Interest Area": d.interestArea,
    Message: d.message ?? "—",
  }),
  buildConfirmationDetails: (d) => ({
    Company: d.companyName,
    Contact: d.contactPerson,
    "Interest Area": d.interestArea,
  }),
});
