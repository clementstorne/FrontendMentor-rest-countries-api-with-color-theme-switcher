import { describe, expect, it } from "vitest";
import intersectionOfArrays from "../intersectionOfArrays";

describe("intersectionOfArrays", () => {
  it("should return the intersection of two arrays with common elements", () => {
    const firstArr = [1, 2, 3, 4];
    const secondArr = [3, 4, 5, 6];

    const result = intersectionOfArrays(firstArr, secondArr);

    expect(result).toEqual([3, 4]);
  });

  it("should return an empty array for two arrays with no common elements", () => {
    const firstArr = [1, 2, 3];
    const secondArr = [4, 5, 6];

    const result = intersectionOfArrays(firstArr, secondArr);

    expect(result).toEqual([]);
  });

  it("should handle empty arrays", () => {
    const firstArr: number[] = [];
    const secondArr: number[] = [];

    const result = intersectionOfArrays(firstArr, secondArr);

    expect(result).toEqual([]);
  });
});
