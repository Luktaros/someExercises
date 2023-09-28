
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let result = false;
  let goalPosition = nums.length - 1;
  let validPlaceBeforeGoal = nums.length - 2;
  let distance = 0;

  while (true){
    if (goalPosition === 0) {
      result = true;
      break;
    };

    if (validPlaceBeforeGoal < 0){
    break;
    }

    distance = goalPosition - validPlaceBeforeGoal;

    if (nums[validPlaceBeforeGoal] >= distance){
      goalPosition = validPlaceBeforeGoal;
    }

    --validPlaceBeforeGoal;
  }

  return result;
};

//Not proud of this one...
