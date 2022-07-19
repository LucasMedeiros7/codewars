// [6 kyu] Replace With Alphabet Position

// Description:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc

// Example:
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// Solution:
function alphabetPosition(text) {
  text = text.toLowerCase().split('');
  let positions = '';

  text.forEach(item => {
    let code = item.charCodeAt() - 96;
    if (code <= 26 && code >= 1) {
      return (positions += `${item.charCodeAt() - 96} `);
    }
  });

  return positions.substring(0, positions.length - 1);
}

// I used .substring() to remove the last space from the string.
