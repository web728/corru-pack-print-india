import { describe, it, expect } from "vitest";
import { extractUtmParams } from "./utm";

describe("extractUtmParams", () => {
  it("extracts UTM params from full URL", () => {
    const result = extractUtmParams("https://example.com?utm_source=google&utm_medium=cpc");
    expect(result).toEqual({
      source: "google",
      medium: "cpc",
      campaign: "",
      term: "",
      content: "",
    });
  });

  it("returns null for URL without UTM params", () => {
    expect(extractUtmParams("https://example.com/page")).toBeNull();
  });

  it("returns null for null input", () => {
    expect(extractUtmParams(null)).toBeNull();
  });

  it("returns null for empty string", () => {
    expect(extractUtmParams("")).toBeNull();
  });

  it("extracts all five UTM params", () => {
    const url = "https://example.com?utm_source=s&utm_medium=m&utm_campaign=c&utm_term=t&utm_content=ct";
    const result = extractUtmParams(url);
    expect(result).toEqual({
      source: "s",
      medium: "m",
      campaign: "c",
      term: "t",
      content: "ct",
    });
  });

  it("handles malformed URLs gracefully", () => {
    expect(extractUtmParams("not-a-url")).toBeNull();
  });
});
