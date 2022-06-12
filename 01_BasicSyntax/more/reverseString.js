function solve(input) {
    const reversed = []
    for (let i = 0; i < input.length; i++) {
        reversed.push(input[input.length - 1 - i])
    }
    console.log(reversed.join(""))
}

solve("Hello") // olleH
solve("SoftUni") // inUtfoS
solve("1234") // 54321