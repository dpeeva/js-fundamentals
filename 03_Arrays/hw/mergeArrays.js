function solve(a, b) {
    const result = a.map((e, i) => {
        if (i % 2 === 0) {
            return Number(a[i]) + Number(b[i])
        }
        if (i % 2 !== 0) {
            return `${a[i]}${b[i]}`
        }
    })
    console.log(result.join(" - "))
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
) // 22 - 1522 - 110 - 5636 - 46

solve(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
) // 35 - 12312333 - 10 - 77122 - 48