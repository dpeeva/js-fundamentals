function solve(input) {
    let index = input.indexOf('PARTY')
    const guests = input.slice(0, index)
    const coming = input.slice(index + 1)
    let vip = []
    const vipComing = []
    let regular = []
    const regularComing = []

    guests.map(item => {
        const code = item[0].charCodeAt(0)
        if (code >= 48 && code <= 57) {
            vip.push(item)
        } else {
            regular.push(item)
        }
    })

    coming.map(item => {
        const code = item[0].charCodeAt(0)
        if (code >= 48 && code <= 57) {
            let index = vip.indexOf(item)
            if (index !== -1) {
                vip = vip.slice(0, index).concat(vip.slice(index + 1))
                vipComing.push(item)
            }
        } else {
            let index = regular.indexOf(item)
            if (index !== -1) {
                regular = regular.slice(0, index).concat(regular.slice(index + 1))
                regularComing.push(item)
            }
        }
    })

    console.log(vip.length + regular.length)
    vip.map(person => console.log(person))
    regular.map(person => console.log(person))
}

solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
// 2
// 7IK9Yo0h
// tSzE5t0p

solve([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])
// 2
// xys2FYzn
// MDzcM9ZK