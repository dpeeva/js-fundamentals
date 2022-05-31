function solve(input) {
    let sum = 0;
    ((input + "").split("")).map(n => {
        return sum += parseInt(n)
    })
    console.log(sum)
}

solve(245678) // 32
solve(97561) // 28
solve(543) // 12