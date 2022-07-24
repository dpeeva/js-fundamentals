function solve(input) {
    // need to escape the escaping symbol \ in every string
    const matchCode = "\\+359"
    const matchSeparator = "[\\s|-]"
    const refName = "<divider>"
    const match3Numbers = "\\b\\d{3}\\b"
    const match4Numbers = "\\b\\d{4}\\b"

    // const pattern = /(?<phone>\+359(?<divider>[\s|-])2(?:\k<divider>)(?:\b\d{3}\b)(?:\k<divider>)(?:\b\d{4}\b))/g
    const pattern = new RegExp(`(?<phone>${matchCode}(?${refName}${matchSeparator})2(?:\\k${refName})(?:${match3Numbers})(?:\\k${refName})(?:${match4Numbers}))`, "g")

    let result = pattern.exec(input)
    names = []

    while (result !== null) {
        names.push(result.groups.phone)
        result = pattern.exec(input)
    }

    console.log(names.join(", "))
}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]) // +359 2 222 2222, +359-2-222-2222

solve([
    '+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'
]) // +359 2 357 3351, +359 2 173 3408, +359-2-789-2584, +359 2 193 3953, +359-2-961-0248, +359-2-789-2584, +359 2 727 9740, +359-2-854-2280, +359 2 193 3953, +359 2 357 3351, +359 2 558 8560