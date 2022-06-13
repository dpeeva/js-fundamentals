function solve(input) {
    const days = Number(input[0])
    const dailyPlunder = Number(input[1])
    const expected = Number(input[2])

    let plunder = 0

    for (let i = 1; i <= days; i++) {
        plunder += dailyPlunder

        // every 3rd day => +50% of daily plunder
        if (i % 3 === 0) {
            plunder += dailyPlunder * 0.5
        }
        // every 5th day => -30% of total plunder
        if (i % 5 === 0) {
            plunder -= plunder * 0.3
        }
    }

    if (plunder >= expected) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`)
    }
    if (plunder < expected) {
        const percentage = plunder / expected * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

solve([
    "5",
    "40",
    "100"
]) // Ahoy! 154.00 plunder gained.

solve([
    "10",
    "20",
    "380"
]) // Collected only 36.29% of the plunder.