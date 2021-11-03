const numberToWords = (num: number): string => {
  // check the type is number or not
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }

  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  if (num === 0) {
    return "Zero";
  }
  if (num < 20) {
    return units[num];
  }

  if (num < 100) {
    return tens[Math.floor(num / 10)] + " " + units[num % 10];
  }
  if (num < 1000) {
    return (
      units[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100)
    );
  }
  if (num < 100000) {
    return (
      numberToWords(Math.floor(num / 1000)) +
      " Thousand " +
      numberToWords(num % 1000)
    );
  }
  if (num < 10000000) {
    return (
      numberToWords(Math.floor(num / 100000)) +
      " Lakh " +
      numberToWords(num % 100000)
    );
  }
  if (num < 1000000000) {
    return (
      numberToWords(Math.floor(num / 10000000)) +
      " Crore " +
      numberToWords(num % 10000000)
    );
  }

  return "";
};
/**
 * Convert the number into Indian rupees
 * @param num {number} Number to be converted
 * @returns {string} Indian Rupees
 */
const numberTwoRupee = (num: number): string => {
  let output = numberToWords(num).trim();
  if (output) {
    if (num !== 0) {
      // remove last zero
      output = output.replace(/\sZero$/, "");
    }
    // add rupee
    output = output + " " + "Rupee";
    // Adding "S"
    if (num > 1) {
      output += "s";
    }
    // remove extra space
    output = output.replace(/\s\s+/g, " ");
  }
  return output;
};

export default numberTwoRupee;
