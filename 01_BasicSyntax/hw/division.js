function solve(n) {
    const dividers = [2, 3, 6, 7, 10].filter(divider => n % divider === 0)
    if (!dividers.length) {
        console.log(`Not divisible`)
    } else {
        console.log(`The number is divisible by ${dividers[dividers.length - 1]}`)
    }
}

solve(30) // The number is divisible by 10
solve(15) // The number is divisible by 3
solve(12) // The number is divisible by 6
solve(1643) // Not divisible