function solve(input) {
    // if we work with phone numbers on separate lines, we would match the single line with ^ and $:
    // const pattern = /^\+359( |-)2\1\d{3}\1\d{4}$/g

    // if we work with phone numbers as they come from input, we need to use word boundary \b at the end
    // note that ?: marks non-capturing group, which is not part of the register => next group is considered first
    // \s|^ means that the phone starts with either a space or +359
    const pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g

    let result = pattern.exec(input)
    names = []

    while (result !== null) {
        // trimming, instead of using positive lookahead, to remove empty space at the beginning
        names.push(result[0].trim())
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