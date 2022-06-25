function solve(input) {
    console.log(
        input.map(Number).filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
    )
}

solve(['1', '2', '3', '4', '5', '6']) // 12
solve(['3', '5', '7', '9']) // 0
solve(['2', '4', '6', '8', '10']) // 30