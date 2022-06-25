function solve(input) {
    const loot = input[0].split("|")
    let commands = input.slice(1)

    let line = commands.shift()
    let values = line.split(" ")
    let command = ""

    while (commands.length > 0 && line !== "Yohoho!") {
        values = line.split(" ")
        command = values.shift()

        if (command === "Loot") {
            values.map(v => {
                if (!loot.includes(v)) {
                    loot.splice(0, 0, v)
                }
            })
        }

        if (command === "Drop") {
            let index = values[0]
            if (index < 0 || index > loot.length - 1) {
                line = commands.shift()
                continue
            }
            let v = loot[index]
            loot.splice(index, 1)
            loot.push(v)
        }

        if (command === "Steal") {
            let index = values[0] > loot.length - 1 ? loot.length : values[0]
            let stolen = loot.splice(-index)
            console.log(stolen.join(", "))
        }
        line = commands.shift()
    }

    if (loot.length === 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        let gain = 0
        loot.map(item => {
            gain += item.length
        })

        console.log(`Average treasure gain: ${(gain / loot.length).toFixed(2)} pirate credits.`)
    }

}

solve([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
])
// Medallion, Cup, Gold
// Average treasure gain: 5.40 pirate credits.

solve([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
])
// Coal, Diamonds, Silver, Shotgun, Gold, Medals
// Failed treasure hunt.