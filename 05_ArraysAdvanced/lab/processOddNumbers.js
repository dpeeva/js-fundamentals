function solve(input) {
    const arr = []
    for (let i = 0; i < input.length; i++) {
        if ((input.length - 1 - i) % 2 !== 0) {
            arr.push(input[input.length - 1 - i] * 2)
        }
    }
    console.log(arr.join(" "))
}

solve([10, 15, 20, 25]) // 50 30
solve([3, 0, 10, 4, 7, 3]) // 6 8 0