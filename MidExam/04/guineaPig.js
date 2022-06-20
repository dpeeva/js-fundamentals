function solve(input) {
    let food = Number(input[0])
    let hay = Number(input[1])
    let cover = Number(input[2])
    const weight = Number(input[3])

    for (let i = 1; i <= 30; i++) {
        food -= 0.3
        if (food <= 0) {
            break
        }

        if (i % 2 === 0) {
            hay -= food * 0.05
            if (hay <= 0) {
                break
            }
        }
        if (i % 3 === 0) {
            cover -= weight / 3
            if (cover <= 0) {
                break
            }
        }
    }

    const remaining = {
        food: food.toFixed(2),
        hay: hay.toFixed(2),
        cover: cover.toFixed(2)
    }

    // Not using food, hay and cover directly, as BigDecimal can be received which causes wrong results on following check: 1.2212453270876722e-15 is bigger than zero, but equals 0.00 when apply .toFixed(2)
    if (Number(remaining.food) <= 0 || Number(remaining.hay) <= 0 || Number(remaining.cover) <= 0) {
        console.log(`Merry must go to the pet store!`)
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${remaining.food}, Hay: ${remaining.hay}, Cover: ${remaining.cover}.`)
    }
}

solve([
    "10",
    "5",
    "5.2",
    "1"
]) // Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87

solve([
    "1",
    "1.5",
    "3",
    "1.5"
]) // Merry must go to the pet store!

solve([
    "9",
    "5",
    "5.2",
    "1"
]) // Merry must go to the pet store!