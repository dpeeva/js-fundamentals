function solve(ints, commandsArr) {
    let result = ints.splice(0).map(e => Number(e))
    let command = ""
    let options = []

    for (const c of commandsArr) {
        options = c.split(" ")
        command = options[0]

        if (command === "add") {
            const index = Number(options[1])
            const element = Number(options[2])
            result.splice(index, 0, element)
        }
        else if (command === "addMany") {
            const index = options[1]
            const elements = options.slice(2).map(Number)

            result.splice(index, 0, ...elements)
        }
        else if (command === "contains") {
            console.log(result.indexOf(Number(options[1])))
        }
        else if (command === "remove") {
            result.splice(options[1], 1)
        }
        else if (command === "shift") {
            let count = Number(options[1])
            for (let i = 0; i < count; i++) {
                let first = result.shift()
                result.push(first)
            }
        }
        else if (command === "sumPairs") {
            let sum = 0
            let next = 0
            const sums = []

            for (let i = 0; i < result.length; i += 2) {
                next = i == result.length - 1
                    ? 0
                    : result[i + 1]
                sum = Number(result[i]) + Number(next)
                sums.push(sum)
            }
            result = sums
        }
        else if (command === "print") {
            console.log(`[ ${result.join(", ")} ]`)
        }
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

solve(
    [2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]
)
// [ 6, 6, 6 ]

// Borderline cases
solve(
    [2, 3],
    ['shift 11', 'addMany 5 9 8 7 6 5', 'contains 8', 'remove 3', 'print']
)
// 3
// [ 3, 2, 9, 7, 6, 5 ]

solve(
    [],
    []
)
// []

solve(
    [1],
    []
)
//

solve(
    [1],
    ['shift 11', 'addMany 5 9 8 7 6 5']
)
//