/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++)
  {
    if(Math.abs(arr[i]).toString().length >= 1 && Math.abs(arr[i]).toString().length <= 3)
    {
      arr2.push(Math.abs(arr[i]).toString().length);
    }
    else
    {
      arr2.push(4);
    }
  }
  return arr2;
};
