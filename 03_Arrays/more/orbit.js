function solve(input) {
    const width = input[0]
    const height = input[1]
    const x = input[2]
    const y = input[3]

    const matrix = []

    let orbitX = 0
    let orbitY = 0

    let n = 0

    for (let row = 0; row < width; row++) {
        matrix[row] = []
        for (let col = 0; col < height; col++) {
            orbitX = Math.abs(row - x)
            orbitY = Math.abs(col - y)

            n = orbitX > orbitY ? orbitX : orbitY

            matrix[row][col] = n + 1 // numbers we set starting from 1, not 0
        }
        console.log(matrix[row].join(" "))
    }
}

solve(
    [4, 4, 0, 0]
)
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

solve(
    [5, 5, 2, 2]
)
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3 

solve(
    [3, 3, 2, 2]
)
// 3 3 3
// 3 2 2
// 3 2 1