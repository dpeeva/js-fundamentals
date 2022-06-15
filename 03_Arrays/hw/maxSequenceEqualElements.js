function solve(arr) {
    let count = 1
    let previous = arr.shift()
    let current = 1
    const sequences = []

    while (arr.length > 0) {
        current = arr.shift()
        if (current === previous) {
            count++
        } else {
            sequences.push({
                count: count,
                number: previous
            })
            count = 1
        }
        previous = current

        if (arr.length === 0) {
            sequences.push({
                count: count,
                number: previous
            })
        }
    }

    const longest = sequences.sort((a, b) => {
        return b.count - a.count
    })[0]

    console.log(Array.apply(null, Array(longest.count)).map(n => longest.number).join(" "))
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]) // 2 2 2
solve([1, 1, 1, 2, 3, 1, 3, 3]) // 1 1 1
solve([4, 4, 4, 4]) // 4 4 4 4
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]) // 1 1