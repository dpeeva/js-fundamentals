function solve(n) {
    let count = n
    let currentLine = []
    let index = 1

    while (count > 0) {
        for (let i = 1; i <= index; i++) {
            currentLine.push(index)
        }
        console.log(currentLine.join(" "))
        currentLine = []
        index++
        count--
    }
}

solve(3)
// 1
// 2 2 
// 3 3 3

solve(5)
// 1
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

solve(6)
// 1
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6