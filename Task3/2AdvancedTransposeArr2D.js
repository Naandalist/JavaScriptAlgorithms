//Kategori: Advanced
//Transpose

/*CASE:
Buatlah program yang memiliki parameter sebuah matriks(array 2 dimensi) dan memiliki return berupa transpose dari matriks tersebut.
  Contoh input:
  123
  456
  789

  Contoh output:
  147
  258
  369     */

  const arr= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

const transpose= (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <i; j++) {

      //swap element[i,j] and element[j,i]
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr
}
console.log(transpose(arr))
