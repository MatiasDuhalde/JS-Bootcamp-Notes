/*
NEW MISCELLANEOUS FEATURES
- rest & spread
- destructuring
- default function parameters
*/

/*
DEFAULT FUNCTION PARAMETERS
Just like in Python, JS allows us to predefine default parameters when they are
not provided in the call
*/

// This was the old way of doing it
function oldFunc(a, b) {
    if (typeof a === "undefined") {
        a = "default value" // Here we assign what would be the default value
    }
    // Shorter old way
    b = typeof b === "undefined" ? "default value" : b
    // Do some other stuff
    console.log(b)
}
oldFunc()

// This is the new and compact way of doing it
function newFunc(a = "default value", b = 23) {
    // Do some other stuff
    console.log(a)
    console.log(b)
}
newFunc()
newFunc(67)
newFunc("yo", "wassup")

// Also works with arrow functions
const newArrow = (x="Hello", y="friend") => console.log(`${x}, ${y}!`)
newArrow()

/*
SPREAD
spreads the contents of an iterable to the destination
Analogue to Python's unpacking

To spread a common iterable (like an array), the operator ... is used.
A string is also an iterable, and ... spreads into characters.
If the iterable is longer than the quantity of arguments needed,
only the first ones will be considered (rest is discarded).
*/


// Array spread example
const numbers = [1,54.3,23,5,4,3212,67,432,3,5,643,2,21]
Math.max(numbers) // Outputs NaN (accepts numbers as parameters, not an array)
Math.max(...numbers) // Outputs 3212 (correct answer)

// spread can be used to generate arrays
const veggies = ["potato", "aubergine", "courgette", "lettuce", "cabbage"]
const arrayFromSpread = [...numbers, ...veggies]
console.log(arrayFromSpread)

// Making a shallow copy becomes easy
const numbersCopy = [...numbers]
console.log(numbers === numbersCopy) // references are different

// Spread can be used over objects
const testObject = {
    prop1 : 123,
    prop2 : "something",
    extraProp : ["this", "is", "an", "array"]
}

const spreadedObject = {
    ...testObject,
    anotherProp : 492,
    yetAnotherProp : "last one",
    prop1 : "seventeen" // Note you can overwrite
}

console.log(spreadedObject)

// Just as before it is possible to make shallow copies of objects with spread

/*
REST
rest collects several arguments into an array
Analogue to Python's * and ** operators (for *args and **kwargs)

The operator ... is also used.
Helpful for making function accepting unlimited parameters
*/

// The old way uses the argument object
// Arguments is an object with this format:
// {0 : arg1, 1: arg2, 2: arg3, ...}
// Arguments won't work in arrow functions
function oldRestFunction(a, b) {
    // Its not necessary to declare a and b
    const argsArray = [...arguments]
    // The array will contain all arguments, including a and b
    console.log(argsArray)
    console.log(a)
    console.log(b)
}

oldRestFunction(1,2,3,23,4,2123,654,5426,7,8,543)

// New way uses ... operator
// Recommended way, it's faster and shorter
// Can be used in arrow functions
function newRestFunction(a, b, ...args) {
    console.log("first arg:", a)
    console.log("second arg:", b)
    console.log("the rest:", args)
}

newRestFunction(23,6,5,34,43,63,453,657,56,324,256,467,9,0,32346,162)

/*
DESTRUCTURING
In a similar way as Python, values from an array can be destructured into
several variables
*/

const baseArray = ["Jock Jones", "Tommy Hogan", "Ibiza", "Ruffy", "Lou Goringa"]
const [firstName, secondName, , fourthName] = baseArray
console.log(firstName)
console.log(secondName)
console.log(fourthName)

// Note how the third name was skipped using commas
// Also note that unlike Python it is not necessary to consume entire the array

// This can also be done with objects

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Some long honorific"
}

const {last, country, not_found} = runner;
console.log(last)
console.log(not_found) // Undefined
console.log(country)

// Note that here order is not important
// When done this way, if a key with the var name is not found,
// the value will be set to undefined
// The variable name may be set to something different using this syntax
//     key  : newVarName
const {title: honorific} = runner
console.log(honorific)

// It is possible to do nested destructuring by mixing {}s and []s
// It is possible to do destructuring in the parameters of a function def
