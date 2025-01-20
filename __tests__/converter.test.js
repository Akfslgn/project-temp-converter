import { describe, it, expect, test } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../src/converter.js";

describe("celsiusToFahrenheit tests", () => {
  // 0C should be 32F
  it("should convert 0C to 32F", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });
  // 100C should 212F
  it("should convert 100C to 212F", () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });
  // "25"C should be 77
  it('should convert "25"C as string to 77F', () => {
    expect(celsiusToFahrenheit(25)).toBe(77);
  });
  // -40C should be -40F
  it("should convert negative -40C to -40F", () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });
});

describe("fahrenheitToCelsius tests", () => {
  // 32F should be 0C
  it("should convert 32F to 0C", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
  // 212F should be 100C
  it("should convert 212F to 100C", () => {
    expect(fahrenheitToCelsius(212)).toBe(100);
  });
  // "77"F should be 25C
  it('should convert "77"F as string to 25C', () => {
    expect(fahrenheitToCelsius(77)).toBe(25);
  });
  // -40F should be -40C
  it("should convert negative -40F to -40C", () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40);
  });
});
