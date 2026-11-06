import { describe, expect, it } from "vitest";
import { parseAmountToCents, splitEqual, splitFirstPercent } from "./split";

describe("parseAmountToCents", () => {
  it("reads common formats", () => {
    expect(parseAmountToCents("1000")).toBe(100000);
    expect(parseAmountToCents("1.000,50")).toBe(100050);
    expect(parseAmountToCents("1,000.50")).toBe(100050);
    expect(parseAmountToCents("2180,5")).toBe(218050);
    expect(parseAmountToCents("1.000")).toBe(100000);
  });
  it("rejects empty, zero and 3+ decimals", () => {
    expect(parseAmountToCents("")).toBeNull();
    expect(parseAmountToCents("0")).toBeNull();
    expect(parseAmountToCents("12,345")).toBe(1234500);
    expect(parseAmountToCents("1,2345")).toBeNull();
  });
});

describe("splits", () => {
  it("equal split sums to the total", () => {
    expect(splitEqual(100000, 3)).toEqual([33334, 33333, 33333]);
    expect(splitEqual(218000, 4)).toEqual([54500, 54500, 54500, 54500]);
  });
  it("first-percent split sums to the total", () => {
    const s = splitFirstPercent(100000, 3, 50);
    expect(s).toEqual([50000, 25000, 25000]);
    expect(splitFirstPercent(10001, 4, 33).reduce((a, b) => a + b, 0)).toBe(10001);
    expect(splitFirstPercent(5000, 1, 40)).toEqual([5000]);
  });
});
