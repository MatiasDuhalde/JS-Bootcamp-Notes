const testPangram = "Glib jocks quiz nymph to vex dwarf.";

function isPangram(pangramString) {
    pangramString = pangramString.toUpperCase()
    for (let charNum = 65; charNum <= 90; ++charNum) {
        let char = String.fromCharCode(charNum)
        if (pangramString.indexOf(char) === -1) {
            return false
        }
    }
    return true
}

console.log(isPangram(testPangram))