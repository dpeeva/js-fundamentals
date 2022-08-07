function solve(input) {
    let text = input[0]
    let commands = input.slice(1)

    let line = commands.shift()
    let command = ""

    while (commands.length > 0) {
        if (line === "Done") {
            break
        }
        data = line.split(" ")
        command = data[0]
        if (command === "Change") {
            let char = data[1]
            let replacement = data[2]
            let chars = text.split("")
            chars = chars.map(c => (
                c === char ? replacement : c
            ))
            text = chars.join("")
            console.log(text)
        }

        if (command === "Includes") {
            let sub = data[1]
            if (text.includes(sub)) {
                console.log("True")
            } else {
                console.log("False")
            }
        }

        if (command === "End") {
            let end = data[1]
            if (text.endsWith(end)) {
                console.log("True")
            } else {
                console.log("False")
            }
        }

        if (command === "Uppercase") {
            text = text.toUpperCase()
            console.log(text)
        }

        if (command === "FindIndex") {
            let char = data[1]
            let index = text.indexOf(char)
            console.log(index)
        }

        if (command === "Cut") {
            let startIndex = Number(data[1])
            let count = Number(data[2])
            text = text.slice(startIndex, startIndex + count)
            console.log(text)
        }

        line = commands.shift()
    }
}

solve([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
])
// //This is my string!//
// True
// False
// //THIS IS MY STRING!//
// 4
// S IS

solve([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
])
// *S0ftUni is the B3St Plac3**
// False
// False
// *S0FTUNI IS THE B3ST PLAC3**
// 21
// FTUNI I