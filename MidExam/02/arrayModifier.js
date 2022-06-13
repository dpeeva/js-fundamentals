function solve(input) {
    let arr = input[0].split(" ").map(Number)
    let commands = input.slice(1)
    let current = ""
    let command = ""

    let index1 = 0
    let index2 = 0

    while (commands) {
        current = commands.shift().split(" ")
        command = current.shift()

        if (command === "swap") {
            index1 = Number(current[0])
            index2 = Number(current[1])

            let first = arr[index1]
            let second = arr[index2]

            arr.splice(index1, 1, second)
            arr.splice(index2, 1, first)
        } else if (command === "multiply") {
            index1 = Number(current[0])
            index2 = Number(current[1])

            let first = arr[index1]
            let second = arr[index2]

            const product = first * second
            arr.splice(index1, 1, product)
        } else if (command === "decrease") {
            arr = arr.map(n => n - 1)
        } else if (command === "end") {
            break
        }
    }

    console.log(arr.join(", "))
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]) // 86, 7382, 2369942, -124, 41, 89, -3

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]) // 1, 11, 3, 0