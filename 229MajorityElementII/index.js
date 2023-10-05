/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  const result = [];
  const celling = nums.length / 3;
  const map = new Map();

  for(const num of nums){
    if (map.has(num)){
      const value = map.get(num);
      value.size += 1;

      if (value.size > celling && !value.added){
        value.added = true;
        result.push(num);
      }
      map.set(num, value);
    } else {

      map.set(num, {size: 1, added: false});
    }
  }

  if (nums.length < 3){
    for (const key of map.keys()){
      if (!result.includes(key)){
        result.push(key)
      }
    }
  }

  return result;
};
