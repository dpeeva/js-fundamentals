function solve(arr) {
    const clear = []
    let index = -1
    arr.map(n => {
        index = clear.indexOf(n)
        if (index == -1) {
            clear.push(n)
        }
    })

    console.log(clear.join(" "))
}

solve([1, 2, 3, 4]) // 1 2 3 4
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]) // 7 8 9 2 3 4 1
solve([20, 8, 12, 13, 4, 4, 8, 5]) // 20 8 12 13 4 5