/**
 * Not my code, approach 4 from the editorial.   
 * TODO: Avange my honor, with this one
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
  if (nums.length < 3) {
    return false;
  }

  let stk = [];
  let min_array = new Array(nums.length);
  min_array[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    min_array[i] = Math.min(min_array[i - 1], nums[i]);
  }

  for (let j = nums.length - 1; j > 0; j--) {
    if (nums[j] <= min_array[j]) {
      continue;
    }

    while (stk.length > 0 && stk[stk.length - 1] <= min_array[j]) {
      stk.pop();
    }

    if (stk.length > 0 && stk[stk.length - 1] < nums[j]) {
      return true;
    }
    
    stk.push(nums[j]);
  }

  return false;
}
