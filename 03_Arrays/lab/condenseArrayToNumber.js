function solve(input) {
    let arr = input.slice()

    let a = 0
    let b = 0

    const getSums = (arr) => {
        const sums = []
        for (let i = 0; i < arr.length - 1; i++) {
            a = arr[i]
            b = arr[i + 1]
            sums.push(a + b)
        }
        return sums
    }

    while (arr.length > 1) {
        arr = getSums(arr)
    }

    console.log(arr.join(""))
}


solve([2, 10, 3]) // 25
solve([5, 0, 4, 1, 2]) // 35
solve([1]) // 1