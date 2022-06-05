function solve(m, n) {
    let index = m
    while (index >= n) {
        console.log(index)
        index--
    }
}

solve(6, 2)
// 6
// 5
// 4
// 3
// 2

solve(4, 1)
// 4
// 3
// 2
// 1