//Kategori: Beginner
//Segitiga Siku-siku


/* CASE : 
Segitiga siku-siku adalah segitiga yang salah satu sudutnya 90o atau sudut siku. 
Buatlah sebuah program untuk membentuk sebuah segitiga siku-siku.

REQUIREMENT:
Input user berupa panjang alas dan tinggi segitiga (alas dan tingginya sama)dengan ketentuan :
    1. 0 < Alas/Tinggi < 10
    2. Segitiga dibentuk dengan angka prima yang nilainya mulai dari awal setiap barisnya.

Output berupa segitiga siku-siku.

INPUT :
5

OUTPUT :
2
2 3
2 3 5
2 3 5 7
2 3 5 7 11  */

function generatePyramid() {
    var totalNumberofRows = 5;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+=j;
        }
        console.log(output);
        output="";
    }
}  

console.log(generatePyramid())