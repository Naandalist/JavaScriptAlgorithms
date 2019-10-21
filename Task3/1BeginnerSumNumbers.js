//Kategori: Beginner
//Sum all Numbers

/*CASE:
Sebuah program memiliki fungsi untuk membaca array of numbers
dan menjumlahkan seluruh member dari array tersebut
sehingga hasilnya hanya berupa satu digit saja.
Buatlah function untuk merealisasikan program tersebut.
Contoh INPUT : [123, 9, 27]

Contoh OUTPUT: 6

Proses Function:
123 + 9 + 27 = 159
1 + 5 + 9 = 15
1 + 5 = 6   */

const sumNumbs = (numbers) => {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let numTotal= numbers.reduce(reducer)

  const digitRekursif = (numb) => {
    if (numb < 10){
        return numb;
    }
    return numb %10 + digitRekursif(Math.floor(numb/10))
  }
  return digitRekursif(numTotal)
          .toString()
          .split('')
          .map(Number)
          .reduce(reducer)
}

console.log(sumNumbs([123, 9, 27]))
