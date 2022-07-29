function solve(input) {
    const words = input.split(" ")
    const occurrences = new Map()

    words.map(w => {
        const word = w.toLowerCase()
        if (!occurrences.has(word)) {
            occurrences.set(word, 1)
        } else {
            let count = occurrences.get(word)
            occurrences.set(word, count + 1)
        }
    })

    const result = []
    for (const [key, value] of occurrences) {
        if (value % 2 !== 0) {
            result.push(key)
        }
    }
    console.log(result.join(" "))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#') // c# php 1 5
solve('Cake IS SWEET is Soft CAKE sweet Food') // soft food