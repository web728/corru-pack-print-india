import type { ZodSchema } from "zod";
import type { FormType } from "@/config/event";

export { visitorSchema, type VisitorFormData } from "./visitor";
export { exhibitorSchema, type ExhibitorFormData } from "./exhibitor";
export { contactSchema, type ContactFormData } from "./contact";
export { sponsorSchema, type SponsorFormData } from "./sponsor";
export { brochureSchema, type BrochureFormData } from "./brochure";
export { newsletterSchema, type NewsletterFormData } from "./newsletter";
export { mediaSchema, type MediaFormData } from "./media";
export { conferenceSchema, type ConferenceFormData } from "./conference";

import { visitorSchema } from "./visitor";
import { exhibitorSchema } from "./exhibitor";
import { contactSchema } from "./contact";
import { sponsorSchema } from "./sponsor";
import { brochureSchema } from "./brochure";
import { newsletterSchema } from "./newsletter";
import { mediaSchema } from "./media";
import { conferenceSchema } from "./conference";

export const FORM_SCHEMAS: Record<FormType, ZodSchema> = {
  VIS: visitorSchema,
  EXH: exhibitorSchema,
  CON: contactSchema,
  SPO: sponsorSchema,
  BRO: brochureSchema,
  NWS: newsletterSchema,
  MED: mediaSchema,
  CNF: conferenceSchema,
} as const;
