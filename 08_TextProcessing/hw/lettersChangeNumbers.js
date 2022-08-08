function solve(input) {
    const items = input.split(" ").filter(item => item !== "")
    const alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }

    const pattern = /(?<start>[a-zA-Z]{1,})(?<digits>[0-9]{1,})(?<end>[a-zA-Z]{1,})/g

    const numbers = items.map(item => {
        let number = 0
        let result = pattern.exec(item)

        while (result !== null) {
            let start = result.groups.start
            number = Number(result.groups.digits)
            let end = result.groups.end

            if (start.charCodeAt(0) >= 65 && start.charCodeAt(0) <= 90) {
                // uppercase
                let position = alphabet[start.toLowerCase()]
                number = number / position
            }
            if (start.charCodeAt(0) >= 97 && start.charCodeAt(0) <= 122) {
                // lowercase
                let position = alphabet[start.toLowerCase()]
                number = number * position
            }

            if (end.charCodeAt(0) >= 65 && end.charCodeAt(0) <= 90) {
                // uppercase
                let position = alphabet[end.toLowerCase()]
                number = number - position
            }
            if (end.charCodeAt(0) >= 97 && end.charCodeAt(0) <= 122) {
                // lowercase
                let position = alphabet[end.toLowerCase()]
                number = number + position
            }
            result = pattern.exec(item)
        }
        return number
    }).reduce((a, b) => a + b, 0)

    console.log(numbers.toFixed(2))
}

solve('A12b s17G') // 330.00
solve('P34562Z q2576f   H456z') // 46015.13
solve('a1A') // 0.00