// 70 of 100
function solve(input) {
    const data = input.slice(1)
    const applyLetters = (text) => {
        const patternLetters = /[star]/gi
        let count = 0
        let result = patternLetters.exec(text)

        while (result !== null) {
            count++
            result = patternLetters.exec(text)
        }
        return count
    }

    const reduceData = (text, count) => {
        return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) - count)).join("")
    }

    let count = -1
    let reducedLine = ""

    const pattern = /@(?<planet>[A-Za-z]+)(?:.?):(?<population>\d+)(?:.?)!(?<attack>A|D)!(?:.?)->(?<soldiers>\d+)/g

    const attackedPlanets = []
    const destroyedPlanets = []

    data.map(line => {
        count = applyLetters(line)
        reducedLine = reduceData(line, count)
        let result = pattern.exec(reducedLine)

        while (result !== null) {
            // console.log(result.groups.planet)
            if (result.groups.attack === "A") {
                attackedPlanets.push(result.groups.planet)
            } else if (result.groups.attack === "D") {
                destroyedPlanets.push(result.groups.planet)
            }
            result = pattern.exec(reducedLine)
        }

    })
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.map(p => console.log(`-> ${p}`))
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.map(p => console.log(`-> ${p}`))
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