function solve(input) {
    const numbers = input.split(" ").map(Number)
    let sum = 0
    numbers.map(n => sum += n)
    sum = sum / numbers.length
    const sorted = numbers.sort((a, b) => b - a)
    const result = []

    for (let i = 0; i < 5; i++) {
        if (sorted[i] > sum) {
            result.push(sorted[i])
        } else {
            break
        }
    }

    if (result.length === 0) {
        console.log("No")
    }
    console.log(result.join(" "))
}

solve('10 20 30 40 50') // 50 40
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51') // 60 60 51 50 50
solve('1') // No
solve('-1 -2 -3 -4 -5 -6') // -1 -2 -3