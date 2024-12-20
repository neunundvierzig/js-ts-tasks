/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  function funcDel(func, del)
  {
    let timer = null;
    return function (...args)
    {
      if (timer === null)
      {
        func(...args);
        timer = setTimeout(() =>
        {
          timer = null;
        }, del);
      }
    };
  }
  return funcDel(fn, delay);
};
