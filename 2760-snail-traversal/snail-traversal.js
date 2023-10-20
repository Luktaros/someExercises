
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  const result = [];

  for (let i = 0; i < rowsCount; i++) {
    result.push([]);
  }

  let currentRow = 0;
  let direction = 'down';

  for (let i = 0; i < this.length; i++) {
    const number = this[i];

    if (direction === 'down'){
      result[currentRow].push(number);
      currentRow++;

      if (currentRow === rowsCount){
        direction = 'up';
      }
    } else if ( direction === 'up' ){
      currentRow--;
      result[currentRow].push(number);

      if (currentRow === 0){
        direction = 'down';
      }
    }
  }

  return result
}
