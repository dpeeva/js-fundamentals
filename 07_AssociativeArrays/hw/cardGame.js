function solve(input) {
    const cardPower = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    const cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    const getPower = (cardsSet) => {
        let power = 0
        for (const card of cardsSet) {
            const p = card.slice(0, card.length - 1)
            const t = card[card.length - 1]
            let current = cardPower[p] * cardType[t]
            power += current
        }
        return power
    }

    const people = new Map()
    input.map(item => {
        const data = item.split(":")
        const name = data[0]
        const cards = data[1].split(", ").map(i => i.trim())
        const cardsSet = new Set()
        cards.map(card => cardsSet.add(card))

        if (people.has(name)) {
            const cardsOfPerson = people.get(name)
            const newCardsSet = new Set([...cardsOfPerson, ...cardsSet])
            people.set(name, newCardsSet)
        } else {
            people.set(name, cardsSet)
        }
    })

    for (const [person, cardsSet] of people) {
        console.log(`${person}: ${getPower(cardsSet)}`)
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
// Peter: 167
// Tomas: 175
// Andrea: 197

solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])
// John: 167
// Slav: 175
// Alex: 115
// Thomas: 125