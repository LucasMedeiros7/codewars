// [6 kyu] Duplicate Enconder

// Description:
// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Example:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Solution:
function duplicateEncode(word) {
  word = word.toLowerCase();
  let lettersRepeat = countRepeatLetters(word);
  let newString = "";

  for (let i = 0; i < word.length; i++) {
    if (lettersRepeat.includes(word[i])) {
      newString += ")";
    } else {
      newString += "(";
    }
  }

  return newString;
}

function countRepeatLetters(word) {
  let noRepeat = [];
  let repeat = [];

  for (let i = 0; i < word.length; i++) {
    if (!noRepeat.includes(word[i])) {
      noRepeat.push(word[i]);
    } else if (!repeat.includes(word[i])) {
      repeat.push(word[i]);
    }
  }

  return repeat;
}
