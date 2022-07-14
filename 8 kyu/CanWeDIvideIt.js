// [8 kyu] Can we divide it?

// Description:
/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is 
  divisible by both integers a and b.*/

// Examples:
// isDivideBy(-12, 2, -6)  =>  true
// isDivideBy(4, 2, 3) ==> false

// Solution:
function isDivideBy(num, a, b) {

  if (num % a === 0 && num % b === 0) {
    return true;
  }

  return false;
};
