/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let array = []
  for(let i = 0; i < arr.length; i++)
  {
    array.push(arr[i])
    if(Math.abs(arr[i]) % 2 !== 0)
    {
      array.push(100);
    }
  }
  return array;
};
