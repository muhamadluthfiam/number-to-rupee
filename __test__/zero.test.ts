import numberTwoRupee from "../src";
// test the number with zero ending number

describe("number with zero ending number", () => {
    // zero
  it("should return zero", () => {
    expect(numberTwoRupee(0).toLowerCase()).toBe("zero rupee");
  });
  //1
    it("should return one", () => {
        expect(numberTwoRupee(1).toLowerCase()).toBe("one rupee");
    });

  // 10
  it("should return ten", () => {
    expect(numberTwoRupee(10).toLowerCase()).toBe("ten rupees");
  });

  // 20
  it("should return twenty", () => {
    expect(numberTwoRupee(20).toLowerCase()).toBe("twenty rupees");
  });

  // 30
  it("should return thirty", () => {
    expect(numberTwoRupee(30).toLowerCase()).toBe("thirty rupees");
  });

  // 40
  it("should return forty", () => {
    expect(numberTwoRupee(40).toLowerCase()).toBe("forty rupees");
  });

  // 50
  it("should return fifty", () => {
    expect(numberTwoRupee(50).toLowerCase()).toBe("fifty rupees");
  });

  // 60
  it("should return sixty", () => {
    expect(numberTwoRupee(60).toLowerCase()).toBe("sixty rupees");
  });

  // 70
  it("should return seventy", () => {
    expect(numberTwoRupee(70).toLowerCase()).toBe("seventy rupees");
  });

  // 80
  it("should return eighty", () => {
    expect(numberTwoRupee(80).toLowerCase()).toBe("eighty rupees");
  });

  // 90
  it("should return ninety", () => {
    expect(numberTwoRupee(90).toLowerCase()).toBe("ninety rupees");
  });

  // 100
  it("should return one hundred", () => {
    expect(numberTwoRupee(100).toLowerCase()).toBe("one hundred rupees");
  });

  // 1000
  it("should return one thousand", () => {
    expect(numberTwoRupee(1000).toLowerCase()).toBe("one thousand rupees");
  });

  // 10000
  it("should return ten thousand", () => {
    expect(numberTwoRupee(10000).toLowerCase()).toBe("ten thousand rupees");
  });

  // 100000
  it("should return one lakh", () => {
    expect(numberTwoRupee(100000).toLowerCase()).toBe("one lakh rupees");
  });

  // 1000000
  it("should return ten lakh", () => {
    expect(numberTwoRupee(1000000).toLowerCase()).toBe("ten lakh rupees");
  });

  // 10000000
  it("should return one crore", () => {
    expect(numberTwoRupee(10000000).toLowerCase()).toBe("one crore rupees");
  });

  // 100000000
  it("should return ten crore", () => {
    expect(numberTwoRupee(100000000).toLowerCase()).toBe("ten crore rupees");
  });

});
