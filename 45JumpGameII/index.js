// Not proud of this one:
// TODO: Do it again, better.

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums){
  if (!nums || nums.length <= 1) return 0;

  if (nums[0] >= nums.length - 1){
    return 1;
  }

  let jumps = 0;
  let candidates = [];

  for (let position = 0; position < nums.length; position = candidates[0].index) {
    candidates = [];
    let jumpDistance = nums[position];

    for (let i = 0; i < jumpDistance; i++){
      const candidate = {};

      candidate.index = position + i + 1;
      candidate.value = nums[position + i + 1];
      // -2 magic number baby
      candidate.missingToGoal = (nums.length - 2 - candidate.value - position - i);

      candidates.push(candidate);
    }

    candidates.sort((a, b) => {
      if (a.value !== b.value) {
        return a.missingToGoal - b.missingToGoal;
      } else {
        return b.index - a.index;
      }
    });


    // Jump to new position
    position = candidates[0].index;

    ++jumps;

    // check for finish line
    if (candidates[0].missingToGoal <= 0){
      ++jumps;
      break;
    }
  }

  return jumps;
};
