import { contactSchema, type ContactFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<ContactFormData>({
  formType: "CON",
  zodSchema: contactSchema,
  fieldSchema: {
    fullName: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    enquiryType: { type: "string" },
    subject: { type: "string" },
    message: { type: "string", multiline: true },
    consent: { type: "boolean" },
  },
  collection: "contacts",
  emailField: "email",
  nameFields: ["fullName"],
  sheetName: "Contacts",
  buildSheetRow: (ref, d) => [
    ref,
    d.fullName,
    d.email,
    d.phone ?? "",
    d.enquiryType ?? "", // <-- Fixed: undefined safe
    d.subject ?? "",     // <-- Fixed: undefined safe
    d.message ?? "",     // <-- Fixed: undefined safe
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Name: d.fullName,
    Email: d.email,
    Phone: d.phone ?? "—",
    "Enquiry Type": d.enquiryType ?? "—", // <-- Fixed
    Subject: d.subject ?? "—",             // <-- Fixed
    Message: d.message ?? "—",             // <-- Fixed
  }),
  buildConfirmationDetails: (d) => ({
    Name: d.fullName,
    "Enquiry Type": d.enquiryType ?? "—", // <-- Fixed
    Subject: d.subject ?? "—",             // <-- Fixed
  }),
});