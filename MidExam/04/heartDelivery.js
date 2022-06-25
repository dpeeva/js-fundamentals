function solve(input) {
    const houses = input[0].split("@")
    const neighbourhood = houses.length
    const commands = input.slice(1)

    let line = commands.shift()
    let command = ""
    let jump = 0

    let index = 0

    while (line !== "Love!") {
        command = line.split(" ")[0]
        jump = Number(line.split(" ")[1])
        index += jump
        if (index > neighbourhood - 1) {
            jump = 0
            index = 0
        }

        if (houses[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`)
        } else {
            houses[index] -= 2
            if (houses[index] <= 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }
        line = commands.shift()
    }

    console.log(`Cupid's last position was ${index}.`)
    const missedValentine = houses.filter(count => count !== 0).length

    if (missedValentine > 0) {
        console.log(`Cupid has failed ${missedValentine} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}

solve([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
])
// Place 3 has Valentine's day.
// Cupid's last position was 3.
// Cupid has failed 3 places.

solve([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
])
// Place 2 has Valentine's day.
// Place 0 has Valentine's day.
// Place 0 already had Valentine's day.
// Place 0 already had Valentine's day.
// Cupid's last position was 1.
// Cupid has failed 1 places.