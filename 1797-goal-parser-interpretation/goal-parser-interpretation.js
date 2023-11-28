/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  const commandLength = command.length;
  let result = '';

  let position = 0;

  while (position < commandLength){
    switch (command[position]) {
      case 'G':
        result += 'G';
        position++;
        break;
      case '(':
        switch (command[position + 1]) {
          case ')':
            result += 'o';
            position += 2;
            break;
          case 'a':
            result += 'al';
            position += 4;
        }
    }
  }

  return result;
};
