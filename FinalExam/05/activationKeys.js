function solve(input) {
    let activationKey = input[0]
    const commands = input.slice(1)

    line = commands.shift()
    let data = []
    let command = ""

    while (commands.length > 0) {
        if (line === "Reveal") {
            break
        }

        data = line.split(">>>")
        command = data[0]

        if (command === "Contains") {
            let subIndex = activationKey.indexOf(data[1])

            if (subIndex !== -1) {
                console.log(`${activationKey} contains ${data[1]}`)
            } else {
                console.log(`Substring not found!`)
            }
        }

        if (command === "Flip") {
            let casing = `to${data[1]}Case`
            let startIndex = Number(data[2])
            let endIndex = Number(data[3])

            let arr = activationKey.split("")
            for (let i = startIndex; i < endIndex; i++) {
                let v = arr[i]
                arr[i] = v[casing]()
            }
            activationKey = arr.join("")
            console.log(activationKey)
        }

        if (command === "Slice") {
            let startIndex = Number(data[1])
            let endIndex = Number(data[2])
            let arr = activationKey.split("")
            arr.splice(startIndex, endIndex - startIndex)
            activationKey = arr.join("")
            console.log(activationKey)
        }

        line = commands.shift()
    }

    console.log(`Your activation key is: ${activationKey}`)
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])
// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz

solve([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])
// 134sf5ftuni2020rockz42
// Substring not found!
// Substring not found!
// Substring not found!
// 134SF5FTuni2020rockz42
// 134SF5ftuni2020rockz42
// Your activation key is: 134SF5ftuni2020rockz42