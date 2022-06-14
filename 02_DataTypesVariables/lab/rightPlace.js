function solve(a, b, c) {
    const letters = [...a]
    const index = letters.indexOf("_")
    letters.splice(index, 1, b)

    const word = letters.join("")

    if (word === c) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}

solve(
    'Str_ng', 'I', 'Strong'
) // Not Matched

solve(
    'Str_ng', 'i', 'String'
) // Matched