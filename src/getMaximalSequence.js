/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr)
{
  let res = 1;
  let maxres = 1;
  let element = arr[0];
  let lastElement = arr[0];
  let arrr = [];
  for (let i = 1; i < arr.length; i++)
  {
    if (arr[i] === lastElement)
    {
      res++;
    }
    else
    {
      res = 1;
    }
    if (res > maxres)
    {
      maxres = res;
      element = arr[i];
    }
    lastElement = arr[i];
  }

  for (let k = 0; k < maxres; k++)
  {
    arrr.push(element);
  }
  return arrr;
};
