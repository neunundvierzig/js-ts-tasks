/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2)
{
  let len = 0;
  let sub = "";
  let arr = [];

  for (let i = 0; i <= str1.length; i++)
  {
    arr.push(new Array(str2.length).fill(0));
  }
  for (let i = 1; i <= arr.length; i++)
  {
    for (let j = 1; j <= arr[0].length; j++)
    {
      if (str1[i - 1] === str2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
        if (arr[i][j] > len)
        {
          len = arr[i][j];
          sub = str1.slice(i - len, i);
        }
      }
    }
  }
  return sub;
};
