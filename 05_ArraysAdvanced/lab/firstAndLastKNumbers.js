function solve(input) {
    const k = Number(input.shift())
    const first = input.slice(0, k)
    const last = input.slice(input.length - k)
    console.log(first.join(" "))
    console.log(last.join(" "))
}

solve([2, 7, 8, 9])
// 7 8
// 8 9

solve([3, 6, 7, 8, 9])
// 6 7 8
// 7 8 9