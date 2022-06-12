function solve(arr) {
    let sum = 0
    arr[0].map(c => sum += c)
    let currentSum = 0
    let magical = true
    const length = arr.length

    for (let row = 1; row < length; row++) {
        arr[row].map(c => currentSum += c)
        if (currentSum !== sum) {
            magical = false
            break
        }
        currentSum = 0
    }
    if (magical) {
        for (let row = 0; row < length; row++) {
            for (let col = 0; col < length; col++) {
                currentSum += arr[col][row]
            }
            if (currentSum !== sum) {
                magical = false
                break
            }
            currentSum = 0
        }
    }

    console.log(magical)
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]) // true

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]) // false

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]) // true