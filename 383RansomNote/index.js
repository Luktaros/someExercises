/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let result = false;
  const magazineLetters = magazine.split('');
  let ransomNoteLetters = ransomNote.split('');

  ransomNoteLetters = ransomNoteLetters.filter((letter => {
    if (magazineLetters.includes(letter)){
      let letterIndex = magazineLetters.findIndex( magazineLetter =>{
        return magazineLetter === letter;
      })

      magazineLetters.splice(letterIndex, 1);

      return false;
    }

    return true;
  }))


  if (ransomNoteLetters.length === 0){
    result = true;
  }

  return result
};
