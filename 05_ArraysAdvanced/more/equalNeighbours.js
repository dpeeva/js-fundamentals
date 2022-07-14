function solve(matrix) {
    let equals = 0
    let current = ""
    let val = ""
    let upIndex = -1
    let downIndex = -1
    let leftIndex = -1
    let rightIndex = -1

    const areEqual = (val, target) => val === target

    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            current = matrix[i][k]
            upIndex = i - 1
            downIndex = i + 1
            leftIndex = k - 1
            rightIndex = k + 1

            if (upIndex >= 0 && upIndex < matrix.length) {
                val = matrix[upIndex][k]
                if (areEqual(val, current)) {
                    equals += 1
                }
            }
            if (downIndex >= 0 && downIndex < matrix.length) {
                val = matrix[downIndex][k]
                if (areEqual(val, current)) {
                    equals += 1
                }
            }
            if (leftIndex >= 0 && leftIndex < matrix[i].length) {
                val = matrix[i][leftIndex]
                if (areEqual(val, current)) {
                    equals += 1
                }
            }
            if (rightIndex >= 0 && rightIndex < matrix[i].length) {
                val = matrix[i][rightIndex]
                if (areEqual(val, current)) {
                    equals += 1
                }
            }
        }
    }
    console.log(equals / 2)
}

solve(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
) // 1

solve(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]
) // 2