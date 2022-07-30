function solve(input) {
    const pattern = /(?<word>[A-Z][a-z]{0,})/g
    const words = []
    let result = pattern.exec(input)
    while (result !== null) {
        words.push(result.groups.word)
        result = pattern.exec(input)
    }
    console.log(words.join(", "))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
// Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

solve('HoldTheDoor')
// Hold, The, Door

solve('ThisIsSoAnnoyingToDo')
// This, Is, So, Annoying, To, Do