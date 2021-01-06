/*
LOOPS
main types:
- while
- for
    - for ... of
    - for ... in

As always, avoid infinite and static loops.
Loops, just like conditionals, can be nested.
Just like in switch/case block, the break statement can be used to exit a loop.
*/

// for loop examples
// general syntax: 
//   loop var ; cond  ; inc/dec
for (let i = 0; i < 10; i += 3) {
    console.log(`Hello number ${i + 1}`);
}

// perfect squares
for (let num = 1; num*num < 100; num++) {
    console.log(`${num*num}`);
}

// countdown
for (let i = 10; i >= 0; i--) {
    console.log(`${i}!`);
}
console.log("Happy New Year");


// for loop over an object (string, array)
const myArray = [89, 123, 312, 23, 654];
const myString = "this is my string";
let sum = 0;
for (let i = 0; i < myArray.length; ++i) {
    console.log(i, myArray[i]);
    sum += myArray[i];
}
console.log(`Average: ${sum/myArray.length}`)

for (let i = 0; i < myString.length; ++i) {
    console.log(i, myString[i]);
}

// While loop

let j = 0;
while (j <= 5) {
    console.log(j);
    ++j;
}

let livesLeft = 3;
while (livesLeft > 0) {
    let prob = Math.random()
    if (prob < 0.2) {
        console.log(`You lost a life! Lives left: ${livesLeft}`)
        --livesLeft
    }
    else {
        console.log(`You're OK! Lives left: ${livesLeft}`)
    }
}

let target = Math.ceil(Math.random() * 10) // Number from 1 to 10
let attempts = 3
console.log(`You have ${attempts} attempts`)
while (attempts > 0) {
    let guess = Math.ceil(Math.random() * 10)
    console.log(`You guessed ${guess}`)
    if (guess == target) {
        break
    }
    --attempts
}
if (attempts == 0) {
    console.log("Sorry! You lost.")
}
else {
    console.log(`You won with ${attempts} attempts left!`)
}
console.log(`Target was: ${target}`)

// For ... of loops
// Similar to Python's "for var in iterable"
const testArray = ["one fish", "two fish", "red fish", "blue fish"]

// general syntax: 
//   var      of iterable
for (let fish of testArray) {
    console.log(fish)
}


// Classic magic square with loops (horizontal)
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]
for (let row of magicSquare) {
    let sum = 0
    for (let element of row) {
        sum += element
    }
    console.log(sum)
}

// For ... in loops
// loops over the keys

const simpleObject = {
    firstProperty   : 23,
    thisIsAKey      : "this is a value",
    myArray         : [1, 2, 3, 4, "five"],
    as4asd          : "sixteen",
    42              : "four and two",
    "4chan dot org" : "i like pepe"
};
// general syntax:
//   var      in object
for (let key in simpleObject) {
    let value = simpleObject[key]
    console.log(key, value)
}
