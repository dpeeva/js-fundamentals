function solve(a, b) {
    const words = a.split(",").map(w => w.trim())
    let phrase = b
    let arr = []
    let count = 0
    let index = -1

    words.map(word => {
        count = word.length
        arr = phrase.split(" ")
        index = arr.indexOf("*".repeat(count))
        if (index !== -1) {
            arr[index] = word
        }
        phrase = arr.join(" ")
    })

    console.log(phrase)
}

solve(
    'great',
    'softuni is ***** place for learning new programming languages'
)
// softuni is great place for learning new programming languages

solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)
// softuni is great place for learning new programming languages