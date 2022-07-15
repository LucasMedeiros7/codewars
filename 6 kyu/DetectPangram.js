// [6 kyu] Detect Pangram

// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once.

/*For example:  
 the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

// Solution: 
function isPangram(string) {
  let result = [];
  let letters = string.toUpperCase().split("");

  for (let i = 0; i < letters.length; i++) {
    if (/[A-Z]/g.test(letters[i])) {
      if (!result.includes(letters[i])) {
        result.push(letters[i]);
      }
    }
  }

  return result.length === 26;
}

// Other Solutions:
function isPangram(string) {
  let alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  return alphabet.every(letter => string.toUpperCase().includes(letter));
}
