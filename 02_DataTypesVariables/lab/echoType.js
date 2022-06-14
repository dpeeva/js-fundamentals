function solve(input) {
    console.log(typeof input)

    if (input === null) {
        console.log("Parameter is not suitable for printing")
    } else {
        console.log(input)
    }
}

solve('Hello, JavaScript!')
// string
// Hello, JavaScript!

solve(18)
// number
// 18

solve(null)
// object
// Parameter is not suitable for printing

// Borderline cases
solve(0)
solve('')