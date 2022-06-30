function solve(input) {
    const x1 = input[0]
    const y1 = input[1]
    const x2 = input[2]
    const y2 = input[3]

    const isValid = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

    const r1 = isValid(x1, y1, 0, 0)
    if (parseInt(r1) === r1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    const r2 = isValid(x2, y2, 0, 0)
    if (parseInt(r2) === r2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    const r3 = isValid(x1, y1, x2, y2)
    if (parseInt(r3) === r3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

solve([3, 0, 0, 4])
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

solve([2, 1, 1, 1])
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid