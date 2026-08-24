import { visitorSchema, type VisitorFormData } from "@/schemas";
import { createFormHandler } from "../helpers";
import { PRODUCT_CATEGORIES } from "@/config/event";

const categoryMap = Object.fromEntries(
  PRODUCT_CATEGORIES.map((c) => [c.slug, c.name]),
);

export const POST = createFormHandler<VisitorFormData>({
  formType: "VIS",
  zodSchema: visitorSchema,
  fieldSchema: {
    fullName: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    company: { type: "string" },
    designation: { type: "string" },
    city: { type: "string" },
    state: { type: "string" },
    visitPurpose: { type: "string" },
    productInterests: { type: "string" },
    consent: { type: "boolean" },
  },
  collection: "visitors",
  emailField: "email",
  nameFields: ["fullName"],
  sheetName: "Visitors",
  buildSheetRow: (ref, d) => [
    ref,
    d.fullName,
    d.email,
    d.phone,
    d.company,
    d.designation,
    d.city,
    d.state,
    d.visitPurpose,
    d.productInterests.map((s) => categoryMap[s] ?? s).join(", "),
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Name: d.fullName,
    Email: d.email,
    Phone: d.phone,
    Company: d.company,
    Designation: d.designation,
    "City / State": `${d.city}, ${d.state}`,
    "Visit Purpose": d.visitPurpose,
    "Product Interests": d.productInterests.map((s) => categoryMap[s] ?? s).join(", "),
  }),
  buildConfirmationDetails: (d) => ({
    Name: d.fullName,
    Company: d.company,
    "Visit Purpose": d.visitPurpose,
  }),
});
