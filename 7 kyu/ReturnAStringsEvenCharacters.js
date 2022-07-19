// [7 kyu] Return a string's even characters.

// Description:
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
// If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// Example:
// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"


// Solution:
function evenChars(string) {
  let result = [];

  if (string.length < 3 || string.length > 100) {
    return 'invalid string';
  }

  string.split('').forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
      result.push(item);
    }
  });

  return result;
}

// Other solution:
function evenChars(string) {
  if (string.length <= 2 || string.length >= 101) {
    return 'invalid string';
  } else {
    return string.split('').filter((item, index) => index % 2);
  }
}
