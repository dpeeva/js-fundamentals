function solve(a, b, c) {
    const sum = a + b + c
    const numberType = sum % 1 !== 0 ? "Float" : "Integer"
    console.log(`${sum} - ${numberType}`)
}

solve(9, 100, 1.1) // 110.1 - Float
solve(100, 200, 303) // 603 - Integer