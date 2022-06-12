function solve(n) {
    isPrime = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false
        }
    }
    console.log(isPrime)
}

solve(7) // true
solve(8) // false
solve(81) // false