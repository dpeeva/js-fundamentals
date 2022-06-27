function solve(current, ordered) {
    const products = {}
    for (let i = 0; i < current.length - 1; i += 2) {
        let n = Number(current[i + 1])
        if (products[current[i]]) {
            products[current[i]] += n
        } else {
            products[current[i]] = n
        }
    }
    for (let i = 0; i < ordered.length - 1; i += 2) {
        let n = Number(ordered[i + 1])
        if (products[ordered[i]]) {
            products[ordered[i]] += n
        } else {
            products[ordered[i]] = n
        }
    }
    Object.keys(products).map(k => console.log(`${k} -> ${products[k]}`))
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70

solve(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)
// Salt -> 2
// Fanta -> 4
// Apple -> 21
// Water -> 4
// Juice -> 5
// Sugar -> 44
// Oil -> 12
// Tomatoes -> 7
// Bananas -> 30