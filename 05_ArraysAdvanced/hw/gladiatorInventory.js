function solve(input) {
    const inventory = input[0].split(" ")
    const commands = input.slice(1)
    let line = ""
    let command = ""
    let equipment = ""

    while (commands.length > 0) {
        line = commands.shift().split(" ")
        command = line.shift()
        equipment = line[0]

        if (command === "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.splice(inventory.length, 0, equipment)
            }
        }

        if (command === "Trash") {
            let index = inventory.indexOf(equipment)
            if (index > -1) {
                inventory.splice(index, 1)
            }
        }

        if (command === "Repair") {
            let index = inventory.indexOf(equipment)
            if (index > -1) {
                inventory.splice(index, 1)
                inventory.splice(inventory.length, 0, equipment)
            }
        }

        if (command === "Upgrade") {
            let current = equipment.split("-")[0]
            let upgrade = equipment.split("-")[1]
            let index = inventory.indexOf(current)
            if (index > -1) {
                inventory.splice(index + 1, 0, `${current}:${upgrade}`)
            }
        }
    }

    console.log(inventory.join(" "))
}

solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]) // SWORD SWORD:Steel Bag Spear

solve([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]) // SWORD Spear Shield