function solve(a, b, operator) {
    switch (operator) {
        case "multiply":
            console.log(a * b)
            break
        case "divide":
            console.log(a / b)
            break
        case "add":
            console.log(a + b)
            break
        case "subtract":
            console.log(a - b)
            break
    }
}

solve(
    5,
    5,
    'multiply'
) // 25

solve(
    40,
    8,
    'divide'
) // 5

solve(
    12,
    19,
    'add'
) // 31

solve(
    50,
    13,
    'subtract'
) // 37