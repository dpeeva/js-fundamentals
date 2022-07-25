function solve(input) {
    const text = input[0]
    const pattern = /(?<wrap>\||#)(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,})\1/g
    let result = pattern.exec(text)

    let calories = 0
    const foods = []

    while (result !== null) {
        calories += Number(result.groups.calories)
        foods.push({
            name: result.groups.name,
            date: result.groups.date,
            calories: result.groups.calories
        })
        result = pattern.exec(text)
    }

    console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`)
    foods.map(
        item => console.log(`Item: ${item.name}, Best before: ${item.date}, Nutrition: ${item.calories}`)
    )
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
// You have food to last you for: 2 days!
// Item: Bread, Best before: 19/03/21, Nutrition: 4000
// Item: Apples, Best before: 08/10/20, Nutrition: 200
// Item: Carrots, Best before: 06/08/20, Nutrition: 500

solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])
// You have food to last you for: 9 days!
// Item: Fish, Best before: 24/12/20, Nutrition: 8500
// Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000
// Item: Milk, Best before: 05/09/20, Nutrition: 2000

solve([
    'Hello|#Invalid food#19/03/20#450|$5*(@'
])
// You have food to last you for: 0 days!