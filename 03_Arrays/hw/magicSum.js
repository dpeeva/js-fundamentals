function solve(arr, target) {
    const uniques = []
    let current = 0
    const numbers = arr // [...new Set(arr)] // removing duplicate values from array

    const uniquePairs = (n, nums) => {
        const uniques = []

        for (let i = 0; i < nums.length; i++) {
            if (n + nums[i] === target) {
                uniques.push([n, nums[i]])
            }
        }

        return uniques
    }

    while (numbers.length > 0) {
        current = numbers.shift()
        uniques.push(...uniquePairs(current, numbers))
    }

    uniques.map(pair => console.log(pair.join(" ")))
}

solve(
    [1, 7, 6, 2, 19, 23],
    8
)
// 1 7
// 6 2


solve(
    [14, 20, 60, 13, 7, 19, 8],
    27
)
// 14 13
// 20 7
// 19 8

solve(
    [1, 2, 3, 4, 5, 6],
    6
)
// 1 5
// 2 4

// Borderline cases
solve(
    [1, 1, 2, 2],
    3
)
// 1 2
// 1 2