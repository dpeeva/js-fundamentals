function solve(a, b, c) {
    const sum = a + b + c
    const numberType = Number.isInteger(sum) ? "Integer" : "Float"
    console.log(`${sum} - ${numberType}`)
}

solve(9, 100, 1.1) // 110.1 - Float
solve(100, 200, 303) // 603 - Integer