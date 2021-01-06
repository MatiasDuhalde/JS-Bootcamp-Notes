/*
MORE OPERATIONS WITH OBJECTS
*/

// Shorthand object properties
// Useful when we want to make an object where we have a variable and
// we want to make an object where the key name is the name of the variable

// Example
const var1 = "abc"
const var2 = 1
// Old way
// const myObject = {var1: var1, var2: var2}
// New, short way
const myObject = {var1, var2}
console.log(myObject)

// Computed properties
// We use this when we want the name of a key to be the value of a variable
// We can place complex expressions inside the brackets, which is really useful
const user = "SuperUser"
const userRoles = {
    [user]: "Admin"
}
console.log(userRoles) // { SuperUser: "Admin"}


/*
METHODS
- Functions that belong to an object
- An example is the Math object, which has methods like random, floor, ceil, etc
- We have the keyword this, similar to Python's self
*/

// Example

const myMath = {
    someNumbers: [1, 34, 23, 67, 6, 45, 4, 2, 3, 124, 54212],
    add: function (x, y) {
        return x + y
    },
    multiply : function (x, y) {
        return x * y
    },
    shortMethod(a) {
        console.log("This is a shorthand way of making a method!")
        console.log(`Parameter: ${a}`)
    }
}

// Notice how used both long and shorthand ways of defining methods
myMath.shortMethod("YAY!")

// THIS
/*
The this keyword points to the current execution scope.
If invoked outside (in the base of the code), it will show global
properties and variables. However, it is far more useful
to use the keyword inside a defined scope (like an object).
*/

console.log(this)

const testObject = {
    year : 1943,
    phrase : "Golly gee",
    testMethod() {
        console.log(this);
        console.log(`People from ${this.year} like to say ${this.phrase}`)
    },
    changeYear(newYear) {
        this.year = newYear;
        console.log("The new year is now", this.year)
    } 
}

testObject.testMethod()

// An object can get its values changed from the outside or inside
testObject.phrase = "What in tarnation"
testObject.changeYear(1989)
testObject.testMethod()

// The object this points might change depending on how it's called
// This might cause problems, for example, when you execute a method
// from another object (execute method of objectA inside of objectB)
// For this specific problem, using an arrow function is a workaround,
// because they don't modify the value of this when invoked.

/*
setInterval(function, interval) executes function every interval ms.
Returns an Id
clearInterval(Id) stops the execution of the Id after running setInterval
*/

// If we'd like to make multiple objects, we can make a function that returns
// said object and save to output to variables.
// However, the preferred way would be using constructors.
