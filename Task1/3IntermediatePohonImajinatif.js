//Kategori: Intermediate
//Pohon Imajinatif

/* CASE:
Diketahui sebuah pohon imajinatif yang tumbuh di sebuah taman.
Pohon tersebut hanya tumbuh sepanjang 1 m saat musim gugur dan 2 kali lipat tinggi pohon tersebut saat musim semi.
Buatlah program yang menentukan tinggi pohon tersebut setelah Y tahun dengan tinggi awal X m.

REQUIREMENT:
Input user berupa nilai X dan Y dengan ketentuan :
X > 0
Y > 0
Output berupa tinggi akhir pohon tersebut dengan ketentuan:
Pada 1 tahun, musim semi datang terlebih dahulu dibandingkan musim gugur.   */


  const imaginativeTree = (x, y) => {

    let store= 0, heightNow=0
    while (store <y){
        heightNow= ((2 * x) + 1)
        x = heightNow
        store++
        //console.log(heightNow)
    }
    return `🌴 height of tree is ${heightNow} meter`
  }
  console.log(imaginativeTree(2, 2))
