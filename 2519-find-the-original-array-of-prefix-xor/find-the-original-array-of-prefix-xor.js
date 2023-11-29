/**
 * @param {number[]} pref
 * @return {number[]}
 * Not proud of this one
 */
function findArray(pref) {
  const result = [pref[0]];
  const prefLength = pref.length;

  for (let i = 1; i < prefLength; i++){
        result.push(pref[i] ^ pref[i-1]);
  }

  return result;
};
