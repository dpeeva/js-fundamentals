function solve(a, b, c) {
    const sum = a + b + c
    const numberType = sum % Math.trunc(sum) == 0 ? "Float" : "Integer"
    // const numberType = sum - parseInt(sum) !== 0 ? "Float" : "Integer"
    console.log(`${sum} - ${numberType}`)
}

solve(9, 100, 1.1) // 110.1 - Float
solve(100, 200, 303) // 603 - Integer