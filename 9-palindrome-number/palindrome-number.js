/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const numberAsString = x.toString().split('');
  const length = numberAsString.length;

  for(let i = 0; i < length; i++){
    if (numberAsString[i] !== numberAsString[length - 1 - i]){
      return false;
    }

    if (i >= length - 1 - i){
      return true;
    }
  }

};
