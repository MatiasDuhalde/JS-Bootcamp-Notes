/*
REQUESTS
There are different methods to request data:
- XMLHTTP
    - The old standard
    - Compatible in most if not all browsers
    - Long syntax
    - Unlike the name suggests, it is not limited to XML format.
    - Doesn't support promises
    - If we need to use the results to make another request,
      we must nest inside the callback
- FETCH
    - Newer than XMLHTTP
    - Not supported in IE
    - Support promises
    - Needs additional promise for parsing data
    - Easier to chain
- AXIOS
    - The newest option
    - Requires an external package
    - It has an easy syntax
    - It automatically parses the data and handles errors
    - Its a simplified version of fetch (made with fetch)


AJAX (Asynchronous Javscript And XML)
*/

// XMLHttpRequest

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", function() {
    // Data contains a bunch of properties
    // and information
    // The raw string is in firstRequest.responseText
    // In this case is formatted in JSON
    // To translate it into an object we use the JSON object
    const data = JSON.parse(this.responseText)
    console.log(data)
    for(let species of data.results) {
        console.log(species.name)
    }
})
firstRequest.addEventListener("error", function() {
    console.log("ERROR")
})

// This syntax also works:
// firstRequest.onload = function() {
//     do_something()
// }
// firstRequest.onerror = function() {
//     do_something()
// }

firstRequest.open("GET", "https://swapi.co/api/species/");
firstRequest.send();
console.log("Request sent!")

// FETCH
// The fetch function returns a promise
// Since it returns a promise, we must use then
// It only runs the catch statement on network errors
// If an HTTP error happens, then still runs, so we should handle
// this case inside of it.
fetch("https://swapi.co/api/planets/").then(function(response) {
    // This function receives a Response object
    // We get a byte stream contained within Response.body
    // To read it we can use Response.json()
    // Returns another promise, because sometimes the data 
    // streams are so large it would take a long time to
    // process. Therefore, it is separated into an asynchronous process
    console.log("Successfully connected to", response.url)
    if (response.ok) {
        console.log("PARSING...")
        response.json().then(function(data){
            for(let planet of data.results) {
                console.log(planet.name)
            }
        })
    }
    else {
        console.log("Failed to get results")
    }
}).catch(function() {
    console.log("ERROR")
})

// AXIOS
// Axios must be imported

axios.get("https://swapi.co/api/planets/").then(function(response) {
    console.log(response)
    console.log("yeet")
}).catch(function(err) {
    // If status code != 200 catch runs
    console.log(err)
})
