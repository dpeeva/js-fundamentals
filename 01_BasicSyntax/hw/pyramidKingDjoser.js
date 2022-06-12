function solve(base, step) {
    let increment = step
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0

    let outerLayer = 0
    let currentStone = 0
    let currentMarble = 0
    let currentLapis = 0

    let nextBase = base
    let rows = 0

    while (base > 2) {
        rows++
        nextBase -= 2
        outerLayer = base * 4 - 4 // 2 * base + 2 * (base - 2)

        if (nextBase < step) { // last row
            // rows++ // TODO: why not working when steped here?
            break
        }

        if (rows % 5 === 0) { // every 5th row
            currentLapis = outerLayer
        } else {
            currentMarble = outerLayer
        }
        currentStone = base * base - outerLayer

        increment--
        base = nextBase

        stone += currentStone * step
        marble += currentMarble * step
        lapisLazuli += currentLapis * step

        currentStone = 0
        currentMarble = 0
        currentLapis = 0
    }
    rows++ // TODO: why need to increment it here to work?
    gold += (base * base) * step

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(rows * step)}`)
}

solve(11, 1)
// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6

solve(11, 0.75)
// Stone required: 124
// Marble required: 84
// Lapis Lazuli required: 6
// Gold required: 1
// Final pyramid height: 4

solve(12, 1)
// Stone required: 220
// Marble required: 128
// Lapis Lazuli required: 12
// Gold required: 4
// Final pyramid height: 6

solve(23, 0.5)
// Stone required: 886
// Marble required: 228
// Lapis Lazuli required: 36
// Gold required: 1
// Final pyramid height: 6