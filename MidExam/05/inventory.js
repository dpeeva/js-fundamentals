function solve(input) {
    let items = input[0].split(", ")
    let commands = input.slice(1)
    let command = ""
    let item = ""

    while (commands.length > 0) {
        command = commands.shift()
        if (command === "Craft!") {
            console.log(items.join(", "))
            return
        } else {
            command = command.split(" - ")
        }

        if (command[0] === "Collect") {
            item = command[1]
            if (!items.includes(item)) {
                items.push(item)
            }
        }

        if (command[0] === "Drop") {
            item = command[1]
            const index = items.indexOf(item)
            if (index > -1) {
                items.splice(index, 1)
            }
        }

        if (command[0] === "Combine Items") {
            const oldItem = command[1].split(":")[0]
            const newItem = command[1].split(":")[1]
            const index = items.indexOf(oldItem)
            if (index > -1) {
                items.splice(index + 1, 0, newItem)
            }
        }

        if (command[0] === "Renew") {
            item = command[1]
            const index = items.indexOf(item)
            if (index > -1) {
                items.splice(index, 1)
                items.push(item)
            }
        }
    }
}

solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]) // Iron, Sword, Gold 

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]) // Sword, Bow, Iron