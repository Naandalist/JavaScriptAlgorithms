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
const pyramidPrime = (numb) => {
    if (numb < 0 || numb > 10){
      console.log('number is not allowed')
    }
    else{
      let firstNum=0, secondNum = 1, store
      const arrPrimes=[]

      while (arrPrimes.length< numb) {
        store = 0
        firstNum = 2
        while (firstNum <= (secondNum / 2)) {
          if (secondNum %firstNum === 0) {
            store++
          }
        firstNum++
        }

        if (store === 0 && secondNum !== 1) {
          arrPrimes.push(secondNum)
        }
        secondNum++
      }
      //console.log(arrPrimes)

      let tempr=''
      for(let i=0; i < arrPrimes.length; i++){
        for(let j=0; j<=i; j++){
          tempr +=`${arrPrimes[j]} `
        }
        console.log(tempr)
        tempr=''
      }
    }
}

pyramidPrime(5);
