import { mediaSchema, type MediaFormData } from "@/schemas";
import { createFormHandler } from "../helpers";

export const POST = createFormHandler<MediaFormData>({
  formType: "MED",
  zodSchema: mediaSchema,
  fieldSchema: {
    fullName: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    organization: { type: "string" },
    mediaType: { type: "string" },
    designation: { type: "string" },
    message: { type: "string", multiline: true },
    consent: { type: "boolean" },
  },
  collection: "media_accreditations",
  emailField: "email",
  nameFields: ["fullName"],
  sheetName: "Media",
  buildSheetRow: (ref, d) => [
    ref,
    d.fullName,
    d.email,
    d.phone,
    d.organization,
    d.mediaType,
    d.designation,
    d.message ?? "",
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Name: d.fullName,
    Email: d.email,
    Phone: d.phone,
    Organization: d.organization,
    "Media Type": d.mediaType,
    Designation: d.designation,
    Message: d.message ?? "—",
  }),
  buildConfirmationDetails: (d) => ({
    Name: d.fullName,
    Organization: d.organization,
    "Media Type": d.mediaType,
  }),
});
