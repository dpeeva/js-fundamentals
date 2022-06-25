function solve(input) {
    let targets = input[0].split(" ").map(Number)
    let commands = input.slice(1)
    let shots = 0

    let command = commands.shift()
    let index = 0

    let currentValue = 0

    while (commands.length > 0 && command !== "End") {
        index = Number(command)

        if (index >= 0 && index <= targets.length - 1) {
            currentValue = targets[index]

            if (currentValue === -1) {
                command = commands.shift()
                continue
            }
            targets[index] = -1
            shots++

            targets.map((n, i) => {
                if (n === -1) {
                    return n
                }
                if (n > currentValue) {
                    targets[i] -= currentValue
                } else {
                    targets[i] += currentValue
                }
                return targets[i]
            })

        }
        command = commands.shift()
    }

    console.log(`Shot targets: ${shots} -> ${targets.join(" ")}`)
}

solve([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]) // Shot targets 3 -> -1 -1 130 -1

solve([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]) // Shot targets: 4 -> -1 120 -1 66 -1 -1