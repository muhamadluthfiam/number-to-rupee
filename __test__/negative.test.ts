import numberTwoRupee from "../src";

describe("Testing the negative case", () => {
  // test the non number input
  it("should be thrown error when non number is given", () => {
    //@ts-ignore
    expect(() => numberTwoRupee("abc")).toThrow("Input must be a number");
  });

  // undefined
  it("should be thrown error when undefined is given", () => {
    //@ts-ignore
    expect(() => numberTwoRupee(undefined)).toThrow("Input must be a number");
  });

  // null
  it("should be thrown error when null is given", () => {
    //@ts-ignore
    expect(() => numberTwoRupee(null)).toThrow("Input must be a number");
  });
});
