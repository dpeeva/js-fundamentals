function solve(input) {
    // need to escape the escaping symbol \ in every string
    const matchCustomer = "%(?<customer>[A-Z][a-z]{1,})%"
    const matchProduct = "<(?<product>\\w{1,})>"
    const matchCount = "\\|(?<count>\\d{1,})\\|"
    const matchPrice = "(?<price>\\d{1,}\\.{0,}\\d{0,})\\$"
    const charsToEscape = "[^|$%.]{0,}"

    // const pattern = /%(?<customer>[A-Z][a-z]{1,})%[^|$%.]{0,}<(?<product>\w{1,})>[^|$%.]{0,}\|(?<count>\d{1,})\|[^|$%.]{0,}?(?<price>\d{1,}\.{0,}\d{0,})\$/
    const pattern = new RegExp(`${matchCustomer}${charsToEscape}${matchProduct}${charsToEscape}${matchCount}${charsToEscape}?${matchPrice}`)

    let line = input.shift()
    let result = null
    let total = 0
    let income = 0

    while (line !== "end of shift") {
        result = pattern.exec(line)
        if (result) {
            total = Number(result.groups.count) * Number(result.groups.price)
            income += total
            console.log(`${result.groups.customer}: ${result.groups.product} - ${total.toFixed(2)}`)
        }
        line = input.shift()
    }
    console.log(`Total income: ${income.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
// George: Croissant - 20.60
// Peter: Gum - 1.30
// Maria: Cola - 2.40
// Total income: 24.30

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])
// Valid: Valid - 200.00
// Total income: 200.00