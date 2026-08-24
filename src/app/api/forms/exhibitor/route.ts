import { exhibitorSchema, type ExhibitorFormData } from "@/schemas";
import { createFormHandler } from "../helpers";
import { PRODUCT_CATEGORIES } from "@/config/event";

const categoryMap = Object.fromEntries(
  PRODUCT_CATEGORIES.map((c) => [c.slug, c.name]),
);

export const POST = createFormHandler<ExhibitorFormData>({
  formType: "EXH",
  zodSchema: exhibitorSchema,
  fieldSchema: {
    companyName: { type: "string" },
    contactPerson: { type: "string" },
    email: { type: "email" },
    phone: { type: "phone" },
    website: { type: "string" },
    city: { type: "string" },
    state: { type: "string" },
    country: { type: "string" },
    productCategories: { type: "string" },
    stallPreference: { type: "string" },
    message: { type: "string", multiline: true },
    consent: { type: "boolean" },
  },
  collection: "exhibitors",
  emailField: "email",
  nameFields: ["contactPerson"],
  sheetName: "Exhibitors",
  buildSheetRow: (ref, d) => [
    ref,
    d.companyName,
    d.contactPerson,
    d.email,
    d.phone,
    d.website ?? "",
    d.city,
    d.state,
    d.country,
    d.productCategories.map((s) => categoryMap[s] ?? s).join(", "),
    d.stallPreference,
    d.message ?? "",
    new Date().toISOString(),
  ],
  buildAdminFields: (d) => ({
    Company: d.companyName,
    Contact: d.contactPerson,
    Email: d.email,
    Phone: d.phone,
    Website: d.website ?? "—",
    Location: `${d.city}, ${d.state}, ${d.country}`,
    "Product Categories": d.productCategories.map((s) => categoryMap[s] ?? s).join(", "),
    "Stall Preference": d.stallPreference,
    Message: d.message ?? "—",
  }),
  buildConfirmationDetails: (d) => ({
    Company: d.companyName,
    Contact: d.contactPerson,
    "Stall Preference": d.stallPreference,
  }),
});
