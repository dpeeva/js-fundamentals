function solve(input) {
    const people = Number(input[0])
    let lift = input[1].split(" ").map(Number)

    const capacity = lift.length * 4
    const used = lift.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )
    const available = capacity - used
    let waiting = 0
    let freeSpots = 0

    if (people >= available) {
        waiting = people - available
        lift = lift.map(wagon => wagon = 4)
    } else {
        waiting = 0
        freeSpots = available - people

        let places = people
        let index = 0
        let free = 0

        while (places > 0) {
            free = places > 4 ? (4 - lift[index]) : places
            lift[index] += free
            places -= free
            index++
        }
    }

    let isFull = lift.find(wagon => wagon < 4) === undefined

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
// The lift has empty spots!
// 4 4 4 3 0

solve([
    "20",
    "0 2 0"
])
// There isn't enough space! 10 people in a queue!
// 4 4 4

// Borderline cases

solve([
    "20",
    "4 4 4"
])
// There isn't enough space! 20 people in a queue!
// 4 4 4

solve([
    "0",
    "4 4 4"
])
// 4 4 4

solve([
    "0",
    "0 0"
])
// The lift has empty spots!
// 0 0