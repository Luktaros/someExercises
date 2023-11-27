/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  let result = 0;

  operations.forEach(operation => {
    switch (operation) {
      case '++X':
        result++;
        break;
      case 'X++':
        result++;
        break;
      case '--X':
        result--;
        break;
      case 'X--':
        result--;
        break;
    }
  })

  return result;
};
