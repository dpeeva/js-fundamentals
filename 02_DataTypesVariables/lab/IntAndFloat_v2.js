function solve(a, b, c) {
    const sum = a + b + c
    const numberType = [...String(sum)].indexOf(".") > -1 ? "Float" : "Integer"
    console.log(`${sum} - ${numberType}`)
}

solve(9, 100, 1.1) // 110.1 - Float
solve(100, 200, 303) // 603 - Integer

// Converting string to array
const string = 'word'

// Option 1
string.split('');

// Option 2
[...string]

// Option 3
Array.from(string)

// Option 4
Object.assign([], string)

// Result:
// ['w', 'o', 'r', 'd']