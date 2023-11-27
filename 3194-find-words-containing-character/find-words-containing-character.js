/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
  const result = [];

  words.forEach((word, index) => {
    if (word.includes(x)){
      result.push(index);
    }
  })

  return result;
};
