function solve(input) {
    const items = input.sort((a, b) => a.localeCompare(b))
    const catalogue = new Map()

    let line = ""
    let letter = ""
    let prevLetter = items[0][0]
    let data = []
    let entry = ""
    let temp = []

    for (let i = 0; i < items.length; i++) {
        line = items[i]
        letter = line[0]
        data = line.split(":").map(item => item.trim())
        entry = data.join(": ")

        if (letter !== prevLetter) {
            catalogue.set(prevLetter, temp)
            temp = []
        }

        temp.push(entry)
        prevLetter = letter
        if (i === items.length - 1) {
            catalogue.set(prevLetter, temp)
        }
    }

    catalogue.forEach((v, k) => {
        console.log(k)
        v.map(entry => console.log(`  ${entry}`))
    })
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/

console.log(" ")

// solve([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ])
/*
C
  Cake: 59
O
  Omlet: 5.4
S
  Shirt: 15
*/

// Borderline cases
solve([
    'appricot : 20.4',
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    'Zzz : 10'
])