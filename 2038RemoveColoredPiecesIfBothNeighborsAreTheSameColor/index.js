/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  let A = 0;
  let B = 0;
  let tempA = 0;
  let tempB = 0;

  for (let color of colors){
    if (color === 'A'){
      tempB = 0;
      if (tempA === 2){
        ++A;
        continue;
      } else {
        ++tempA;
        continue;
      }
    } else {
      tempA = 0;
      if (tempB === 2){
        ++B;
        continue;
      } else {
        ++tempB;
        continue;
      }
    }
  }

  if (A <= B){
    return false;
  }

  return true;
};
