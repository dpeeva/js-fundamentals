function solve(a, b) {
    const take = b[0]
    const del = b[1]
    const wanted = b[2]

    const numbers = a.slice(0, take)
    numbers.splice(0, del)

    let occurrences = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === wanted) {
            occurrences++
        }
    }

    console.log(`Number ${wanted} occurs ${occurrences} times.`)
}

solve(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
) // Number 3 occurs 1 times.

solve(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
) // Number 5 occurs 1 times.