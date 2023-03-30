// [7 kyu] - Insert dashes

// Description:
// Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num.

// Example:
// if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  return String(num)
    .split('')
    .map((number, index, arr) => {
      if (isOdd(number) && isOdd(arr[index + 1])) {
        return number + '-';
      }
      return number;
    })
    .join('');
}

function isOdd(number) {
  if (!number) return false;
  return number % 2 !== 0;
}
