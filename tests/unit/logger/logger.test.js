import { describe, it, expect, vi } from "vitest";
import { logMessage } from "../../../src/logger";

describe("logMessage()", () => {
  it("should log input messages with date", () => {
    const logger = vi.fn();
    const msg = "Learning js testing";
    logMessage(msg, logger);
    expect(logger).toHaveBeenCalledExactlyOnceWith(msg);
  });

  it("should throw if second arg is not a function", () => {
    const resultFn = () => logMessage("javascript", "testing");
    expect(resultFn).toThrow();
  });

  it.each([[""], [[]], [{}], [null], [undefined]])("should handle falsey values", (msg) => {
    expect(logMessage(msg)).toBeFalsy();
  });
});
