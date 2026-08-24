import { conferenceSchema, type ConferenceFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<ConferenceFormData>({
  formType: "CNF",
  zodSchema: conferenceSchema,
  fieldSchema: {
    fullName: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    company: { type: "string" },
    interest: { type: "string" },
    message: { type: "string", multiline: true },
    consent: { type: "boolean" },
  },
  collection: "conference_enquiries",
  emailField: "email",
  nameFields: ["fullName"],
  sheetName: "Conference",
  buildSheetRow: (ref, d) => [
    ref,
    d.fullName,
    d.email,
    d.phone ?? "",
    d.company ?? "",
    d.interest,
    d.message ?? "",
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Name: d.fullName,
    Email: d.email,
    Phone: d.phone ?? "—",
    Company: d.company ?? "—",
    Interest: d.interest,
    Message: d.message ?? "—",
  }),
  buildConfirmationDetails: (d) => ({
    Name: d.fullName,
    Interest: d.interest,
  }),
});
