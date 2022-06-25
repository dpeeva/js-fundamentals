function solve(input) {
    const pirateship = input[0].split(">").map(Number)
    const warship = input[1].split(">").map(Number)
    const capacity = Number(input[2])
    const minimum = capacity * 0.2

    const commands = input.slice(3)
    let line = commands.shift()
    let command = ""
    let values = []

    const isValidIndex = (index, length) => index >= 0 && index <= length - 1

    while (commands.length > 0 && line !== "Retire") {
        values = line.split(" ")
        command = values.shift()
        values = values.map(Number)

        let index = 0
        let damage = 0

        if (command === "Fire") {
            index = values[0]
            damage = values[1]

            if (!isValidIndex(index, warship.length)) {
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
            const startIndex = values[0]
            const endIndex = values[1]
            damage = values[2]


            if (!isValidIndex(startIndex, pirateship.length) ||
                !isValidIndex(endIndex, pirateship.length)
            ) {
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
            index = values[0]
            const health = values[1]
            if (!isValidIndex(index, pirateship.length)) {
                line = commands.shift()
                continue
            }

            const missingCapacity = capacity - pirateship[index]
            pirateship[index] += health <= missingCapacity ? health : missingCapacity
        }

        if (command === "Status") {
            const count = pirateship.filter(item => item < minimum).length
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