function solve(arr) {
    const going = []

    let isInGoing = -1
    let notGoing = true
    let guestName = ""

    arr.map(guest => {
        guestName = guest.split(" ")[0]
        isInGoing = going.indexOf(guestName)

        notGoing = guest.split(" ").indexOf("not") !== -1

        if (notGoing) {
            if (isInGoing > -1) {
                going.splice(isInGoing, 1)
            } else {
                console.log(`${guestName} is not in the list!`)
            }
        } else {
            if (isInGoing > -1) {
                console.log(`${guestName} is already in the list!`)
            } else {
                going.push(guestName)
            }
        }
    })

    going.map(guest => console.log(guest))
}

solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
// John is not in the list!
// Allie

solve([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])
// Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry