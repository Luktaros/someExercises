/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join (arr1, arr2) {
  let result = new Map();

  for (const item of arr1) {
    result.set(item.id, item);
  }

  for (const item of arr2){
    if (result.has(item.id)){
      for (const key in item) {
        result.get(item.id)[key] = item[key];
      }
    } else {
      result.set(item.id, item);
    }
  }

  return [...result.values()].sort((a, b) => {
    return a.id - b.id
  })
};
