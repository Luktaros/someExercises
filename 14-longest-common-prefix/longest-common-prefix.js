/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let wordLength = strs[0].length;
  let strsLength = strs.length;
  let currentCandidate = '';
  let endOfPrefix = false;

  for(let k = 0; k <= wordLength; k++){
    for(let j = 1; j < strsLength; j++){
      if (strs[0][k] !== strs[j][k]){
        endOfPrefix = true;
        break;
      }
    }

    if (!endOfPrefix){
      if (strs[0][k]){
        currentCandidate += strs[0][k];
      }
    } else {
      break;
    }
  }


  return currentCandidate;
};
