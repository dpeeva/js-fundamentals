function solve(input) {
    const data = input.split("")
    const chars = []

    data.map(char => {
        if (chars[chars.length - 1] !== char) {
            chars.push(char)
        }
    })

    console.log(chars.join(""))
}

solve('aaaaabbbbbcdddeeeedssaa') // abcdedsa
solve('qqqwerqwecccwd') // qwerqwecwd