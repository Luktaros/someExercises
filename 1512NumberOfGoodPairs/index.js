
/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  const map = new Map();
  let result = 0;

  for (const num of nums){
    if (map.has(num)){
      let value = map.get(num);
      ++value;
      map.set(num, value);
    } else {
       map.set(num, 1);
    }
  }

  map.forEach((a)=>{
    if (a > 1){
      for (let i = a - 1; i > 0; i--){
       result += i;
      }
    }
  })

  return result;
};
