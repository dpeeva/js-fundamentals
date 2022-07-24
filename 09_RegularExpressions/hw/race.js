function solve(input) {
    const participants = input.shift().split(",").map(p => p.trim())

    let result = null
    const pattern = /(?:\W{0,})(?<digits>\d+){0,}(?<letters>[a-zA-Z]+){0,}/g

    let people = []
    let name = []
    let km = []
    let person = {}
    let participantIndex = -1
    let line = input.shift()

    while (input.length > 0) {
        if (line === "end of race") {
            break
        }
        result = line.matchAll(pattern)

        if (result) {
            for (const item of result) {
                if (item.groups.digits) {
                    km.push(item.groups.digits)
                }
                if (item.groups.letters) {
                    name.push(item.groups.letters)
                }
            }
        }

        if (km.length || name.length) {
            person = {
                name: name.join(""),
                km: km.join("").split("").map(n => Number(n)).reduce((a, b) => a + b, 0)
            }
            participantIndex = participants.indexOf(person.name)
            const existingPerson = people.filter(p => p.name === person.name)
            if (participantIndex !== -1) {
                if (existingPerson.length > 0) {
                    // if already in people => only add to its km
                    people.filter(p => {
                        if (p.name === person.name) {
                            p.km += person.km
                        }
                    })
                } else {
                    people.push(person)
                }
            }
            name = []
            km = []
        }
        line = input.shift()
    }
    people = people.sort((a, b) => b.km - a.km)

    console.log(`1st place: ${people[0].name}`)
    console.log(`2nd place: ${people[1].name}`)
    console.log(`3rd place: ${people[2].name}`)
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])
// 1st place: George
// 2nd place: Peter
// 3rd place: Tom

solve([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
])
// 1st place: Michonne
// 2nd place: Ronald
// 3rd place: Bill