function solve(n) {
    const years = n * 100
    const days = Math.trunc(years * 365.2422)
    const hours = days * 24
    const minutes = hours * 60
    console.log(`${n} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}

solve(1) // 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
solve(5) // 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes