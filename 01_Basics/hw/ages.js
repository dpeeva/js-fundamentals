function solve(input) {
    if (input < 0) {
        console.log(`out of bounds`)
    } else {
        if (input <= 2) {
            console.log(`baby`)
        }
        if (input > 2 && input <= 13) {
            console.log(`child`)
        }
        if (input > 13 && input <= 19) {
            console.log(`teenager`)
        }
        if (input > 19 && input <= 65) {
            console.log(`adult`)
        }
        if (input > 65) {
            console.log(`elder`)
        }
    }
}

solve(20) // adult
solve(1) // baby
solve(100) // elder
solve(-1) // out of bounds