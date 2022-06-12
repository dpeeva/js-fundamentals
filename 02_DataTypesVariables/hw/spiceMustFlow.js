function solve(startingYield) {
    let yield = startingYield
    let days = 0
    let spicesExtracted = 0

    while (yield >= 100) {
        days++

        spicesExtracted += yield
        spicesExtracted -= 26 // consumed at the end of day
        yield -= 10
        if (yield < 100) {
            spicesExtracted -= 26
        }
    }
    console.log(days)
    console.log(spicesExtracted)
}

solve(111)
// 2
// 134

solve(450)
// 36
// 8938