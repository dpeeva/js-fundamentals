function solve(input) {
    let health = 100
    let coins = 0
    const rooms = input[0].split("|")
    const totalRooms = rooms.length

    let room = ""
    let word = ""
    let n = 0
    let roomsVisited = 0

    while (rooms.length > 0) {
        roomsVisited++
        room = rooms.shift().split(" ")
        word = room[0]
        n = Number(room[1])

        if (word === "potion") {
            health += n
            if (health > 100) {
                n = n - (health - 100)
                health = 100
            }
            console.log(`You healed for ${n} hp.`)
            console.log(`Current health: ${health} hp.`)
            continue
        }
        if (word === "chest") {
            coins += n
            console.log(`You found ${n} coins.`)
            continue
        }

        health -= n
        if (health > 0) {
            console.log(`You slayed ${word}.`)
        } else {
            console.log(`You died! Killed by ${word}.`)
            console.log(`Best room: ${roomsVisited}`)
            return
        }

    }

    if (roomsVisited === totalRooms) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

solve(
    ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]
)
// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 coins.
// You died! Killed by boss.
// Best room: 6

solve(
    ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
)
// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 coins.
// You slayed snake.
// You found 110 coins.
// You've made it!
// Coins: 120
// Health: 65