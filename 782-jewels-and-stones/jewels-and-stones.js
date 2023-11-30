/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  let result = 0;

  for (const stone of stones){
    if (jewels.includes(stone)){
      result++;
    }
  }

  return result;
};
