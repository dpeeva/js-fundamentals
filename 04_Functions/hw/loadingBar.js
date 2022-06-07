function solve(n) {
    const percentagesLimit = n / 10
    let percentage = ""
    for (let i = 0; i < percentagesLimit; i++) {
        percentage += "%"
    }
    const dotsLimit = 10 - percentagesLimit
    let dots = ""
    for (let i = 0; i < dotsLimit; i++) {
        dots += "."
    }
    if (n === 100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    } else {
        console.log(`${n}% [${percentage}${dots}]`)
        console.log("Still loading...")
    }
}

solve(30)
// 30% [%%%.......]
// Still loading...

solve(50)
// 50% [%%%%%.....]
// Still loading...

solve(100)
// 100% Complete!
// [%%%%%%%%%%]