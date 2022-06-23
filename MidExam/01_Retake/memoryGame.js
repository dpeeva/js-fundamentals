// 85 of 100
function solve(input) {
    const sequence = input[0].split(" ")
    let commands = input.slice(1)
    let command = ""
    let numbers = []
    let e1, e2

    const isInvalidInput = (numbers, range) => {
        if (isMatchingElements(numbers)) {
            return true
        }
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0 || numbers[i] > range) {
                return true
            }
        }
        return false
    }

    const isMatchingElements = (numbers) => {
        const areEqual = numbers.every(n => n === numbers[0])
        return areEqual
    }

    let index = 0

    while (commands.length > 0) {
        command = commands.shift()
        if (command === "end") {
            if (sequence.length > 0) {
                console.log(`Sorry you lose :(\n${sequence.join(" ")}`)
            }
            break
        } else {
            if (sequence.length === 0) {
                console.log(`You have won in ${index} turns!`)
                break
            }
        }
        numbers = command.split(" ").map(Number)
        if (isInvalidInput(numbers, sequence.length - 1)) {
            sequence.splice(sequence.length / 2, 0, `-${index + 1}a`, `-${index + 1}a`)
            console.log(`Invalid input! Adding additional elements to the board`)
            continue
        }
        e1 = sequence[numbers[0]]
        e2 = sequence[numbers[1]]
        if (isMatchingElements([e1, e2])) {
            // remove numbers from array
            [e1, e2].map(n => {
                let index = sequence.indexOf(n.toString())
                sequence.splice(index, 1)
            })
            console.log(`Congrats! You have found matching elements - ${e1}!`)
        } else {
            console.log(`Try again!`)
        }
        index++
    }
}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
// Congrats! You have found matching elements - 1!
// Invalid input! Adding additional elements to the board
// Congrats! You have found matching elements - 2!
// Congrats! You have found matching elements - 3!
// Congrats! You have found matching elements - -2a!
// Sorry you lose :(
// 4 4 5 5

solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
// Congrats! You have found matching elements - a!
// Congrats! You have found matching elements - 2!
// Congrats! You have found matching elements - 4!
// You have won in 3 turns!

solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
// Try again!
// Try again!
// Try again!
// Try again!
// Sorry you lose :(
// a 2 4 a 2 4