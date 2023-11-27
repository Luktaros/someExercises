/**
 * @param {number[]} nums
 * @return {number[]}
 */
function buildArray(nums) {
  const result = new Array(nums.length);

  nums.forEach((num, index) => {
    result.splice(index, 1, nums[num]);
  })

  return result;
};
