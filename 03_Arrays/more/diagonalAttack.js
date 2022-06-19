function solve(input) {
    const matrix = []
    for (let outer = 0; outer < input.length; outer++) {
        matrix[outer] = []
    }
    let row = []
    let current = 0
    let diagonalSumLeft = 0
    let diagonalSumRight = 0

    for (let outer = 0; outer < input.length; outer++) {
        row = input[outer].split(" ").map(Number)
        for (let inner = 0; inner < row.length; inner++) {
            current = row[inner]
            matrix[outer][inner] = current

            if (outer === inner) {
                diagonalSumLeft += current
            }
            if (inner === row.length - 1 - outer) {
                diagonalSumRight += current
            }
        }
    }

    let tempRow = []
    for (let outer = 0; outer < matrix.length; outer++) {
        for (let inner = 0; inner < matrix[outer].length; inner++) {

            if (diagonalSumLeft === diagonalSumRight) {
                if (outer === inner || inner === row.length - 1 - outer) {
                    tempRow[inner] = matrix[outer][inner]
                } else {
                    tempRow[inner] = diagonalSumLeft
                }
            } else {
                tempRow[inner] = matrix[outer][inner]
            }
        }
        console.log(tempRow.join(" "))
        tempRow = []
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
])
// 1 1 1
// 1 1 1
// 1 1 0