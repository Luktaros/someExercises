/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  let valueToRead = [];
  let counter = k;

  while (counter > 0){
    if (nums.length === 0){
      nums.unshift(...valueToRead);
      valueToRead = [];
    }

    valueToRead.unshift(nums.pop());
    --counter;
  }

  nums.unshift(...valueToRead);
};
