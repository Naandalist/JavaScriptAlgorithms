//Intermediate
//library application

/*CASE:
Sebuah perpustakaan menyimpan data buku-bukunya dalam array of object(key title, author, status).
Buatlah sebuah program yang dapat menampilkan output berdasarkan pilihan:

    a. Menampilkan status sebuah buku jika diberikan parameter judul buku tersebut.
    b. Menampilkan list buku yang tersedia untuk dipinjam.  */



const checkBookStatus= (bookName) => {
    const lib= [
        {
          title: 'Snow Crash',
          author: 'Neal Stephenson',
          status: true

        },
        {
          title: 'Stranger in a Strange Land',
          author: 'Robert Heinlein',
          status: false
        },
        {
          title: 'Cryptonomicon',
          author: 'Neal Stephenson',
          status: true
        }
      ]

      for (let i=0; i< lib.length; i++){
        if (lib[i].title === bookName){
          return lib[i].status
        }
      }
}
console.log(checkBookStatus('Stranger in a Strange Land'))

const availableBookList = (dreamStatus) => {

    const lib= [
        {
          title: 'Snow Crash',
          author: 'Neal Stephenson',
          status: true
        },
        {
          title: 'Stranger in a Strange Land',
          author: 'Robert Heinlein',
          status: false
        },
        {
          title: 'Cryptonomicon',
          author: 'Neal Stephenson',
          status: true
        }
      ]

    const availableBook= []
    for (let i=0; i< lib.length; i++){
        if (lib[i].status === dreamStatus){
            availableBook.push(lib[i].title)
        }
    }
    return availableBook.join(', ')

}
console.log(availableBookList(true))
