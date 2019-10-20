//Beginner
//Mesin Printer

/*CASE:
Disediakan 2 buah array yaitu array huruf dan array perintah.
Jika array perintah berisi true,maka huruf yang memiliki indeks yang sama di array huruf akan dicetak.

Buatlah sebuah program untuk menampilkan output berupa huruf yang di print
berdasarkan array perintah dengan parameter
berupa array perintah.  */


const arr1= ['one', 'two', 'three', 'four', 'five', 'six']
const arr2= [true, false, true, true, false, false]

const printIt = (alphabets , dictate )=>{
    const len= dictate.length
    let result=[]

    for (i=0; i<len; i++){
        if (dictate[i] !== false){
            result.push(alphabets[i])
        }
    }
    return result
}
console.log(printIt(arr1, arr2))