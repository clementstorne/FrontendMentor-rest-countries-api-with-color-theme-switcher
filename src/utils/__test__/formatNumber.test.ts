import { describe, expect, it } from "vitest";
import formatNumber from "../formatNumber";

describe("formatNumber", () => {
  it("should format a postestive integer", () => {
    const formatted = formatNumber(12345);
    expect(formatted).toBe("12,345");
  });

  it("should format a negative integer", () => {
    const formatted = formatNumber(-6789);
    expect(formatted).toBe("-6,789");
  });

  it("should format a floating-point number", () => {
    const formatted = formatNumber(1234.5678);
    expect(formatted).toBe("1,234.568");
  });

  it("should format zero", () => {
    const formatted = formatNumber(0);
    expect(formatted).toBe("0");
  });

  it("should format a large number", () => {
    const formatted = formatNumber(1234567890);
    expect(formatted).toBe("1,234,567,890");
  });
});
