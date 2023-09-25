/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
  for (_ in obj) return false;
  return true;
};


// Not my solution, but I love it so much, credit due:
// https://leetcode.com/problems/is-object-empty/solutions/3609695/javascript-for-iterator-time-o-1-generator-function/?envType=study-plan-v2&envId=30-days-of-javascript
