
/**
 * @param {Array} arr
 * @return {Generator}
 */
function* inorderTraversal(array) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (Array.isArray(value)){
      const gen = inorderTraversal(value);
      for (const value of gen){
        yield value;
      }
    }

    if (typeof value === 'number') yield value;
  }

  return
};
