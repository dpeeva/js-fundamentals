function solve(input) {
    const pattern = /(?<tag>::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g
    let result = pattern.exec(input)

    const digitsPattern = /\d+/g
    let matchDigits = digitsPattern.exec(input)
    let digits = ""

    while (matchDigits !== null) {
        digits += matchDigits[0]
        matchDigits = digitsPattern.exec(input)
    }

    let coolThresholdSum = digits.split("").map(digit => Number(digit)).reduce((a, b) => a * b, 1)

    let coolness = 0
    let emojisCount = 0
    const cool = []

    while (result !== null) {
        emojisCount++
        coolness = (result.groups.emoji).split("").map(char => char.charCodeAt(0)).reduce((a, b) => a + b, 0)
        if (coolness > coolThresholdSum) {
            cool.push(`${result.groups.tag}${result.groups.emoji}${result.groups.tag}`)
        }
        result = pattern.exec(input)
    }

    console.log(`Cool threshold: ${coolThresholdSum}`)
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`)
    cool.map(c => console.log(c))
}

solve([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
])
// Cool threshold: 540
// 4 emojis found in the text. The cool ones are:
// ::Smiley:: 
// **Tigers** 
// ::Mooning::

solve([
    "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
])
// Cool threshold: 120
// 4 emojis found in the text. The cool ones are:
// ::Joy::
// **Banana**
// ::Wink::
// **Vali**

solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
])
// Cool threshold: 17496
// 1 emojis found in the text. The cool ones are: