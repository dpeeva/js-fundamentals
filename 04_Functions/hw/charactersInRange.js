function solve(a, b) {
    const aCharCode = a.charCodeAt(0)
    const bCharCode = b.charCodeAt(0)

    const letters = []
    if (aCharCode <= bCharCode) {
        for (let i = aCharCode + 1; i < bCharCode; i++) {
            letters.push(String.fromCharCode(i))
        }
    } else {
        for (let i = bCharCode + 1; i < aCharCode; i++) {
            letters.push(String.fromCharCode(i))
        }
    }

    console.log(letters.join(" "))
}

// solve('a', 'd') // b c
// solve('#', ':') // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
solve('C', '#') // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B