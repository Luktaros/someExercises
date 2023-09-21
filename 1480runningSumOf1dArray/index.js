/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum (nums) {
  const result = [];
  let valueToAddNextToArray = 0;

  nums.forEach( number => {
    valueToAddNextToArray += number;
    result.push(valueToAddNextToArray);
  })

  return result;
};
