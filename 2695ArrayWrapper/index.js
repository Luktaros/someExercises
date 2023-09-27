
/**
 * @param {number[]} nums
 * @return {void}
*/
class ArrayWrapper{
  #arrayCopy = [];
  #sumOfNums = 0;

  constructor(nums) {
    let result = 0;
    this.#arrayCopy = (nums);

    for (const number of nums) {
      result += number;
    }

    this.#sumOfNums = result;
  }

  /**
   * @return {number}
  */
  valueOf(){
    return this.#sumOfNums;
  }

  /**
   * @return {string}
  */
  toString(){
    return `[${this.#arrayCopy}]`;
  }

}
