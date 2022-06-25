// 90 of 100
function solve(input) {
    const pirateship = input[0].split(">").map(Number)
    const warship = input[1].split(">").map(Number)
    const capacity = Number(input[2])
    const minimum = capacity * 0.2

    const commands = input.slice(3)
    let line = commands.shift()
    let command = ""
    let values = []

    while (commands.length > 0 && line !== "Retire") {
        values = line.split(" ")
        command = values.shift()
        values = values.map(Number)

        if (command === "Fire") {
            let index = values[0]
            let damage = values[1]

            if (index < 0 || index > warship.length - 1) {
                line = commands.shift()
                continue
            }
            warship[index] -= damage
            if (warship[index] <= 0) {
                console.log(`You won! The enemy ship has sunken.`)
                return
            }
        }

        if (command === "Defend") {
            let startIndex = values[0]
            let endIndex = values[1]
            let damage = values[2]

            if (startIndex < 0 || startIndex > pirateship.length - 1) {
                line = commands.shift()
                continue
            }
            if (endIndex < 0 || endIndex > pirateship.length - 1) {
                line = commands.shift()
                continue
            }
            for (let i = startIndex; i <= endIndex; i++) {
                pirateship[i] -= damage
                if (pirateship[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`)
                    return
                }
            }
        }

        if (command === "Repair") {
            let index = values[0]
            let health = values[1]
            if (index < 0 || index > pirateship.length - 1) {
                continue
            }

            let missingCapacity = capacity - pirateship[index]
            pirateship[index] += health <= missingCapacity ? health : missingCapacity
        }

        if (command === "Status") {
            let count = 0
            for (let i = 0; i < pirateship.length; i++) {
                if (pirateship[i] < minimum) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`)
        }
        line = commands.shift()
    }


    let pirateSum = pirateship.reduce((a, b) => a + b, 0)
    let warshipSum = warship.reduce((a, b) => a + b, 0)

    console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warshipSum}`)
}

solve([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
])
// 2 sections need repair.
// Pirate ship status: 135
// Warship status: 205

solve([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
])
// 3 sections need repair.
// You lost! The pirate ship has sunken.