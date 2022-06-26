// not submitted
function solve(input) {
    const shelf = input[0].split("&")
    const commands = input.slice(1)
    let line = commands.shift().split(" | ")
    let command = ""
    let name = ""
    let index = -1

    while (commands.length > 0 && command !== "Done") {
        command = line.shift().split(" ")[0]

        if (command === "Add") {
            name = line[0]
            if (!shelf.includes(name)) {
                shelf.splice(0, 0, name)
            }
        }

        if (command === "Take") {
            name = line[0]
            index = shelf.indexOf(name)
            if (index > -1) {
                shelf.splice(index, 1)
            }
        }

        if (command === "Swap") {
            let book_1 = line[0]
            let book_2 = line[1]
            let areIncluded = shelf.includes(book_1) && shelf.includes(book_2)
            if (areIncluded) {
                index = shelf.indexOf(book_1)
                let index2 = shelf.indexOf(book_2)
                shelf.splice(index, 1, book_2)
                shelf.splice(index2, 1, book_1)
            }
        }

        if (command === "Insert") {
            name = line[0]
            index = shelf.indexOf(name)
            if (index == -1) {
                shelf.splice(shelf.length, 0, name)
            }
        }

        if (command === "Check") {
            index = Number(line[0])
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index])
            }
        }
        line = commands.shift().split(" | ")
    }
    console.log(shelf.join(", "))
}

solve([
    "Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"
]) // Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland

solve([
    "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"
]) // Catch-22, Heart of Darkness, Anna Karenina, The Stranger

solve([
    "War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"
])
// Ulysses
// War and Peace, Hamlet, Ulysses, Madame Bovary
