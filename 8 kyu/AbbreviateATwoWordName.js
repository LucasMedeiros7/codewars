// [8 kyu] Abbreviate a two word name

// Description:
// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Examples:
// abbrevName('John Doe') => 'J.D'
// abbrevName('patrick feeney') => 'P.F'

// Solution:
const abbrevName = name =>
  name
    .split(' ')
    .map(item => item[0])
    .join('.')
    .toUpperCase();
