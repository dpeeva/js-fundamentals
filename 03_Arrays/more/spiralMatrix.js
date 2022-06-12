function solve(a, b) {
    let rows = Number(a)
    let cols = Number(b)

    const size = a * b

    let startCol = 0
    let endCol = cols - 1

    let startRow = 0
    let endRow = rows - 1

    let matrix = []
    for (let inner = 0; inner < rows; inner++) {
        matrix[inner] = []
    }

    let counter = 0

    while (counter <= size) {
        // Cols, Left to Right
        if (startCol > endCol) {
            break
        }
        for (let c = startCol; c <= endCol; c++) {
            counter++
            matrix[startRow][c] = counter
        }
        startRow++

        // Rows, Up to Down
        if (startRow > endRow) {
            break
        }
        for (let r = startRow; r <= endRow; r++) {
            counter++
            matrix[r][endCol] = counter
        }
        endCol--

        // Cols, Right to Left
        if (startCol > endCol) {
            break
        }
        for (let c = endCol; c >= startCol; c--) {
            counter++
            matrix[endRow][c] = counter
        }
        endRow--

        // Rows, Down to Up
        if (startRow > endRow) {
            break
        }
        for (let r = endRow; r >= startRow; r--) {
            counter++
            matrix[r][startCol] = counter
        }
        startCol++
    }

    matrix.map(r => console.log(r.join(" ")))
}

solve(5, 5)
// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

solve(3, 3)
// 1 2 3
// 8 9 4
// 7 6 5

// Borderline cases
solve(7, 4)
// 1 2 3 4
// 18 19 20 5
// 17 28 21 6
// 16 27 22 7
// 15 26 23 8
// 14 25 24 9
// 13 12 11 10

solve(5, 3)
// 1 2 3
// 12 13 4
// 11 14 5
// 10 15 6
// 9 8 7

solve(2, 4)
// 1 2 3 4
// 8 7 6 5

solve(2, 3)
// 1 2 3
// 6 5 4