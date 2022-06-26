// not submitted
function solve(input) {
    const days = Number(input[0])
    const players = Number(input[1])
    let energy = Number(input[2])
    let water = Number(input[3]) * players * days
    let food = Number(input[4]) * players * days

    const energyLoss = input.slice(5).map(Number)

    for (let i = 1; i <= days; i++) {
        if (energy <= 0) {
            break
        }
        energy -= energyLoss[i - 1]
        if (i % 2 === 0) {
            // water => energy +5%
            // water -30%
            energy += energy * 0.05
            water -= water * 0.3
        }
        if (i % 3 === 0) {
            // food => energy +10%
            // food -= currentFood / people
            energy += energy * 0.1
            food -= food / players
        }
    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    }
}

solve([
    "10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"
]) // You are ready for the quest. You will be left with - 658.72 energy!

solve([
    "12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"
]) // You will run out of energy. You will be left with 229.17 food and 118.59 water.