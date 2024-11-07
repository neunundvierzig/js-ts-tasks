/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;
  let s = parseInt(start);
  let e = parseInt(end);
  if(s < e) {
    for (let i = s; i <= e; i++) {
      sum += i;
    }
    return sum;
  }
  else
  {
    for (let i = s; i >= e; i--) {
      sum += i;
    }
    return sum;
  }
};
