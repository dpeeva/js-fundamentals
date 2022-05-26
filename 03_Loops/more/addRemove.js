function solve(input) {
    let result = []
    let index = 0
    let length = input.length
    let last = 0

    while (length) {
        last++
        if (input[index] === "add") {
            result.push(last)
        }
        if (input[index] === "remove") {
            result.pop()
        }
        index++
        length--
    }

    if (result.length === 0) {
        console.log("Empty")
    } else {
        console.log(result.join(" "))
    }
}

solve(['add', 'add', 'add', 'add']) // 1 2 3 4
solve(['add', 'add', 'remove', 'add', 'add']) // 1 4 5
solve(['remove', 'remove', 'remove']) // Empty