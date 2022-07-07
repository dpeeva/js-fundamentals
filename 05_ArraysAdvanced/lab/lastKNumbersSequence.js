function solve(n, k) {
    let sum = 0
    const arr = [1]
    const calculateSum = (arr) => {
        const startAt = arr.length - k >= 0 ? arr.length - k : 0
        let slice = arr.slice(startAt)
        return slice.reduce((a, b) => a + b, 0)
    }
    for (let i = 1; i < n; i++) {
        sum = calculateSum(arr)
        arr.push(sum)
    }
    console.log(arr.join(" "))
}

solve(6, 3) // 1 1 2 4 7 13
solve(8, 2) // 1 1 2 3 5 8 13 21