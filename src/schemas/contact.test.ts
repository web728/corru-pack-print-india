import { describe, it, expect } from "vitest";
import { contactSchema } from "./contact";

const validContact = {
  fullName: "Test User",
  email: "test@example.com",
  enquiryType: "General" as const,
  subject: "Test subject line",
  message: "This is a test message for the contact form.",
  consent: true as const,
};

describe("contactSchema", () => {
  it("accepts valid data", () => {
    const result = contactSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it("accepts optional phone", () => {
    const result = contactSchema.safeParse({ ...validContact, phone: "" });
    expect(result.success).toBe(true);
  });

  it("rejects short subject", () => {
    const result = contactSchema.safeParse({ ...validContact, subject: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactSchema.safeParse({ ...validContact, message: "Short" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid enquiry type", () => {
    const result = contactSchema.safeParse({ ...validContact, enquiryType: "Invalid" });
    expect(result.success).toBe(false);
  });

  it("accepts all valid enquiry types", () => {
    const types = ["General", "Exhibitor", "Visitor", "Sponsorship", "Media", "Other"];
    for (const t of types) {
      const result = contactSchema.safeParse({ ...validContact, enquiryType: t });
      expect(result.success).toBe(true);
    }
  });
});
