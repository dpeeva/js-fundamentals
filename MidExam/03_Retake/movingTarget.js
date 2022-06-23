// 30 of 100
function solve(input) {
    const targets = input[0].split(" ").map(Number)
    const commands = input.slice(1)

    let command = []
    let word = ""
    let currentIndex = 0
    let target = 0
    let value = 0
    let radius = 0

    const isValidIndex = (index, arr) => {
        return index < arr.length && index >= 0
    }

    for (let index = 0; index < commands.length; index++) {
        command = commands[index].split(" ")
        word = command[0]

        if (word === "Shoot") {
            currentIndex = Number(command[1])
            power = Number(command[2])
            if (isValidIndex(currentIndex, targets)) {
                target = targets[currentIndex] - power
                if (target <= 0) {
                    targets.splice(currentIndex, 1)
                } else {
                    targets[currentIndex] = target
                }
            }
        }

        if (word === "Add") {
            currentIndex = Number(command[1])
            value = Number(command[2])
            if (isValidIndex(currentIndex, targets)) {
                target.splice(currentIndex, 0, value)
            } else {
                console.log(`Invalid placement!`)
            }
        }

        if (word === "Strike") {
            currentIndex = Number(command[1])
            radius = Number(command[2])

            let step = 1
            while (step <= radius) {
                let indexBefore = currentIndex - 1

                if (indexBefore < 0) {
                    console.log(`Strike missed!`)
                    break
                } else {
                    targets.splice(indexBefore, 1)
                }
                currentIndex = currentIndex - 1
                let indexAfter = currentIndex + 1
                if (indexAfter > targets.length - 1) {
                    console.log(`Strike missed!`)
                    break
                } else {
                    targets.splice(indexAfter, 1)
                }
                targets.splice(currentIndex, 1)
                step++
            }
        }

        if (word === "End") {
            break
        }
    }

    console.log(targets.join("|"))
}

solve([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
])
// Invalid placement!
// 52|100

solve([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"
])
// Strike missed!
// 1|2|3|4|5

// Borderline cases

solve([
    "1",
    "Strike 0 1",
    "End"
])
// Strike missed!
// 1

solve([
    "1 1",
    "Strike 0 1",
    "End"
])
// Strike missed!
// 1|1

solve([
    "2 2",
    "End",
    "Strike 0 1"
])
// 2|2