function solve(input) {
    const result = input.map((n, i) => {
        if (n % 2 === 0) {
            // even
            return n + i
        }
        if (n % 2 !== 0) {
            // odd
            return n - i
        }
    })
    console.log(result)
    let initialSum = 0
    input.map(n => {
        return initialSum += n
    })
    console.log(initialSum)
    let finalSum = 0
    result.map(n => {
        return finalSum += n
    })
    console.log(finalSum)
}

solve([5, 15, 23, 56, 35])
// [ 5, 14, 21, 59, 31 ]
// 134
// 130

solve([-5, 11, 3, 0, 2])
// [ -5, 10, 1, 3, 6 ]
// 11
// 15