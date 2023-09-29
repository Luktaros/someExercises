/**
 * @param {number[]} nums
 * @return {number}
 */
function isMonotonic(nums) {
  let result = true;
  let type = '';

  for (const [i, num] of nums.entries()){
    let diff = num - nums[i + 1];

    if (type === ''){
      if (diff > 0 ){
      type = 'decresing';
      }

      if (diff < 0){
      type = 'increasing';
      }
    }

    if (type === 'decresing' && diff < 0){
      result = false;
      break;
    }

    if (type === 'increasing' && diff > 0){
      result = false;
      break;
    }
  }
  
  return result;
};
