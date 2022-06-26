function solve(input) {
    const commands = input.slice(1)
    const days = []

    let counter = 1

    for (let i = 0; i < commands.length - 2; i += 3) {
        days.push({
            index: counter,
            town: commands[i],
            income: Number(commands[i + 1]),
            expenses: Number(commands[i + 2])
        })
        counter++
    }

    let revised = {}
    const daysRevised = days.map(day => {
        let income = day.income
        let expenses = day.expenses

        if (day.index % 3 === 0 && day.index % 5 === 0) {
            // raining - every 5th city => -10% of money, no special event
            // -10% income
            income = day.income - day.income * 0.1
        } else if (day.index % 3 === 0) {
            // special event - every third city => +50% over costs
            // +50% expenses
            expenses = day.expenses + day.expenses * 0.5
        } if (day.index % 5 === 0) {
            // raining - every 5th city => -10% of money
            // -10% income
            income = day.income - day.income * 0.1
        }

        let profit = income - expenses
        return revised = {
            town: day.town,
            income: income,
            expenses: expenses,
            profit: profit
        }
    })

    // days.map(day => console.log(day))

    daysRevised.map(day => console.log(
        `In ${day.town} Burger Bus earned ${(day.profit).toFixed(2)} leva.`
    ))

    const totalProfit = daysRevised.map(a => a.profit).reduce((a, b) => a + b, 0)
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

solve([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"
])
// In Sofia Burger Bus earned 682.17 leva.
// In Plovdiv Burger Bus earned 1672.94 leva.
// In Burgas Burger Bus earned 1460.55 leva.
// Burger Bus total profit: 3815.66 leva.

solve([
    "5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"
])
// In Lille Burger Bus earned 1025.40 leva.
// In Rennes Burger Bus earned 860.40 leva.
// In Reims Burger Bus earned -78.28 leva.
// In Bordeaux Burger Bus earned 4274.90 leva.
// In Montpellier Burger Bus earned 322.25 leva.
// Burger Bus total profit: 6404.67 leva.
