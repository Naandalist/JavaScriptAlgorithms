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

function getPrime(num) {

    let prime=[];
    for(let loop=2;loop<=num+10;loop++) {
    let store=0

    //when the loop is below 10 and above 2
    if(loop<=9 && loop>=2) {
      for(let i=2;i<=9;i++){
        if(loop%i===0) {
          store+=1;
        }
      }
      if(store===1) {
      prime.push(loop);
      }
    }
    
    //when the loop is above 9
    if(loop>=10) {
        for(let j=2;j<=9;j++){
        if(loop%j===0) {
          store+=1;
        }
      }
        if(store===0) {
        prime.push(loop);
      }
    }
    
   }
    
  //create a half pyramyd
  let result=''
  for (let k=0; k <= num; k++){
    for (let l=0; l < k; l++){
        result +=prime[l]+' '
    }
    console.log(result)
    result=''
  }
}

getPrime(5);