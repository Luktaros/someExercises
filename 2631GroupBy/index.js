/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (result[key]){
      result[key].push(this[i])
    } else {
      result[key] = [];
      result[key].push(this[i])
    }
  }

  return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
