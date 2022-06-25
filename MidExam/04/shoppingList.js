function solve(input) {
    const groceries = input[0].split("!")
    let commands = input.slice(1)

    let line = commands.shift()
    let command = ""
    let item = ""
    let itemIndex = -1

    while (commands.length > 0 && command !== "Go Shopping!") {
        command = line.split(" ")[0]
        item = line.split(" ")[1]

        if (command === "Urgent") {
            if (!groceries.includes(item)) {
                groceries.splice(0, 0, item)
            }
        }

        if (command === "Unnecessary") {
            itemIndex = groceries.indexOf(item)
            if (itemIndex > -1) {
                groceries.splice(itemIndex, 1)
            }
        }

        if (command === "Correct") {
            itemIndex = groceries.indexOf(item)
            let newItem = line.split(" ")[2]
            if (itemIndex > -1) {
                groceries.splice(itemIndex, 1, newItem)
            }
        }

        if (command === "Rearrange") {
            itemIndex = groceries.indexOf(item)
            if (itemIndex > -1) {
                groceries.splice(itemIndex, 1)
                groceries.splice(groceries.length, 0, item)
            }
        }
        line = commands.shift()
    }

    console.log(groceries.join(", "))
}

solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]) // Tomatoes, Potatoes, Bread

solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]) // Milk, Onion, Salt, Water, Banana