function solve(input) {
    const commands = input.slice()
    let line = commands.shift()
    let command = ""
    let message = ""
    let index = -1
    const chat = []

    while (command !== "end") {
        message = line.split(" ")
        command = message.shift()

        if (command === "Chat") {
            chat.splice(chat.length, 0, message[0])
        }

        if (command === "Delete") {
            index = chat.indexOf(message[0])
            if (index > -1) {
                chat.splice(index, 1)
            }
        }

        if (command === "Edit") {
            index = chat.indexOf(message[0])
            if (index > -1) {
                chat.splice(index, 1, message[1])
            }
        }

        if (command === "Pin") {
            index = chat.indexOf(message[0])
            if (index > -1) {
                chat.splice(index, 1)
                chat.splice(chat.length, 0, message[0])
            }
        }

        if (command === "Spam") {
            message.map(m => chat.splice(chat.length, 0, m))
        }

        line = commands.shift()
    }

    chat.map(m => console.log(m))
}

solve([
    "Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"
])
// Hello
// how
// are
// you


solve([
    "Chat Hello",
    "Delete John",
    "Pin Hi",
    "end"
])
// Hello

solve([
    "Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"
])
// Let's
// go
// to
// the
// cinema
// tonight
// John