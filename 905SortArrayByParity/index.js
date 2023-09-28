/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  const evens = new Map();
  const odds = new Map();

  for (const [i, num] of nums.entries()){
    if (num % 2 === 0){
      evens.set(i, num);
    } else {
      odds.set(i, num);
    }
  }

  return [...evens.values(), ...odds.values()];
};
