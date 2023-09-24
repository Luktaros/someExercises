/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
  let timeOutId = 0;

  return function(...args) {
    clearTimeout(timeOutId);

    timeOutId = setTimeout(()=>{
      return fn(...args);
    },t)
  }
};
