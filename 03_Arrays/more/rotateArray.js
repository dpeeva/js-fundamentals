function solve(input) {
    let arr = input.slice(0, input.length - 1)
    const iterations = input[input.length - 1]
    let last = 0

    for (let i = 0; i < iterations; i++) {
        last = arr.pop()
        arr.unshift(last)
    }
    console.log(arr.join(" "))
}

solve(['1', '2', '3', '4', '2']) // 3 4 1 2
// 4 1 2 3
// 3 4 1 2

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']) // Orange Coconut Apple Banana
// Apple Banana Orange Coconut
// Coconut Apple Banana Orange
// Orange Coconut Apple Banana
// Banana Orange Coconut Apple
// Apple Banana Orange Coconut

// Coconut Apple Banana Orange
// Orange Coconut Apple Banana
// Banana Orange Coconut Apple
// Apple Banana Orange Coconut
// Coconut Apple Banana Orange

// Orange Coconut Apple Banana
// Banana Orange Coconut Apple
// Apple Banana Orange Coconut
// Coconut Apple Banana Orange
// Orange Coconut Apple Banana