// [5 kyu] Rot13

// Description:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Solution:
function rot13(message) {
  let encoded = '';
  let letter;

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      letter = ((message.charCodeAt(i) - 65 + 13) % 26) + 65;
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      letter = ((message.charCodeAt(i) - 97 + 13) % 26) + 97;
    } else {
      letter = message.charCodeAt(i);
    }

    encoded += String.fromCharCode(letter);
  }
  return encoded;
}
