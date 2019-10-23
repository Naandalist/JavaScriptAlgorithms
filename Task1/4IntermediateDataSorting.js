//Kategori: Intermediate
//Data Sorting

/*CASE:

REQUIREMENT :
Input berupa array statis yang sudah disediakan secara HARDCODE
Array dibuat sepanjang 10 data
Output menampilkan 4 hal :
    -Data terkecil
    -Data terbesar
    -Data yang disortir dari data terkecil ke terbesar
    -Data yang disortir dari data terbesar ke terkecil

INPUT :

Array Bilangan = [6,22,34,15,2,13,26,57,42,32]

OUTPUT :

    -Data Terkecil : 2
    -Data Terbesar : 57
    -Ascending Sort : 2,6,13,15,22,26,32,34,42,57
    -Descending Sort : 57,42,34,32,26,22,15,13,6,2  */

//given array
const randomNums=[6,22,34,15,2,13,26,57,42,32]

//Ascending Sort
let bubbleSortAsc = (numbs) => {

    let len = numbs.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            if (numbs[j] > numbs[j + 1]) {

                let temp = numbs[j];
                numbs[j] = numbs[j + 1];
                numbs[j + 1] = temp;
            }
        }
    }
    return numbs;
};
console.log(`📊 Ascending Sort: ${bubbleSortAsc(randomNums)}`); //Ascending Sort: 2,6,13,15,22,26,32,34,42,57

//Discending Sort
let bubbleSortDesc = (numbs) => {

    let len = numbs.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            if (numbs[j] < numbs[j + 1]) {

                let temp = numbs[j];
                numbs[j] = numbs[j + 1];
                numbs[j + 1] = temp;
            }
        }
    }
    return numbs;
};
console.log(`📊 Discending Sort: ${bubbleSortDesc(randomNums)}`); //Discending Sort: 57,42,34,32,26,22,15,13,6,2

//Smallest Data
console.log(`🔎 Smallest Data: ${bubbleSortAsc(randomNums)[0]}`) //Smallest Data: 2

//Biggest data
console.log(`🔎 Biggest Data: ${bubbleSortAsc(randomNums)[bubbleSortAsc(randomNums).length -1]}`) //Biggest Data: 57
