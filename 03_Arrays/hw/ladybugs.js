// 60 of 100
function solve(input) {
    const field = []
    const size = input[0]
    for (let i = 0; i < size; i++) {
        field[i] = 0
    }
    const ladybugs = input[1].split(" ").map(Number)
    ladybugs.map(index => {
        if (index >= 0 && index <= size - 1) {
            field[index] = 1
        }
    })

    // console.log("ladybugs", field.join(" "))

    let commands = input.slice(2)
    const length = commands.length

    let command = ""
    let bugIndex = 0
    let targetIndex = 0
    let dir = ""
    let fly = 0

    for (let i = 0; i < length; i++) {
        command = commands[i].split(" ")
        bugIndex = Number(command[0])
        dir = command[1]
        targetIndex = Number(command[2])

        if (bugIndex < 0 || bugIndex > size - 1) {
            continue
        }

        if (dir === "right") {
            fly = bugIndex + targetIndex
        }
        if (dir === "left") {
            fly = bugIndex - targetIndex
        }

        if (fly < 0 || fly > size - 1) {
            field.splice(bugIndex, 1, 0)
            continue
        }

        while (fly >= 0 && fly <= size - 1) {
            field.splice(bugIndex, 1, 0)
            if (field[fly] === 1) {
                // BUG INSIDE
                if (dir === "right") {
                    fly += targetIndex
                }
                if (dir === "left") {
                    fly -= targetIndex
                }
                continue
            }
            else {
                // PLACING BUG
                field[fly] = 1
                break
            }
        }
    }

    console.log(field.join(" "))
}

solve([
    3, '0 1',
    '0 right 1',
    '2 right 1'
]) // 0 1 0

solve([
    3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]) // 0 0 0

solve([
    5, '3',
    '3 left 2',
    '1 left -2'
]) // 0 0 0 1 0