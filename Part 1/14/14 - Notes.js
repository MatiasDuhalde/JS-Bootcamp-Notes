/*
MANIPULATION/ACCESSING METHODS
As noticed before, DOM objects have an overwhelming amount of
attributes and methods. To manipulate or access data, the
following methods are the most useful/important.

- innerText
    - It outputs the text that the user can see
- textContent
    - It outputs all text inside the object, even if it's not
    visible to te user
    - Preserves indentation.
    - Shows hidden content like "display: none" or script tags
- innerHTML
    - Returns a string showing the HTML code inside of an object
- getAttribute
    - Allows getting attributes without shortcuts (like value)
- setAttribute
    - Allows changing attributes without shortcuts (like value)
    - Allows getting an element based on the current one

Attributes:
- value (for inputs, ranges, etc)
- checked (bool, for checkboxes)
- placeholder
- href (for hyperlinks, imgs, etc)

Neighboring attributes:
- parentElement
- children (returns an HTMLCollection)
- nextElementSibling (gets object in same level)
- previousElementSibling

Style
- style
    - color
    - padding
    - margin
    - etc
The style object contains all the properties that define
its visual characteristics.
It cannot be used to read existing properties, unless those
properties were previously defined in-line (in the HTML script)
A property that contains dashes in CSS is reformatted to
camel case in JS
example: background-color => backgroundColor
This, because variable names cannot contain dashes in JS,
they are interpreted as a subtraction symbol.

- getComputedStyle()
If we want to get the current style, using the style object is
not always useful. This function return an object containing the
properties and their real value.
usage: getComputedStyle(object)

- classList
Attribute, returns a list object (DOMTokenList), which contains
the classes set to the object. It comes with different methods to
manipulate the classes.
    - add
    - remove
    - toggle
    - includes
If we add a new class to an object, it must be defined on the CSS
file or else it won't take effect.
*/

// It is possible to do
const p = document.querySelector("p")
p.innerText = "New text contained within this paragraph."
// Changes the text inside the tags. It replaces everything, even
// things like sub-tags.

const p_parent = p.parentElement // To get parent
p_parent.style.color = "green" // Change a style property

const pSibling = p.nextElementSibling
const pClassList = pSibling.classList
pClassList.add("todo")
pClassList.toggle("title")

/*
CREATING ELEMENTS
document.createElement(tag)
    Creates a new element object based on the tag provided
    (tag: h1, a, p, img, input, div, etc...)

- parentObj.appendChild(newChild)
    Appends newChild at the end of parentObj
- parentObj.insertBefore(newSibling, siblingObj)
    Appends newSibling right before siblingObj
- targetObj.insertAdjacentElement(position, newObj)
    Inserts newObj relative to targetObj depending on position
    Position values:
        "beforebegin"   Insert as sibling before targetObj
        "afterbegin"    Insert as children in first position
        "beforeend"     Insert as children in last position
        "afterend"      Insert as sibling after targetObj
- parentObj.append(new1, new2, ...)
    Appends objects as children at the end
    Unlike appendChild, it allows multiple objects to be appended
    at the same time
- parentObj.preppend(new1, new2, ...)
    Inserts objects as children at the beginning
- parentObj.removeChild(objectToRemove)
    Similar to appendChild. Returns removed object.
- objectToRemove.remove()
*/


// Creating a new element
const newTitle = document.createElement("h2")
newTitle.innerText = "This is a new h2 title!!"
newTitle.classList.add("title")
