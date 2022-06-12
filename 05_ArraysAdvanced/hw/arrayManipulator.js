// Solution 63 of 100
function solve(ints, commandsArr) {
    let result = ints.splice(0).map(e => Number(e))
    const commands = {
        "add": (arr, element, index) => {
            arr.splice(index, 0, Number(element))
            return arr
        },
        "addMany": (arr, elements, index) => {
            const addElements = elements.map(e => Number(e))
            arr.splice(index, 0, ...addElements)
            return arr
        },
        "contains": (arr, element) => {
            const i = arr.indexOf(Number(element))
            console.log(i)
            return arr
        },
        "remove": (arr, index) => {
            arr.splice(index, 1)
            return arr
        },
        "shift": (arr, positions) => {
            const count = Number(positions)
            const shifted = arr.slice(count)
            shifted.push(Number(arr.slice(0, count)))
            return shifted
        },
        "sumPairs": (arr) => {
            let index = 0
            let sum = 0
            let next = 0
            const result = []

            while (index < arr.length) {
                next = index == arr.length - 1 ? 0 : arr[index + 1]
                sum = Number(arr[index]) + Number(next)
                result.push(sum)
                index += 2
            }
            return result
        },
        "print": (arr) => console.log(`[ ${arr.join(", ")} ]`)
    }

    const params = {
        "add": (ints, options) => [ints, options[1], options[0]],
        "addMany": (ints, options) => [ints, options.slice(1), options[0]],
        "contains": (ints, options) => [ints, options[0]],
        "remove": (ints, options) => [ints, options[0]],
        "shift": (ints, options) => [ints, options[0]],
        "sumPairs": (ints, _) => [ints],
        "print": (ints, _) => [ints]
    }

    let index = 0
    let command = ""
    let options = []

    while (commandsArr.length) {
        options = commandsArr[index].split(" ")
        command = options[0]
        options.splice(0, 1)

        if (command === "print") {
            commands[command](result)
            break
        }
        result = commands[command](...params[command](result, options))
        commandsArr.splice(0, 1)
    }
}

solve(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)
// 0
// -1
// [ 1, 8, 2, 4, 5, 6, 7 ]

solve(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)
// -1
// [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]