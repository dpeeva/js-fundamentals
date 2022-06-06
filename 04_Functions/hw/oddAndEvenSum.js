function solve(n) {
    const arr = n.toString().split("")
    const sumEven = (arr) => {
        let sum = 0
        arr.map(n => sum += Number(n) % 2 === 0 ? Number(n) : 0)
        return sum
    }
    const sumOdd = (arr) => {
        let sum = 0
        arr.map(n => sum += Number(n) % 2 !== 0 ? Number(n) : 0)
        return sum
    }
    console.log(`Odd sum = ${sumOdd(arr)}, Even sum = ${sumEven(arr)}`)
}

solve(1000435) // Odd sum = 9, Even sum = 4
solve(3495892137259234) // Odd sum = 54, Even sum = 22