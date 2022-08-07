function solve(input) {
    const garage = new Map()
    const getCarData = (data) => {
        let info = data.split(", ")
        let car = {}
        let itemData = []
        info.map(item => {
            itemData = item.split(": ")
            car[itemData[0]] = itemData[1]
        })
        return car
    }

    input.map(entry => {
        let data = entry.split(" - ")
        let index = data[0]
        let car = getCarData(data[1])
        let current = garage.get(index)
        if (current) {
            garage.set(index, [...current, car])
        } else {
            garage.set(index, [car])
        }
    })

    for (const [key, cars] of garage) {
        console.log(`Garage № ${key}`)
        cars.map(car => {
            let data = []
            for (const [key, value] of Object.entries(car)) {
                data.push(`${key} - ${value}`)
            }
            console.log(`--- ${data.join(", ")}`)
        })
    }
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
// Garage № 1
// --- color - blue, fuel type - diesel
// --- color - red, manufacture - Audi
// Garage № 2
// --- fuel type - petrol
// Garage № 4
// --- color - dark blue, fuel type - diesel, manufacture - Fiat

solve([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
])
// Garage № 1
// --- color - green, fuel type - petrol
// --- color - dark red, manufacture - WV
// Garage № 2
// --- fuel type - diesel
// Garage № 3
// --- color - dark blue, fuel type - petrol