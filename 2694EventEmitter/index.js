class EventEmitter {
  #events = new Map();

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
    if (this.#events.has(eventName)){
    const callBackList = this.#events.get(eventName);
    callBackList.add(callback);

    } else {
      const callBackList = new Set();
      callBackList.add(callback);
      this.#events.set(eventName, callBackList);
    }

		return {
			unsubscribe: () => {
        const callBackList = this.#events.get(eventName);
        callBackList.delete(callback);
			}
		};
	}



    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
    const results = [];

    if (this.#events.has(eventName)){
      const callBackList = this.#events.get(eventName);

      if (callBackList.size === 0){
        return [];
      }

      for (const callback of callBackList) {
        const result = callback(...args);
        results.push(result);
      }
    }

    
    return results;
	}
}

