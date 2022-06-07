function solve(n) {
    if (n < 0) {
        console.log(`It's not so perfect.`)
    }

    const divisors = []
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i)
        }
    }

    let aliquot = 0
    divisors.map(d => aliquot += d)

    if (aliquot === n) {
        console.log("We have a perfect number!")
    } else {
        console.log(`It's not so perfect.`)
    }
}

solve(6) // We have a perfect number!
solve(28) // We have a perfect number!
solve(1236498) // It's not so perfect.