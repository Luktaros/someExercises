class SubrectangleQueries {
  /**
  * @param {number[][]} rectangle
  */
  constructor (rectangle){
    this.rectangle = rectangle;
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @param {number} newValue
   * @return {void}
  */
  updateSubrectangle(row1, col1, row2, col2, newValue) {
    for(let y = row1; y <= row2; y++){
      for(let x = col1; x <= col2; x++){
        this.rectangle[y][x] = newValue;
      }
    }
  };

  /**
  * @param {number} row
  * @param {number} col
  * @return {number}
  */
  getValue(row, col) {
    return this.rectangle[row][col];
  };
}
