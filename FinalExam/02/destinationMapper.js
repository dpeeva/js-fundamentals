function solve(input) {
    const pattern = /(?<wrap>=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g
    let result = pattern.exec(input)
    const destinations = []

    while (result !== null) {
        destinations.push(result.groups.destination)
        result = pattern.exec(input)
    }

    let travelPoints = 0
    destinations.map(d => travelPoints += d.length)
    console.log(`Destinations: ${destinations.join(", ")}`)
    console.log(`Travel Points: ${travelPoints}`)
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
// Destinations: Hawai, Cyprus
// Travel Points: 11

solve("ThisIs some InvalidInput")
// Destinations:
// Travel Points: 0