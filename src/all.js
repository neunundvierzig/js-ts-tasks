/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray)
{
  const promisesAll = new Promise((resolve, reject) =>
  {
    const results = [];
    for (let i = 0; i < promisesArray.length; i++)
    {
      promisesArray[i]
        .then(result =>
        {
          results[i] = result;
          results.length === promisesArray.length ? resolve(results) : null;
        })
        .catch(error =>
        {
          reject(error);
        });
    }
  });
  return promisesAll;
};
