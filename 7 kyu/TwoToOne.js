// [7 kyu] Two to One

// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Example:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution:
function longest(s1, s2) {
  let result = new Set();
  let sortedS1 = s1.split('');
  let sortedS2 = s2.split('');

  sortedS1.forEach(item => result.add(item));
  sortedS2.forEach(item => result.add(item));

  return Array.from(result).sort().join('');
}

// Othe solution:
const longest = (s1, s2) => Array.from(new Set(s1 + s2)).sort().join('');
