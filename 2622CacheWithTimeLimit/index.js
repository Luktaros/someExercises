class TimeLimitedCache {
  #cache = {};

  /**
  * @param {number} key
  * @param {number} value
  * @param {number} duration time until expiration in ms
  * @return {boolean} if un-expired key already existed
  */
  set(key, value, duration){
    if (this.#cache[key]){
      if (!this.#keyExpired(this.#cache[key].duration, this.#cache[key].initTime)){
        this.#cache[key].value = value;
        this.#cache[key].duration = duration;
        this.#cache[key].initTime = Date.now();
        
        return true;
      }
    } else {
      this.#cache[key] = {
        value: value,
        duration: duration,
        initTime: Date.now()
      }
    }

    return false;
  }

  /**
   * Define if key is expired
   * True = expired
   * False = not-expired
   * @param {number} duration
   * @param {number} initTime
   * @return {boolean}
   */
  #keyExpired(duration, initTime){
    const currentTime = Date.now();
    const elapsedTime = currentTime - initTime;

    return elapsedTime >= duration;
  }

  /**
  * @param {number} key
  * @return {number} value associated with key
  */
  get(key){
    if (this.#cache[key]){
      if (!this.#keyExpired(this.#cache[key].duration, this.#cache[key].initTime)){
        return this.#cache[key].value;
      }
    }

    return -1;
  }

  /**
  * @return {number} count of non-expired keys
  */
  count(){
    let result = 0;

    for (const key in this.#cache) {
      if (this.#cache.hasOwnProperty.call(this.#cache, key)) {
        const element = this.#cache[key];

        if (!this.#keyExpired(element.duration, element.initTime)){
          result++;
        }
      }
    }

    return result;
  }
}
