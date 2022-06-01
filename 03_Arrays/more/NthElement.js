function solve(input) {
    const length = input.length
    const step = Number(input[length - 1])
    const result = []
    for (let i = 0; i < length - 1; i += step) {
        result.push(input[i])
    }
    console.log(result.join(" "))
}

solve(['5', '20', '31', '4', '20', '2']) // 5 31 20
solve(['dsa', 'asd', 'test', 'test', '2']) // dsa test
solve(['1', '2', '3', '4', '5', '6']) // 1