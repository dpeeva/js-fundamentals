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
    let step = 0
    let dir = ""
    let targetIndex = 0

    for (let i = 0; i < length; i++) {
        command = commands[i].split(" ")
        bugIndex = Number(command[0])
        dir = command[1]
        step = Number(command[2])

        if (bugIndex < 0 || bugIndex > size - 1) {
            continue
        }
        field.splice(bugIndex, 1, 0)

        targetIndex = dir === "left" ? (bugIndex - step) : (bugIndex + step)

        if (targetIndex < 0 || targetIndex > size - 1) {
            continue
        }

        while (targetIndex >= 0 && targetIndex <= size - 1) {
            if (field[targetIndex] === 1) {
                // BUG INSIDE
                if (dir === "right") {
                    targetIndex += step
                }
                if (dir === "left") {
                    targetIndex -= step
                }
                continue
            }
            else {
                // PLACING BUG
                field[targetIndex] = 1
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

// Borderline cases

solve([
    3, '0 1',
    '0 right 1'
]) // 0 1 1

solve([
    3, '0 1',
    '0 left 1'
]) // 0 1 0

solve([
    3, '0 1',
    '0 left -1'
]) // 0 1 1

solve([
    0, '0 1',
    '0 left -1'
]) // 

solve([
    2, '0 1',
    '0 right -10'
]) // 0 1