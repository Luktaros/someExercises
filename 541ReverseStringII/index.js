
/**
 * What I did here, was just terrible.
 * TODO: Fix this.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  let r = [...s];
  let test = 0;
  let kl = 0;

  if (k % 2 !== 0) test = 0.5;
  if (k > r.length - 1) k = r.length;
  let j = k/2;


  for (let i = 0; i < r.length; i++, j--){

    if (j > test){
      let pos1 = r[i];
      let pos2 = r[i + k - 1 + kl];

      r[i] = pos2;
      r[i + k - 1 + kl] = pos1;

      --kl;
      --kl;
    }

    if (j === - (k*2 - (k/2) - 1)){
      j = k/2 + 1;
      kl = 0;
    }
  }

  return r.join('').toString();
};
