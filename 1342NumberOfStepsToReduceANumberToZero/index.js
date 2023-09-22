/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps (num) {
  let numCopy = num;
  let numberOfOperations = 0;

  while (numCopy !== 0){
    if (numCopy % 2 === 0){
      numCopy /= 2;
      ++numberOfOperations;
    } else {
      --numCopy;
      ++numberOfOperations;
    }  
  }

  return numberOfOperations;
};


1342NumberOfStepsToReduceANumberToZero
