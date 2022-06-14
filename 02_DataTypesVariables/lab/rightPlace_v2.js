function solve(a, b, c) {
    const word = a.replace("_", b)

    console.log(
        word === c
            ? "Matched"
            : "Not Matched"
    )
}

solve(
    'Str_ng', 'I', 'Strong'
) // Not Matched

solve(
    'Str_ng', 'i', 'String'
) // Matched