function solve(input) {
    const data = input.slice()
    const parking = new Map()

    data.map(item => {
        const line = item.split(",")
        if (line[0] === "IN") {
            parking.set(line[1])
        }
        if (line[0] === "OUT") {
            parking.delete(line[1])
        }
    })

    if (!parking.size) {
        console.log("Parking Lot is Empty")
    } else {
        const cars = Array.from(parking.keys()).map(i => i.trim()).sort((a, b) => a.localeCompare(b))
        cars.map(c => console.log(c))
    }
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])
// Parking Lot is Empty