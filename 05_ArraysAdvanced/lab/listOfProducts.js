function solve(input) {
    input.sort()
    input.map((item, i) => console.log(`${i + 1}.${item}`))
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
// 1.Apples
// 2.Onions
// 3.Potatoes
// 4.Tomatoes

solve(['Watermelon', 'Banana', 'Apples'])
// 1.Apples
// 2.Banana
// 3.Watermelon

// Borderline cases
solve(['Watermelon', 'watermelon', 'Banana', 'Apples', 'Waater'])
// 1.Apples
// 2.Banana
// 3.Waater
// 4.Watermelon
// 5.watermelon