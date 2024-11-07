/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let a = Math.abs(n).toString();
  let sum = 0;
  for (let i = 0; i < a.length; i++)
  {
      sum += parseInt(a[i])
  }
  return sum
};
