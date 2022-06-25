function solve(input) {
    const prices = {
        bitcoin: 11949.16,
        goldGram: 67.51
    }

    const bitcoins = []
    let availableGold = 0
    let dayFirstPurchase = 0
    let day = 0
    let money = 0
    let cost = 0

    input.map((gold, i) => {
        day = i + 1
        if (day % 3 === 0) {
            availableGold = gold - gold * 0.3
        } else {
            availableGold = gold
        }
        money += prices.goldGram * availableGold
        if (money >= prices.bitcoin) {
            dayFirstPurchase = dayFirstPurchase > 0 ? dayFirstPurchase : day
            bitcoinsBought = Math.floor(money / prices.bitcoin)
            bitcoins.push(bitcoinsBought)
            cost = bitcoinsBought * prices.bitcoin
            money -= cost
        }
    })

    const bitcoinsTotal = bitcoins.reduce((a, b) => a + b, 0)

    console.log(`Bought bitcoins: ${bitcoinsTotal}`)
    if (bitcoinsTotal > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstPurchase}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100, 200, 300])
// Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

solve([50, 100])
// Bought bitcoins: 0
// Money left: 10126.50 lv.

solve([3124.15, 504.212, 2511.124])
// Bought bitcoins: 30
// Day of the first purchased bitcoin: 1
// Money left: 5144.11 lv.