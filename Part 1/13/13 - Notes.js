/*
DOM MANIPULATION
- DOM: Document Object Model
- Connecting HTML and CSS with JS
- As such, requires a basic understandings of those languages
- Important and base concept of web development
- In js, it revolves around the "document" object
*/

/*
DOCUMENT OBJECT
- The document object represents the page linked to the script file
- It is the root of a series of other objects contained within the page
- It can be seen as a tree structure
*/

console.log(document)

/*
SELECTION METHODS
- getElementById
    - Returns element that has the provided ID (if there's a match)
- getElementsByTagName
    - Returns a list of elements based on a type of element provided
    - List type is HTMLCollection
    - If no match, HTMLCollection is empty
    - HTMLCollection is a simple/lightweight data structure
    - It allows iteration and indexation
    - Generally, tags are the keywords that go between <> in HTML
    - For example, ul, p, h1, etc...
- getElementsByClassName
    - Similar to the previous methods
    - Classes are user defined markers
    - Returns HTMLCollection
These methods are not exclusive to the document base object. (With the
exception of getElementById, since IDs should be unique).
They can be used in every level of the tree structure.
For example, we can search from an object contained within another object
we previously selected, narrowing down our search and getting more
specific results.

- querySelector
- querySelectorAll
    - querySelector returns a single element
    - querySelectorAll returns an NodeList
    - It groups all of the previous methods in just one
    - Based on CSS
    - start with . to get a class
    - start with # to get an ID
    - Tags can be mixed with classes
*/

document.getElementById("myID")
document.getElementsByTagName("p")
document.getElementsByTagName("input")
document.getElementsByClassName("jumbotron")

document.querySelector("#myID")
document.querySelectorAll("p")
document.querySelectorAll("input")
document.querySelectorAll(".jumbotron")
document.querySelector("p.myParagraph")
