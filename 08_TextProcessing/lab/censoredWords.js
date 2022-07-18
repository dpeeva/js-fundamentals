function solve(text, word) {
    const count = word.length
    const result = text.split(word).join("*".repeat(count))
    console.log(result)
}

solve('A small sentence with some words', 'small')
// A ***** sentence with some words

solve('Find the hidden word', 'hidden')
// Find the ****** word