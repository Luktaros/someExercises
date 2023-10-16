/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const triangle = [];

  for (let i = 0; i <= rowIndex; i++) {
    const row = new Array(1 + i);

    for (let j = 0; j < row.length; j++) {
      if (j === 0) row.splice(j, 1, 1)
      else if (j === row.length - 1) row.splice(j, 1, 1);
      else {
        const previousRow = triangle[i - 1];
        const leftValue = previousRow[j - 1];
        const rigthValue = previousRow[j];
        const newValue = leftValue + rigthValue;
        row.splice(j, 1, newValue);
      }
    }
    triangle.push(row);
  }

  return triangle[rowIndex]
};
