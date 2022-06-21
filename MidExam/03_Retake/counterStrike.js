function solve(input) {
    let energy = Number(input[0])
    let won = 0

    let current = ""
    let distance = 0

    for (let i = 1; i < input.length; i++) {
        current = input[i]
        if (current === "End of battle") {
            console.log(`Won battles: ${won}. Energy left: ${energy}`)
            break
        }
        distance = Number(current)
        if (energy >= distance) {
            energy -= distance
            won++
            if (won % 3 === 0) {
                energy += won
            }
        } else {
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`)
            return
        }
    }
}

solve([
    "100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]) // Not enough energy! Game ends with 7 won battles and 0 energy

solve([
    "200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]) // Won battles: 4. Energy left: 94