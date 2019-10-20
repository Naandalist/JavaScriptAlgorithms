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

const sumNumbs = (array) => {

    const len= array.length
    let result=0
    for (let i=0; i<len; i++){
        result +=array[i]
    }
    return result
}

console.log(sumNumbs([123, 9, 27]))
console.log(sumNumbs([1, 5, 9]))
console.log(sumNumbs([1, 5]))
