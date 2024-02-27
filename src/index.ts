const numberToWords = (num: number): string => {
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
 * @param currencyFormat {string} Currency format including currency code
 * @returns {string} Indian Rupees with currency code
 */
const numberToRupees = (num: number, currencyFormat: string = "Rupee{s} INR"): string => {
  let output = numberToWords(num).trim();
  if (output) {
    if (num !== 0) {
      output = output.replace(/\sZero$/, "");
    }
    output = output + " " + currencyFormat.replace("{s}", num > 1 ? "s" : "");
    output = output.replace(/\s+/g, " ");
  }
  return output;
};

export default numberToRupees;
