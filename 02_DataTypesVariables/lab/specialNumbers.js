function solve(n) {
    const isSpecial = (n) => {
        const numbers = [...(n + "")].map(Number)
        let sum = 0
        numbers.map(n => sum += n)
        return sum === 5 || sum === 7 || sum === 11
    }

    for (let i = 1; i <= n; i++) {
        console.log(isSpecial(i) ? `${i} -> True` : `${i} -> False`)
    }
}

solve(15)
// 1 -> False
// 2 -> False
// 3 -> False
// 4 -> False
// 5 -> True
// 6 -> False
// 7 -> True
// 8 -> False
// 9 -> False
// 10 -> False
// 11 -> False
// 12 -> False
// 13 -> False
// 14 -> True
// 15 -> False

solve(20)
// 1 -> False
// 2 -> False
// 3 -> False
// 4 -> False
// 5 -> True
// 6 -> False
// 7 -> True
// 8 -> False
// 9 -> False
// 10 -> False
// 11 -> False
// 12 -> False
// 13 -> False
// 14 -> True
// 15 -> False
// 16 -> True
// 17 -> False
// 18 -> False
// 19 -> False
// 20 -> False