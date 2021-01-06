const testArray = [75, 76, 80, 95, 100]

function arrayAvg(arr) {
    let total = 0;
    for (let num of arr) {
        total += num
    }
    return total / arr.length
}

console.log(arrayAvg(testArray))
