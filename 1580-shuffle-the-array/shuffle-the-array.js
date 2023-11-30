/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  const numsLength = nums.length;

  for(let i = n, j = 1; i < numsLength - 1; i++, j += 2){
    nums.splice(j, 0, nums[i]);
    nums.splice(i + 1, 1);
  }

  return nums;
};
