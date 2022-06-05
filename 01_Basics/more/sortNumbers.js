// Solution 1
function solve(n1, n2, n3) {
    const arr = [n1, n2, n3]
    const sortedArr = []
    let max = 0
    let indexOfMax = 0

    for (let i = 0; i < arguments.length; i++) {
        max = Math.max(...arr)
        console.log(max)
        indexOfMax = arr.indexOf(max)
        arr.splice(indexOfMax, 1)
    }
}

// Solution 2
function solve(n1, n2, n3) {
    const arr = []
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    const sortedArr = []
    let max = 0
    let indexOfMax = 0

    for (let i = 0; i < arguments.length; i++) {
        max = Math.max(...arr)
        console.log(max)
        indexOfMax = arr.indexOf(max)
        arr.splice(indexOfMax, 1)
    }

    console.log(sortedArr.join(" "))
}

solve(2, 1, 3)
// 3
// 2
// 1

solve(-2, 1, 3)
// 3
// 1
// -2

solve(0, 0, 2)
// 2
// 0
// 0