import index from "../src";


describe("numberToRupeesWithCode", () => {
  it("should return 'two rupees INR' for input 2", () => {
    expect(index.numberToRupeesWithCode(2)).toBe("Two Rupees INR");
  });

  it("should return 'one rupee INR' for input 1", () => {
    expect(index.numberToRupeesWithCode(1)).toBe("One Rupee INR");
  });

});

describe("index.numberTwoRupee - Basic", () => {
  it("should return 'two rupees'", () => {
    expect(index.numberTwoRupee(2).toLowerCase()).toBe("two rupees");
  });

  it("should return 'one rupee'", () => {
    expect(index.numberTwoRupee(1).toLowerCase()).toBe("one rupee");
  });

  it("should return 'two rupees'", () => {
    expect(index.numberTwoRupee(2).toLowerCase()).toBe("two rupees");
  });

  it("should return 'three rupees'", () => {
    expect(index.numberTwoRupee(3).toLowerCase()).toBe("three rupees");
  });

  it("should return 'four rupees'", () => {
    expect(index.numberTwoRupee(4).toLowerCase()).toBe("four rupees");
  });

  it("should return 'five rupees'", () => {
    expect(index.numberTwoRupee(5).toLowerCase()).toBe("five rupees");
  });

  it("should return 'six rupees'", () => {
    expect(index.numberTwoRupee(6).toLowerCase()).toBe("six rupees");
  });

  it("should return 'seven rupees'", () => {
    expect(index.numberTwoRupee(7).toLowerCase()).toBe("seven rupees");
  });

  it("should return 'eight rupees'", () => {
    expect(index.numberTwoRupee(8).toLowerCase()).toBe("eight rupees");
  });

  it("should return 'nine rupees'", () => {
    expect(index.numberTwoRupee(9).toLowerCase()).toBe("nine rupees");
  });

  it("should return 'ten rupees'", () => {
    expect(index.numberTwoRupee(10).toLowerCase()).toBe("ten rupees");
  });

  it("should return 'eleven rupees'", () => {
    expect(index.numberTwoRupee(11).toLowerCase()).toBe("eleven rupees");
  });

  it("should return 'twelve rupees'", () => {
    expect(index.numberTwoRupee(12).toLowerCase()).toBe("twelve rupees");
  });

  // 13
  it("should return 'thirteen rupees'", () => {
    expect(index.numberTwoRupee(13).toLowerCase()).toBe("thirteen rupees");
  });
  // 14
  it("should return 'fourteen rupees'", () => {
    expect(index.numberTwoRupee(14).toLowerCase()).toBe("fourteen rupees");
  });
  // 15
  it("should return 'fifteen rupees'", () => {
    expect(index.numberTwoRupee(15).toLowerCase()).toBe("fifteen rupees");
  });
  // 16
  it("should return 'sixteen rupees'", () => {
    expect(index.numberTwoRupee(16).toLowerCase()).toBe("sixteen rupees");
  });
  // 17
  it("should return 'seventeen rupees'", () => {
    expect(index.numberTwoRupee(17).toLowerCase()).toBe("seventeen rupees");
  });
  // 18
  it("should return 'eighteen rupees'", () => {
    expect(index.numberTwoRupee(18).toLowerCase()).toBe("eighteen rupees");
  });
  // 19
  it("should return 'nineteen rupees'", () => {
    expect(index.numberTwoRupee(19).toLowerCase()).toBe("nineteen rupees");
  });
  // 20
  it("should return 'twenty rupees'", () => {
    expect(index.numberTwoRupee(20).toLowerCase()).toBe("twenty rupees");
  });
  //30
  it("should return 'thirty rupees'", () => {
    expect(index.numberTwoRupee(30).toLowerCase()).toBe("thirty rupees");
  });
  //40
  it("should return 'forty rupees'", () => {
    expect(index.numberTwoRupee(40).toLowerCase()).toBe("forty rupees");
  });
  //50
  it("should return 'fifty rupees'", () => {
    expect(index.numberTwoRupee(50).toLowerCase()).toBe("fifty rupees");
  });
  //60
  it("should return 'sixty rupees'", () => {
    expect(index.numberTwoRupee(60).toLowerCase()).toBe("sixty rupees");
  });
  //70
  it("should return 'seventy rupees'", () => {
    expect(index.numberTwoRupee(70).toLowerCase()).toBe("seventy rupees");
  });

  //80
  it("should return 'eighty rupees'", () => {
    expect(index.numberTwoRupee(80).toLowerCase()).toBe("eighty rupees");
  });

  //90
  it("should return 'ninety rupees'", () => {
    expect(index.numberTwoRupee(90).toLowerCase()).toBe("ninety rupees");
  });

  //100
  it("should return 'one hundred rupees'", () => {
    expect(index.numberTwoRupee(100).toLowerCase()).toBe("one hundred rupees");
  });
});
