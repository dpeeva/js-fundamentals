function solve(input) {
    const text = input[0]

    const pattern = /(?<hidden>@|#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
    let result = pattern.exec(text)
    const pairs = []

    while (result !== null) {
        pairs.push([result.groups.word1, result.groups.word2])
        result = pattern.exec(text)
    }

    let current = "",
        next = ""
    const matches = []

    for (let i = 0; i < pairs.length; i++) {
        current = pairs[i][0]
        next = pairs[i][1].split("").reverse().join("")
        if (current === next) {
            matches.push(pairs[i])
        }
    }

    if (pairs.length > 0) {
        console.log(`${pairs.length} word pairs found!`)
    } else {
        console.log(`No word pairs found!`)
    }

    if (matches.length > 0) {
        console.log(`The mirror words are:`)
        const arr = matches.map(match => (`${match[0]} <=> ${match[1]}`))
        console.log(arr.join(", "))
    } else {
        console.log(`No mirror words!`)
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
// 5 word pairs found!
// The mirror words are:
// Part <=> traP, leveL <=> Level, sAw <=> wAs

solve([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
])
// 2 word pairs found!
// No mirror words!

solve([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
])
// No word pairs found!
// No mirror words!