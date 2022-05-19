// 80 of 100 points
function solve(a, step) {
    const base = a // width and length
    let increment = step // height

    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0

    let currentBase = base
    let outerLayer = 0
    let currentStone = 0
    let currentMarble = 0
    let currentLapis = 0
    let currentGold = 0

    let nextCurrentBase = base
    let row = 0

    while (currentBase >= 1) {
        row++
        nextCurrentBase -= 2
        outerLayer = 2 * currentBase + 2 * (currentBase - 2)

        if (row % 5 === 0) { // every 5th row
            if (nextCurrentBase < step) { // last row
                currentGold = currentBase * currentBase
                gold += currentGold * step
                break
            } else {
                currentLapis = outerLayer
            }
        } else {
            if (nextCurrentBase < step) { // last row
                currentGold = currentBase * currentBase
                gold += currentGold * step
                break
            } else {
                currentMarble = outerLayer
            }
        }

        if (nextCurrentBase < step) { // last row
            currentGold = currentBase * currentBase
            gold += currentGold * step
            break
        } else {
            currentStone = currentBase * currentBase - outerLayer
        }

        increment--
        currentBase = nextCurrentBase

        stone += (currentStone * step)
        marble += (currentMarble * step)
        lapisLazuli += (currentLapis * step)

        currentStone = 0
        currentMarble = 0
        currentLapis = 0
    }

    console.log(`Stone required: ${Math.round(stone)}`)
    console.log(`Marble required: ${Math.round(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.round(lapisLazuli)}`)
    console.log(`Gold required: ${Math.round(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(row * step)}`)
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