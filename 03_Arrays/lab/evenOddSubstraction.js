function solve(input) {
    const even = input.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
    const odd = input.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0)

    console.log(even - odd)
}

solve([1, 2, 3, 4, 5, 6]) // 3
solve([3, 5, 7, 9]) // -24
solve([2, 4, 6, 8, 10]) // 30