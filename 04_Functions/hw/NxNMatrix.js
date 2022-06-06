function solve(n) {
    let row = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row.push(n)
        }
        console.log(row.join(" "))
        row = []
    }
}

solve(3)
// 3 3 3
// 3 3 3
// 3 3 3

solve(7)
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7

solve(2)
// 2 2
// 2 2