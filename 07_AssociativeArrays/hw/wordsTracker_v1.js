// 100 of 100
function solve(input) {
    const words = input[0].split(" ")
    const data = input.slice(1)
    const occurrences = []

    words.map(w => {
        const count = data.filter(item => item === w).length
        occurrences.push({
            word: w,
            occurrences: count
        })
    })

    occurrences.sort(
        (a, b) => b.occurrences - a.occurrences
    ).map(w => console.log(`${w.word} - ${w.occurrences}`))
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
// this - 3
// sentence - 2

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
])
// the – 3
// is - 1