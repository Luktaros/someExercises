
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  return s.trimEnd().split(' ').at(-1).length;
};
