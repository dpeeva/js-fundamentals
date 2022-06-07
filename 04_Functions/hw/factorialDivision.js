function solve(a, b) {
    const calculateFacorial = n => {
        let product = 1
        for (let i = n; i > 0; i--) {
            product *= i
        }
        return product
    }

    const aF = calculateFacorial(a)
    const bF = calculateFacorial(b)

    console.log((aF / bF).toFixed(2))
}

solve(5, 2) // 60.00
solve(6, 2) // 360.00