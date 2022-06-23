// 90 of 100
function solve(input) {
    const people = Number(input[0])
    let waiting = Number(input[0])
    const lift = input[1].split(" ").map(Number)

    let index = 1
    let isFull = false

    while (index <= people) {
        if (isFull) {
            break
        }
        for (let wagon = 0; wagon < lift.length; wagon++) {
            if (wagon === lift.length - 1 && lift[wagon] === 4) {
                isFull = true
                break
            }
            if (lift[wagon] < 4) {
                lift[wagon] += 1
                waiting--
                break
            }
        }
        index++
    }

    if (isFull) {
        if (waiting > 0) {
            console.log(`There isn't enough space! ${waiting} people in a queue!`)
        }
    } else {
        console.log(`The lift has empty spots!`)
    }
    console.log(lift.join(" "))
}

solve([
    "15",
    "0 0 0 0 0"
])
// The lift has empty spaces!
// 4 4 4 3 0

solve([
    "20",
    "0 2 0"
])
// There isn't enough space! 10 people in a queue!
// 4 4 4
