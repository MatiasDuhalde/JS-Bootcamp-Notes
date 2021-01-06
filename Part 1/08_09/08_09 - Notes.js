/*
FUNCTIONS
Basic organization unit of most languages
Functions can also be nested (definitions and calls)
Functions in javascript are objects, and can be manipulated as such.
If we add a function to an object, it becomes a method!
Functions can receive another functions as parameters, and
return functions.
When a function is passed as parameter. It is usually called a callback function

You can call a function without the required arguments,
and those not provided will default to undefined.
Parameter type is not static.
The return statement is not enforced. When missing, it defaults to undefined
Returned values can be stored inside a variable when calling.
The return statement ends the function call.
*/

// Function definition
function functionName(arg1, arg2) {
    // function contents
    arg1 // use arg1
    arg2 // use arg2
    return "output"
}

// Function calling
functionName("arg1", "arg2")

// example

function rollDie() {
    let roll = Math.ceil(Math.random() * 6)
    console.log(`You got a ${roll}`)
}

function throwDie(times) {
    for (let i = 0; i < times; ++i) {
        rollDie()
    }
}

throwDie(6)

// Functions can also be declared this way:
const square = function (num) {
    return num * num
}
console.log(square(7))
// Functions that are not stored in a variable are called anonymous functions

// Another way of declaring would be
const product = function multiply(x, y) {
    return x * y
}
console.log(product(5, 4))
// multiply(5, 4) raises an error

// We can pass a function as an object's property (and it would become a method)
const thing = {
    doSomething: product
}
console.log(thing.doSomething(6, 9))

// setTimeout(func, ms)
// runs func after ms milliseconds have passed
function sayHi() {
    console.log("Hi!")
}

setTimeout(sayHi, 5000)

// Hoisting
// It means moving a variable declaration before its used
// Example
console.log(animal)
var animal = "Doggo"

// It treats animal as undefined; equivalent to
var myVar
console.log(myVar)
myVar = "variable"

// Won't work with let/const
// Functions are hoisted when not storing them in variable

// Generally hoisting is not wanted