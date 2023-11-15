/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const opens = ['(', '[', '{'];
  let result = true;

  for (const word of s) {
    if (opens.includes(word)){
      stack.push(word);
      continue;
    }

    switch (word) {
      case ')':
        if (stack.at(-1) === '(')
          stack.pop();
        else
          result = false;

        break;
      case ']':
        if (stack.at(-1) === '[')
          stack.pop();
        else
          result = false;

        break;
      case '}':
        if (stack.at(-1) === '{')
          stack.pop();
        else
          result = false;

        break;
    }

    if (!result) break;
  }

  if (stack.length > 0){
    result = false;
  }

  return result;
};
