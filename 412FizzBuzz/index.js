/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i < n + 1; i++){
    const fizz = i % 3;
    const buzz = i % 5;

    if (fizz === 0 && buzz === 0){
      result.push('FizzBuzz');
    } else if (buzz === 0){
      result.push('Buzz');
    } else if (fizz === 0){
      result.push('Fizz');
    } else {
      result.push(`${i}`);
    }
  }

  return result;
};
