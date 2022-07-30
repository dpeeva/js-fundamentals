function solve(input) {
    const resources = new Map()
    let prevResource = ""
    let current = ""

    input.map((item, i) => {
        if ((i + 1) % 2 !== 0) {
            // add resource
            prevResource = item
            if (!resources.has(item)) {
                resources.set(item, 0)
            }
        } else {
            // add quantity
            current = resources.get(prevResource)
            resources.set(prevResource, current + Number(item))
        }
    })

    for (const [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`)
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
// Gold -> 155
// Silver -> 10
// Copper -> 17

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
// gold -> 170
// silver -> 10
// copper -> 17