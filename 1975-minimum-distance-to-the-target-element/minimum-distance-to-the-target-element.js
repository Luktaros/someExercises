/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
function getMinDistance(nums, target, start) {
  const listOfTargets = [];

  nums.forEach((value, index) => {
    if (value === target){
      listOfTargets.push([target, index]);
    }
  })
  
  let bestIndex = Math.abs(listOfTargets[0][1] - start);

  listOfTargets.forEach(value => {
    const candidate = Math.abs(value[1] - start);

    if (candidate < bestIndex){
      bestIndex = candidate;
    }
  })

  return bestIndex;
};