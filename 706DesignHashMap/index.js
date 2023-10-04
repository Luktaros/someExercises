class MyHashMap{
  constructor(){
    this.storage = {};
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
      this.storage[key] = value;
  };

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (key in this.storage){
        return this.storage[key];
    }
    return -1;
  };

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (this.storage){
      delete this.storage[key];
    }
  };
};
