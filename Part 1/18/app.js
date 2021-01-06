/*
ASYNC & AWAIT

ASYNC FUNCTIONS
Basically just syntactical sugar for promises, but in the end
make the code more readable and easier to mantain.
Async functions are declared using the async keyword before the
function declaration.
Async functions always return a promise.
If the return statement is used inside the async function,
it will assign the returned expression as the promise "value".

*/

// Declaring an async function
// Async functions always return a promise
// The promise will be fullfilled, unless an exception is raised

async function myAsyncTorF(bool) {
    if (!bool) {
        throw "bool was false"
    }
    return "bool was true"
}

myAsyncTorF(true).then(function(res) {
    console.log(res)
}).catch(function(res) {
    console.log(res)
})

// Without async

function myTorF(bool) {
    return new Promise(function(resolve, reject) {
        if (!bool) {
            reject("bool was false")
        }
        resolve("bool was true")
    })
}

myTorF(true).then(function(res) {
    console.log(res)
}).catch(function(res) {
    console.log(res)
})

// Both examples are basically the same


// AWAIT keyword
// Inside an async function, it "waits" until another promise is resolved

async function getPlanets() {
    const res = await axios.get("https://swapi.co/api/people/1/")
    console.log(res.data)
    console.log("This prints after")
}

getPlanets()
console.log("This prints before")


// If an error happens within the function, its common practice
// to catch them with try/catch blocks as follows
// Equivalent to Python's try/except


async function getPlanets2() {
    try {
        console.log("Trying to fetch planets...")
        const res = await axios.get("https://swapi.co/api/notpeople/1/")
        console.log(res.data)
        
    } catch (e) {
        console.log("Exception caught!")
        console.log(e)
    }
}

getPlanets2()


// To await for multiple promises with one statement inside an async function
// await Promise.all([promise1, promise2, promise3, ...])