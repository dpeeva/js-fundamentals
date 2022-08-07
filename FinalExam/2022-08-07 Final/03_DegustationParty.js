function solve(input) {
    let commands = input.slice()
    const guests = new Map()
    let line = commands.shift()
    let data = []
    let command = ""
    let unliked = 0

    while (commands.length) {
        data = line.split("-")
        command = data[0]

        if (command === "Stop") {
            break
        }

        if (command === "Like") {
            let guest = data[1]
            let meal = data[2]
            let currentMeals = guests.get(guest)
            if (!currentMeals) {
                guests.set(guest, [meal])
            } else {
                let index = currentMeals.indexOf(meal)
                if (index === -1) {
                    guests.set(guest, [...currentMeals, meal])
                }
            }
        }

        if (command === "Dislike") {
            let guest = data[1]
            let meal = data[2]
            let currentMeals = guests.get(guest)
            if (!currentMeals) {
                console.log(`${guest} is not at the party.`)
            } else {
                let index = currentMeals.indexOf(meal)
                if (index === -1) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                } else {
                    currentMeals.splice(index, 1)
                    guests.set(guest, currentMeals)
                    console.log(`${guest} doesn't like the ${meal}.`)
                    unliked++
                }
            }
        }

        line = commands.shift()
    }

    for (const [guest, meals] of guests) {
        let guestMeals = meals.join(", ")
        console.log(`${guest}: ${guestMeals}`)
    }
    console.log(`Unliked meals: ${unliked}`)
}

solve([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
])
// // Krisi: shrimps, soup
// Penelope: dessert
// Misho: salad
// Unliked meals: 0

solve([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
])
// Vili is not at the party.
// Krisi doesn't have the salad in his/her collection.
// Krisi: shrimps
// Unliked meals: 0

solve([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"
])
// Katy doesn't like the fish.
// Katy: 
// Unliked meals: 1