function solve(arr) {
    // a - b returning:
    // negative value if the second item is bigger
    // positive value if the second item is smaller
    // 0 for equality
    // b - a for descending sort
    const sorted = arr.slice().sort((a, b) => b - a)

    const length = sorted.length
    const boundry = length / 2
    const arranged = []

    for (let i = 0; i < boundry; i++) {
        arranged.push(sorted[i])
        arranged.push(sorted[length - 1 - i])
    }
    if (length % 2 > 0) {
        arranged.pop()
    }
    console.log(arranged.join(" "))
}

// Borderline cases
solve([1, 4, 8, 5]) // 8 1 5 4
solve([1, 4, 8, 5, 2]) // 8 1 5 2 4

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]) // 94 1 69 2 63 3 52 18 31 21
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]) // 690 2 47 6 45 7 34 19 32 32