/**
 * @param {string} n
 * @return {number}
 */
function minPartitions(n) {
  let result = 0;

  for (const digit of n) {
    if (digit > result){
      result = digit;
    }
  }

  return result;
};
