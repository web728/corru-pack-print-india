import { describe, it, expect } from "vitest";
import { visitorSchema } from "./visitor";

const validVisitor = {
  fullName: "Raj Kumar",
  email: "raj@example.com",
  phone: "+919876543210",
  company: "Test Corp",
  designation: "Manager",
  city: "Mumbai",
  state: "Maharashtra",
  visitPurpose: "Sourcing Machinery" as const,
  productInterests: ["printing-converting"],
  consent: true as const,
};

describe("visitorSchema", () => {
  it("accepts valid data", () => {
    const result = visitorSchema.safeParse(validVisitor);
    expect(result.success).toBe(true);
  });

  it("rejects missing fullName", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, fullName: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, email: "notanemail" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid phone", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, phone: "123" });
    expect(result.success).toBe(false);
  });

  it("rejects empty productInterests", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, productInterests: [] });
    expect(result.success).toBe(false);
  });

  it("rejects consent=false", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, consent: false });
    expect(result.success).toBe(false);
  });

  it("normalizes email to lowercase", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, email: "RAJ@EXAMPLE.COM" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("raj@example.com");
    }
  });

  it("rejects invalid visit purpose", () => {
    const result = visitorSchema.safeParse({ ...validVisitor, visitPurpose: "Invalid" });
    expect(result.success).toBe(false);
  });
});
