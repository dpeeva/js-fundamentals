function solve(arr) {
    let sumLeft = 0
    let sumRight = 0

    const getSum = (arr) => {
        let sum = 0
        arr.map(n => {
            sum += n
        })
        return sum
    }

    let indexLimit = 0
    let indexEqual = -1
    let length = arr.length

    for (let i = 0; i < length; i++) {
        indexLimit = i - 1
        if (indexLimit >= 0) {
            sumLeft = getSum(arr.slice(0, i))
        } else {
            sumLeft = 0
        }
        indexLimit = i + 1
        if (indexLimit < arr.length) {
            sumRight = getSum(arr.slice(i + 1, arr.length))
        } else {
            sumRight = 0
        }
        if (sumLeft === sumRight) {
            indexEqual = i
            break
        }
    }

    if (indexEqual === -1) {
        console.log("no")
    } else {
        console.log(indexEqual)
    }
}

solve([1, 2, 3, 3]) // 2
solve([1, 2]) // no
solve([1]) // 0
solve([1, 2, 3]) // no
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]) // 3