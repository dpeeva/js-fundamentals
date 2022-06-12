function solve(fightsLost, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmets = 0
    let swords = 0
    let shields = 0
    let armours = 0

    for (let i = 1; i <= fightsLost; i++) {
        if (i % 2 === 0) {
            helmets++
        }
        if (i % 3 === 0) {
            swords++
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shields++
            if (shields > 0 && shields % 2 === 0) {
                armours++
            }
        }
    }

    const expenses = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armours * armourPrice
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

solve(
    7,
    2,
    3,
    4,
    5
) // Gladiator expenses: 16.00 aureus

solve(
    23,
    12.50,
    21.50,
    40,
    200
) // Gladiator expenses: 608.00 aureus