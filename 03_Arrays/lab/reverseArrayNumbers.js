function solve(n, arr) {
    const newArr = arr.slice(0, n)
    const reversed = []
    for (let i = n; i >= 0; i--) {
        reversed.push(newArr[i])
    }
    console.log(reversed.join(" "))
}

solve(3, [10, 20, 30, 40, 50]) // 30 20 10
solve(4, [-1, 20, 99, 5]) // 5 99 20 -1
solve(2, [66, 43, 75, 89, 47]) // 43 66