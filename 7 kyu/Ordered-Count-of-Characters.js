// [7 kyu] Ordered Count of Characters

// Description:
// Count the number of occurrences of each character and return it as a list
// of tuples in order of appearance. For empty output return an empty list.

// Examples:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Solution:
const orderedCount = text => {
  const letterRepeat = {};
  const arrayText = text.split('');

  for (const el of arrayText) {
    letterRepeat[el] = letterRepeat[el] ? letterRepeat[el] : 0;
    letterRepeat[el] += 1;
  }

  return Object.entries(letterRepeat);
};

// Other solution:
const orderedCount2 = function (text) {
  let letters = text.split('');
  let uniqs = letters.filter(
    (letter, index) => letters.indexOf(letter) == index
  );

  return uniqs.map(letter => [letter, text.split(letter).length - 1]);
};
