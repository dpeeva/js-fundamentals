function solve(n) {
    const letters = []
    const aCode = 'a'.charCodeAt()
    for (let i = 0; i < n; i++) {
        letters.push(String.fromCharCode(aCode + i))
    }
    // console.log(letters.join(" "))

    let combinations = letters.map(letter => `${letter}${letter}${letter}`)
    // console.log(combinations.join(" "))
    let combination = ""

    let arr = ""

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < 3; i++) {
            combinations.map(combo => {
                arr = combo.split("")
                arr.splice(i, 1, letters[j])
                combination = arr.join("")
                if (!combinations.includes(combination)) {
                    combinations.push(combination)
                }
            })
        }
    }

    // console.log(combinations.length)
    combinations = combinations.sort((a, b) => a.localeCompare(b))
    combinations.map(c => console.log(c))
}

solve(4)
// Combinations count: 64 = 4 * 4 * 4

solve(3)
// Combinations count: 27 = 3 * 3 * 3
// aaa
// aab
// aac
// aba
// abb
// abc
// aca
// acb
// acc
// baa
// bab
// bac
// bba
// bbb
// bbc
// bca
// bcb
// bcc
// caa
// cab
// cac
// cba
// cbb
// cbc
// cca
// ccb
// ccc

solve(2)
// Combinations count: 8 =  2 * 2 * 2
// aaa
// aab
// aba
// abb
// baa
// bab
// bba
// bbb