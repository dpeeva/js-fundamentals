function solve(input) {
    const length = Number(input[0])
    const plants = input.slice(1, length + 1)
    let commands = input.slice(length + 1)

    const exhibition = new Map()
    plants.map(plant => {
        let data = plant.split("<->")
        let name = data[0]

        exhibition.set(name, {
            rarity: Number(data[1]),
            rating: []
        })
    })
    let line = ""

    while (commands.length > 0) {
        line = commands.shift()
        if (line === "Exhibition") {
            break
        }
        let data = line.split(": ")
        let command = data[0]
        let info = data[1].split(" - ")
        let name = info[0]
        if (!exhibition.has(name)) {
            console.log("error")
            continue
        }
        if (command === "Rate") {
            let plantData = exhibition.get(name)
            exhibition.set(name, {
                rarity: plantData.rarity,
                rating: [...plantData.rating, Number(info[1])]
            })
        }
        if (command === "Update") {
            let plantData = exhibition.get(name)
            exhibition.set(name, {
                rarity: Number(info[1]),
                rating: plantData.rating
            })
        }
        if (command === "Reset") {
            let plantData = exhibition.get(name)
            exhibition.set(name, {
                rarity: plantData.rarity,
                rating: []
            })
        }
    }
    console.log(`Plants for the exhibition:`)
    for (const [plant, info] of exhibition) {
        let rating = !info.rating.length
            ? 0
            : info.rating.reduce((a, b) => a + b, 0) / info.rating.length
        console.log(`- ${plant}; Rarity: ${info.rarity}; Rating: ${rating.toFixed(2)}`)
    }
}

solve(([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]))
// Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00

solve([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
])
// Plants for the exhibition:
// - Candelabra; Rarity: 10; Rating: 6.00
// - Oahu; Rarity: 10; Rating: 7.00