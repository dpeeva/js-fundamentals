function solve(input) {
    const pattern = /@#{1,}(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/g
    const commands = input.slice(1)
    let command = commands.shift()
    let result = null
    let digitsResult = null
    let digits = []

    while (command) {
        result = pattern.exec(command)

        if (!result) {
            console.log("Invalid barcode")
        }

        while (result !== null) {
            const matchDigits = /(?<digits>\d{1,})/g
            digitsResult = matchDigits.exec(result.groups.product)

            while (digitsResult !== null) {
                digits.push(digitsResult.groups.digits)
                digitsResult = matchDigits.exec(result.groups.product)
            }

            if (digits.length === 0) {
                digits.push("00")
            }
            console.log(`Product group: ${digits.join("")}`)
            result = pattern.exec(command)
        }
        digits = []
        command = commands.shift()
    }
}

// solve([
//     "3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"
// ])
// Product group: 00
// Product group: 0
// Product group: 46

solve([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])
// Product group: 11
// Product group: 00
// Invalid barcode
// Invalid barcode
// Invalid barcode
// Product group: 00