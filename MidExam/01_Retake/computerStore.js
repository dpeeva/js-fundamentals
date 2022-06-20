function solve(input) {
    const discounts = {
        regular: 0,
        special: 0.10
    }

    let discount = ""
    let current = ""
    let sum = 0

    for (let i = 0; i < input.length; i++) {
        current = input[i]
        if (current === "special" || current === "regular") {
            discount = current
            if (sum === 0) {
                console.log("Invalid order!")
            } else {
                const taxes = sum * 1.2 - sum
                const total = sum * 1.2 - sum * 1.2 * discounts[discount]
                console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${sum.toFixed(2)}$\nTaxes: ${(taxes).toFixed(2)}$\n-----------\nTotal price: ${(total).toFixed(2)}$`)
            }
        } else if (Number(current) < 0) {
            console.log("Invalid price!")
            continue
        } else {
            sum += Number(input[i])
        }
    }
}

solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
// Congratulations you've just bought a new computer!
// Price without taxes: 1737.36$
// Taxes: 347.47$
// -----------
// Total price: 1876.35$

solve([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
])
// Invalid price!
// Invalid price!
// Congratulations you've just bought a new computer!
// Price without taxes: 1544.96$
// Taxes: 308.99$
// -----------
// Total price: 1853.95$

solve([
    'regular'
])
// Invalid order!