/**
 * Convert number to words in Indian format
 * Example: 2000000 -> "Twenty Lakh Rupees"
 */
export function numberToWords(num: number): string {
  if (isNaN(num) || !isFinite(num) || num < 0) {
    return "Zero Rupees";
  }

  if (num === 0) {
    return "Zero Rupees";
  }

  const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  const convertHundreds = (n: number): string => {
    let result = "";
    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }
    if (n >= 20) {
      result += tens[Math.floor(n / 10)] + " ";
      n %= 10;
    }
    if (n > 0) {
      result += ones[n] + " ";
    }
    return result.trim();
  };

  let result = "";
  const numStr = Math.floor(num).toString();
  const numLength = numStr.length;

  // Handle Crores
  if (numLength > 7) {
    const crores = Math.floor(num / 10000000);
    if (crores > 0) {
      result += convertHundreds(crores) + " Crore ";
    }
    num %= 10000000;
  }

  // Handle Lakhs
  if (numLength > 5 || num >= 100000) {
    const lakhs = Math.floor(num / 100000);
    if (lakhs > 0) {
      result += convertHundreds(lakhs) + " Lakh ";
    }
    num %= 100000;
  }

  // Handle Thousands
  if (numLength > 3 || num >= 1000) {
    const thousands = Math.floor(num / 1000);
    if (thousands > 0) {
      result += convertHundreds(thousands) + " Thousand ";
    }
    num %= 1000;
  }

  // Handle Hundreds, Tens, and Ones
  if (num > 0) {
    result += convertHundreds(num);
  }

  result = result.trim();
  
  // Add "Rupees" suffix
  if (result) {
    result += " Rupees";
  } else {
    result = "Zero Rupees";
  }

  return result;
}

