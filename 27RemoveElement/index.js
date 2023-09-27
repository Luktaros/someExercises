/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let result = 0;

  for (const [i, num] of nums.entries()){
    if(num === val){
      nums.splice(i , 1, undefined);
    } else {
      ++result;
    }
  }

  nums.sort((a,b) => { a - b});

  return result;
};
