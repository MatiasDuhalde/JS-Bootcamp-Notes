// LETS GET ALL THE PLANETS!

console.log("START")

async function getPlanets() {
    let currentUrl ="https://swapi.co/api/planets/"
    let planetCounter = 0
    while (currentUrl) {
        let response = await axios.get(currentUrl)
        let planets = response.data.results
        planetCounter += planets.length
        console.log(`Loading ${planetCounter} of ${response.data.count}`)
        for (let planet of planets) {
            console.log(planet.name)
        }
        currentUrl = response.data.next
    }
}
getPlanets()