// LETS GET ALL THE PLANETS!

console.log("START")
let currentPromise = fetch("https://swapi.co/api/planets/")

while (currentPromise) {
    currentPromise.then(function(response) {
        console.log("Successfully connected to", response.url)
        if (!response.ok) {
            throw new Error("Failed to get results")
        }
        console.log("PARSING...")
        return response.json()
    }).then(function(data) {
        for(let planet of data.results) {
            console.log(planet.name)
        }
        currentPromise = data.next ? fetch(data.next) : null
        return currentPromise
    }).catch(function() {
        console.log("ERROR")
    })
    console.log(currentPromise)
    break
}