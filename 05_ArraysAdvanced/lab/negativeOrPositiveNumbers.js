function solve(input) {
    const result = []
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) < 0) {
            // put to be first
            result.unshift(input[i])
        } else {
            // put to be last
            result.push(input[i])
        }
    }

    result.map(n => console.log(n))
}

solve(['7', '-2', '8', '9'])
// -2
// 7
// 8
// 9

solve(['3', '-2', '0', '-1'])
// -1
// -2
// 3
// 0