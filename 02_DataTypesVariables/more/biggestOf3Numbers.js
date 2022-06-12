function solve(a, b, c) {
    const result = [a, b, c].sort((a, b) => b - a)
    console.log(result[0])
}

solve(
    -2,
    7,
    3
) // 7

solve(
    130,
    5,
    99
) // 130

solve(
    43,
    43.2,
    43.1
) // 43.2

solve(
    2,
    2,
    2
) // 2