function solve(input) {
    let message = input[0]
    let commands = input.slice(1)
    let line = commands.shift().split("|")
    let command = line[0]

    while (command !== "Decode" || commands.length > 0) {
        if (command === "Move") {
            let count = Number(line[1])
            let firstNLetters = message.substr(0, count)
            message = message.replace(firstNLetters, "").concat(firstNLetters)
        }

        if (command === "Insert") {
            let index = Number(line[1])
            let val = line[2]
            message = `${message.substring(0, index)}${val}${message.substring(index)}`
        }

        if (command === "ChangeAll") {
            let str = line[1]
            let strReplace = line[2]
            let index = message.indexOf(str)

            while (index !== -1) {
                message = message.replace(str, strReplace)
                index = message.indexOf(str)
            }
        }
        line = commands.shift().split("|")
        command = line[0]
    }
    console.log(`The decrypted message is: ${message}`)
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]) // The decrypted message is: Hello

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]) // The decrypted message is: howareyou?