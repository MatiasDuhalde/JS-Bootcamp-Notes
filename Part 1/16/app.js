/*
CALL STACK
Mechanism which tracks what part of the code it is currently being
executed. Keeps track of functions that are currently running, waiting
functions, who called who, etc.

It consists in a stack data structure.
When a function is invoked, it is added to the top of the stack.
Subsequent functions are also added over the previous. When a function
finishes executing (e.g. returns) it is removed from the stack.
Stacks follow a FIFO behaviour.

In javascript and other languages, debugging tools allow us to see what the
stack contains in a given moment via breakpoints.

ASYNCHRONOUS CODE

Unlike other languages like Python, JS is a single-threaded language.
Then, how is it possible to make asynchronous code?

Browsers themselves (which are programmed in other languages like C++)
can do threading based on the JS script they're given. What browsers
actually do is when the function call is required, it is appended to the top
of the call stack and executed as soon as posible.


setTimeout(callback_function, ms)   
*/

// Button move example
// Using setTimeout in this case requires a lot of nesting

const btn = document.querySelector("button");

setTimeout(function() {
    btn.style.transform = `translateX(100px)`;
    setTimeout(function() {
        btn.style.transform = `translateX(200px)`;
    }, 1000)
}, 1000);

/*
PROMISES
Allow to create more organized asynchronous code.
Promises are objects representing the outcome of an operation

Promises contain a function that uses two functions as parameters
(resolve and reject) if resolve runs within the function, the
promise get fullfilled. If reject runs within the function, it
gets rejected. If neither run, its status will be "pending".

A fullfilled promise can run the "then" method.
A rejected promise can run the "catch" method.
*/

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (Math.random() < 0.5) {
            resolve()
        }
        else {
            reject()
        }
    }, 1000)
})
myPromise.then(function() {
    console.log("Promise fullfilled")
}).catch(function() {
    console.log("Promise rejected")
})

console.log("This is running")

// A general pattern that appears when creating promises, is making a function
// that generates promises.
// Also, we might want more information about the rejection or resolving
// We can do that by adding parameters in the function call as follows:

function myRequest(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const pages = {
                '/users': [
                    {id: 1, username: "Bilbo"},
                    {id: 5, username: "Esmeralda"}
                ],
                "/about": "This is the about page"
            }
            const data = pages[url]
            if (data) {
                resolve({status: 200, data});
            }
            else {
                reject({status: 404})
            }
            
        }, 3000);
    })
}

myRequest("/users").then(function(res) {
    console.log(`REQUEST SUCCESSFUL (${res.status})`)
    console.log(res.data)
}).catch(function(res) {
    console.log(`REQUEST FAILED (${res.status})`)
})