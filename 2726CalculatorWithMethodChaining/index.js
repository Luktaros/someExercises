class Calculator {
  #currentValue = 0;

  /**
   * @param {number} value
   */
  constructor(value) {
    this.#currentValue = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    return new Calculator(this.#currentValue + value);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    return new Calculator(this.#currentValue - value);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    return new Calculator(this.#currentValue * value);
  }

  /**
   * @param {number} value
   * @return {Calculator}
  */
  divide(value) {
    if (value === 0){
      throw 'Division by zero is not allowed';
    }

    return new Calculator(this.#currentValue / value);
  }

  /**
   * @param {number} value
   * @return {Calculator}
  */
 power(value) {
   return new Calculator(this.#currentValue ** value);
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.#currentValue;
  }
}
