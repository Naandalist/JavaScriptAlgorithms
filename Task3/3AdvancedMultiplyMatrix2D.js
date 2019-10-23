//
//
/* CASE:
Buatlah program yang memiliki parameter sebuah matriks(array 2 dimensi)
dan memiliki return berupa transpose dari matriks tersebut.
*/

  const multiplyMatrix2D= (a, b) => {
    let aNumRows = a.length, aNumCols = a[0].length
    let bNumRows = b.length, bNumCols = b[0].length
    let matrix = []  // initialize array of rows

    //if () return 'it cant multiply'

    for (let r = 0; r < aNumRows; ++r) {
      matrix[r] = [];                 // initialize the current row

      for (let c = 0; c < bNumCols; ++c) {
        matrix[r][c] = 0;             // initialize the current cell

        for (let i = 0; i < aNumCols; ++i) {
          matrix[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return matrix;
  }


  let a = [[3, 4],
           [1, 2]];
      b = [[7, 5],
           [6, 4]];

  console.log(multiplyMatrix2D(a,b))
