import numberTwoRupee from "../src";

// test the big numbers
describe("numberTwoRupee - Advance", () => {
  // two lakh
  it("should return 'two lakh rupees'", () => {
    expect(numberTwoRupee(200000).toLowerCase()).toBe("two lakh rupees");
  });

  // two crore
  it("should return 'twenty crore rupees'", () => {
    expect(numberTwoRupee(200000000).toLowerCase()).toBe("twenty crore rupees");
  });

  // two crore and two lakh
  it("should return 'two crore twenty thousand rupees'", () => {
    expect(numberTwoRupee(20020000).toLowerCase()).toBe(
      "two crore twenty thousand rupees"
    );
  });

  // two crore and two lakh and two thousand
  it("should return 'two crore twenty thousand twenty rupees'", () => {
    expect(numberTwoRupee(20020020).toLowerCase()).toBe(
      "two crore twenty thousand twenty rupees"
    );
  });

  // two crore and two lakh and two thousand and two hundred
  it("should return 'two crore two lakh two hundred rupees'", () => {
    expect(numberTwoRupee(20200200).toLowerCase()).toBe(
      "two crore two lakh two hundred rupees"
    );
  });
//
  // two crore and two lakh and two thousand and two hundred and two
  it("should return 'two crore two lakh two hundred two rupees'", () => {
    expect(numberTwoRupee(20200202).toLowerCase()).toBe(
      "two crore two lakh two hundred two rupees"
    );
  });

  // 7234257
  it("should return 'seven crore two lakh three thousand four hundred fifty seven rupees'", () => {
    expect(numberTwoRupee(72342570).toLowerCase()).toBe(
      "seven crore twenty three lakh forty two thousand five hundred seventy rupees"
    );
  });
  //123456789
  it("should return 'twelve crore thirty four lakh fifty six thousand seven hundred eighty nine rupees'", () => {
    expect(numberTwoRupee(123456789).toLowerCase()).toBe(
      "twelve crore thirty four lakh fifty six thousand seven hundred eighty nine rupees"
    );
  });
});
