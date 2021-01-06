/*
ARROW FUNCTIONS
A more compact way to define small functions
Comparable to Python's lambda functions

*/

let compactFunction;
// this:
compactFunction = function (x) {return x * x}
// is the same as:
compactFunction = x => x*x
// When it consist of only one statement, the return is implicit

console.log(compactFunction(24))

// It can have several parameters and statements
// (in this case return must be declared)
const fraction = (x, y) =>  {let res = x / y; return res}
console.log(fraction(3, 5));

// It can even have no parameters
// Calling and definition in one line
(() => console.log("Hello!"))()

/*
APPLY FUNCTIONS TO COLLECTIONS OF DATA
These functions are extremely useful to work over arrays.
It generally shortens the code.
Some of the functions
    - forEach
    - map
    - filter
    - find
    - reduce
    - some
    - every
*/

// forEach
// Receives a callback function and applies it to every element in
// the array. It works like a for ... of loop (as the name suggests).
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.forEach(function (n) {console.log(n * n)})

// If we give a second parameter in the function definition, it would be the
// index inside the array
numbers.forEach(function (n, i) {console.log(`Index ${i} \nValue ${n}`)})

// map
// Creates a new array by applying a function to each element
// Analogous to Python's map
const myArray = [1, 4, 22, 23, 54, 98, 100]
const squares = myArray.map(function (n) {return n * n})
console.log(squares)

// find
// retrieves the first element of the array that makes the function return true

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie => movie.includes("Mrs."))
console.log(movie)

// filter
// returns a filtered array with values that approved (returned true)

const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const odds = numArray.filter(n => n % 2 !== 0)
console.log(odds)

// every
// returns boolean checking if every element in the array pass the test
const words = ["dog", "dig", "log", "bag", "wag"];
console.log(words.every(word => word.length === 3))
console.log(words.every(word => word[word.length - 1] == "g"))

// some
// returns boolean checking if at least one element in the array pass the test
console.log(words.some(word => word[0] == "d"))
console.log(words.some(word => word[0] == "k"))

// sort
// sort by default orders alphabetically, but can receive a function as a 
// parameter. The callback function receives 2 parameters and works as follows:
// Let's call the function compareFunc and the parameters a and b
// if compareFunc(a, b) returns a number < 0:
//      a goes before b
// if compareFunc(a, b) returns number 0:
//      a remains unchanged with respect to b
// if compareFunc(a, b) returns a number > 0:
//      a goes after b
// Note that the operation mutates the array in-place

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
const sortedPrices = prices.sort((a, b) => a - b)
console.log(sortedPrices)
console.log(sortedPrices === prices)

// reduce
// Analogue to Python's functools.reduce function
// Passes all the elements in an array through the function
// Besides the function, an initial value can be provided
// Returns a single value

const testArray = [3, 12, 23, 58, 11, 23, 0];
let sum = testArray.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)

let arrayMax = testArray.reduce((a, b) => a >= b ? a : b)
console.log(arrayMax)

let arrayMin = testArray.reduce((a, b) => a < b ? a : b)
console.log(arrayMin)

// providing an initial value

arrayMin = testArray.reduce((a, b) => a < b ? a : b, -23)
console.log(arrayMin)