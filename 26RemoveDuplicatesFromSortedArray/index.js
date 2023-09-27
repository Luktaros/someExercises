/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let result = 0;
  const numsSet = new Set(nums);
  
  result = numsSet.length;

  nums.splice(0, nums.length);
  nums.push(...numsSet);

  return result;
};
