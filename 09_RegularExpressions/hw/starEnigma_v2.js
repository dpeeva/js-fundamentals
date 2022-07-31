function solve(input) {
    const data = input.slice(1)
    const getCount = (chars, match) => {
        let count = 0
        chars.map(char => {
            match.map(m => {
                if (m.toLowerCase() === char.toLowerCase()) {
                    count++
                }
            })
        })
        return count
    }
    // Note that some tests are failing with Runtime error when using regex to get the count
    // const pattern = /(?<char>[star])/gi
    // let count = 0
    let planets = []

    data.map(item => {
        // count = item.match(pattern).length
        let count = getCount(item.split(""), ['s', 't', 'a', 'r'])
        const transformed = item.split("").map(
            char => String.fromCharCode(char.charCodeAt(0) - count)
        ).join("")
        // count = 0

        const infoPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]{0,}:(?<population>[0-9]+)[^@\-!:>]{0,}!(?<attack>[AD])![^@\-!:>]{0,}->(?<soldiers>[0-9]+)[^@\-!:>]{0,}/g
        let result = infoPattern.exec(transformed)
        while (result !== null) {
            planets.push({
                name: result.groups.planet,
                population: result.groups.population,
                attack: result.groups.attack,
                soldiers: result.groups.soldiers
            })
            result = infoPattern.exec(transformed)
        }
    })

    planets = planets.sort((a, b) => (a.name).localeCompare(b.name))
    const attacked = planets.filter(p => p.attack === "A")
    const destroyed = planets.filter(p => p.attack === "D")

    console.log(`Attacked planets: ${attacked.length}`)
    attacked.map(p => console.log(`-> ${p.name}`))
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.map(p => console.log(`-> ${p.name}`))
}

solve([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
])
// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])
// Attacked planets: 0
// Destroyed planets: 2
// -> Cantonica
// -> Coruscant