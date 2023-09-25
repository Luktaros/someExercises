Array.prototype.last = function() {
  let arrLength = this.length;

  if (arrLength === 0){
    return -1;
  }

  return this[--arrLength];
};
