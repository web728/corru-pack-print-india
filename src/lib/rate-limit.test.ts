import { describe, it, expect } from "vitest";
import { checkRateLimit } from "./rate-limit";

describe("checkRateLimit", () => {
  it("allows first request", () => {
    const result = checkRateLimit("test-key-1", 5, 60000);
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it("decrements remaining count", () => {
    const key = "test-key-2";
    checkRateLimit(key, 3, 60000);
    checkRateLimit(key, 3, 60000);
    const result = checkRateLimit(key, 3, 60000);
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(0);
  });

  it("blocks after limit is reached", () => {
    const key = "test-key-3";
    for (let i = 0; i < 2; i++) {
      checkRateLimit(key, 2, 60000);
    }
    const result = checkRateLimit(key, 2, 60000);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("uses separate counters for different keys", () => {
    const r1 = checkRateLimit("test-key-4a", 1, 60000);
    const r2 = checkRateLimit("test-key-4b", 1, 60000);
    expect(r1.allowed).toBe(true);
    expect(r2.allowed).toBe(true);
  });
});
