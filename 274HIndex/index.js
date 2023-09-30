// TODO: Better documentation
/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  // Actually, this is the target.
  let hIndex = 1;
  let cited = 0;


  for(let i = 0; i < citations.length; i++){
    if (citations[i] >= hIndex){
      cited++;
    }

    if (cited >= hIndex){
      i = -1;
      cited = 0;
      ++hIndex;
      continue;
    }
  }

  // Reduce value 1 one, to eliminate the target compensation
  --hIndex;

  return hIndex;
};
