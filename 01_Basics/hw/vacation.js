function solve(group, groupType, day) {
    const prices = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16
        },
        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50
        }
    }
    let total = 0
    let discount = 0
    let people = group

    if (groupType === "Students") {
        if (group >= 30) {
            discount = 0.15
        }
    }
    if (groupType === "Business") {
        if (group >= 100) {
            people -= 10
        }
    }
    if (groupType === "Regular") {
        if (group >= 10 && group <= 20) {
            discount = 0.05
        }
    }

    total = people * prices[groupType][day]
    total -= total * discount
    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(
    30,
    "Students",
    "Sunday"
) // Total price: 266.73

solve(
    40,
    "Regular",
    "Saturday"
) // Total price: 800.00