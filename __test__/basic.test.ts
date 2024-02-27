import numberTwoRupee from "../src";


describe("numberToRupeesWithCode", () => {
  it("should return 'two rupees INR' for input 2", () => {
    expect(numberTwoRupee(2)).toBe("Two Rupees INR");
  });

  it("should return 'one rupee INR' for input 1", () => {
    expect(numberTwoRupee(1)).toBe("One Rupee INR");
  });

});

describe("numberTwoRupee - Basic", () => {
  it("should return 'two rupees'", () => {
    expect(numberTwoRupee(2).toLowerCase()).toBe("two rupees");
  });

  it("should return 'one rupee'", () => {
    expect(numberTwoRupee(1).toLowerCase()).toBe("one rupee");
  });

  it("should return 'two rupees'", () => {
    expect(numberTwoRupee(2).toLowerCase()).toBe("two rupees");
  });

  it("should return 'three rupees'", () => {
    expect(numberTwoRupee(3).toLowerCase()).toBe("three rupees");
  });

  it("should return 'four rupees'", () => {
    expect(numberTwoRupee(4).toLowerCase()).toBe("four rupees");
  });

  it("should return 'five rupees'", () => {
    expect(numberTwoRupee(5).toLowerCase()).toBe("five rupees");
  });

  it("should return 'six rupees'", () => {
    expect(numberTwoRupee(6).toLowerCase()).toBe("six rupees");
  });

  it("should return 'seven rupees'", () => {
    expect(numberTwoRupee(7).toLowerCase()).toBe("seven rupees");
  });

  it("should return 'eight rupees'", () => {
    expect(numberTwoRupee(8).toLowerCase()).toBe("eight rupees");
  });

  it("should return 'nine rupees'", () => {
    expect(numberTwoRupee(9).toLowerCase()).toBe("nine rupees");
  });

  it("should return 'ten rupees'", () => {
    expect(numberTwoRupee(10).toLowerCase()).toBe("ten rupees");
  });

  it("should return 'eleven rupees'", () => {
    expect(numberTwoRupee(11).toLowerCase()).toBe("eleven rupees");
  });

  it("should return 'twelve rupees'", () => {
    expect(numberTwoRupee(12).toLowerCase()).toBe("twelve rupees");
  });

  // 13
  it("should return 'thirteen rupees'", () => {
    expect(numberTwoRupee(13).toLowerCase()).toBe("thirteen rupees");
  });
  // 14
  it("should return 'fourteen rupees'", () => {
    expect(numberTwoRupee(14).toLowerCase()).toBe("fourteen rupees");
  });
  // 15
  it("should return 'fifteen rupees'", () => {
    expect(numberTwoRupee(15).toLowerCase()).toBe("fifteen rupees");
  });
  // 16
  it("should return 'sixteen rupees'", () => {
    expect(numberTwoRupee(16).toLowerCase()).toBe("sixteen rupees");
  });
  // 17
  it("should return 'seventeen rupees'", () => {
    expect(numberTwoRupee(17).toLowerCase()).toBe("seventeen rupees");
  });
  // 18
  it("should return 'eighteen rupees'", () => {
    expect(numberTwoRupee(18).toLowerCase()).toBe("eighteen rupees");
  });
  // 19
  it("should return 'nineteen rupees'", () => {
    expect(numberTwoRupee(19).toLowerCase()).toBe("nineteen rupees");
  });
  // 20
  it("should return 'twenty rupees'", () => {
    expect(numberTwoRupee(20).toLowerCase()).toBe("twenty rupees");
  });
  //30
  it("should return 'thirty rupees'", () => {
    expect(numberTwoRupee(30).toLowerCase()).toBe("thirty rupees");
  });
  //40
  it("should return 'forty rupees'", () => {
    expect(numberTwoRupee(40).toLowerCase()).toBe("forty rupees");
  });
  //50
  it("should return 'fifty rupees'", () => {
    expect(numberTwoRupee(50).toLowerCase()).toBe("fifty rupees");
  });
  //60
  it("should return 'sixty rupees'", () => {
    expect(numberTwoRupee(60).toLowerCase()).toBe("sixty rupees");
  });
  //70
  it("should return 'seventy rupees'", () => {
    expect(numberTwoRupee(70).toLowerCase()).toBe("seventy rupees");
  });

  //80
  it("should return 'eighty rupees'", () => {
    expect(numberTwoRupee(80).toLowerCase()).toBe("eighty rupees");
  });

  //90
  it("should return 'ninety rupees'", () => {
    expect(numberTwoRupee(90).toLowerCase()).toBe("ninety rupees");
  });

  //100
  it("should return 'one hundred rupees'", () => {
    expect(numberTwoRupee(100).toLowerCase()).toBe("one hundred rupees");
  });
});
