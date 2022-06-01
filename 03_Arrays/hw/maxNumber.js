function solve(arr) {
    const max = []
    const isMax = (max, arr) => {
        let isMax = true
        arr.map(n => {
            if (max <= n) {
                isMax = false
                return isMax
            }
        })
        return isMax
    }
    arr.map((n, i) => {
        if (isMax(n, arr.slice(i + 1))) {
            max.push(n)
        }
    })

    console.log(max.join(" "))
}

solve([1, 4, 3, 2]) // 4 3 2
solve([14, 24, 3, 19, 15, 17]) // 24 19 17
solve([41, 41, 34, 20]) // 41 34 20
solve([27, 19, 42, 2, 13, 45, 48]) // 48