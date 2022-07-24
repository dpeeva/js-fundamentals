function solve(input) {
    let message = input[0]
    const commands = input.slice(1)

    line = commands.shift()
    let data = []
    let command = ""

    while (commands.length > 0 && line) {
        if (line === "Reveal") {
            break
        }

        data = line.split(":|:")
        command = data[0]

        if (command === "InsertSpace") {
            let index = data[1]
            let arr = message.split("")
            arr.splice(index, 0, " ")
            message = arr.join("")
            console.log(message)
        }

        if (command === "Reverse") {
            const index = message.indexOf(data[1])
            if (index !== -1) {
                let arr = message.split("")
                const reversed = data[1].split("").reverse().join("")
                arr.splice(index, reversed.length)
                arr.splice(arr.length, 0, reversed)
                message = arr.join("")
                console.log(message)
            } else {
                console.log("error")
            }
        }

        if (command === "ChangeAll") {
            message = message.split(data[1]).join(data[2])
            console.log(message)
        }

        line = commands.shift()
    }

    console.log(`You have a new text message: ${message}`)
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
// hellodar!gnil
// hellodarling!
// hello darling!
// You have a new text message: hello darling!

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
// Howare?uoy
// Howareyou?
// error
// How areyou?
// How are you?
// You have a new text message: How are you?