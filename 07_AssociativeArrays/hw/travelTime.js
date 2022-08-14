function solve(input) {
    const destinations = new Map()
    input.map(item => {
        const data = item.split(" > ")
        // console.log(data)
        const country = data[0]
        const town = data[1]
        const cost = Number(data[2])

        if (destinations.has(country)) {
            const towns = destinations.get(country)
            const indexTown = Array.from(towns.keys()).indexOf(town)
            if (indexTown !== -1) {
                // check cost
                const currentCost = towns.get(town)
                if (cost < currentCost) {
                    towns.set(town, cost)
                }
            } else {
                // add town to country array
                towns.set(town, cost)
                destinations.set(country, towns)
            }
        } else {
            const towns = new Map()
            towns.set(town, cost)
            destinations.set(country, towns)
        }
    })

    const orderedTownNames = Array.from(destinations.keys()).sort((a, b) => a.localeCompare(b))
    const sortedByCost = (towns) => {
        return [...towns.entries()].sort((a, b) => a[1] - b[1])
    }

    const orderedDestinations = new Map()
    orderedTownNames.map(name => orderedDestinations.set(
        name,
        sortedByCost(destinations.get(name))
    ))

    for (const [country, towns] of orderedDestinations) {
        let data = []
        for (const [town, cost] of towns) {
            data.push(`${town} -> ${cost}`)
        }
        console.log(`${country} -> ${data.join(" ")}`)
    }
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
// Albania -> Tirana -> 1000
// Bulgaria -> Sofia -> 200 Sopot -> 800
// France -> Paris -> 2000

solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])
// Albania -> Tirana -> 25000
// Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010 
// Kalimdor -> Orgrimar -> 25000