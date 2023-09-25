/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
  const result = [];
  let chunk = [];
  let limit = 0;

  if (arr.length < 1){
    return result;
  }

  for(let i = 0; i <= arr.length; ++i){
    if (limit < size){
      if (i === arr.length){
          result.push(chunk);
      } else {
        chunk.push(arr[i]);
        ++limit;
      }
    } else {
      result.push(chunk);
      chunk = [];
      limit = 0;

      if (limit < size){
        chunk.push(arr[i]);
        ++limit;
      }
    }
  }

  return result;
};
