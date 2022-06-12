function solve(arr) {
    const sorted = arr.slice().sort(
        // compare by length, ascending order
        (a, b) => a.length - b.length
    )
    sorted.sort(
        (a, b) => {
            const result = a.length - b.length
            if (result === 0) {
                // compare alphabetically, case-sensitive
                return a.localeCompare(
                    b, undefined,
                    { sensitivity: 'base' }
                )
            } else {
                return result
            }
        }
    )
    sorted.map(x => console.log(x))
}

// Borderline cases
solve(
    ['alpha', 'beta', 'gamma', 'Gamma']
)
// beta
// alpha
// gamma
// Gamma

solve(
    ['test', 'Deny', 'omen', 'Default']
)
// Deny
// omen
// test
// Default

solve(
    ['alpha', 'beta', 'gamma']
)
// beta
// alpha
// gamma

solve(
    ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
)
// Jack
// Isacc
// George
// Theodor
// Harrison