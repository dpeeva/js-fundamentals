function solve(n) {
    const numbers = [...(n + "")].map(Number)
    let sum = 0
    numbers.map(n => sum += n)
    const includes9 = [...(sum + "")].includes('9')
    console.log(`${n} Amazing? ${includes9 ? 'True' : 'False'}`)
}

solve(1233) // 1233 Amazing? True
solve(999) // 999 Amazing? False