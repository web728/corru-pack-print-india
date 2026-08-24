import { describe, it, expect } from "vitest";
import { sanitizeString, sanitizeEmail, sanitizePhone, normalizeFormData, type FieldSchema } from "./sanitize";

describe("sanitizeString", () => {
  it("trims whitespace", () => {
    expect(sanitizeString("  hello  ")).toBe("hello");
  });

  it("collapses internal whitespace", () => {
    expect(sanitizeString("hello   world")).toBe("hello world");
  });

  it("strips control characters", () => {
    expect(sanitizeString("hello\x00world")).toBe("helloworld");
  });

  it("returns empty string for non-string", () => {
    expect(sanitizeString(42)).toBe("");
    expect(sanitizeString(null)).toBe("");
    expect(sanitizeString(undefined)).toBe("");
  });
});

describe("sanitizeEmail", () => {
  it("lowercases and trims", () => {
    expect(sanitizeEmail("  TEST@EXAMPLE.COM  ")).toBe("test@example.com");
  });

  it("returns empty for non-string", () => {
    expect(sanitizeEmail(null)).toBe("");
  });
});

describe("sanitizePhone", () => {
  it("normalizes 10-digit Indian number", () => {
    expect(sanitizePhone("9876543210")).toBe("+919876543210");
  });

  it("normalizes 91-prefixed number", () => {
    expect(sanitizePhone("919876543210")).toBe("+919876543210");
  });

  it("normalizes 0-prefixed number", () => {
    expect(sanitizePhone("09876543210")).toBe("+919876543210");
  });

  it("handles already formatted +91 number", () => {
    expect(sanitizePhone("+919876543210")).toBe("+919876543210");
  });

  it("rejects too-short numbers", () => {
    expect(sanitizePhone("12345")).toBe("");
  });

  it("returns empty for non-string", () => {
    expect(sanitizePhone(null)).toBe("");
  });
});

describe("normalizeFormData", () => {
  it("applies field-specific sanitization", () => {
    const schema: Record<string, FieldSchema> = {
      name: { type: "string" },
      email: { type: "email" },
      phone: { type: "phone" },
      agreed: { type: "boolean" },
    };
    const data = {
      name: "  John  Doe  ",
      email: "  JOHN@EXAMPLE.COM  ",
      phone: "9876543210",
      agreed: true,
      extraField: "should be dropped",
    };
    const result = normalizeFormData(data, schema);
    expect(result).toEqual({
      name: "John Doe",
      email: "john@example.com",
      phone: "+919876543210",
      agreed: true,
    });
  });
});
