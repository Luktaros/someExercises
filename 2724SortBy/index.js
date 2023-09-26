//I'm so ashame of this one...

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
  let result = [];
  let lowestIndex = 0;
  let highestIndex = 0;

  // find lowest and hightest index
  for (let i = 0; i < arr.length; i++){
    const fnResult = fn(arr[i]);
    if (fnResult < lowestIndex){
      lowestIndex = fnResult;
    }

    if (fnResult > highestIndex){
      highestIndex = fnResult;
    }
  }

  // create empty array as big as needed...
  result = Array(-lowestIndex + highestIndex);

  for (let i = 0; i < arr.length; i++) {
    // find position
    let position = fn(arr[i]);

    // adjust position
    if (lowestIndex < 0){
      position += -lowestIndex;
    }else if(lowestIndex > 0){
      --position
    }

    // put element where it should go...
    result.splice(position, 1, arr[i]);
  }

  // do this monstruosity, I mean, clean array of undefined values...
  result = result.filter((value)=>{
    if(value === undefined) {
      return false;
    } else {
      return true;
    }
  });

  // return your shame..
  return result
};
