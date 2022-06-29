function solve(input) {
    let n = input
    const getAverage = (n) => n.toString().split("").reduce((a, b) => Number(a) + Number(b), 0) / n.toString().length
    let average = getAverage(n)

    while (average <= 5) {
        n = Number(n += '9')
        average = getAverage(n)
    }
    console.log(n)
}

solve(101) // 1019999
solve(5835) // 5835