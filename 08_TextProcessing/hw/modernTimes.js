function solve(input) {
    const words = input.split(" ")
    words.map(word => {
        if (word.length > 1 && word.startsWith("#")) {
            const regExp = /[0-9]/i
            const hasInvalidSymbols = regExp.test(word)
            if (!hasInvalidSymbols) {
                console.log(
                    word.split("").filter(a => a !== "#").join("")
                )
            }
        }
    })
}

solve(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
)
// special
// socialMedia

solve(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
)
// variously
// regions
// number