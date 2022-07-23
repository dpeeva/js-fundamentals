function solve(input) {
    // >>{furniture name}<<{price}!{quantity}
    const pattern = />>(?<name>[A-Z][a-zA-Z]+)<<(?<price>\d+\.{0,1}\d{0,})!(?<quantity>\d+)/

    let result = null
    let line = input.shift()
    const items = []
    let item = {}
    let total = 0

    while (input.length > 0) {
        if (line === "Purchase") {
            break
        }
        result = pattern.exec(line)

        if (result) {
            item = {
                name: result.groups.name,
                price: Number(result.groups.price),
                quantity: Number(result.groups.quantity)
            }
            total += item.price * item.quantity
            items.push(item)
            item = {}
        }
        result = null
        line = input.shift()
    }
    console.log(`Bought furniture:`)
    items.map(item => {
        console.log(item.name)
    })
    console.log(`Total money spend: ${total.toFixed(2)}`)
}

solve([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])
// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69

solve([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])
// Bought furniture:
// Laptop
// TV
// TV
// TV
// Total money spend: 8593.09

solve([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
])
// Bought furniture:
// Total money spend: 0.00