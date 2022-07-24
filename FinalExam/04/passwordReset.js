function solve(input) {
    let password = input[0]
    const commands = input.slice(1)

    line = commands.shift()
    let data = []
    let command = ""

    while (commands.length > 0) {
        if (line === "Reveal") {
            break
        }

        data = line.split(" ")
        command = data[0]

        if (command === "TakeOdd") {
            let arr = password.split("").filter((v, i) => i % 2 !== 0)
            password = arr.join("")
            console.log(password)
        }

        if (command === "Cut") {
            let index = Number(data[1])
            let length = Number(data[2])
            let arr = password.split("")
            arr.splice(index, length)
            password = arr.join("")
            console.log(password)
        }

        if (command === "Substitute") {
            let subIndex = password.indexOf(data[1])

            if (subIndex !== -1) {
                const pattern = new RegExp(`${data[1]}`, "g")
                password = password.replace(pattern, data[2])
                console.log(password)
            } else {
                console.log("Nothing to replace!")
            }
        }

        line = commands.shift()
    }

    console.log(`Your password is: ${password}`)
}

solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])
// icecream::hot::summer
// icecream::hot::mer
// icecream-hot-mer
// Nothing to replace!
// Your password is: icecream-hot-mer

solve([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
])
// programming!is!funny
// programming!is!fun
// programming***is***fun
// Nothing to replace!
// Your password is: programming***is***fun