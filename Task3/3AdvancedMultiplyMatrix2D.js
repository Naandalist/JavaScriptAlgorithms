//Kategori: Intermediate
//Multiply matrix

/* CASE:
Buatlah program yang memiliki parameter sebuah matriks (array 2 dimensi)
dan memiliki return berupa transpose dari matriks tersebut.

*/


  const multiplyMatrix2D= (m1, m2) => {

    if (m1.length !== 2 || m2.length !==2) return false

    let matrix = []
    for (let i = 0; i < m1.length; i++) {
      matrix[i] = [];

      for (let  j= 0; j < m2[0].length; j++) {
        matrix[i][j] = 0;

        for (let k = 0; k < m1[0].length; k++) {

          if (m2[k][j] === undefined || m1[i][k] === undefined) return false

          matrix[i][j] += m1[i][k] * m2[k][j];

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
