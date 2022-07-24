function solve(input) {
    let stops = input[0]
    let commands = input.slice(1)
    line = commands.shift()
    let data = []
    let command = ""

    const isValidIndex = (index, arr) => index >= 0 && index < stops.length

    while (commands.length > 0) {
        if (line === "Travel") {
            break
        }
        data = line.split(":")
        command = data[0]
        if (command === "Add Stop") {
            let index = Number(data[1])
            if (isValidIndex(index, stops)) {
                stops = `${stops.substring(0, index)}${data[2]}${stops.substring(index)}`
            }
            console.log(stops)
        }

        if (command === "Remove Stop") {
            let startIndex = Number(data[1])
            let endIndex = Number(data[2])

            if (isValidIndex(startIndex, stops) && isValidIndex(endIndex, stops)) {
                stops = `${stops.substring(0, startIndex)}${stops.substring(endIndex + 1, stops.length)}`
            }
            console.log(stops)
        }

        if (command === "Switch") {
            stops = stops.replace(data[1], data[2])
            console.log(stops)
        }
        line = commands.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}

solve([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])
// Hawai::RomeCyprys-Greece
// Hawai::Rome-Greece
// Bulgaria::Rome-Greece
// Ready for world tour! Planned stops: Bulgaria::Rome-Greece