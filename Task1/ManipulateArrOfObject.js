/* Manipulate Array of Object */

let heroes = [
    {
        name : 'Jenderal Anumerta Ahmad Yani',
        placeOfBirth : 'Purworejo',
        yearOfBirth : 1922,
        age : 43
    },
    {
        name : 'Haji Agus Salim',
        placeOfBirth : 'Agam, Sumatera Barat',
        yearOfBirth : 1884,
        age : 70
    },
    {
        name : 'Pangeran Diponegoro',
        placeOfBirth : 'Yogyakarta',
        yearOfBirth : 1922,
        age : 43
    },
     
]

/* Show all item on Array */
console.log(heroes)

/* Push item to Array */
let newHero = {
    name : 'Tuanku Imam Bonjol',
    placeOfBirth : 'Sumatera Barat',
    yearOfBirth : 1772,
    age : 92
}
heroes.push(newHero)

/* Delete item from Array */
let removed = heroes.splice(1,2)

/* Change value on Item property */
heroes[0].name = 'Kyai Haji Agus Salim'




