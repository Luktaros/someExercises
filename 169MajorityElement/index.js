/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = new Map();

  for (const num of nums){
    if (map.has(num)){
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let biggestValue = 0;
  let result = 0;

  for (const [key, value] of map.entries()){
    if (value > biggestValue){
      biggestValue = value;
      result = key;
    }
  }

  return result;
};
