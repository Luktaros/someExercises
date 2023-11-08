/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfSquares(nums) {
  const numsLength = nums.length;
  let result = 0;

  for(let i = 0; i < numsLength; i++){
    const testedIndex = i + 1;


    if (numsLength % testedIndex === 0){
      result += nums[i]**2;
    }
  }

  return result;
};
