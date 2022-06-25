function solve(a, b) {
    const length = a.length > b.length ? a.length : b.length
    let differenceAt = -1
    for (let i = 0; i < length; i++) {
        if (a[i] !== b[i]) {
            differenceAt = i
            break
        }
    }

    if (differenceAt !== -1) {
        console.log(`Arrays are not identical. Found difference at ${differenceAt} index`)
    } else {
        const sum = a.map(Number).reduce((a, b) => a + b, 0)
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

solve(
    ['10', '20', '30'], ['10', '20', '30']
)
// Arrays are identical. Sum: 60

solve(
    ['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']
)
// Arrays are not identical. Found difference at 2 index

solve(
    ['1'], ['10']
)
// Arrays are not identical. Found difference at 0 index