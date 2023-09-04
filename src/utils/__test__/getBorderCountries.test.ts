import { describe, expect, it } from "vitest";
import getBorderCountries from "../getBorderCountries";

describe("getBorderCountries", () => {
  it("should return an array of objects with codes and names", () => {
    const codesArray = ["US", "CA", "GB"];
    const namesArray = ["United States", "Canada", "United Kingdom"];

    const result = getBorderCountries(codesArray, namesArray);

    expect(result).toEqual([
      { code: "US", name: "United States" },
      { code: "CA", name: "Canada" },
      { code: "GB", name: "United Kingdom" },
    ]);
  });

  it("should handle empty input arrays", () => {
    const codesArray: string[] = [];
    const namesArray: string[] = [];

    const result = getBorderCountries(codesArray, namesArray);

    expect(result).toEqual([]);
  });
});
