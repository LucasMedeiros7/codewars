// [6 kyu] Matrix Addition

// Description:
// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:
// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:
// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

// Examples:
// matrixAddition(
//   [
//     [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1],
//   ],
//   [
//     [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3],
//   ]
// );
//   returns: [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]

// Solution:
function matrixAddition(array1, array2) {
  return array1.map((row, indexRow) =>
    row.map((item, indexItem) => array2[indexRow][indexItem] + item)
  );
}

// Other solution:
function matrixAddition(array1, array2) {
  const sumOfMatrices = [];

  for (const i in array1) {
    sumOfMatrices[i] = [];

    for (let j = 0; j < array2.length; j++) {
      if (sumOfMatrices[i].length < 3) {
        sumOfMatrices[i].push(array1[i][j] + array2[i][j]);
      }
    }
  }

  return sumOfMatrices;
}
