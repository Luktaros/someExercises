/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++){
    let beforeSpot = 1;
    let afterSpot = 1;
    // get product of nums < i
    for(let j = 0; j < i; j++){
      if (j + 1 <= i){
        beforeSpot *= nums[j];
      }
    }
    // get product of nums > i
    for(let k = i + 1; k < nums.length; k++){
      if (k + 1 <= nums.length){
        afterSpot *= nums[k];
      }
    }
    // get product of results
    result.push(beforeSpot * afterSpot);
  }

  return result;
};
