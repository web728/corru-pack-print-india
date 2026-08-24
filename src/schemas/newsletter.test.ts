import { describe, it, expect } from "vitest";
import { newsletterSchema } from "./newsletter";

describe("newsletterSchema", () => {
  it("accepts valid email with consent", () => {
    const result = newsletterSchema.safeParse({ email: "test@example.com", consent: true });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = newsletterSchema.safeParse({ email: "bad", consent: true });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = newsletterSchema.safeParse({ email: "test@example.com" });
    expect(result.success).toBe(false);
  });

  it("rejects consent=false", () => {
    const result = newsletterSchema.safeParse({ email: "test@example.com", consent: false });
    expect(result.success).toBe(false);
  });
});
