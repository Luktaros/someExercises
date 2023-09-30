class RandomizedSet {
  constructor() {
    this.storage = new Set();
  }

  /**
  * @param {number} val
  * @return {boolean}
  */
  insert(val) {
      if (this.storage.has(val)){
      return false;
      }
      this.storage.add(val);

      return true;
  };

  /**
  * @param {number} val
  * @return {boolean}
  */
  remove(val) {
      if (this.storage.has(val)){
      this.storage.delete(val);
      return true;
      }

      return false;
  };

  /**
  * @return {number}
  */
  getRandom() {
      const storageList = Array.from(this.storage);
      return storageList[Math.floor(Math.random() * (storageList.length))];
  };
}
