/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item) && n > 0){
      const deepArray = flat(item, (n - 1));
      for (const deepItem of deepArray) {
        result.push(deepItem);
      }
    } else {
      result.push(item);
    }
  }


  return result
};
