function solve(sequence, arr) {
    const bomb = arr[0]
    const range = arr[1]
    const numbers = sequence.slice()

    let bombIndex = numbers.indexOf(bomb)

    while (bombIndex !== -1) {
        startIndexLeft = bombIndex - range >= 0 ? bombIndex - range : 0
        // detonate in range to the left
        numbers.splice(startIndexLeft, range)
        // console.log("after left: ", numbers.join(" "))
        // detonate in range to the right, including current
        startIndexRight = bombIndex - range >= 0
            ? bombIndex - range
            : 0
        numbers.splice(startIndexRight, range + 1)
        // console.log("after right: ", numbers.join(" "))
        bombIndex = numbers.indexOf(bomb)
    }
    let sum = 0
    numbers.map(n => sum += n)
    console.log(sum)
}

solve(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
) // 12

solve(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
) // 5

// Borderline cases
solve(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
) // 4

solve(
    [],
    [5, 2]
) // 0

solve(
    [1],
    [5, 2]
) // 1

solve(
    [2],
    [5, 2]
) // 2

solve(
    [5],
    [5, 2]
) // 0

solve(
    [5, 5, 5, 1, 1, 1],
    [5, 2]
) // 1