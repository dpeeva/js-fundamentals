function solve(input) {
    let current = 0
    let next = 0
    let sequence = [input[0]]
    let lower = current

    for (let i = 0; i < input.length; i++) {
        current = input[i]
        lower = lower <= current ? current : lower
        next = input[i + 1]

        if (lower <= next) {
            sequence.push(next)
        }
    }
    console.log(sequence.join(" "))
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]) // 1 3 8 10 12 24
solve([1, 2, 3, 4]) // 1 2 3 4
solve([20, 3, 2, 15, 6, 1]) // 20