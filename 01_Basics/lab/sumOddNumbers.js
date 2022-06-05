function solve(n) {
    let sum = 0
    let printed = 0
    let index = 1

    while (printed < n) {
        if (index % 2 !== 0) {
            printed++
            console.log(index)
            sum += index
        }
        index++
    }
    console.log(`Sum: ${sum}`)
}

solve(5)
// 1
// 3
// 5
// 7
// 9
// Sum: 25

solve(3)
// 1
// 3
// 5
// Sum: 9