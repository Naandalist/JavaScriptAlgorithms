/* Manipulate Array of Object */

/* Show all item on Array */
const Fruits1 = ['Apple', 'Orange', 'Avocado', 'Banana', 'Guava', 'Coconut', 'Date'];
console.log(Fruits1); // ['Apple', 'Orange', 'Avocado', 'Banana', 'Guava', 'Coconut', 'Date']

/* Push item to Array */
const Fruits2 = ['Apple', 'Orange'];
const newFruits2 = 'Pear';
Fruits2.push(newFruits2);
console.log(Fruits2); // ['Apple', 'Orange', 'Pear']

/* Delete item from Array */
const Fruits3 = ['Apple', 'Avocado'];
Fruits3.pop();
console.log(Fruits3); // ['Apple']

/* Change value on Item property */
let Fruits4 = ['Avocado', 'Pine', 'Melon'];
Fruits4[2] = 'Watermelon';
console.log(Fruits4); // [ 'Avocado', 'Pine', 'Watermelon' ]



