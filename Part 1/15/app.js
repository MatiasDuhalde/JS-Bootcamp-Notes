/*
EVENTS

Introductory examples:
- hover
- clicking
- typing
- button press
- drag and drop
- scrolling
- focus
- resize

There are many ways to accept and handle events
    1- Directly in the HTML
        - Syntax: <tag onEVENT_NAME="//here goes JS code to exec">
    2- Give a value to object property event (in JS)
        - It doesn't allow to add a another behaviour for the same object
          and the same event
    3- Use addEventListener function
        - Preferred way, it allows to add multiple behaviours without overwriting
*/

// Way no. 2
const badBtn = document.querySelector("#badBtn")

badBtn.onclick = function () {
    console.log("Something")
}

// Way no. 3

const btn = document.querySelector("#goodBtn")

btn.addEventListener("click", function() {
    console.log("Clicking does this!")
})

btn.addEventListener("click", function() {
    console.log("Clicking also does this!")
})

btn.addEventListener("mouseover", function() {
    btn.innerText = "BRUH!";
})

btn.addEventListener("mouseout", function() {
    btn.innerText = "addEventListener";
})

window.addEventListener("scroll", function() {
    console.log("YOU ARE NOW SCROLLING")
})


const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet"
];

function changeColor() {
    const tileColor = this.style.backgroundColor
    console.log(`You clicked the ${tileColor} box`)
    const h1 = document.querySelector("h1")
    h1.style.color = tileColor
    h1.innerText = `Now I'm ${tileColor}!`
}

const container = document.querySelector("#boxes")
for (let color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box")

    // Notice how you can use a wrapper function to pass arguments to a function
    // call in the parameters
    // box.addEventListener("click", function() {
    //     printColor(color)
    // })

    // The other (and generally better) way would be using the "this" keyword
    box.addEventListener("click", changeColor)

    container.appendChild(box);
}

/*
THE EVENT OBJECT
This object is always passed when an event happens.
It is passed implicitly as an argument and can be captured and used 
inside the function.
The specific type of event object depends on the event linked (i.e. "click",
"mouseover", "mouseout", etc)
It contains plenty of useful information, like
    - time the event happened since page load
    - if you are pressing a key (alt, ctrl, etc)
    - the position of the cursor
*/


const h1 = document.querySelector("h1")

function eventObjectTest(evt) {
    console.log(evt)
}

h1.addEventListener("click", eventObjectTest)

// document.body.addEventListener("keypress", function(e) {
//     console.log(e)
// })


const usernameInput = document.querySelector("#username")

usernameInput.addEventListener("keydown", function(e) {
    console.log("KEY DOWN")
})

usernameInput.addEventListener("keyup", function(e) {
    console.log("KEY UP")
})

// Shopping List testing!
const shoppingInput = document.querySelector("#shoppingInput")

function addItem(e) {
    if (e.key !== "Enter" || this.value === "") {
        return;
    }
    const li = document.createElement("li");
    li.innerText = this.value
    const listContainer = document.querySelector("#shoppingList")
    listContainer.appendChild(li)
    this.value = "";

}

shoppingInput.addEventListener("keypress", addItem)

// Form testing

const creditCardInput = document.querySelector("#cc")
const termsCheckbox = document.querySelector("#terms")
const veggieSelect = document.querySelector("#veggie")

const form = document.querySelector("#signUpForm")

form.addEventListener("submit", function(e) {
    console.log('Your credit card: ', creditCardInput.value)
    console.log('Your checkmark: ', termsCheckbox.checked)
    console.log('Your veggie: ', veggieSelect.value)
    e.preventDefault();
})

// Input and change events
// Instead of waiting for a submission in a form, we can execute a piece of
// code as soon as the user modifies the fields, using the input event


creditCardInput.addEventListener('input', function(e) {
    console.log("You modified the credit card number!", e)
})

veggieSelect.addEventListener('input', function(e) {
    console.log("You modified the veg!", e)
})

// Change event only updates when "losing focus"
// This happens when clicking away of the object, pressing enter, etc.
