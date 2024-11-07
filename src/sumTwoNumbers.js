/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let a = firstNumber.toString().replace(/\s+/g,'')
  let b = secondNumber.toString().replace(/\s+/g,'')
  return parseFloat(a) + parseFloat(b);
};
