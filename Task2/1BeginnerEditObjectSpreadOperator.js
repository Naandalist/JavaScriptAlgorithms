//Beginner
//

/* CASE:
Sebuah daftar tentu dapat mengalami perubahan, namun belum tentu semua datanya berubah.
Disediakan array of object sebagai berikut:

[
	{
		name: ‘Tatas’,
		company: ‘Arkademy’,
		job: ‘Trainer’,
		status: ‘single’,
		city: ‘Jogja’
	},
	{
		name: ‘Pratama’,
		company: ‘Emago’,
		job: ‘Trainer’,
		status: ‘single’,
		city: ‘Jakarta’
	}
]

Jika Tatas telah menikah dan pindah dari Jogja ke Jakarta,
serta Pratama direkrut oleh Arkademy menjadi Trainer yang bertempat di Jogja,
maka ubahlah object diatas menggunakan spread operator.
*/
const Obj = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'
    }
]
const updateObj = (Obj) => {

    let newObj = [...Obj]

    newObj[0].status= 'menikah'
    newObj[0].city= 'Jakarta'
    newObj[1].company= 'Arkademy'
    newObj[1].city= 'Jogja'

    console.log(newObj)
}

updateObj(Obj)
