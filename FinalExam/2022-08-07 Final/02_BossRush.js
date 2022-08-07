function solve(input) {
    const count = Number(input[0])
    const lines = input.slice(1)
    const pattern = /(\|(?<name>[A-Z]{4,})\|(?:\:)#(?<title>[a-zA-Z]{1,}\s[a-zA-Z]{1,})#)/g

    for (let i = 0; i < count; i++) {
        let line = lines[i]
        let result = pattern.exec(line)
        if (!result) {
            console.log("Access denied!")
        }

        while (result !== null) {
            console.log(`${result.groups.name}, The ${result.groups.title}`)
            console.log(`>> Strength: ${result.groups.name.length}`)
            console.log(`>> Armor: ${result.groups.title.length}`)
            result = pattern.exec(line)
        }
    }
}

solve([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
])
// PETER, The Lead architect
// >> Strength: 5
// >> Armor: 14
// GEORGE, The High Overseer
// >> Strength: 6
// >> Armor: 13
// Access denied!


solve([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
])
// Access denied!
// IVAN, The Master detective
// >> Strength: 4
// >> Armor: 16
// Access denied!