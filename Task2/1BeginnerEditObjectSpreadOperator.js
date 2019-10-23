//Beginner


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

clue : https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/
  */
  const obj = [
      {
          name: '🤵Tatas',
          company: 'Arkademy',
          job: 'Trainer',
          status: 'single',
          city: 'Jogja'
      },
      {
          name: '🙍‍Pratama',
          company: 'Emago',
          job: 'Trainer',
          status: 'single',
          city: 'Jakarta'
      }
  ]

  const cloneObj= [{
    ...obj[0],
    status: 'menikah',
    city: 'Jakarta'
  },{
    ...obj[1],
    company: 'Arkademy',
    city: 'Jogja'
  }]
  console.table(obj)
  console.log(' ')
  console.table(cloneObj)
