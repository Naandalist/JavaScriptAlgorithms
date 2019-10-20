//Kategori: Advanced
//Decimal to Binary

/*CASE:
Ketentuan Program :
User menginput angka desimal
Output berupa angka biner dari angka desimal tersebut
Program ini hanya boleh menggunakan fungsi IF, SWITCH, FOR, WHILE

CONTOH TAMPILAN OUTPUT :

$ Masukkan angka desimal : 12 //user-generated input
$ Angka Biner : 1100    */

const DecToBinary =(decimal) => {

    const bits = []
    while (decimal >= 2) {

        bits.push(decimal %2)
        decimal = (decimal - (decimal % 2 )) / 2
    }
    
    bits.push(decimal)
    let result=''
    for (let i=bits.length-1; i>=0; i--){
        result +=bits[i]
    }
    return `Angka biner: ${result}`
}
console.log(DecToBinary(12))