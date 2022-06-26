function solve(input) {
    const friends = input[0].split(", ")
    const commands = input.slice(1)

    let line = commands.shift()
    let data = []
    let command = ""
    let name = ""
    let index = -1
    let currentIndex = 0
    const isValidIndex = (arr, index) => index >= 0 && index < arr.length

    while (command !== "Report") {
        data = line.split(" ")
        command = data.shift()

        if (command === "Blacklist") {
            name = data[0]
            index = friends.indexOf(name)
            if (index > -1) {
                friends.splice(index, 1, "Blacklisted")
                console.log(`${name} was blacklisted.`)
            } else {
                console.log(`${name} was not found.`)
            }
        }

        if (command === "Error") {
            currentIndex = data[0]
            if (isValidIndex(friends, currentIndex)) {
                name = friends[currentIndex]
                if (name !== "Blacklisted" && name !== "Lost") {
                    friends.splice(currentIndex, 1, "Lost")
                    console.log(`${name} was lost due to an error.`)
                }
            }
        }

        if (command === "Change") {
            currentIndex = data[0]
            if (isValidIndex(friends, currentIndex)) {
                let newName = data[1]
                name = friends[currentIndex]
                friends.splice(currentIndex, 1, newName)
                console.log(`${name} changed his username to ${newName}.`)
            }
        }

        line = commands.shift()
    }

    const blacklisted = friends.filter(name => name === "Blacklisted").length
    const lost = friends.filter(name => name === "Lost").length

    console.log(`Blacklisted names: ${blacklisted}`)
    console.log(`Lost names: ${lost}`)
    console.log(friends.join(" "))
}

solve([
    "Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"
])
// Mike was blacklisted.
// Blacklisted names: 1 
// Lost names: 0
// Blacklisted John Eddie

solve([
    "Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"
])
// William was lost due to an error.
// Mike changed his username to Mike123.
// Blacklisted names: 0
// Lost names: 1
// Mike123 John Eddie Lost

solve([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"
])
// Maya was not found.
// John was lost due to an error.
// Blacklisted names: 0
// Lost names: 1
// Mike Lost Eddie William