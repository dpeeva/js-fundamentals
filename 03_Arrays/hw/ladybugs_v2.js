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

    let commands = input.slice(2)
    const length = commands.length

    let command = ""
    let bugIndex = 0
    let step = 0
    let dir = ""


    // exec commands
    for (let i = 0; i < length; i++) {
        command = commands[i].split(" ")
        bugIndex = Number(command[0])
        dir = command[1]
        step = Number(command[2])

        if (bugIndex >= 0 && bugIndex < size && field[bugIndex] == 1) {
            // fly outside
            field.splice(bugIndex, 1, 0)

            if (dir == "right") {
                // fly to the right            
                for (let j = bugIndex + step; j < size; j += step) {
                    if (field[j] == 0) {
                        field[j] = 1
                        break
                    }
                }
            } else {
                // fly to the left
                for (let j = bugIndex - step; j >= 0; j -= step) {
                    if (field[j] == 0) {
                        field[j] = 1
                        break
                    }
                }
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