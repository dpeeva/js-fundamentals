// not submitted
function solve(input) {
    const route = input[0].split("||")
    let line = route.shift()
    let instructions = line.split(" ")
    let command = instructions.shift()
    let fuel = Number(input[1])
    let ammunition = Number(input[2])

    while (command.length && command !== "Titan") {
        instructions = line.split(" ")
        command = instructions.shift()

        if (command === "Travel") {
            let distance = Number(instructions[0])
            if (distance <= fuel) {
                fuel -= Number(instructions[0])
                console.log(`The spaceship travelled ${distance} light - years.`)
            } else {
                console.log(`Mission failed.`)
                return
            }
        }
        if (command === "Enemy") {
            let armour = Number(instructions[0])
            if (ammunition >= armour) {
                ammunition -= armour
                console.log(`An enemy with ${armour} armour is defeated.`)
            } else {
                let neededFuel = armour * 2
                if (neededFuel <= fuel) {
                    fuel -= neededFuel
                    console.log(`An enemy with ${armour} armour is outmaneuvered.`)
                } else {
                    console.log(`Mission failed.`)
                    return
                }
            }
        }
        if (command === "Repair") {
            let add = Number(instructions[0])
            fuel += add
            ammunition += 2 * add
            console.log(`Ammunitions added: ${2 * add}.`)
            console.log(`Fuel added: ${add}.`)
        }
        line = route.shift()
    }

    console.log(`You have reached Titan, all passengers are safe.`)
}



solve([
    'Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'
])
// The spaceship travelled 10 light-years.
// An enemy with 30 armour is defeated.
// Ammunitions added: 30.
// Fuel added: 15.
// You have reached Titan, all passengers are safe.

solve([
    'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'
])
// The spaceship travelled 20 light-years.
// An enemy with 50 armour is defeated.
// An enemy with 50 armour is defeated.
// An enemy with 10 armour is outmaneuvered.
// Ammunitions added: 30.
// Fuel added: 15.
// Mission failed.