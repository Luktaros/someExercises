/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * I'm too lazy right now for a proper solution
 */
function twoSum(nums, target) {
  const numsLength = nums.length;

  for(let i = 0; i < numsLength; i++){
    const firstIndexValueCandite = nums[i];

    for(let k = i + 1; k < numsLength; k++){
      const secondIndexValueCanditate = nums[k];

      if (firstIndexValueCandite + secondIndexValueCanditate === target){
        return [i, k];
      }
    }
  }
};
