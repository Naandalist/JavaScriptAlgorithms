//Intermediate
//Mean, Median, Modus

/*CASE:
Dalam ilmu statistika, kita menggunakan mean untuk menemukan nilai rata—rata sebuah array atau kumpulan nilai, 
median untuk menentukan nilai tengah di array nilai, dan modus untuk menemukan nilai manakah pada array yang muncul
paling banyak. Buatlah sebuah program yang dapat menghasilkan output berupa nilai mean, median dan modus 
dengan parameter berupa array nilai.  */

const randomNumbs= [2,7,9,0,12,45,78,98,12,14,16,12,12]

//Mean
const mean= (arr) => {
    const len= arr.length
    let total=0
    for (let i=0; i< len; i++){
        total +=arr[i]
    }
    return `Mean: ${Math.floor(total/len)}`

}
//console.log(mean(randomNumbs)) 

//sorting Numbers of array
const sortedNumbs= randomNumbs.sort(function(x,y){
    return x-y
})
//console.log(sortedNumbs)

//Median
const median =(arr)=>{
    const len = arr.length

    const indexMid = (arr.length /2)
	const result =[]

	if (len %2 === 0) { 	
	  result.push((arr[indexMid] +arr[indexMid -1]) /2)
	} 
	else if (arr.length %2 !== 0) {	
	  result.push(arr[indexMid -0.5])
	}
	return `Median: ${result[result.length -1]}`
}
//console.log(median(sortedNumbs))

//Modus
const modus = (arr) => {
  const len=arr.length
  const arrModus = []
  let allSame = false
  
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[i] === arr[j]) {
        allSame = true;
        arrModus.push(arr[i]);
      } else {
        allSame = false;
      }
    }
  }
  console.log(arrModus)
  if (arrModus.length<1){
    return 'not found'
  }
  else if (allSame){
    return 'all numbers are same'
  }
  else{
    return `Modus: ${arrModus[0]}`
  }
}
console.log(modus(sortedNumbs))