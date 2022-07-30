// 80 of 100
function solve(a, b) {
    const result = b.toLowerCase().includes(a.toLowerCase())

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