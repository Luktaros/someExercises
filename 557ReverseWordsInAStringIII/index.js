/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s.split(' ').map(a => [...a].reverse().join('')).join(' ');
};
