function solve(a, b) {
    const pattern = new RegExp(`(?<word>\\b${a})\\b`, "gi")
    let result = pattern.exec(b)

    if (result) {
        console.log(a)
    } else {
        console.log(`${a} not found!`)
    }
}

solve(
    'javascript',
    'JavaScript is the best programming language'
) // javascript

solve(
    'python',
    'JavaScript is the best programming language'
) // python not found!