//Kategori: Advanced
//Palindrom

/*CASE:
Buatlah program yang dapat menemukan berapa banyak sebuah kata/frasa dari sebuah string baik itu dari kiri atau kanan.

REQUIREMENT:
Input dari user sebanyak 2 kali berupa string dan kata/frasa yang ingin dicari.
Input kata/frasa pencarian tidak bisa lebih panjang dibandingkan string.
Output berupa banyaknya kata/frasa pencarian yang ditemukan dari string yang telah diberikan.

INPUT:

    1. banananana
    2. nana

OUTPUT:

    ditemukan 6 kali    */

    const palindromCount = (str1, str2) =>{

        let splitStr = str1.split('')
        let arr=[]
        let temp=''
    
        while (splitStr.length >0){
    
            for (let i=0; i<str2.length; i++){
                temp += splitStr[i]
            }
            if (temp.length === 4){
                arr.push(temp)
            }
            temp=''
            splitStr.shift()
        }

        splitStr = str1.split('')
        const strReverse = splitStr.reverse()

        while (strReverse.length > 0){
    
            for (let j=0; j< str2.length; j++){
                temp +=strReverse[j]
            }
            if (temp.length === 4){
                arr.push(temp)
            }
            temp=''
            strReverse.shift()
        }
        const result = []
        for (let k=0; k< arr.length; k++){
            if (arr[k] === str2){
                result.push(arr[k])
            }
        }
        return `ditemukan ${result.length} kali`
    }
    
    console.log(palindromCount('banananana', 'nana'))