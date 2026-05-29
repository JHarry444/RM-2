import { describe, expect, it } from "vitest";

// describe -> creates a test suite (suite is a set of related test cases)
// it -> creates a test case (test case is a single unit of testing, it should test a specific functionality or behavior of the code being tested)
describe("Demo test", () => {
    it("should pass", () => {
        expect(1 + 1).toBe(2);
    });

    it("should fail", () => {
        expect(1 + 1).toBe(3);
    });
});