function solve(arr) {
    const wagons = arr[0].split(" ").map(n => parseInt(n))
    const capacity = parseInt(arr[1])
    const commands = arr.slice(2)

    let command = ""
    let people = 0
    let isAdd = false
    let isAvailable = -1

    while (commands.length > 0) {
        command = commands.shift()
        isAdd = command.match("Add") !== null
        if (isAdd) {
            wagons.push(command.split(" ")[1])
        } else {
            people = parseInt(command)
            isAvailable = wagons.findIndex(n => capacity - n >= people)
            if (isAvailable >= 0) {
                wagons[isAvailable] += people
            }
        }
    }
    console.log(wagons.join(" "))
}

solve([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]) // 72 54 21 12 4 75 23 10 0

solve([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]) // 10 10 10 10 10 10 10