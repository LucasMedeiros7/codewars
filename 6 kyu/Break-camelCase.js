// [6 kyu] - Break camelCase

// Description: 
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example: 
// solution("camelCasing") //should return "camel Casing"
// solution("camelCasingTest") //should return "camel Casing Test"


// My Solution:

function solution(string) {
  return string
    .split('')
    .map(item => (/[A-Z]/g).test(item) ? ` ${item}` : item)
    .join('');
}

// Other Solutions:

const simpleSolution = string => string.replace(/([A-Z])/g, ' $&');
